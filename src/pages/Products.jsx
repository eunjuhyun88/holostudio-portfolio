import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from '@/components/ThemeContext';
import { useLanguage } from '@/components/LanguageContext';
import SEO from '@/components/SEO';

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

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                {/* Background Effects */}
                {theme === 'dark' && (
                    <>
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />
                    </>
                )}

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-8"
                    >
                        <div className={`inline-block px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6 ${
                            theme === 'dark'
                                ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                                : 'bg-neutral-900 text-white'
                        }`}>
                            {t.hero.tag}
                        </div>
                        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight ${
                            theme === 'dark' ? 'text-white' : 'text-neutral-900'
                        }`}>
                            {t.hero.title}
                        </h1>
                        <p className={`text-lg md:text-xl max-w-3xl mx-auto font-medium ${
                            theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                        }`}>
                            {t.hero.subtitle}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Products Section */}
            <section className={`py-20 px-6 border-t ${
                theme === 'dark' ? 'border-white/10 bg-black/20' : 'border-neutral-200 bg-neutral-50'
            }`}>
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className={`text-3xl md:text-5xl font-black mb-4 ${
                            theme === 'dark' ? 'text-white' : 'text-neutral-900'
                        }`}>
                            {t.categories.core.title}
                        </h2>
                        <p className={`text-lg ${
                            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                        }`}>
                            {t.categories.core.desc}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {products.core.map((product, idx) => (
                            <ProductCard key={idx} product={product} theme={theme} language={language} t={t} delay={idx * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Showcase Products Section */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className={`text-3xl md:text-5xl font-black mb-4 ${
                            theme === 'dark' ? 'text-white' : 'text-neutral-900'
                        }`}>
                            {t.categories.showcase.title}
                        </h2>
                        <p className={`text-lg ${
                            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                        }`}>
                            {t.categories.showcase.desc}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {products.showcase.map((product, idx) => (
                            <ProductCard key={idx} product={product} theme={theme} language={language} t={t} delay={idx * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={`py-32 px-6 border-t text-center ${
                theme === 'dark' ? 'border-white/10 bg-gradient-to-b from-transparent to-black/30' : 'border-neutral-200 bg-neutral-50'
            }`}>
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={`text-3xl md:text-5xl font-black mb-6 ${
                            theme === 'dark' ? 'text-white' : 'text-neutral-900'
                        }`}>
                            {language === 'en' ? 'Ready to Build?' : '시작할 준비가 되셨나요?'}
                        </h2>
                        <p className={`text-lg mb-8 ${
                            theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                        }`}>
                            {language === 'en' 
                                ? 'Partner with us to integrate trust infrastructure into your platform.' 
                                : '플랫폼에 신뢰 인프라를 통합하기 위해 파트너가 되어주세요.'}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to={createPageUrl("Contact")}>
                                <Button size="lg" className={`rounded-full px-10 h-14 text-base font-bold ${
                                    theme === 'dark'
                                        ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
                                        : 'bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 hover:from-cyan-500 hover:via-purple-500 hover:to-pink-500 text-white'
                                }`}>
                                    {language === 'en' ? 'Get in Touch' : '문의하기'}
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                            <Button variant="outline" size="lg" className={`rounded-full px-10 h-14 text-base font-bold ${
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

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
        >
            <Link to={createPageUrl(product.path.substring(1))}>
                <div className={`group relative rounded-3xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 h-full ${
                    theme === 'dark'
                        ? 'bg-white/5 border-white/10 hover:border-white/20 backdrop-blur-sm hover:bg-white/10'
                        : 'bg-white border-neutral-200 hover:shadow-2xl shadow-lg'
                }`}>
                    {/* Image Container */}
                    <div className={`relative aspect-[4/3] overflow-hidden ${
                        theme === 'dark' ? 'bg-black/50' : 'bg-neutral-100'
                    }`}>
                        <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${
                            theme === 'dark' ? 'from-black/80 via-transparent' : 'from-white/80 via-transparent'
                        } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                        
                        {/* Status Badge */}
                        <div className={`absolute top-6 right-6 px-4 py-2 rounded-full text-xs font-bold border backdrop-blur-md ${status.color}`}>
                            {status.label}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                        <div className={`text-xs font-bold uppercase tracking-widest mb-3 ${product.color.text}`}>
                            {product.tagline[language]}
                        </div>

                        <h3 className={`text-3xl font-black mb-4 ${
                            theme === 'dark' ? 'text-white' : 'text-neutral-900'
                        }`}>
                            {product.name}
                        </h3>

                        <p className={`mb-6 leading-relaxed ${
                            theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                        }`}>
                            {product.description[language]}
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-2 mb-6">
                            {product.features[language].map((feature, i) => (
                                <div
                                    key={i}
                                    className={`px-3 py-2 rounded-lg text-xs font-medium border ${
                                        theme === 'dark'
                                            ? 'bg-white/5 border-white/10 text-neutral-300'
                                            : 'bg-neutral-50 border-neutral-200 text-neutral-700'
                                    }`}
                                >
                                    {feature}
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className={`flex items-center gap-2 font-bold ${product.color.text} group-hover:gap-3 transition-all`}>
                            {product.status === 'coming-soon' ? t.cta.soon : t.cta.explore}
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    {theme === 'dark' && (
                        <>
                            <div className={`absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 ${product.color.border} opacity-20 group-hover:opacity-100 transition-opacity duration-500`} />
                            <div className={`absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 ${product.color.border} opacity-20 group-hover:opacity-100 transition-opacity duration-500`} />
                        </>
                    )}
                </div>
            </Link>
        </motion.div>
    );
}