import { supabaseServer } from './supabaseClient'
import { CarModel, Variant, DealerInfo } from '@/types'
import { BYD_MODELS } from '@/constants'
import { dealerData as defaultDealerData } from '@/data/dealer'

/**
 * Fetch pricing data from Supabase and merge with static model data
 * Used for SSG/ISR at build time and revalidation
 */
export async function getModelsWithPricing(): Promise<CarModel[]> {
    try {
        const { data: pricingData, error } = await supabaseServer
            .from('variants')
            .select('*')

        if (error) {
            console.error('Error fetching variants pricing:', error)
            return BYD_MODELS // Fallback to static data
        }

        if (!pricingData || pricingData.length === 0) {
            return BYD_MODELS // No pricing overrides, use static
        }

        // Merge pricing data with static models
        return BYD_MODELS.map(model => {
            const updatedVariants = model.variants.map(variant => {
                const dbRecord = pricingData.find(
                    (r: any) => r.model_id === model.id && r.variant_id === variant.id
                )

                if (dbRecord) {
                    return {
                        ...variant,
                        price: Number(dbRecord.price),
                        originalPrice: dbRecord.original_price ? Number(dbRecord.original_price) : undefined,
                        soldOut: dbRecord.is_sold_out ?? false
                    }
                }
                return variant
            })

            // Recalculate model starting price based on cheapest available variant
            const activeVariants = updatedVariants.filter(v => !v.soldOut && v.price > 0)
            const eligibleVariants = activeVariants.length > 0 ? activeVariants : updatedVariants

            if (eligibleVariants.length > 0) {
                const cheapestVariant = [...eligibleVariants].sort((a, b) => a.price - b.price)[0]
                return {
                    ...model,
                    variants: updatedVariants,
                    startingPrice: cheapestVariant.price,
                    originalPrice: cheapestVariant.originalPrice
                }
            }

            return { ...model, variants: updatedVariants }
        })
    } catch (err) {
        console.error('Unexpected error in getModelsWithPricing:', err)
        return BYD_MODELS
    }
}

/**
 * Get a single model with pricing by ID
 */
export async function getModelById(id: string): Promise<CarModel | null> {
    const models = await getModelsWithPricing()
    return models.find(m => m.id === id) || null
}

/**
 * Get a specific variant with pricing
 */
export async function getVariant(modelId: string, variantId: string): Promise<{ model: CarModel, variant: Variant } | null> {
    const model = await getModelById(modelId)
    if (!model) return null

    const variant = model.variants.find(v => v.id === variantId)
    if (!variant) return null

    return { model, variant }
}

/**
 * Fetch dealer info from Supabase
 * Used for SSG/ISR at build time
 */
export async function getDealerInfo(): Promise<DealerInfo> {
    try {
        const { data, error } = await supabaseServer
            .from('dealer_info')
            .select('*')
            .eq('id', 1)
            .single()

        if (error || !data) {
            console.error('Error fetching dealer info:', error)
            return defaultDealerData
        }

        return {
            salesName: data.sales_name,
            salesPhone: data.sales_phone,
            displayPhone: data.display_phone,
            dealerName: data.dealer_name,
            address: data.address,
            domain: data.domain,
            email: data.email,
            mapsUrl: data.maps_url
        }
    } catch (err) {
        console.error('Unexpected error in getDealerInfo:', err)
        return defaultDealerData
    }
}

/**
 * Get all model IDs for static path generation
 */
export function getAllModelIds(): string[] {
    return BYD_MODELS.map(m => m.id)
}

/**
 * Get all model + variant combinations for static path generation
 */
export function getAllVariantPaths(): { modelId: string; variantId: string }[] {
    const paths: { modelId: string; variantId: string }[] = []

    BYD_MODELS.forEach(model => {
        model.variants.forEach(variant => {
            paths.push({
                modelId: model.id,
                variantId: variant.id
            })
        })
    })

    return paths
}
