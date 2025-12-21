import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, AlertTriangle, CheckCircle, FileAudio, FileVideo, FileText, Scan, Sliders, Image as ImageIcon, Terminal, Lock, Play, Pause, ChevronLeft, ChevronRight, Search, Filter, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { useTheme } from '@/components/ThemeContext';

const mockHistory = [
    { 
        id: '99429b8a', 
        name: '99429b8a.mp4', 
        status: 'SAFE', 
        date: '12/17/2025, 12:34:49 PM', 
        frames: 181, 
        category: 'safe', 
        confidence: 36.3, 
        type: 'video', 
        desc: 'Real Video',
        explanation: 'No GARM violations detected. Visual scene classification indicates outdoor nature environment.',
        garm: { 'Hate Speech': 2, 'Violence': 1, 'Adult Content': 0, 'Spam': 5 }
    },
    { 
        id: 'c3df95be', 
        name: 'c3df95be.mov', 
        status: 'SAFE', 
        date: '12/17/2025, 1:08:42 PM', 
        frames: 13749, 
        category: 'safe', 
        confidence: 26.9, 
        type: 'video', 
        desc: 'Real Video',
        explanation: 'Content is compliant with enterprise safety policies. Minor background audio noise detected but classified as non-speech.',
        garm: { 'Hate Speech': 0, 'Violence': 0, 'Adult Content': 0, 'Spam': 0 }
    },
    { 
        id: '0fa3d8b8', 
        name: '0fa3d8b8.mp4', 
        status: 'UNSAFE', 
        date: '12/16/2025, 6:09:43 PM', 
        frames: 63045, 
        category: 'Adult Content', 
        confidence: 99.1, 
        type: 'video', 
        desc: 'NSFW Content',
        explanation: 'Frame 1450-1800 triggered high-probability filters for explicit content. Audio analysis confirms prohibited keywords.',
        garm: { 'Hate Speech': 12, 'Violence': 5, 'Adult Content': 98, 'Spam': 45 }
    },
    { 
        id: '6680da9b', 
        name: 'LIVE_STREAM_01', 
        status: 'SAFE', 
        date: '12/17/2025, 12:58:39 PM', 
        frames: 1166, 
        category: 'safe', 
        confidence: 12.5, 
        type: 'live', 
        desc: 'RTMP Ingest',
        explanation: 'Live monitoring active. No violations in current buffer (last 30s). Latency < 200ms.',
        garm: { 'Hate Speech': 1, 'Violence': 2, 'Adult Content': 0, 'Spam': 8 }
    },
    { 
        id: 'f48f52e9', 
        name: 'f48f52e9.mp4', 
        status: 'UNSAFE', 
        date: '12/16/2025, 5:59:21 PM', 
        frames: 57731, 
        category: 'Hate Speech', 
        confidence: 98.4, 
        type: 'video', 
        desc: 'Hate Speech Detected',
        explanation: 'Audio transcript contains multiple instances of targeted slurs. Visuals contain symbols associated with hate groups.',
        garm: { 'Hate Speech': 99, 'Violence': 65, 'Adult Content': 12, 'Spam': 23 }
    },
];

export default function AidGuardianDashboard() {
    const { theme } = useTheme();
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
        <div className={`w-full h-[800px] flex flex-col rounded-3xl overflow-hidden border shadow-2xl ${
            theme === 'dark'
                ? 'bg-[#0A0A0A] text-white border-white/5'
                : 'bg-white text-neutral-900 border-neutral-200'
        }`}>
            {/* Header */}
            <div className={`flex justify-between items-center px-6 md:px-8 py-5 border-b backdrop-blur-md z-20 ${
                theme === 'dark'
                    ? 'border-white/5 bg-[#0A0A0A]/50'
                    : 'border-neutral-200 bg-white/50'
            }`}>
                <div className={`flex items-center gap-3 ${
                    theme === 'dark' ? 'text-indigo-400' : 'text-blue-600'
                }`}>
                    <Shield className="w-6 h-6" />
                    <span className="font-mono text-base tracking-widest font-bold truncate">AiD GUARDIAN DASHBOARD</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                     <div className={`hidden md:flex items-center gap-2 ${
                         theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'
                     }`}>
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"/>
                        LIVE MONITORING
                    </div>
                </div>
            </div>

            <div className="flex-1 flex overflow-hidden flex-col md:flex-row">
                {/* Left Sidebar: History List - Optimized for width */}
                <div className={`w-full md:w-[250px] lg:w-[300px] flex-shrink-0 border-r-0 md:border-r border-b md:border-b-0 flex flex-col max-h-[300px] md:max-h-none ${
                    theme === 'dark'
                        ? 'border-white/5 bg-[#050505]'
                        : 'border-neutral-200 bg-neutral-50'
                }`}>
                    <div className={`p-5 border-b space-y-4 ${
                        theme === 'dark' ? 'border-white/5' : 'border-neutral-200'
                    }`}>
                        <div className="flex justify-between items-center">
                            <h3 className={`text-base font-bold ${
                                theme === 'dark' ? 'text-white' : 'text-neutral-900'
                            }`}>Analysis History</h3>
                            <span className={`text-xs font-mono ${
                                theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'
                            }`}>{mockHistory.length} RECORDS</span>
                        </div>
                        <div className="relative">
                            <Search className={`w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 ${
                                theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'
                            }`} />
                            <input 
                                type="text" 
                                placeholder="Filter..." 
                                className={`w-full border rounded-full py-2 pl-9 pr-4 text-sm focus:outline-none ${
                                    theme === 'dark'
                                        ? 'bg-white/5 border-white/10 text-neutral-300 placeholder:text-neutral-600 focus:border-indigo-500/50'
                                        : 'bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:border-blue-500'
                                }`}
                            />
                        </div>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                        {mockHistory.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setSelectedItem(item)}
                                className={`w-full text-left p-4 border-b transition-colors flex items-start gap-3 group border-l-2 ${
                                    theme === 'dark'
                                        ? (selectedItem?.id === item.id 
                                            ? 'bg-indigo-500/5 border-l-indigo-500 border-b-white/5 hover:bg-white/5' 
                                            : 'border-l-transparent border-b-white/5 hover:bg-white/5')
                                        : (selectedItem?.id === item.id
                                            ? 'bg-blue-50 border-l-blue-600 border-b-neutral-200 hover:bg-blue-100'
                                            : 'border-l-transparent border-b-neutral-200 hover:bg-neutral-50')
                                }`}
                            >
                                <div className={`mt-0.5 w-2 h-2 rounded-full flex-shrink-0 ${item.status === 'SAFE' ? 'bg-green-500' : 'bg-red-500'}`} />
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className={`text-xs font-bold truncate ${
                                            theme === 'dark'
                                                ? (selectedItem?.id === item.id ? 'text-white' : 'text-neutral-300')
                                                : (selectedItem?.id === item.id ? 'text-neutral-900' : 'text-neutral-700')
                                        }`}>
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
                                    <div className={`text-[10px] font-mono mb-1 ${
                                        theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'
                                    }`}>
                                        Frames: {item.frames} • {item.category}
                                    </div>
                                    <div className={`text-[10px] ${
                                        theme === 'dark' ? 'text-neutral-600' : 'text-neutral-500'
                                    }`}>
                                        {item.date}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Panel: Detail View */}
                <div className={`flex-1 overflow-y-auto relative ${
                    theme === 'dark' ? 'bg-[#080808]' : 'bg-white'
                }`}>
                    {/* Background Grid */}
                    <div className={`absolute inset-0 bg-[size:40px_40px] pointer-events-none ${
                        theme === 'dark'
                            ? 'bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]'
                            : 'bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)]'
                    }`} />
                    
                    {selectedItem ? (
                        <div className="p-6 md:p-8 max-w-5xl mx-auto space-y-6 relative z-10">
                            {/* Top Details Header */}
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h2 className={`text-2xl font-bold tracking-tight ${
                                            theme === 'dark' ? 'text-white' : 'text-neutral-900'
                                        }`}>{selectedItem.name}</h2>
                                        <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${
                                            selectedItem.status === 'SAFE' ? 'bg-green-500 text-black' : 'bg-red-500 text-white'
                                        }`}>
                                            {selectedItem.status}
                                        </span>
                                        <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${
                                            theme === 'dark'
                                                ? 'bg-white/10 text-neutral-400'
                                                : 'bg-neutral-100 text-neutral-700'
                                        }`}>
                                            {selectedItem.category}
                                        </span>
                                    </div>
                                    <p className={`text-sm max-w-2xl leading-relaxed ${
                                        theme === 'dark' ? 'text-neutral-400' : 'text-neutral-700'
                                    }`}>
                                        AI Analysis: The content was categorized as <span className={`font-medium ${
                                            theme === 'dark' ? 'text-white' : 'text-neutral-900'
                                        }`}>{selectedItem.category}</span>. 
                                        {selectedItem.explanation}
                                    </p>
                                </div>
                            </div>
                            
                            {/* GARM Category Breakdown */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {selectedItem.garm && Object.entries(selectedItem.garm).map(([key, value]) => (
                                    <div key={key} className={`p-3 rounded-lg border ${
                                        theme === 'dark'
                                            ? 'bg-[#111] border-white/10'
                                            : 'bg-neutral-50 border-neutral-200'
                                    }`}>
                                        <div className={`text-[10px] uppercase font-bold mb-1 ${
                                            theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'
                                        }`}>{key}</div>
                                        <div className="flex items-end justify-between">
                                            <span className={`text-xl font-mono font-bold ${value > 50 ? 'text-red-400' : 'text-green-400'}`}>
                                                {value}%
                                            </span>
                                            <div className={`w-2 h-2 rounded-full ${value > 50 ? 'bg-red-500' : 'bg-green-500'} mb-2`} />
                                        </div>
                                        <div className={`h-1 w-full rounded-full mt-2 overflow-hidden ${
                                            theme === 'dark' ? 'bg-white/5' : 'bg-neutral-200'
                                        }`}>
                                            <div className={`h-full ${value > 50 ? 'bg-red-500' : 'bg-green-500'}`} style={{ width: `${value}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* AI Detection Card */}
                            <div className={`rounded-xl border p-5 shadow-lg ${
                                theme === 'dark'
                                    ? 'bg-[#111] border-white/10'
                                    : 'bg-white border-neutral-200'
                            }`}>
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center gap-2">
                                        <Scan className={`w-4 h-4 ${
                                            theme === 'dark' ? 'text-indigo-400' : 'text-blue-600'
                                        }`} />
                                        <span className={`text-sm font-bold ${
                                            theme === 'dark' ? 'text-white' : 'text-neutral-900'
                                        }`}>AI-Generated Detection</span>
                                    </div>
                                    <span className={`text-xs font-bold px-2 py-1 rounded ${
                                        selectedItem.confidence < 50 
                                            ? 'bg-green-500/20 text-green-400' 
                                            : (theme === 'dark' ? 'bg-indigo-500/20 text-indigo-400' : 'bg-blue-100 text-blue-700')
                                    }`}>
                                        {selectedItem.confidence < 50 ? 'Likely Real' : 'Likely Generated'}
                                    </span>
                                </div>
                                
                                <div className="space-y-2">
                                    <div className={`flex justify-between text-xs ${
                                        theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                                    }`}>
                                        <span>Model Confidence</span>
                                        <span className={`font-mono ${
                                            theme === 'dark' ? 'text-indigo-400' : 'text-blue-600'
                                        }`}>{selectedItem.confidence}%</span>
                                    </div>
                                    <div className={`h-2 rounded-full overflow-hidden relative ${
                                        theme === 'dark' ? 'bg-white/5' : 'bg-neutral-200'
                                    }`}>
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            animate={{ width: `${selectedItem.confidence}%` }}
                                            className={`h-full rounded-full ${
                                                selectedItem.confidence < 50 
                                                    ? 'bg-green-500' 
                                                    : (theme === 'dark' ? 'bg-indigo-500' : 'bg-blue-600')
                                            }`}
                                        />
                                    </div>
                                    <div className="flex gap-2 mt-4">
                                        <div className={`flex-1 py-2 text-center rounded border text-xs font-bold transition-colors ${
                                            selectedItem.confidence < 50 
                                            ? 'border-green-500 bg-green-500/10 text-green-400' 
                                            : (theme === 'dark' ? 'border-white/10 bg-transparent text-neutral-500' : 'border-neutral-300 bg-white text-neutral-600')
                                        }`}>
                                            Real Video
                                        </div>
                                        <div className={`flex-1 py-2 text-center rounded border text-xs font-bold transition-colors ${
                                            selectedItem.confidence >= 50 
                                            ? (theme === 'dark' ? 'border-indigo-500 bg-indigo-500/10 text-indigo-400' : 'border-blue-500 bg-blue-100 text-blue-700')
                                            : (theme === 'dark' ? 'border-white/10 bg-transparent text-neutral-500' : 'border-neutral-300 bg-white text-neutral-600')
                                        }`}>
                                            AI-Generated
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Video Player Placeholder */}
                            <div className={`aspect-video rounded-xl border relative overflow-hidden group shadow-2xl ${
                                theme === 'dark'
                                    ? 'bg-black border-white/10'
                                    : 'bg-neutral-100 border-neutral-300'
                            }`}>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {theme === 'dark' && (
                                        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black opacity-50" />
                                    )}
                                    {selectedItem.status === 'SAFE' ? (
                                        <div className="text-center">
                                             <ImageIcon className={`w-16 h-16 mx-auto mb-4 ${
                                                 theme === 'dark' ? 'text-neutral-700' : 'text-neutral-400'
                                             }`} />
                                             <p className={`text-sm ${
                                                 theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'
                                             }`}>Preview Available</p>
                                        </div>
                                    ) : (
                                        <div className="text-center">
                                            <div className={`w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-red-500/20`}>
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
                            <div className={`rounded-xl border p-5 ${
                                theme === 'dark'
                                    ? 'bg-[#111] border-white/10'
                                    : 'bg-white border-neutral-200 shadow-md'
                            }`}>
                                <div className="flex justify-between items-center mb-6">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${selectedItem.status === 'SAFE' ? 'bg-green-500' : 'bg-red-500'}`} />
                                        <span className={`text-sm font-bold tracking-wide ${
                                            theme === 'dark' ? 'text-white' : 'text-neutral-900'
                                        }`}>SAFETY ANALYSIS</span>
                                        <span className={`text-xs ml-2 border px-1.5 py-0.5 rounded ${
                                            theme === 'dark'
                                                ? 'text-neutral-500 border-white/10'
                                                : 'text-neutral-600 border-neutral-300'
                                        }`}>STABLE</span>
                                    </div>
                                    <div className="flex gap-2">
                                        {['Unsafe', 'Safe', 'Violence', 'Z-Score'].map(tab => (
                                            <button key={tab} className={`px-2 py-1 text-[10px] uppercase font-bold border rounded transition-colors ${
                                                theme === 'dark'
                                                    ? 'text-neutral-400 border-white/10 hover:text-white hover:border-white/30'
                                                    : 'text-neutral-600 border-neutral-300 hover:text-neutral-900 hover:border-neutral-400'
                                            }`}>
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