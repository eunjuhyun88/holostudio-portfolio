import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Activity, BarChart2, Zap, Play, RotateCcw, Settings, ChevronDown, Check } from 'lucide-react';
import { Area, AreaChart, ResponsiveContainer, YAxis, Tooltip, XAxis } from 'recharts';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";

export default function StockhooDemo() {
    const [data, setData] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showZones, setShowZones] = useState(true);
    const [signals, setSignals] = useState([]);
    const [timeframe, setTimeframe] = useState('1H');
    const [volatility, setVolatility] = useState([50]);

    // Initial data generation
    useEffect(() => {
        const initData = Array.from({ length: 50 }, (_, i) => ({
            time: i,
            price: 40000 + Math.random() * 500 + (Math.sin(i / 10) * 1000),
            sentiment: 0.5 + Math.random() * 0.5
        }));
        setData(initData);
    }, []);

    // Simulation loop
    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            setData(prev => {
                const last = prev[prev.length - 1];
                const volFactor = volatility[0] / 50; // 0.2 to 2.0
                const change = (Math.random() - 0.5) * 200 * volFactor;
                const newPrice = last.price + change;
                
                const newPoint = {
                    time: last.time + 1,
                    price: newPrice,
                    sentiment: 0.5 + Math.random() * 0.5
                };

                // Signal Logic
                if (Math.random() > 0.9) {
                    const type = Math.random() > 0.5 ? 'LONG' : 'SHORT';
                    const newSignal = {
                        id: Date.now(),
                        type,
                        price: newPrice,
                        time: last.time + 1,
                        confidence: Math.floor(70 + Math.random() * 25)
                    };
                    setSignals(s => [...s.slice(-2), newSignal]);
                }

                return [...prev.slice(1), newPoint];
            });
        }, 200);

        return () => clearInterval(interval);
    }, [isPlaying, volatility]);

    const toggleSim = () => setIsPlaying(!isPlaying);

    return (
        <div className="w-full h-full bg-[#050505] p-6 flex flex-col rounded-3xl border border-white/5 relative overflow-hidden">
             {/* Background Grid */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            {/* Top Toolbar */}
            <div className="flex justify-between items-center mb-6 z-10">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
                        <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`} />
                        <span className="font-mono text-sm font-bold text-white">BTC/USDT</span>
                        <span className="text-xs text-neutral-500 ml-1">PERP</span>
                    </div>
                    
                    <div className="flex gap-1 bg-white/5 rounded-lg p-1 border border-white/10">
                        {['15M', '1H', '4H', '1D'].map(tf => (
                            <button 
                                key={tf}
                                onClick={() => setTimeframe(tf)}
                                className={`px-2 py-1 text-xs rounded font-medium transition-colors ${
                                    timeframe === tf ? 'bg-white/10 text-white' : 'text-neutral-500 hover:text-white'
                                }`}
                            >
                                {tf}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="hidden md:flex items-center gap-2 mr-4">
                        <span className="text-xs text-neutral-500 uppercase font-bold">Volatility</span>
                        <Slider 
                            value={volatility} 
                            onValueChange={setVolatility} 
                            max={100} 
                            step={1} 
                            className="w-24"
                        />
                    </div>
                    <Button
                        onClick={toggleSim}
                        className={`h-8 text-xs font-bold rounded-full transition-all ${
                            isPlaying 
                            ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' 
                            : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                        }`}
                    >
                        {isPlaying ? 'STOP SIM' : 'RUN SIMULATION'} <Play className={`w-3 h-3 ml-1 ${isPlaying ? 'hidden' : 'block'}`} />
                    </Button>
                </div>
            </div>

            {/* Main Chart Area */}
            <div className="flex-1 relative rounded-xl border border-white/5 bg-black/40 overflow-hidden backdrop-blur-sm">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <YAxis 
                            hide 
                            domain={['dataMin - 1000', 'dataMax + 1000']} 
                        />
                        <Area 
                            type="monotone" 
                            dataKey="price" 
                            stroke="#10b981" 
                            strokeWidth={2}
                            fill="url(#colorPrice)" 
                            isAnimationActive={false}
                        />
                        {/* Custom Signal Markers */}
                    </AreaChart>
                </ResponsiveContainer>

                {/* AI Zones Overlay */}
                {showZones && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.1 }}
                            className="absolute top-[15%] left-0 right-0 h-[15%] bg-red-500 border-b border-red-500 pointer-events-none"
                        />
                        <div className="absolute top-[16%] right-2 text-[10px] text-red-500 font-bold uppercase tracking-wider">Supply Zone</div>
                        
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.1 }}
                            className="absolute bottom-[20%] left-0 right-0 h-[15%] bg-emerald-500 border-t border-emerald-500 pointer-events-none"
                        />
                         <div className="absolute bottom-[21%] right-2 text-[10px] text-emerald-500 font-bold uppercase tracking-wider">Demand Zone</div>
                    </>
                )}

                {/* Active Signals List (Floating) */}
                <div className="absolute top-4 left-4 space-y-2 pointer-events-none">
                    <AnimatePresence>
                        {signals.map((sig) => (
                            <motion.div
                                key={sig.id}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className={`
                                    flex items-center gap-3 px-3 py-2 rounded-lg border backdrop-blur-md shadow-xl
                                    ${sig.type === 'LONG' ? 'bg-emerald-950/80 border-emerald-500/30' : 'bg-red-950/80 border-red-500/30'}
                                `}
                            >
                                <div className={`font-black text-sm ${sig.type === 'LONG' ? 'text-emerald-400' : 'text-red-400'}`}>
                                    {sig.type}
                                </div>
                                <div className="text-xs font-mono text-white">
                                    ${sig.price.toFixed(0)}
                                </div>
                                <Badge variant="outline" className="text-[10px] h-5 border-white/10 bg-black/20 text-neutral-300">
                                    {sig.confidence}% CONF
                                </Badge>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
            
            {/* Bottom Metrics */}
            <div className="mt-4 grid grid-cols-4 gap-4">
                <div className="bg-white/5 rounded-lg p-2 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[10px] text-neutral-400 uppercase font-bold">
                        <Activity className="w-3 h-3" /> 24h Volatility
                    </div>
                    <span className="text-xs font-mono text-white">{(volatility[0] * 0.12).toFixed(2)}%</span>
                </div>
                <div className="bg-white/5 rounded-lg p-2 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[10px] text-neutral-400 uppercase font-bold">
                        <BarChart2 className="w-3 h-3" /> Open Interest
                    </div>
                    <span className="text-xs font-mono text-white">$24.5B</span>
                </div>
                <div className="bg-white/5 rounded-lg p-2 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[10px] text-neutral-400 uppercase font-bold">
                        <Zap className="w-3 h-3" /> Funding Rate
                    </div>
                    <span className="text-xs font-mono text-emerald-400">0.0104%</span>
                </div>
                 <div className="bg-emerald-500/10 rounded-lg p-2 border border-emerald-500/20 flex items-center justify-center text-xs font-bold text-emerald-400 animate-pulse">
                    AI AGENT ACTIVE
                </div>
            </div>
        </div>
    );
}