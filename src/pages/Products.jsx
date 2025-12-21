import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from '@/components/ThemeContext';
import { useLanguage } from '@/components/LanguageContext';
import SEO from '@/components/SEO';
import ProductsBackground from '@/components/ProductsBackground';
import SciFiCard from '@/components/SciFiCard';
import GlitchText from '@/components/GlitchText';

export default function Products() {
    const { theme } = useTheme();
    const { language } = useLanguage();

    const content = {
        en: {
            hero: {
                tag: "OUR PRODUCTS",
                title: "Building Trust Infrastructure for the Autonomous Age",
                subtitle: "Four products. One unified trust layer. From safety to ownership to economic value."
            },
            categories: {
                core: { title: "Core Infrastructure", desc: "Enterprise-grade safety and verification" },
                showcase: { title: "Protocol Demonstrations", desc: "Live implementations of our trust layer" }
            },
            cta: {
                demo: "Request Demo",
                explore: "Explore",
                soon: "Coming Q1 2026"
            }
        },
        ko: {
            hero: {
                tag: "프로덕트",
                title: "자율 시대를 위한 신뢰 인프라 구축",
                subtitle: "네 개의 제품. 하나의 통합된 신뢰 레이어. 안전에서 소유권, 경제적 가치까지."
            },
            categories: {
                core: { title: "핵심 인프라", desc: "엔터프라이즈급 안전 및 검증" },
                showcase: { title: "프로토콜 데모", desc: "신뢰 레이어의 실제 구현" }
            },
            cta: {
                demo: "데모 요청",
                explore: "자세히 보기",
                soon: "2026년 1분기 출시"
            }
        }
    };

    const t = content[language];

    const products = useMemo(() => ({
        core: [
            {
                name: "AiD Guardian",
                tagline: { en: "Enterprise Safety Engine", ko: "엔터프라이즈 안전 엔진" },
                description: {
                    en: "Real-time content moderation and AI detection for platforms. Sub-10ms latency, GARM compliant, protecting your brand from toxic AI content.",
                    ko: "플랫폼을 위한 실시간 콘텐츠 관리 및 AI 탐지. 10ms 이하 지연시간, GARM 준수, 유해 AI 콘텐츠로부터 브랜드 보호."
                },
                features: {
                    en: ["88.89% AI Detection", "< 10ms Response", "GARM Compliant", "Brand Safety"],
                    ko: ["88.89% AI 탐지", "< 10ms 응답", "GARM 준수", "브랜드 안전"]
                },
                tags: { 
                    en: ["Safety", "Compliance", "Enterprise"], 
                    ko: ["안전", "규제 준수", "기업용"] 
                },
                image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/cc0228bec_2025-12-171042431.png",
                path: "/AidGuardian",
                status: "live",
                color: { text: "text-blue-400", bg: "bg-blue-500", border: "border-blue-400" }
            },
            {
                name: "PlayArts",
                tagline: { en: "IP Provenance Protocol", ko: "IP 출처 증명 프로토콜" },
                description: {
                    en: "Cryptographic proof of creation for AI-generated assets. On-chain verification, royalty routing, and IP protection from generation to monetization.",
                    ko: "AI 생성 자산을 위한 암호학적 생성 증명. 온체인 검증, 로열티 분배 및 생성부터 수익화까지 IP 보호."
                },
                features: {
                    en: ["Crypto Attribution", "Royalty Routing", "EIP-7007 Compatible", "On-chain Proof"],
                    ko: ["암호학적 귀속", "로열티 분배", "EIP-7007 호환", "온체인 증명"]
                },
                tags: { 
                    en: ["Provenance", "IP", "Protocol"], 
                    ko: ["출처 증명", "IP", "프로토콜"] 
                },
                image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/81cf8f3b2_2025-12-17105846.png",
                path: "/PlayArts",
                status: "live",
                color: { text: "text-yellow-400", bg: "bg-yellow-500", border: "border-yellow-400" }
            }
        ],
        showcase: [
            {
                name: "EleMEMEtal",
                tagline: { en: "Web3 Gaming Showcase", ko: "웹3 게임 쇼케이스" },
                description: {
                    en: "Fully on-chain battle arena demonstrating verified AI asset ownership. UGC creation, safe moderation, and tradeable game assets powered by our trust layer.",
                    ko: "검증된 AI 자산 소유권을 보여주는 완전한 온체인 배틀 아레나. 신뢰 레이어로 구동되는 UGC 생성, 안전한 관리 및 거래 가능한 게임 자산."
                },
                features: {
                    en: ["AI-Generated Assets", "Safe UGC", "On-chain Ownership", "Verified Trading"],
                    ko: ["AI 생성 자산", "안전한 UGC", "온체인 소유권", "검증된 거래"]
                },
                tags: { 
                    en: ["Gaming", "UGC", "Demo"], 
                    ko: ["게임", "UGC", "데모"] 
                },
                image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/9692fcde2_2025-12-1463649.png",
                path: "/Elememetal",
                status: "beta",
                color: { text: "text-pink-400", bg: "bg-pink-500", border: "border-pink-400" }
            },
            {
                name: "Stockhoo",
                tagline: { en: "Verified Trading Intelligence", ko: "검증된 트레이딩 인텔리전스" },
                description: {
                    en: "Zone-based market intelligence with on-chain proof of profit. Verified trading signals backed by cryptographic reputation, eliminating fake alpha.",
                    ko: "수익 증명이 포함된 Zone 기반 시장 인텔리전스. 암호학적 평판으로 뒷받침되는 검증된 트레이딩 시그널로 가짜 알파 제거."
                },
                features: {
                    en: ["Proof of Profit", "Verified Signals", "Zone Analytics", "Reputation System"],
                    ko: ["수익 증명", "검증된 시그널", "Zone 분석", "평판 시스템"]
                },
                tags: { 
                    en: ["Trading", "Verification", "Social"], 
                    ko: ["트레이딩", "검증", "소셜"] 
                },
                image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/45cb06182_2025-12-17105903.png",
                path: "/Stockhoo",
                status: "coming-soon",
                color: { text: "text-emerald-400", bg: "bg-emerald-500", border: "border-emerald-400" }
            }
        ]
    }), []);

    return (
        <div className={`min-h-screen transition-colors duration-300 ${
            theme === 'dark' 
                ? 'bg-[#050505] text-white' 
                : 'bg-white text-neutral-900'
        }`}>
            <SEO 
                title="Products" 
                description={t.hero.subtitle}
            />

            {/* Products Unique Background */}
            <ProductsBackground theme={theme} />

            {/* Hero Section - Condensed */}
            <section className="relative pt-24 sm:pt-28 pb-6 sm:pb-8 px-4 sm:px-6 overflow-hidden z-10">
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className={`text-xl sm:text-2xl md:text-3xl font-black mb-2 tracking-tight ${
                            theme === 'dark' ? 'text-white' : 'text-neutral-900'
                        }`}>
                            {t.hero.tag}
                        </h1>
                        <p className={`text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-2 ${
                            theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
                        }`}>
                            {t.hero.subtitle}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* All Products Section - Unified */}
            <section className="py-8 sm:py-12 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        {products.core.map((product, idx) => (
                            <ProductCard key={idx} product={product} theme={theme} language={language} t={t} delay={idx * 0.05} />
                        ))}
                        {products.showcase.map((product, idx) => (
                            <ProductCard key={idx + products.core.length} product={product} theme={theme} language={language} t={t} delay={(idx + products.core.length) * 0.05} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={`py-16 sm:py-24 md:py-32 px-4 sm:px-6 border-t text-center ${
                theme === 'dark' ? 'border-white/10 bg-gradient-to-b from-transparent to-black/30' : 'border-neutral-200 bg-neutral-50'
            }`}>
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={`text-2xl sm:text-3xl md:text-5xl font-black mb-4 sm:mb-6 px-2 ${
                            theme === 'dark' ? 'text-white' : 'text-neutral-900'
                        }`}>
                            {language === 'en' ? 'Ready to Build?' : '시작할 준비가 되셨나요?'}
                        </h2>
                        <p className={`text-sm sm:text-base md:text-lg mb-6 sm:mb-8 px-4 ${
                            theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                        }`}>
                            {language === 'en' 
                                ? 'Partner with us to integrate trust infrastructure into your platform.' 
                                : '플랫폼에 신뢰 인프라를 통합하기 위해 파트너가 되어주세요.'}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                            <Link to={createPageUrl("Contact")} className="w-full sm:w-auto">
                                <Button size="lg" className={`w-full rounded-full px-8 sm:px-10 h-12 sm:h-14 text-sm sm:text-base font-bold ${
                                    theme === 'dark'
                                        ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
                                        : 'bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 hover:from-cyan-400 hover:via-violet-400 hover:to-pink-400 text-white shadow-lg'
                                }`}>
                                    {language === 'en' ? 'Get in Touch' : '문의하기'}
                                    <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
                                </Button>
                            </Link>
                            <Button variant="outline" size="lg" className={`w-full sm:w-auto rounded-full px-8 sm:px-10 h-12 sm:h-14 text-sm sm:text-base font-bold ${
                                theme === 'dark'
                                    ? 'border-white/20 text-white hover:bg-white/5'
                                    : 'border-neutral-300 text-neutral-900 hover:bg-neutral-50'
                            }`}>
                                {language === 'en' ? 'View Documentation' : '문서 보기'}
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

// Product Card Component
function ProductCard({ product, theme, language, t, delay }) {
    const statusConfig = {
        'live': { 
            label: 'LIVE', 
            color: theme === 'dark' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-green-100 text-green-700 border-green-200'
        },
        'beta': { 
            label: 'BETA', 
            color: theme === 'dark' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : 'bg-blue-100 text-blue-700 border-blue-200'
        },
        'coming-soon': { 
            label: 'COMING SOON', 
            color: theme === 'dark' ? 'bg-orange-500/20 text-orange-400 border-orange-500/30' : 'bg-orange-100 text-orange-700 border-orange-200'
        }
    };

    const status = statusConfig[product.status] || statusConfig.live;
    
    const glowColorMap = {
        'text-blue-400': 'blue',
        'text-yellow-400': 'cyan',
        'text-pink-400': 'pink',
        'text-emerald-400': 'cyan'
    };

    if (theme === 'dark') {
        return (
            <Link to={createPageUrl(product.path.substring(1))}>
                <SciFiCard 
                    glowColor={glowColorMap[product.color.text] || 'indigo'}
                    animated={true}
                    className="h-full"
                >
                    {/* Content */}
                    <div className="p-4 sm:p-6 md:p-8 relative">
                        {/* Status Badge */}
                        <div className={`absolute top-4 sm:top-6 right-4 sm:right-6 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold border backdrop-blur-md ${status.color}`}>
                            {status.label}
                        </div>
                        <div className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4 ${product.color.text} flex items-center gap-2`}>
                            <span className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full ${product.color.bg} animate-pulse`} />
                            {product.tagline[language]}
                        </div>

                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4 text-white">
                            <GlitchText glitchIntensity="low">{product.name}</GlitchText>
                        </h3>

                        <p className="mb-6 sm:mb-8 leading-relaxed text-neutral-300 text-sm sm:text-base">
                            {product.description[language]}
                        </p>

                        {/* Features List */}
                        <div className="space-y-1.5 sm:space-y-2 mb-6 sm:mb-8">
                            {product.features[language].map((feature, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-neutral-300"
                                >
                                    <div className={`w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full ${product.color.bg} flex-shrink-0`} />
                                    <span className="font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA with Animated Arrow */}
                        <div className={`flex items-center gap-2 font-bold text-sm sm:text-base ${product.color.text} group-hover:gap-3 transition-all`}>
                            {product.status === 'coming-soon' ? t.cta.soon : t.cta.explore}
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Holographic Border Animation */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent animate-[shimmer_2s_infinite]" />
                    </div>
                </SciFiCard>
            </Link>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
        >
            <Link to={createPageUrl(product.path.substring(1))}>
                <div className="group relative rounded-3xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 h-full bg-white border-neutral-200 hover:shadow-2xl shadow-lg p-8">
                    {/* Status Badge */}
                    <div className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-bold border ${status.color}`}>
                        {status.label}
                    </div>

                    <div className={`text-xs font-bold uppercase tracking-widest mb-4 ${product.color.text} flex items-center gap-2`}>
                        <span className={`w-2 h-2 rounded-full ${product.color.bg}`} />
                        {product.tagline[language]}
                    </div>

                    <h3 className="text-4xl font-black mb-4 text-neutral-900">
                        {product.name}
                    </h3>

                    <p className="mb-8 leading-relaxed text-neutral-700 text-base">
                        {product.description[language]}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-8">
                        {product.features[language].map((feature, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 text-sm text-neutral-700"
                            >
                                <div className={`w-1.5 h-1.5 rounded-full ${product.color.bg}`} />
                                <span className="font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className={`flex items-center gap-2 font-bold ${product.color.text} group-hover:gap-3 transition-all`}>
                        {product.status === 'coming-soon' ? t.cta.soon : t.cta.explore}
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}