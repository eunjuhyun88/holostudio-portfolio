import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, AlertTriangle, CheckCircle, FileAudio, FileVideo, FileText, Scan, Sliders, Image as ImageIcon, Terminal, Lock, Radio, Info } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function AidGuardianScanner() {
    const [scanning, setScanning] = useState(false);
    const [result, setResult] = useState(null);
    const [activeSample, setActiveSample] = useState(0);
    const [sensitivity, setSensitivity] = useState([75]);
    const [strictMode, setStrictMode] = useState(false);

    const samples = [
        { 
            id: 0, 
            name: "Live Broadcast", 
            type: "RTMP Stream", 
            risk: "Scanning", 
            baseScore: 100,
            details: { "Hate Speech": 0, "Violence": 0, "Sexual Content": 0, "Self-Harm": 0 },
            icon: Radio,
            color: "text-blue-500",
            desc: "Real-time protocol stream monitoring",
            explanation: "Initializing live stream buffer... Waiting for frame analysis."
        },
        { 
            id: 1, 
            name: "Toxic Audio", 
            type: "Audio Stream", 
            risk: "High", 
            baseScore: 12,
            details: { "Hate Speech": 88, "Harassment": 76, "Violence": 45, "Profanity": 92 },
            icon: FileAudio,
            color: "text-red-500",
            desc: "Voice chat recording with flagged keywords",
            explanation: "Detected aggressive slurs and targeted harassment keywords at timestamps 0:14, 0:32. Voice sentiment analysis indicates high aggression."
        },
        { 
            id: 2, 
            name: "Code Injection", 
            type: "Text/Code", 
            risk: "Critical", 
            baseScore: 5,
            details: { "Malware": 99, "Exploits": 95, "Phishing": 12, "Spam": 45 },
            icon: Terminal,
            color: "text-purple-500",
            desc: "Prompt injection attempt detected",
            explanation: "Pattern match: 'Ignore previous instructions' followed by privileged function calls. Attempt to override system prompt detected."
        },
        { 
            id: 3, 
            name: "Deepfake Video", 
            type: "Video Stream", 
            risk: "Medium", 
            baseScore: 45,
            details: { "Manipulation": 82, "Misinformation": 65, "Copyright": 12, "Identity Theft": 78 },
            icon: FileVideo,
            color: "text-orange-500",
            desc: "Synthetic media lacking provenance",
            explanation: "Facial landmarks inconsistent between frames 140-200. Lip-sync analysis shows 85% probability of audio-visual mismatch."
        }
    ];

    const runScan = (id) => {
        setActiveSample(id);
        setScanning(true);
        setResult(null);
        
        // Simulate processing time based on complexity
        const processingTime = 1000 + Math.random() * 1000;
        
        setTimeout(() => {
            setScanning(false);
            const base = samples[id];
            // Adjust score based on sensitivity
            const sensitivityFactor = (sensitivity[0] - 50) / 100; // -0.5 to 0.5
            let adjustedScore = base.baseScore - (base.baseScore < 50 ? sensitivityFactor * 20 : 0);
            if (strictMode && base.risk !== 'Low') adjustedScore -= 10;
            
            setResult({
                ...base,
                score: Math.min(100, Math.max(0, Math.round(adjustedScore)))
            });
        }, processingTime);
    };

    // Live Stream Simulation
    useEffect(() => {
        if (activeSample === 0 && scanning) {
            // No specific logic needed during scanning animation for now
        } else if (activeSample === 0 && result) {
            // Dynamic updates for live stream result
            const interval = setInterval(() => {
                setResult(prev => {
                    const newScore = Math.min(100, Math.max(0, prev.baseScore + (Math.random() - 0.5) * 10));
                    const newDetails = { ...prev.details };
                    Object.keys(newDetails).forEach(k => {
                        newDetails[k] = Math.max(0, Math.min(100, newDetails[k] + (Math.random() - 0.5) * 5));
                    });
                    
                    // Occasionally spike a risk
                    if (Math.random() > 0.9) {
                        newDetails["Violence"] += 20;
                        return {
                            ...prev,
                            score: Math.max(0, newScore - 20),
                            risk: "High",
                            details: newDetails,
                            explanation: "Sudden spike in visual conflict detection. Frame analysis indicates potential physical altercation."
                        };
                    }

                    return {
                        ...prev,
                        score: newScore,
                        risk: newScore > 80 ? "Low" : newScore > 50 ? "Medium" : "High",
                        details: newDetails,
                        explanation: newScore > 80 ? "Stream content within safety parameters. Audio/Visual checks nominal." : prev.explanation
                    };
                });
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [activeSample, result, scanning]);

    return (
        <div className="w-full h-full bg-[#0A0A0A] text-white p-6 md:p-8 flex flex-col rounded-3xl overflow-hidden border border-white/5">
            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                <div className="flex items-center gap-2 text-indigo-400">
                    <Shield className="w-5 h-5" />
                    <span className="font-mono text-sm tracking-wider font-bold">AiD GUARDIAN CORE v2.0</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
                    SYSTEM ACTIVE
                </div>
            </div>

            <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
                {/* Controls Sidebar */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="space-y-4">
                        <Label className="text-xs text-neutral-400 uppercase tracking-wider font-bold">Detection Parameters</Label>
                        
                        <div className="bg-white/5 p-4 rounded-xl space-y-4 border border-white/5">
                            <div className="space-y-2">
                                <div className="flex justify-between text-xs">
                                    <span className="text-neutral-300">Sensitivity Threshold</span>
                                    <span className="text-indigo-400 font-mono">{sensitivity[0]}%</span>
                                </div>
                                <Slider 
                                    value={sensitivity} 
                                    onValueChange={setSensitivity} 
                                    max={100} 
                                    step={1}
                                    className="py-2" 
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <Label htmlFor="strict-mode" className="text-xs text-neutral-300">Strict Compliance Mode</Label>
                                <Switch 
                                    id="strict-mode" 
                                    checked={strictMode} 
                                    onCheckedChange={setStrictMode} 
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <Label className="text-xs text-neutral-400 uppercase tracking-wider font-bold">Input Source</Label>
                        <div className="grid grid-cols-1 gap-2">
                            {samples.map((s) => (
                                <button
                                    key={s.id}
                                    onClick={() => runScan(s.id)}
                                    className={`text-left px-4 py-3 rounded-xl border transition-all flex items-center gap-3 group ${
                                        activeSample === s.id 
                                        ? 'bg-indigo-500/10 border-indigo-500/50' 
                                        : 'bg-black/20 border-white/5 hover:bg-white/5'
                                    }`}
                                >
                                    <div className={`p-2 rounded-lg ${activeSample === s.id ? 'bg-indigo-500/20 text-indigo-300' : 'bg-white/5 text-neutral-400 group-hover:text-white'}`}>
                                        <s.icon className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className={`text-sm font-medium ${activeSample === s.id ? 'text-white' : 'text-neutral-300'}`}>{s.name}</div>
                                        <div className="text-[10px] text-neutral-500">{s.type}</div>
                                    </div>
                                    {activeSample === s.id && <div className="ml-auto w-2 h-2 rounded-full bg-indigo-500" />}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Visualizer */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                    <div className="flex-1 bg-black/40 rounded-2xl border border-white/5 relative overflow-hidden flex items-center justify-center min-h-[300px]">
                        <AnimatePresence mode="wait">
                            {scanning ? (
                                <motion.div
                                    key="scanning"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center gap-6 z-10"
                                >
                                    <div className="relative">
                                        <div className="w-24 h-24 rounded-full border-2 border-indigo-500/30 animate-[spin_3s_linear_infinite]" />
                                        <div className="w-16 h-16 rounded-full border-2 border-indigo-400 border-t-transparent animate-[spin_1.5s_linear_infinite] absolute top-4 left-4" />
                                        <Shield className="w-8 h-8 text-indigo-500 absolute top-8 left-8 animate-pulse" />
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                            <div className="text-sm font-mono text-indigo-400 tracking-widest">ANALYZING CONTENT</div>
                                            <div className="text-xs text-neutral-500">Applying Policy Filters...</div>
                                        </div>

                                        {/* Type Specific Visuals */}
                                        {samples[activeSample].name === "Code Injection" && (
                                            <div className="absolute inset-0 p-8 font-mono text-[10px] text-green-500/20 pointer-events-none overflow-hidden leading-tight">
                                                {Array.from({length: 20}).map((_,i) => (
                                                    <div key={i}>{`> SYSTEM_OVERRIDE_AUTH_TOKEN_${Math.random().toString(16).substr(2,8)}`}</div>
                                                ))}
                                            </div>
                                        )}
                                        {samples[activeSample].name === "Mixed Media" && (
                                            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                                                <ImageIcon className="w-32 h-32 text-indigo-500" />
                                            </div>
                                        )}

                                        <motion.div 
                                            className="absolute inset-0 bg-indigo-500/5"
                                            animate={{ 
                                                background: ["rgba(99, 102, 241, 0.02)", "rgba(99, 102, 241, 0.1)", "rgba(99, 102, 241, 0.02)"] 
                                            }}
                                            transition={{ repeat: Infinity, duration: 1.5 }}
                                        />
                                        {/* Scanning Lines */}
                                        <motion.div 
                                            className="absolute top-0 left-0 right-0 h-1 bg-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                                            animate={{ top: ["0%", "100%", "0%"] }}
                                            transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                                        />
                                    </motion.div>
                                    ) : result ? (
                                <motion.div
                                    key="result"
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="w-full h-full p-8 flex flex-col justify-between relative z-10"
                                >
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <div className={`text-5xl font-mono font-bold tracking-tighter mb-2 ${
                                                result.score > 80 ? 'text-green-500' : result.score > 50 ? 'text-yellow-500' : 'text-red-500'
                                            }`}>
                                                {result.score}
                                            </div>
                                            <div className="text-xs text-neutral-500 uppercase tracking-widest font-bold">Safety Score</div>
                                        </div>
                                        <div className={`px-4 py-2 rounded-full border ${
                                            result.risk === 'Low' ? 'border-green-500/30 bg-green-500/10 text-green-400' : 
                                            result.risk === 'High' ? 'border-red-500/30 bg-red-500/10 text-red-400' :
                                            'border-orange-500/30 bg-orange-500/10 text-orange-400'
                                        }`}>
                                            <div className="flex items-center gap-2">
                                                <result.icon className="w-4 h-4" />
                                                <span className="text-sm font-bold uppercase">{result.risk} Risk</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="text-xs text-neutral-500 uppercase tracking-wider font-bold mb-2">GARM Risk Breakdown</div>
                                        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                                            {Object.entries(result.details).map(([key, val], i) => (
                                                <div key={key} className="space-y-1">
                                                    <div className="flex justify-between text-[10px]">
                                                        <span className="text-neutral-300 capitalize truncate pr-2">{key}</span>
                                                        <span className={`font-mono ${val > 50 ? 'text-red-400' : 'text-neutral-500'}`}>{Math.round(val)}%</span>
                                                    </div>
                                                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                                        <motion.div 
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${val}%` }}
                                                            transition={{ duration: 0.8, delay: 0.1 * i }}
                                                            className={`h-full rounded-full ${val > 70 ? 'bg-red-500' : val > 30 ? 'bg-orange-500' : 'bg-green-500'}`}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {result.explanation && (
                                        <div className="mt-4 p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">
                                            <div className="flex items-center gap-2 mb-1 text-indigo-400">
                                                <Info className="w-3 h-3" />
                                                <span className="text-[10px] font-bold uppercase">Explainability Engine</span>
                                            </div>
                                            <p className="text-xs text-indigo-100 leading-relaxed">
                                                {result.explanation}
                                            </p>
                                        </div>
                                    )}

                                    <div className="pt-4 border-t border-white/5 text-xs text-neutral-500 font-mono">
                                        Analysis ID: {Math.random().toString(36).substr(2, 9).toUpperCase()} • {result.type}
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="text-center space-y-4">
                                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto border border-white/10">
                                        <Scan className="w-6 h-6 text-neutral-500" />
                                    </div>
                                    <div className="text-neutral-500 text-sm">Select an input source to begin analysis</div>
                                </div>
                            )}
                        </AnimatePresence>

                        {/* Grid Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                    </div>
                </div>
            </div>
        </div>
    );
}