import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Activity, BarChart2 } from 'lucide-react';
import { Area, AreaChart, ResponsiveContainer, YAxis } from 'recharts';

const data = Array.from({ length: 30 }, (_, i) => ({
    time: i,
    price: 40000 + Math.random() * 2000 + (Math.sin(i / 5) * 1000),
    sentiment: 0.5 + Math.random() * 0.5
}));

export default function StockhooDemo() {
    const [showZones, setShowZones] = useState(false);
    const [signal, setSignal] = useState(null);

    const generateSignal = () => {
        setShowZones(true);
        setSignal(null);
        setTimeout(() => {
            setSignal({ type: "LONG", confidence: 87, price: 42150 });
        }, 800);
    };

    return (
        <div className="w-full h-full bg-[#050505] p-6 flex flex-col relative">
            <div className="flex justify-between items-center mb-6 z-10">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-sm text-emerald-400">BTC/USDT</span>
                </div>
                <button
                    onClick={generateSignal}
                    className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-full transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                >
                    RUN DPO ANALYSIS
                </button>
            </div>

            <div className="flex-1 relative rounded-xl border border-white/5 bg-black/40 overflow-hidden">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <YAxis hide domain={['auto', 'auto']} />
                        <Area 
                            type="monotone" 
                            dataKey="price" 
                            stroke="#10b981" 
                            strokeWidth={2}
                            fill="url(#colorPrice)" 
                        />
                    </AreaChart>
                </ResponsiveContainer>

                {showZones && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.15 }}
                            className="absolute top-[10%] left-0 right-0 h-[20%] bg-red-500 border-b border-red-500"
                        />
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.15 }}
                            className="absolute bottom-[15%] left-0 right-0 h-[20%] bg-emerald-500 border-t border-emerald-500"
                        />
                    </>
                )}

                {signal && (
                    <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0A0A0A] border border-emerald-500/50 p-4 rounded-xl shadow-2xl text-center backdrop-blur-xl"
                    >
                        <div className="text-xs text-neutral-400 mb-1">AI SIGNAL GENERATED</div>
                        <div className="text-2xl font-black text-emerald-400 mb-1">{signal.type}</div>
                        <div className="flex gap-4 text-xs font-mono">
                            <span>CONF: {signal.confidence}%</span>
                            <span className="text-white">ENTRY: ${signal.price.toLocaleString()}</span>
                        </div>
                    </motion.div>
                )}
            </div>
            
            <div className="mt-4 flex gap-4 text-[10px] font-mono text-neutral-500">
                <div className="flex items-center gap-1">
                    <Activity className="w-3 h-3" /> VOLATILITY: LOW
                </div>
                <div className="flex items-center gap-1">
                    <BarChart2 className="w-3 h-3" /> VOLUME: 24.5M
                </div>
                <div className="flex-1 text-right text-emerald-500/50">
                    LIVE FEED • 34ms LATENCY
                </div>
            </div>
        </div>
    );
}