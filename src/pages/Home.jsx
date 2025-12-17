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
            image: "AiD Guardian Dashboard: Real-time risk monitoring interface showing GARM safety scores",
            path: "/AidGuardian",
            icon: Shield,
            color: "text-indigo-400",
            bgColor: "bg-indigo-500/10 border-indigo-500/20"
        },
        {
            name: "PlayArts",
            tag: "Media Protocol",
            description: "Verifiable AI media provenance + cross-platform impact tracking + settlement-ready value events.",
            image: "PlayArts Protocol: Network visualization showing media provenance and value routing",
            path: "/PlayArts",
            icon: Play,
            color: "text-purple-400",
            bgColor: "bg-purple-500/10 border-purple-500/20"
        },
        {
            name: "EleMEMEtal",
            tag: "Gaming Economy",
            description: "Safety-native UGC PvP game economy where creation and distribution are trust-managed by design.",
            image: "EleMEMEtal Game: Card battle arena with safety-verified UGC assets",
            path: "/Elememetal",
            icon: Gamepad2,
            color: "text-orange-400",
            bgColor: "bg-orange-500/10 border-orange-500/20"
        },
        {
            name: "Stocku",
            tag: "Trading Intelligence",
            description: "Zone-based trading intelligence with coin-specific small models trained on on-chain + market microstructure.",
            image: "Stocku Intelligence: Zone-based trading charts with AI signals overlay",
            path: "/Stocku",
            icon: BarChart3,
            color: "text-emerald-400",
            bgColor: "bg-emerald-500/10 border-emerald-500/20"
        }
    ];

    const milestones = [
        { title: "Seedify 2025 AI Agent Hackathon", award: "Global Winner", icon: Trophy, color: "text-yellow-500" },
        { title: "ETHDenver 2025 Story Superagent", award: "Top 10", icon: Target, color: "text-blue-500" },
        { title: "ETHDenver 2025 Story Track Dapp", award: "2nd Place", icon: Trophy, color: "text-neutral-400" },
        { title: "OKX ETHCC 2025 Smart Account", award: "2nd Place", icon: Globe, color: "text-indigo-500" }
    ];

    return (
        <div className="overflow-hidden bg-[#050505] text-white">
            {/* Section A: Hero */}
            <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#050505] to-[#050505]" />
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#050505] via-[#050505] to-transparent" />
                </div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeIn}>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6">
                                HOLO<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">STUDIO</span>
                            </h1>
                            <p className="text-xl text-neutral-400 leading-relaxed mb-10 max-w-lg">
                                We build AI-native businesses at the intersection of <span className="font-semibold text-white">AI + Web3</span>, 
                                spanning <span className="font-semibold text-white">Safety, Media, Gaming, and Trading</span>.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-full px-8 h-12 text-base border-0" onClick={() => document.getElementById('businesses').scrollIntoView({ behavior: 'smooth' })}>
                                    Explore Our Businesses
                                </Button>
                                <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base border-neutral-700 text-white hover:bg-neutral-800 bg-transparent">
                                    Download Deck
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative hidden md:flex justify-center"
                        >
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(79,70,229,0.15)] border border-white/10 bg-[#0A0A0A] w-full max-w-md aspect-square flex items-center justify-center">
                                <img 
                                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/fab0533e8_a-sleek-modern-logo-design-featuring-the_SMuLZaSWTXC5gHfZms6l4g_nbGlpkO2SJKMVbyEcJBYDA2.JPEG"
                                    alt="HOLO STUDIO Identity"
                                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section C: Why We Exist */}
            <section className="py-24 bg-[#0A0A0A]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div 
                        {...fadeIn}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
                            The AI era needs trust rails, not post-hoc moderation.
                        </h2>
                        <p className="text-lg text-neutral-400">
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
                                className="bg-[#050505] p-8 rounded-xl shadow-sm border border-neutral-800 hover:border-indigo-500/30 transition-colors"
                            >
                                <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center text-2xl mb-6 border border-neutral-800">
                                    {card.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{card.title}</h3>
                                <p className="text-neutral-500 mb-6 leading-relaxed">{card.desc}</p>
                                <span className="inline-block px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-semibold rounded-full">
                                    {card.badge}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#050505] rounded-xl border border-neutral-800 p-8 md:p-12 shadow-sm"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-800">
                            <div>
                                <h3 className="text-4xl font-bold text-indigo-500 mb-2">2025</h3>
                                <p className="text-neutral-400 font-medium">Critical Regulatory Inflection</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-indigo-500 mb-2">EU AI Act</h3>
                                <p className="text-neutral-400 font-medium">DSA & AI Act Enforcement</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-indigo-500 mb-2">$80B</h3>
                                <p className="text-neutral-400 font-medium">AI Content Market (2030)</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section D: Our Business Lines (Sticky Scroll Layout) */}
            <section id="businesses" className="py-32 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Sticky Sidebar */}
                        <div className="lg:w-1/3">
                            <div className="lg:sticky lg:top-32">
                                <motion.div {...fadeIn}>
                                    <span className="text-indigo-500 font-mono text-sm tracking-wider uppercase mb-4 block">Portfolio</span>
                                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white leading-tight">
                                        Our Business <br/> Lines
                                    </h2>
                                    <p className="text-xl text-neutral-400 leading-relaxed mb-8">
                                        HOLOSTUDIO operates four independent business lines, each targeting a distinct market segment with specialized AI technology.
                                    </p>
                                    <div className="hidden lg:block">
                                        <div className="h-1 w-20 bg-indigo-600 rounded-full mb-8"></div>
                                        <p className="text-sm text-neutral-500">
                                            Scroll to explore <ArrowRight className="inline w-4 h-4 ml-1 rotate-90" />
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Scrollable Content */}
                        <div className="lg:w-2/3 space-y-12">
                            {businessLines.map((biz, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7 }}
                                    className="group relative bg-[#0A0A0A] rounded-2xl border border-neutral-800 overflow-hidden hover:border-indigo-500/30 transition-all duration-500"
                                >
                                    <Link to={createPageUrl(biz.path.substring(1))} className="grid md:grid-cols-2 gap-0 h-full">
                                        {/* Image Section */}
                                        <div className="aspect-video md:aspect-auto md:h-full bg-neutral-900 relative overflow-hidden flex items-center justify-center p-8 group-hover:bg-neutral-800 transition-colors">
                                            <div className="text-center z-10 relative">
                                                <div className="p-4 bg-[#050505]/50 backdrop-blur-md rounded-xl border border-white/5 inline-block mb-3">
                                                    <biz.icon className={`w-8 h-8 ${biz.color}`} />
                                                </div>
                                                <div className="font-mono text-xs text-neutral-400 uppercase tracking-widest">{biz.tag}</div>
                                            </div>
                                            {/* Abstract background gradient */}
                                            <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${biz.color.replace('text-', 'from-')}/20 to-transparent`} />
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-8 md:p-10 flex flex-col justify-center">
                                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-indigo-500 transition-colors">{biz.name}</h3>
                                            <p className="text-neutral-400 leading-relaxed mb-8">
                                                {biz.description}
                                            </p>
                                            
                                            <div className="flex items-center text-white font-medium text-sm mt-auto group/link">
                                                <span className="border-b border-transparent group-hover/link:border-indigo-500 group-hover/link:text-indigo-500 transition-colors">
                                                    Explore {biz.name}
                                                </span>
                                                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1 group-hover/link:text-indigo-500" />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section E: Shared Capabilities */}
            <section className="py-24 bg-[#0A0A0A] overflow-hidden relative border-t border-neutral-900">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] invert"></div>
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div {...fadeIn} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">Shared Strengths</h2>
                        <p className="text-neutral-400 text-lg">The core technologies that power our entire ecosystem.</p>
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
                                className="bg-[#050505] border border-neutral-800 p-8 rounded-xl hover:border-indigo-500/30 transition-colors"
                            >
                                <div className="p-3 bg-indigo-900/20 border border-indigo-500/20 w-fit rounded-lg mb-6">
                                    <item.icon className="w-8 h-8 text-indigo-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                                <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section F: Milestones */}
            <section id="milestones" className="py-24 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div {...fadeIn} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <span className="text-indigo-500 font-semibold tracking-wide uppercase text-sm">Validation</span>
                            <h2 className="text-4xl font-bold tracking-tight mt-2 text-white">Milestones</h2>
                        </div>
                        <p className="text-neutral-400 max-w-md text-lg">
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
                                className="bg-[#0A0A0A] p-6 rounded-xl border border-neutral-800 hover:border-indigo-500/30 transition-colors"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <m.icon className={`w-8 h-8 ${m.color}`} />
                                    <span className="text-xs font-bold bg-neutral-900 border border-neutral-800 text-neutral-400 px-2 py-1 rounded shadow-sm">2025</span>
                                </div>
                                <h3 className="font-bold text-white mb-1">{m.title}</h3>
                                <p className={`font-semibold text-sm ${m.color}`}>{m.award}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section G: Company / CTA */}
            <section id="team" className="py-24 bg-[#0A0A0A] border-t border-neutral-900">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div {...fadeIn}>
                        <h2 className="text-3xl font-bold mb-6 text-white">Built by Builders</h2>
                        <p className="text-xl text-neutral-400 leading-relaxed mb-12">
                            HOLOSTUDIO is a team of AI researchers, Web3 engineers, and product strategists 
                            united by a mission to build the safety layer for the autonomous future.
                        </p>
                        
                        <div className="bg-[#050505] p-8 md:p-12 rounded-3xl shadow-xl border border-neutral-800">
                            <h3 className="text-2xl font-bold mb-4 text-white">Ready to shape the future with us?</h3>
                            <p className="text-neutral-400 mb-8 max-w-lg mx-auto">
                                Whether you're an investor, partner, or builder, we'd love to chat about the future of AI safety and provenance.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to={createPageUrl("Contact")}>
                                    <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-full px-8 h-12 w-full sm:w-auto border-0">
                                        Talk to Us
                                    </Button>
                                </Link>
                                <Button variant="outline" size="lg" className="rounded-full px-8 h-12 w-full sm:w-auto border-neutral-700 text-white hover:bg-neutral-800 bg-transparent">
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