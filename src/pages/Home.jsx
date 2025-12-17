import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Layers, Trophy, Target, Globe, Cpu, BarChart3, Gamepad2, Play } from 'lucide-react';
import { motion } from "framer-motion";

export default function Home() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const businessLines = [
        {
            name: "AiD Guardian",
            tag: "Enterprise Safety",
            description: "Multi-modal brand safety & compliance engine for AI content (image/video/audio/text).",
            image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/11636bcbb_2025-12-1785347.png",
            path: "/AidGuardian",
            icon: Shield,
            color: "text-indigo-600",
            bgColor: "bg-indigo-50"
        },
        {
            name: "PlayArts",
            tag: "Media Protocol",
            description: "Verifiable AI media provenance + cross-platform impact tracking + settlement-ready value events.",
            image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/b79d90ba9_2025-12-1785343.png",
            path: "/PlayArts",
            icon: Play,
            color: "text-purple-600",
            bgColor: "bg-purple-50"
        },
        {
            name: "EleMEMEtal",
            tag: "Gaming Economy",
            description: "Safety-native UGC PvP game economy where creation and distribution are trust-managed by design.",
            image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/44fe158d2_2025-12-1785335.png",
            path: "/Elememetal",
            icon: Gamepad2,
            color: "text-pink-600",
            bgColor: "bg-pink-50"
        },
        {
            name: "Stocku",
            tag: "Trading Intelligence",
            description: "Zone-based trading intelligence with coin-specific small models trained on on-chain + market microstructure.",
            image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/6b3b31eef_2025-12-1785326.png",
            path: "/Stocku",
            icon: BarChart3,
            color: "text-emerald-600",
            bgColor: "bg-emerald-50"
        }
    ];

    const milestones = [
        { title: "Seedify 2025 AI Agent Hackathon", award: "Global Winner", icon: Trophy, color: "text-yellow-500" },
        { title: "ETHDenver 2025 Story Superagent", award: "Top 10", icon: Target, color: "text-blue-500" },
        { title: "ETHDenver 2025 Story Track Dapp", award: "2nd Place", icon: Trophy, color: "text-slate-400" },
        { title: "OKX ETHCC 2025 Smart Account", award: "2nd Place", icon: Globe, color: "text-indigo-500" }
    ];

    return (
        <div className="overflow-hidden">
            {/* Section A: Hero */}
            <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-50 to-transparent opacity-50" />
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white via-white to-transparent" />
                </div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeIn}>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6">
                                HOLO<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">STUDIO</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
                                We build AI-native businesses at the intersection of <span className="font-semibold text-slate-900">AI + Web3</span>, 
                                spanning <span className="font-semibold text-slate-900">Safety, Media, Gaming, and Trading</span>.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 h-12 text-base" onClick={() => document.getElementById('businesses').scrollIntoView({ behavior: 'smooth' })}>
                                    Explore Our Businesses
                                </Button>
                                <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base border-slate-300 hover:bg-slate-50">
                                    Download Deck
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative hidden md:block"
                        >
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                <img 
                                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/11636bcbb_2025-12-1785347.png" 
                                    alt="AiD Guardian Dashboard" 
                                    className="w-full h-auto opacity-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                            </div>
                            <div className="absolute -bottom-12 -left-12 z-20 w-2/3 rounded-xl overflow-hidden shadow-xl border border-white bg-white transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img 
                                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/a6d2cc0c8_2025-12-1785333.png" 
                                    alt="Core Problems" 
                                    className="w-full h-auto"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section C: Why We Exist */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div 
                        {...fadeIn}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            The AI era needs trust rails, not post-hoc moderation.
                        </h2>
                        <p className="text-lg text-slate-600">
                            As AI content generation explodes, safety infrastructure remains fragmented and incomplete.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                title: "2025 Content Safety Crisis",
                                desc: "Meta replacing human moderators with AI, accelerating censorship instability controversies.",
                                badge: "Surging Toxicity",
                                icon: "⚠️"
                            },
                            {
                                title: "Limitations of Safety Systems",
                                desc: "LLM text-only filtering leaves Image/Video/3D AI generated content exposed without guardrails.",
                                badge: "Limited Coverage",
                                icon: "◎"
                            },
                            {
                                title: "Gaming/3D Safety Gap",
                                desc: "Metaverses and games facing unregulated toxic content generation with no defense.",
                                badge: "$13B Untapped Market",
                                icon: "👾"
                            }
                        ].map((card, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                            >
                                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-2xl mb-6">
                                    {card.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">{card.desc}</p>
                                <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full">
                                    {card.badge}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
                            <div>
                                <h3 className="text-4xl font-bold text-indigo-600 mb-2">2025</h3>
                                <p className="text-slate-600 font-medium">Critical Regulatory Inflection</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-indigo-600 mb-2">EU AI Act</h3>
                                <p className="text-slate-600 font-medium">DSA & AI Act Enforcement</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-indigo-600 mb-2">$80B</h3>
                                <p className="text-slate-600 font-medium">AI Content Market (2030)</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section D: Our Business Lines */}
            <section id="businesses" className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div {...fadeIn} className="mb-16">
                        <span className="text-indigo-600 font-semibold tracking-wide uppercase text-sm">Portfolio</span>
                        <h2 className="text-4xl font-bold tracking-tight mt-2 mb-4">Our Business Lines</h2>
                        <p className="text-xl text-slate-600 max-w-2xl">
                            HOLOSTUDIO operates four independent business lines, each targeting a distinct market segment with specialized AI technology.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {businessLines.map((biz, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                            >
                                <Link to={createPageUrl(biz.path.substring(1))} className="flex flex-col h-full">
                                    <div className="aspect-video bg-slate-100 relative overflow-hidden">
                                        <img 
                                            src={biz.image} 
                                            alt={biz.name} 
                                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                            <span className="text-white font-medium flex items-center gap-2">
                                                View Details <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className={`p-3 rounded-lg ${biz.bgColor} ${biz.color}`}>
                                                <biz.icon className="w-6 h-6" />
                                            </div>
                                            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 border border-slate-200 px-3 py-1 rounded-full">
                                                {biz.tag}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">{biz.name}</h3>
                                        <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                                            {biz.description}
                                        </p>
                                        <div className="flex items-center text-indigo-600 font-semibold mt-auto">
                                            Learn more <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section E: Shared Capabilities */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div {...fadeIn} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Shared Strengths</h2>
                        <p className="text-slate-400 text-lg">The core technologies that power our entire ecosystem.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Multi-modal Understanding",
                                desc: "Native processing of Vision, Language, and Audio to understand content context deeply.",
                                icon: Layers
                            },
                            {
                                title: "Policy & Audit Rails",
                                desc: "Real-time risk scoring and automated workflows with full auditability for compliance.",
                                icon: Shield
                            },
                            {
                                title: "Web3 Primitives",
                                desc: "On-chain provenance, tokenized incentives, and transparent accountability layers.",
                                icon: Zap
                            }
                        ].map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl"
                            >
                                <div className="p-3 bg-indigo-500/20 w-fit rounded-xl mb-6">
                                    <item.icon className="w-8 h-8 text-indigo-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section F: Milestones */}
            <section id="milestones" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div {...fadeIn} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <span className="text-indigo-600 font-semibold tracking-wide uppercase text-sm">Validation</span>
                            <h2 className="text-4xl font-bold tracking-tight mt-2">Milestones</h2>
                        </div>
                        <p className="text-slate-600 max-w-md text-lg">
                            Recognized by global leaders in Web3 and AI for innovation and execution.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {milestones.map((m, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-colors"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <m.icon className={`w-8 h-8 ${m.color}`} />
                                    <span className="text-xs font-bold bg-white border border-slate-200 px-2 py-1 rounded shadow-sm">2025</span>
                                </div>
                                <h3 className="font-bold text-slate-900 mb-1">{m.title}</h3>
                                <p className={`font-semibold ${m.color}`}>{m.award}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section G: Company / CTA */}
            <section id="team" className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div {...fadeIn}>
                        <h2 className="text-3xl font-bold mb-6">Built by Builders</h2>
                        <p className="text-xl text-slate-600 leading-relaxed mb-12">
                            HOLOSTUDIO is a team of AI researchers, Web3 engineers, and product strategists 
                            united by a mission to build the safety layer for the autonomous future.
                        </p>
                        
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-indigo-100">
                            <h3 className="text-2xl font-bold mb-4">Ready to shape the future with us?</h3>
                            <p className="text-slate-600 mb-8 max-w-lg mx-auto">
                                Whether you're an investor, partner, or builder, we'd love to chat about the future of AI safety and provenance.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to={createPageUrl("Contact")}>
                                    <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 h-12 w-full sm:w-auto">
                                        Talk to Us
                                    </Button>
                                </Link>
                                <Button variant="outline" size="lg" className="rounded-full px-8 h-12 w-full sm:w-auto">
                                    Partnerships & Investment
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}