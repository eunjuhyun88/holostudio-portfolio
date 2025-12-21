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
        <div ref={ref} className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* 1. Clean Base */}
            {theme === 'dark' && (
                <div className="absolute inset-0 bg-gradient-to-b from-[#020205] via-[#050510] to-[#020205]" />
            )}

            {/* 2. Starfield - Both modes */}
            {theme === 'dark' ? (
                <>
                    <div className="absolute inset-0 opacity-80 mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]">
                        <Starfield density={1200} speed={0.05} />
                    </div>
                    <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay animate-[ping_10s_cubic-bezier(0,0,0.2,1)_infinite] opacity-0" />
                </>
            ) : (
                <div className="absolute inset-0 opacity-20 mix-blend-multiply animate-[pulse_8s_ease-in-out_infinite]">
                    <Starfield density={1200} speed={0.05} />
                </div>
            )}

            {/* 3. Ambient Gradients - Both modes */}
            <motion.div 
                style={{ y: y3 }}
                className={`absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full blur-[150px] ${
                    theme === 'dark' 
                        ? 'mix-blend-screen opacity-20 bg-indigo-900/30'
                        : 'mix-blend-multiply opacity-15 bg-gradient-to-br from-indigo-300/40 via-purple-300/30 to-transparent'
                }`}
            />
            <motion.div 
                style={{ y: y3 }}
                className={`absolute bottom-[-10%] left-[-5%] w-[50vw] h-[50vw] rounded-full blur-[150px] ${
                    theme === 'dark'
                        ? 'bg-indigo-900/20 mix-blend-screen'
                        : 'bg-gradient-to-tr from-cyan-300/30 via-violet-300/25 to-transparent mix-blend-multiply opacity-15'
                }`}
            />

            {/* 4. Texture */}
            {theme === 'dark' && (
                <>
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t via-transparent from-[#050505] to-[#050505]" />
                </>
            )}
        </div>
    );
}