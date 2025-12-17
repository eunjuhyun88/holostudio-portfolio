import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

import { useLanguage } from '@/components/LanguageContext';

export default function Products() {
    const { language } = useLanguage();
    
    const content = {
        en: {
            title: "Our Products",
            subtitle: "Building the infrastructure for the next generation of digital trust and value.",
            readStory: "Read the story"
        },
        ko: {
            title: "프로덕트",
            subtitle: "다음 세대의 디지털 신뢰와 가치를 위한 인프라를 구축합니다.",
            readStory: "스토리 보기"
        }
    };
    
    const products = [
        {
            id: 'aidguardian',
            name: 'AiD Guardian',
            path: 'AidGuardian',
            tagline: {
                en: 'Imagine if content safety was autonomous and instant.',
                ko: '콘텐츠 안전이 자율적이고 즉각적이라면 어떨까요?'
            },
            description: {
                en: 'Enterprise-grade safety and compliance engine for AI.',
                ko: 'AI를 위한 엔터프라이즈급 안전 및 규정 준수 엔진.'
            },
            theme: 'bg-[#0A0A0A] border-indigo-900/50 hover:border-indigo-500', 
            accent: 'text-indigo-400',
            glow: 'shadow-indigo-500/20 hover:shadow-indigo-500/40',
            bgGradient: 'from-indigo-900/20',
            image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/cc0228bec_2025-12-171042431.png'
        },
        {
            id: 'playarts',
            name: 'PlayArts',
            path: 'PlayArts',
            tagline: {
                en: 'Imagine if creators truly owned the value they generate.',
                ko: '창작자가 자신이 만든 가치를 진정으로 소유한다면 어떨까요?'
            },
            description: {
                en: 'The Proof-of-Creation protocol for verifiable AI media.',
                ko: '검증 가능한 AI 미디어를 위한 창작 증명 프로토콜.'
            },
            theme: 'bg-[#0A0A0A] border-lime-900/50 hover:border-lime-400',
            accent: 'text-lime-400',
            glow: 'shadow-lime-400/20 hover:shadow-lime-400/40',
            bgGradient: 'from-lime-900/20',
            image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/81cf8f3b2_2025-12-17105846.png'
        },
        {
            id: 'elememetal',
            name: 'EleMEMEtal',
            path: 'Elememetal',
            tagline: {
                en: 'Imagine if gaming assets were as liquid as elements.',
                ko: '게임 자산이 원소처럼 유동적이라면 어떨까요?'
            },
            description: {
                en: 'A competitive card battler built on elemental mechanics.',
                ko: '원소 메커니즘을 기반으로 한 경쟁 카드 배틀러.'
            },
            theme: 'bg-[#0A0A0A] border-orange-900/50 hover:border-orange-500',
            accent: 'text-orange-500',
            glow: 'shadow-orange-500/20 hover:shadow-orange-500/40',
            bgGradient: 'from-orange-900/20',
            image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/9692fcde2_2025-12-1463649.png'
        },
        {
            id: 'stockhoo',
            name: 'Stockhoo',
            path: 'Stockhoo',
            tagline: {
                en: 'Imagine if trading intelligence was actually intelligent.',
                ko: '트레이딩 정보가 실제로 지능적이라면 어떨까요?'
            },
            description: {
                en: 'Zone-based AI trading agent optimized via DPO.',
                ko: 'DPO로 최적화된 구간 기반 AI 트레이딩 에이전트.'
            },
            theme: 'bg-[#0A0A0A] border-emerald-900/50 hover:border-emerald-400',
            accent: 'text-emerald-400',
            glow: 'shadow-emerald-400/20 hover:shadow-emerald-400/40',
            bgGradient: 'from-emerald-900/20',
            image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/45cb06182_2025-12-17105903.png'
        }
    ];

    const c = content[language];

    return (
        <div className="min-h-screen bg-[#050505] text-white pt-24">
             <div className="max-w-[1600px] mx-auto px-4 md:px-8 mb-16 text-center">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                    {language === 'en' ? "Our " : "우리의 "}<span className="text-indigo-500">{c.title.replace("Our ", "").replace("우리의 ", "")}</span>
                </h1>
                <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                    {c.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-8 max-w-[1600px] mx-auto pb-24">
                {products.map((product, index) => (
                    <Link 
                        key={product.id} 
                        to={createPageUrl(product.path)}
                        className={`group relative min-h-[500px] p-8 md:p-12 flex flex-col justify-between overflow-hidden transition-all duration-500 rounded-3xl border ${product.theme} ${product.glow}`}
                    >
                        {/* Background Gradients */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
                        
                        {/* Content */}
                        <div className="relative z-20">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className={`text-2xl md:text-3xl font-bold tracking-tight ${product.accent}`}>
                                    {product.name}
                                </h3>
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 backdrop-blur-md group-hover:scale-110 transition-transform duration-300 group-hover:bg-white/10`}>
                                    <ArrowUpRight className="w-5 h-5 text-white" />
                                </div>
                            </div>
                            
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 max-w-xl text-white">
                                {product.tagline[language]}
                            </h2>
                            <p className="text-lg md:text-xl text-neutral-400 max-w-md font-light">
                                {product.description[language]}
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="relative z-20 mt-12 flex items-center gap-4">
                             <span className={`text-sm font-bold uppercase tracking-widest border-b border-current pb-1 ${product.accent} group-hover:text-white transition-colors`}>{c.readStory}</span>
                             <ArrowRight className={`w-4 h-4 ${product.accent} group-hover:translate-x-1 transition-all`} />
                        </div>

                        {/* Image Center/Bottom */}
                        <div className="absolute -bottom-10 -right-10 w-[80%] h-[80%] opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 pointer-events-none mix-blend-screen md:mix-blend-normal">
                            <img src={product.image} alt="" className="w-full h-full object-contain drop-shadow-2xl" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}