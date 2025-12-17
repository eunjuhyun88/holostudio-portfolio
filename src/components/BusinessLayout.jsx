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
    stats = []
}) {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 }
    };

    return (
        <div className="bg-white min-h-screen">
            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-indigo-900/50" />
                    {/* Optional background pattern/image could go here */}
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-indigo-300 text-sm font-medium mb-6">
                            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                            {tag}
                        </div>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
                        >
                            {name}
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed"
                        >
                            {oneLiner}
                        </motion.p>
                        <div className="flex gap-4">
                            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8">
                                Request Demo
                            </Button>
                            <Button variant="outline" size="lg" className="bg-transparent border-white/30 text-white hover:bg-white/10 rounded-full px-8">
                                Download Deck
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Problem Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-indigo-600 font-semibold tracking-wide uppercase text-sm">The Problem</span>
                        <h2 className="text-3xl font-bold mt-2">Why this matters now</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {problemPoints.map((point, idx) => (
                            <motion.div 
                                key={idx}
                                {...fadeIn}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
                            >
                                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6">
                                    <Target className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{point.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Solution Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-indigo-600 font-semibold tracking-wide uppercase text-sm">The Solution</span>
                            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">How {name} solves it</h2>
                            <div className="space-y-8">
                                {solutionSteps.map((step, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                                            <p className="text-slate-600">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-purple-100 rounded-3xl transform rotate-3" />
                            <img 
                                src={heroImage} 
                                alt={`${name} Solution`} 
                                className="relative rounded-3xl shadow-xl border border-slate-200 bg-white"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Product Screenshots */}
            {screenshots.length > 0 && (
                <section className="py-24 bg-slate-900 text-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold">Product Experience</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {screenshots.map((screen, idx) => (
                                <motion.div 
                                    key={idx}
                                    {...fadeIn}
                                    className="group relative rounded-xl overflow-hidden border border-slate-700 bg-slate-800"
                                >
                                    <img 
                                        src={screen.url} 
                                        alt={screen.caption} 
                                        className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-12">
                                        <p className="font-medium text-lg">{screen.caption}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 5. Traction / Stats */}
            {stats.length > 0 && (
                <section className="py-20 bg-indigo-600 text-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {stats.map((stat, idx) => (
                                <div key={idx}>
                                    <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                                    <div className="text-indigo-200 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 6. Use Cases & Business Model */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                                <Users className="w-6 h-6 text-indigo-600" /> Target Customers
                            </h3>
                            <div className="grid gap-4">
                                {useCases.map((useCase, idx) => (
                                    <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <span className="font-bold text-slate-900 block">{useCase.title}</span>
                                            <span className="text-slate-600 text-sm">{useCase.description}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                                <BarChart3 className="w-6 h-6 text-indigo-600" /> Business Model
                            </h3>
                            <div className="bg-slate-900 text-white p-8 rounded-2xl">
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
                <section className="py-24 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="text-indigo-600 font-semibold tracking-wide uppercase text-sm">Execution</span>
                            <h2 className="text-3xl font-bold mt-2">Roadmap</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {roadmap.map((item, idx) => (
                                <div key={idx} className="relative">
                                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative z-10">
                                        <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full mb-4">
                                            {item.quarter}
                                        </div>
                                        <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                                        <ul className="space-y-2">
                                            {item.items.map((subItem, i) => (
                                                <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                                                    {subItem}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {idx < roadmap.length - 1 && (
                                        <div className="hidden md:block absolute top-1/2 -right-4 w-8 border-t-2 border-slate-200 border-dashed transform -translate-y-1/2 z-0" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 8. Bottom CTA */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="bg-indigo-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6">Ready to explore {name}?</h2>
                            <p className="text-indigo-100 text-lg mb-8 max-w-lg mx-auto">
                                Join the leading enterprises and partners building the future of trusted AI.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to={createPageUrl("Contact")}>
                                    <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 rounded-full px-8 h-12 w-full sm:w-auto">
                                        Contact Sales
                                    </Button>
                                </Link>
                                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 rounded-full px-8 h-12 w-full sm:w-auto">
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