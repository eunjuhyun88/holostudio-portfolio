import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Network, Database, Share2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function PlayArtsVisual() {
    const [step, setStep] = useState(0);

    const steps = [
        { id: 0, label: "Create", icon: Share2, color: "text-neutral-400" },
        { id: 1, label: "Anchor", icon: Database, color: "text-blue-400" },
        { id: 2, label: "Verify", icon: ShieldCheck, color: "text-lime-400" },
        { id: 3, label: "Route", icon: Network, color: "text-purple-400" }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setStep((prev) => (prev + 1) % steps.length);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    // Needed for auto-play, let's add useEffect import or just use what we have if imported in file (it's not, fixing imports)
    // Actually I'll just rewrite the import line in the file content.
    
    return (
        <div className="w-full h-full bg-[#050505] p-6 md:p-12 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />

            <div className="relative z-10 w-full max-w-2xl">
                <div className="flex justify-between items-center mb-16 relative">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -z-10" />
                    <motion.div 
                        className="absolute top-1/2 left-0 h-0.5 bg-lime-500 shadow-[0_0_10px_rgba(132,204,22,0.5)]"
                        animate={{ width: `${(step / (steps.length - 1)) * 100}%` }}
                        transition={{ duration: 0.5 }}
                    />

                    {steps.map((s, idx) => {
                        const isActive = idx <= step;
                        const isCurrent = idx === step;
                        const Icon = s.icon;
                        
                        return (
                            <div key={idx} className="relative flex flex-col items-center gap-4">
                                <motion.div 
                                    className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-2 flex items-center justify-center bg-[#050505] z-10 transition-colors duration-500 ${
                                        isActive ? `border-${s.color.split('-')[1]}-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]` : 'border-neutral-800'
                                    }`}
                                    animate={{ scale: isCurrent ? 1.1 : 1 }}
                                >
                                    <Icon className={`w-5 h-5 md:w-7 md:h-7 ${isActive ? s.color : 'text-neutral-700'}`} />
                                </motion.div>
                                <div className={`text-xs md:text-sm font-mono font-bold tracking-wider ${isActive ? 'text-white' : 'text-neutral-600'}`}>
                                    {s.label}
                                </div>
                                {isCurrent && (
                                    <motion.div 
                                        className="absolute -bottom-8 text-[10px] text-lime-400 font-mono"
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        PROCESSING...
                                    </motion.div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="text-center">
                    <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                        <span className="text-neutral-400 text-xs md:text-sm mr-2">PROTOCOL STATUS:</span>
                        <span className="text-lime-400 font-mono text-xs md:text-sm font-bold">LIVE • BLOCK {184920 + step}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Adding missing useEffect import
import { useEffect } from 'react';