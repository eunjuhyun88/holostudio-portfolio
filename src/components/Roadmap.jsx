import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Calendar, ArrowRight, GitCommit } from 'lucide-react';
import { PoCVisual, MemePingVisual, INFTVisual } from '@/components/ResearchVisuals';
import { useTheme } from '@/components/ThemeContext';

const RoadmapItem = ({ item, index, isLast, theme }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    // Status configuration - Adapted for both themes
    const statusConfig = theme === 'dark' ? {
        past: { color: 'text-neutral-400', border: 'border-neutral-800', bg: 'bg-neutral-900/40', glow: '' },
        current: { color: 'text-indigo-400', border: 'border-indigo-500', bg: 'bg-indigo-900/20', glow: 'shadow-[0_0_30px_rgba(99,102,241,0.2)]' },
        upcoming: { color: 'text-blue-400', border: 'border-blue-500/50', bg: 'bg-blue-900/10', glow: '' },
        future: { color: 'text-neutral-500', border: 'border-neutral-800', bg: 'bg-neutral-900/20', glow: '' }
    } : {
        past: { color: 'text-neutral-600', border: 'border-neutral-300', bg: 'bg-neutral-50', glow: '' },
        current: { color: 'text-indigo-600', border: 'border-indigo-400', bg: 'bg-gradient-to-br from-cyan-100 via-violet-100 to-pink-100', glow: 'shadow-[0_0_30px_rgba(99,102,241,0.25)]' },
        upcoming: { color: 'text-blue-600', border: 'border-blue-400', bg: 'bg-blue-50', glow: '' },
        future: { color: 'text-neutral-500', border: 'border-neutral-300', bg: 'bg-white', glow: '' }
    };
    
    const status = statusConfig[item.status] || statusConfig.future;
    
    // Visual selection based on ID
    const renderVisual = () => {
        switch(item.id) {
            case 'poc': return <PoCVisual />;
            case 'memeping': return <MemePingVisual />;
            case 'stockhoo': return (
                <div className="relative rounded-xl overflow-hidden aspect-video bg-neutral-900 border border-white/10 group">
                    <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/45cb06182_2025-12-17105903.png" className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Stockhoo" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full border border-emerald-500/50 backdrop-blur-md font-bold">
                            Stockhoo Beta
                        </div>
                    </div>
                </div>
            );
            case 'elememetal': return (
                 <div className="relative rounded-xl overflow-hidden aspect-video bg-neutral-900 border border-white/10 group">
                    <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/9692fcde2_2025-12-1463649.png" className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Elememetal" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full border border-orange-500/50 backdrop-blur-md font-bold">
                            Early Access
                        </div>
                    </div>
                </div>
            );
            default: return null;
        }
    };

    return (
        <div className={`flex-shrink-0 w-[85vw] md:w-1/2 snap-center md:snap-align-none relative md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} ${index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'}`}>
            {/* Timeline Line (Desktop) */}
            <div className="hidden md:block absolute top-0 bottom-0 w-px bg-neutral-800 left-full -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/2 origin-center">
                {/* Connector Dot */}
                <div className="absolute top-6 z-10 flex items-center justify-center" style={{ right: index % 2 === 0 ? '-5px' : 'auto', left: index % 2 === 0 ? 'auto' : '-5px' }}>
                     <div className={`w-[11px] h-[11px] rounded-full border-2 border-[#050505] ${item.status === 'current' ? 'bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,1)]' : item.status === 'upcoming' ? 'bg-blue-500' : 'bg-neutral-700'} transition-all duration-300 relative`}>
                        {item.status === 'current' && <div className="absolute inset-0 rounded-full bg-indigo-500 animate-ping opacity-75" />}
                     </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`group relative ${isOpen ? status.bg : (theme === 'dark' ? 'bg-neutral-900/40 hover:bg-neutral-900/80' : 'bg-white hover:bg-neutral-50')} border ${isOpen ? status.border : (theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200')} hover:${status.border} ${item.status === 'current' ? status.glow : ''} rounded-2xl p-6 transition-all cursor-pointer overflow-hidden`}
            >
                {/* Tech Corners - Animated pulse for current item */}
                <motion.div 
                    animate={item.status === 'current' ? { opacity: [0.3, 1, 0.3] } : {}}
                    transition={item.status === 'current' ? { duration: 2, repeat: Infinity } : {}}
                    className={`absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 ${theme === 'dark' ? 'border-white/10' : 'border-neutral-300'} group-hover:${status.border.replace('border', 'border')} transition-colors`} 
                />
                <motion.div 
                    animate={item.status === 'current' ? { opacity: [0.3, 1, 0.3] } : {}}
                    transition={item.status === 'current' ? { duration: 2, repeat: Infinity, delay: 0.5 } : {}}
                    className={`absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 ${theme === 'dark' ? 'border-white/10' : 'border-neutral-300'} group-hover:${status.border.replace('border', 'border')} transition-colors`} 
                />

                {/* Glow Effect */}
                {isOpen && <div className={`absolute inset-0 ${status.bg} pointer-events-none opacity-50`} />}
                {item.status === 'current' && <div className={`absolute top-0 right-0 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-bl-xl shadow-lg ${
                    theme === 'dark' ? 'bg-indigo-500 text-white' : 'bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 text-white'
                }`}>Active Phase</div>}

                <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} gap-2 mb-3 relative z-10`}>
                    <div className={`flex items-center gap-2 text-xs font-mono ${status.color} px-2 py-1 rounded-full border w-fit ${
                        theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-white border-neutral-200'
                    }`}>
                        <Calendar className="w-3 h-3" />
                        {item.date}
                    </div>
                    <h3 className={`text-xl font-bold group-hover:${status.color} transition-colors ${
                        theme === 'dark' ? 'text-white' : 'text-neutral-900'
                    }`}>
                        {item.title}
                    </h3>
                </div>

                <p className={`text-sm mb-4 leading-relaxed relative z-10 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} ${
                    theme === 'dark' ? 'text-neutral-400' : 'text-neutral-700'
                }`}>
                    {item.desc}
                </p>

                {/* Expand Toggle */}
                <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                    theme === 'dark' ? 'text-neutral-500 group-hover:text-white' : 'text-neutral-600 group-hover:text-neutral-900'
                }`}>
                    {isOpen ? 'Close Details' : 'View Details'}
                    <motion.div animate={{ rotate: isOpen ? 45 : 0 }}>
                        <Plus className="w-4 h-4" />
                    </motion.div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                        >
                            <div className={`pt-6 mt-4 border-t space-y-4 ${
                                theme === 'dark' ? 'border-white/5' : 'border-neutral-200'
                            }`}>
                                {renderVisual()}

                                <div className={`text-sm leading-relaxed p-4 rounded-lg border ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} ${
                                    theme === 'dark' ? 'text-neutral-300 bg-black/40 border-white/5' : 'text-neutral-700 bg-neutral-50 border-neutral-200'
                                }`}>
                                    {item.details}
                                </div>
                                
                                <div className={`flex gap-2 flex-wrap pt-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                    {item.tags.map((tag, i) => (
                                        <span key={i} className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border ${
                                            theme === 'dark' 
                                                ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                                                : 'bg-indigo-100 text-indigo-700 border-indigo-300'
                                        }`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default function Roadmap({ items, title, viewAllText }) {
    const { theme } = useTheme();
    
    return (
        <section id="roadmap" className={`py-32 relative overflow-hidden border-t ${
            theme === 'dark' ? 'bg-[#050505] border-white/5' : 'bg-white border-neutral-200'
        }`}>
            {/* Enhanced Background Elements */}
            {theme === 'dark' ? (
                <>
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/5 rounded-full blur-[120px] pointer-events-none" />
                </>
            ) : (
                <>
                    <motion.div 
                        animate={{ 
                            rotate: [0, 360],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-200/30 via-violet-200/30 to-pink-200/30 rounded-full blur-[100px] pointer-events-none" 
                    />
                    <motion.div 
                        animate={{ 
                            rotate: [360, 0],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tl from-indigo-200/30 via-purple-200/30 to-blue-200/30 rounded-full blur-[100px] pointer-events-none" 
                    />
                </>
            )}
            
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold tracking-widest uppercase mb-8 ${
                            theme === 'dark'
                                ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
                                : 'bg-gradient-to-r from-cyan-100 via-violet-100 to-pink-100 border-indigo-300 text-indigo-700'
                        }`}
                    >
                        <GitCommit className="w-4 h-4" />
                        ROADMAP & MILESTONES
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`text-4xl md:text-6xl font-black tracking-tight mb-6 ${
                            theme === 'dark' ? 'text-white' : 'text-neutral-900'
                        }`}
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={`text-lg max-w-2xl mx-auto ${
                            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-700'
                        }`}
                    >
                        Our journey from vision to execution. Building the trust infrastructure for autonomous AI, one milestone at a time.
                    </motion.p>
                    <div className={`w-px h-20 bg-gradient-to-b mx-auto mt-12 ${
                        theme === 'dark' 
                            ? 'from-indigo-500 via-purple-500 to-transparent'
                            : 'from-indigo-400 via-violet-400 to-transparent'
                    }`} />
                </div>

                <div className="relative">
                    {/* Center Line (Desktop) */}
                    <div className={`hidden md:block absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 overflow-hidden ${
                        theme === 'dark' ? 'bg-neutral-900' : 'bg-neutral-300'
                    }`}>
                        <motion.div 
                            animate={{ y: ['-100%', '100%'] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className={`absolute inset-0 w-full h-1/3 bg-gradient-to-b from-transparent to-transparent ${
                                theme === 'dark' ? 'via-indigo-500' : 'via-violet-400'
                            } opacity-50`} 
                        />
                    </div>
                    
                    {/* Desktop: Vertical, Mobile: Horizontal Scroll */}
                    <div className="flex md:block overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-6 md:space-y-24 pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 custom-scrollbar">
                        {items.map((item, idx) => (
                            <RoadmapItem 
                                key={idx} 
                                item={item} 
                                index={idx} 
                                isLast={idx === items.length - 1} 
                                theme={theme}
                            />
                        ))}
                    </div>
                </div>

                <div className="mt-24 text-center">
                    <button className={`text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 mx-auto group transition-colors ${
                        theme === 'dark' 
                            ? 'text-neutral-500 hover:text-white'
                            : 'text-neutral-600 hover:text-neutral-900'
                    }`}>
                        {viewAllText}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}