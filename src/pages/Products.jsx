import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';
import { useTheme } from '@/components/ThemeContext';

export default function Products() {
    const { language } = useLanguage();
    const { theme } = useTheme();

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
        <div className={`min-h-screen font-sans transition-colors duration-300 ${
            theme === 'dark' 
                ? 'bg-[#050505] text-white selection:bg-indigo-500/30'
                : 'bg-white text-neutral-900 selection:bg-orange-200'
        }`}>
            <main className="relative z-10 pt-32 pb-24">
                 <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-24 text-center">
                     <motion.h1 
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         className={`text-4xl md:text-6xl font-black tracking-tight mb-8 ${
                             theme === 'dark' ? 'text-white' : 'text-neutral-900'
                         }`}
                     >
                         {language === 'en' ? 'Products' : '프로덕트'}
                     </motion.h1>
                     <motion.p 
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.1 }}
                         className={`text-base md:text-xl max-w-3xl mx-auto leading-relaxed font-medium ${
                             theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                         }`}
                     >
                         {language === 'en' 
                             ? 'Building the infrastructure for the next generation of digital trust and value.' 
                             : '차세대 디지털 신뢰와 가치를 위한 인프라를 구축합니다.'}
                     </motion.p>
                 </div>

                {/* Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1400px] mx-auto gap-6 px-6">
                    {products.map((product, index) => (
                        <Link 
                            key={product.id} 
                            to={createPageUrl(product.path)}
                            className={`group relative min-h-[400px] p-8 md:p-12 flex flex-col justify-between overflow-hidden transition-all duration-500 rounded-2xl ${
                                theme === 'dark'
                                    ? `${product.theme} border border-white/10 hover:border-white/20`
                                    : 'bg-white border-2 border-neutral-200 hover:border-neutral-900 hover:shadow-xl'
                            }`}
                        >
                            {theme === 'dark' && (
                                <>
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                                    <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none">
                                        <img src={product.image} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" />
                                    </div>
                                </>
                            )}
                            
                            {/* Content */}
                            <div className="relative z-20">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className={`text-xl md:text-3xl font-black tracking-tight ${
                                        theme === 'dark' 
                                            ? product.accent 
                                            : index === 0 ? 'text-blue-600' : index === 1 ? 'text-yellow-600' : index === 2 ? 'text-pink-600' : 'text-emerald-600'
                                    }`}>
                                        {product.name}
                                    </h3>
                                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                                        theme === 'dark' 
                                            ? 'bg-white/10 backdrop-blur-md' 
                                            : 'bg-neutral-900 text-white'
                                    }`}>
                                        <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                                    </div>
                                </div>

                                <h2 className={`text-2xl md:text-4xl font-black leading-[1.1] mb-6 max-w-xl tracking-tight ${
                                    theme === 'dark' ? 'text-white' : 'text-neutral-900'
                                }`}>
                                    {product.tagline[language] || product.tagline.en}
                                </h2>
                                <p className={`text-base md:text-xl max-w-md leading-relaxed ${
                                    theme === 'dark' ? 'opacity-80' : 'text-neutral-700 font-medium'
                                }`}>
                                    {product.description[language] || product.description.en}
                                </p>
                            </div>

                            {/* CTA */}
                            <div className={`relative z-20 mt-12 flex items-center gap-4 group-hover:gap-6 transition-all duration-300 ${
                                theme === 'dark' ? 'text-white' : 'text-neutral-900'
                            }`}>
                                 <span className="text-sm font-bold uppercase tracking-widest border-b border-current pb-1">
                                     {language === 'en' ? 'Learn More' : '자세히 보기'}
                                 </span>
                                 <ArrowRight className="w-4 h-4" />
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}