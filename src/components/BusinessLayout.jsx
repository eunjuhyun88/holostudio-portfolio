import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Users, Milestone, ArrowLeft } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import SEO from '@/components/SEO';

// Helper component to trigger background changes
const ColorSection = ({ children, onInView, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

    useEffect(() => {
        if (isInView && onInView) {
            onInView();
        }
    }, [isInView, onInView]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
};

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
    // Defines themes with specific color sequences for scroll sections
    // Each sequence: [Hero, Problem/Challenge, Screenshots/Solution, Roadmap/Footer]
    const themes = {
        default: {
            colors: [
                { bg: "bg-[#050505]", text: "dark" },
                { bg: "bg-white", text: "light" },
                { bg: "bg-[#0A0A0A]", text: "dark" },
                { bg: "bg-[#111111]", text: "dark" }
            ],
            accent: "text-indigo-500",
            accentBg: "bg-indigo-500",
            sidebarBg: "bg-[#080808]",
            buttonPrimary: "bg-white text-black hover:bg-neutral-200",
        },
        elememetal: {
            colors: [
                { bg: "bg-[#020202]", text: "dark" },       // Hero: Dark
                { bg: "bg-orange-500", text: "light" },     // Challenge: Brand Orange (Light/Black text)
                { bg: "bg-[#120800]", text: "dark" },       // Solution: Dark Orange/Black
                { bg: "bg-neutral-100", text: "light" }     // Roadmap: White/Light Gray
            ],
            accent: "text-orange-500",
            accentBg: "bg-orange-500",
            accentDark: "text-orange-900", // For light backgrounds
            sidebarBg: "bg-[#050505]",
            buttonPrimary: "bg-orange-600 text-white hover:bg-orange-500",
        },
        aidguardian: {
            colors: [
                { bg: "bg-[#050505]", text: "dark" },
                { bg: "bg-indigo-500", text: "light" },
                { bg: "bg-[#050510]", text: "dark" },
                { bg: "bg-neutral-100", text: "light" }
            ],
            accent: "text-indigo-400",
            accentBg: "bg-indigo-500",
            accentDark: "text-indigo-900",
            sidebarBg: "bg-[#050505]",
            buttonPrimary: "bg-indigo-600 text-white hover:bg-indigo-500",
        },
        playarts: {
            colors: [
                { bg: "bg-[#050505]", text: "dark" },       // Hero: Black
                { bg: "bg-[#ccff00]", text: "light" },      // Challenge: Lime (First Round Style)
                { bg: "bg-[#0A0A0A]", text: "dark" },       // Solution: Black
                { bg: "bg-neutral-100", text: "light" }     // Roadmap: White
            ],
            accent: "text-lime-400",
            accentBg: "bg-lime-500",
            accentDark: "text-lime-900",
            sidebarBg: "bg-[#050505]",
            buttonPrimary: "bg-lime-500 text-black hover:bg-lime-400",
        },
        stockhoo: {
            colors: [
                { bg: "bg-[#050505]", text: "dark" },
                { bg: "bg-emerald-500", text: "light" },
                { bg: "bg-[#001005]", text: "dark" },
                { bg: "bg-neutral-100", text: "light" }
            ],
            accent: "text-emerald-400",
            accentBg: "bg-emerald-500",
            accentDark: "text-emerald-900",
            sidebarBg: "bg-[#050505]",
            buttonPrimary: "bg-emerald-600 text-white hover:bg-emerald-500",
        }
    };

    const s = themes[theme] || themes.default;
    const [activeSection, setActiveSection] = useState(0);
    const currentStyle = s.colors[activeSection] || s.colors[0];
    const isLight = currentStyle.text === 'light';

    // Dynamic Styles based on background brightness
    const textPrimary = isLight ? "text-black" : "text-white";
    const textSecondary = isLight ? "text-neutral-700" : "text-neutral-400";
    const textMuted = isLight ? "text-neutral-500" : "text-neutral-500";
    const border = isLight ? "border-black/10" : "border-white/10";
    const bgCard = isLight ? "bg-black/5" : "bg-white/5";
    const bgCardHover = isLight ? "hover:border-black/20" : "hover:border-white/20";
    const accentText = isLight && s.accentDark ? s.accentDark : s.accent;
    const accentBorder = isLight && s.accentDark ? `border-${s.accentDark.split('-')[1]}-900` : `border-${s.accent.split('-')[1]}-500`;

    const sections = [
        { id: 'overview', label: 'Overview' },
        { id: 'challenge', label: 'Challenge & Solution' },
        { id: 'experience', label: 'Experience' },
        { id: 'roadmap', label: 'Roadmap' }
    ];

    const scrollToId = (id) => {
        const el = document.getElementById(id);
        if (el) {
            const y = el.getBoundingClientRect().top + window.pageYOffset - 120;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className={`min-h-screen font-sans selection:bg-indigo-500/30 ${currentStyle.bg} ${textPrimary} transition-colors duration-700 ease-in-out`}>
            <SEO 
                title={name} 
                description={oneLiner}
                image={heroImage.startsWith('http') ? heroImage : undefined}
            />

            <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-24 md:py-40">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">
                    
                    {/* LEFT COLUMN - Sticky Sidebar */}
                    {/* Sidebar keeps its own dark theme to pop against light backgrounds */}
                    <aside className="lg:col-span-3 xl:col-span-3 relative z-20 order-2 lg:order-1">
                        <div className="lg:sticky lg:top-32 space-y-8">
                            <Link to="/" className={`hidden lg:inline-flex items-center gap-2 ${textSecondary} hover:${textPrimary} transition-colors mb-2 text-sm font-medium group`}>
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                Back to Home
                            </Link>

                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className={`rounded-3xl p-8 ${s.sidebarBg} border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-xl text-white`}
                            >
                                <div className={`absolute top-0 left-0 w-full h-1 ${s.accentBg}`} />
                                <div className="mb-8 hidden lg:block">
                                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-black mb-6 shadow-lg">
                                        <div className="font-bold text-2xl tracking-tighter">{name.substring(0,2).toUpperCase()}</div>
                                    </div>
                                    <h1 className="text-3xl font-bold tracking-tighter mb-2">{name}</h1>
                                    <div className={`text-xs font-bold ${s.accent} uppercase tracking-wider`}>{tag}</div>
                                </div>

                                {/* Table of Contents */}
                                <nav className="space-y-2 mb-8 hidden lg:block">
                                    {sections.map((section, idx) => (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToId(section.id)}
                                            className={`block text-sm font-medium transition-colors text-left w-full py-1 ${
                                                activeSection === idx 
                                                ? 'text-white translate-x-1' 
                                                : 'text-neutral-500 hover:text-neutral-300'
                                            }`}
                                        >
                                            <span className={`mr-2 transition-opacity ${activeSection === idx ? 'opacity-100' : 'opacity-0'}`}>→</span>
                                            {section.label}
                                        </button>
                                    ))}
                                </nav>

                                <div className="space-y-6 pt-6 border-t border-white/5">
                                    {stats.slice(0, 3).map((stat, i) => (
                                        <div key={i} className="group/stat">
                                            <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-1 group-hover/stat:text-white transition-colors">{stat.label}</div>
                                            <div className={`text-lg font-mono font-medium ${s.accent}`}>{stat.value}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-8 border-t border-white/5 space-y-3 hidden lg:block">
                                    <Button className={`w-full rounded-full h-12 ${s.buttonPrimary} border-0`}>
                                        Request Access
                                    </Button>
                                    <Button variant="ghost" className="w-full rounded-full h-12 bg-transparent border border-neutral-700 text-white hover:border-white hover:bg-white/5">
                                        Download Deck
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </aside>

                    {/* RIGHT COLUMN - Main Content */}
                    <main className="lg:col-span-9 xl:col-span-8 space-y-20 md:space-y-40 z-10 relative order-1 lg:order-2">
                        
                        {/* 1. Hero */}
                        <div id="overview">
                        <ColorSection onInView={() => setActiveSection(0)}>
                            {/* Mobile Title Block */}
                            <div className="lg:hidden mb-8">
                                <Link to="/" className={`inline-flex items-center gap-2 ${textSecondary} hover:${textPrimary} transition-colors mb-4 text-xs font-medium group`}>
                                    <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                                    Back to Home
                                </Link>
                                <h1 className={`text-4xl font-bold tracking-tighter mb-2 ${textPrimary}`}>{name}</h1>
                                <div className={`text-xs font-bold ${accentText} uppercase tracking-wider`}>{tag}</div>
                            </div>

                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-8 md:mb-12"
                            >
                                {oneLiner}
                            </motion.h2>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className={`relative aspect-[16/9] rounded-3xl overflow-hidden ${isLight ? 'bg-black/5' : 'bg-[#111]'} ${border} group shadow-2xl mb-12`}
                            >
                                {heroImage.startsWith('http') ? (
                                    <img 
                                        src={heroImage} 
                                        alt={name} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center p-8 md:p-12 text-center">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold mb-4">Project Preview</h3>
                                            <p className={`text-sm md:text-base ${textSecondary}`}>{heroImage}</p>
                                        </div>
                                    </div>
                                )}
                            </motion.div>

                            {/* Mobile Stats Grid */}
                            <div className="lg:hidden grid grid-cols-2 gap-3 mb-12">
                                {stats.map((stat, i) => (
                                    <div key={i} className={`p-4 rounded-xl ${bgCard} ${border} backdrop-blur-sm`}>
                                        <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-1">{stat.label}</div>
                                        <div className={`text-xl font-mono font-medium ${accentText}`}>{stat.value}</div>
                                    </div>
                                ))}
                            </div>
                        </ColorSection>
                        </div>

                        {/* 2. Problem & Solution */}
                        <div id="challenge">
                        <ColorSection onInView={() => setActiveSection(1)}>
                            <div className="grid md:grid-cols-2 gap-12 md:gap-24">
                                <div>
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-6 ${accentText} ${isLight ? 'border-black/10 bg-black/5' : 'border-white/10 bg-white/5'}`}>
                                        THE CHALLENGE
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Why this matters now</h3>
                                    <div className="space-y-8 md:space-y-12">
                                        {problemPoints.map((p, i) => (
                                            <div key={i} className="group">
                                                <h4 className={`text-lg md:text-xl font-bold mb-2 ${textPrimary}`}>{p.title}</h4>
                                                <p className={`${textSecondary} leading-relaxed text-base md:text-lg`}>{p.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="pt-0 md:pt-32">
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-6 ${accentText} ${isLight ? 'border-black/10 bg-black/5' : 'border-white/10 bg-white/5'}`}>
                                        OUR SOLUTION
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">How we solve it</h3>
                                    <div className="space-y-4 md:space-y-6">
                                        {solutionSteps.map((step, i) => (
                                            <div key={i} className={`flex gap-4 md:gap-6 p-5 md:p-6 rounded-2xl ${bgCard} ${border} ${bgCardHover} transition-colors backdrop-blur-sm`}>
                                                <div className={`flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold text-xs md:text-sm bg-black border border-white/20 text-white`}>
                                                    {i + 1}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold mb-1 md:mb-2 text-base md:text-lg">{step.title}</h4>
                                                    <p className={`${textSecondary} leading-relaxed text-sm md:text-base`}>{step.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ColorSection>
                        </div>

                        {/* 3. Screenshots */}
                        {screenshots.length > 0 && (
                            <div id="experience">
                            <ColorSection onInView={() => setActiveSection(2)}>
                                <div className="flex items-end justify-between mb-12">
                                    <h3 className="text-3xl font-bold">Experience</h3>
                                </div>
                                <div className="grid gap-8">
                                    {screenshots.map((screen, i) => (
                                        <div key={i} className={`relative rounded-3xl overflow-hidden ${isLight ? 'bg-black/5' : 'bg-[#111]'} ${border} group shadow-xl`}>
                                            {screen.url.startsWith('http') ? (
                                                <img 
                                                    src={screen.url} 
                                                    alt={screen.caption} 
                                                    className="w-full h-auto object-cover"
                                                />
                                            ) : (
                                                <div className="aspect-[2/1] flex items-center justify-center p-12 text-center">
                                                    <p className={textSecondary}>{screen.caption}</p>
                                                </div>
                                            )}
                                            <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/80 backdrop-blur-md rounded-full border border-white/10 text-sm font-medium text-white">
                                                {screen.caption}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ColorSection>
                            </div>
                        )}

                        {/* 4. Use Cases & Roadmap */}
                        <div id="roadmap">
                        <ColorSection onInView={() => setActiveSection(3)}>
                            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                                <div className={`p-6 md:p-10 rounded-3xl ${border} ${bgCard} backdrop-blur-sm`}>
                                    <h3 className={`text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-3 ${textPrimary}`}>
                                        <Users className={`w-5 h-5 md:w-6 md:h-6 ${accentText}`} />
                                        Target Customers
                                    </h3>
                                    <ul className="space-y-6">
                                        {useCases.map((u, i) => (
                                            <li key={i} className="flex gap-3 md:gap-4">
                                                <CheckCircle2 className={`w-5 h-5 ${accentText} flex-shrink-0 mt-0.5 md:mt-1`} />
                                                <div>
                                                    <div className={`font-bold ${textPrimary} text-sm md:text-base`}>{u.title}</div>
                                                    <div className={`text-xs md:text-sm ${textMuted} mt-1`}>{u.description}</div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className={`p-6 md:p-10 rounded-3xl ${border} ${bgCard} backdrop-blur-sm`}>
                                    <h3 className={`text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-3 ${textPrimary}`}>
                                        <Milestone className={`w-5 h-5 md:w-6 md:h-6 ${accentText}`} />
                                        Roadmap
                                    </h3>
                                    <div className="space-y-8">
                                        {roadmap.map((item, i) => (
                                            <div key={i} className={`relative pl-6 border-l ${isLight ? 'border-black/20' : 'border-white/10'}`}>
                                                <div className={`absolute -left-1.5 top-1.5 w-3 h-3 rounded-full ${s.accentBg}`} />
                                                <div className={`text-xs font-bold uppercase tracking-wider ${textMuted} mb-1`}>{item.quarter}</div>
                                                <div className={`font-bold text-base md:text-lg mb-1 md:mb-2 ${textPrimary}`}>{item.title}</div>
                                                <div className={`text-xs md:text-sm ${textSecondary}`}>
                                                    {item.items.join(" • ")}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Business Model Banner */}
                            <div className={`mt-12 rounded-3xl p-8 md:p-16 ${border} ${isLight ? 'bg-white shadow-xl' : 'bg-gradient-to-br from-[#111] to-black'} relative overflow-hidden`}>
                                 <div className="relative z-10">
                                    <div className={`text-xs font-bold uppercase tracking-widest ${accentText} mb-4`}>BUSINESS MODEL</div>
                                    <div className={`text-xl md:text-3xl font-bold leading-relaxed max-w-3xl ${textPrimary}`}>
                                        "{businessModel}"
                                    </div>
                                 </div>
                                 <div className={`absolute top-0 right-0 w-96 h-96 ${s.accentBg} opacity-5 blur-[100px] rounded-full transform translate-x-1/2 -translate-y-1/2`} />
                            </div>
                        </ColorSection>
                        </div>

                        {/* Mobile Action Bar (Sticky Bottom) */}
                        <div className="lg:hidden fixed bottom-6 left-4 right-4 z-50">
                            <div className={`rounded-2xl p-4 ${s.sidebarBg} border border-white/10 shadow-2xl flex items-center justify-between gap-4 backdrop-blur-xl`}>
                                <div>
                                    <div className="text-xs text-neutral-400 uppercase font-bold">Get Started</div>
                                    <div className="font-bold text-white text-sm">{name}</div>
                                </div>
                                <Button className={`rounded-full px-6 h-10 text-sm ${s.buttonPrimary} border-0`}>
                                    Request Access
                                </Button>
                            </div>
                        </div>

                    </main>
                </div>

                {/* Bottom Navigation */}
                <div className={`mt-24 md:mt-40 border-t ${border} pt-12 md:pt-20 pb-20 md:pb-0`}>
                     <h3 className="text-4xl font-bold mb-12">More Products</h3>
                     <div className="grid md:grid-cols-3 gap-8">
                         {['AidGuardian', 'PlayArts', 'Elememetal', 'Stockhoo'].filter(p => p !== name.replace(/\s+/g, '')).slice(0, 3).map(proj => (
                             <Link key={proj} to={createPageUrl(proj)} className="group block">
                                 <div className={`aspect-[4/3] ${isLight ? 'bg-black/5' : 'bg-[#111]'} rounded-2xl mb-6 ${border} ${isLight ? 'group-hover:border-black/30' : 'group-hover:border-white/30'} transition-colors relative overflow-hidden`}>
                                     <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                     <div className="absolute inset-0 flex items-center justify-center">
                                        <span className={`text-2xl font-bold opacity-30 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-500 ${textPrimary}`}>
                                            {proj}
                                        </span>
                                     </div>
                                 </div>
                                 <h4 className={`text-xl font-bold mb-2 ${isLight ? 'group-hover:text-black' : 'group-hover:text-indigo-400'} transition-colors`}>{proj}</h4>
                                 <div className={`${textSecondary} text-sm flex items-center gap-2`}>
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