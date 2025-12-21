import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FadeInSection({ 
    children, 
    delay = 0, 
    direction = 'up',
    className = '' 
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { 
        once: true, 
        margin: "-100px",
        amount: 0.3 
    });

    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { y: 0, x: 40 },
        right: { y: 0, x: -40 }
    };

    return (
        <motion.div
            ref={ref}
            initial={{ 
                opacity: 0, 
                ...directions[direction]
            }}
            animate={isInView ? { 
                opacity: 1, 
                y: 0, 
                x: 0 
            } : {}}
            transition={{ 
                duration: 0.6, 
                delay,
                ease: [0.25, 0.1, 0.25, 1]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}