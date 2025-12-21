import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollMotionBackground({ theme = 'dark' }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.3, 0.6]);

    if (theme === 'dark') return null;

    return (
        <div ref={ref} className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Subtle floating particles */}
            <motion.div 
                style={{ y: y1, opacity }}
                className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-indigo-200/20 blur-[80px]"
            />
            <motion.div 
                style={{ y: y2, opacity }}
                className="absolute top-[30%] right-[10%] w-96 h-96 rounded-full bg-purple-200/15 blur-[100px]"
            />
            <motion.div 
                style={{ y: y3, opacity }}
                className="absolute bottom-[20%] left-[15%] w-80 h-80 rounded-full bg-blue-200/15 blur-[90px]"
            />
            
            {/* Animated grid overlay */}
            <motion.div 
                style={{ 
                    y: useTransform(scrollYProgress, [0, 1], [0, -50]),
                    opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.03, 0.05, 0.05, 0.03])
                }}
                className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:80px_80px]"
            />

            {/* Subtle scan line effect */}
            <motion.div
                style={{
                    y: useTransform(scrollYProgress, [0, 1], [-100, 2000]),
                    opacity: 0.02
                }}
                className="absolute left-0 right-0 h-[200px] bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent"
            />

            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-neutral-300/20 rounded-tl-3xl m-8" />
            <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-neutral-300/20 rounded-tr-3xl m-8" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-neutral-300/20 rounded-bl-3xl m-8" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-neutral-300/20 rounded-br-3xl m-8" />
        </div>
    );
}