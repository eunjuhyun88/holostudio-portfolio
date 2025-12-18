import React from 'react';
import { cn } from "@/lib/utils";

export default function SciFiCard({ children, className, variant = "default", ...props }) {
    // Variants: 
    // default: Cut corners with border
    // holographic: Glassy with scanlines
    // minimal: Just corner markers
    
    return (
        <div className={cn("relative group", className)} {...props}>
            {/* Main Container with Clip Path for Cut Corners */}
            <div 
                className={cn(
                    "relative z-10 bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 transition-all duration-300 overflow-hidden",
                    "before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/5 before:to-transparent before:opacity-0 before:group-hover:opacity-100 before:transition-opacity",
                    variant === 'default' && "[clip-path:polygon(20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%,0_20px)]",
                    variant === 'minimal' && "rounded-sm border-0 bg-transparent",
                    variant === 'holographic' && "rounded-xl border-indigo-500/20 bg-indigo-950/10"
                )}
            >
                {/* Scanline Effect (Optional) */}
                {(variant === 'default' || variant === 'holographic') && (
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-50" />
                )}
                
                {children}

                {/* Corner Accents (The "Tech" feel) */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-indigo-500/50 rounded-tl-sm pointer-events-none" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-indigo-500/50 rounded-tr-sm pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-indigo-500/50 rounded-bl-sm pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-indigo-500/50 rounded-br-sm pointer-events-none" />
            </div>

            {/* Glowing Border Wrapper (for cut corner visual border) */}
            {variant === 'default' && (
                <div 
                    className="absolute inset-0 bg-indigo-500/20 -z-10 blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                    style={{ clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)" }}
                />
            )}
        </div>
    );
}