import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Starfield from './Starfield';

export default function LoadingScreen({ onComplete }) {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    
    // Hacker text effect lines
    const codeLines = [
        "INITIALIZING CORE SYSTEMS...",
        "LOADING ASSETS...",
        "DECRYPTING SECURE CHANNELS...",
        "ESTABLISHING NEURAL LINK...",
        "SYNCING BLOCKCHAIN NODES...",
        "VERIFYING INTEGRITY...",
        "SYSTEM READY."
    ];

    useEffect(() => {
        // Counter animation
        const duration = 2000; // 2 seconds
        const interval = 20;
        const steps = duration / interval;
        const increment = 100 / steps;
        
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= 100) {
                current = 100;
                clearInterval(timer);
                setTimeout(onComplete, 500); // Wait a bit before unmounting
            }
            setCount(Math.floor(current));
        }, interval);

        return () => clearInterval(timer);
    }, [onComplete]);

    // Random code text effect
    useEffect(() => {
        let lineIndex = 0;
        const textTimer = setInterval(() => {
            if (lineIndex < codeLines.length) {
                setText(codeLines[lineIndex]);
                lineIndex++;
            }
        }, 300);
        return () => clearInterval(textTimer);
    }, []);

    return (
        <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-black text-white flex flex-col items-center justify-center overflow-hidden font-mono"
        >
            {/* Background Stars & Galaxy */}
            <div className="absolute inset-0 z-0">
                {/* Subtle Galaxy Gradient Blobs */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '7s' }} />
                
                {/* Stars */}
                <div className="absolute inset-0 opacity-60">
                    <Starfield density={800} speed={0.2} />
                </div>
            </div>

            {/* Central Counter */}
            <div className="relative z-10 flex flex-col items-center">
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-8xl md:text-9xl font-bold tracking-tighter mb-8 tabular-nums"
                >
                    {count}%
                </motion.div>

                {/* Glitchy Text/Code */}
                <div className="h-8 text-sm md:text-base text-indigo-400 tracking-widest uppercase">
                    {text}
                </div>
            </div>

            {/* Decorative Corners */}
            <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-white/30" />
            <div className="absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-white/30" />
            <div className="absolute bottom-8 left-8 w-6 h-6 border-b-2 border-l-2 border-white/30" />
            <div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-white/30" />

            {/* Loading Bar at bottom */}
            <div className="absolute bottom-0 left-0 h-1 bg-indigo-600 transition-all duration-100 ease-out" style={{ width: `${count}%` }} />
        </motion.div>
    );
}