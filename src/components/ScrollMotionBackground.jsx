import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollMotionBackground({ theme = 'dark' }) {
    if (theme === 'dark') return null;

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
    
    const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 0.6, 0.4, 0.2]);
    const opacity2 = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.2, 0.5, 0.3, 0.6]);
    
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
                className="absolute top-[10%] left-[5%] w-96 h-96 rounded-full bg-gradient-to-br from-indigo-200/30 via-purple-200/20 to-transparent blur-[120px]"
            />
            <motion.div 
                style={{ 
                    y: y2, 
                    opacity: opacity2,
                    rotate
                }}
                className="absolute top-[30%] right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-200/25 via-pink-200/15 to-transparent blur-[130px]"
            />
            <motion.div 
                style={{ 
                    y: y3, 
                    opacity: opacity1,
                    scale
                }}
                className="absolute bottom-[20%] left-[15%] w-[450px] h-[450px] rounded-full bg-gradient-to-br from-blue-200/20 via-indigo-200/25 to-transparent blur-[110px]"
            />
            <motion.div 
                style={{ 
                    y: y4,
                    opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.3])
                }}
                className="absolute top-[60%] right-[5%] w-[350px] h-[350px] rounded-full bg-gradient-to-br from-orange-200/15 via-yellow-200/10 to-transparent blur-[100px]"
            />
            
            {/* Floating geometric shapes */}
            <motion.div
                style={{
                    y: useTransform(scrollYProgress, [0, 1], [0, -600]),
                    rotate: useTransform(scrollYProgress, [0, 1], [0, 360]),
                    opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.08, 0.08, 0])
                }}
                className="absolute top-[40%] left-[30%] w-32 h-32 border-2 border-indigo-300/30 rounded-2xl"
            />
            <motion.div
                style={{
                    y: useTransform(scrollYProgress, [0, 1], [100, -400]),
                    rotate: useTransform(scrollYProgress, [0, 1], [45, -315]),
                    opacity: useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 0.06, 0.06, 0])
                }}
                className="absolute top-[70%] right-[25%] w-24 h-24 border-2 border-purple-300/25 rounded-xl"
            />
            
            {/* Multi-layer animated grid */}
            <motion.div 
                style={{ 
                    y: useTransform(scrollYProgress, [0, 1], [0, -80]),
                    opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.04, 0.07, 0.07, 0.04])
                }}
                className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.06)_1px,transparent_1px)] bg-[size:100px_100px]"
            />
            <motion.div 
                style={{ 
                    y: useTransform(scrollYProgress, [0, 1], [0, -30]),
                    opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.02, 0.04, 0.04, 0.02])
                }}
                className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.04)_1px,transparent_1px)] bg-[size:60px_60px]"
            />

            {/* Enhanced scan line with color gradient */}
            <motion.div
                style={{
                    y: useTransform(scrollYProgress, [0, 1], [-200, 2500]),
                    opacity: 0.03
                }}
                className="absolute left-0 right-0 h-[300px] bg-gradient-to-b from-transparent via-indigo-400/40 to-transparent blur-sm"
            />

            {/* Animated corner decorations with pulse */}
            <motion.div 
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-40 h-40 border-l-2 border-t-2 border-indigo-300/30 rounded-tl-3xl m-8"
            />
            <motion.div 
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-0 right-0 w-40 h-40 border-r-2 border-t-2 border-purple-300/30 rounded-tr-3xl m-8"
            />
            <motion.div 
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-0 left-0 w-40 h-40 border-l-2 border-b-2 border-blue-300/30 rounded-bl-3xl m-8"
            />
            <motion.div 
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                className="absolute bottom-0 right-0 w-40 h-40 border-r-2 border-b-2 border-pink-300/30 rounded-br-3xl m-8"
            />
            
            {/* Subtle particle dots */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    style={{
                        y: useTransform(scrollYProgress, [0, 1], [Math.random() * 100, Math.random() * -500]),
                        opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.15, 0])
                    }}
                    className="absolute w-1 h-1 rounded-full bg-indigo-400/40 blur-[0.5px]"
                    initial={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                />
            ))}
        </div>
    );
}