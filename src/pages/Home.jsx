import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion, useInView } from "framer-motion";
import { useLanguage } from '@/components/LanguageContext';
import { useTheme } from '@/components/ThemeContext';
import SEO from '@/components/SEO';

export default function Home() {
    const { language } = useLanguage();
    const { theme } = useTheme();

    const content = {
        en: {
            hero: {
                tag: "BUILDING THE FUTURE",
                title: "Trust Layer for\nthe AI Economy",
                desc: "We engineer the infrastructure that makes AI content safe, owned, and monetizable.",
                cta: "See How We Work"
            },
            problem: {
                title: "The world needs\ntrustwort AI content.",
                desc: "Without verification, the AI economy cannot function. We're building the infrastructure to fix that."
            },
            solution: {
                title: "One Company.\nFour Products.",
                desc: "Safety. Provenance. Gaming. Trading."
            },
            products: [
                { name: "AiD Guardian", desc: "Real-time content safety for platforms" },
                { name: "PlayArts", desc: "IP protection for AI creators" },
                { name: "EleMEMEtal", desc: "Verified gaming assets" },
                { name: "Stockhoo", desc: "Proof-of-profit trading signals" }
            ],
            milestones: {
                title: "Trusted by\nthe best",
                items: [
                    "NVIDIA Inception",
                    "Google Cloud Partner",
                    "Seedify Winner",
                    "Alchemy Grant"
                ]
            },
            cta: {
                title: "Let's build\ntogether.",
                button: "Get in Touch"
            }
        },
        ko: {
            hero: {
                tag: "미래를 만듭니다",
                title: "AI 경제를 위한\n신뢰 레이어",
                desc: "AI 콘텐츠를 안전하고, 소유 가능하고, 수익화 가능하게 만드는 인프라를 만듭니다.",
                cta: "솔루션 보기"
            },
            problem: {
                title: "세상은 신뢰할 수 있는\nAI 콘텐츠가 필요합니다.",
                desc: "검증 없이는 AI 경제가 작동할 수 없습니다. 우리는 이를 해결할 인프라를 만듭니다."
            },
            solution: {
                title: "하나의 회사.\n네 개의 제품.",
                desc: "안전. 출처증명. 게임. 트레이딩."
            },
            products: [
                { name: "AiD Guardian", desc: "플랫폼을 위한 실시간 콘텐츠 안전" },
                { name: "PlayArts", desc: "AI 창작자를 위한 IP 보호" },
                { name: "EleMEMEtal", desc: "검증된 게임 자산" },
                { name: "Stockhoo", desc: "수익 증명 트레이딩 시그널" }
            ],
            milestones: {
                title: "최고와 함께\n일합니다",
                items: [
                    "NVIDIA Inception",
                    "Google Cloud Partner",
                    "Seedify 우승",
                    "Alchemy 그랜트"
                ]
            },
            cta: {
                title: "함께\n만들어요.",
                button: "연락하기"
            }
        }
    };

    const t = content[language];

    // Section background colors
    const sections = [
        { bg: theme === 'dark' ? 'bg-[#050505]' : 'bg-[#FFF9F5]' },      // Hero - Cream
        { bg: theme === 'dark' ? 'bg-[#050505]' : 'bg-[#FFD8D8]' },      // Problem - Pink
        { bg: theme === 'dark' ? 'bg-[#050505]' : 'bg-[#D8EEFF]' },      // Solution - Blue
        { bg: theme === 'dark' ? 'bg-[#050505]' : 'bg-[#D8F8D8]' },      // Products - Green
        { bg: theme === 'dark' ? 'bg-[#050505]' : 'bg-[#E8D8FF]' },      // Milestones - Lavender
        { bg: theme === 'dark' ? 'bg-[#050505]' : 'bg-[#FFECD8]' }       // CTA - Orange
    ];

    return (
        <div className="font-sans min-h-screen">
            <SEO 
                title="Home" 
                description={t.hero.desc}
            />

            {/* Section 1: HERO */}
            <section className={`min-h-screen flex flex-col items-center justify-center px-6 py-20 ${sections[0].bg} transition-colors duration-700`}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto text-center"
                >
                    <div className={`inline-block px-5 py-2 mb-8 rounded-full text-xs md:text-sm font-bold tracking-wide uppercase ${
                        theme === 'dark' 
                            ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/30'
                            : 'bg-neutral-900 text-white'
                    }`}>
                        {t.hero.tag}
                    </div>

                    <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.95] mb-8 whitespace-pre-line ${
                        theme === 'dark' ? 'text-white' : 'text-neutral-900'
                    }`}>
                        {t.hero.title}
                    </h1>

                    <p className={`text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-12 font-medium ${
                        theme === 'dark' ? 'text-neutral-300' : 'text-neutral-800'
                    }`}>
                        {t.hero.desc}
                    </p>

                    <Button 
                        size="lg" 
                        className={`rounded-full px-8 md:px-12 h-14 md:h-16 text-base md:text-lg font-bold ${
                            theme === 'dark'
                                ? 'bg-white text-black hover:bg-neutral-200'
                                : 'bg-neutral-900 text-white hover:bg-neutral-800'
                        }`}
                        onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                    >
                        {t.hero.cta}
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <ChevronDown className={`w-6 h-6 animate-bounce ${
                        theme === 'dark' ? 'text-neutral-600' : 'text-neutral-400'
                    }`} />
                </motion.div>
            </section>

            {/* Section 2: PROBLEM */}
            <section className={`min-h-screen flex items-center justify-center px-6 py-32 ${sections[1].bg} transition-colors duration-700`}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] mb-8 whitespace-pre-line ${
                        theme === 'dark' ? 'text-white' : 'text-neutral-900'
                    }`}>
                        {t.problem.title}
                    </h2>
                    <p className={`text-xl md:text-2xl lg:text-3xl max-w-3xl font-medium ${
                        theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                    }`}>
                        {t.problem.desc}
                    </p>
                </motion.div>
            </section>

            {/* Section 3: SOLUTION */}
            <section className={`min-h-screen flex items-center justify-center px-6 py-32 ${sections[2].bg} transition-colors duration-700`}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] mb-8 whitespace-pre-line ${
                        theme === 'dark' ? 'text-white' : 'text-neutral-900'
                    }`}>
                        {t.solution.title}
                    </h2>
                    <p className={`text-xl md:text-2xl lg:text-3xl font-medium ${
                        theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                    }`}>
                        {t.solution.desc}
                    </p>
                </motion.div>
            </section>

            {/* Section 4: PRODUCTS */}
            <section id="products" className={`min-h-screen flex items-center justify-center px-6 py-32 ${sections[3].bg} transition-colors duration-700`}>
                <div className="max-w-6xl mx-auto w-full">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        {t.products.map((product, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className={`p-8 md:p-12 rounded-3xl transition-all duration-500 cursor-pointer group ${
                                    theme === 'dark'
                                        ? 'bg-white/5 hover:bg-white/10 border border-white/10'
                                        : 'bg-white hover:bg-neutral-50 border border-neutral-300 shadow-sm hover:shadow-lg'
                                }`}
                            >
                                <div className={`text-sm font-bold mb-4 uppercase tracking-wider ${
                                    theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                                }`}>
                                    {String(idx + 1).padStart(2, '0')}
                                </div>
                                <h3 className={`text-3xl md:text-4xl font-black mb-4 ${
                                    theme === 'dark' ? 'text-white' : 'text-neutral-900'
                                }`}>
                                    {product.name}
                                </h3>
                                <p className={`text-lg md:text-xl font-medium ${
                                    theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                                }`}>
                                    {product.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5: MILESTONES */}
            <section className={`min-h-screen flex items-center justify-center px-6 py-32 ${sections[4].bg} transition-colors duration-700`}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] mb-16 whitespace-pre-line ${
                        theme === 'dark' ? 'text-white' : 'text-neutral-900'
                    }`}>
                        {t.milestones.title}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {t.milestones.items.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className={`text-2xl md:text-3xl font-bold ${
                                    theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                                }`}
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Section 6: CTA */}
            <section className={`min-h-screen flex flex-col items-center justify-center px-6 py-32 ${sections[5].bg} transition-colors duration-700`}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto text-center"
                >
                    <h2 className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] mb-12 whitespace-pre-line ${
                        theme === 'dark' ? 'text-white' : 'text-neutral-900'
                    }`}>
                        {t.cta.title}
                    </h2>

                    <Link to={createPageUrl("Contact")}>
                        <Button 
                            size="lg" 
                            className={`rounded-full px-8 md:px-12 h-14 md:h-16 text-base md:text-lg font-bold ${
                                theme === 'dark'
                                    ? 'bg-white text-black hover:bg-neutral-200'
                                    : 'bg-neutral-900 text-white hover:bg-neutral-800'
                            }`}
                        >
                            {t.cta.button}
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}