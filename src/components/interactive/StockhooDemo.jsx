import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Activity, BarChart2, Zap, Play, RotateCcw, Settings, ChevronDown, Check } from 'lucide-react';
import { Area, AreaChart, ResponsiveContainer, YAxis, Tooltip, XAxis } from 'recharts';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { useTheme } from '@/components/ThemeContext';

export default function StockhooDemo() {
    const { theme } = useTheme();
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
    const [backtestResults, setBacktestResults] = useState(null);
    const [isBacktesting, setIsBacktesting] = useState(false);

    const runBacktest = () => {
        setIsBacktesting(true);
        setTimeout(() => {
            setBacktestResults({
                winRate: 65 + Math.random() * 10,
                pnl: 120 + Math.random() * 50,
                trades: 42 + Math.floor(Math.random() * 10),
                profitFactor: 1.5 + Math.random()
            });
            setIsBacktesting(false);
        }, 1500);
    };

    return (
        <div className={`w-full h-full p-6 flex flex-col rounded-3xl border relative overflow-hidden ${
            theme === 'dark'
                ? 'bg-[#050505] border-white/5'
                : 'bg-white border-neutral-200 shadow-lg'
        }`}>
             {/* Background Grid */}
             <div className={`absolute inset-0 bg-[size:40px_40px] pointer-events-none ${
                 theme === 'dark'
                     ? 'bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)]'
                     : 'bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)]'
             }`} />

            {/* Top Toolbar */}
            <div className="flex justify-between items-center mb-6 z-10">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                        <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`} />
                        <span className="font-mono text-base font-bold text-white">BTC/USDT</span>
                        <span className="text-sm text-neutral-500 ml-1">PERP</span>
                    </div>
                    
                    <div className="flex gap-1 bg-white/5 rounded-lg p-1 border border-white/10">
                        {['15M', '1H', '4H', '1D'].map(tf => (
                            <button 
                                key={tf}
                                onClick={() => setTimeframe(tf)}
                                className={`px-3 py-1.5 text-sm rounded font-medium transition-colors ${
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
                        <span className={`text-sm uppercase font-bold ${
                            theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'
                        }`}>Volatility</span>
                        <Slider 
                            value={volatility} 
                            onValueChange={setVolatility} 
                            max={100} 
                            step={1} 
                            className="w-32"
                        />
                    </div>
                    <Button
                        onClick={toggleSim}
                        className={`h-10 text-sm font-bold rounded-full px-4 transition-all ${
                            isPlaying 
                            ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' 
                            : (theme === 'dark' 
                                ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                                : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg')
                        }`}
                    >
                        {isPlaying ? 'STOP SIM' : 'RUN SIMULATION'} <Play className={`w-4 h-4 ml-2 ${isPlaying ? 'hidden' : 'block'}`} />
                    </Button>
                    <Button
                        onClick={runBacktest}
                        variant="outline"
                        className={`h-10 text-sm font-bold rounded-full px-4 ${
                            theme === 'dark'
                                ? 'border-white/10 text-neutral-400 hover:text-white hover:bg-white/5'
                                : 'border-neutral-300 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100'
                        }`}
                        disabled={isPlaying || isBacktesting}
                    >
                        {isBacktesting ? 'TESTING...' : 'BACKTEST'}
                    </Button>
                </div>
            </div>

            {/* Main Chart Area */}
            <div className={`flex-1 relative rounded-xl border overflow-hidden backdrop-blur-sm ${
                theme === 'dark'
                    ? 'border-white/5 bg-black/40'
                    : 'border-neutral-200 bg-neutral-50'
            }`}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={theme === 'dark' ? "#10b981" : "#059669"} stopOpacity={theme === 'dark' ? 0.2 : 0.3}/>
                                <stop offset="95%" stopColor={theme === 'dark' ? "#10b981" : "#059669"} stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <YAxis 
                            hide 
                            domain={['dataMin - 1000', 'dataMax + 1000']} 
                        />
                        <Area 
                            type="monotone" 
                            dataKey="price" 
                            stroke={theme === 'dark' ? "#10b981" : "#059669"} 
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

                {/* Backtest Overlay */}
                <AnimatePresence>
                    {(isBacktesting || backtestResults) && (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                        >
                            {isBacktesting ? (
                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-12 h-12 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin" />
                                    <div className="text-emerald-500 font-mono font-bold animate-pulse">RUNNING BACKTEST STRATEGY...</div>
                                </div>
                            ) : (
                                <div className="bg-[#0A0A0A] p-6 rounded-2xl border border-emerald-500/30 shadow-2xl min-w-[300px]">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-lg font-bold text-white">Backtest Results</h3>
                                        <button onClick={() => setBacktestResults(null)} className="text-neutral-500 hover:text-white"><RotateCcw className="w-4 h-4" /></button>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                                            <div className="text-[10px] text-emerald-400 font-bold uppercase">Win Rate</div>
                                            <div className="text-2xl font-mono text-white">{backtestResults.winRate.toFixed(1)}%</div>
                                        </div>
                                        <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                                            <div className="text-[10px] text-emerald-400 font-bold uppercase">Total PnL</div>
                                            <div className="text-2xl font-mono text-white">+{backtestResults.pnl.toFixed(1)}%</div>
                                        </div>
                                        <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                                            <div className="text-[10px] text-neutral-400 font-bold uppercase">Trades</div>
                                            <div className="text-xl font-mono text-white">{backtestResults.trades}</div>
                                        </div>
                                        <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                                            <div className="text-[10px] text-neutral-400 font-bold uppercase">Profit Factor</div>
                                            <div className="text-xl font-mono text-white">{backtestResults.profitFactor.toFixed(2)}</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Active Signals List (Floating) */}
                <div className="absolute top-4 left-4 space-y-2 pointer-events-none">
                    <AnimatePresence>
                        {!isBacktesting && !backtestResults && signals.map((sig) => (
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
                <div className={`rounded-lg p-2 border flex items-center justify-between ${
                    theme === 'dark'
                        ? 'bg-white/5 border-white/5'
                        : 'bg-neutral-50 border-neutral-200'
                }`}>
                    <div className={`flex items-center gap-2 text-[10px] uppercase font-bold ${
                        theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                    }`}>
                        <Activity className="w-3 h-3" /> 24h Volatility
                    </div>
                    <span className={`text-xs font-mono ${
                        theme === 'dark' ? 'text-white' : 'text-neutral-900'
                    }`}>{(volatility[0] * 0.12).toFixed(2)}%</span>
                </div>
                <div className={`rounded-lg p-2 border flex items-center justify-between ${
                    theme === 'dark'
                        ? 'bg-white/5 border-white/5'
                        : 'bg-neutral-50 border-neutral-200'
                }`}>
                    <div className={`flex items-center gap-2 text-[10px] uppercase font-bold ${
                        theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                    }`}>
                        <BarChart2 className="w-3 h-3" /> Open Interest
                    </div>
                    <span className={`text-xs font-mono ${
                        theme === 'dark' ? 'text-white' : 'text-neutral-900'
                    }`}>$24.5B</span>
                </div>
                <div className={`rounded-lg p-2 border flex items-center justify-between ${
                    theme === 'dark'
                        ? 'bg-white/5 border-white/5'
                        : 'bg-neutral-50 border-neutral-200'
                }`}>
                    <div className={`flex items-center gap-2 text-[10px] uppercase font-bold ${
                        theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                    }`}>
                        <Zap className="w-3 h-3" /> Funding Rate
                    </div>
                    <span className="text-xs font-mono text-emerald-400">0.0104%</span>
                </div>
                 <div className={`rounded-lg p-2 border flex items-center justify-center text-xs font-bold animate-pulse ${
                     theme === 'dark'
                         ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                         : 'bg-emerald-100 border-emerald-400 text-emerald-700'
                 }`}>
                    AI AGENT ACTIVE
                </div>
            </div>
        </div>
    );
}