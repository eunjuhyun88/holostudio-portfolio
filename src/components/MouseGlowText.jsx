import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function MouseGlowText({ 
    children, 
    className = "", 
    glowColor = "rgba(99, 102, 241, 0.6)", // Default Indigo
    as: Component = motion.div
}) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            // Calculate distance from center (Light source behavior)
            // If mouse is top-left, shadow should be bottom-right
            const x = (centerX - e.clientX) / 25; 
            const y = (centerY - e.clientY) / 25;
            
            setPosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <Component
            ref={ref}
            className={className}
            style={{
                filter: `drop-shadow(${position.x}px ${position.y}px 15px ${glowColor})`
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            {children}
        </Component>
    );
}