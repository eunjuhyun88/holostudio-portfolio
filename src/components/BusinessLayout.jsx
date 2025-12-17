import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Target, Zap, BarChart3, Users, Milestone, ChevronRight } from 'lucide-react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

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

    const themes = {
        default: {
            pageBg: "bg-[#050505]",
            heroBg: "bg-[#050505]",
            heroOverlay: "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#050505] to-[#050505]",
            heroText: "text-white",
            tagBg: "bg-indigo-500/10",
            tagBorder: "border-indigo-500/20",
            tagText: "text-indigo-400",
            tagDot: "bg-indigo-500",
            titleText: "text-white tracking-tighter",
            subText: "text-neutral-400",
            buttonPrimary: "bg-white text-black hover:bg-neutral-200 border-0 shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all",
            buttonSecondary: "bg-transparent border-neutral-700 text-white hover:border-neutral-500",
            sectionAltBg: "bg-[#0A0A0A]",
            sectionStandardBg: "bg-[#050505]",
            sectionText: "text-neutral-400",
            sectionHeading: "text-white",
            label: "text-indigo-500 font-mono uppercase tracking-wider text-xs",
            iconWrapper: "bg-neutral-900 border border-neutral-800 text-indigo-400",
            cardBg: "bg-[#0A0A0A] border-neutral-800 hover:border-indigo-500/50 transition-colors",
            stepNumber: "bg-neutral-900 text-white border border-neutral-800 font-mono",
            screenshotSectionBg: "bg-[#050505]",
            screenshotText: "text-indigo-400",
            statsBg: "bg-[#0A0A0A] border-y border-neutral-900",
            statsText: "text-white font-mono",
            statsLabel: "text-neutral-500 uppercase tracking-widest text-xs",
            useCaseBg: "bg-[#0A0A0A] border-neutral-800 hover:border-indigo-500/30 transition-colors",
            useCaseIcon: "text-indigo-400",
            modelBg: "bg-neutral-900/30 border border-neutral-800 backdrop-blur text-white",
            roadmapBg: "bg-[#0A0A0A] border-neutral-800",
            roadmapTag: "bg-neutral-900 text-neutral-300 border border-neutral-800 font-mono",
            roadmapText: "text-neutral-400",
            ctaBg: "bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20",
            ctaTitle: "text-white",
            ctaText: "text-neutral-300",
            ctaButtonPrimary: "bg-white text-black hover:bg-neutral-200 border-0",
            ctaButtonSecondary: "bg-transparent border-neutral-700 text-white hover:bg-neutral-800"
        },
        elememetal: {
            pageBg: "bg-[#050505]", // Deeper black
            heroBg: "bg-[#050505]",
            heroOverlay: "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-900/20 via-[#050505] to-[#050505]",
            heroText: "text-white",
            tagBg: "bg-orange-500/10",
            tagBorder: "border-orange-500/20",
            tagText: "text-orange-500",
            tagDot: "bg-orange-500",
            titleText: "text-white tracking-tight",
            subText: "text-neutral-400",
            buttonPrimary: "bg-orange-600 hover:bg-orange-500 text-white border border-transparent",
            buttonSecondary: "bg-transparent border-neutral-700 text-white hover:border-neutral-500",
            sectionAltBg: "bg-[#0A0A0A]", // Slightly lighter black
            sectionStandardBg: "bg-[#050505]",
            sectionText: "text-neutral-400",
            sectionHeading: "text-white",
            label: "text-orange-500 font-mono tracking-wider",
            iconWrapper: "bg-neutral-900/50 text-orange-500 border border-neutral-800",
            cardBg: "bg-[#0A0A0A] border-neutral-800 hover:border-orange-500/50 transition-colors duration-300",
            stepNumber: "bg-neutral-900 text-orange-500 border border-neutral-800",
            screenshotSectionBg: "bg-[#050505]",
            screenshotText: "text-orange-500",
            statsBg: "bg-[#0A0A0A] border-y border-neutral-900",
            statsText: "text-white font-mono",
            statsLabel: "text-neutral-500 uppercase tracking-widest text-xs",
            useCaseBg: "bg-[#0A0A0A] border-neutral-800 hover:border-orange-500/30 transition-colors",
            useCaseIcon: "text-orange-500",
            modelBg: "bg-neutral-900/50 border border-neutral-800 text-white backdrop-blur-sm",
            roadmapBg: "bg-[#0A0A0A] border-neutral-800",
            roadmapTag: "bg-orange-500/10 text-orange-500 border border-orange-500/20 font-mono",
            roadmapText: "text-neutral-400",
            ctaBg: "bg-[#0A0A0A] border border-neutral-800",
            ctaTitle: "text-white",
            ctaText: "text-neutral-400",
            ctaButtonPrimary: "bg-orange-600 text-white hover:bg-orange-500 border-0",
            ctaButtonSecondary: "bg-transparent border-neutral-700 text-white hover:border-white"
        }
    };

    const s = themes[theme] || themes.default;

    return (
        <div className={`${s.pageBg} min-h-screen`}>
            {/* 1. Hero Section */}
            <section className={`relative pt-32 pb-20 ${s.heroBg} overflow-hidden`}>
                <div className="absolute inset-0 z-0">
                    <div className={`absolute inset-0 ${s.heroOverlay}`} />
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${s.tagBg} border ${s.tagBorder} ${s.tagText} text-sm font-medium mb-6`}>
                            <span className={`w-2 h-2 rounded-full ${s.tagDot} animate-pulse`} />
                            {tag}
                        </div>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`text-5xl md:text-6xl font-bold tracking-tight mb-6 ${s.titleText}`}
                        >
                            {name}
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className={`text-xl md:text-2xl ${s.subText} mb-10 leading-relaxed`}
                        >
                            {oneLiner}
                        </motion.p>
                        <div className="flex gap-4">
                            <Button size="lg" className={`${s.buttonPrimary} rounded-full px-8`}>
                                Request Demo
                            </Button>
                            <Button variant="outline" size="lg" className={`${s.buttonSecondary} rounded-full px-8`}>
                                Download Deck
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Problem Section (Bento Grid Style) */}
            <section className={`py-24 ${s.sectionAltBg}`}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <span className={`${s.label} block mb-2`}>The Problem</span>
                            <h2 className={`text-3xl md:text-5xl font-bold ${s.sectionHeading} tracking-tight`}>Why this matters now</h2>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {problemPoints.map((point, idx) => (
                            <motion.div 
                                key={idx}
                                {...fadeIn}
                                transition={{ delay: idx * 0.1 }}
                                className={`group p-8 rounded-2xl border ${s.cardBg} flex flex-col h-full relative overflow-hidden`}
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowRight className={`w-5 h-5 ${theme === 'elememetal' ? 'text-orange-500' : 'text-indigo-500'}`} />
                                </div>
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${s.iconWrapper}`}>
                                    <Target className="w-6 h-6" />
                                </div>
                                <h3 className={`text-2xl font-bold mb-4 ${s.sectionHeading}`}>{point.title}</h3>
                                <p className={`${s.sectionText} text-lg leading-relaxed flex-grow`}>{point.description}</p>

                                {/* Decorative gradient blob */}
                                <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${theme === 'elememetal' ? 'bg-orange-500' : 'bg-indigo-500'}`} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Solution Section */}
            <section className={`py-24 ${s.sectionStandardBg}`}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className={`${s.label} font-semibold tracking-wide uppercase text-sm`}>The Solution</span>
                            <h2 className={`text-3xl md:text-4xl font-bold mt-2 mb-8 ${s.sectionHeading}`}>How {name} solves it</h2>
                            <div className="space-y-8">
                                {solutionSteps.map((step, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold ${s.stepNumber}`}>
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h4 className={`text-xl font-bold mb-2 ${s.sectionHeading}`}>{step.title}</h4>
                                            <p className={s.sectionText}>{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-purple-100 rounded-3xl transform rotate-3 opacity-50" />
                            {heroImage.startsWith('http') ? (
                                <img 
                                    src={heroImage} 
                                    alt={`${name} Solution`} 
                                    className="relative rounded-3xl shadow-xl border border-slate-200 bg-white w-full h-auto"
                                />
                            ) : (
                                <div className={`relative rounded-3xl shadow-xl border border-slate-200 aspect-video flex items-center justify-center p-8 text-center bg-white`}>
                                    <div>
                                        <div className="text-2xl font-bold text-slate-900 mb-2">{name} Solution</div>
                                        <p className="text-slate-500 text-lg">{heroImage}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Product Screenshots */}
            {screenshots.length > 0 && (
                <section className={`py-24 ${s.screenshotSectionBg} text-white`}>
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold">Product Experience</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {screenshots.map((screen, idx) => (
                                <motion.div 
                                    key={idx}
                                    {...fadeIn}
                                    className={`group relative rounded-xl overflow-hidden border border-slate-700 ${theme === 'elememetal' ? 'bg-neutral-900' : 'bg-slate-800'}`}
                                >
                                    {screen.url.startsWith('http') ? (
                                        <>
                                            <img 
                                                src={screen.url} 
                                                alt={screen.caption} 
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-12">
                                                <p className={`${theme === 'elememetal' ? 'text-orange-100' : 'text-white'} font-medium text-lg`}>{screen.caption}</p>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="aspect-video flex items-center justify-center p-8 text-center">
                                            <div className="z-10">
                                                <div className={`${s.screenshotText} font-bold text-lg mb-2`}>{screen.caption}</div>
                                                <p className="text-slate-400 text-sm">{screen.url}</p>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 5. Traction / Stats */}
            {stats.length > 0 && (
                <section className={`py-20 ${s.statsBg}`}>
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center divide-x-0 md:divide-x divide-neutral-800/0 md:divide-neutral-800">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="flex flex-col items-center justify-center">
                                    <div className={`text-4xl md:text-5xl font-bold mb-3 ${s.statsText}`}>{stat.value}</div>
                                    <div className={`font-medium ${s.statsLabel}`}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 6. Use Cases & Business Model */}
            <section className={`py-24 ${s.sectionStandardBg}`}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${s.sectionHeading}`}>
                                <Users className={`w-6 h-6 ${s.label}`} /> Target Customers
                            </h3>
                            <div className="grid gap-4">
                                {useCases.map((useCase, idx) => (
                                    <div key={idx} className={`p-6 ${theme === 'elememetal' ? 'rounded-lg border' : 'rounded-xl'} flex items-start gap-4 ${s.useCaseBg}`}>
                                        <div className={`${theme === 'elememetal' ? 'bg-orange-500/10 p-2 rounded' : ''}`}>
                                            <CheckCircle2 className={`w-5 h-5 ${s.useCaseIcon}`} />
                                        </div>
                                        <div>
                                            <span className={`font-bold block text-lg mb-1 ${s.sectionHeading}`}>{useCase.title}</span>
                                            <span className={`text-sm ${s.sectionText}`}>{useCase.description}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${s.sectionHeading}`}>
                                <BarChart3 className={`w-6 h-6 ${s.label}`} /> Business Model
                            </h3>
                            <div className={`p-8 ${theme === 'elememetal' ? 'rounded-lg border' : 'rounded-2xl'} ${s.modelBg} h-full`}>
                                <div className="text-lg leading-relaxed font-medium h-full flex flex-col justify-between">
                                    <div>{businessModel}</div>
                                    {theme === 'elememetal' && (
                                        <div className="mt-8 pt-8 border-t border-neutral-800 grid grid-cols-2 gap-4">
                                            <div className="text-sm text-neutral-500">
                                                <div className="mb-1 text-orange-500 font-bold">REVENUE STREAMS</div>
                                                Multiple value capture points across ecosystem
                                            </div>
                                            <div className="text-sm text-neutral-500">
                                                <div className="mb-1 text-orange-500 font-bold">SCALABILITY</div>
                                                Designed for exponential network growth
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Roadmap */}
            {roadmap.length > 0 && (
                <section className={`py-24 ${s.sectionAltBg}`}>
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className={`${s.label} font-semibold tracking-wide uppercase text-sm`}>Execution</span>
                            <h2 className={`text-3xl font-bold mt-2 ${s.sectionHeading}`}>Roadmap</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {roadmap.map((item, idx) => (
                                <div key={idx} className="relative">
                                    <div className={`p-6 rounded-xl shadow-sm relative z-10 ${s.roadmapBg}`}>
                                        <div className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-4 ${s.roadmapTag}`}>
                                            {item.quarter}
                                        </div>
                                        <h4 className={`text-lg font-bold mb-2 ${s.sectionHeading}`}>{item.title}</h4>
                                        <ul className="space-y-2">
                                            {item.items.map((subItem, i) => (
                                                <li key={i} className={`text-sm flex items-start gap-2 ${s.roadmapText}`}>
                                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                                                    {subItem}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {idx < roadmap.length - 1 && (
                                        <div className="hidden md:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed transform -translate-y-1/2 z-0 border-slate-300 opacity-30" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 8. Bottom CTA */}
            <section className={`py-24 ${s.sectionStandardBg}`}>
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className={`rounded-3xl p-12 shadow-2xl relative overflow-hidden ${s.ctaBg}`}>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                        <div className="relative z-10">
                            <h2 className={`text-3xl font-bold mb-6 ${s.ctaTitle}`}>Ready to explore {name}?</h2>
                            <p className={`text-lg mb-8 max-w-lg mx-auto ${s.ctaText}`}>
                                Join the leading enterprises and partners building the future of trusted AI.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to={createPageUrl("Contact")}>
                                    <Button size="lg" className={`${s.ctaButtonPrimary} rounded-full px-8 h-12 w-full sm:w-auto`}>
                                        Contact Sales
                                    </Button>
                                </Link>
                                <Button variant="outline" size="lg" className={`${s.ctaButtonSecondary} rounded-full px-8 h-12 w-full sm:w-auto`}>
                                    View Documentation
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}