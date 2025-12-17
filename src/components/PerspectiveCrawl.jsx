import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function PerspectiveCrawl({ children }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const rotateX = 15; // Minimal tilt for better legibility and width
    const y = useTransform(scrollYProgress, [0, 1], ["20%", "-120%"]); // Start lower (20%) to be fully visible, move up
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 1, 1, 0]); // Always visible until the very end
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]); // Less scaling to keep it wide

    return (
        <div ref={containerRef} className="relative h-[500vh] w-full bg-[#050505]">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden" style={{ perspective: '600px' }}>
                
                {/* Reduced Gradient Fades to show top text */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#050505] to-transparent z-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#050505] to-transparent z-20 pointer-events-none" />

                <motion.div 
                    style={{ 
                        rotateX,
                        y,
                        opacity,
                        scale,
                        transformStyle: "preserve-3d"
                    }}
                    className="w-full max-w-[90%] md:max-w-[80%] mx-auto text-center origin-[50%_100%] px-4 md:px-0"
                >
                    {children}
                </motion.div>
            </div>
        </div>
    );
}