import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, AlertTriangle, CheckCircle, FileAudio, FileVideo, FileText, Scan, Sliders, Image as ImageIcon, Terminal, Lock, Play, Pause, ChevronLeft, ChevronRight, Search, Filter, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const mockHistory = [
    { id: '99429b8a', name: '99429b8a.mp4', status: 'SAFE', date: '12/17/2025, 12:34:49 PM', frames: 181, category: 'safe', confidence: 36.3, type: 'video', desc: 'Real Video' },
    { id: 'c3df95be', name: 'c3df95be.mov', status: 'SAFE', date: '12/17/2025, 1:08:42 PM', frames: 13749, category: 'safe', confidence: 26.9, type: 'video', desc: 'Real Video' },
    { id: '0fa3d8b8', name: '0fa3d8b8.mp4', status: 'UNSAFE', date: '12/16/2025, 6:09:43 PM', frames: 63045, category: 'nsfw_hardcore', confidence: 99.1, type: 'video', desc: 'NSFW Content' },
    { id: '6680da9b', name: '6680da9b.mp4', status: 'SAFE', date: '12/17/2025, 12:58:39 PM', frames: 1166, category: 'safe', confidence: 12.5, type: 'video', desc: 'Real Video' },
    { id: '7acb9160', name: '7acb9160.mp4', status: 'SAFE', date: '12/17/2025, 12:47:51 PM', frames: 138, category: 'safe', confidence: 45.2, type: 'video', desc: 'Real Video' },
    { id: 'f48f52e9', name: 'f48f52e9.mp4', status: 'UNSAFE', date: '12/16/2025, 5:59:21 PM', frames: 57731, category: 'nsfw_hardcore', confidence: 98.4, type: 'video', desc: 'NSFW Content' },
    { id: '4bb0ffd4', name: '4bb0ffd4.mp4', status: 'SAFE', date: '12/17/2025, 12:38:21 PM', frames: 192, category: 'safe', confidence: 15.7, type: 'video', desc: 'Real Video' },
];

export default function AidGuardianDashboard() {
    const [selectedItem, setSelectedItem] = useState(mockHistory[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [chartData, setChartData] = useState([]);

    // Generate mock chart data based on selected item
    useEffect(() => {
        if (!selectedItem) return;
        const data = [];
        const frames = 50; // Simplify for chart
        const baseScore = selectedItem.status === 'SAFE' ? 95 : 10;
        const volatility = selectedItem.status === 'SAFE' ? 5 : 40;
        
        for (let i = 0; i < frames; i++) {
            data.push({
                frame: i,
                score: Math.min(100, Math.max(0, baseScore + (Math.random() - 0.5) * volatility)),
                threshold: 50
            });
        }
        setChartData(data);
    }, [selectedItem]);

    // Simple video timer
    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setCurrentTime(prev => (prev + 1) % 181);
            }, 100);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    return (
        <div className="w-full h-[800px] bg-[#0A0A0A] text-white flex flex-col rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
            {/* Header */}
            <div className="flex justify-between items-center px-4 md:px-6 py-4 border-b border-white/5 bg-[#0A0A0A]/50 backdrop-blur-md z-20">
                <div className="flex items-center gap-2 text-indigo-400">
                    <Shield className="w-5 h-5" />
                    <span className="font-mono text-sm tracking-wider font-bold truncate">AiD GUARDIAN DASHBOARD</span>
                </div>
                <div className="flex items-center gap-4 text-xs">
                     <div className="hidden md:flex items-center gap-2 text-neutral-500">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
                        LIVE MONITORING
                    </div>
                </div>
            </div>

            <div className="flex-1 flex overflow-hidden flex-col md:flex-row">
                {/* Left Sidebar: History List - Optimized for width */}
                <div className="w-full md:w-[250px] lg:w-[300px] flex-shrink-0 border-r-0 md:border-r border-b md:border-b-0 border-white/5 bg-[#050505] flex flex-col max-h-[300px] md:max-h-none">
                    <div className="p-4 border-b border-white/5 space-y-3">
                        <div className="flex justify-between items-center">
                            <h3 className="text-sm font-bold text-white">Analysis History</h3>
                            <span className="text-[10px] text-neutral-500">{mockHistory.length} RECORDS</span>
                        </div>
                        <div className="relative">
                            <Search className="w-3 h-3 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
                            <input 
                                type="text" 
                                placeholder="Filter..." 
                                className="w-full bg-white/5 border border-white/10 rounded-full py-1.5 pl-8 pr-4 text-xs text-neutral-300 placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500/50"
                            />
                        </div>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                        {mockHistory.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setSelectedItem(item)}
                                className={`w-full text-left p-4 border-b border-white/5 hover:bg-white/5 transition-colors flex items-start gap-3 group ${
                                    selectedItem?.id === item.id ? 'bg-indigo-500/5 border-l-2 border-l-indigo-500' : 'border-l-2 border-l-transparent'
                                }`}
                            >
                                <div className={`mt-0.5 w-2 h-2 rounded-full flex-shrink-0 ${item.status === 'SAFE' ? 'bg-green-500' : 'bg-red-500'}`} />
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className={`text-xs font-bold truncate ${selectedItem?.id === item.id ? 'text-white' : 'text-neutral-300'}`}>
                                            {item.name}
                                        </span>
                                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${
                                            item.status === 'SAFE' 
                                            ? 'border-green-500/30 text-green-500 bg-green-500/10' 
                                            : 'border-red-500/30 text-red-500 bg-red-500/10'
                                        }`}>
                                            {item.status}
                                        </span>
                                    </div>
                                    <div className="text-[10px] text-neutral-500 font-mono mb-1">
                                        Frames: {item.frames} • {item.category}
                                    </div>
                                    <div className="text-[10px] text-neutral-600">
                                        {item.date}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Panel: Detail View */}
                <div className="flex-1 overflow-y-auto bg-[#080808] relative">
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                    
                    {selectedItem ? (
                        <div className="p-6 md:p-8 max-w-5xl mx-auto space-y-6 relative z-10">
                            {/* Top Details Header */}
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h2 className="text-2xl font-bold text-white tracking-tight">{selectedItem.name}</h2>
                                        <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${
                                            selectedItem.status === 'SAFE' ? 'bg-green-500 text-black' : 'bg-red-500 text-white'
                                        }`}>
                                            {selectedItem.status}
                                        </span>
                                        <span className="px-2 py-0.5 rounded text-xs font-bold bg-white/10 text-neutral-400 uppercase">
                                            {selectedItem.category}
                                        </span>
                                    </div>
                                    <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
                                        AI Analysis: The video depicts content categorized as <span className="text-white font-medium">{selectedItem.category}</span>. 
                                        {selectedItem.status === 'SAFE' 
                                            ? ' Showcasing calm behavior in a natural setting. It is safe, family-friendly, and free from harmful content.'
                                            : ' Contains flagged patterns consistent with restricted policy categories. Immediate review recommended.'}
                                    </p>
                                </div>
                            </div>

                            {/* AI Detection Card */}
                            <div className="bg-[#111] rounded-xl border border-white/10 p-5 shadow-lg">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center gap-2">
                                        <Scan className="w-4 h-4 text-indigo-400" />
                                        <span className="text-sm font-bold text-white">AI-Generated Detection</span>
                                    </div>
                                    <span className={`text-xs font-bold px-2 py-1 rounded ${
                                        selectedItem.confidence < 50 ? 'bg-green-500/20 text-green-400' : 'bg-indigo-500/20 text-indigo-400'
                                    }`}>
                                        {selectedItem.confidence < 50 ? 'Likely Real' : 'Likely Generated'}
                                    </span>
                                </div>
                                
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs text-neutral-400">
                                        <span>Model Confidence</span>
                                        <span className="text-indigo-400 font-mono">{selectedItem.confidence}%</span>
                                    </div>
                                    <div className="h-2 bg-white/5 rounded-full overflow-hidden relative">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            animate={{ width: `${selectedItem.confidence}%` }}
                                            className={`h-full rounded-full ${selectedItem.confidence < 50 ? 'bg-green-500' : 'bg-indigo-500'}`}
                                        />
                                    </div>
                                    <div className="flex gap-2 mt-4">
                                        <div className={`flex-1 py-2 text-center rounded border text-xs font-bold transition-colors ${
                                            selectedItem.confidence < 50 
                                            ? 'border-green-500 bg-green-500/10 text-green-400' 
                                            : 'border-white/10 bg-transparent text-neutral-500'
                                        }`}>
                                            Real Video
                                        </div>
                                        <div className={`flex-1 py-2 text-center rounded border text-xs font-bold transition-colors ${
                                            selectedItem.confidence >= 50 
                                            ? 'border-indigo-500 bg-indigo-500/10 text-indigo-400' 
                                            : 'border-white/10 bg-transparent text-neutral-500'
                                        }`}>
                                            AI-Generated
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Video Player Placeholder */}
                            <div className="aspect-video bg-black rounded-xl border border-white/10 relative overflow-hidden group shadow-2xl">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black opacity-50" />
                                    {selectedItem.status === 'SAFE' ? (
                                        <div className="text-center">
                                             <ImageIcon className="w-16 h-16 text-neutral-700 mx-auto mb-4" />
                                             <p className="text-neutral-500 text-sm">Preview Available</p>
                                        </div>
                                    ) : (
                                        <div className="text-center">
                                            <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-red-500/20">
                                                <AlertTriangle className="w-8 h-8 text-red-500" />
                                            </div>
                                            <p className="text-red-400 font-bold text-sm">Content Hidden (Unsafe)</p>
                                        </div>
                                    )}
                                </div>
                                
                                {/* Overlay Stats */}
                                <div className="absolute bottom-16 left-4 right-4 flex justify-between items-end">
                                    <div className="flex gap-2 text-[10px] font-mono">
                                        <div className="bg-black/80 backdrop-blur px-2 py-1 rounded text-red-400 border border-red-500/30">
                                            Unsafe: {selectedItem.status === 'SAFE' ? '0.0%' : '99.5%'}
                                        </div>
                                        <div className="bg-black/80 backdrop-blur px-2 py-1 rounded text-green-400 border border-green-500/30">
                                            Safe: {selectedItem.status === 'SAFE' ? '100.0%' : '0.5%'}
                                        </div>
                                        <div className="bg-black/80 backdrop-blur px-2 py-1 rounded text-indigo-400 border border-indigo-500/30">
                                            Conf: 80%
                                        </div>
                                    </div>
                                </div>

                                {/* Controls */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                                    <div className="flex items-center gap-4">
                                        <button 
                                            onClick={() => setIsPlaying(!isPlaying)}
                                            className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-neutral-200 transition-colors"
                                        >
                                            {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                                        </button>
                                        
                                        <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                                            <div className="h-full bg-indigo-500 w-[30%]" />
                                        </div>
                                        
                                        <div className="text-xs font-mono text-neutral-400">
                                            00:{currentTime.toString().padStart(2, '0')} / 00:{selectedItem.frames}
                                        </div>
                                        
                                        <div className="px-2 py-0.5 rounded bg-red-500 text-[10px] font-bold text-white animate-pulse">
                                            ATTENTION OFF
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Timeline Graph */}
                            <div className="bg-[#111] rounded-xl border border-white/10 p-5">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${selectedItem.status === 'SAFE' ? 'bg-green-500' : 'bg-red-500'}`} />
                                        <span className="text-sm font-bold text-white tracking-wide">SAFETY ANALYSIS</span>
                                        <span className="text-xs text-neutral-500 ml-2 border border-white/10 px-1.5 py-0.5 rounded">STABLE</span>
                                    </div>
                                    <div className="flex gap-2">
                                        {['Unsafe', 'Safe', 'Violence', 'Z-Score'].map(tab => (
                                            <button key={tab} className="px-2 py-1 text-[10px] uppercase font-bold text-neutral-400 border border-white/10 rounded hover:text-white hover:border-white/30 transition-colors">
                                                {tab}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="h-[200px] w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={chartData}>
                                            <defs>
                                                <linearGradient id="gradientScore" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor={selectedItem.status === 'SAFE' ? '#10b981' : '#ef4444'} stopOpacity={0.3}/>
                                                    <stop offset="95%" stopColor={selectedItem.status === 'SAFE' ? '#10b981' : '#ef4444'} stopOpacity={0}/>
                                                </linearGradient>
                                            </defs>
                                            <XAxis 
                                                dataKey="frame" 
                                                stroke="#404040" 
                                                fontSize={10} 
                                                tickLine={false} 
                                                axisLine={false}
                                            />
                                            <YAxis 
                                                stroke="#404040" 
                                                fontSize={10} 
                                                tickLine={false} 
                                                axisLine={false}
                                                domain={[0, 100]}
                                            />
                                            <Tooltip 
                                                contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }}
                                                itemStyle={{ fontSize: '12px' }}
                                                labelStyle={{ color: '#666', marginBottom: '4px' }}
                                            />
                                            <ReferenceLine y={50} stroke="#333" strokeDasharray="3 3" />
                                            <Line 
                                                type="monotone" 
                                                dataKey="score" 
                                                stroke={selectedItem.status === 'SAFE' ? '#10b981' : '#ef4444'} 
                                                strokeWidth={2}
                                                dot={false}
                                                activeDot={{ r: 4, fill: '#fff' }}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                                
                                <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5 text-xs font-mono">
                                    <div className="flex gap-6">
                                        <div className="text-red-400">UNSAFE: {selectedItem.status === 'SAFE' ? '0.0%' : '99.5%'}</div>
                                        <div className="text-green-400">SAFE: {selectedItem.status === 'SAFE' ? '100.0%' : '0.5%'}</div>
                                        <div className="text-indigo-400">VIOLENCE: 0.0%</div>
                                    </div>
                                    <div className="text-neutral-500">
                                        FRM: 1/{selectedItem.frames}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex h-full items-center justify-center">
                            <div className="text-center space-y-4">
                                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto border border-white/10 animate-pulse">
                                    <Scan className="w-6 h-6 text-neutral-500" />
                                </div>
                                <p className="text-neutral-500">Select a record to view details</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}