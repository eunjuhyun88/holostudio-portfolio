import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Cpu, Zap, Users, Lock, Gamepad2, CheckCircle2, ArrowRight, Play, Pause } from 'lucide-react';
import { cn } from "@/lib/utils";

export default function TechPipeline({ steps }) {
    const [activeStep, setActiveStep] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [autoProgress, setAutoProgress] = useState(0);

    // Enhanced details for each step (could be passed as props in a real app)
    const stepDetails = [
        { icon: Shield, tech: "Vector Embedding Analysis", stat: "99.8% Detection" },
        { icon: Zap, tech: "Latent Space Diffusion", stat: "<2s Latency" },
        { icon: Lock, tech: "Perceptual Hashing", stat: "0 False Positives" },
        { icon: Users, tech: "Optimistic Oracle", stat: "DAO Resolution" },
        { icon: CheckCircle2, tech: "ZK-SNARK Proofs", stat: "Gas Optimized" },
        { icon: Gamepad2, tech: "Unity/Unreal SDK", stat: "Native Import" }
    ];

    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setActiveStep((prev) => (prev + 1) % steps.length);
                setAutoProgress(0);
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isPlaying, steps.length]);

    // Progress bar for auto-play
    useEffect(() => {
        let animationFrame;
        if (isPlaying) {
            const startTime = Date.now();
            const duration = 3000;
            
            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min((elapsed / duration) * 100, 100);
                setAutoProgress(progress);
                
                if (progress < 100) {
                    animationFrame = requestAnimationFrame(animate);
                }
            };
            animationFrame = requestAnimationFrame(animate);
        } else {
            setAutoProgress(0);
        }
        return () => cancelAnimationFrame(animationFrame);
    }, [activeStep, isPlaying]);

    return (
        <div className="w-full bg-black/40 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden relative">
            {/* Header / Controls */}
            <div className="p-6 md:p-8 border-b border-white/5 flex flex-wrap justify-between items-center gap-4">
                <div>
                    <h3 className="text-xl font-bold text-white mb-1">Verification Pipeline</h3>
                    <p className="text-xs text-neutral-500 font-mono">LIVE_INFERENCE_STATUS: <span className="text-emerald-500">OPERATIONAL</span></p>
                </div>
                <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-widest transition-colors"
                >
                    {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                    {isPlaying ? "Pause Simulation" : "Run Simulation"}
                </button>
            </div>

            <div className="grid lg:grid-cols-3">
                {/* Visual Pipeline Track */}
                <div className="lg:col-span-1 border-r border-white/5 bg-black/20 p-4 overflow-y-auto max-h-[500px] no-scrollbar">
                    <div className="space-y-2">
                        {steps.map((step, idx) => {
                            const Icon = stepDetails[idx]?.icon || Shield;
                            const isActive = activeStep === idx;
                            const isPast = activeStep > idx;

                            return (
                                <div 
                                    key={idx}
                                    onClick={() => {
                                        setIsPlaying(false);
                                        setActiveStep(idx);
                                    }}
                                    className={cn(
                                        "group relative p-4 rounded-xl border transition-all cursor-pointer overflow-hidden",
                                        isActive 
                                            ? "bg-indigo-500/10 border-indigo-500/50" 
                                            : "bg-transparent border-transparent hover:bg-white/5 hover:border-white/10"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div 
                                            layoutId="activeGlow"
                                            className="absolute inset-0 bg-indigo-500/5"
                                        />
                                    )}
                                    
                                    {/* Progress Line */}
                                    {idx !== steps.length - 1 && (
                                        <div className="absolute left-6 top-12 bottom-[-20px] w-px bg-white/5 z-0">
                                            <motion.div 
                                                className="w-full bg-indigo-500"
                                                initial={{ height: "0%" }}
                                                animate={{ height: isPast ? "100%" : "0%" }}
                                                transition={{ duration: 0.5 }}
                                            />
                                        </div>
                                    )}

                                    <div className="flex items-center gap-4 relative z-10">
                                        <div className={cn(
                                            "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border transition-colors",
                                            isActive || isPast ? "bg-indigo-500 border-indigo-500 text-white" : "bg-neutral-900 border-neutral-700 text-neutral-500"
                                        )}>
                                            {isPast ? <CheckCircle2 className="w-3 h-3" /> : idx + 1}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className={cn("text-sm font-bold transition-colors", isActive ? "text-white" : "text-neutral-400")}>
                                                {step.name}
                                            </h4>
                                        </div>
                                        {isActive && <ArrowRight className="w-4 h-4 text-indigo-500" />}
                                    </div>
                                    
                                    {isActive && isPlaying && (
                                        <div className="absolute bottom-0 left-0 h-0.5 bg-indigo-500/30 w-full">
                                            <div 
                                                className="h-full bg-indigo-500" 
                                                style={{ width: `${autoProgress}%` }} 
                                            />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Detail View */}
                <div className="lg:col-span-2 p-8 md:p-12 relative flex flex-col justify-center min-h-[400px]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05),transparent_70%)]" />
                    
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="relative z-10"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono mb-6 border border-indigo-500/20">
                                STEP 0{activeStep + 1} :: PROCESSING
                            </div>
                            
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                {steps[activeStep].name}
                            </h2>
                            <p className="text-xl text-neutral-400 leading-relaxed mb-8 max-w-xl">
                                {steps[activeStep].desc}
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                    <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Technology</div>
                                    <div className="text-sm font-bold text-white">{stepDetails[activeStep].tech}</div>
                                </div>
                                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                    <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Performance</div>
                                    <div className="text-sm font-bold text-emerald-400">{stepDetails[activeStep].stat}</div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Background Tech Animation */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
                        {React.createElement(stepDetails[activeStep].icon, { className: "w-64 h-64" })}
                    </div>
                </div>
            </div>
        </div>
    );
}