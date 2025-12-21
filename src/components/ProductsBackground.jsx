import React from 'react';
import { motion } from 'framer-motion';

export default function ProductsBackground({ theme = 'dark' }) {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Hexagonal Grid Pattern */}
            <div className={`absolute inset-0 opacity-${theme === 'dark' ? '10' : '5'}`}
                style={{
                    backgroundImage: `
                        radial-gradient(circle at 50% 50%, ${theme === 'dark' ? 'rgba(99, 102, 241, 0.15)' : 'rgba(99, 102, 241, 0.08)'} 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Animated Product Nodes */}
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={i}
                    className={`absolute w-32 h-32 rounded-full border-2 ${
                        theme === 'dark' ? 'border-indigo-500/30' : 'border-indigo-400/20'
                    }`}
                    initial={{
                        top: `${20 + i * 20}%`,
                        left: `${10 + i * 20}%`,
                        opacity: 0
                    }}
                    animate={{
                        opacity: [0.1, 0.3, 0.1],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        delay: i * 0.5
                    }}
                >
                    <div className={`absolute inset-4 rounded-full border ${
                        theme === 'dark' ? 'border-indigo-400/20' : 'border-indigo-300/15'
                    }`} />
                </motion.div>
            ))}

            {/* Flowing Data Lines */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={`line-${i}`}
                    className={`absolute h-px ${
                        theme === 'dark' ? 'bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent' : 'bg-gradient-to-r from-transparent via-indigo-400/25 to-transparent'
                    }`}
                    style={{
                        top: `${15 + i * 15}%`,
                        left: 0,
                        right: 0,
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                        scaleX: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.8,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Central Gradient Orbs */}
            <motion.div 
                className={`absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] ${
                    theme === 'dark' 
                        ? 'bg-gradient-to-br from-indigo-500/20 via-purple-500/15 to-transparent'
                        : 'bg-gradient-to-br from-indigo-300/15 via-purple-300/10 to-transparent'
                }`}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div 
                className={`absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] ${
                    theme === 'dark'
                        ? 'bg-gradient-to-br from-cyan-500/20 via-blue-500/15 to-transparent'
                        : 'bg-gradient-to-br from-cyan-300/15 via-blue-300/10 to-transparent'
                }`}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 8, repeat: Infinity, delay: 2 }}
            />

            {/* Tech Corner Brackets */}
            <div className={`absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 ${
                theme === 'dark' ? 'border-indigo-500/30' : 'border-indigo-400/20'
            } m-8`} />
            <div className={`absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 ${
                theme === 'dark' ? 'border-purple-500/30' : 'border-purple-400/20'
            } m-8`} />
            <div className={`absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 ${
                theme === 'dark' ? 'border-cyan-500/30' : 'border-cyan-400/20'
            } m-8`} />
            <div className={`absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 ${
                theme === 'dark' ? 'border-pink-500/30' : 'border-pink-400/20'
            } m-8`} />

            {/* Vignette Overlay */}
            <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_${
                theme === 'dark' ? 'rgba(5,5,5,0.8)' : 'rgba(255,255,255,0.6)'
            }_100%)]`} />
        </div>
    );
}