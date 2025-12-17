import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Layers, Trophy, Target, Globe, Cpu, BarChart3, Gamepad2, Play, ChevronDown, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";

export default function Home() {
    // Scroll Progress for Hero
    const { scrollY } = useScroll();
    const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
    const heroScale = useTransform(scrollY, [0, 500], [1, 0.95]);

    // Active Product State for Scrollytelling
    const [activeProduct, setActiveProduct] = useState(0);

    const products = [
        {
            id: "aid-guardian",
            name: "AiD Guardian",
            tag: "Multi-Modal Safety Engine",
            desc: "The enterprise-grade safety layer. Frame-level risk analysis for video, audio, image, and text.",
            metrics: [
                { label: "Accuracy", value: "99.8%" },
                { label: "Latency", value: "<40ms" },
                { label: "Categories", value: "12+" }
            ],
            color: "indigo",
            icon: Shield,
            image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
            cta: ["Try Demo", "Contact Sales"]
        },
        {
            id: "playarts",
            name: "PlayArts",
            tag: "Creation-time Provenance",
            desc: "Don't just watermark it later. Prove creation at the source and track impact across platforms.",
            blocks: ["Proof-of-Creation (PoC)", "Sentinel Attestations", "Impact Attribution"],
            color: "purple",
            icon: Play,
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop",
            cta: ["Partnership", "Deck"]
        },
        {
            id: "elememetal",
            name: "EleMEMEtal",
            tag: "Game-first UGC Ecosystem",
            desc: "High-decision PvP gaming where AI-generated content is safe, verifiable, and tradable.",
            blocks: ["1v1 PvP Core Loop", "AI Content Expansion", "Safety Guardrails"],
            color: "orange",
            icon: Gamepad2,
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
            cta: ["Playtest", "Publish Kit"]
        },
        {
            id: "stocku",
            name: "Stocku",
            tag: "Social Intelligence Layer",
            desc: "Zone-based market conversations backed by on-chain proof and AI signal analysis.",
            blocks: ["Zone Chat", "Proof Credibility", "AI Signals"],
            color: "emerald",
            icon: BarChart3,
            image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=2064&auto=format&fit=crop",
            cta: ["Open App", "Deck"]
        }
    ];

    const milestones = [
        { event: "SEEDIFY 2025 AI AGENT HACKATHON", result: "Global Winner", color: "text-yellow-400" },
        { event: "ETHDenver 2025", result: "Story Superagent Top 10", color: "text-blue-400" },
        { event: "OKX ETHCC 2025", result: "Smart Account 2nd Place", color: "text-indigo-400" },
        { event: "NVIDIA Inception Program", result: "Selected Member", color: "text-green-400" }
    ];

    return (
        <div className="bg-[#050505] text-white selection:bg-indigo-500/30 font-sans">
            
            {/* Section 01: HERO (Pinned/Sticky Effect) */}
            {/* The hero stays fixed for a moment while scrolling, then content covers it */}
            <div className="relative h-[110vh]">
                <motion.div 
                    style={{ opacity: heroOpacity, scale: heroScale }}
                    className="sticky top-0 h-screen flex items-center justify-center overflow-hidden z-0"
                >
                    {/* Background Visuals */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#050505] to-[#050505]" />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] invert" />
                    
                    <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-8 tracking-wider uppercase">
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                                Full-Media AI Guardrails
                            </div>
                            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-tight">
                                HOLO <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500">STUDIO</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-neutral-400 max-w-xl leading-relaxed font-light mb-10">
                                We build <span className="text-white font-medium">Safety</span>, <span className="text-white font-medium">Provenance</span>, and <span className="text-white font-medium">Value Routing</span> for the next media economy.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button size="lg" className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 h-12 text-base font-bold transition-all border-0" onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}>
                                    Explore Our Businesses
                                </Button>
                                <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base border-neutral-800 text-white hover:bg-white/10 bg-transparent">
                                    Partnership
                                </Button>
                            </div>
                        </div>
                        
                        {/* Right side Abstract Visual */}
                        <div className="hidden md:flex justify-center items-center relative">
                            <div className="w-[500px] h-[500px] relative">
                                {/* Simulated 3D/Neon Graph */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
                                <div className="relative z-10 w-full h-full border border-white/5 rounded-full flex items-center justify-center">
                                    <div className="w-2/3 h-2/3 border border-white/10 rounded-full flex items-center justify-center">
                                        <div className="w-1/2 h-1/2 bg-white/5 backdrop-blur-md rounded-full border border-white/20" />
                                    </div>
                                </div>
                                {/* Floating particles */}
                                <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-indigo-500 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)]" />
                                <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Section 02: WHY NOW (Market Pressure Strip) */}
            <div className="relative z-10 bg-[#050505] border-y border-neutral-900">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-neutral-900/0 md:divide-neutral-900">
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">2025</div>
                            <div className="text-neutral-500 text-sm uppercase tracking-wider">AI Regulation Tipping Point</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-indigo-500 mb-1">EU Act</div>
                            <div className="text-neutral-500 text-sm uppercase tracking-wider">DSA & Compliance Force</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">$80B</div>
                            <div className="text-neutral-500 text-sm uppercase tracking-wider">AI Content Market (2030)</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-purple-500 mb-1">$13B+</div>
                            <div className="text-neutral-500 text-sm uppercase tracking-wider">Gaming Safety Gap</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 03: THE CORE PROBLEM */}
            <section className="relative z-10 bg-[#0A0A0A] py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-4">The Core Problem</h2>
                        <p className="text-xl text-neutral-400 max-w-2xl">
                            AI content generation is exploding, but safety infrastructure remains fragmented, manual, and reactive.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "2025 Content Safety Crisis",
                                desc: "Meta and platforms are replacing human mods with AI, causing censorship instability.",
                                badge: "AI Content Risk"
                            },
                            {
                                title: "Safety System Limitations",
                                desc: "Text-only filters fail on Video/Audio/3D. Multi-modal guardrails are missing.",
                                badge: "Limited Coverage"
                            },
                            {
                                title: "Gaming/3D Safety Gap",
                                desc: "Metaverses and games face unregulated toxic UGC with no effective defense layers.",
                                badge: "3D/UGC Gap"
                            }
                        ].map((card, idx) => (
                            <div key={idx} className="bg-[#050505] border border-neutral-800 p-8 rounded-2xl hover:border-indigo-500/30 transition-colors group">
                                <div className="mb-6 flex justify-between items-start">
                                    <div className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center border border-neutral-800 text-neutral-400 group-hover:text-indigo-400 transition-colors">
                                        <Layers className="w-5 h-5" />
                                    </div>
                                    <span className="text-[10px] font-mono uppercase bg-neutral-900 text-neutral-500 px-2 py-1 rounded border border-neutral-800">
                                        {card.badge}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{card.title}</h3>
                                <p className="text-neutral-400 leading-relaxed text-sm">
                                    {card.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 04: THESIS */}
            <section className="relative z-10 bg-[#050505] py-32 flex items-center justify-center text-center">
                <div className="max-w-4xl px-6">
                    <div className="inline-block mb-6 text-indigo-500 font-mono text-sm tracking-widest uppercase">HOLO STUDIO Thesis</div>
                    <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-12 text-white">
                        We turn AI content into <span className="text-indigo-400">verifiable</span>, <span className="text-purple-400">safe</span>, and <span className="text-orange-400">monetizable</span> media objects.
                    </h2>
                    <div className="flex justify-center gap-8 md:gap-16 text-sm font-mono tracking-widest uppercase text-neutral-500">
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-indigo-500 rounded-full" />Guardrails</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-purple-500 rounded-full" />Provenance</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-orange-500 rounded-full" />Value Routing</span>
                    </div>
                </div>
            </section>

            {/* Section 05: CAPABILITY LIST */}
            <section className="relative z-10 bg-[#0A0A0A] py-24 border-t border-neutral-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Our Businesses</h2>
                            <p className="text-neutral-400">One company. Four specialized engines.</p>
                        </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        {products.map((prod, idx) => (
                            <div key={idx} className="group p-6 rounded-xl border border-neutral-800 bg-[#050505] hover:bg-neutral-900/50 transition-colors flex items-center justify-between cursor-pointer" onClick={() => document.getElementById(`product-${idx}`).scrollIntoView({ behavior: 'smooth' })}>
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-lg bg-${prod.color}-500/10 text-${prod.color}-400`}>
                                        <prod.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg">{prod.name}</div>
                                        <div className="text-sm text-neutral-500">{prod.tag}</div>
                                    </div>
                                </div>
                                <ArrowRight className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 06: PRODUCT SPOTLIGHT (Scrollytelling) */}
            <section id="products" className="relative bg-[#050505]">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2">
                    {/* LEFT: Sticky Visuals */}
                    <div className="hidden md:block sticky top-0 h-screen border-r border-neutral-900 bg-[#050505] overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProduct}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 flex flex-col items-center justify-center p-12"
                            >
                                <div className="absolute inset-0">
                                    <div className={`absolute inset-0 bg-gradient-to-br from-${products[activeProduct].color}-900/20 to-black z-10`} />
                                    <img 
                                        src={products[activeProduct].image} 
                                        alt={products[activeProduct].name}
                                        className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                                <div className="relative z-20 w-full">
                                    <div className={`inline-block px-3 py-1 rounded border border-${products[activeProduct].color}-500/30 bg-${products[activeProduct].color}-500/10 text-${products[activeProduct].color}-400 text-xs font-mono uppercase tracking-wider mb-6`}>
                                        {products[activeProduct].name}
                                    </div>
                                    <h3 className="text-5xl font-bold leading-tight mb-8">
                                        {products[activeProduct].tag}
                                    </h3>
                                    {/* Abstract UI representation */}
                                    <div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-3 h-3 rounded-full bg-red-500" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                            <div className="w-3 h-3 rounded-full bg-green-500" />
                                        </div>
                                        <div className="space-y-3">
                                            <div className="h-2 w-3/4 bg-white/10 rounded" />
                                            <div className="h-2 w-1/2 bg-white/10 rounded" />
                                            <div className="h-32 w-full bg-white/5 rounded border border-white/5 mt-4 flex items-center justify-center text-neutral-600 text-xs font-mono">
                                                [ Interactive Demo / Dashboard Preview ]
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* RIGHT: Scrolling Content */}
                    <div className="relative">
                        {products.map((prod, idx) => {
                             const ref = useRef(null);
                             const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
 
                             useEffect(() => {
                                 if (isInView) setActiveProduct(idx);
                             }, [isInView, idx]);

                             return (
                                <div key={idx} id={`product-${idx}`} ref={ref} className="min-h-screen flex items-center p-8 md:p-20 border-b border-neutral-900 last:border-0 bg-[#050505]">
                                    <motion.div 
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-full"
                                    >
                                        <div className="md:hidden mb-6">
                                            <img src={prod.image} className="w-full h-48 object-cover rounded-xl mb-4 opacity-70" />
                                            <div className={`text-${prod.color}-400 font-mono uppercase text-sm mb-2`}>{prod.name}</div>
                                        </div>

                                        <h2 className="text-4xl font-bold mb-6">{prod.tag}</h2>
                                        
                                        {/* Specific Layout per Product Type */}
                                        
                                        {/* A) Metrics Strip for Guardian */}
                                        {prod.metrics && (
                                            <div className="grid grid-cols-3 gap-4 mb-8">
                                                {prod.metrics.map((m, i) => (
                                                    <div key={i} className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
                                                        <div className="text-2xl font-mono font-bold text-white mb-1">{m.value}</div>
                                                        <div className="text-xs text-neutral-500 uppercase">{m.label}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* B) Blocks List for Others */}
                                        {prod.blocks && (
                                            <div className="space-y-3 mb-8">
                                                {prod.blocks.map((block, i) => (
                                                    <div key={i} className="flex items-center gap-3 text-neutral-300">
                                                        <div className={`w-1.5 h-1.5 rounded-full bg-${prod.color}-500`} />
                                                        {block}
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        <p className="text-lg text-neutral-400 leading-relaxed mb-10">
                                            {prod.desc}
                                        </p>

                                        <div className="flex flex-wrap gap-4">
                                            <Link to={createPageUrl(prod.id === "aid-guardian" ? "AidGuardian" : prod.name)}>
                                                <Button className={`bg-white text-black hover:bg-neutral-200 rounded-full px-6`}>
                                                    {prod.cta[0]}
                                                </Button>
                                            </Link>
                                            <Button variant="outline" className="rounded-full px-6 border-neutral-700 text-white bg-transparent hover:bg-white/10">
                                                {prod.cta[1]}
                                            </Button>
                                        </div>
                                    </motion.div>
                                </div>
                             );
                        })}
                    </div>
                </div>
            </section>

            {/* Section 07: PROOF (Milestones) */}
            <section id="proof" className="relative z-10 bg-[#0A0A0A] py-32 border-t border-neutral-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <h2 className="text-3xl font-bold">Proof & Milestones</h2>
                        <div className="text-neutral-500 text-sm font-mono uppercase tracking-wider">Recognized by Industry Leaders</div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {milestones.map((m, idx) => (
                            <div key={idx} className="bg-[#050505] p-8 rounded-xl border border-neutral-800 hover:border-white/20 transition-colors">
                                <div className={`text-lg font-bold ${m.color} mb-2`}>{m.result}</div>
                                <div className="text-white font-medium mb-1">{m.event}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 08: SYSTEM MAP */}
            <section className="relative z-10 bg-[#050505] py-32 border-t border-neutral-900">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">One Company, Four Businesses</h2>
                    <p className="text-neutral-400 mb-16">Integrated infrastructure for the autonomous future.</p>
                    
                    {/* Simple Diagram */}
                    <div className="flex flex-col items-center gap-4 text-sm font-mono text-neutral-400">
                        <div className="p-4 border border-indigo-500/30 bg-indigo-500/10 rounded-lg w-64 text-indigo-400">AiD Guardian (Safety)</div>
                        <div className="h-8 w-px bg-neutral-800" />
                        <div className="p-4 border border-purple-500/30 bg-purple-500/10 rounded-lg w-64 text-purple-400">PlayArts (Provenance)</div>
                        <div className="h-8 w-px bg-neutral-800" />
                        <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
                            <div className="p-4 border border-orange-500/30 bg-orange-500/10 rounded-lg text-orange-400">EleMEMEtal</div>
                            <div className="p-4 border border-emerald-500/30 bg-emerald-500/10 rounded-lg text-emerald-400">Stocku</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 09: RESEARCH FEED */}
            <section id="research" className="relative z-10 bg-[#0A0A0A] py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-3xl font-bold">Research & Updates</h2>
                        <Button variant="link" className="text-indigo-400">View All</Button>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "EU AI Act Response: Multi-modal Safety Taxonomy", date: "Oct 2025" },
                            { title: "Gaming/3D UGC Safety Standards", date: "Sep 2025" },
                            { title: "Cross-platform Attribution Primitives", date: "Aug 2025" }
                        ].map((item, idx) => (
                            <div key={idx} className="group border-t border-neutral-800 pt-6 hover:border-indigo-500 transition-colors cursor-pointer">
                                <div className="text-xs text-neutral-500 font-mono mb-3">{item.date}</div>
                                <h3 className="text-xl font-bold group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                                <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-indigo-400 mt-4 opacity-0 group-hover:opacity-100 transition-all" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 10: CONTACT */}
            <section className="relative z-10 bg-[#050505] py-24 border-t border-neutral-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-3xl p-12 md:p-24 text-center border border-indigo-500/20">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">Work with HOLO STUDIO</h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to={createPageUrl("Contact")}>
                                <Button className="h-14 px-8 rounded-full bg-white text-black hover:bg-neutral-200 text-lg font-bold">
                                    Invest / Partner
                                </Button>
                            </Link>
                            <Button variant="outline" className="h-14 px-8 rounded-full border-neutral-700 text-white hover:bg-white/10 text-lg bg-transparent">
                                Enterprise Inquiry
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}