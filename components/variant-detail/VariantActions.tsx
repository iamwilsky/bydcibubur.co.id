'use client'
import React from 'react'
import { Download, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CarModel, Variant } from '@/types'
import { useModal } from '@/contexts/ModalContext'

interface VariantActionsProps {
    model: CarModel
    variant: Variant
    selectedColor: { name: string } | null
    handleDownloadBrochure: () => void
    handleShare: () => void
}

export const VariantActions: React.FC<VariantActionsProps> = ({ model, variant, selectedColor, handleDownloadBrochure, handleShare }) => {
    const { openModal } = useModal()

    return (
        <>
            <div className="hidden md:flex flex-col gap-4 pt-8 border-t border-gray-100 dark:border-slate-700">
                <Button
                    fullWidth
                    size="xl"
                    variant="primary"
                    onClick={() => openModal(`${model.name} - ${variant.name} (${selectedColor?.name})`)}
                    className="shadow-xl shadow-slate-900/10 dark:shadow-black/20 dark:bg-white dark:text-slate-900 dark:hover:bg-gray-200"
                >
                    Minta Penawaran Terbaik
                </Button>
                <div className="grid grid-cols-2 gap-4">
                    <Button
                        fullWidth
                        variant="outline"
                        onClick={handleDownloadBrochure}
                        className="flex items-center gap-2 justify-center py-4 dark:border-slate-600 dark:text-gray-300 dark:hover:bg-slate-800"
                    >
                        <Download className="w-4 h-4" /> E-Brochure
                    </Button>
                    <Button
                        fullWidth
                        variant="outline"
                        onClick={handleShare}
                        className="flex items-center gap-2 justify-center py-4 dark:border-slate-600 dark:text-gray-300 dark:hover:bg-slate-800"
                    >
                        <Share2 className="w-4 h-4" /> Bagikan
                    </Button>
                </div>
            </div>

            {/* Mobile View Hint */}
            <div className="md:hidden text-center bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-dashed border-gray-200 dark:border-slate-700">
                <p className="text-xs text-gray-400 font-medium">Gunakan tombol di bawah untuk terhubung dengan sales kami.</p>
            </div>
        </>
    )
}
