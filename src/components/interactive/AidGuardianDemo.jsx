import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, AlertTriangle, CheckCircle, FileAudio, FileVideo, FileText, Scan } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function AidGuardianDemo() {
    const [scanning, setScanning] = useState(false);
    const [result, setResult] = useState(null);
    const [activeSample, setActiveSample] = useState(0);

    const samples = [
        { 
            id: 0, 
            name: "Safe Content", 
            type: "Mixed Media", 
            risk: "Low", 
            score: 98,
            details: { hate: 0, violence: 1, selfHarm: 0 },
            icon: CheckCircle,
            color: "text-green-500" 
        },
        { 
            id: 1, 
            name: "Toxic Audio", 
            type: "Audio Stream", 
            risk: "High", 
            score: 12,
            details: { hate: 88, violence: 45, selfHarm: 12 },
            icon: AlertTriangle,
            color: "text-red-500" 
        }
    ];

    const runScan = (id) => {
        setActiveSample(id);
        setScanning(true);
        setResult(null);
        setTimeout(() => {
            setScanning(false);
            setResult(samples[id]);
        }, 1500);
    };

    return (
        <div className="w-full h-full bg-[#0A0A0A] text-white p-6 md:p-8 flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2 text-indigo-400">
                    <Shield className="w-5 h-5" />
                    <span className="font-mono text-sm tracking-wider">AiD GUARDIAN CORE</span>
                </div>
                <div className="flex gap-2">
                    {samples.map((s) => (
                        <button
                            key={s.id}
                            onClick={() => runScan(s.id)}
                            className={`text-xs px-3 py-1 rounded-full border transition-all ${
                                activeSample === s.id 
                                ? 'bg-indigo-500/20 border-indigo-500 text-indigo-300' 
                                : 'border-white/10 text-neutral-500 hover:text-white'
                            }`}
                        >
                            {s.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                {/* Visualizer Area */}
                <div className="bg-black/40 rounded-xl border border-white/5 relative overflow-hidden flex items-center justify-center min-h-[200px]">
                    <AnimatePresence mode="wait">
                        {scanning ? (
                            <motion.div
                                key="scanning"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                            >
                                <div className="w-16 h-16 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin" />
                                <div className="text-xs font-mono text-indigo-400 animate-pulse">ANALYZING MULTI-MODAL STREAM...</div>
                                <motion.div 
                                    className="absolute inset-0 bg-indigo-500/5"
                                    animate={{ 
                                        background: ["rgba(99, 102, 241, 0.05)", "rgba(99, 102, 241, 0.1)", "rgba(99, 102, 241, 0.05)"] 
                                    }}
                                    transition={{ repeat: Infinity, duration: 1 }}
                                />
                            </motion.div>
                        ) : result ? (
                            <motion.div
                                key="result"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-center"
                            >
                                <result.icon className={`w-16 h-16 mx-auto mb-4 ${result.color}`} />
                                <h3 className="text-xl font-bold">{result.type} Analyzed</h3>
                                <p className={`text-sm ${result.color} font-mono mt-1`}>RISK LEVEL: {result.risk.toUpperCase()}</p>
                            </motion.div>
                        ) : (
                            <div className="text-neutral-600 text-sm">Select a sample to scan</div>
                        )}
                    </AnimatePresence>

                    {/* Scanning Grid Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                </div>

                {/* Metrics Area */}
                <div className="space-y-4">
                    <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                        <div className="text-xs text-neutral-500 mb-2 uppercase tracking-wider">Safety Score</div>
                        <div className="flex items-end gap-2">
                            <span className={`text-4xl font-mono font-bold ${
                                !result ? 'text-neutral-700' : result.score > 80 ? 'text-green-400' : 'text-red-400'
                            }`}>
                                {result ? result.score : '--'}
                            </span>
                            <span className="text-neutral-500 text-sm mb-1">/ 100</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        {['Hate Speech', 'Violence', 'Self-Harm'].map((cat, i) => {
                            const val = result ? result.details[Object.keys(result.details)[i]] : 0;
                            const isHigh = val > 50;
                            return (
                                <div key={cat} className="flex items-center gap-3 text-sm">
                                    <div className="w-24 text-neutral-400">{cat}</div>
                                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div 
                                            className={`h-full ${isHigh ? 'bg-red-500' : 'bg-indigo-500'}`}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${val}%` }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </div>
                                    <div className="w-8 text-right font-mono text-xs text-neutral-500">{val}%</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}