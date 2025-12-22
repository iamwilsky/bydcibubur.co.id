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
        keywords: [model.name, 'Harga ' + model.name, model.name + ' OTR', 'BYD Cibubur'],
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

    return (
        <Layout>
            <ModelDetailContent model={model} dealerInfo={dealerInfo} />
        </Layout>
    )
}
