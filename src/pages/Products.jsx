import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';
import Background3D from '@/components/Background3D';
import Starfield from '@/components/Starfield';

export default function Products() {
    const { language } = useLanguage();

    const products = useMemo(() => [
        {
            id: 'aidguardian',
            name: 'AiD Guardian',
            path: 'AidGuardian',
            tagline: {
                en: 'Imagine if content safety was autonomous and instant.',
                ko: '콘텐츠 안전이 자율적이고 즉각적으로 이루어진다면.'
            },
            description: {
                en: 'Enterprise-grade safety and compliance engine for AI.',
                ko: 'AI를 위한 엔터프라이즈급 안전 및 규정 준수 엔진.'
            },
            theme: 'bg-[#1e1b4b] text-indigo-100', // Indigo-950
            accent: 'text-indigo-400',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070'
        },
        {
            id: 'playarts',
            name: 'PlayArts',
            path: 'PlayArts',
            tagline: {
                en: 'Imagine if creators truly owned the value they generate.',
                ko: '창작자가 자신이 만든 가치를 진정으로 소유한다면.'
            },
            description: {
                en: 'The Proof-of-Creation protocol for verifiable AI media.',
                ko: '검증 가능한 AI 미디어를 위한 창작 증명(Proof-of-Creation) 프로토콜.'
            },
            theme: 'bg-[#1a2e05] text-lime-100', // Lime-950/Dark
            accent: 'text-[#ccff00]',
            image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1964'
        },
        {
            id: 'elememetal',
            name: 'EleMEMEtal',
            path: 'Elememetal',
            tagline: {
                en: 'Imagine if gaming assets were as liquid as elements.',
                ko: '게임 자산이 원소처럼 유동적이라면.'
            },
            description: {
                en: 'A competitive card battler built on elemental mechanics.',
                ko: '원소 메커니즘을 기반으로 구축된 경쟁형 카드 배틀 게임.'
            },
            theme: 'bg-[#2c1205] text-orange-100', // Orange-950
            accent: 'text-orange-500',
            image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=1974'
        },
        {
            id: 'stockhoo',
            name: 'Stockhoo',
            path: 'Stockhoo',
            tagline: {
                en: 'Imagine if trading intelligence was actually intelligent.',
                ko: '트레이딩 지능이 실제로 지능적이라면.'
            },
            description: {
                en: 'Zone-based AI trading agent optimized via DPO.',
                ko: 'DPO로 최적화된 구역 기반 AI 트레이딩 에이전트.'
            },
            theme: 'bg-[#022c22] text-emerald-100', // Emerald-950
            accent: 'text-emerald-400',
            image: 'https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&q=80&w=1964'
        }
    ], []);

    return (
        <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-indigo-500/30">
            {/* Visual State Management Layer - Unified with Company/Home */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
                <div className="absolute inset-0 opacity-40">
                    <Background3D />
                </div>
                <div className="absolute inset-0 opacity-50">
                    <Starfield density={300} speed={0.01} />
                </div>
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/5 to-transparent mix-blend-screen opacity-30" />
                 <motion.div 
                    animate={{ opacity: 0.05 }}
                    className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-0 mix-blend-overlay"
                 />
                 <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10" style={{ background: 'linear-gradient(to bottom, #050505 0%, transparent 15%, transparent 85%, #050505 100%)' }} />
            </div>

            <main className="relative z-10 pt-32 pb-24">
                 <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-24 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 uppercase"
                    >
                        {language === 'en' ? 'Our' : '우리의'} <span className="text-indigo-500">{language === 'en' ? 'Products' : '프로덕트'}</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        {language === 'en' 
                            ? 'Building the infrastructure for the next generation of digital trust and value.' 
                            : '차세대 디지털 신뢰와 가치를 위한 인프라를 구축합니다.'}
                    </motion.p>
                </div>

                {/* Desktop: Grid, Mobile: Horizontal Scroll */}
                <div className="flex md:grid md:grid-cols-2 overflow-x-auto md:overflow-visible snap-x snap-mandatory max-w-[1600px] mx-auto pb-6 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 no-scrollbar gap-4 md:gap-0">
                    {products.map((product, index) => (
                        <Link 
                            key={product.id} 
                            to={createPageUrl(product.path)}
                            className={`flex-shrink-0 w-[85vw] md:w-auto snap-center group relative min-h-[500px] md:min-h-[600px] p-8 md:p-16 flex flex-col justify-between overflow-hidden transition-all duration-500 border border-white/5 hover:border-white/10 ${product.theme} rounded-3xl md:rounded-none`}
                        >
                            {/* Background Hover Effect */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                            
                            {/* Content */}
                            <div className="relative z-20">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className={`text-2xl md:text-3xl font-bold tracking-tight ${product.accent}`}>
                                        {product.name}
                                    </h3>
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md group-hover:scale-110 transition-transform duration-300`}>
                                        <ArrowUpRight className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                                
                                <h2 className="text-3xl md:text-5xl font-black leading-[1.1] mb-6 max-w-xl tracking-tight">
                                    {product.tagline[language] || product.tagline.en}
                                </h2>
                                <p className="text-lg md:text-xl opacity-80 max-w-md font-light leading-relaxed">
                                    {product.description[language] || product.description.en}
                                </p>
                            </div>

                            {/* CTA */}
                            <div className="relative z-20 mt-12 flex items-center gap-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                 <span className="text-sm font-bold uppercase tracking-widest border-b border-current pb-1">
                                     {language === 'en' ? 'Read the story' : '자세히 보기'}
                                 </span>
                                 <ArrowRight className="w-4 h-4" />
                            </div>

                            {/* Image Overlay/Texture */}
                            <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none">
                                <img src={product.image} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" />
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}