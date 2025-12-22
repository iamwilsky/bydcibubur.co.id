'use client'

import React from 'react'
import { CarModel, DealerInfo } from '@/types'

import { ModelHero } from '@/components/model-detail/ModelHero'
import { ModelKeyStats } from '@/components/model-detail/ModelKeyStats'
import { ModelSpecsGrid } from '@/components/model-detail/ModelSpecsGrid'
import { ModelFeaturesTabs } from '@/components/model-detail/ModelFeaturesTabs'
import { ModelGallery } from '@/components/model-detail/ModelGallery'
import { ModelFAQ } from '@/components/model-detail/ModelFAQ'
import { ModelVariantsList } from '@/components/model-detail/ModelVariantsList'
import { ModelRelatedList } from '@/components/model-detail/ModelRelatedList'
import { ModelVideo } from '@/components/model-detail/ModelVideo'
import { ModelReviews } from '@/components/model-detail/ModelReviews'

interface Props {
    model: CarModel
    dealerInfo: DealerInfo
}

export function ModelDetailContent({ model, dealerInfo }: Props) {
    // Helper to find best specs across variants for the Hero Stats Bar
    const getBestSpecs = () => {
        // 1. Max Range: Parse "650 km" to 650 and find max
        const maxRangeVariant = [...model.variants].sort((a, b) => {
            const rangeA = parseInt(a.battery.range.replace(/\D/g, '')) || 0
            const rangeB = parseInt(b.battery.range.replace(/\D/g, '')) || 0
            return rangeB - rangeA
        })[0]

        // 2. Fastest Acceleration: Parse "3.8 s" to 3.8 and find min
        const fastAccelVariant = [...model.variants].sort((a, b) => {
            const accelA = parseFloat(a.performance.acceleration.replace(/[^\d.]/g, '')) || 100
            const accelB = parseFloat(b.performance.acceleration.replace(/[^\d.]/g, '')) || 100
            return accelA - accelB
        })[0]

        // 3. Best Powertrain: Show AWD if available, else show the first one
        const hasAWD = model.variants.some(v => v.powertrain.includes('AWD'))

        return {
            range: maxRangeVariant?.battery.range || model.summaryRange,
            acceleration: fastAccelVariant?.performance.acceleration || '-',
            powertrain: hasAWD ? 'AWD' : model.variants[0].powertrain,
            charging: model.battery.charging.dc.split(' ')[0]
        }
    }

    const heroStats = getBestSpecs()

    return (
        <div className="pb-24 md:pb-0 bg-white dark:bg-slate-900 transition-colors duration-300">

            {/* Hero Section */}
            <ModelHero model={model} />

            {/* Key Stats Bar */}
            <ModelKeyStats stats={heroStats} />

            {/* Variants List (Pricing) */}
            <ModelVariantsList model={model} />

            {/* Technical Specs Grid */}
            <ModelSpecsGrid model={model} />

            {/* Features Tabs */}
            <ModelFeaturesTabs model={model} />

            {/* Video Section */}
            <ModelVideo model={model} />

            {/* Gallery */}
            <ModelGallery model={model} />

            {/* Reviews Section */}
            <ModelReviews model={model} />

            {/* Model Specific FAQ */}
            <ModelFAQ model={model} />

            {/* Related Models */}
            <ModelRelatedList currentModelId={model.id} />

        </div>
    )
}
