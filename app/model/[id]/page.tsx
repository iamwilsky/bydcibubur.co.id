import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getModelById, getAllModelIds, getDealerInfo } from '@/lib/data'
import { Layout } from '@/components/layout/Layout'
import { ModelDetailContent } from './ModelDetailContent'

// ISR: Revalidate every 5 minutes
export const revalidate = 300

// Generate static paths for all models
export async function generateStaticParams() {
    const modelIds = await getAllModelIds()
    return modelIds.map((id) => ({
        id,
    }))
}

// Generate metadata for each model page
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params
    const model = await getModelById(id)
    const dealerInfo = await getDealerInfo()

    if (!model) {
        return { title: 'Model Not Found' }
    }

    return {
        title: `Harga ${model.name} OTR Cibubur - Spesifikasi & Promo Terbaru | ${dealerInfo.dealerName}`,
        description: `Dapatkan penawaran terbaik ${model.name} di BYD Cibubur. Jarak tempuh ${model.summaryRange}. Cicilan ringan, test drive tersedia. Hubungi ${dealerInfo.salesName}.`,
        keywords: [model.name, 'Harga ' + model.name, model.name + ' OTR', 'BYD Cibubur', `Promo ${model.name} Cibubur`],
        alternates: {
            canonical: `https://bydcibubur.co.id/model/${model.id}`,
        },
        openGraph: {
            title: `${model.name} | ${dealerInfo.dealerName}`,
            description: model.description,
            images: [model.heroImage],
        },
    }
}

export default async function ModelDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const model = await getModelById(id)
    const dealerInfo = await getDealerInfo()

    if (!model) {
        notFound()
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Car',
        name: model.name,
        image: `https://bydcibubur.co.id${model.heroImage}`,
        description: model.description,
        brand: {
            '@type': 'Brand',
            name: 'BYD',
        },
        offers: {
            '@type': 'Offer',
            url: `https://bydcibubur.co.id/model/${model.id}`,
            priceCurrency: 'IDR',
            price: model.startingPrice,
            itemCondition: 'https://schema.org/NewCondition',
            availability: 'https://schema.org/InStock',
            seller: {
                '@type': 'AutoDealer',
                name: dealerInfo.dealerName,
            },
        },
    }

    return (
        <Layout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ModelDetailContent model={model} dealerInfo={dealerInfo} />
        </Layout>
    )
}
