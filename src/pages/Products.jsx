import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';
import Background3D from '@/components/Background3D';
import CosmicBackground from '@/components/CosmicBackground';
import MouseGlowText from '@/components/MouseGlowText';

export default function Products() {
    const { language } = useLanguage();

    const products = useMemo(() => [
        {
            id: 'aidguardian',
            name: 'AiD Guardian',
            path: 'AidGuardian',
            tagline: {
                en: 'Automated Compliance & Safety Layer',
                ko: '자동화된 컴플라이언스 및 안전 레이어'
            },
            description: {
                en: 'Protecting platforms from liability. <10ms latency API for filtering toxic, NSFW, and copyrighted AI content.',
                ko: '플랫폼 리스크 방어. 10ms 미만의 초저지연 API로 유해 콘텐츠 및 저작권 침해를 실시간으로 필터링합니다.'
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
                en: 'Verifiable IP Provenance Protocol',
                ko: '검증 가능한 IP 출처 증명 프로토콜'
            },
            description: {
                en: 'Turning generation into ownership. Cryptographic Proof-of-Creation for AI assets to ensure attribution and royalties.',
                ko: '생성을 소유권으로 전환합니다. AI 자산을 위한 암호학적 창작 증명(PoC)으로 귀속과 로열티를 보장합니다.'
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
                en: 'On-Chain Asset Economy Showcase',
                ko: '온체인 자산 경제 쇼케이스'
            },
            description: {
                en: 'A battle-tested environment for our protocol. High-velocity trading and verified asset generation in a competitive gaming economy.',
                ko: '프로토콜의 실증 환경. 경쟁적 게임 경제 내에서 검증된 자산 생성과 고속 거래를 시연합니다.'
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
                en: 'Verified Market Intelligence',
                ko: '검증된 시장 인텔리전스'
            },
            description: {
                en: 'Eliminating signal noise. AI agents that verify trader reputation and profit history on-chain for trusted market data.',
                ko: '시그널 노이즈 제거. 온체인 수익 내역과 평판을 검증하는 AI 에이전트로 신뢰할 수 있는 시장 데이터를 제공합니다.'
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
                <div className="absolute inset-0 opacity-30">
                    <CosmicBackground />
                </div>
                <div className="absolute inset-0 opacity-90">
                    <Background3D />
                </div>
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-[#050505]/80 to-[#050505] opacity-90" />
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/5 to-transparent mix-blend-screen opacity-30" />
                 <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10" style={{ background: 'linear-gradient(to bottom, #050505 0%, transparent 15%, transparent 85%, #050505 100%)' }} />
                
                {/* Sci-Fi Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
                
                {/* HUD Corners */}
                <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-white/10 rounded-tl-3xl m-8" />
                <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-white/10 rounded-tr-3xl m-8" />
                <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-white/10 rounded-bl-3xl m-8" />
                <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-white/10 rounded-br-3xl m-8" />
            </div>

            <main className="relative z-10 pt-32 pb-24">
                 <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-24 text-center">
                     <motion.h1 
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                     >
                         {language === 'en' ? 'Our' : '우리의'} <span className="text-indigo-500 drop-shadow-[0_0_25px_rgba(99,102,241,0.6)]">{language === 'en' ? 'Products' : '프로덕트'}</span>
                     </motion.h1>
                     <motion.p 
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.1 }}
                         className="text-base md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed"
                     >
                         {language === 'en' 
                             ? 'Building the infrastructure for the next generation of digital trust and value.' 
                             : '차세대 디지털 신뢰와 가치를 위한 인프라를 구축합니다.'}
                     </motion.p>
                 </div>

                {/* Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1600px] mx-auto gap-4 md:gap-0 px-4 md:px-0">
                    {products.map((product, index) => (
                        <Link 
                            key={product.id} 
                            to={createPageUrl(product.path)}
                            className={`group relative min-h-[400px] md:min-h-[600px] p-6 md:p-16 flex flex-col justify-between overflow-hidden transition-all duration-500 border border-white/5 hover:border-white/10 ${product.theme} rounded-3xl md:rounded-none`}
                        >
                            {/* Background Hover Effect */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                            
                            {/* Content */}
                            <div className="relative z-20">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className={`text-xl md:text-3xl font-bold tracking-tight ${product.accent}`}>
                                    {product.name}
                                </h3>
                                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md group-hover:scale-110 transition-transform duration-300`}>
                                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                </div>
                            </div>

                            <h2 className="text-2xl md:text-4xl font-black leading-[1.1] mb-6 max-w-xl tracking-tight">
                                {product.tagline[language] || product.tagline.en}
                            </h2>
                            <p className="text-base md:text-xl opacity-80 max-w-md font-light leading-relaxed">
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