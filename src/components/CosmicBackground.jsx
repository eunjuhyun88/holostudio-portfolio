import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Starfield from '@/components/Starfield';

export default function CosmicBackground() {
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
        <div ref={ref} className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]">
            {/* 1. Deep Space Base */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020205] via-[#050510] to-[#020205]" />

            {/* 2. Dynamic Starfield */}
            <div className="absolute inset-0 opacity-60 mix-blend-screen">
                <Starfield density={800} speed={0.05} />
            </div>

            {/* 3. Nebula Clouds (Parallax Layer 1 - Slow) */}
            <motion.div 
                style={{ y: y3 }}
                className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full mix-blend-screen opacity-20 blur-[120px] bg-indigo-900/30 animate-pulse"
            />
            <motion.div 
                style={{ y: y3 }}
                className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] rounded-full mix-blend-screen opacity-10 blur-[150px] bg-purple-900/20"
            />

            {/* 4. Distant Planets/Orbs (Parallax Layer 2 - Medium) */}
            <motion.div
                style={{ y: y1, rotate: rotate1 }}
                className="absolute top-[10%] right-[5%] w-[30vw] h-[30vw] rounded-full opacity-10 blur-[80px] bg-gradient-to-br from-indigo-500 to-purple-800"
            />
             <motion.div
                style={{ y: y2, rotate: rotate2 }}
                className="absolute top-[40%] left-[-10%] w-[40vw] h-[40vw] rounded-full opacity-5 blur-[100px] bg-gradient-to-tr from-emerald-900 to-blue-900"
            />

            {/* 5. Abstract Light Trails / Warp Effect */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
        </div>
    );
}