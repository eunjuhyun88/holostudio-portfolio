import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const CYBER_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,./<>?";

export default function ScrambleText({ children, className = "", speed = 30, revealSpeed = 0.5, delay = 0 }) {
    const [displayText, setDisplayText] = useState(children); // Initialize with full text for SEO/SSR if needed, but we'll override on mount
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const intervalRef = useRef(null);

    useEffect(() => {
        // Initial scramble state when not viewed yet (optional, or just static)
        // If we want it to start scrambled immediately upon mounting even before view:
        // setDisplayText(children.split('').map(() => CYBER_CHARS[Math.floor(Math.random() * CYBER_CHARS.length)]).join(''));
    }, []);

    useEffect(() => {
        if (!isInView) return;

        const originalText = children;
        let iteration = 0;

        // Delay start if requested
        const startTimeout = setTimeout(() => {
            clearInterval(intervalRef.current);

            intervalRef.current = setInterval(() => {
                setDisplayText(
                    originalText
                        .split("")
                        .map((char, index) => {
                            if (index < iteration) {
                                return originalText[index];
                            }
                            // Keep spaces as spaces for layout stability, or scramble them too for chaos
                            if (char === ' ') return ' '; 
                            
                            return CYBER_CHARS[Math.floor(Math.random() * CYBER_CHARS.length)];
                        })
                        .join("")
                );

                if (iteration >= originalText.length) {
                    clearInterval(intervalRef.current);
                    setDisplayText(originalText); // Ensure final state is clean
                }

                iteration += revealSpeed; 
            }, speed);
        }, delay);

        return () => {
            clearTimeout(startTimeout);
            clearInterval(intervalRef.current);
        };
    }, [children, isInView, speed, revealSpeed, delay]);

    return (
        <span ref={ref} className={className}>
            {displayText}
        </span>
    );
}