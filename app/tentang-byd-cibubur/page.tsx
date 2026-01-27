import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Layout } from '@/components/layout/Layout';
import { Metadata } from 'next';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { SocialShare } from '@/components/ui/SocialShare';

// Helper to parse frontmatter (Simple Regex)
function getPostContent() {
    const folder = path.join(process.cwd(), 'content');
    const file = path.join(folder, 'tentang-byd-cibubur.md');
    const content = fs.readFileSync(file, 'utf8');

    // Split frontmatter
    const parts = content.split('---');
    // parts[0] is empty, parts[1] is frontmatter, parts[2] is content
    const frontMatterStr = parts[1] || '';
    const contentBody = parts.slice(2).join('---').trim();

    // Parse frontmatter lines key: value
    const data: any = {};
    frontMatterStr.split('\n').forEach(line => {
        const [key, ...value] = line.split(':');
        if (key && value) {
            data[key.trim()] = value.join(':').trim().replace(/^['"](.*)['"]$/, '$1'); // remove quotes
        }
    });

    return {
        data,
        content: contentBody
    };
}

export const generateMetadata = (): Metadata => {
    const { data } = getPostContent();
    return {
        title: data.title || 'Tentang BYD Cibubur',
        description: data.description || 'Informasi lengkap tentang Dealer Resmi BYD Cibubur.',
        openGraph: {
            title: data.title,
            description: data.description,
            type: 'article',
        }
    };
};

export default function SeoArticlePage() {
    const { data, content } = getPostContent();

    return (
        <Layout>
            <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-12 md:py-20 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                    {/* Back Button */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-bold mb-8 hover:underline"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Kembali ke Beranda
                    </Link>

                    {/* Article Header */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-slate-800 mb-8 animate-fade-in">
                        <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                            {data.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-slate-800 pb-8 mb-8">
                            {data.date && (
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-teal-500" />
                                    <span>{data.date}</span>
                                </div>
                            )}
                            {data.author && (
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4 text-teal-500" />
                                    <span>{data.author}</span>
                                </div>
                            )}
                        </div>

                        {/* Article Content */}
                        <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white prose-a:text-teal-600 dark:prose-a:text-teal-400 hover:prose-a:text-teal-500 prose-img:rounded-xl prose-img:shadow-lg">
                            <ReactMarkdown>
                                {content}
                            </ReactMarkdown>
                        </article>
                    </div>

                    {/* Social Share */}
                    <SocialShare
                        url={`https://bydcibubur.co.id/tentang-byd-cibubur`}
                        title={data.title}
                    />

                    {/* CTA Section */}
                    <div className="bg-teal-600 dark:bg-teal-900/50 rounded-2xl p-8 md:p-12 text-center shadow-lg text-white">
                        <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                            Tertarik dengan Mobil Listrik BYD?
                        </h2>
                        <p className="text-teal-100 mb-8 text-lg max-w-2xl mx-auto">
                            Kunjungi showroom kami di Cibubur atau jadwalkan test drive sekarang juga.
                            Dapatkan penawaran spesial dan promo terbaik.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="/#contact"
                                className="bg-white text-teal-700 font-bold py-3 px-8 rounded-full hover:bg-teal-50 transition-colors"
                            >
                                Hubungi Kami
                            </Link>
                            <Link
                                href="/pricelist"
                                className="bg-teal-700 border border-teal-500 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-800 transition-colors"
                            >
                                Lihat Daftar Harga
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
