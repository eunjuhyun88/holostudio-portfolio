import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Network, Cpu, Database, Activity, Server, Zap, Globe, ShieldCheck } from 'lucide-react';
import { cn } from "@/lib/utils";
import MouseGlowText from '@/components/MouseGlowText';

const Node = ({ x, y, size = 1, delay = 0, active = false, type = 'compute' }) => (
    <motion.div
        className={cn(
            "absolute rounded-full flex items-center justify-center",
            active ? "z-10" : "z-0 opacity-40"
        )}
        style={{ left: `${x}%`, top: `${y}%` }}
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity, delay: delay }}
    >
        <div className={cn(
            "rounded-full relative",
            type === 'compute' ? "bg-blue-500" : type === 'storage' ? "bg-purple-500" : "bg-emerald-500"
        )} style={{ width: `${8 * size}px`, height: `${8 * size}px` }}>
            <div className={cn(
                "absolute inset-0 rounded-full animate-ping opacity-50",
                type === 'compute' ? "bg-blue-400" : type === 'storage' ? "bg-purple-400" : "bg-emerald-400"
            )} />
        </div>
    </motion.div>
);

const Connection = ({ x1, y1, x2, y2, active = false }) => {
    // Calculate length and angle
    const dx = x2 - x1;
    const dy = y2 - y1;
    const length = Math.sqrt(dx * dx + dy * dy);
    // angle in radians
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;

    return (
        <div 
            className="absolute origin-left h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{
                left: `${x1}%`,
                top: `${y1}%`,
                width: `${length}%`,
                transform: `rotate(${angle}deg)`
            }}
        >
            {active && (
                <motion.div 
                    className="h-full w-1/3 bg-white"
                    initial={{ x: "-100%" }}
                    animate={{ x: "400%" }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
            )}
        </div>
    );
};

export default function DePinMesh({ features, title, desc }) {
    const [hoveredFeature, setHoveredFeature] = useState(null);

    return (
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left: Interactive Content */}
            <div className="space-y-8">
                <div>
                    <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
                    <p className="text-lg text-neutral-400 leading-relaxed">
                        {desc}
                    </p>
                </div>

                <div className="space-y-4">
                    {features.map((feat, i) => (
                        <motion.div 
                            key={i}
                            onHoverStart={() => setHoveredFeature(i)}
                            onHoverEnd={() => setHoveredFeature(null)}
                            className="group relative p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all cursor-default"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all">
                                    <feat.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1 group-hover:text-blue-300 transition-colors flex items-center gap-2">
                                        {feat.title}
                                        {hoveredFeature === i && (
                                            <motion.span 
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-mono"
                                            >
                                                ACTIVE
                                            </motion.span>
                                        )}
                                    </h4>
                                    <p className="text-sm text-neutral-400">{feat.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Right: Mesh Visualization */}
            <div className="relative aspect-square md:aspect-[4/3] bg-[#050505] rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-black/50 group">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
                
                {/* World Map Hint (Abstract) */}
                <div className="absolute inset-0 opacity-30 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center mix-blend-overlay grayscale" />

                {/* Nodes & Connections Layer */}
                <div className="absolute inset-0">
                     {/* Random connections simulation */}
                     <Connection x1={20} y1={30} x2={50} y2={50} active />
                     <Connection x1={50} y1={50} x2={80} y2={40} active />
                     <Connection x1={50} y1={50} x2={40} y2={80} active />
                     <Connection x1={20} y1={30} x2={40} y2={80} />
                     <Connection x1={80} y1={40} x2={70} y2={70} active />

                     {/* Central Hub */}
                     <Node x={50} y={50} size={2} active type="compute" />
                     
                     {/* Satellite Nodes */}
                     <Node x={20} y={30} delay={0.5} type="storage" />
                     <Node x={80} y={40} delay={1} type="compute" />
                     <Node x={40} y={80} delay={1.5} type="network" />
                     <Node x={70} y={70} delay={0.2} type="storage" />
                     <Node x={30} y={60} delay={0.8} type="compute" />
                </div>

                {/* Overlay Statistics */}
                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-2">
                    <div className="bg-black/60 backdrop-blur-md p-3 rounded-lg border border-white/10 text-center">
                        <div className="text-[10px] text-neutral-500 uppercase">Active Nodes</div>
                        <div className="text-lg font-mono font-bold text-blue-400">4,281</div>
                    </div>
                    <div className="bg-black/60 backdrop-blur-md p-3 rounded-lg border border-white/10 text-center">
                        <div className="text-[10px] text-neutral-500 uppercase">TFLOPS</div>
                        <div className="text-lg font-mono font-bold text-emerald-400">892</div>
                    </div>
                    <div className="bg-black/60 backdrop-blur-md p-3 rounded-lg border border-white/10 text-center">
                        <div className="text-[10px] text-neutral-500 uppercase">Uptime</div>
                        <div className="text-lg font-mono font-bold text-white">99.9%</div>
                    </div>
                </div>

                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent h-20 animate-scan pointer-events-none" />
            </div>
            
            <style jsx>{`
                @keyframes scan {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(500%); }
                }
                .animate-scan {
                    animation: scan 4s linear infinite;
                }
            `}</style>
        </div>
    );
}