import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function GlitchText({ 
    children, 
    className = "",
    glitchIntensity = "low" // low, medium, high
}) {
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsGlitching(true);
            setTimeout(() => setIsGlitching(false), 200);
        }, 3000 + Math.random() * 2000);

        return () => clearInterval(interval);
    }, []);

    const glitchOffsets = {
        low: { x: 2, y: 1 },
        medium: { x: 4, y: 2 },
        high: { x: 6, y: 3 }
    };

    const offset = glitchOffsets[glitchIntensity];

    return (
        <span className={`relative inline-block ${className}`}>
            {/* Main Text */}
            <span className="relative z-10">{children}</span>
            
            {/* Glitch Layers */}
            {isGlitching && (
                <>
                    <motion.span
                        className="absolute inset-0 text-cyan-400 opacity-70 mix-blend-screen"
                        initial={{ x: 0, y: 0 }}
                        animate={{ x: [-offset.x, offset.x, -offset.x, 0], y: [0, offset.y, -offset.y, 0] }}
                        transition={{ duration: 0.2 }}
                        style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}
                    >
                        {children}
                    </motion.span>
                    <motion.span
                        className="absolute inset-0 text-pink-400 opacity-70 mix-blend-screen"
                        initial={{ x: 0, y: 0 }}
                        animate={{ x: [offset.x, -offset.x, offset.x, 0], y: [0, -offset.y, offset.y, 0] }}
                        transition={{ duration: 0.2 }}
                        style={{ clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)" }}
                    >
                        {children}
                    </motion.span>
                </>
            )}
        </span>
    );
}