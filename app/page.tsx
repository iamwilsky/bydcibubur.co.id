import { getModelsWithPricing, getDealerInfo } from '@/lib/data'
import { Layout } from '@/components/layout/Layout'
import { HomeHero } from '@/components/home/HomeHero'
import { HomeModelShowcase } from '@/components/home/HomeModelShowcase'
import { HomeDealerIntro } from '@/components/home/HomeDealerIntro'
import { HomeServices } from '@/components/home/HomeServices'
import { HomeTestimonials } from '@/components/home/HomeTestimonials'
import { HomeSalesProfile } from '@/components/home/HomeSalesProfile'
import { HomeLocation } from '@/components/home/HomeLocation'
import { HomeAreaServed } from '@/components/home/HomeAreaServed'
import { HomeFAQ } from '@/components/home/HomeFAQ'
import { HomeWhyUs } from '@/components/home/HomeWhyUs'
import { VisitorTracker } from '@/components/utils/VisitorTracker'

// ISR: Revalidate every 5 minutes
export const revalidate = 300

export default async function HomePage() {
    // Fetch data at build time / revalidation
    const models = await getModelsWithPricing()

    return (
        <Layout>
            <div className="animate-fade-in">
                {/* Hero Slider Section */}
                <HomeHero initialModels={models} />

                {/* Model Showcase Section */}
                <HomeModelShowcase initialModels={models} />

                {/* Dealer Introduction Section - NEW for SEO */}
                <HomeDealerIntro />

                {/* 3S Services Section */}
                <HomeServices />

                {/* Customer Testimonials - NEW for SEO with Review Schema */}
                <HomeTestimonials />

                {/* Sales Profile Section - NEW for Lead Generation */}
                <HomeSalesProfile />

                {/* Location & Map Section */}
                <HomeLocation />

                {/* Area Served Section - NEW for Local SEO */}
                <HomeAreaServed />

                {/* FAQ Section with FAQPage Schema */}
                <HomeFAQ />

                {/* Why Us / Credentials Section */}
                <HomeWhyUs />
            </div>

            {/* Client-side visitor tracking */}
            <VisitorTracker />
        </Layout>
    )
}
