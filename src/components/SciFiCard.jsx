import React from 'react';
import { motion } from 'framer-motion';

export default function SciFiCard({ 
    children, 
    className = "", 
    glowColor = "indigo",
    animated = true,
    cornerSize = "w-4 h-4"
}) {
    const glowColors = {
        indigo: "shadow-indigo-500/50 group-hover:shadow-indigo-500/80",
        blue: "shadow-blue-500/50 group-hover:shadow-blue-500/80",
        purple: "shadow-purple-500/50 group-hover:shadow-purple-500/80",
        cyan: "shadow-cyan-500/50 group-hover:shadow-cyan-500/80",
        pink: "shadow-pink-500/50 group-hover:shadow-pink-500/80"
    };

    const cornerColors = {
        indigo: "border-indigo-500/50 group-hover:border-indigo-400",
        blue: "border-blue-500/50 group-hover:border-blue-400",
        purple: "border-purple-500/50 group-hover:border-purple-400",
        cyan: "border-cyan-500/50 group-hover:border-cyan-400",
        pink: "border-pink-500/50 group-hover:border-pink-400"
    };

    return (
        <motion.div
            initial={animated ? { opacity: 0, y: 20 } : false}
            whileInView={animated ? { opacity: 1, y: 0 } : false}
            viewport={{ once: true }}
            className={`group relative ${className}`}
        >
            {/* Main Card */}
            <div className={`relative h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/20 ${glowColors[glowColor]} hover:shadow-2xl`}>
                {children}
            </div>

            {/* Animated Tech Corners */}
            <motion.div 
                className={`absolute top-0 left-0 ${cornerSize} border-l-2 border-t-2 ${cornerColors[glowColor]} transition-all duration-300`}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
                className={`absolute top-0 right-0 ${cornerSize} border-r-2 border-t-2 ${cornerColors[glowColor]} transition-all duration-300`}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div 
                className={`absolute bottom-0 left-0 ${cornerSize} border-l-2 border-b-2 ${cornerColors[glowColor]} transition-all duration-300`}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
            <motion.div 
                className={`absolute bottom-0 right-0 ${cornerSize} border-r-2 border-b-2 ${cornerColors[glowColor]} transition-all duration-300`}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            />

            {/* Scan Line Effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                <motion.div
                    className={`absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-${glowColor}-400/50 to-transparent`}
                    animate={{ top: ["-2px", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
            </div>
        </motion.div>
    );
}