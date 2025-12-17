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
            pageBg: "bg-white",
            heroBg: "bg-slate-900",
            heroOverlay: "bg-gradient-to-r from-slate-900 to-indigo-900/50",
            heroText: "text-white",
            tagBg: "bg-white/10",
            tagBorder: "border-white/20",
            tagText: "text-indigo-300",
            tagDot: "bg-indigo-400",
            titleText: "text-white",
            subText: "text-slate-300",
            buttonPrimary: "bg-indigo-600 hover:bg-indigo-700 text-white",
            buttonSecondary: "bg-transparent border-white/30 text-white hover:bg-white/10",
            sectionAltBg: "bg-slate-50",
            sectionStandardBg: "bg-white",
            sectionText: "text-slate-600",
            sectionHeading: "text-slate-900",
            label: "text-indigo-600",
            iconWrapper: "bg-red-50 text-red-600",
            cardBg: "bg-white border-slate-100",
            stepNumber: "bg-indigo-100 text-indigo-600",
            screenshotSectionBg: "bg-slate-900",
            screenshotText: "text-indigo-400",
            statsBg: "bg-indigo-600",
            statsText: "text-white",
            statsLabel: "text-indigo-200",
            useCaseBg: "bg-slate-50 border-slate-100",
            useCaseIcon: "text-indigo-600",
            modelBg: "bg-slate-900 text-white",
            roadmapBg: "bg-white border-slate-200",
            roadmapTag: "bg-indigo-50 text-indigo-600",
            roadmapText: "text-slate-600",
            ctaBg: "bg-indigo-600",
            ctaTitle: "text-white",
            ctaText: "text-indigo-100",
            ctaButtonPrimary: "bg-white text-indigo-600 hover:bg-indigo-50",
            ctaButtonSecondary: "bg-transparent border-white text-white hover:bg-white/10"
        },
        elememetal: {
            pageBg: "bg-neutral-950",
            heroBg: "bg-neutral-950",
            heroOverlay: "bg-gradient-to-r from-neutral-950 via-neutral-900 to-orange-900/20",
            heroText: "text-white",
            tagBg: "bg-orange-500/10",
            tagBorder: "border-orange-500/20",
            tagText: "text-orange-500",
            tagDot: "bg-orange-500",
            titleText: "text-white",
            subText: "text-neutral-400",
            buttonPrimary: "bg-orange-600 hover:bg-orange-700 text-white",
            buttonSecondary: "bg-transparent border-orange-500/30 text-orange-500 hover:bg-orange-500/10",
            sectionAltBg: "bg-neutral-900",
            sectionStandardBg: "bg-neutral-950",
            sectionText: "text-neutral-400",
            sectionHeading: "text-white",
            label: "text-orange-500",
            iconWrapper: "bg-orange-900/20 text-orange-500 border border-orange-500/20",
            cardBg: "bg-neutral-900 border-neutral-800",
            stepNumber: "bg-orange-900/50 text-orange-500 border border-orange-500/20",
            screenshotSectionBg: "bg-neutral-900",
            screenshotText: "text-orange-500",
            statsBg: "bg-orange-700",
            statsText: "text-white",
            statsLabel: "text-orange-200",
            useCaseBg: "bg-neutral-900 border-neutral-800",
            useCaseIcon: "text-orange-500",
            modelBg: "bg-neutral-900 border border-neutral-800 text-white",
            roadmapBg: "bg-neutral-900 border-neutral-800",
            roadmapTag: "bg-orange-900/30 text-orange-500 border border-orange-500/20",
            roadmapText: "text-neutral-400",
            ctaBg: "bg-gradient-to-br from-orange-700 to-red-900",
            ctaTitle: "text-white",
            ctaText: "text-orange-100",
            ctaButtonPrimary: "bg-white text-orange-700 hover:bg-orange-50",
            ctaButtonSecondary: "bg-transparent border-white text-white hover:bg-white/10"
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

            {/* 2. Problem Section */}
            <section className={`py-24 ${s.sectionAltBg}`}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className={`${s.label} font-semibold tracking-wide uppercase text-sm`}>The Problem</span>
                        <h2 className={`text-3xl font-bold mt-2 ${s.sectionHeading}`}>Why this matters now</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {problemPoints.map((point, idx) => (
                            <motion.div 
                                key={idx}
                                {...fadeIn}
                                transition={{ delay: idx * 0.1 }}
                                className={`p-8 rounded-2xl shadow-sm border ${s.cardBg}`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${s.iconWrapper}`}>
                                    <Target className="w-6 h-6" />
                                </div>
                                <h3 className={`text-xl font-bold mb-3 ${s.sectionHeading}`}>{point.title}</h3>
                                <p className={`${s.sectionText} leading-relaxed`}>{point.description}</p>
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
                            <div className={`relative rounded-3xl shadow-xl border border-slate-200 aspect-video flex items-center justify-center p-8 text-center bg-white`}>
                                <div>
                                    <div className="text-2xl font-bold text-slate-900 mb-2">{name} Solution</div>
                                    <p className="text-slate-500 text-lg">{heroImage}</p>
                                </div>
                            </div>
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
                                    className={`group relative rounded-xl overflow-hidden border border-slate-700 ${theme === 'elememetal' ? 'bg-neutral-900' : 'bg-slate-800'} aspect-video flex items-center justify-center p-8 text-center`}
                                >
                                    <div className="z-10">
                                        <div className={`${s.screenshotText} font-bold text-lg mb-2`}>{screen.caption}</div>
                                        <p className="text-slate-400 text-sm">{screen.url}</p>
                                    </div>
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
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {stats.map((stat, idx) => (
                                <div key={idx}>
                                    <div className={`text-4xl md:text-5xl font-bold mb-2 ${s.statsText}`}>{stat.value}</div>
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
                            <h3 className={`text-2xl font-bold mb-8 flex items-center gap-2 ${s.sectionHeading}`}>
                                <Users className={`w-6 h-6 ${s.label}`} /> Target Customers
                            </h3>
                            <div className="grid gap-4">
                                {useCases.map((useCase, idx) => (
                                    <div key={idx} className={`p-4 rounded-xl flex items-start gap-3 ${s.useCaseBg}`}>
                                        <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${s.useCaseIcon}`} />
                                        <div>
                                            <span className={`font-bold block ${s.sectionHeading}`}>{useCase.title}</span>
                                            <span className={`text-sm ${s.sectionText}`}>{useCase.description}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className={`text-2xl font-bold mb-8 flex items-center gap-2 ${s.sectionHeading}`}>
                                <BarChart3 className={`w-6 h-6 ${s.label}`} /> Business Model
                            </h3>
                            <div className={`p-8 rounded-2xl ${s.modelBg}`}>
                                <p className="text-lg leading-relaxed font-medium">
                                    {businessModel}
                                </p>
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