import React from 'react';
import { motion } from 'framer-motion';

export default function CompanyBackground({ theme = 'dark' }) {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Minimal Static Grid - Primary Layer */}
            <div className={`absolute inset-0 ${
                theme === 'dark'
                    ? 'bg-[linear-gradient(rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.06)_1px,transparent_1px)]'
                    : 'bg-[linear-gradient(rgba(99,102,241,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.08)_1px,transparent_1px)]'
            } bg-[size:80px_80px]`} />

            {/* Secondary Finer Grid */}
            <div className={`absolute inset-0 ${
                theme === 'dark'
                    ? 'bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)]'
                    : 'bg-[linear-gradient(rgba(168,85,247,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)]'
            } bg-[size:40px_40px]`} />

            {/* Subtle Radial Gradient Overlay */}
            <div className={`absolute inset-0 ${
                theme === 'dark'
                    ? 'bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)]'
                    : 'bg-[radial-gradient(circle_at_center,transparent_0%,#ffffff_100%)]'
            }`} />

            {/* Very Subtle Slow-Moving Particles (Minimalist) */}
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -800],
                        opacity: theme === 'dark' ? [0, 0.15, 0] : [0, 0.1, 0]
                    }}
                    transition={{
                        duration: 20 + Math.random() * 15,
                        repeat: Infinity,
                        delay: Math.random() * 10,
                        ease: "linear"
                    }}
                    className={`absolute w-0.5 h-0.5 rounded-full ${
                        theme === 'dark' ? 'bg-indigo-400/40' : 'bg-indigo-500/30'
                    }`}
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: '100%'
                    }}
                />
            ))}

            {/* Minimal Corner Accents */}
            <div className={`absolute top-0 left-0 w-32 h-32 border-l border-t rounded-tl-3xl m-8 ${
                theme === 'dark' ? 'border-white/15' : 'border-neutral-300'
            }`} />
            <div className={`absolute top-0 right-0 w-32 h-32 border-r border-t rounded-tr-3xl m-8 ${
                theme === 'dark' ? 'border-white/15' : 'border-neutral-300'
            }`} />
            <div className={`absolute bottom-0 left-0 w-32 h-32 border-l border-b rounded-bl-3xl m-8 ${
                theme === 'dark' ? 'border-white/15' : 'border-neutral-300'
            }`} />
            <div className={`absolute bottom-0 right-0 w-32 h-32 border-r border-b rounded-br-3xl m-8 ${
                theme === 'dark' ? 'border-white/15' : 'border-neutral-300'
            }`} />

            {/* Very Subtle Center Glow */}
            {theme === 'dark' && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-indigo-500/5 rounded-full blur-[120px]" />
            )}

            {/* Professional Tech Lines (Blueprint style) */}
            <div className={`absolute top-1/4 left-0 right-0 h-px ${
                theme === 'dark' ? 'bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent' : 'bg-gradient-to-r from-transparent via-neutral-300 to-transparent'
            }`} />
            <div className={`absolute bottom-1/4 left-0 right-0 h-px ${
                theme === 'dark' ? 'bg-gradient-to-r from-transparent via-purple-500/20 to-transparent' : 'bg-gradient-to-r from-transparent via-neutral-300 to-transparent'
            }`} />
        </div>
    );
}