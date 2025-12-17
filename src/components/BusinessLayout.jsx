import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Target, Zap, BarChart3, Users, Milestone, ChevronRight } from 'lucide-react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import SEO from '@/components/SEO';

export default function BusinessLayout({ 
    name, 
    tag, 
    oneLiner, 
    heroImage, 
    problemPoints = [], 
    solutionSteps = [], 
    screenshots = [], 
    useCases = [], 
    businessModel,
    roadmap = [],
    stats = [],
    theme = "default"
}) {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 }
    };

    // Refined theme for the new layout - keeping "dark" as primary but cleaning up classes
    const themes = {
        default: {
            // Colors
            accent: "text-indigo-500",
            accentBg: "bg-indigo-500",
            accentBorder: "border-indigo-500",
            
            // Backgrounds
            pageBg: "bg-[#050505]",
            cardBg: "bg-[#111111]",
            
            // Text
            primaryText: "text-white",
            secondaryText: "text-neutral-400",
            
            // Elements
            buttonPrimary: "bg-white text-black hover:bg-neutral-200 border-0 shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all",
            buttonSecondary: "bg-transparent border-neutral-700 text-white hover:border-white",
            
            // Specifics
            sidebarBg: "bg-[#080808]",
            sidebarBorder: "border-white/10",
        },
        elememetal: {
            accent: "text-orange-500",
            accentBg: "bg-orange-500",
            accentBorder: "border-orange-500",
            pageBg: "bg-[#020202]",
            cardBg: "bg-[#0A0A0A]",
            primaryText: "text-white",
            secondaryText: "text-neutral-400",
            buttonPrimary: "bg-orange-600 text-white hover:bg-orange-500 border-0",
            buttonSecondary: "bg-transparent border-neutral-700 text-white hover:border-orange-500",
            sidebarBg: "bg-[#050505]",
            sidebarBorder: "border-orange-500/20",
        },
        aidguardian: {
            accent: "text-indigo-400",
            accentBg: "bg-indigo-500",
            accentBorder: "border-indigo-500",
            pageBg: "bg-[#050505]",
            cardBg: "bg-[#0A0A0A]",
            primaryText: "text-white",
            secondaryText: "text-neutral-400",
            buttonPrimary: "bg-indigo-600 text-white hover:bg-indigo-500 border-0",
            buttonSecondary: "bg-transparent border-neutral-700 text-white hover:border-indigo-500",
            sidebarBg: "bg-[#050505]",
            sidebarBorder: "border-indigo-500/20",
        },
        playarts: {
            accent: "text-lime-400",
            accentBg: "bg-lime-500",
            accentBorder: "border-lime-500",
            pageBg: "bg-[#050505]",
            cardBg: "bg-[#0A0A0A]",
            primaryText: "text-white",
            secondaryText: "text-neutral-400",
            buttonPrimary: "bg-lime-600 text-black hover:bg-lime-500 border-0",
            buttonSecondary: "bg-transparent border-neutral-700 text-white hover:border-lime-500",
            sidebarBg: "bg-[#050505]",
            sidebarBorder: "border-lime-500/20",
        },
        stockhoo: {
            accent: "text-emerald-400",
            accentBg: "bg-emerald-500",
            accentBorder: "border-emerald-500",
            pageBg: "bg-[#050505]",
            cardBg: "bg-[#0A0A0A]",
            primaryText: "text-white",
            secondaryText: "text-neutral-400",
            buttonPrimary: "bg-emerald-600 text-white hover:bg-emerald-500 border-0",
            buttonSecondary: "bg-transparent border-neutral-700 text-white hover:border-emerald-500",
            sidebarBg: "bg-[#050505]",
            sidebarBorder: "border-emerald-500/20",
        }
    };

    const s = themes[theme] || themes.default;

    return (
        <div className={`${s.pageBg} min-h-screen font-sans selection:bg-indigo-500/30 text-white`}>
            <SEO 
                title={name} 
                description={oneLiner}
                image={heroImage.startsWith('http') ? heroImage : undefined}
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": name,
                    "description": oneLiner,
                    "brand": {
                        "@type": "Brand",
                        "name": "HOLO STUDIO"
                    }
                }}
            />

            <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-32 md:py-40">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    
                    {/* LEFT COLUMN - Sticky Sidebar (Reference: First Round / Fal style) */}
                    <aside className="lg:col-span-3 xl:col-span-3 relative">
                        <div className="lg:sticky lg:top-32 space-y-8">
                            {/* Card */}
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className={`rounded-3xl p-8 ${s.sidebarBg} border ${s.sidebarBorder} shadow-2xl relative overflow-hidden`}
                            >
                                {/* Top accent line */}
                                <div className={`absolute top-0 left-0 w-full h-1 ${s.accentBg}`} />

                                <div className="mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-black mb-6 shadow-lg">
                                        {/* Placeholder Icon */}
                                        <div className="font-bold text-2xl tracking-tighter">{name.substring(0,2).toUpperCase()}</div>
                                    </div>
                                    <h1 className="text-4xl font-bold tracking-tighter mb-2">{name}</h1>
                                    <div className={`text-sm font-medium ${s.accent} uppercase tracking-wider`}>{tag}</div>
                                </div>

                                <div className="space-y-6 pt-6 border-t border-white/5">
                                    {stats.slice(0, 3).map((stat, i) => (
                                        <div key={i}>
                                            <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-1">{stat.label}</div>
                                            <div className="text-lg font-mono font-medium">{stat.value}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-8 border-t border-white/5 space-y-3">
                                    <Button className={`w-full rounded-full h-12 ${s.buttonPrimary}`}>
                                        Request Access
                                    </Button>
                                    <Button variant="ghost" className={`w-full rounded-full h-12 ${s.buttonSecondary} hover:bg-white/5`}>
                                        Download Deck
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </aside>

                    {/* RIGHT COLUMN - Main Content */}
                    <main className="lg:col-span-9 xl:col-span-8 space-y-32">
                        
                        {/* 1. Hero / One Liner (Big Typography) */}
                        <section>
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-12"
                            >
                                {oneLiner}
                            </motion.h2>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-[#111] border border-white/10 group"
                            >
                                {heroImage.startsWith('http') ? (
                                    <img 
                                        src={heroImage} 
                                        alt={name} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center p-12 text-center bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-4 text-white">Project Preview</h3>
                                            <p className="text-neutral-500 font-mono">{heroImage}</p>
                                        </div>
                                    </div>
                                )}
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                            </motion.div>
                        </section>

                        {/* 2. Problem & Solution (Editorial Grid) */}
                        <section>
                            <div className="grid md:grid-cols-2 gap-16 md:gap-24">
                                <div>
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-6 ${s.accent} ${s.sidebarBorder} bg-white/5`}>
                                        THE CHALLENGE
                                    </span>
                                    <h3 className="text-3xl font-bold mb-8">Why this matters now</h3>
                                    <div className="space-y-12">
                                        {problemPoints.map((p, i) => (
                                            <div key={i} className="group">
                                                <h4 className="text-xl font-bold mb-3 group-hover:text-white transition-colors text-neutral-200">{p.title}</h4>
                                                <p className="text-neutral-400 leading-relaxed text-lg">{p.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="md:pt-32">
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-6 ${s.accent} ${s.sidebarBorder} bg-white/5`}>
                                        OUR SOLUTION
                                    </span>
                                    <h3 className="text-3xl font-bold mb-8">How we solve it</h3>
                                    <div className="space-y-6">
                                        {solutionSteps.map((step, i) => (
                                            <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                                                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm bg-black border border-white/20 ${s.accent}`}>
                                                    {i + 1}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold mb-2 text-lg">{step.title}</h4>
                                                    <p className="text-neutral-400 leading-relaxed">{step.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 3. Screenshots / Visuals (Full Width) */}
                        {screenshots.length > 0 && (
                            <section>
                                <div className="flex items-end justify-between mb-12">
                                    <h3 className="text-3xl font-bold">Experience</h3>
                                </div>
                                <div className="grid gap-8">
                                    {screenshots.map((screen, i) => (
                                        <div key={i} className="relative rounded-3xl overflow-hidden bg-[#111] border border-white/10 group">
                                            {screen.url.startsWith('http') ? (
                                                <img 
                                                    src={screen.url} 
                                                    alt={screen.caption} 
                                                    className="w-full h-auto object-cover"
                                                />
                                            ) : (
                                                <div className="aspect-[2/1] flex items-center justify-center p-12 text-center bg-[#151515]">
                                                    <p className="text-neutral-500 font-mono">{screen.caption}</p>
                                                </div>
                                            )}
                                            <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/80 backdrop-blur-md rounded-full border border-white/10 text-sm font-medium">
                                                {screen.caption}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* 4. Use Cases & Roadmap (Grid) */}
                        <section className="grid md:grid-cols-2 gap-8">
                            <div className={`p-10 rounded-3xl border ${s.sidebarBorder} ${s.sidebarBg}`}>
                                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                    <Users className={`w-5 h-5 ${s.accent}`} /> Target Customers
                                </h3>
                                <ul className="space-y-6">
                                    {useCases.map((u, i) => (
                                        <li key={i} className="flex gap-4">
                                            <CheckCircle2 className={`w-5 h-5 ${s.accent} flex-shrink-0 mt-1`} />
                                            <div>
                                                <div className="font-bold">{u.title}</div>
                                                <div className="text-sm text-neutral-400 mt-1">{u.description}</div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={`p-10 rounded-3xl border ${s.sidebarBorder} ${s.sidebarBg}`}>
                                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                    <Milestone className={`w-5 h-5 ${s.accent}`} /> Roadmap
                                </h3>
                                <div className="space-y-8">
                                    {roadmap.map((item, i) => (
                                        <div key={i} className="relative pl-6 border-l border-white/10">
                                            <div className={`absolute -left-1.5 top-1.5 w-3 h-3 rounded-full ${s.accentBg}`} />
                                            <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">{item.quarter}</div>
                                            <div className="font-bold text-lg mb-2">{item.title}</div>
                                            <div className="text-sm text-neutral-400">
                                                {item.items.join(" • ")}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* 5. Business Model Banner */}
                        <section className={`rounded-3xl p-10 md:p-16 border ${s.sidebarBorder} bg-gradient-to-br from-[#111] to-black relative overflow-hidden`}>
                             <div className="relative z-10">
                                <div className={`text-xs font-bold uppercase tracking-widest ${s.accent} mb-4`}>BUSINESS MODEL</div>
                                <div className="text-2xl md:text-3xl font-bold leading-relaxed max-w-3xl">
                                    "{businessModel}"
                                </div>
                             </div>
                             {/* Abstract bg element */}
                             <div className={`absolute top-0 right-0 w-96 h-96 ${s.accentBg} opacity-5 blur-[100px] rounded-full transform translate-x-1/2 -translate-y-1/2`} />
                        </section>

                    </main>
                </div>

                {/* Bottom Navigation / Footer-like area for other projects */}
                <div className="mt-40 border-t border-white/10 pt-20">
                     <h3 className="text-4xl font-bold mb-12">More Projects</h3>
                     <div className="grid md:grid-cols-3 gap-8">
                         {['AidGuardian', 'PlayArts', 'Elememetal', 'Stockhoo'].filter(p => p !== name.replace(/\s+/g, '')).slice(0, 3).map(proj => (
                             <Link key={proj} to={createPageUrl(proj)} className="group block">
                                 <div className="aspect-[4/3] bg-[#111] rounded-2xl mb-6 border border-white/10 group-hover:border-white/30 transition-colors relative overflow-hidden">
                                     {/* Simple placeholder gradient for other projects */}
                                     <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20" />
                                     <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-2xl font-bold opacity-30 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-500">
                                            {proj}
                                        </span>
                                     </div>
                                 </div>
                                 <h4 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{proj}</h4>
                                 <div className="text-neutral-500 text-sm flex items-center gap-2">
                                     View Case Study <ArrowRight className="w-4 h-4" />
                                 </div>
                             </Link>
                         ))}
                     </div>
                </div>

            </div>
        </div>
    );
}