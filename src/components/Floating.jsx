import React from 'react';
import { motion } from 'framer-motion';

export default function Floating({ 
    children, 
    delay = 0, 
    duration = 4, 
    offset = 10,
    className = "" 
}) {
    return (
        <motion.div
            className={className}
            animate={{ 
                y: [0, -offset, 0],
            }}
            transition={{ 
                duration: duration, 
                repeat: Infinity, 
                ease: [0.45, 0, 0.55, 1],
                delay: delay
            }}
        >
            {children}
        </motion.div>
    );
}