import React from 'react';
import { motion } from "framer-motion";

export const PoCVisual = () => (
    <div className="h-32 bg-black/50 rounded-lg border border-white/10 flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-3 gap-1 opacity-20">
            {[...Array(18)].map((_, i) => (
                <div key={i} className="border border-indigo-500/30 rounded-sm" />
            ))}
        </div>
        <motion.div 
            animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative z-10 flex items-center gap-4"
        >
            <div className="w-12 h-12 rounded-full border-2 border-indigo-500 flex items-center justify-center bg-indigo-900/20">
                <div className="w-3 h-3 bg-indigo-400 rounded-full" />
            </div>
            <motion.div 
                animate={{ width: [0, 50, 0], x: [0, 0, 50], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-0.5 bg-indigo-500"
            />
            <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center bg-white/5">
                <div className="w-3 h-3 bg-white/50 rounded-full" />
            </div>
        </motion.div>
        <div className="absolute bottom-2 left-2 text-[10px] text-indigo-400 font-mono">VERIFYING_PROVENANCE...</div>
    </div>
);

export const MemePingVisual = () => (
    <div className="h-32 bg-black/50 rounded-lg border border-white/10 flex items-end justify-between p-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent" />
        {[...Array(7)].map((_, i) => (
            <motion.div
                key={i}
                initial={{ height: "20%" }}
                animate={{ height: ["20%", `${Math.random() * 60 + 20}%`, "20%"] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                className="w-8 bg-emerald-500/20 border-t border-emerald-400 rounded-t-sm relative group"
            >
                <motion.div 
                    animate={{ opacity: [0, 1, 0] }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] text-emerald-400 opacity-0"
                >
                    {Math.floor(Math.random() * 100)}%
                </motion.div>
            </motion.div>
        ))}
        <div className="absolute top-2 right-2 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] text-emerald-400 font-mono">LIVE_SIGNAL</span>
        </div>
    </div>
);

export const INFTVisual = () => (
    <div className="h-32 bg-black/50 rounded-lg border border-white/10 flex items-center justify-center overflow-hidden relative">
        <div className="flex items-center justify-center gap-8">
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border border-dashed border-orange-500 rounded-full flex items-center justify-center"
            >
                <div className="text-xs font-bold text-orange-500">L1</div>
            </motion.div>
            
            <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border border-dashed border-blue-500 rounded-full flex items-center justify-center"
            >
                <div className="text-xs font-bold text-blue-500">L2</div>
            </motion.div>

            <svg className="absolute w-full h-full pointer-events-none">
                <motion.path
                    d="M 140 64 L 200 64"
                    stroke="white"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    animate={{ strokeDashoffset: [0, -8] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="opacity-30"
                />
            </svg>
        </div>
        <div className="absolute bottom-2 right-2 text-[10px] text-orange-400 font-mono">CROSS_CHAIN_BRIDGE</div>
    </div>
);