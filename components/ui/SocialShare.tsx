"use client";

import React from 'react';
import { Share2, Facebook, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import Link from 'next/link';

interface SocialShareProps {
    url: string;
    title: string;
}

export const SocialShare: React.FC<SocialShareProps> = ({ url, title }) => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    const shareLinks = [
        {
            name: 'WhatsApp',
            icon: MessageCircle,
            href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
            color: 'bg-green-500 hover:bg-green-600'
        },
        {
            name: 'Facebook',
            icon: Facebook,
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            color: 'bg-blue-600 hover:bg-blue-700'
        },
        {
            name: 'Twitter',
            icon: Twitter,
            href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
            color: 'bg-sky-500 hover:bg-sky-600'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
            color: 'bg-blue-700 hover:bg-blue-800'
        }
    ];

    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 py-6 border-t border-gray-100 dark:border-slate-800 mt-8">
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-medium">
                <Share2 className="w-5 h-5" />
                <span>Bagikan:</span>
            </div>
            <div className="flex gap-3">
                {shareLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all transform hover:scale-110 ${link.color}`}
                        title={`Share on ${link.name}`}
                    >
                        <link.icon className="w-5 h-5" />
                    </Link>
                ))}
            </div>
        </div>
    );
};
