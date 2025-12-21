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
        theme === 'dark' ? [0.3, 0.4, 0.3, 0.2] : [0.5, 0.7, 0.5, 0.3]
    );
    const opacity2 = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], 
        theme === 'dark' ? [0.2, 0.3, 0.2, 0.3] : [0.4, 0.6, 0.4, 0.6]
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
                className={`absolute top-[10%] left-[5%] w-96 h-96 rounded-full blur-[100px] ${
                    theme === 'dark' 
                        ? 'bg-gradient-to-br from-indigo-900/20 via-blue-900/15 to-transparent'
                        : 'bg-gradient-to-br from-violet-400/15 via-purple-400/10 to-transparent'
                }`}
            />
            <motion.div 
                style={{ 
                    y: y2, 
                    opacity: opacity2,
                    rotate
                }}
                className={`absolute top-[30%] right-[10%] w-[500px] h-[500px] rounded-full blur-[120px] ${
                    theme === 'dark'
                        ? 'bg-gradient-to-br from-indigo-950/15 via-blue-950/10 to-transparent'
                        : 'bg-gradient-to-br from-purple-400/12 via-pink-400/8 to-transparent'
                }`}
            />
            <motion.div 
                style={{ 
                    y: y3, 
                    opacity: opacity1,
                    scale
                }}
                className={`absolute bottom-[20%] left-[15%] w-[450px] h-[450px] rounded-full blur-[100px] ${
                    theme === 'dark'
                        ? 'bg-gradient-to-br from-blue-950/20 via-indigo-950/15 to-transparent'
                        : 'bg-gradient-to-br from-indigo-400/10 via-violet-400/8 to-transparent'
                }`}
            />
            <motion.div 
                style={{ 
                    y: y4,
                    opacity: useTransform(scrollYProgress, [0, 0.5, 1], theme === 'dark' ? [0.3, 0.4, 0.3] : [0.4, 0.6, 0.4])
                }}
                className={`absolute top-[60%] right-[5%] w-[350px] h-[350px] rounded-full blur-[100px] ${
                    theme === 'dark'
                        ? 'bg-gradient-to-br from-indigo-950/12 via-blue-950/8 to-transparent'
                        : 'bg-gradient-to-br from-pink-400/10 via-violet-400/8 to-transparent'
                }`}
            />
            
            {/* Floating geometric shapes */}
            <motion.div
                style={{
                    y: useTransform(scrollYProgress, [0, 1], [0, -600]),
                    rotate: useTransform(scrollYProgress, [0, 1], [0, 360]),
                    opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], theme === 'dark' ? [0, 0.25, 0.25, 0] : [0, 1, 1, 0])
                }}
                className={`absolute top-[40%] left-[30%] w-32 h-32 border-[6px] rounded-2xl ${
                    theme === 'dark' ? 'border-indigo-400/60' : 'border-violet-600 shadow-xl shadow-violet-600/30'
                }`}
            />
            <motion.div
                style={{
                    y: useTransform(scrollYProgress, [0, 1], [100, -400]),
                    rotate: useTransform(scrollYProgress, [0, 1], [45, -315]),
                    opacity: useTransform(scrollYProgress, [0, 0.4, 0.8, 1], theme === 'dark' ? [0, 0.2, 0.2, 0] : [0, 1, 1, 0])
                }}
                className={`absolute top-[70%] right-[25%] w-24 h-24 border-[6px] rounded-xl ${
                    theme === 'dark' ? 'border-purple-400/50' : 'border-purple-600 shadow-xl shadow-purple-600/30'
                }`}
            />
            
            {/* Multi-layer animated grid */}
            <motion.div 
                style={{ 
                    y: useTransform(scrollYProgress, [0, 1], [0, -80]),
                    opacity: 0
                }}
                className={`absolute inset-0 bg-[size:100px_100px] ${
                    theme === 'dark'
                        ? 'bg-[linear-gradient(rgba(99,102,241,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.15)_1px,transparent_1px)]'
                        : 'bg-[linear-gradient(rgba(124,58,237,0.4)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(124,58,237,0.4)_1.5px,transparent_1.5px)]'
                }`}
            />
            <motion.div 
                style={{ 
                    y: useTransform(scrollYProgress, [0, 1], [0, -30]),
                    opacity: 0
                }}
                className={`absolute inset-0 bg-[size:60px_60px] ${
                    theme === 'dark'
                        ? 'bg-[linear-gradient(rgba(168,85,247,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.12)_1px,transparent_1px)]'
                        : 'bg-[linear-gradient(rgba(147,51,234,0.35)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(147,51,234,0.35)_1.5px,transparent_1.5px)]'
                }`}
            />

            {/* Enhanced scan line with color gradient */}
            <motion.div
                style={{
                    y: useTransform(scrollYProgress, [0, 1], [-200, 2500]),
                    opacity: theme === 'dark' ? 0.08 : 0.25
                }}
                className={`absolute left-0 right-0 h-[300px] bg-gradient-to-b from-transparent to-transparent blur-sm ${
                    theme === 'dark' ? 'via-indigo-400/70' : 'via-violet-500/90'
                }`}
            />

            {/* Animated corner decorations with pulse */}
            <motion.div 
                animate={{ opacity: theme === 'dark' ? [0.5, 0.8, 0.5] : [0.7, 1, 0.7] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute top-0 left-0 w-40 h-40 border-l-[3px] border-t-[3px] rounded-tl-3xl m-8 ${
                    theme === 'dark' ? 'border-indigo-400/60' : 'border-violet-500/95 shadow-lg shadow-violet-500/10'
                }`}
            />
            <motion.div 
                animate={{ opacity: theme === 'dark' ? [0.5, 0.8, 0.5] : [0.7, 1, 0.7] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className={`absolute top-0 right-0 w-40 h-40 border-r-[3px] border-t-[3px] rounded-tr-3xl m-8 ${
                    theme === 'dark' ? 'border-purple-400/60' : 'border-purple-500/95 shadow-lg shadow-purple-500/10'
                }`}
            />
            <motion.div 
                animate={{ opacity: theme === 'dark' ? [0.5, 0.8, 0.5] : [0.7, 1, 0.7] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className={`absolute bottom-0 left-0 w-40 h-40 border-l-[3px] border-b-[3px] rounded-bl-3xl m-8 ${
                    theme === 'dark' ? 'border-blue-400/60' : 'border-indigo-500/95 shadow-lg shadow-indigo-500/10'
                }`}
            />
            <motion.div 
                animate={{ opacity: theme === 'dark' ? [0.5, 0.8, 0.5] : [0.7, 1, 0.7] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                className={`absolute bottom-0 right-0 w-40 h-40 border-r-[3px] border-b-[3px] rounded-br-3xl m-8 ${
                    theme === 'dark' ? 'border-pink-400/60' : 'border-pink-500/95 shadow-lg shadow-pink-500/10'
                }`}
            />
            
            {/* Subtle particle dots */}
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    style={{
                        y: useTransform(scrollYProgress, [0, 1], [Math.random() * 100, Math.random() * -500]),
                        opacity: useTransform(scrollYProgress, [0, 0.5, 1], theme === 'dark' ? [0, 0.4, 0] : [0, 1, 0])
                    }}
                    className={`absolute rounded-full ${
                        theme === 'dark' 
                            ? 'w-1 h-1 blur-[0.5px] bg-indigo-400/70' 
                            : 'w-3 h-3 bg-violet-500/90 shadow-lg shadow-violet-500/30'
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