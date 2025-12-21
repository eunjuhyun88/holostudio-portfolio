import React from 'react';
import { motion } from 'framer-motion';

export default function SciFiCard({ 
    children, 
    className = "", 
    glowColor = "indigo",
    animated = true,
    cornerSize = "w-4 h-4",
    theme = "dark"
}) {
    const [isHovered, setIsHovered] = React.useState(false);
    const glowColors = {
        dark: {
            indigo: "shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:shadow-[0_0_40px_rgba(79,70,229,0.5)]",
            blue: "shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]",
            purple: "shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]",
            cyan: "shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)]",
            pink: "shadow-[0_0_30px_rgba(236,72,153,0.3)] hover:shadow-[0_0_40px_rgba(236,72,153,0.5)]"
        },
        light: {
            indigo: "shadow-lg hover:shadow-xl",
            blue: "shadow-lg hover:shadow-xl",
            purple: "shadow-lg hover:shadow-xl",
            cyan: "shadow-lg hover:shadow-xl",
            pink: "shadow-lg hover:shadow-xl"
        }
    };

    const cornerColors = {
        dark: {
            indigo: "border-indigo-500/50 group-hover:border-indigo-400/80",
            blue: "border-blue-500/50 group-hover:border-blue-400/80",
            purple: "border-purple-500/50 group-hover:border-purple-400/80",
            cyan: "border-cyan-500/50 group-hover:border-cyan-400/80",
            pink: "border-pink-500/50 group-hover:border-pink-400/80"
        },
        light: {
            indigo: "border-indigo-300/60 group-hover:border-indigo-400",
            blue: "border-blue-300/60 group-hover:border-blue-400",
            purple: "border-purple-300/60 group-hover:border-purple-400",
            cyan: "border-cyan-300/60 group-hover:border-cyan-400",
            pink: "border-pink-300/60 group-hover:border-pink-400"
        }
    };

    const scanColors = {
        dark: {
            indigo: "bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent",
            blue: "bg-gradient-to-r from-transparent via-blue-400/50 to-transparent",
            purple: "bg-gradient-to-r from-transparent via-purple-400/50 to-transparent",
            cyan: "bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent",
            pink: "bg-gradient-to-r from-transparent via-pink-400/50 to-transparent"
        },
        light: {
            indigo: "bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent",
            blue: "bg-gradient-to-r from-transparent via-blue-300/40 to-transparent",
            purple: "bg-gradient-to-r from-transparent via-purple-300/40 to-transparent",
            cyan: "bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent",
            pink: "bg-gradient-to-r from-transparent via-pink-300/40 to-transparent"
        }
    };

    const t = theme === 'dark' ? 'dark' : 'light';

    return (
        <motion.div
            initial={animated ? { opacity: 0, y: 20 } : false}
            whileInView={animated ? { opacity: 1, y: 0 } : false}
            viewport={{ once: true }}
            className={`group relative ${className}`}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* Main Card */}
            <div className={`relative h-full border rounded-2xl overflow-hidden transition-all duration-500 ${
                theme === 'dark'
                    ? 'bg-black/40 backdrop-blur-xl border-white/10 hover:border-white/20'
                    : 'bg-white/90 backdrop-blur-sm border-neutral-200 hover:border-neutral-300'
            } ${glowColors[t][glowColor]}`}>
                {children}
            </div>

            {/* Animated Tech Corners */}
            <motion.div 
                className={`absolute top-0 left-0 ${cornerSize} border-l-2 border-t-2 ${cornerColors[t][glowColor]} transition-all duration-300`}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
                className={`absolute top-0 right-0 ${cornerSize} border-r-2 border-t-2 ${cornerColors[t][glowColor]} transition-all duration-300`}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div 
                className={`absolute bottom-0 left-0 ${cornerSize} border-l-2 border-b-2 ${cornerColors[t][glowColor]} transition-all duration-300`}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
            <motion.div 
                className={`absolute bottom-0 right-0 ${cornerSize} border-r-2 border-b-2 ${cornerColors[t][glowColor]} transition-all duration-300`}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            />

            {/* Scan Line Effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                <motion.div
                    className={`absolute left-0 right-0 h-px ${scanColors[t][glowColor]}`}
                    animate={{ top: ["-2px", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
            </div>
        </motion.div>
    );
}