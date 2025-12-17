import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Shield, CheckCircle, AlertTriangle, X, Play, Pause, 
    Maximize2, MoreVertical, Filter, Search, ChevronRight, 
    Activity, FileVideo, Calendar, Clock, Scan, Video, Terminal
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

// Mock Data based on OCR
const MOCK_HISTORY = [
    { id: 'c3df95be', name: 'c3df95be.mov', status: 'SAFE', category: 'safe', frames: 13749, date: '12/17/2025', time: '1:08:42 PM' },
    { id: '6680da9b', name: '6680da9b.mp4', status: 'SAFE', category: 'safe', frames: 1166, date: '12/17/2025', time: '12:58:39 PM' },
    { id: '99429b8a', name: '99429b8a.mp4', status: 'SAFE', category: 'safe', frames: 181, date: '12/17/2025', time: '12:34:49 PM', 
      analysis: "The video depicts two white swans interacting naturally on a frozen winter lake, showcasing calm, peaceful wildlife behavior in a scenic natural setting. It is safe, family-friendly, and free from any harmful or inappropriate content.",
      confidence: 36.3, isReal: true
    },
    { id: '0fa3d8b8', name: '0fa3d8b8.mp4', status: 'UNSAFE', category: 'nsfw_hardcore', frames: 63045, date: '12/16/2025', time: '6:09:43 PM' },
    { id: 'f48f52e9', name: 'f48f52e9.mp4', status: 'UNSAFE', category: 'nsfw_hardcore', frames: 57731, date: '12/16/2025', time: '5:59:21 PM' },
    { id: 'b233d27e', name: 'b233d27e.mp4', status: 'SAFE', category: 'safe', frames: 107, date: '12/16/2025', time: '5:42:23 PM' },
];

// Generate mock graph data
const generateGraphData = (frames) => {
    return Array.from({ length: 40 }, (_, i) => ({
        frame: Math.floor((i / 40) * frames),
        safe: 80 + Math.random() * 20,
        unsafe: Math.random() * 5,
        violence: Math.random() * 2,
    }));
};

export default function AidGuardianDemo() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [filter, setFilter] = useState('ALL');

    const filteredData = useMemo(() => {
        if (filter === 'ALL') return MOCK_HISTORY;
        return MOCK_HISTORY.filter(item => item.status === filter);
    }, [filter]);

    const graphData = useMemo(() => {
        if (!selectedItem) return [];
        return generateGraphData(selectedItem.frames);
    }, [selectedItem]);

    const stats = {
        total: 38,
        safe: 35,
        unsafe: 3,
        ratio: 92.1
    };

    return (
        <div className="w-full h-full bg-[#0A0A0A] text-white flex flex-col rounded-3xl overflow-hidden border border-white/5 relative shadow-2xl">

            {/* Main Content Area */}
            <div className="flex-1 overflow-hidden relative">
                <AnimatePresence mode="wait">
                    {!selectedItem ? (
                        /* LIST VIEW */
                        <motion.div 
                            key="list"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="h-full flex flex-col"
                        >
                            {/* Header Stats */}
                            <div className="p-6 border-b border-white/5 flex flex-wrap gap-6 items-center bg-[#0F0F0F]">
                                <div className="flex items-center gap-2 text-indigo-400 font-bold tracking-wider text-sm">
                                    <Shield className="w-5 h-5" />
                                    Analysis History
                                </div>
                                <div className="h-8 w-px bg-white/10 hidden md:block" />
                                <div className="flex gap-8 text-sm">
                                    <div>
                                        <div className="text-[10px] text-neutral-500 uppercase font-bold">Total Records</div>
                                        <div className="font-mono font-bold text-white">{stats.total}</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-neutral-500 uppercase font-bold">Safe Ratio</div>
                                        <div className="font-mono font-bold text-green-500">{stats.ratio}%</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-neutral-500 uppercase font-bold">Unsafe</div>
                                        <div className="font-mono font-bold text-red-500">{stats.unsafe}</div>
                                    </div>
                                </div>
                                <div className="ml-auto flex gap-2">
                                    <Button 
                                        variant="outline" 
                                        size="sm" 
                                        onClick={() => setFilter('ALL')}
                                        className={`h-7 text-xs border-white/10 ${filter === 'ALL' ? 'bg-white text-black' : 'bg-transparent text-neutral-400'}`}
                                    >
                                        All
                                    </Button>
                                    <Button 
                                        variant="outline" 
                                        size="sm" 
                                        onClick={() => setFilter('UNSAFE')}
                                        className={`h-7 text-xs border-white/10 ${filter === 'UNSAFE' ? 'bg-red-500/20 text-red-400 border-red-500/30' : 'bg-transparent text-neutral-400'}`}
                                    >
                                        Unsafe Only
                                    </Button>
                                </div>
                            </div>

                            {/* List */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                                {filteredData.map((item, i) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        onClick={() => setSelectedItem(item)}
                                        className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-indigo-500/30 cursor-pointer transition-all"
                                    >
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                            item.status === 'SAFE' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                                        }`}>
                                            {item.status === 'SAFE' ? <CheckCircle className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${
                                                    item.status === 'SAFE' 
                                                    ? 'bg-green-500/10 border-green-500/20 text-green-400' 
                                                    : 'bg-red-500/10 border-red-500/20 text-red-400'
                                                }`}>
                                                    {item.status}
                                                </span>
                                                <h4 className="font-bold text-sm truncate text-white">{item.name}</h4>
                                            </div>
                                            <div className="flex gap-4 text-xs text-neutral-500">
                                                <span className="flex items-center gap-1"><Scan className="w-3 h-3" /> GARM: {item.category}</span>
                                                <span className="flex items-center gap-1"><FileVideo className="w-3 h-3" /> {item.frames} frames</span>
                                            </div>
                                        </div>

                                        <div className="text-right text-xs text-neutral-500 hidden md:block">
                                            <div>{item.date}</div>
                                            <div>{item.time}</div>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        /* DETAIL VIEW */
                        <motion.div 
                            key="detail"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            className="h-full flex flex-col bg-[#080808]"
                        >
                            {/* Header */}
                            <div className="p-4 border-b border-white/5 flex justify-between items-center bg-[#111]">
                                <div className="flex items-center gap-3">
                                    <Button variant="ghost" size="icon" onClick={() => setSelectedItem(null)} className="h-8 w-8 rounded-full hover:bg-white/10">
                                        <X className="w-4 h-4" />
                                    </Button>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-sm">{selectedItem.name}</span>
                                            <Badge variant="outline" className={`text-[10px] px-1.5 py-0 h-5 border-0 ${
                                                selectedItem.status === 'SAFE' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                                            }`}>
                                                {selectedItem.status}
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono">
                                    <span>ID: {selectedItem.id}</span>
                                </div>
                            </div>

                            {/* Content Scrollable */}
                            <div className="flex-1 overflow-y-auto">
                                <div className="p-6 space-y-6">

                                    {/* Analysis Box */}
                                    {selectedItem.analysis && (
                                        <div className="bg-indigo-900/10 border border-indigo-500/20 p-4 rounded-xl space-y-3">
                                            <div className="flex gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                                                <Terminal className="w-4 h-4" /> AI Analysis
                                            </div>
                                            <p className="text-sm text-neutral-300 leading-relaxed">
                                                {selectedItem.analysis}
                                            </p>
                                        </div>
                                    )}

                                    {/* Detection Meter */}
                                    {selectedItem.confidence && (
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-neutral-500">
                                                <span>AI-Generated Detection</span>
                                                <span className="text-green-500">Likely Real</span>
                                            </div>
                                            <div className="h-2 bg-neutral-800 rounded-full overflow-hidden flex">
                                                <div className="h-full bg-green-500 w-[64%]" />
                                                <div className="h-full bg-orange-500 w-[36%]" />
                                            </div>
                                            <div className="flex justify-between text-xs text-neutral-400 font-mono">
                                                <span>Real Video</span>
                                                <span>Model Confidence: {selectedItem.confidence}%</span>
                                            </div>
                                        </div>
                                    )}

                                    {/* Video Player Mock */}
                                    <div className="aspect-video bg-black rounded-xl border border-neutral-800 relative overflow-hidden group">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            {selectedItem.status === 'SAFE' 
                                                ? <div className="text-neutral-700 font-mono text-sm">VIDEO PREVIEW PLACEHOLDER</div>
                                                : <div className="text-red-900/50 font-mono text-sm">NSFW CONTENT BLURRED</div>
                                            }
                                        </div>

                                        {/* Play Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button 
                                                onClick={() => setIsPlaying(!isPlaying)}
                                                className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:scale-105 transition-transform"
                                            >
                                                {isPlaying ? <Pause className="w-6 h-6 fill-white" /> : <Play className="w-6 h-6 fill-white ml-1" />}
                                            </button>
                                        </div>

                                        {/* Timeline */}
                                        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end px-4 pb-3">
                                            <div className="flex items-end gap-[1px] h-4 w-full opacity-80">
                                                {Array.from({length: 40}).map((_, i) => (
                                                    <div 
                                                        key={i} 
                                                        className={`flex-1 rounded-sm ${
                                                            selectedItem.status === 'UNSAFE' && i > 30 ? 'bg-red-500' : 'bg-green-500'
                                                        }`}
                                                        style={{ height: `${30 + Math.random() * 70}%` }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Safety Graph */}
                                    <div className="bg-[#111] p-4 rounded-xl border border-white/5">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-400">
                                                <Activity className="w-4 h-4" /> Safety Analysis
                                                <Badge variant="outline" className="ml-2 bg-green-500/10 text-green-500 border-green-500/20">STABLE</Badge>
                                            </div>
                                            <div className="text-xs font-mono text-neutral-500">
                                                FRM: 1/{selectedItem.frames}
                                            </div>
                                        </div>
                                        <div className="h-[150px] w-full">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <AreaChart data={graphData}>
                                                    <defs>
                                                        <linearGradient id="colorSafe" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                                                            <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                                                        </linearGradient>
                                                    </defs>
                                                    <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                                                    <XAxis hide />
                                                    <YAxis hide domain={[0, 100]} />
                                                    <Tooltip 
                                                        contentStyle={{ backgroundColor: '#000', border: '1px solid #333', borderRadius: '8px' }}
                                                        itemStyle={{ fontSize: '12px' }}
                                                    />
                                                    <ReferenceLine y={50} stroke="#333" strokeDasharray="3 3" />
                                                    <Area 
                                                        type="monotone" 
                                                        dataKey="safe" 
                                                        stroke="#10b981" 
                                                        strokeWidth={2}
                                                        fillOpacity={1} 
                                                        fill="url(#colorSafe)" 
                                                    />
                                                    <Area 
                                                        type="monotone" 
                                                        dataKey="unsafe" 
                                                        stroke="#ef4444" 
                                                        strokeWidth={2}
                                                        fill="none" 
                                                    />
                                                </AreaChart>
                                            </ResponsiveContainer>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4 mt-4 text-center">
                                            <div>
                                                <div className="text-[10px] text-neutral-500 uppercase font-bold">Safe</div>
                                                <div className="text-lg font-mono text-green-500">100.0%</div>
                                            </div>
                                            <div>
                                                <div className="text-[10px] text-neutral-500 uppercase font-bold">Unsafe</div>
                                                <div className="text-lg font-mono text-red-500">0.0%</div>
                                            </div>
                                            <div>
                                                <div className="text-[10px] text-neutral-500 uppercase font-bold">Violence</div>
                                                <div className="text-lg font-mono text-neutral-300">0.0%</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}