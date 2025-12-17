import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function PerspectiveCrawl({ children }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const rotateX = 25; // Revert to standard crawl tilt for the "Star Wars" feel
    const y = useTransform(scrollYProgress, [0, 1], ["60%", "-200%"]); // Start lower down the screen
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.8, 1], [1, 1, 1, 0]); 
    const scale = useTransform(scrollYProgress, [0, 1], [1.5, 0.5]); // Start larger/wider at bottom, get smaller as it goes "far"

    return (
        <div ref={containerRef} className="relative h-[600vh] w-full bg-transparent">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden" style={{ perspective: '500px' }}>
                
                {/* Minimal fade to keep text visible */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#050505] to-transparent z-20 pointer-events-none" />

                <motion.div 
                    style={{ 
                        rotateX,
                        y,
                        opacity,
                        scale,
                        transformStyle: "preserve-3d"
                    }}
                    className="w-[90vw] mx-auto text-center origin-[50%_100%]"
                >
                    {children}
                </motion.div>
            </div>
        </div>
    );
}