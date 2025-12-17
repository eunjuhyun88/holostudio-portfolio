import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Database, Share2, ShieldCheck, ArrowRight, Coins, Wallet, Layers, Lock, Settings } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export default function PlayArtsVisual() {
    const [step, setStep] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [royaltyRate, setRoyaltyRate] = useState([5]);
    const [totalValue, setTotalValue] = useState(1000);
    const [history, setHistory] = useState([]);

    const steps = [
        { id: 0, label: "Create", icon: Share2, color: "text-neutral-400", desc: "User generates content" },
        { id: 1, label: "Anchor", icon: Database, color: "text-blue-400", desc: "Metadata stored on MCP" },
        { id: 2, label: "Verify", icon: ShieldCheck, color: "text-lime-400", desc: "Nodes validate provenance" },
        { id: 3, label: "Route", icon: Network, color: "text-purple-400", desc: "Value distributed to creators" }
    ];

    useEffect(() => {
        if (!isPlaying) return;
        
        const timer = setInterval(() => {
            setStep((prev) => {
                if (prev === 3) {
                    // Add to history on completion
                    const earnings = (totalValue * royaltyRate[0]) / 100;
                    setHistory(h => [{ id: Date.now(), value: earnings.toFixed(2), time: new Date().toLocaleTimeString() }, ...h.slice(0, 4)]);
                    return 0;
                }
                return prev + 1;
            });
        }, 2000);
        return () => clearInterval(timer);
    }, [isPlaying, royaltyRate, totalValue]);

    return (
        <div className="w-full h-full bg-[#050505] p-6 md:p-8 flex flex-col md:flex-row gap-8 rounded-3xl overflow-hidden border border-white/5 relative">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 pointer-events-none" />

            {/* Left Panel: Configuration */}
            <div className="w-full md:w-1/3 space-y-6 relative z-10 bg-black/40 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4 text-lime-400">
                    <Settings className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Protocol Config</span>
                </div>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs text-neutral-400">
                            <span>Royalty Rate</span>
                            <span className="text-white">{royaltyRate}%</span>
                        </div>
                        <Slider 
                            value={royaltyRate} 
                            onValueChange={setRoyaltyRate} 
                            max={20} 
                            step={0.5} 
                            className="py-2"
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between text-xs text-neutral-400">
                            <span>Asset Value</span>
                            <span className="text-white">${totalValue}</span>
                        </div>
                        <div className="flex gap-2">
                            {[100, 1000, 5000].map(val => (
                                <button
                                    key={val}
                                    onClick={() => setTotalValue(val)}
                                    className={`px-3 py-1 rounded-full text-xs border ${
                                        totalValue === val 
                                        ? 'bg-lime-500/20 border-lime-500 text-lime-400' 
                                        : 'bg-white/5 border-white/10 text-neutral-500 hover:text-white'
                                    }`}
                                >
                                    ${val}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                    <div className="text-xs text-neutral-500 uppercase font-bold mb-3">Recent Settlements</div>
                    <div className="space-y-2">
                        <AnimatePresence>
                            {history.map((h) => (
                                <motion.div
                                    key={h.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="flex justify-between items-center text-sm p-2 rounded-lg bg-white/5"
                                >
                                    <div className="flex items-center gap-2">
                                        <Wallet className="w-3 h-3 text-purple-400" />
                                        <span className="font-mono text-neutral-300">Creator Wallet</span>
                                    </div>
                                    <span className="text-lime-400 font-bold">+${h.value}</span>
                                </motion.div>
                            ))}
                            {history.length === 0 && (
                                <div className="text-xs text-neutral-600 italic text-center py-4">
                                    Waiting for routing...
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Right Panel: Visualization */}
            <div className="flex-1 flex flex-col items-center justify-center relative z-10">
                <div className="w-full max-w-lg relative">
                    {/* Progress Bar */}
                    <div className="absolute top-8 left-0 w-full h-0.5 bg-white/10 -z-10" />
                    <motion.div 
                        className="absolute top-8 left-0 h-0.5 bg-lime-500 shadow-[0_0_10px_rgba(132,204,22,0.5)] -z-10"
                        animate={{ width: `${(step / (steps.length - 1)) * 100}%` }}
                        transition={{ duration: 0.5 }}
                    />

                    <div className="flex justify-between relative">
                        {steps.map((s, idx) => {
                            const isActive = idx <= step;
                            const isCurrent = idx === step;
                            const Icon = s.icon;
                            
                            return (
                                <div key={idx} className="flex flex-col items-center gap-4 w-24">
                                    <motion.div 
                                        className={`w-16 h-16 rounded-2xl border-2 flex items-center justify-center bg-[#050505] z-10 transition-all duration-500 relative ${
                                            isActive ? `border-${s.color.split('-')[1]}-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]` : 'border-neutral-800'
                                        }`}
                                        animate={{ 
                                            scale: isCurrent ? 1.1 : 1,
                                            y: isCurrent ? -5 : 0,
                                            borderColor: isActive ? (isCurrent ? '#fff' : '') : '#262626'
                                        }}
                                    >
                                        <Icon className={`w-6 h-6 ${isActive ? s.color : 'text-neutral-700'}`} />
                                        
                                        {/* Pulse Effect for Current */}
                                        {isCurrent && (
                                            <div className={`absolute inset-0 rounded-2xl animate-ping opacity-20 bg-${s.color.split('-')[1]}-500`} />
                                        )}
                                    </motion.div>
                                    
                                    <div className="text-center">
                                        <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${isActive ? 'text-white' : 'text-neutral-600'}`}>
                                            {s.label}
                                        </div>
                                        <div className="text-[10px] text-neutral-500 leading-tight hidden md:block">
                                            {s.desc}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Status Indicator */}
                <motion.div 
                    className="mt-12 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-4"
                    animate={{ borderColor: step === 3 ? 'rgba(168, 85, 247, 0.5)' : 'rgba(255, 255, 255, 0.1)' }}
                >
                    <div className="flex flex-col text-right border-r border-white/10 pr-4">
                        <span className="text-[10px] text-neutral-500 uppercase">Block Height</span>
                        <span className="font-mono text-xs font-bold text-white">#18,492,{Math.floor(Date.now() / 1000).toString().slice(-3)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${step === 3 ? 'bg-purple-500' : 'bg-lime-500'} animate-pulse`} />
                        <span className="text-xs font-bold text-lime-400">
                            {step === 3 ? "ROUTING VALUE..." : "VERIFYING..."}
                        </span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}