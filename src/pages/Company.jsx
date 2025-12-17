import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from '@/components/LanguageContext';
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, CheckCircle2, ChevronRight, Play, ArrowUpRight, Network, Cpu, Database, Layers, Gamepad2, Zap, Shield, Globe, Lock } from 'lucide-react';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

// Component for "Who We Are" text moving Right to Left
const WhoWeAreRow = ({ text, index, containerRef }) => {
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
            <div className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-neutral-200 hover:text-white transition-colors">
                {text}
            </div>
             {/* Repeat for continuous feel if needed, or just decoration */}
             <div className="w-4 h-4 md:w-8 md:h-8 rounded-full border-2 border-neutral-700" />
        </motion.div>
    );
};

// Component for Vision Section (Text moving Left to Right)
const VisionText = ({ text, sub, containerRef, index }) => {
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Move from Left (negative x) to Right (positive x)
    const x = useTransform(
        scrollYProgress,
        [0, 1],
        [-200 * (index + 1), 200 * (index + 1)] 
    );
    
    const opacity = useTransform(
        scrollYProgress,
        [0.2, 0.5, 0.8],
        [0, 1, 0]
    );

    return (
        <motion.div 
            style={{ x, opacity }}
            className="my-12 md:my-24"
        >
            <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">
                {text}
            </h3>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl">
                {sub}
            </p>
        </motion.div>
    );
};


export default function Company() {
    const { language } = useLanguage();
    const containerRef = useRef(null);
    const visionRef = useRef(null);
    const whoWeAreRef = useRef(null);

    const t = {
        en: {
            hero: {
                title: "The Narrative Infrastructure for the AI Era",
                subtitle: "Companies are no longer just media. They are media systems. We build the trust layer they run on."
            },
            market: {
                label: "THE SHIFT",
                headline: "Why Narrative Infrastructure is Essential",
                points: [
                    {
                        title: "From Content to System",
                        desc: "Competition has shifted from 'Content Production' to 'Infrastructure' that systemizes origin, rights, policy, and settlement."
                    },
                    {
                        title: "The Trust Bottleneck",
                        desc: "AI creates infinite cheap content. The new scarcity is trust. We solve the problem of 'What is real? Whose right is it?'"
                    },
                    {
                        title: "Automated Governance",
                        desc: "Like Disney's Jarvis or OpenAI's licensing, modern IP needs an automated OS to manage rights and risks in real-time."
                    }
                ]
            },
            vision: {
                label: "OUR VISION",
                items: [
                    { 
                        title: "Web3 Philosophy + Generative AI", 
                        desc: "Combining the ownership of Web3 with the abundance of GenAI to create a true Autonomous Economy." 
                    },
                    { 
                        title: "Guidance for the Future", 
                        desc: "We provide the guardrails and economic models for a future where AI agents transact and create value autonomously." 
                    },
                    { 
                        title: "The Standard for Trust", 
                        desc: "Positioning as the global standard for AI safety, rights management, and automated settlement." 
                    }
                ]
            },
            tech: {
                title: "Technical Specification",
                sub: "Proprietary technology stack for Full-Media AI Guardrails.",
                pipeline: {
                    title: "6-Step Verification Pipeline",
                    steps: [
                        { name: "Input Analysis", desc: "Multi-modal prompt injection detection" },
                        { name: "AI Generation", desc: "Real-time content synthesis" },
                        { name: "Media Guard", desc: "Sub-second visual/audio safety checks" },
                        { name: "DAO Consensus", desc: "Community-driven edge case resolution" },
                        { name: "On-Chain Proof", desc: "Immutable provenance anchor" },
                        { name: "Game Asset", desc: "Engine-ready safe output" }
                    ]
                },
                depin: {
                    title: "DePIN GPU Mesh",
                    desc: "Decentralized Physical Infrastructure Network democratizing safety compute.",
                    features: [
                        { icon: Network, title: "Heterogeneous Compute", desc: "Unifying GB200 to Consumer GPUs." },
                        { icon: Cpu, title: "MIG Slicing", desc: "Optimized resource allocation via Multi-Instance GPU." },
                        { icon: Database, title: "Distributed Training", desc: "Decentralized checkpointing for model evolution." }
                    ]
                }
            },
            whoWeAre: {
                label: "WHO WE ARE",
                roles: ["ENGINEERS", "RESEARCHERS", "BUILDERS", "CONTRIBUTORS", "VISIONARIES"]
            },
            history: {
                title: "Our Journey",
                items: [
                    { year: "2024", title: "Inception", desc: "Founded to secure the AI economy." },
                    { year: "2025", title: "Foundation", desc: "Launching core safety engine V1." },
                    { year: "2026", title: "Expansion", desc: "Opening infrastructure to 3rd parties." }
                ]
            }
        },
        ko: {
            hero: {
                title: "AI 시대를 위한 내러티브 인프라",
                subtitle: "기업은 이제 단순한 미디어가 아닌 '미디어 시스템'입니다. 우리는 그 시스템이 작동하는 신뢰 레이어를 구축합니다."
            },
            market: {
                label: "시장 서사 (THE SHIFT)",
                headline: "내러티브 인프라가 필수재가 된 이유",
                points: [
                    {
                        title: "콘텐츠에서 시스템으로",
                        desc: "경쟁의 본질이 '콘텐츠 생산'에서 출처·권리·정책·정산을 시스템화하는 '인프라' 경쟁으로 이동하고 있습니다."
                    },
                    {
                        title: "신뢰의 병목 현상",
                        desc: "AI는 무한한 저비용 콘텐츠를 만들어냅니다. 희소한 것은 '신뢰'입니다. 우리는 '무엇이 진짜인가?'의 문제를 해결합니다."
                    },
                    {
                        title: "자동화된 거버넌스",
                        desc: "디즈니의 Jarvis나 OpenAI 라이선싱처럼, 현대의 IP는 실시간으로 권리와 리스크를 관리하는 자동화된 OS가 필요합니다."
                    }
                ]
            },
            vision: {
                label: "우리의 비전 (OUR VISION)",
                items: [
                    { 
                        title: "Web3 철학 + 생성형 AI", 
                        desc: "Web3의 소유권 철학과 생성형 AI의 풍요로움을 결합하여 진정한 자율 경제(Autonomous Economy)를 실현합니다." 
                    },
                    { 
                        title: "미래를 위한 가이던스", 
                        desc: "AI 에이전트들이 자율적으로 거래하고 가치를 창출하는 미래를 위한 가드레일과 경제 모델을 제시합니다." 
                    },
                    { 
                        title: "자율 경제의 표준", 
                        desc: "AI 안전, 권리 관리, 그리고 자동 정산을 위한 글로벌 표준 인프라로 자리매김합니다." 
                    }
                ]
            },
            tech: {
                title: "기술 명세 (Technical Spec)",
                sub: "Full-Media AI Guardrails를 위한 독자적인 기술 스택.",
                pipeline: {
                    title: "6단계 검증 파이프라인",
                    steps: [
                        { name: "입력 분석", desc: "멀티모달 프롬프트 인젝션 탐지" },
                        { name: "AI 생성", desc: "실시간 콘텐츠 합성" },
                        { name: "Media Guard", desc: "초고속 시각/청각 안전성 검사" },
                        { name: "DAO 합의", desc: "커뮤니티 기반 엣지 케이스 해결" },
                        { name: "온체인 증명", desc: "불변의 출처 기록 (Provenance)" },
                        { name: "게임 자산화", desc: "엔진 호환 안전 출력" }
                    ]
                },
                depin: {
                    title: "DePIN GPU 메쉬",
                    desc: "안전성 컴퓨팅 접근을 민주화하는 탈중앙화 물리 인프라 네트워크.",
                    features: [
                        { icon: Network, title: "이기종 컴퓨팅", desc: "GB200부터 소비자용 GPU까지 단일 메쉬로 통합." },
                        { icon: Cpu, title: "MIG 슬라이싱", desc: "Multi-Instance GPU 분할을 통한 최적화된 자원 배분." },
                        { icon: Database, title: "분산 학습", desc: "견고한 모델 진화를 위한 탈중앙 체크포인트 저장." }
                    ]
                }
            },
            whoWeAre: {
                label: "우리는 누구인가 (WHO WE ARE)",
                roles: ["엔지니어들", "연구원", "건축업자", "기여자", "개척자들"]
            },
            history: {
                title: "Our Journey",
                items: [
                    { year: "2024", title: "시작 (Inception)", desc: "AI 경제 보안을 위한 비전 수립." },
                    { year: "2025", title: "기반 (Foundation)", desc: "핵심 안전 엔진 V1 출시." },
                    { year: "2026", title: "확장 (Expansion)", desc: "인프라 개방 및 생태계 확장." }
                ]
            }
        }
    };

    const c = t[language];

    return (
        <div ref={containerRef} className="bg-[#050505] min-h-screen text-white font-sans selection:bg-indigo-500/30 overflow-hidden">
            <SEO 
                title="Company" 
                description={c.hero.subtitle}
            />

            {/* 1. HERO SECTION */}
            <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-32 border-b border-white/10">
                <div className="max-w-[1400px] mx-auto w-full z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-8xl lg:text-[6rem] font-bold leading-[1.1] tracking-tight mb-8 max-w-6xl">
                            {c.hero.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl leading-relaxed mb-12">
                            {c.hero.subtitle}
                        </p>
                        
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <Link to={createPageUrl('Products')}>
                                <Button className="rounded-full bg-[#ccff00] text-black hover:bg-[#b3e600] px-8 py-6 text-lg font-bold">
                                    {language === 'en' ? 'Explore Our Tech' : '기술 살펴보기'}
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. MARKET NARRATIVE (VC PITCH) */}
            <section className="py-32 px-6 md:px-12 bg-[#080808]">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-12 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-indigo-500" />
                        {c.market.label}
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl font-bold mb-20 max-w-4xl leading-tight">
                        {c.market.headline}
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                        {c.market.points.map((point, i) => (
                            <div key={i} className="group">
                                <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit border border-white/10 group-hover:border-indigo-500/50 transition-colors">
                                    {i === 0 && <Layers className="w-6 h-6 text-indigo-400" />}
                                    {i === 1 && <Lock className="w-6 h-6 text-indigo-400" />}
                                    {i === 2 && <Shield className="w-6 h-6 text-indigo-400" />}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{point.title}</h3>
                                <p className="text-neutral-400 leading-relaxed">
                                    {point.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. VISION (HORIZONTAL SCROLL EFFECT) */}
            <section ref={visionRef} className="py-32 px-6 md:px-12 border-t border-white/10 bg-[#050505]">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-12">
                        {c.vision.label}
                    </div>
                    
                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent hidden md:block" />
                        
                        <div className="space-y-32 md:pl-12">
                            {c.vision.items.map((item, i) => (
                                <VisionText 
                                    key={i} 
                                    index={i}
                                    text={item.title} 
                                    sub={item.desc} 
                                    containerRef={visionRef} 
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

             {/* 4. TECHNOLOGY SPEC */}
             <section className="py-24 px-6 md:px-12 bg-[#080808] border-t border-white/10">
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">{c.tech.title}</h2>
                            <p className="text-neutral-500">{c.tech.sub}</p>
                        </div>
                        <div className="flex gap-2">
                             <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                             <span className="text-xs font-mono text-neutral-400">LIVE SYSTEM</span>
                        </div>
                    </div>

                    {/* Pipeline Visualization */}
                    <div className="mb-24">
                        <h3 className="text-lg font-mono text-indigo-400 mb-8 uppercase tracking-widest">{c.tech.pipeline.title}</h3>
                        <div className="relative">
                            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-indigo-900/20 via-indigo-500/20 to-indigo-900/20 -translate-y-1/2 hidden md:block" />
                            <div className="flex overflow-x-auto pb-4 gap-4 md:grid md:grid-cols-6 md:pb-0 snap-x no-scrollbar">
                                {c.tech.pipeline.steps.map((step, i) => (
                                    <div key={i} className="min-w-[150px] md:min-w-0 relative bg-[#111] p-4 rounded-xl border border-neutral-800 hover:border-indigo-500/50 transition-all group z-10 snap-center">
                                        <div className="absolute -top-3 left-4 bg-[#080808] px-2 text-xs font-mono text-neutral-500 group-hover:text-indigo-400 transition-colors">
                                            0{i+1}
                                        </div>
                                        <div className="font-bold text-white mb-2 text-sm">{step.name}</div>
                                        <div className="text-xs text-neutral-500 leading-tight">{step.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* DePIN Section */}
                    <div className="bg-[#111] rounded-3xl p-8 md:p-12 border border-neutral-800">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">{c.tech.depin.title}</h3>
                                <p className="text-neutral-400 leading-relaxed mb-8">
                                    {c.tech.depin.desc}
                                </p>
                                <div className="space-y-6">
                                    {c.tech.depin.features.map((feat, i) => (
                                        <div key={i} className="flex gap-4 group">
                                            <div className="w-10 h-10 rounded-lg bg-indigo-900/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                                                <feat.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-white text-sm mb-1 group-hover:text-indigo-400 transition-colors">{feat.title}</div>
                                                <div className="text-xs text-neutral-500">{feat.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Abstract Visual for DePIN */}
                            <div className="bg-[#080808] rounded-2xl p-8 border border-neutral-800 flex items-center justify-center min-h-[300px]">
                                <div className="grid grid-cols-2 gap-6 opacity-80">
                                    <div className="flex flex-col items-center gap-2 p-4 border border-white/10 rounded-xl bg-[#111]">
                                        <Cpu className="w-8 h-8 text-indigo-500" />
                                        <span className="text-[10px] font-mono text-neutral-500">GPU NODE</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 p-4 border border-white/10 rounded-xl bg-[#111] translate-y-8">
                                        <Layers className="w-8 h-8 text-indigo-500" />
                                        <span className="text-[10px] font-mono text-neutral-500">VERIFIER</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 p-4 border border-white/10 rounded-xl bg-[#111]">
                                        <Database className="w-8 h-8 text-indigo-500" />
                                        <span className="text-[10px] font-mono text-neutral-500">STORAGE</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 p-4 border border-white/10 rounded-xl bg-[#111] translate-y-8">
                                        <Network className="w-8 h-8 text-indigo-500" />
                                        <span className="text-[10px] font-mono text-neutral-500">MESH</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. WHO WE ARE (RIGHT TO LEFT ANIMATION) */}
            <section ref={whoWeAreRef} className="py-32 bg-[#050505] border-t border-white/10 overflow-hidden">
                <div className="px-6 md:px-12 mb-12 max-w-[1400px] mx-auto">
                    <div className="text-xs font-bold uppercase tracking-widest text-neutral-400">{c.whoWeAre.label}</div>
                </div>
                <div className="space-y-4 md:space-y-8">
                    {c.whoWeAre.roles.map((role, i) => (
                        <WhoWeAreRow key={i} text={role} index={i} containerRef={whoWeAreRef} />
                    ))}
                </div>
            </section>

            {/* 6. HISTORY / TIMELINE */}
            <section className="py-32 px-6 md:px-12 border-t border-white/10 bg-[#080808]">
                <div className="max-w-[1400px] mx-auto">
                    <h2 className="text-5xl md:text-7xl font-bold mb-24">{c.history.title}</h2>
                    
                    <div className="relative border-l border-white/20 ml-4 md:ml-0 md:pl-12 space-y-24">
                        {c.history.items.map((item, i) => (
                            <div key={i} className="relative pl-8 md:pl-0 grid md:grid-cols-12 gap-8 items-start group">
                                <div className="absolute -left-[5px] md:-left-[53px] top-2 w-3 h-3 bg-[#050505] border-2 border-white rounded-full group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-colors" />
                                
                                <div className="md:col-span-3">
                                    <div className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">{item.year}</div>
                                    <h3 className="text-2xl font-bold">{item.title}</h3>
                                </div>
                                <div className="md:col-span-6">
                                    <p className="text-xl text-neutral-400 leading-relaxed">{item.desc}</p>
                                </div>
                                <div className="md:col-span-3 hidden md:flex items-center justify-end">
                                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}