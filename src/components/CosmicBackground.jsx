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
            theme === 'dark' ? 'bg-[#050505]' : 'bg-gradient-to-br from-neutral-100 via-purple-50 to-blue-50'
        }`}>
            {/* 1. Deep Space Base */}
            <div className={`absolute inset-0 ${
                theme === 'dark' 
                    ? 'bg-gradient-to-b from-[#020205] via-[#050510] to-[#020205]'
                    : 'bg-gradient-to-b from-purple-100/20 via-transparent to-blue-100/20'
            }`} />

            {/* 2. Dynamic Starfield with occasional flash */}
            {theme === 'dark' ? (
                <>
                    <div className="absolute inset-0 opacity-80 mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]">
                        <Starfield density={1200} speed={0.05} />
                    </div>
                    <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay animate-[ping_10s_cubic-bezier(0,0,0.2,1)_infinite] opacity-0" />
                </>
            ) : (
                <div className="absolute inset-0 opacity-20 mix-blend-multiply animate-[pulse_8s_ease-in-out_infinite]">
                    <Starfield density={800} speed={0.03} />
                </div>
            )}

            {/* 3. Nebula Clouds (Parallax Layer 1 - Slow) */}
            <motion.div 
                style={{ y: y3 }}
                className={`absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full blur-[120px] animate-pulse ${
                    theme === 'dark' 
                        ? 'mix-blend-screen opacity-20 bg-indigo-900/30'
                        : 'mix-blend-multiply opacity-10 bg-purple-300/40'
                }`}
            />
            {/* Added Milky Way Galaxy Blobs */}
            <motion.div 
                style={{ y: y3 }}
                className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] animate-pulse ${
                    theme === 'dark' 
                        ? 'bg-indigo-900/20 mix-blend-screen'
                        : 'bg-purple-300/30 mix-blend-multiply'
                }`}
            />
            <motion.div 
                style={{ y: y3 }}
                className={`absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[100px] animate-pulse ${
                    theme === 'dark' 
                        ? 'bg-blue-900/10 mix-blend-screen'
                        : 'bg-blue-300/20 mix-blend-multiply'
                }`}
            />
            <motion.div 
                style={{ y: y3 }}
                className={`absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] rounded-full opacity-10 blur-[150px] ${
                    theme === 'dark' 
                        ? 'bg-purple-900/20 mix-blend-screen'
                        : 'bg-pink-300/30 mix-blend-multiply'
                }`}
            />

            {/* 4. Distant Planets/Orbs (Parallax Layer 2 - Medium) */}
            <motion.div
                style={{ y: y1, rotate: rotate1 }}
                className={`absolute top-[10%] right-[5%] w-[30vw] h-[30vw] rounded-full blur-[80px] ${
                    theme === 'dark' 
                        ? 'opacity-10 bg-gradient-to-br from-indigo-500 to-purple-800'
                        : 'opacity-20 bg-gradient-to-br from-purple-300 to-pink-300'
                }`}
            />
             <motion.div
                style={{ y: y2, rotate: rotate2 }}
                className={`absolute top-[40%] left-[-10%] w-[40vw] h-[40vw] rounded-full blur-[100px] ${
                    theme === 'dark' 
                        ? 'opacity-5 bg-gradient-to-tr from-emerald-900 to-blue-900'
                        : 'opacity-15 bg-gradient-to-tr from-blue-200 to-cyan-200'
                }`}
            />

            {/* 5. Abstract Light Trails / Warp Effect */}
            <div className={`absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] ${
                theme === 'dark' ? 'mix-blend-overlay' : 'mix-blend-soft-light'
            }`} />
            
            <div className={`absolute inset-0 bg-gradient-to-t via-transparent ${
                theme === 'dark' ? 'from-[#050505] to-[#050505]' : 'from-neutral-50 to-neutral-50'
            }`} />
        </div>
    );
}