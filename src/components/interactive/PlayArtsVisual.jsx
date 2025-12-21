import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Database, Share2, ShieldCheck, ArrowRight, Coins, Wallet, Layers, Lock, Settings } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useTheme } from '@/components/ThemeContext';

export default function PlayArtsVisual() {
    const { theme } = useTheme();
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
                    const totalReward = (totalValue * royaltyRate[0]) / 100;
                    
                    const creatorShare = totalReward * 0.8;
                    const verifierShare = totalReward * 0.15;
                    const platformShare = totalReward * 0.05;

                    setHistory(h => [
                        { id: Date.now() + 'c', label: 'Creator', value: creatorShare.toFixed(2), color: 'text-lime-400', icon: Wallet },
                        { id: Date.now() + 'v', label: 'Verifier', value: verifierShare.toFixed(2), color: 'text-blue-400', icon: ShieldCheck },
                        { id: Date.now() + 'p', label: 'Platform', value: platformShare.toFixed(2), color: 'text-purple-400', icon: Network },
                        ...h.slice(0, 5) // Keep last 2 batches roughly
                    ]);
                    return 0;
                }
                return prev + 1;
            });
        }, 2000);
        return () => clearInterval(timer);
    }, [isPlaying, royaltyRate, totalValue]);

    return (
        <div className={`w-full h-full p-6 md:p-8 flex flex-col md:flex-row gap-8 rounded-3xl overflow-hidden border relative ${
            theme === 'dark'
                ? 'bg-[#050505] border-white/5'
                : 'bg-white border-neutral-200 shadow-lg'
        }`}>
            {/* Background Grid */}
            <div className={`absolute inset-0 bg-[size:40px_40px] opacity-50 pointer-events-none ${
                theme === 'dark'
                    ? 'bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]'
                    : 'bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)]'
            }`} />

            {/* Left Panel: Configuration */}
            <div className={`w-full md:w-1/3 space-y-6 relative z-10 p-6 rounded-2xl border backdrop-blur-sm ${
                theme === 'dark'
                    ? 'bg-black/40 border-white/5'
                    : 'bg-neutral-50 border-neutral-200'
            }`}>
                <div className={`flex items-center gap-2 mb-4 ${
                    theme === 'dark' ? 'text-lime-400' : 'text-yellow-600'
                }`}>
                    <Settings className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Protocol Config</span>
                </div>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <div className={`flex justify-between text-xs ${
                            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                        }`}>
                            <span>Royalty Rate</span>
                            <span className={theme === 'dark' ? 'text-white' : 'text-neutral-900'}>{royaltyRate}%</span>
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
                        <div className={`flex justify-between text-xs ${
                            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                        }`}>
                            <span>Asset Value</span>
                            <span className={theme === 'dark' ? 'text-white' : 'text-neutral-900'}>${totalValue}</span>
                        </div>
                        <div className="flex gap-2">
                            {[100, 1000, 5000].map(val => (
                                <button
                                    key={val}
                                    onClick={() => setTotalValue(val)}
                                    className={`px-3 py-1 rounded-full text-xs border ${
                                        theme === 'dark'
                                            ? (totalValue === val 
                                                ? 'bg-lime-500/20 border-lime-500 text-lime-400' 
                                                : 'bg-white/5 border-white/10 text-neutral-500 hover:text-white')
                                            : (totalValue === val
                                                ? 'bg-yellow-100 border-yellow-500 text-yellow-700'
                                                : 'bg-white border-neutral-300 text-neutral-600 hover:text-neutral-900')
                                    }`}
                                >
                                    ${val}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={`pt-6 border-t ${
                    theme === 'dark' ? 'border-white/10' : 'border-neutral-200'
                }`}>
                    <div className={`text-xs uppercase font-bold mb-3 ${
                        theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'
                    }`}>Recent Settlements</div>
                    <div className="space-y-2">
                        <AnimatePresence>
                            {history.map((h) => (
                                <motion.div
                                    key={h.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0 }}
                                    className={`flex justify-between items-center text-sm p-2 rounded-lg ${
                                        theme === 'dark' ? 'bg-white/5' : 'bg-neutral-100'
                                    }`}
                                >
                                    <div className="flex items-center gap-2">
                                        <h.icon className={`w-3 h-3 ${h.color}`} />
                                        <span className={`font-mono ${
                                            theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                                        }`}>{h.label}</span>
                                    </div>
                                    <span className={`${h.color} font-bold`}>+${h.value}</span>
                                </motion.div>
                            ))}
                            {history.length === 0 && (
                                <div className={`text-xs italic text-center py-4 ${
                                    theme === 'dark' ? 'text-neutral-600' : 'text-neutral-500'
                                }`}>
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
                    <div className={`absolute top-8 left-0 w-full h-0.5 -z-10 ${
                        theme === 'dark' ? 'bg-white/10' : 'bg-neutral-300'
                    }`} />
                    <motion.div 
                        className={`absolute top-8 left-0 h-0.5 -z-10 ${
                            theme === 'dark'
                                ? 'bg-lime-500 shadow-[0_0_10px_rgba(132,204,22,0.5)]'
                                : 'bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]'
                        }`}
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
                                        className={`w-16 h-16 rounded-2xl border-2 flex items-center justify-center z-10 transition-all duration-500 relative ${
                                            theme === 'dark'
                                                ? `bg-[#050505] ${isActive ? `border-${s.color.split('-')[1]}-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]` : 'border-neutral-800'}`
                                                : `bg-white ${isActive ? `border-${s.color.split('-')[1] === 'lime' ? 'yellow' : s.color.split('-')[1]}-500 shadow-lg` : 'border-neutral-300'}`
                                        }`}
                                        animate={{ 
                                            scale: isCurrent ? 1.1 : 1,
                                            y: isCurrent ? -5 : 0,
                                            borderColor: theme === 'dark' 
                                                ? (isActive ? (isCurrent ? '#fff' : '') : '#262626')
                                                : (isActive ? (isCurrent ? '#000' : '') : '#d4d4d4')
                                        }}
                                    >
                                        <Icon className={`w-6 h-6 ${
                                            theme === 'dark'
                                                ? (isActive ? s.color : 'text-neutral-700')
                                                : (isActive ? (s.color === 'text-lime-400' ? 'text-yellow-600' : s.color.replace('400', '600')) : 'text-neutral-400')
                                        }`} />
                                        
                                        {/* Pulse Effect for Current */}
                                        {isCurrent && (
                                            <div className={`absolute inset-0 rounded-2xl animate-ping opacity-20 bg-${s.color.split('-')[1]}-500`} />
                                        )}
                                    </motion.div>
                                    
                                    <div className="text-center">
                                        <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                                            theme === 'dark'
                                                ? (isActive ? 'text-white' : 'text-neutral-600')
                                                : (isActive ? 'text-neutral-900' : 'text-neutral-500')
                                        }`}>
                                            {s.label}
                                        </div>
                                        <div className={`text-[10px] leading-tight hidden md:block ${
                                            theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'
                                        }`}>
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
                    className={`mt-12 px-6 py-3 rounded-full border backdrop-blur-md flex items-center gap-4 ${
                        theme === 'dark'
                            ? 'bg-white/5 border-white/10'
                            : 'bg-white border-neutral-200 shadow-md'
                    }`}
                    animate={{ borderColor: theme === 'dark'
                        ? (step === 3 ? 'rgba(168, 85, 247, 0.5)' : 'rgba(255, 255, 255, 0.1)')
                        : (step === 3 ? 'rgba(147, 51, 234, 0.5)' : 'rgba(212, 212, 212, 1)')
                    }}
                >
                    <div className={`flex flex-col text-right border-r pr-4 ${
                        theme === 'dark' ? 'border-white/10' : 'border-neutral-200'
                    }`}>
                        <span className={`text-[10px] uppercase ${
                            theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'
                        }`}>Block Height</span>
                        <span className={`font-mono text-xs font-bold ${
                            theme === 'dark' ? 'text-white' : 'text-neutral-900'
                        }`}>#18,492,{Math.floor(Date.now() / 1000).toString().slice(-3)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full animate-pulse ${
                            step === 3 ? 'bg-purple-500' : (theme === 'dark' ? 'bg-lime-500' : 'bg-yellow-500')
                        }`} />
                        <span className={`text-xs font-bold ${
                            theme === 'dark' ? 'text-lime-400' : 'text-yellow-700'
                        }`}>
                            {step === 3 ? "ROUTING VALUE..." : "VERIFYING..."}
                        </span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}