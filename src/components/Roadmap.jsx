import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Calendar, ArrowRight, GitCommit } from 'lucide-react';
import { PoCVisual, MemePingVisual, INFTVisual } from '@/components/ResearchVisuals';

const RoadmapItem = ({ item, index, isLast }) => {
    const [isOpen, setIsOpen] = useState(false);
    
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
                <div className={`absolute top-6 -right-[5px] w-[9px] h-[9px] rounded-full ${isOpen ? 'bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]' : 'bg-neutral-800'} transition-all duration-300 z-10`} 
                     style={{ right: index % 2 === 0 ? '-5px' : 'auto', left: index % 2 === 0 ? 'auto' : '-5px' }}
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`group relative bg-neutral-900/40 hover:bg-neutral-900/60 border ${isOpen ? 'border-indigo-500/50' : 'border-neutral-800'} hover:border-indigo-500/30 rounded-2xl p-6 transition-all cursor-pointer overflow-hidden`}
            >
                {/* Glow Effect */}
                {isOpen && <div className="absolute inset-0 bg-indigo-500/5 pointer-events-none" />}

                <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} gap-2 mb-3 relative z-10`}>
                    <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded-full border border-indigo-500/20 w-fit">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {item.title}
                    </h3>
                </div>

                <p className={`text-sm text-neutral-400 mb-4 leading-relaxed relative z-10 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    {item.desc}
                </p>

                {/* Expand Toggle */}
                <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500 group-hover:text-white transition-colors`}>
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
                            <div className="pt-6 mt-4 border-t border-white/5 space-y-4">
                                {renderVisual()}

                                <div className={`text-sm text-neutral-300 leading-relaxed bg-black/40 p-4 rounded-lg border border-white/5 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    {item.details}
                                </div>
                                
                                <div className={`flex gap-2 flex-wrap pt-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                    {item.tags.map((tag, i) => (
                                        <span key={i} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
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
    return (
        <section id="roadmap" className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/5 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-indigo-400 mb-6"
                    >
                        <GitCommit className="w-3 h-3" />
                        ROADMAP & UPDATES
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black tracking-tight mb-4"
                    >
                        {title}
                    </motion.h2>
                    <div className="w-px h-16 bg-gradient-to-b from-indigo-500 to-transparent mx-auto mt-8" />
                </div>

                <div className="relative">
                    {/* Center Line (Desktop) */}
                    <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-indigo-500 via-neutral-800 to-neutral-900 -translate-x-1/2" />
                    
                    {/* Desktop: Vertical, Mobile: Horizontal Scroll */}
                    <div className="flex md:block overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-6 md:space-y-24 pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 no-scrollbar">
                        {items.map((item, idx) => (
                            <RoadmapItem 
                                key={idx} 
                                item={item} 
                                index={idx} 
                                isLast={idx === items.length - 1} 
                            />
                        ))}
                    </div>
                </div>

                <div className="mt-24 text-center">
                    <button className="text-sm font-bold text-neutral-500 hover:text-white transition-colors uppercase tracking-widest flex items-center justify-center gap-2 mx-auto group">
                        {viewAllText}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}