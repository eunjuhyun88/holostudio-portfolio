import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, MapPin, MessageSquare, ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";
import CosmicBackground from '@/components/CosmicBackground';
import Background3D from '@/components/Background3D';

export default function Contact() {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-indigo-500/30">
            {/* Global Background Layer */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 opacity-80">
                    <CosmicBackground />
                </div>
                <div className="absolute inset-0 opacity-30">
                    <Background3D />
                </div>
                {/* Sci-Fi Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
                
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-[#050505]/80 to-[#050505] opacity-80" />
                
                {/* HUD Corners */}
                <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-white/10 rounded-tl-3xl m-8" />
                <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-white/10 rounded-tr-3xl m-8" />
                <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-white/10 rounded-bl-3xl m-8" />
                <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-white/10 rounded-br-3xl m-8" />
            </div>

            <div className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto text-center mb-16"
            >
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.3)]">Let's Build the Future</h1>
                <p className="text-base md:text-xl text-neutral-400 leading-relaxed">
                    We're always looking for partners, investors, and builders who share our vision for a trusted, autonomous future.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md"
                >
                    <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400 flex-shrink-0">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-white">Email</h3>
                                <p className="text-neutral-400">contact@holostudio.ai</p>
                                <p className="text-neutral-400">invest@holostudio.ai</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400 flex-shrink-0">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-white">Headquarters</h3>
                                <p className="text-neutral-400">Seoul, South Korea</p>
                                <p className="text-neutral-400">Singapore (Global Office)</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h3 className="font-bold mb-4 text-white">Connect on Social</h3>
                        <div className="flex gap-4 flex-wrap">
                            <a href="https://x.com/Holoaistudio" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" className="rounded-full border-white/10 bg-transparent text-white hover:bg-white/10 hover:text-white">Twitter / X</Button>
                            </a>
                            <a href="https://www.linkedin.com/company/hololabster/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" className="rounded-full border-white/10 bg-transparent text-white hover:bg-white/10 hover:text-white">LinkedIn</Button>
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-[#0A0A0A]/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl"
                >
                    <h2 className="text-2xl font-bold mb-6 text-white">Send a Message</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-400">First Name</label>
                                <input type="text" className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder-neutral-600" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-400">Last Name</label>
                                <input type="text" className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder-neutral-600" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-neutral-400">Email</label>
                            <input type="email" className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder-neutral-600" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-neutral-400">Subject</label>
                            <select className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all">
                                <option className="bg-neutral-900">Investment Inquiry</option>
                                <option className="bg-neutral-900">Partnership Proposal</option>
                                <option className="bg-neutral-900">Product Demo</option>
                                <option className="bg-neutral-900">General Inquiry</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-neutral-400">Message</label>
                            <textarea rows="4" className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder-neutral-600"></textarea>
                        </div>
                        <Button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white h-12 rounded-lg text-base font-medium border-0">
                            Send Message <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}