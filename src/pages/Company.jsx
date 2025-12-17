import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useLanguage } from '@/components/LanguageContext';
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, CheckCircle2, ChevronRight, Play, ArrowUpRight, Network, Cpu, Database, Layers, Gamepad2, Zap, Shield, Globe, Lock, Heart, Eye, Code, Users } from 'lucide-react';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

// Component for "Who We Are" text moving Right to Left
const WhoWeAreRow = ({ text, index, containerRef, color }) => {
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    
    // Move from Right (positive x) to Left (negative x)
    // Increased range for more visible motion
    const x = useTransform(
        scrollYProgress, 
        [0, 1], 
        [1000 + (index * 300), -1000 - (index * 300)]
    );

    return (
        <motion.div 
            style={{ x }}
            className="flex items-center gap-4 md:gap-8 whitespace-nowrap"
        >
            <div className={`text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter transition-colors ${color}`}>
                {text}
            </div>
             {/* Repeat for continuous feel if needed, or just decoration */}
             <div className="w-4 h-4 md:w-8 md:h-8 rounded-full border-2 border-neutral-700" />
        </motion.div>
    );
};

// Fade In Component
const FadeIn = ({ children, delay = 0, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
        className={className}
    >
        {children}
    </motion.div>
);

// Scrollytelling Component
const ScrollytellingSection = ({ chapters }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className={`relative bg-[#050505]`} style={{ height: `${chapters.length * 100}vh` }}>
            <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
                {/* Background Animation */}
                <motion.div 
                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/15 via-[#050505] to-[#050505]" 
                    style={{ 
                        opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]),
                        scale: useTransform(scrollYProgress, [0, 1], [1, 1.2])
                    }}
                />
                
                {/* Chapter Content */}
                <div className="relative w-full max-w-6xl px-6 flex items-center justify-center h-full">
                    {chapters.map((chapter, i) => {
                        // Calculate timing for each chapter
                        const step = 1 / chapters.length;
                        const start = i * step;
                        const end = start + step;
                        const fadeInEnd = start + (step * 0.2);
                        const fadeOutStart = end - (step * 0.2);

                        const opacity = useTransform(scrollYProgress, 
                            [start, fadeInEnd, fadeOutStart, end], 
                            [0, 1, 1, 0]
                        );
                        
                        const y = useTransform(scrollYProgress, 
                            [start, fadeInEnd, fadeOutStart, end], 
                            [100, 0, 0, -100]
                        );
                        
                        const blur = useTransform(scrollYProgress,
                            [start, fadeInEnd, fadeOutStart, end],
                            ["20px", "0px", "0px", "20px"]
                        );

                        return (
                            <motion.div 
                                key={i}
                                style={{ opacity, y, filter: blur, pointerEvents: opacity === 0 ? 'none' : 'auto' }} 
                                className="absolute text-center max-w-4xl"
                            >
                                {chapter.label && (
                                    <div className="text-xs md:text-sm font-mono text-indigo-500 mb-6 uppercase tracking-[0.2em]">{chapter.label}</div>
                                )}
                                {chapter.title && (
                                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight text-white">
                                        {chapter.title}
                                    </h2>
                                )}
                                <div className="text-lg md:text-2xl text-neutral-300 leading-relaxed font-light whitespace-pre-line">
                                    {chapter.content}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default function Company() {
    const { language } = useLanguage();
    const whoWeAreRef = useRef(null);

    const content = {
        en: {
            hero: {
                title: "HoloStudio",
                subtitle: "Building the Infrastructure for the AI-Native Media & Agent Economy",
                cta: "Explore Our Infrastructure"
            },
            scrollytelling: [
                {
                    label: "OUR ROLE",
                    title: "We are not a single-product company.",
                    content: "HoloStudio is a holding company that builds and operates product companies at the edge of AI, media, and decentralized systems.\n\nWe define the infrastructure needed for an era where AI creates, distributes, and acts—and implement it through specialized product companies."
                },
                {
                    label: "THE SHIFT",
                    title: "Why This Company Exists",
                    content: "Media has changed: Long-form → Clips → Social Diffusion.\nEveryone is a media entity. AI has exploded content production, but the structures for trust, credit, and revenue have collapsed."
                },
                {
                    label: "THE CORE PROBLEM",
                    title: "The Missing Infrastructure",
                    content: "Who created it?\nWhere did it spread?\nWho contributed, and who gets rewarded?\n\nThere is no infrastructure to answer these questions systemically.\nHoloStudio exists to bridge this gap."
                },
                {
                    label: "OUR THESIS",
                    title: "Storytelling is an Infrastructure Problem",
                    content: "In the AI era, competitiveness is no longer about 'who speaks best'.\nIt's about who can create verifiable origins, track distribution, and automate value settlement.\n\nWe design the foundation of a new media & agent economy connecting Trust · Distribution · Settlement."
                }
            ],
            how: {
                title: "How We Build",
                layers: [
                    {
                        title: "1. Infrastructure Layer",
                        desc: "Defining the common technical & economic frame:\n• Creation Provenance\n• Distribution Tracking\n• Programmable Settlement"
                    },
                    {
                        title: "2. Product Companies",
                        desc: "PlayArts — Provenance & value distribution for AI content\nEleMEMEtal — Interactive IP experiment mixing media, gaming, & memes\nStockHoo — Token-specific AI market intelligence"
                    },
                    {
                        title: "3. Feedback Loop",
                        desc: "Products validate the infrastructure.\nInfrastructure unlocks the next product possibilities.\nWe iterate this cycle endlessly."
                    }
                ]
            },
            whoWeAre: {
                label: "WHO WE ARE",
                desc: "We don't hire 'storytellers'. We design systems where stories generate naturally.\nOur team treats technology, research, design, media, and economics as a single structural problem.",
                roles: [
                    { text: "Engineers", color: "text-[#ccff00]" },
                    { text: "Researchers", color: "text-[#ff66cc]" },
                    { text: "Builders", color: "text-[#3399ff]" },
                    { text: "Contributors", color: "text-[#ff9933]" }
                ]
            },
            lookingForward: {
                title: "Looking Forward",
                headline: "We’re building the foundation.",
                desc: "AI will create more content. But trust, authority, and revenue structures won't appear automatically.\n\nHoloStudio builds the verifiable, trackable, and fair economic structure on top of the AI world.\nWe build the foundation — and the companies that will run on top of it.",
                cta: "Connect With Us"
            }
        },
        ko: {
            hero: {
                title: "HoloStudio",
                subtitle: "Building the Infrastructure for the AI-Native Media & Agent Economy",
                cta: "인프라 살펴보기"
            },
            scrollytelling: [
                {
                    label: "OUR ROLE",
                    title: "우리는 단일 제품을 키우는 회사가 아닙니다.",
                    content: "HoloStudio는 AI, 미디어, 탈중앙화 시스템의 접점에서 제품 회사를 만들고 운영하는 지주회사(Holding Company)입니다.\n\nAI가 콘텐츠를 만들고, 유통하고, 스스로 행동하는 시대에 필요한 **핵심 구조(infrastructure)**를 정의하고, 그 구조를 실제 제품 회사들로 구현합니다."
                },
                {
                    label: "THE SHIFT",
                    title: "왜 이 회사가 존재하는가",
                    content: "미디어는 이미 바뀌었습니다.\n긴 대화(롱폼) → 클립(숏폼) → 소셜 확산.\n기업과 개인 모두 직접 미디어가 되는 시대.\n\nAI는 콘텐츠 생산을 폭발적으로 늘렸지만, 신뢰와 크레딧, 수익의 구조는 무너졌습니다."
                },
                {
                    label: "THE CORE PROBLEM",
                    title: "핵심 문제",
                    content: "**누가 만들었는가?**\n**어디서 어떻게 퍼졌는가?**\n**누가 기여했고, 누가 보상을 받아야 하는가?**\n\n이 질문에 시스템적으로 답할 수 있는 인프라가 존재하지 않습니다.\nHoloStudio는 이 공백을 메우기 위해 만들어졌습니다."
                },
                {
                    label: "OUR THESIS",
                    title: "AI 시대, 스토리텔링은 인프라 문제입니다.",
                    content: "앞으로의 경쟁력은 “누가 더 잘 말하느냐”가 아닙니다.\n\n누가 **신뢰 가능한 출처**를 만들고,\n**유통을 추적**하며,\n**가치를 자동으로 분배**할 수 있는가에 달려 있습니다.\n\n우리는 신뢰·유통·정산이 연결된 새로운 미디어·에이전트 경제의 기반을 설계합니다."
                }
            ],
            how: {
                title: "How We Build",
                layers: [
                    {
                        title: "1. Infrastructure Layer",
                        desc: "먼저 공통의 기술·경제적 프레임을 정의합니다.\n• Creation Provenance (누가, 무엇으로 만들었는가)\n• Distribution Tracking (어디로, 어떻게 퍼졌는가)\n• Programmable Settlement (기여도 기반 자동 정산)\n\n이 레이어는 모든 제품 회사가 공유하는 기본 골격입니다."
                    },
                    {
                        title: "2. Product Companies",
                        desc: "각 시장의 문제를 가장 날카롭게 드러내는 독립 제품 회사를 만듭니다.\n\n• **PlayArts** — AI 생성 콘텐츠의 출처 증명과 확산 기반 가치 분배\n• **EleMEMEtal** — 미디어·게임·밈이 결합된 참여형 IP 실험\n• **StockHoo** — 토큰 단위로 특화된 AI 시장 인텔리전스 엔진\n\n이 회사들은 각자 독립적인 시장과 사용자를 가지지만, 같은 인프라 철학 위에서 진화합니다."
                    },
                    {
                        title: "3. Feedback Loop",
                        desc: "제품은 인프라를 검증하고,\n인프라는 다시 다음 제품의 가능성을 엽니다.\n\nHoloStudio는 이 순환 구조를 반복적으로 만들어내는 조직입니다."
                    }
                ]
            },
            whoWeAre: {
                label: "WHO WE ARE",
                desc: "우리는 “스토리텔러”를 고용하지 않습니다.\n우리는 스토리가 자연스럽게 생성되는 시스템을 설계합니다.\n\n그래서 HoloStudio의 팀은 기술, 리서치, 디자인, 미디어, 경제 설계를 하나의 구조 문제로 다룹니다.",
                roles: [
                    { text: "Engineers", color: "text-[#ccff00]" },
                    { text: "Researchers", color: "text-[#ff66cc]" },
                    { text: "Builders", color: "text-[#3399ff]" },
                    { text: "Contributors", color: "text-[#ff9933]" }
                ]
            },
            lookingForward: {
                title: "Looking Forward",
                headline: "We’re building the foundation.",
                desc: "AI는 더 많은 콘텐츠를 만들 것입니다.\n하지만 신뢰와 권위, 수익의 구조는 자동으로 생기지 않습니다.\n\nHoloStudio는 AI가 만들어내는 세계 위에 검증 가능하고, 추적 가능하며, 공정하게 분배되는 경제 구조를 세웁니다.\n\nWe’re building the foundation — and the companies that will run on top of it.",
                cta: "함께하기"
            }
        }
    };

    const c = content[language];

    return (
        <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-indigo-500/30 overflow-x-hidden">
            <SEO 
                title="Company" 
                description={c.hero.subtitle}
            />

            {/* 1. HERO SECTION */}
            <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 border-b border-white/10 overflow-hidden">
                 <motion.div 
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#050505] to-[#050505]" 
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                 />
                
                <div className="max-w-[1400px] mx-auto w-full z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.1] tracking-tight mb-8 max-w-5xl">
                            {c.hero.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl leading-relaxed mb-12 font-light">
                            {c.hero.subtitle}
                        </p>
                        
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <Link to={createPageUrl('Products')}>
                                <Button className="rounded-full bg-[#ccff00] text-black hover:bg-[#b3e600] px-8 py-6 text-lg font-bold shadow-[0_0_20px_rgba(204,255,0,0.3)]">
                                    {c.hero.cta}
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. SCROLLYTELLING SECTION */}
            <ScrollytellingSection chapters={c.scrollytelling} />

            {/* 3. HOW WE BUILD */}
            <section className="py-32 px-6 md:px-12 bg-[#080808] border-b border-white/10">
                <div className="max-w-[1400px] mx-auto">
                    <FadeIn>
                        <h2 className="text-4xl md:text-6xl font-bold mb-20">{c.how.title}</h2>
                    </FadeIn>
                    
                    <div className="space-y-12">
                        {c.how.layers.map((layer, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="group relative bg-[#0A0A0A] border border-white/10 p-8 md:p-12 rounded-3xl hover:border-indigo-500/30 transition-all duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{layer.title}</h3>
                                    <div className="text-lg text-neutral-400 leading-relaxed whitespace-pre-line group-hover:text-neutral-200 transition-colors">
                                        {layer.desc}
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

             {/* 4. WHO WE ARE (Animated) */}
             <section ref={whoWeAreRef} className="py-32 bg-[#050505] border-b border-white/10 overflow-hidden relative">
                 <div className="px-6 md:px-12 mb-16 max-w-[1400px] mx-auto">
                     <div className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">{c.whoWeAre.label}</div>
                     <p className="max-w-2xl text-neutral-400 text-lg whitespace-pre-line">{c.whoWeAre.desc}</p>
                 </div>
                 <div className="space-y-2 md:space-y-4">
                     {c.whoWeAre.roles.map((role, i) => (
                         <WhoWeAreRow key={i} text={role.text} color={role.color} index={i} containerRef={whoWeAreRef} />
                     ))}
                 </div>
             </section>

            {/* 7. LOOKING FORWARD */}
            <section className="py-40 px-6 md:px-12 bg-[#050505] text-center">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <div className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-8">{c.lookingForward.title}</div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                            {c.lookingForward.headline}
                        </h2>
                        <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed mb-16">
                            {c.lookingForward.desc}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link to={createPageUrl('Contact')}>
                                <Button className="rounded-full bg-white text-black hover:bg-neutral-200 px-10 h-14 text-lg font-bold">
                                    {c.lookingForward.cta}
                                </Button>
                            </Link>
                            <Link to={createPageUrl('Products')}>
                                <Button variant="outline" className="rounded-full border-neutral-700 text-white hover:bg-white/10 bg-transparent px-10 h-14 text-lg">
                                    {language === 'en' ? "Explore Products" : "프로덕트 보기"}
                                </Button>
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}