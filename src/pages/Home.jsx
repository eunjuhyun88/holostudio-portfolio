import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Layers, Trophy, Target, Globe, Cpu, BarChart3, Gamepad2, Play, ChevronDown, ExternalLink, FileText } from 'lucide-react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";

export default function Home() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const [activeStage, setActiveStage] = useState(0);

    // Images from user upload
    const images = [
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/cc0228bec_2025-12-171042431.png", // Likely AidGuardian
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/40f53ee94_2025-12-17104243.png", // PlayArts
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/f959551ff_2025-12-17104242.png", // Elememetal
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/86418a4db_2025-12-17104241.png", // Stocku
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/0fb68b425_2025-12-17104239.png",
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/cd87ce6d6_2025-12-17104234.png",
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/755fa01a8_2025-12-17104232.png",
    ];

    const products = [
        {
            id: "aidguardian",
            name: "AiD Guardian",
            tag: "Multi-Modal Safety Engine",
            desc: "Multi-modal content safety engine for image/video/audio/text. Low-latency classification + timeline risk view.",
            features: ["Accuracy / Recall", "Latency < 10ms", "GARM Categories"],
            image: images[0],
            color: "text-indigo-400",
            bgGradient: "from-indigo-900/40",
            path: "/AidGuardian",
            primaryBtn: "Try Demo",
            secondaryBtn: "Contact Sales"
        },
        {
            id: "playarts",
            name: "PlayArts",
            tag: "Creation-time Provenance",
            desc: "Creation-time provenance + cross-platform impact tracking. Not post-hoc watermarking, but verification at the source.",
            features: ["Proof-of-Creation", "Sentinel Attestations", "Impact Events"],
            image: images[1],
            color: "text-purple-400",
            bgGradient: "from-purple-900/40",
            path: "/PlayArts",
            primaryBtn: "Partnership",
            secondaryBtn: "Deck"
        },
        {
            id: "elememetal",
            name: "EleMEMEtal",
            tag: "Game-first UGC Ecosystem",
            desc: "High-decision PvP with AI-native UGC loops. Ensuring safety and provenance for player-created assets.",
            features: ["1v1 PvP Core Loop", "AI Content Expansion", "Safety Rails"],
            image: images[2],
            color: "text-orange-400",
            bgGradient: "from-orange-900/40",
            path: "/Elememetal",
            primaryBtn: "Playtest",
            secondaryBtn: "Publish Kit"
        },
        {
            id: "stocku",
            name: "Stocku",
            tag: "Zone-based Social Intelligence",
            desc: "Zone-based market conversation + proof + AI signal layer. Credibility and insights for on-chain markets.",
            features: ["Zone Chat", "Proof of Profit", "AI Strategy Signals"],
            image: images[3],
            color: "text-emerald-400",
            bgGradient: "from-emerald-900/40",
            path: "/Stocku",
            primaryBtn: "Open App",
            secondaryBtn: "Deck"
        }
    ];

    const milestones = [
        { title: "SEEDIFY 2025 AI AGENT", desc: "Global Winner", icon: Trophy, color: "text-yellow-500" },
        { title: "ETHDenver 2025", desc: "Top 10 Finalist", icon: Target, color: "text-blue-500" },
        { title: "OKX ETHCC 2025", desc: "2nd Place", icon: Trophy, color: "text-white" },
        { title: "NVIDIA Inception", desc: "Program Member", icon: Cpu, color: "text-green-500" }
    ];

    return (
        <div className="bg-[#050505] text-white selection:bg-indigo-500/30 font-sans">
            {/* Header / Nav (Visual only, actual nav in Layout) */}
            <div className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center pointer-events-none mix-blend-difference">
                {/* Visual placeholder for header layout alignment */}
            </div>

            {/* Section 01: HERO (Pinned) */}
            <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#050505] to-[#050505]" />
                    {/* Abstract Neon Particles/Graph Placeholder */}
                    <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] invert" />
                </div>

                <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-3 py-1 mb-6 border border-indigo-500/30 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono tracking-widest uppercase">
                            Full-Media AI Guardrails
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
                            HOLO STUDIO
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                            AI 콘텐츠 생성과 안전성을 동시에 제공하는 차세대 미디어/게임/Web3 회사.<br/>
                            <span className="text-white font-medium">Safety + Provenance + Value</span>를 하나의 포트폴리오로 구축합니다.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 h-12 text-base font-bold border-0" onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}>
                                Explore Our Businesses
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base border-neutral-800 text-white hover:bg-white/10 bg-transparent">
                                Contact / Partnership
                            </Button>
                        </div>
                    </motion.div>
                </div>
                
                {/* Scroll Indicator */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-600"
                >
                    <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                    <div className="w-px h-12 bg-gradient-to-b from-neutral-600 to-transparent" />
                </motion.div>
            </section>

            {/* Section 02: WHY NOW (Market Pressure Strip) */}
            <section className="py-12 border-y border-neutral-900 bg-[#080808]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">2025</div>
                            <div className="text-xs text-neutral-500 uppercase tracking-wider">AI 규제/안전성 전환점</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">EU AI Act</div>
                            <div className="text-xs text-neutral-500 uppercase tracking-wider">DSA & AI Act Enforcement</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">$80B</div>
                            <div className="text-xs text-neutral-500 uppercase tracking-wider">AI 콘텐츠 시장 (2030)</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">$13B+</div>
                            <div className="text-xs text-neutral-500 uppercase tracking-wider">Gaming/3D Safety Gap</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 03: THE CORE PROBLEM */}
            <section className="py-32 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div {...fadeIn} className="mb-16">
                        <h2 className="text-sm font-mono text-indigo-500 mb-4 uppercase tracking-widest">The Core Problem</h2>
                        <h3 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
                            AI 콘텐츠 생성이 폭발적으로 증가하는데,<br/> 
                            <span className="text-neutral-500">안전성 인프라는 여전히 단편적이고 불완전합니다.</span>
                        </h3>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "2025 Content Safety Crisis",
                                desc: "Meta 등 대형 플랫폼의 자동화·검열 논란 가속.",
                                badge: "AI 콘텐츠 유해성 검증",
                                icon: Shield
                            },
                            {
                                title: "Limits of Safety Systems",
                                desc: "LLM 텍스트 중심 필터링. 이미지·비디오·3D 가드레일 부재.",
                                badge: "3개 미디어타입 커버리지",
                                icon: Layers
                            },
                            {
                                title: "Gaming/3D Safety Gap",
                                desc: "메타버스·게임 UGC 내 유해 콘텐츠 생성 무방비.",
                                badge: "3D/UGC Safety Gap",
                                icon: Gamepad2
                            }
                        ].map((card, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-8 rounded-2xl bg-neutral-900/30 border border-neutral-800 hover:border-indigo-500/50 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500/10 group-hover:text-indigo-400 transition-colors">
                                    <card.icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold mb-3">{card.title}</h4>
                                <p className="text-neutral-400 mb-6 text-sm leading-relaxed">{card.desc}</p>
                                <span className="inline-block px-3 py-1 bg-neutral-800 rounded-full text-[10px] text-neutral-300 uppercase tracking-wide group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-colors">
                                    {card.badge}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 04: COMPANY THESIS */}
            <section className="py-24 bg-[#0A0A0A] border-y border-neutral-900 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-xs font-mono text-neutral-500 mb-6 uppercase tracking-widest">HOLO STUDIO Thesis</h2>
                    <p className="text-2xl md:text-4xl font-medium leading-tight mb-12">
                        "우리는 AI 콘텐츠를 <span className="text-white font-bold border-b-2 border-indigo-500">검증 가능하고(Verifiable)</span>, <span className="text-white font-bold border-b-2 border-indigo-500">안전하며(Safe)</span>, <span className="text-white font-bold border-b-2 border-indigo-500">수익화 가능한(Monetizable)</span> 객체로 전환하는 사업들을 구축합니다."
                    </p>
                    <div className="flex justify-center gap-4 md:gap-12 text-sm md:text-base font-mono text-neutral-400">
                        <span className="flex items-center gap-2"><span className="w-2 h-2 bg-indigo-500 rounded-full"></span>Guardrails</span>
                        <span className="flex items-center gap-2"><span className="w-2 h-2 bg-purple-500 rounded-full"></span>Provenance</span>
                        <span className="flex items-center gap-2"><span className="w-2 h-2 bg-orange-500 rounded-full"></span>Value Routing</span>
                    </div>
                </div>
            </section>

            {/* Section 05 & 06: PRODUCT SPOTLIGHT (Scrollytelling) */}
            <section id="products" className="relative bg-[#050505]">
                {/* Intro Title */}
                <div className="absolute top-0 left-0 w-full pt-20 pb-10 px-6 z-10 pointer-events-none text-center md:text-left md:pl-20">
                     <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-2">Our Businesses</h2>
                     <p className="text-xl text-neutral-300">One Company, Four Connected Businesses.</p>
                </div>

                {/* Sticky Visual Container */}
                <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center md:justify-start md:pl-20">
                    <div className="absolute inset-0 w-full h-full bg-[#050505]" />
                    
                    {/* Background Visuals Crossfading */}
                    <AnimatePresence mode="popLayout">
                        {products.map((prod, idx) => (
                            idx === activeStage && (
                                <motion.div
                                    key={prod.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute inset-0 w-full h-full"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${prod.bgGradient} to-[#050505] opacity-20`} />
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-30" />
                                    
                                    {/* Large Background Text */}
                                    <div className="absolute bottom-10 right-10 text-[10vw] font-black text-white/5 leading-none select-none text-right">
                                        {prod.name.toUpperCase()}
                                    </div>
                                    
                                    {/* Central Visual - Using provided screenshots */}
                                    <div className="absolute top-1/2 left-0 md:left-20 transform -translate-y-1/2 w-full md:w-1/2 h-[60vh] flex items-center justify-center p-6">
                                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0A0A0A]">
                                            <img src={prod.image} alt={prod.name} className="w-full h-full object-cover opacity-80" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                            <div className="absolute bottom-6 left-6 right-6">
                                                <div className="text-xs font-mono text-white/70 mb-2 border-b border-white/10 pb-2">PREVIEW</div>
                                                <div className="text-white font-medium">{prod.name} Dashboard</div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>

                {/* Scrolling Cards Overlay */}
                <div className="relative z-20 -mt-[100vh]">
                    {products.map((prod, idx) => {
                        const ref = useRef(null);
                        const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

                        useEffect(() => {
                            if (isInView) setActiveStage(idx);
                        }, [isInView, idx]);

                        return (
                            <div key={idx} ref={ref} className="h-screen w-full flex items-center justify-center md:justify-end px-6 md:px-24 pointer-events-none">
                                <motion.div 
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="max-w-md w-full pointer-events-auto"
                                >
                                    <div className="bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className={`text-sm font-bold tracking-wider uppercase ${prod.color}`}>
                                                {prod.tag}
                                            </div>
                                            <div className="text-xs text-neutral-500 font-mono">0{idx + 1}</div>
                                        </div>
                                        
                                        <h3 className="text-3xl font-bold mb-4 text-white">
                                            {prod.name}
                                        </h3>
                                        
                                        <p className="text-neutral-400 leading-relaxed mb-8 text-sm">
                                            {prod.desc}
                                        </p>

                                        {/* Features Blocks */}
                                        <div className="grid grid-cols-1 gap-2 mb-8">
                                            {prod.features.map((feat, i) => (
                                                <div key={i} className="bg-white/5 px-4 py-2 rounded-lg text-xs font-mono text-neutral-300 border border-white/5 flex items-center gap-2">
                                                    <div className={`w-1.5 h-1.5 rounded-full ${prod.color.replace('text-', 'bg-')}`} />
                                                    {feat}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex gap-3">
                                            <Link to={createPageUrl(prod.path.substring(1))} className="flex-1">
                                                <Button className="w-full bg-white text-black hover:bg-neutral-200 h-10 rounded-lg text-sm font-bold border-0">
                                                    {prod.primaryBtn}
                                                </Button>
                                            </Link>
                                            <Button variant="outline" className="flex-1 border-neutral-700 text-white hover:bg-white/5 bg-transparent h-10 rounded-lg text-sm">
                                                {prod.secondaryBtn}
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Section 07: PROOF & MILESTONES */}
            <section className="py-32 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div {...fadeIn} className="mb-12">
                        <h2 className="text-3xl font-bold mb-2">Proof & Milestones</h2>
                        <p className="text-neutral-500">Recognized by global leaders.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {milestones.map((m, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-[#0A0A0A] p-6 rounded-xl border border-neutral-800 flex flex-col justify-between h-32 hover:border-white/20 transition-colors"
                            >
                                <div className="flex justify-between items-start">
                                    <m.icon className={`w-6 h-6 ${m.color}`} />
                                    <ArrowRight className="w-4 h-4 text-neutral-700" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white mb-1">{m.title}</div>
                                    <div className="text-xs text-neutral-500">{m.desc}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 08: HOW IT CONNECTS (Diagram) */}
            <section className="py-24 bg-[#0A0A0A] border-t border-neutral-900 overflow-hidden relative">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                 <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-sm font-mono text-neutral-500 mb-8 uppercase tracking-widest">One Company, Four Businesses</h2>
                    
                    <div className="flex flex-col items-center gap-4 mb-12">
                        <div className="bg-indigo-900/20 border border-indigo-500/30 px-8 py-4 rounded-xl text-indigo-400 font-bold w-64">
                            AiD Guardian (Safety)
                        </div>
                        <div className="h-8 w-px bg-neutral-800" />
                        <div className="bg-purple-900/20 border border-purple-500/30 px-8 py-4 rounded-xl text-purple-400 font-bold w-64">
                            PlayArts (Provenance)
                        </div>
                        <div className="h-8 w-px bg-neutral-800" />
                        <div className="flex gap-4">
                            <div className="bg-orange-900/20 border border-orange-500/30 px-6 py-4 rounded-xl text-orange-400 font-bold text-sm w-40">
                                EleMEMEtal
                            </div>
                            <div className="bg-emerald-900/20 border border-emerald-500/30 px-6 py-4 rounded-xl text-emerald-400 font-bold text-sm w-40">
                                Stocku
                            </div>
                        </div>
                    </div>

                    <p className="text-xl text-white font-medium max-w-2xl mx-auto">
                        HOLO STUDIO는 "안전/출처/확산/가치"의 전 과정을 <span className="text-neutral-400">사업 포트폴리오로 분리</span>해 실행합니다.
                    </p>
                 </div>
            </section>

            {/* Section 09: RESEARCH / UPDATES (Feed) */}
            <section className="py-24 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <h2 className="text-2xl font-bold">Research & Updates</h2>
                        <Button variant="link" className="text-indigo-400">View All</Button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "EU AI Act 대응", desc: "멀티모달 안전 분류 체계 가이드라인", date: "Oct 24" },
                            { title: "Gaming/3D Safety", desc: "UGC Taxonomy for Metaverse Environments", date: "Nov 02" },
                            { title: "Attribution Primitives", desc: "Cross-platform media routing on-chain", date: "Nov 15" }
                        ].map((item, idx) => (
                            <div key={idx} className="border-t border-neutral-800 pt-6 hover:border-indigo-500 transition-colors cursor-pointer group">
                                <div className="text-xs text-neutral-500 mb-2 font-mono">{item.date}</div>
                                <h3 className="text-lg font-bold mb-2 group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                                <p className="text-sm text-neutral-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 10: CONTACT */}
            <section className="py-32 bg-[#050505] border-t border-neutral-900">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
                    <div>
                        <h2 className="text-5xl font-black tracking-tighter mb-4">Work with HOLO.</h2>
                        <p className="text-neutral-500 text-lg">Building the trusted autonomous future.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to={createPageUrl("Contact")}>
                            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-full px-10 h-14 text-lg font-bold border-0">
                                Invest / Partner
                            </Button>
                        </Link>
                        <Button variant="outline" size="lg" className="rounded-full px-10 h-14 text-lg border-neutral-800 text-white hover:bg-white/10 bg-transparent">
                            Enterprise Inquiry
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}