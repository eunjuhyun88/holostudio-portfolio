import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Starfield from '@/components/Starfield';

export default function CosmicBackground({ theme = 'dark' }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    
    // Smooth rotation for planets
    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -30]);

    return (
        <div ref={ref} className={`fixed inset-0 z-0 pointer-events-none overflow-hidden ${
            theme === 'dark' ? 'bg-[#050505]' : 'bg-neutral-200'
        }`}>
            {/* 1. Base Layer - Gray tone */}
            <div className={`absolute inset-0 ${
                theme === 'dark' 
                    ? 'bg-gradient-to-b from-[#020205] via-[#050510] to-[#020205]'
                    : 'bg-gradient-to-br from-neutral-100 via-neutral-200 to-neutral-300'
            }`} />

            {/* 2. Dynamic Starfield - Subtle in light mode */}
            {theme === 'dark' ? (
                <>
                    <div className="absolute inset-0 opacity-80 mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]">
                        <Starfield density={1200} speed={0.05} />
                    </div>
                    <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay animate-[ping_10s_cubic-bezier(0,0,0.2,1)_infinite] opacity-0" />
                </>
            ) : (
                <div className="absolute inset-0 opacity-10 mix-blend-multiply animate-[pulse_8s_ease-in-out_infinite]">
                    <Starfield density={400} speed={0.02} />
                </div>
            )}

            {/* 3. Aurora Orbs - Subtle pastel gradients for emphasis */}
            <motion.div 
                style={{ y: y3 }}
                className={`absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full blur-[140px] animate-pulse ${
                    theme === 'dark' 
                        ? 'mix-blend-screen opacity-20 bg-indigo-900/30'
                        : 'mix-blend-normal opacity-15 bg-gradient-to-br from-purple-300/40 via-blue-300/30 to-cyan-300/40'
                }`}
            />
            <motion.div 
                style={{ y: y3 }}
                className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] animate-pulse ${
                    theme === 'dark' 
                        ? 'bg-indigo-900/20 mix-blend-screen'
                        : 'bg-gradient-to-tr from-pink-300/30 via-purple-300/25 to-blue-300/30 opacity-20 mix-blend-normal'
                }`}
            />
            <motion.div 
                style={{ y: y3 }}
                className={`absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[100px] animate-pulse ${
                    theme === 'dark' 
                        ? 'bg-blue-900/10 mix-blend-screen'
                        : 'bg-gradient-to-bl from-cyan-300/25 via-blue-300/20 to-indigo-300/25 opacity-18 mix-blend-normal'
                }`}
            />
            <motion.div 
                style={{ y: y3 }}
                className={`absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] rounded-full blur-[150px] ${
                    theme === 'dark' 
                        ? 'bg-purple-900/20 mix-blend-screen opacity-10'
                        : 'bg-gradient-to-tl from-pink-300/20 via-purple-300/15 to-indigo-300/20 opacity-15 mix-blend-normal'
                }`}
            />

            {/* 4. Crystal Orbs (Parallax Layer 2) - Subtle iridescent */}
            <motion.div
                style={{ y: y1, rotate: rotate1 }}
                className={`absolute top-[10%] right-[5%] w-[30vw] h-[30vw] rounded-full blur-[80px] ${
                    theme === 'dark' 
                        ? 'opacity-10 bg-gradient-to-br from-indigo-500 to-purple-800'
                        : 'opacity-20 bg-gradient-to-br from-purple-300/30 via-pink-300/25 to-fuchsia-300/30'
                }`}
            />
             <motion.div
                style={{ y: y2, rotate: rotate2 }}
                className={`absolute top-[40%] left-[-10%] w-[40vw] h-[40vw] rounded-full blur-[100px] ${
                    theme === 'dark' 
                        ? 'opacity-5 bg-gradient-to-tr from-emerald-900 to-blue-900'
                        : 'opacity-18 bg-gradient-to-tr from-cyan-300/25 via-blue-300/20 to-indigo-300/25'
                }`}
            />

            {/* 5. Subtle aurora shimmer overlay */}
            {theme === 'light' && (
                <>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-200/10 via-transparent to-cyan-200/10 opacity-40" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.08),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(96,165,250,0.08),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.05),transparent_50%)]" />
                </>
            )}
            
            <div className={`absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] ${
                theme === 'dark' ? 'mix-blend-overlay' : 'mix-blend-soft-light opacity-30'
            }`} />
            
            <div className={`absolute inset-0 bg-gradient-to-t via-transparent ${
                theme === 'dark' ? 'from-[#050505] to-[#050505]' : 'from-neutral-50/80 to-neutral-50/80'
            }`} />
        </div>
    );
}