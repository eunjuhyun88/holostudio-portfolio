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
    // Stagger speeds based on index
    const x = useTransform(
        scrollYProgress, 
        [0, 1], 
        [100 + (index * 50), -100 - (index * 50)]
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

// Sticky Text Reveal Component for "Our Story"
const StickyTextReveal = ({ title, headline, paragraphs }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={container} className="relative h-[300vh] bg-[#050505]">
            <div className="sticky top-0 h-screen flex flex-col justify-center items-center px-6 md:px-12 text-center overflow-hidden">
                <motion.div 
                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#050505] to-[#050505]" 
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]) }}
                />
                
                <div className="max-w-5xl z-10">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-8"
                    >
                        {title}
                    </motion.div>
                    
                    <motion.h2 
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-24 leading-tight tracking-tight text-white"
                        style={{ 
                            opacity: useTransform(scrollYProgress, [0, 0.15], [0, 1]),
                            scale: useTransform(scrollYProgress, [0, 0.15], [0.9, 1])
                        }}
                    >
                        {headline}
                    </motion.h2>
                    
                    <div className="relative h-40 w-full flex justify-center items-center">
                        {paragraphs.map((text, i) => {
                            // Calculate timeline for each paragraph
                            // 0.2 to 1.0 is the range for paragraphs
                            const start = 0.2 + (i * (0.8 / paragraphs.length));
                            const end = start + (0.8 / paragraphs.length);
                            
                            // Make transitions slightly overlapping and smooth
                            const opacity = useTransform(scrollYProgress, 
                                [start, start + 0.1, end - 0.1, end], 
                                [0, 1, 1, 0]
                            );
                            
                            const y = useTransform(scrollYProgress, 
                                [start, end], 
                                [50, -50]
                            );
                            
                            const blur = useTransform(scrollYProgress,
                                [start, start + 0.1, end - 0.1, end],
                                ["10px", "0px", "0px", "10px"]
                            );

                            return (
                                <motion.p 
                                    key={i}
                                    style={{ opacity, y, filter: blur }} // Use filter blur directly in style
                                    className="absolute w-full max-w-4xl text-xl md:text-4xl text-neutral-300 leading-relaxed font-light px-4"
                                >
                                    {text}
                                </motion.p>
                            );
                        })}
                    </div>
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
                title: "Building the Era of Trusted AI Media",
                subtitle: "We build the infrastructure for verifiable media, measurable distribution, and programmable value in the AI economy.",
                cta: "Explore Our Products"
            },
            story: {
                title: "Our Story",
                headline: "We are not just a product team, but a transition team.",
                p1: "Media has shifted from long-form to clips, and now to social diffusion. Companies are no longer just entities; they are media systems. But with the explosion of Generative AI, the 'cost of trust' has skyrocketed.",
                p2: "It is no longer about who speaks the loudest, but about what is real, who contributed, and where the value flows. We solve this at the infrastructure level.",
                p3: "We re-engineer the flow of trust, authority, and revenue: Creation → Tracking → Settlement."
            },
            history: {
                title: "Our Journey",
                items: [
                    { year: "2024", title: "Inception", desc: "Founded to secure the AI economy. Established the core thesis of 'Narrative Infrastructure'." },
                    { year: "2025", title: "Foundation", desc: "Launching AiD Guardian V1 and the Proof-of-Creation Protocol." },
                    { year: "2026", title: "Expansion", desc: "Opening the infrastructure to 3rd party developers and gaming studios." }
                ]
            },
            whoWeAre: {
                label: "WHO WE ARE",
                desc: "We view 'storytelling' not as marketing, but as a system design problem connecting product, data, trust, and settlement.",
                roles: [
                    { text: "Engineers", color: "text-[#ccff00]" }, // Lime
                    { text: "Researchers", color: "text-[#ff66cc]" }, // Pink
                    { text: "Builders", color: "text-[#3399ff]" }, // Blue
                    { text: "Contributors", color: "text-[#ff9933]" } // Orange
                ]
            },
            whatWeBuild: {
                title: "What We Build",
                headline: "We build systems where media becomes verifiable, distribution becomes measurable, and value becomes programmable.",
                layers: [
                    {
                        title: "Guardian Layer",
                        sub: "Trust & Verification",
                        desc: "We don't just interpret AI output; we anchor it. A safety engine that verifies provenance from the moment of creation."
                    },
                    {
                        title: "Protocol Layer",
                        sub: "Provenance × Tracking × Settlement",
                        desc: "Tracking where content, memes, and agent actions spread, and converting that impact into automated settlement events."
                    },
                    {
                        title: "Applications",
                        sub: "Real Products that Stress-Test the Stack",
                        desc: "We prove our infrastructure with actual products: PlayArts (Gaming), AiD Guardian (Enterprise), and StockHoo (Finance)."
                    }
                ]
            },
            principles: {
                title: "Our Principles",
                items: [
                    { icon: Globe, title: "Open", desc: "Built on open standards and decentralized protocols." },
                    { icon: CheckCircle2, title: "Verifiable", desc: "Don't trust, verify. Everything is anchored on-chain." },
                    { icon: Heart, title: "Human-First", desc: "AI should empower human creativity, not replace ownership." },
                    { icon: Zap, title: "Incentive-Aligned", desc: "Value should flow to those who create and contribute." }
                ]
            },
            whyNow: {
                title: "Why Now?",
                points: [
                    "Media is re-organized into clips.",
                    "Companies have become media entities.",
                    "AI noise drives up the cost of trust.",
                    "The winner will own the infrastructure of trust."
                ]
            },
            lookingForward: {
                title: "Looking Forward",
                headline: "We’re building what’s next — and we’re just getting started.",
                desc: "In a world created by AI, the scarcest resource is trust. Holo Studio turns trust from a 'claim' into a 'data structure', enabling a new economy of Autonomous Agents.",
                cta: "Connect With Us"
            }
        },
        ko: {
            hero: {
                title: "AI 시대의 ‘신뢰 인프라’를 만듭니다",
                subtitle: "AI가 만든 콘텐츠와 에이전트의 행동이 ‘가치’가 되는 시대를 위해, 출처·확산·정산이 가능한 인프라를 구축합니다.",
                cta: "프로덕트 살펴보기"
            },
            story: {
                title: "Our Story",
                headline: "우리는 하나의 제품을 만드는 팀이 아니라, 하나의 전환(transition)을 만드는 팀입니다.",
                p1: "미디어는 롱폼에서 숏폼으로, 이제는 소셜 확산으로 바뀌었습니다. 기업은 더 이상 기자를 기다리지 않는 미디어 그 자체가 되었습니다. 하지만 AI가 만든 ‘불신의 노이즈’도 폭증했습니다.",
                p2: "이제 중요한 건 “더 잘 말하는가”가 아니라, 무엇이 진짜인지, 누가 기여했는지, 가치가 어디로 가야 하는지를 증명 가능한 형태로 남기는 일입니다. 홀로스튜디오는 그 문제를 인프라 레벨에서 해결합니다.",
                p3: "우리는 창작과 유통이 만들어내는 신뢰·권위·수익의 흐름을 기록(Creation) → 추적(Tracking) → 정산(Settlement) 가능한 형태로 재구성합니다."
            },
            history: {
                title: "Our Journey",
                items: [
                    { year: "2024", title: "시작 (Inception)", desc: "AI 경제 보안을 위한 비전 수립. '내러티브 인프라' 핵심 이론 정립." },
                    { year: "2025", title: "기반 (Foundation)", desc: "AiD Guardian V1 및 생성 증명(PoC) 프로토콜 런칭." },
                    { year: "2026", title: "확장 (Expansion)", desc: "인프라 개방, 서드파티 개발자 및 게임 스튜디오 생태계 확장." }
                ]
            },
            whoWeAre: {
                label: "WHO WE ARE",
                desc: "우리는 “스토리텔링”을 단순한 마케팅이 아니라, 제품·데이터·신뢰·정산이 연결되는 시스템 설계 문제로 바라봅니다.",
                roles: [
                    { text: "Engineers", color: "text-[#ccff00]" }, // Lime
                    { text: "Researchers", color: "text-[#ff66cc]" }, // Pink
                    { text: "Builders", color: "text-[#3399ff]" }, // Blue
                    { text: "Contributors", color: "text-[#ff9933]" } // Orange
                ]
            },
            whatWeBuild: {
                title: "What We Build",
                headline: "미디어는 검증 가능해지고, 확산은 측정 가능해지며, 가치는 프로그래밍 가능해집니다.",
                layers: [
                    {
                        title: "Guardian Layer",
                        sub: "Trust & Verification",
                        desc: "AI가 만든 결과물을 나중에 해석하는 게 아니라, 처음부터 증명 가능한 형태로 남기는 안전 엔진입니다."
                    },
                    {
                        title: "Protocol Layer",
                        sub: "Provenance × Tracking × Settlement",
                        desc: "콘텐츠와 에이전트 행동이 어디로 퍼지고 어떤 영향을 만들었는지 추적하고, 그 기여를 자동으로 정산 가능한 이벤트로 바꿉니다."
                    },
                    {
                        title: "Applications",
                        sub: "Real Products that Stress-Test the Stack",
                        desc: "우리는 인프라를 말로만 주장하지 않고, 실제 제품으로 검증합니다: PlayArts(게임), AiD Guardian(기업), StockHoo(금융)."
                    }
                ]
            },
            principles: {
                title: "핵심 원칙",
                items: [
                    { icon: Globe, title: "Open", desc: "개방형 표준과 탈중앙화 프로토콜 위에 구축합니다." },
                    { icon: CheckCircle2, title: "Verifiable", desc: "신뢰하지 말고 검증하세요. 모든 것은 온체인에 기록됩니다." },
                    { icon: Heart, title: "Human-First", desc: "AI는 인간의 소유권을 대체하는 것이 아니라 창의성을 강화해야 합니다." },
                    { icon: Zap, title: "Incentive-Aligned", desc: "가치는 기여한 사람에게 공정하게 흘러가야 합니다." }
                ]
            },
            whyNow: {
                title: "왜 지금인가?",
                points: [
                    "미디어는 클립 기반으로 재구성되었습니다.",
                    "기업은 직접 미디어가 되었습니다.",
                    "AI 노이즈로 인해 신뢰 비용이 폭증했습니다.",
                    "승자는 신뢰의 인프라를 가진 쪽이 될 것입니다."
                ]
            },
            lookingForward: {
                title: "Looking Forward",
                headline: "우리는 다음 시대를 만들고 있으며, 이제 막 시작했습니다.",
                desc: "AI가 만든 세계에서 가장 희소한 것은 창작물이 아니라 '신뢰'입니다. 홀로스튜디오는 신뢰를 '주장'이 아닌 '데이터 구조'로 만들고, 그 위에 새로운 미디어 경제와 에이전트 경제가 돌아가게 합니다.",
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

            {/* 2. OUR STORY (Scrollytelling) */}
            <StickyTextReveal 
                title={c.story.title}
                headline={c.story.headline}
                paragraphs={[c.story.p1, c.story.p2, c.story.p3]}
            />

            {/* 3. OUR HISTORY */}
            <section className="py-32 px-6 md:px-12 bg-[#080808] border-b border-white/10">
                <div className="max-w-[1400px] mx-auto">
                    <FadeIn>
                        <h2 className="text-5xl md:text-8xl font-bold mb-24 tracking-tighter opacity-90">{c.history.title}</h2>
                    </FadeIn>
                    
                    <div className="relative border-l border-white/20 ml-4 md:ml-0 md:pl-12 space-y-24">
                        {c.history.items.map((item, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="relative pl-8 md:pl-0 grid md:grid-cols-12 gap-8 items-start group">
                                    <div className="absolute -left-[5px] md:-left-[53px] top-2 w-3 h-3 bg-[#050505] border-2 border-white rounded-full group-hover:bg-[#ccff00] group-hover:border-[#ccff00] transition-colors shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_15px_rgba(204,255,0,0.6)]" />
                                    
                                    <div className="md:col-span-3">
                                        <div className="text-sm font-mono text-[#ccff00] mb-2">{item.year}</div>
                                        <h3 className="text-3xl font-bold">{item.title}</h3>
                                    </div>
                                    <div className="md:col-span-7">
                                        <p className="text-xl text-neutral-400 leading-relaxed group-hover:text-neutral-200 transition-colors">{item.desc}</p>
                                    </div>
                                    <div className="md:col-span-2 hidden md:flex items-center justify-end">
                                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
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
                     <p className="max-w-2xl text-neutral-400 text-lg">{c.whoWeAre.desc}</p>
                 </div>
                 <div className="space-y-2 md:space-y-4">
                     {c.whoWeAre.roles.map((role, i) => (
                         <WhoWeAreRow key={i} text={role.text} color={role.color} index={i} containerRef={whoWeAreRef} />
                     ))}
                 </div>
             </section>

            {/* 5. WHAT WE BUILD (Layers with Parallax) */}
            <section className="py-32 px-6 md:px-12 bg-[#080808] border-b border-white/10 overflow-hidden">
                <div className="max-w-[1400px] mx-auto">
                    <FadeIn>
                        <div className="mb-20 max-w-4xl relative z-10">
                            <div className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">{c.whatWeBuild.title}</div>
                            <h2 className="text-3xl md:text-6xl font-bold leading-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
                                {c.whatWeBuild.headline}
                            </h2>
                        </div>
                    </FadeIn>

                    <div className="grid gap-6">
                        {c.whatWeBuild.layers.map((layer, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                            >
                                <div className="group relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-12 hover:border-indigo-500/30 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-indigo-900/20">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
                                        <div className="md:col-span-1 text-xs font-mono text-neutral-600 border border-neutral-800 rounded-full w-8 h-8 flex items-center justify-center">0{i+1}</div>
                                        <div className="md:col-span-4">
                                            <h3 className="text-2xl md:text-4xl font-bold mb-2 group-hover:text-white transition-colors">{layer.title}</h3>
                                            <div className="text-sm font-mono text-[#ccff00] opacity-80 group-hover:opacity-100">{layer.sub}</div>
                                        </div>
                                        <div className="md:col-span-7">
                                            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed group-hover:text-neutral-200 transition-colors">
                                                {layer.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. WHY NOW & PRINCIPLES */}
            <section className="py-32 px-6 md:px-12 bg-[#050505] border-b border-white/10">
                <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-24">
                    {/* Why Now */}
                    <div>
                        <FadeIn>
                            <h3 className="text-3xl font-bold mb-12">{c.whyNow.title}</h3>
                            <ul className="space-y-8">
                                {c.whyNow.points.map((point, i) => (
                                    <li key={i} className="flex gap-4 items-start text-xl md:text-2xl font-light text-neutral-300">
                                        <div className="w-2 h-2 rounded-full bg-indigo-500 mt-3 flex-shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="mt-12 p-6 bg-indigo-900/10 border border-indigo-500/20 rounded-xl text-indigo-400 font-medium text-lg">
                                {language === 'en' ? "AI Storytelling is no longer about copy, it's about infrastructure." : "AI 시대의 스토리텔링은 “카피”가 아니라 “인프라”가 됩니다."}
                            </div>
                        </FadeIn>
                    </div>

                    {/* Principles */}
                    <div>
                         <FadeIn delay={0.2}>
                            <h3 className="text-3xl font-bold mb-12">{c.principles.title}</h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {c.principles.items.map((item, i) => (
                                    <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                        <item.icon className="w-8 h-8 text-[#ccff00] mb-4" />
                                        <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                                        <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
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