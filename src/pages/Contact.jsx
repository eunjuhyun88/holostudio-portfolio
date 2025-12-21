import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";
import { useTheme } from '@/components/ThemeContext';
import CosmicBackground from '@/components/CosmicBackground';
import Background3D from '@/components/Background3D';
import ScrollMotionBackground from '@/components/ScrollMotionBackground';

export default function Contact() {
    const { theme } = useTheme();
    
    return (
        <div className={`min-h-screen font-sans transition-colors duration-300 ${
            theme === 'dark' 
                ? 'bg-[#050505] text-white selection:bg-indigo-500/30'
                : 'bg-white text-neutral-900 selection:bg-orange-200'
        }`}>
            {/* Global Background Layer - Only dark mode */}
            {theme === 'dark' && (
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 opacity-100">
                        <CosmicBackground theme={theme} />
                    </div>
                    <div className="absolute inset-0 opacity-75">
                        <Background3D theme={theme} />
                    </div>
                    <ScrollMotionBackground theme={theme} />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.08)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] animate-[pulse_4s_ease-in-out_infinite]" />
                    <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,11,0)_50%,rgba(99,102,241,0.08)_50%),linear-gradient(90deg,rgba(255,0,0,0.04),rgba(0,255,0,0.01),rgba(0,0,255,0.04))]" style={{ backgroundSize: "100% 4px, 3px 100%" }} />
                    <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-transparent via-indigo-500/4 to-transparent h-[100px] w-full animate-[scan_5s_linear_infinite]" style={{ top: '-100px' }} />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-[#050505]/60 to-[#050505] opacity-60" />
                    <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-white/20 rounded-tl-3xl m-8" />
                    <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-white/20 rounded-tr-3xl m-8" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-white/20 rounded-bl-3xl m-8" />
                    <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-white/20 rounded-br-3xl m-8" />
                </div>
            )}

            <div className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-3xl md:text-5xl font-black tracking-tight mb-6 ${
                            theme === 'dark' ? 'text-white' : 'text-neutral-900'
                        }`}
                    >
                        Let's Build the Future
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-base md:text-xl leading-relaxed font-medium ${
                            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-700'
                        }`}
                    >
                        We're always looking for partners, investors, and builders who share our vision for a trusted, autonomous future.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className={`p-8 rounded-2xl border ${
                            theme === 'dark'
                                ? 'bg-white/5 border-white/10 backdrop-blur-md'
                                : 'bg-neutral-50 border-neutral-200'
                        }`}
                    >
                        <h2 className={`text-2xl font-black mb-6 ${
                            theme === 'dark' ? 'text-white' : 'text-neutral-900'
                        }`}>Contact Information</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                                    theme === 'dark' 
                                        ? 'bg-indigo-500/20 text-indigo-400'
                                        : 'bg-orange-100 text-orange-600'
                                }`}>
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className={`font-black ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>Email</h3>
                                    <p className={theme === 'dark' ? 'text-neutral-400' : 'text-neutral-700'}>contact@holostudio.ai</p>
                                    <p className={theme === 'dark' ? 'text-neutral-400' : 'text-neutral-700'}>invest@holostudio.ai</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                                    theme === 'dark' 
                                        ? 'bg-indigo-500/20 text-indigo-400'
                                        : 'bg-orange-100 text-orange-600'
                                }`}>
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className={`font-black ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>Headquarters</h3>
                                    <p className={theme === 'dark' ? 'text-neutral-400' : 'text-neutral-700'}>Seoul, South Korea</p>
                                    <p className={theme === 'dark' ? 'text-neutral-400' : 'text-neutral-700'}>Singapore (Global Office)</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h3 className={`font-black mb-4 ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>Connect on Social</h3>
                            <div className="flex gap-4 flex-wrap">
                                <a href="https://x.com/Holoaistudio" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" className={`rounded-full font-bold ${
                                        theme === 'dark'
                                            ? 'border-white/10 bg-transparent text-white hover:bg-white/10'
                                            : 'border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50'
                                    }`}>Twitter / X</Button>
                                </a>
                                <a href="https://www.linkedin.com/company/hololabster/" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" className={`rounded-full font-bold ${
                                        theme === 'dark'
                                            ? 'border-white/10 bg-transparent text-white hover:bg-white/10'
                                            : 'border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50'
                                    }`}>LinkedIn</Button>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className={`p-8 rounded-2xl border ${
                            theme === 'dark'
                                ? 'bg-[#0A0A0A]/50 backdrop-blur-xl border-white/10 shadow-xl'
                                : 'bg-neutral-50 border-neutral-200'
                        }`}
                    >
                        <h2 className={`text-2xl font-black mb-6 ${
                            theme === 'dark' ? 'text-white' : 'text-neutral-900'
                        }`}>Send a Message</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className={`text-sm font-bold ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-700'}`}>First Name</label>
                                    <input type="text" className={`w-full px-4 py-2 rounded-lg border outline-none transition-all ${
                                        theme === 'dark'
                                            ? 'bg-white/5 border-white/10 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'
                                            : 'bg-white border-neutral-300 text-neutral-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500'
                                    }`} />
                                </div>
                                <div className="space-y-2">
                                    <label className={`text-sm font-bold ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-700'}`}>Last Name</label>
                                    <input type="text" className={`w-full px-4 py-2 rounded-lg border outline-none transition-all ${
                                        theme === 'dark'
                                            ? 'bg-white/5 border-white/10 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'
                                            : 'bg-white border-neutral-300 text-neutral-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500'
                                    }`} />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className={`text-sm font-bold ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-700'}`}>Email</label>
                                <input type="email" className={`w-full px-4 py-2 rounded-lg border outline-none transition-all ${
                                    theme === 'dark'
                                        ? 'bg-white/5 border-white/10 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'
                                        : 'bg-white border-neutral-300 text-neutral-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500'
                                }`} />
                            </div>
                            <div className="space-y-2">
                                <label className={`text-sm font-bold ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-700'}`}>Subject</label>
                                <select className={`w-full px-4 py-2 rounded-lg border outline-none transition-all ${
                                    theme === 'dark'
                                        ? 'bg-white/5 border-white/10 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'
                                        : 'bg-white border-neutral-300 text-neutral-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500'
                                }`}>
                                    <option className={theme === 'dark' ? 'bg-neutral-900' : 'bg-white'}>Investment Inquiry</option>
                                    <option className={theme === 'dark' ? 'bg-neutral-900' : 'bg-white'}>Partnership Proposal</option>
                                    <option className={theme === 'dark' ? 'bg-neutral-900' : 'bg-white'}>Product Demo</option>
                                    <option className={theme === 'dark' ? 'bg-neutral-900' : 'bg-white'}>General Inquiry</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className={`text-sm font-bold ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-700'}`}>Message</label>
                                <textarea rows="4" className={`w-full px-4 py-2 rounded-lg border outline-none transition-all ${
                                    theme === 'dark'
                                        ? 'bg-white/5 border-white/10 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'
                                        : 'bg-white border-neutral-300 text-neutral-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500'
                                }`}></textarea>
                            </div>
                            <Button className={`w-full h-12 rounded-full text-base font-bold border-0 ${
                                theme === 'dark'
                                    ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
                                    : 'bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 hover:from-cyan-400 hover:via-violet-400 hover:to-pink-400 text-white shadow-lg'
                            }`}>
                                Send Message <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}