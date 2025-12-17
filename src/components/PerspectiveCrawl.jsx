import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function PerspectiveCrawl({ children }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const rotateX = 20; // Slightly less tilt for better readability of top text
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]); // Move further up to ensure long content clears
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0]); // Keep visible longer, only fade at very end
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.6]); // More dramatic scaling

    return (
        <div ref={containerRef} className="relative h-[500vh] w-full bg-[#050505]">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden" style={{ perspective: '400px' }}>
                
                {/* Gradient Fades */}
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-[#050505] to-transparent z-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#050505] to-transparent z-20 pointer-events-none" />

                <motion.div 
                    style={{ 
                        rotateX,
                        y,
                        opacity,
                        scale,
                        transformStyle: "preserve-3d"
                    }}
                    className="max-w-4xl mx-auto text-center origin-[50%_100%] px-6"
                >
                    {children}
                </motion.div>
            </div>
        </div>
    );
}