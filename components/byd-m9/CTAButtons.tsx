'use client';

import React from 'react';
import { useModal } from '@/contexts/ModalContext';
import { ArrowRight, MessageCircle, Calendar, FileText } from 'lucide-react';

interface CTAButtonProps {
    text: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'sales' | 'booking';
    className?: string;
    modelContext?: string;
    icon?: React.ElementType;
}

export const M9CTAButton: React.FC<CTAButtonProps> = ({
    text,
    variant = 'primary',
    className = '',
    modelContext = 'BYD M9',
    icon: Icon
}) => {
    const { openModal } = useModal();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        // Pass the context to pre-fill the modal
        openModal(modelContext);
    };

    const baseClasses = "transition-all duration-300 font-bold flex items-center justify-center gap-2 cursor-pointer";

    let variantClasses = "";
    switch (variant) {
        case 'primary':
            variantClasses = "bg-teal-600 text-white hover:bg-teal-700 shadow-lg hover:shadow-teal-500/30 rounded-full";
            break;
        case 'secondary':
            variantClasses = "bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-slate-500/30 rounded-full";
            break;
        case 'outline':
            variantClasses = "bg-transparent border-2 border-slate-900 text-slate-900 hover:bg-slate-50 rounded-full";
            break;
        case 'booking':
            variantClasses = "bg-white text-teal-900 hover:bg-gray-100 shadow-lg rounded-full";
            break;
    }

    // Combine base, variant, and custom classes
    // Note: custom className can override defaults if needed
    const finalClasses = `${baseClasses} ${variantClasses} ${className}`;

    return (
        <button onClick={handleClick} className={finalClasses}>
            {text}
            {Icon && <Icon className="w-4 h-4 ml-1" />}
        </button>
    );
};
