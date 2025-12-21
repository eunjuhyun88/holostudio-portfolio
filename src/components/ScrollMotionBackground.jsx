import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollMotionBackground({ theme = 'dark' }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    // Multiple parallax layers at different speeds
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    
    const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], 
        theme === 'dark' ? [0.7, 0.9, 0.7, 0.5] : [0.5, 0.7, 0.5, 0.3]
    );
    const opacity2 = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], 
        theme === 'dark' ? [0.5, 0.8, 0.6, 0.8] : [0.4, 0.6, 0.4, 0.6]
    );
    
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);

    return (
        <div ref={ref} className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Animated gradient orbs with color transitions */}
            <motion.div 
                style={{ 
                    y: y1, 
                    opacity: opacity1,
                    scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.3, 1])
                }}
                className={`absolute top-[10%] left-[5%] w-96 h-96 rounded-full blur-[120px] ${
                    theme === 'dark' 
                        ? 'bg-gradient-to-br from-indigo-500/50 via-purple-500/35 to-transparent'
                        : 'bg-gradient-to-br from-indigo-400/60 via-purple-400/45 to-transparent'
                }`}
            />
            <motion.div 
                style={{ 
                    y: y2, 
                    opacity: opacity2,
                    rotate
                }}
                className={`absolute top-[30%] right-[10%] w-[500px] h-[500px] rounded-full blur-[130px] ${
                    theme === 'dark'
                        ? 'bg-gradient-to-br from-purple-500/40 via-pink-500/30 to-transparent'
                        : 'bg-gradient-to-br from-purple-400/50 via-pink-400/40 to-transparent'
                }`}
            />
            <motion.div 
                style={{ 
                    y: y3, 
                    opacity: opacity1,
                    scale
                }}
                className={`absolute bottom-[20%] left-[15%] w-[450px] h-[450px] rounded-full blur-[110px] ${
                    theme === 'dark'
                        ? 'bg-gradient-to-br from-blue-500/35 via-indigo-500/40 to-transparent'
                        : 'bg-gradient-to-br from-cyan-400/45 via-indigo-400/50 to-transparent'
                }`}
            />
            <motion.div 
                style={{ 
                    y: y4,
                    opacity: useTransform(scrollYProgress, [0, 0.5, 1], theme === 'dark' ? [0.6, 0.8, 0.6] : [0.4, 0.6, 0.4])
                }}
                className={`absolute top-[60%] right-[5%] w-[350px] h-[350px] rounded-full blur-[100px] ${
                    theme === 'dark'
                        ? 'bg-gradient-to-br from-orange-500/30 via-yellow-500/20 to-transparent'
                        : 'bg-gradient-to-br from-pink-400/35 via-violet-400/30 to-transparent'
                }`}
            />
            
            {/* Floating geometric shapes */}
            <motion.div
                style={{
                    y: useTransform(scrollYProgress, [0, 1], [0, -600]),
                    rotate: useTransform(scrollYProgress, [0, 1], [0, 360]),
                    opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], theme === 'dark' ? [0, 0.25, 0.25, 0] : [0, 0.3, 0.3, 0])
                }}
                className={`absolute top-[40%] left-[30%] w-32 h-32 border-2 rounded-2xl ${
                    theme === 'dark' ? 'border-indigo-400/60' : 'border-violet-500/60'
                }`}
            />
            <motion.div
                style={{
                    y: useTransform(scrollYProgress, [0, 1], [100, -400]),
                    rotate: useTransform(scrollYProgress, [0, 1], [45, -315]),
                    opacity: useTransform(scrollYProgress, [0, 0.4, 0.8, 1], theme === 'dark' ? [0, 0.2, 0.2, 0] : [0, 0.25, 0.25, 0])
                }}
                className={`absolute top-[70%] right-[25%] w-24 h-24 border-2 rounded-xl ${
                    theme === 'dark' ? 'border-purple-400/50' : 'border-purple-500/55'
                }`}
            />
            
            {/* Multi-layer animated grid */}
            <motion.div 
                style={{ 
                    y: useTransform(scrollYProgress, [0, 1], [0, -80]),
                    opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], theme === 'dark' ? [0.1, 0.15, 0.15, 0.1] : [0.12, 0.18, 0.18, 0.12])
                }}
                className={`absolute inset-0 bg-[size:100px_100px] ${
                    theme === 'dark'
                        ? 'bg-[linear-gradient(rgba(99,102,241,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.15)_1px,transparent_1px)]'
                        : 'bg-[linear-gradient(rgba(139,92,246,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.2)_1px,transparent_1px)]'
                }`}
            />
            <motion.div 
                style={{ 
                    y: useTransform(scrollYProgress, [0, 1], [0, -30]),
                    opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], theme === 'dark' ? [0.08, 0.12, 0.12, 0.08] : [0.1, 0.15, 0.15, 0.1])
                }}
                className={`absolute inset-0 bg-[size:60px_60px] ${
                    theme === 'dark'
                        ? 'bg-[linear-gradient(rgba(168,85,247,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.12)_1px,transparent_1px)]'
                        : 'bg-[linear-gradient(rgba(196,181,253,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(196,181,253,0.15)_1px,transparent_1px)]'
                }`}
            />

            {/* Enhanced scan line with color gradient */}
            <motion.div
                style={{
                    y: useTransform(scrollYProgress, [0, 1], [-200, 2500]),
                    opacity: theme === 'dark' ? 0.08 : 0.12
                }}
                className={`absolute left-0 right-0 h-[300px] bg-gradient-to-b from-transparent to-transparent blur-sm ${
                    theme === 'dark' ? 'via-indigo-400/70' : 'via-violet-500/70'
                }`}
            />

            {/* Animated corner decorations with pulse */}
            <motion.div 
                animate={{ opacity: theme === 'dark' ? [0.5, 0.8, 0.5] : [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute top-0 left-0 w-40 h-40 border-l-2 border-t-2 rounded-tl-3xl m-8 ${
                    theme === 'dark' ? 'border-indigo-400/60' : 'border-indigo-400/40'
                }`}
            />
            <motion.div 
                animate={{ opacity: theme === 'dark' ? [0.5, 0.8, 0.5] : [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className={`absolute top-0 right-0 w-40 h-40 border-r-2 border-t-2 rounded-tr-3xl m-8 ${
                    theme === 'dark' ? 'border-purple-400/60' : 'border-purple-400/40'
                }`}
            />
            <motion.div 
                animate={{ opacity: theme === 'dark' ? [0.5, 0.8, 0.5] : [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className={`absolute bottom-0 left-0 w-40 h-40 border-l-2 border-b-2 rounded-bl-3xl m-8 ${
                    theme === 'dark' ? 'border-blue-400/60' : 'border-blue-400/40'
                }`}
            />
            <motion.div 
                animate={{ opacity: theme === 'dark' ? [0.5, 0.8, 0.5] : [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                className={`absolute bottom-0 right-0 w-40 h-40 border-r-2 border-b-2 rounded-br-3xl m-8 ${
                    theme === 'dark' ? 'border-pink-400/60' : 'border-pink-400/40'
                }`}
            />
            
            {/* Subtle particle dots */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    style={{
                        y: useTransform(scrollYProgress, [0, 1], [Math.random() * 100, Math.random() * -500]),
                        opacity: useTransform(scrollYProgress, [0, 0.5, 1], theme === 'dark' ? [0, 0.4, 0] : [0, 0.5, 0])
                    }}
                    className={`absolute w-1 h-1 rounded-full blur-[0.5px] ${
                        theme === 'dark' ? 'bg-indigo-400/70' : 'bg-violet-600/70'
                    }`}
                    initial={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                />
            ))}
        </div>
    );
}