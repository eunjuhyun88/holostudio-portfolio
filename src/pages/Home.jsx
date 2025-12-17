import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Layers, Trophy, Target, Globe, Cpu, BarChart3, Gamepad2, Play, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";

export default function Home() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const [activeBusinessIndex, setActiveBusinessIndex] = useState(0);

    const businessLines = [
        {
            name: "AiD Guardian",
            tag: "Enterprise Safety",
            description: "Multi-modal brand safety & compliance engine for AI content. Real-time monitoring across image, video, audio, and text.",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", 
            path: "/AidGuardian",
            icon: Shield,
            color: "text-indigo-400",
            fromColor: "from-indigo-900",
            toColor: "to-indigo-600"
        },
        {
            name: "PlayArts",
            tag: "Media Protocol",
            description: "Verifiable AI media provenance. Track impact and route value across platforms with a settlement-ready protocol.",
            image: "https://images.unsplash.com/photo-1614726365723-49cfae927846?q=80&w=2070&auto=format&fit=crop", 
            path: "/PlayArts",
            icon: Play,
            color: "text-purple-400",
            fromColor: "from-purple-900",
            toColor: "to-purple-600"
        },
        {
            name: "EleMEMEtal",
            tag: "Gaming Economy",
            description: "Safety-native UGC PvP game economy. Where creation is fun and distribution is trust-managed by design.",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop", 
            path: "/Elememetal",
            icon: Gamepad2,
            color: "text-orange-400",
            fromColor: "from-orange-900",
            toColor: "to-orange-600"
        },
        {
            name: "Stocku",
            tag: "Trading Intelligence",
            description: "Zone-based trading intelligence. Coin-specific small models trained on on-chain data and market microstructure.",
            image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=2070&auto=format&fit=crop", 
            path: "/Stocku",
            icon: BarChart3,
            color: "text-emerald-400",
            fromColor: "from-emerald-900",
            toColor: "to-emerald-600"
        }
    ];

    const milestones = [
        { title: "Seedify 2025 AI Agent Hackathon", award: "Global Winner", icon: Trophy, color: "text-yellow-500" },
        { title: "ETHDenver 2025 Story Superagent", award: "Top 10", icon: Target, color: "text-blue-500" },
        { title: "ETHDenver 2025 Story Track Dapp", award: "2nd Place", icon: Trophy, color: "text-neutral-400" },
        { title: "OKX ETHCC 2025 Smart Account", award: "2nd Place", icon: Globe, color: "text-indigo-500" }
    ];

    return (
        <div className="bg-[#050505] text-white selection:bg-indigo-500/30">
            {/* Section A: Hero */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#050505] to-[#050505]" />
                    <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#050505] to-transparent" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-tight">
                            HOLO<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">STUDIO</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                            Architecting the <span className="text-white font-medium">Safety Layer</span> for the Autonomous Future.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Button size="lg" className="bg-white text-black hover:bg-neutral-200 rounded-full px-10 h-14 text-lg font-bold transition-all hover:scale-105 border-0" onClick={() => document.getElementById('businesses').scrollIntoView({ behavior: 'smooth' })}>
                                Explore Ecosystem
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full px-10 h-14 text-lg border-neutral-800 text-white hover:bg-white/10 bg-black/50 backdrop-blur-sm">
                                Download Deck
                            </Button>
                        </div>
                    </motion.div>
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-500 animate-bounce"
                >
                    <ChevronDown className="w-6 h-6" />
                </motion.div>
            </section>

            {/* Section B: Why We Exist */}
            <section className="py-32 bg-[#050505] relative z-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 mb-24">
                        <motion.div {...fadeIn}>
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-6">
                                The AI era needs <br/>
                                <span className="text-indigo-500">Trust Rails.</span>
                            </h2>
                        </motion.div>
                        <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
                            <p className="text-xl text-neutral-400 leading-relaxed">
                                As AI content generation explodes, safety infrastructure remains fragmented. 
                                We build the verification, compliance, and economic layers that allow AI to scale safely.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Compliance Gap", desc: "EU AI Act & DSA require rails that don't exist yet.", icon: Shield },
                            { title: "Multi-Modal Risk", desc: "Text filters fail on Video/Audio/3D content.", icon: Layers },
                            { title: "$13B Opportunity", desc: "Gaming & Metaverse safety is largely unsolved.", icon: Zap }
                        ].map((card, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-indigo-500/50 transition-colors"
                            >
                                <card.icon className="w-10 h-10 text-indigo-500 mb-6" />
                                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                                <p className="text-neutral-400">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section C: Scrollytelling Business Lines */}
            <section id="businesses" className="relative">
                {/* 1. Sticky Background Container */}
                <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
                    <AnimatePresence mode="popLayout">
                        {businessLines.map((biz, idx) => (
                            idx === activeBusinessIndex && (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute inset-0 w-full h-full"
                                >
                                    {/* Background Image with Overlay */}
                                    <div className="absolute inset-0 bg-black/60 z-10" />
                                    <div className={`absolute inset-0 bg-gradient-to-r ${biz.fromColor} to-transparent opacity-40 z-10 mix-blend-overlay`} />
                                    <img 
                                        src={biz.image} 
                                        alt={biz.name}
                                        className="w-full h-full object-cover"
                                    />
                                    
                                    {/* Giant Background Text */}
                                    <div className="absolute bottom-0 left-0 p-10 z-0 opacity-10 select-none hidden md:block">
                                        <h2 className="text-[12rem] font-black tracking-tighter text-white leading-none whitespace-nowrap">
                                            {biz.name.toUpperCase()}
                                        </h2>
                                    </div>
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>

                {/* 2. Scrolling Content Overlay */}
                <div className="relative z-10 -mt-[100vh]">
                    {businessLines.map((biz, idx) => {
                        const ref = useRef(null);
                        const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

                        useEffect(() => {
                            if (isInView) setActiveBusinessIndex(idx);
                        }, [isInView, idx]);

                        return (
                            <div key={idx} ref={ref} className="h-screen w-full flex items-center justify-center md:justify-end px-6 md:px-24">
                                <motion.div 
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="max-w-xl w-full"
                                >
                                    <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${biz.color}`}>
                                                <biz.icon className="w-6 h-6" />
                                            </div>
                                            <span className="font-mono text-sm tracking-widest uppercase text-neutral-400">{biz.tag}</span>
                                        </div>
                                        
                                        <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                                            {biz.name}
                                        </h3>
                                        
                                        <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                                            {biz.description}
                                        </p>

                                        <Link to={createPageUrl(biz.path.substring(1))}>
                                            <Button className="w-full bg-white text-black hover:bg-neutral-200 h-12 rounded-xl text-base font-bold transition-all hover:scale-[1.02]">
                                                Explore {biz.name} <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Section D: Shared Strengths */}
            <section className="py-32 bg-[#050505] relative z-20 border-t border-neutral-900">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div {...fadeIn} className="text-center mb-20">
                        <h2 className="text-4xl font-bold tracking-tight mb-4">Core Infrastructure</h2>
                        <p className="text-neutral-500">Built on shared primitives for speed and scale.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900 rounded-2xl overflow-hidden">
                         {[
                            { title: "Multi-modal AI", desc: "Native vision, audio, and language understanding.", icon: Cpu },
                            { title: "Policy Engine", desc: "Configurable safety rails for enterprise needs.", icon: Shield },
                            { title: "On-Chain Trust", desc: "Immutable logs and provenance tracking.", icon: Globe }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-[#0A0A0A] p-10 hover:bg-[#0F0F0F] transition-colors">
                                <item.icon className="w-8 h-8 text-indigo-500 mb-6" />
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-neutral-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section E: Footer CTA */}
            <section className="py-32 bg-[#050505] relative z-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-white">
                        Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Safely.</span>
                    </h2>
                    <p className="text-xl text-neutral-400 mb-12 max-w-xl mx-auto">
                        Join the ecosystem defining the standards for trusted autonomous agents.
                    </p>
                    <Link to={createPageUrl("Contact")}>
                        <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-full px-12 h-16 text-xl font-bold shadow-[0_0_40px_rgba(79,70,229,0.3)] hover:shadow-[0_0_60px_rgba(79,70,229,0.5)] transition-all">
                            Partner With Us
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}