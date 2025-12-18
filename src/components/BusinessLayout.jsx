import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Users, Milestone, ArrowLeft, Quote, Circle, CheckCircle } from 'lucide-react';
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from "framer-motion";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import SEO from '@/components/SEO';
import AnalyticsDashboard from '@/components/analytics/AnalyticsDashboard';
import { useLanguage } from '@/components/LanguageContext';
import Starfield from '@/components/Starfield';
import MouseGlowText from '@/components/MouseGlowText';

// Helper component to trigger background changes and animate entry
const ColorSection = ({ children, onInView, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });

    useEffect(() => {
        if (isInView && onInView) {
            onInView();
        }
    }, [isInView, onInView]);

    return (
        <motion.div 
            ref={ref} 
            className={className}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

export default function BusinessLayout({ 
    name, 
    tag, 
    oneLiner, 
    story, // Added story prop
    heroImage, 
    problemPoints = [], 
    solutionSteps = [], 
    screenshots = [], 
    useCases = [], 
    businessModel,
    roadmap = [],
    stats = [],
    features = [],
    customerStories = [],
    specs = [], // New specs prop
    videoUrl = null, // New videoUrl prop
    theme = "default",
    primaryButton = { text: "Request Access", url: null },
    deckUrl = null,
    HeroComponent = null,
    showAnalytics = false,
    heroContainerClass = "aspect-[16/9]",
    partners = null
}) {
    const { language } = useLanguage();
    
    // Parallax & Mouse Interaction Setup
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 25, stiffness: 70 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            // Normalize to -1 to 1
            mouseX.set((clientX / innerWidth) - 0.5);
            mouseY.set((clientY / innerHeight) - 0.5);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Parallax Transforms
    const bgX = useTransform(springX, [-0.5, 0.5], ['-5%', '5%']);
    const bgY = useTransform(springY, [-0.5, 0.5], ['-5%', '5%']);
    const bgXReverse = useTransform(springX, [-0.5, 0.5], ['5%', '-5%']);
    const bgYReverse = useTransform(springY, [-0.5, 0.5], ['5%', '-5%']);

    // Defines themes with specific color sequences for scroll sections
    // Each sequence: [Hero, Problem/Challenge, Screenshots/Solution, Analytics, Roadmap/Footer]
    // Adjusted logic to handle variable sections later, but ensuring enough colors
    // Unified dark theme with subtle glows instead of hard background switches
    const themes = {
        default: {
            accent: "text-indigo-500",
            accentBg: "bg-indigo-500",
            glow: "shadow-[0_0_100px_rgba(99,102,241,0.1)]",
            gradient: "from-indigo-950/30",
            buttonPrimary: "bg-white text-black hover:bg-neutral-200",
            sectionColors: ["#0f172a", "#1e1b4b", "#312e81", "#172554", "#0f172a"],
            glowHex: "rgba(99, 102, 241, 0.8)",
            glowSecondary: "rgba(168, 85, 247, 0.5)" // Indigo -> Purple
        },
        elememetal: {
            accent: "text-orange-500",
            accentBg: "bg-orange-500",
            glow: "shadow-[0_0_100px_rgba(249,115,22,0.1)]",
            gradient: "from-orange-950/30",
            buttonPrimary: "bg-orange-600 text-white hover:bg-orange-500",
            // Deep Orange -> Dark Red -> Brown -> Dark Amber
            sectionColors: ["#2a0a00", "#450a0a", "#3f1d0b", "#431407", "#2a0a00"],
            glowHex: "rgba(249, 115, 22, 0.8)",
            glowSecondary: "rgba(220, 38, 38, 0.5)" // Orange -> Red
        },
        aidguardian: {
            accent: "text-indigo-400",
            accentBg: "bg-indigo-500",
            glow: "shadow-[0_0_100px_rgba(99,102,241,0.1)]",
            gradient: "from-indigo-950/30",
            buttonPrimary: "bg-indigo-600 text-white hover:bg-indigo-500",
            // Deep Indigo -> Violet -> Blue -> Slate
            sectionColors: ["#1e1b4b", "#2e1065", "#172554", "#1e3a8a", "#0f172a"],
            glowHex: "rgba(99, 102, 241, 0.8)",
            glowSecondary: "rgba(168, 85, 247, 0.5)" // Indigo -> Purple
        },
        playarts: {
            accent: "text-lime-400",
            accentBg: "bg-lime-500",
            glow: "shadow-[0_0_100px_rgba(132,204,22,0.1)]",
            gradient: "from-lime-950/30",
            buttonPrimary: "bg-lime-500 text-black hover:bg-lime-400",
            // Dark Lime -> Deep Green -> Teal -> Dark Moss
            sectionColors: ["#1a2e05", "#064e3b", "#115e59", "#14532d", "#0f172a"],
            glowHex: "rgba(132, 204, 22, 0.8)",
            glowSecondary: "rgba(16, 185, 129, 0.5)" // Lime -> Emerald
        },
        stockhoo: {
            accent: "text-emerald-400",
            accentBg: "bg-emerald-500",
            glow: "shadow-[0_0_100px_rgba(16,185,129,0.1)]",
            gradient: "from-emerald-950/30",
            buttonPrimary: "bg-emerald-600 text-white hover:bg-emerald-500",
            // Deep Emerald -> Cyan -> Teal -> Slate
            sectionColors: ["#022c22", "#083344", "#0f766e", "#042f2e", "#0f172a"],
            glowHex: "rgba(16, 185, 129, 0.8)",
            glowSecondary: "rgba(6, 182, 212, 0.5)" // Emerald -> Cyan
        }
    };

    const s = themes[theme] || themes.default;
    const [activeSection, setActiveSection] = useState(0);
    // Always use dark mode for consistency
    const isLight = false;

    // Dynamic Styles - Always Dark Mode base
    const textPrimary = "text-white";
    const textSecondary = "text-neutral-400";
    const textMuted = "text-neutral-500";
    const border = "border-white/10";
    const bgCard = "bg-white/5";
    const bgCardHover = "hover:border-white/20";
    const accentText = s.accent;
    
    // Dynamic background color using Motion for smooth interpolation
    const currentSectionColor = (s.sectionColors || ["#0f172a"])[activeSection % (s.sectionColors?.length || 1)];

    const sections = [
        { id: 'overview', label: 'Overview' },
        { id: 'features', label: 'Features' },
        { id: 'challenge', label: 'Challenge & Solution' },
        { id: 'specs', label: 'Tech Specs' },
        ...(HeroComponent ? [{ id: 'demo', label: 'Live Demo' }] : []),
        { id: 'roadmap', label: 'Roadmap' },
        ...(customerStories.length > 0 ? [{ id: 'stories', label: 'Stories' }] : []),
        { id: 'experience', label: 'Experience' },
        ...(showAnalytics ? [{ id: 'analytics', label: 'Analytics' }] : [])
    ];

    const getSectionIndex = (id) => sections.findIndex(s => s.id === id);

    const scrollToId = (id) => {
        const el = document.getElementById(id);
        if (el) {
            const y = el.getBoundingClientRect().top + window.pageYOffset - 120;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    // Mobile Table of Contents (Horizontal Scroll)
    const MobileTOC = () => (
        <div className="lg:hidden sticky top-[80px] z-30 -mx-4 px-4 mb-8 overflow-x-auto no-scrollbar bg-gradient-to-b from-inherit to-transparent pb-4">
             <div className={`inline-flex gap-2 p-1 rounded-full ${isLight ? 'bg-black/5 border-black/10' : 'bg-white/10 border-white/10'} border backdrop-blur-md`}>
                {sections.map((section, idx) => (
                    <button
                        key={section.id}
                        onClick={() => scrollToId(section.id)}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                            activeSection === idx 
                            ? `${s.buttonPrimary} shadow-lg` 
                            : `${textSecondary} hover:${textPrimary}`
                        }`}
                    >
                        {section.label}
                    </button>
                ))}
            </div>
        </div>
    );

    return (
        <div className={`min-h-screen font-sans selection:bg-indigo-500/30 bg-[#050505] ${textPrimary} relative overflow-hidden`}>
            {/* Solid Background Transition Layer */}
            <motion.div 
                className="fixed inset-0 pointer-events-none z-0"
                animate={{
                    backgroundColor: currentSectionColor
                }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
            />

            {/* Space Effects Layer */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                {/* 1. Starfield */}
                <div className="absolute inset-0 opacity-60 mix-blend-screen">
                    <Starfield density={800} speed={0.03} />
                </div>

                {/* 2. Nebula/Glow Blobs with Parallax */}
                <motion.div
                    className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px]"
                    animate={{
                        backgroundColor: currentSectionColor,
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.1, 1],
                        rotate: [0, 90, 0]
                    }}
                    transition={{ 
                        backgroundColor: { duration: 1.2 },
                        default: { duration: 20, repeat: Infinity, ease: "linear" }
                    }}
                    style={{ 
                        filter: 'brightness(1.5)',
                        x: bgX,
                        y: bgY
                    }}
                />
                
                <motion.div
                    className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full blur-[100px]"
                    animate={{
                        backgroundColor: currentSectionColor,
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                        backgroundColor: { duration: 1.2 },
                        default: { duration: 15, repeat: Infinity, ease: "linear", delay: 2 }
                    }}
                    style={{ 
                        filter: 'brightness(2) hue-rotate(30deg)',
                        x: bgXReverse,
                        y: bgYReverse
                    }}
                />

                {/* 3. Gradient Overlay for Depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />

                {/* Sci-Fi Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
                
                {/* HUD Corners */}
                <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-white/10 rounded-tl-3xl m-8" />
                <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-white/10 rounded-tr-3xl m-8" />
                <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-white/10 rounded-bl-3xl m-8" />
                <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-white/10 rounded-br-3xl m-8" />
            </div>
            
            {/* Grain Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0" />

            <SEO 
                title={name} 
                description={oneLiner}
                image={heroImage.startsWith('http') ? heroImage : undefined}
            />

            <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-40">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">
                    
                    {/* LEFT COLUMN - Sidebar */}
                    <aside className="lg:col-span-3 xl:col-span-3 relative z-20 order-2 lg:order-1 lg:mt-32">
                        <div className="space-y-8 sticky top-32">
                            <Link to={createPageUrl('Products')} className={`hidden lg:inline-flex items-center gap-2 ${textSecondary} hover:${textPrimary} transition-colors mb-2 text-sm font-medium group`}>
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                {language === 'en' ? 'Back to Products' : '프로덕트로 돌아가기'}
                            </Link>

                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className={`rounded-3xl p-8 bg-white/[0.02] backdrop-blur-2xl border border-white/10 shadow-2xl relative overflow-hidden text-white`}
                            >
                                {/* Glow Effect */}
                                <div className={`absolute top-0 right-0 w-64 h-64 ${s.accentBg} opacity-10 blur-[80px] -translate-y-1/2 translate-x-1/2`} />

                                <div className="relative z-10 mb-10">
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white to-neutral-400 flex items-center justify-center text-black mb-6 shadow-[0_0_40px_rgba(255,255,255,0.15)]">
                                        <div className="font-bold text-3xl tracking-tighter">{name.substring(0,2).toUpperCase()}</div>
                                    </div>
                                    <h1 className="text-3xl font-bold tracking-tighter mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">{name}</h1>
                                    <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-white/5 border border-white/10 ${s.accent}`}>
                                        {tag}
                                    </div>
                                </div>

                                <div className="relative z-10 space-y-8 pt-8 border-t border-white/10">
                                    {stats.map((stat, i) => (
                                        <div key={i} className="group">
                                            <div className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 font-bold mb-2 group-hover:text-neutral-300 transition-colors">{stat.label}</div>
                                            <div className="text-lg font-mono font-medium text-white group-hover:text-white transition-colors">{stat.value}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-8 border-t border-white/5 space-y-3 hidden lg:block">
                                    {primaryButton.url ? (
                                        <a href={primaryButton.url} target="_blank" rel="noopener noreferrer" className="block w-full">
                                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                <Button className={`w-full rounded-full h-12 ${s.buttonPrimary} border-0 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-shadow`}>
                                                    {primaryButton.text} <ArrowRight className="w-4 h-4 ml-2" />
                                                </Button>
                                            </motion.div>
                                        </a>
                                    ) : (
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Button className={`w-full rounded-full h-12 ${s.buttonPrimary} border-0 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-shadow`}>
                                                {primaryButton.text}
                                            </Button>
                                        </motion.div>
                                    )}
                                    {deckUrl && (
                                        <a href={deckUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                                            <Button variant="ghost" className="w-full rounded-full h-12 bg-transparent border border-neutral-700 text-white hover:border-white hover:bg-white/5">
                                                Download Deck
                                            </Button>
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </aside>

                    {/* RIGHT COLUMN - Main Content */}
                    <main className="lg:col-span-9 xl:col-span-8 space-y-20 md:space-y-40 z-10 relative order-1 lg:order-2">
                        
                        {/* 1. Hero */}
                        <div id="overview">
                        <ColorSection onInView={() => setActiveSection(getSectionIndex('overview'))}>
                            {/* Mobile Title Block */}
                            <div className="lg:hidden mb-8">
                                <Link to={createPageUrl('Products')} className={`inline-flex items-center gap-2 ${textSecondary} hover:${textPrimary} transition-colors mb-4 text-xs font-medium group`}>
                                    <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                                    {language === 'en' ? 'Back to Products' : '프로덕트로 돌아가기'}
                                </Link>
                                <h1 className={`text-3xl md:text-4xl font-bold tracking-tighter mb-2 ${textPrimary} drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]`}>{name}</h1>
                                <div className={`text-xs font-bold ${accentText} uppercase tracking-wider`}>{tag}</div>
                            </div>

                            <MouseGlowText 
                                as={motion.h2}
                                glowColor={s.glowHex}
                                secondaryGlowColor={s.glowSecondary}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className={`text-3xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter mb-8 md:mb-12 max-w-5xl`}
                            >
                                {oneLiner}
                            </MouseGlowText>

                            {story && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className={`relative max-w-3xl mb-12 md:mb-16`}
                                >
                                    <div className="absolute -left-4 top-0 h-full w-1 border-l border-white/10 hidden md:block" />
                                    <div className={`text-base md:text-xl leading-relaxed ${textSecondary} font-light pl-4 md:pl-6`}>
                                        {story}
                                    </div>
                                </motion.div>
                            )}

                            <MobileTOC />

                            {/* Mobile Stats Grid & Actions */}
                            <div className="lg:hidden space-y-4 mb-12">
                                <div className="grid grid-cols-2 gap-3">
                                    {stats.map((stat, i) => (
                                        <div key={i} className={`p-4 rounded-xl ${bgCard} ${border} backdrop-blur-sm`}>
                                            <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-1">{stat.label}</div>
                                            <div className={`text-xl font-mono font-medium ${accentText}`}>{stat.value}</div>
                                        </div>
                                    ))}
                                </div>
                                {deckUrl && (
                                    <a href={deckUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                                        <Button variant="outline" className={`w-full rounded-xl h-12 bg-transparent ${border} ${textPrimary} hover:bg-white/5`}>
                                            Download Deck
                                        </Button>
                                    </a>
                                )}
                            </div>

                            {/* Partners Section */}
                            {partners && (
                                <div className="mt-12 md:mt-20 border-t border-white/5 pt-12">
                                    {partners}
                                </div>
                            )}
                        </ColorSection>
                          </div>

                        {/* 1.5 Features Section */}
                        {features.length > 0 && (
                            <div id="features">
                                <ColorSection onInView={() => setActiveSection(getSectionIndex('features'))}>
                                    <div className="mb-12 md:mb-20">
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-6 ${accentText} ${isLight ? 'border-black/10 bg-black/5' : 'border-white/10 bg-white/5'}`}>
                                            KEY FEATURES
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-8">Capabilities</h3>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            {features.map((feature, i) => (
                                                <div key={i} className={`relative p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-500 hover:-translate-y-1 backdrop-blur-xl group overflow-hidden`}>
                                                    <div className={`absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500`}>
                                                        <div className={`w-32 h-32 rounded-full ${s.accentBg} blur-[60px]`} />
                                                    </div>

                                                    <div className={`relative z-10 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-white/20 transition-all duration-500`}>
                                                        {feature.icon && (
                                                            <motion.div
                                                                animate={{ 
                                                                    scale: [1, 1.05, 1],
                                                                    filter: [`drop-shadow(0 0 0px ${s.glowHex}00)`, `drop-shadow(0 0 8px ${s.glowHex}60)`, `drop-shadow(0 0 0px ${s.glowHex}00)`]
                                                                }}
                                                                transition={{ 
                                                                    duration: 3, 
                                                                    repeat: Infinity, 
                                                                    ease: "easeInOut",
                                                                    delay: i * 0.2 // Stagger the pulses
                                                                }}
                                                                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2, filter: `drop-shadow(0 0 15px ${s.glowHex})` }}
                                                            >
                                                                <feature.icon className={`w-7 h-7 ${s.accent}`} />
                                                            </motion.div>
                                                        )}
                                                    </div>

                                                    <h4 className={`relative z-10 text-2xl font-bold mb-3 ${textPrimary} tracking-tight`}>{feature.title}</h4>
                                                    <p className={`relative z-10 text-lg ${textSecondary} leading-relaxed`}>{feature.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </ColorSection>
                            </div>
                        )}

                        {/* 2. Problem & Solution - Optimized for Mobile Horizontal Scroll */}
                        <div id="challenge">
                        <ColorSection onInView={() => setActiveSection(getSectionIndex('challenge'))}>
                            <div className="grid md:grid-cols-2 gap-12 md:gap-24">
                                {/* Problem Section */}
                                <div>
                                    <div className="mb-10">
                                        <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest border mb-6 ${accentText} bg-white/5 border-white/10`}>
                                            THE CHALLENGE
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-2">Why this matters now</h3>
                                    </div>
                                    
                                    <div className="flex md:block overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-6 pb-6 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar space-y-0 md:space-y-12">
                                        {problemPoints.map((p, i) => (
                                            <div key={i} className="flex-shrink-0 w-[85vw] md:w-auto snap-center">
                                                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                                    <h4 className={`text-xl font-bold mb-4 ${textPrimary}`}>{p.title}</h4>
                                                    <p className={`${textSecondary} leading-relaxed text-lg`}>{p.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Solution Section */}
                                <div className="pt-0 md:pt-32">
                                    <div className="mb-10">
                                        <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest border mb-6 ${accentText} bg-white/5 border-white/10`}>
                                            OUR SOLUTION
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-2">How we solve it</h3>
                                    </div>
                                    
                                    <div className="flex md:flex-col overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 md:gap-6 pb-6 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar">
                                        {solutionSteps.map((step, i) => (
                                            <div key={i} className={`flex-shrink-0 w-[85vw] md:w-auto snap-center flex flex-col md:flex-row gap-6 p-8 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl backdrop-blur-xl h-full md:h-auto group`}>
                                                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-base bg-gradient-to-br from-white/10 to-transparent border border-white/10 text-white group-hover:scale-110 transition-transform`}>
                                                    {i + 1}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold mb-3 text-2xl">{step.title}</h4>
                                                    <p className={`${textSecondary} leading-relaxed text-lg md:text-lg`}>{step.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ColorSection>
                        </div>

                        {/* 2.5 Tech Specs */}
                        {specs.length > 0 && (
                            <div id="specs">
                                <ColorSection onInView={() => setActiveSection(getSectionIndex('specs'))}>
                                    <div className="mb-12 md:mb-20">
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-6 ${accentText} ${isLight ? 'border-black/10 bg-black/5' : 'border-white/10 bg-white/5'}`}>
                                            SPECIFICATIONS
                                        </span>
                                        <h3 className="text-3xl font-bold mb-8">Technical Breakdown</h3>
                                        <div className={`grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10`}>
                                            {specs.map((spec, i) => (
                                                <div key={i} className={`p-8 bg-[#0A0A0A] hover:bg-[#111] transition-colors group`}>
                                                    <div className={`text-xs font-mono uppercase tracking-widest ${textMuted} mb-3 group-hover:${s.accent} transition-colors`}>
                                                        {spec.label}
                                                    </div>
                                                    <div className={`text-lg font-medium ${textPrimary} font-mono`}>
                                                        {spec.value}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </ColorSection>
                            </div>
                        )}

                        {/* 2.5.5 Interactive Hero / Demo */}
                        <div id="demo">
                            <ColorSection onInView={() => setActiveSection(getSectionIndex('demo'))}>
                                <div className="mb-12">
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-6 ${accentText} ${isLight ? 'border-black/10 bg-black/5' : 'border-white/10 bg-white/5'}`}>
                                        LIVE DEMO
                                    </span>
                                    <h3 className="text-3xl font-bold mb-8">Interactive Preview</h3>
                                    
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className={`relative ${heroContainerClass} rounded-3xl overflow-hidden ${isLight ? 'bg-black/5' : 'bg-[#111]'} ${border} group shadow-2xl`}
                                    >
                                        {HeroComponent ? (
                                            <HeroComponent />
                                        ) : heroImage.startsWith('http') ? (
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
                                </div>
                            </ColorSection>
                        </div>

                        {/* 4. Use Cases & Roadmap - Moved UP above Experience */}
                        <div id="roadmap">
                        <ColorSection onInView={() => setActiveSection(getSectionIndex('roadmap'))}>
                            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                                
                                {/* Target Customers */}
                                <div className={`p-6 md:p-10 rounded-3xl ${border} ${bgCard} backdrop-blur-sm`}>
                                    <h3 className={`text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-3 ${textPrimary}`}>
                                        <Users className={`w-5 h-5 md:w-6 md:h-6 ${accentText}`} />
                                        Target Customers
                                    </h3>
                                    {/* Desktop: List, Mobile: Horizontal Scroll */}
                                    <div className="flex md:block overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar">
                                        {useCases.map((u, i) => (
                                            <div key={i} className="flex-shrink-0 w-[80vw] md:w-auto snap-center flex md:block gap-3 md:gap-4 p-4 md:p-0 rounded-xl bg-white/5 md:bg-transparent border md:border-0 border-white/10 md:mb-6 last:mb-0">
                                                <div className="flex gap-3 md:gap-4">
                                                    <CheckCircle2 className={`w-5 h-5 ${accentText} flex-shrink-0 mt-0.5 md:mt-1`} />
                                                    <div>
                                                        <div className={`font-bold ${textPrimary} text-sm md:text-base`}>{u.title}</div>
                                                        <div className={`text-xs md:text-sm ${textMuted} mt-1`}>{u.description}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Roadmap */}
                                <div className={`p-6 md:p-10 rounded-3xl ${border} ${bgCard} backdrop-blur-sm`}>
                                    <h3 className={`text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-3 ${textPrimary}`}>
                                        <Milestone className={`w-5 h-5 md:w-6 md:h-6 ${accentText}`} />
                                        Roadmap
                                    </h3>
                                    {/* Desktop: List, Mobile: Horizontal Scroll */}
                                    <div className="flex md:block overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar">
                                        {roadmap.map((item, i) => {
                                            const isCompleted = item.status === 'completed';
                                            const isInProgress = item.status === 'in_progress';
                                            const statusColor = isCompleted ? 'text-green-500' : isInProgress ? s.accent : 'text-neutral-600';
                                            const statusBg = isCompleted ? 'bg-green-500' : isInProgress ? s.accentBg : 'bg-neutral-600';

                                            return (
                                            <div key={i} className={`flex-shrink-0 w-[75vw] md:w-auto snap-center relative pl-6 border-l ${isLight ? 'border-black/20' : 'border-white/10'} md:mb-8 last:mb-0 p-4 md:p-0 rounded-r-xl md:rounded-none bg-white/5 md:bg-transparent md:pl-6`}>
                                                <div className={`absolute left-0 md:-left-1.5 top-0 md:top-1.5 w-1 md:w-3 h-full md:h-3 rounded-none md:rounded-full ${statusBg} md:bg-transparent md:block hidden`} />
                                                <div className={`absolute left-0 top-0 bottom-0 w-1 ${statusBg} md:hidden rounded-l-xl`} />

                                                <div className={`absolute md:-left-1.5 md:top-1.5 w-3 h-3 rounded-full ${statusBg} hidden md:block`} />

                                                <div className="flex justify-between items-center mb-1">
                                                    <div className={`text-xs font-bold uppercase tracking-wider ${textMuted}`}>{item.quarter}</div>
                                                    {item.status && (
                                                        <div className={`text-[10px] font-bold uppercase tracking-wider ${statusColor} border border-current px-2 py-0.5 rounded-full`}>
                                                            {item.status.replace('_', ' ')}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className={`font-bold text-base md:text-lg mb-1 md:mb-2 ${textPrimary}`}>{item.title}</div>
                                                <div className={`text-xs md:text-sm ${textSecondary}`}>
                                                    {item.items.join(" • ")}
                                                </div>
                                            </div>
                                        )})}
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

                        {/* 2.6 Video Showcase */}
                        {videoUrl && (
                            <div className="mb-20">
                                <div className={`aspect-video rounded-3xl overflow-hidden ${border} ${bgCard} shadow-2xl relative group`}>
                                     <iframe 
                                        src={videoUrl} 
                                        className="w-full h-full" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowFullScreen
                                        title="Product Demo"
                                    />
                                </div>
                            </div>
                        )}

                         {/* 2.7 Customer Stories */}
                         {customerStories.length > 0 && (
                            <div id="stories">
                                <ColorSection onInView={() => setActiveSection(getSectionIndex('stories'))}>
                                    <div className="mb-12 md:mb-20">
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-6 ${accentText} ${isLight ? 'border-black/10 bg-black/5' : 'border-white/10 bg-white/5'}`}>
                                            TESTIMONIALS
                                        </span>
                                        <h3 className="text-3xl font-bold mb-8">What People Say</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {customerStories.map((story, i) => (
                                                <div key={i} className={`p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors relative`}>
                                                    <Quote className={`w-8 h-8 ${s.accent} opacity-20 absolute top-8 left-8`} />
                                                    <div className="relative z-10 pl-4">
                                                        <p className={`text-lg md:text-xl font-light italic leading-relaxed mb-6 ${textSecondary}`}>"{story.quote}"</p>
                                                        <div className="flex items-center gap-4">
                                                            {story.image && (
                                                                <img src={story.image} alt={story.author} className="w-10 h-10 rounded-full object-cover bg-white/10" />
                                                            )}
                                                            <div>
                                                                <div className={`font-bold ${textPrimary}`}>{story.author}</div>
                                                                <div className={`text-sm ${textMuted}`}>{story.role}, {story.company}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </ColorSection>
                            </div>
                        )}

                        {/* 3. Screenshots - Mobile Horizontal Scroll */}
                        {screenshots.length > 0 && (
                            <div id="experience">
                            <ColorSection onInView={() => setActiveSection(getSectionIndex('experience'))}>
                                <div className="flex items-end justify-between mb-12">
                                    <h3 className="text-3xl font-bold">Experience</h3>
                                </div>
                                {/* Desktop: Grid, Mobile: Horizontal Scroll */}
                                <div className="flex md:grid md:grid-cols-1 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-6 md:gap-8 pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar">
                                    {screenshots.map((screen, i) => (
                                        <div key={i} className={`flex-shrink-0 w-[90vw] md:w-full snap-center relative rounded-3xl overflow-hidden ${isLight ? 'bg-black/5' : 'bg-[#111]'} ${border} group shadow-xl`}>
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

                        {/* 3.5. Analytics Dashboard */}
                        {showAnalytics && (
                            <div id="analytics">
                                <ColorSection onInView={() => setActiveSection(getSectionIndex('analytics'))}>
                                    <div className="mb-12">
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-6 ${accentText} ${isLight ? 'border-black/10 bg-black/5' : 'border-white/10 bg-white/5'}`}>
                                            LIVE METRICS
                                        </span>
                                        <h3 className="text-3xl font-bold mb-4">Performance Dashboard</h3>
                                        <p className="text-neutral-500 max-w-2xl mb-8">Real-time system metrics and ecosystem growth data.</p>
                                        <AnalyticsDashboard type={theme} theme={theme} />
                                    </div>
                                </ColorSection>
                            </div>
                        )}

                        {/* Mobile Action Bar (Sticky Bottom) */}
                        <div className="lg:hidden fixed bottom-6 left-4 right-4 z-50">
                            <div className={`rounded-2xl p-4 ${s.sidebarBg} border border-white/10 shadow-2xl flex items-center justify-between gap-4 backdrop-blur-xl`}>
                                <div>
                                    <div className="text-xs text-neutral-400 uppercase font-bold">Get Started</div>
                                    <div className="font-bold text-white text-sm">{name}</div>
                                </div>
                                {primaryButton.url ? (
                                    <a href={primaryButton.url} target="_blank" rel="noopener noreferrer">
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Button className={`rounded-full px-6 h-10 text-sm ${s.buttonPrimary} border-0`}>
                                                {primaryButton.text}
                                            </Button>
                                        </motion.div>
                                    </a>
                                ) : (
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button className={`rounded-full px-6 h-10 text-sm ${s.buttonPrimary} border-0`}>
                                            {primaryButton.text}
                                        </Button>
                                    </motion.div>
                                )}
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