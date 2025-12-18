import React, { useEffect, useRef } from 'react';

export default function DigitalDataBackground({ 
    color = "#818cf8", // Indigo-400 (Brighter)
    speed = 1, 
    density = 0.6, 
    opacity = 1,
    fontSize = 16 
}) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        let animationFrameId;
        let w, h;
        let columns = [];
        // const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
        // Using the "222" style numbers and some tech chars
        const chars = "0123456789"; 

        const resize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            
            const colCount = Math.floor(w / fontSize);
            columns = [];
            for (let i = 0; i < colCount; i++) {
                // Random starting y position
                columns[i] = Math.random() * h;
            }
        };

        const draw = () => {
            // Semi-transparent black to create trails
            ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
            ctx.fillRect(0, 0, w, h);

            ctx.fillStyle = color;
            ctx.font = `bold ${fontSize}px monospace`; 
            ctx.shadowBlur = 8;
            ctx.shadowColor = color;

            for (let i = 0; i < columns.length; i++) {
                if (Math.random() > density) continue;

                const text = chars[Math.floor(Math.random() * chars.length)];
                
                ctx.fillText(text, i * fontSize, columns[i]);

                // Reset to top randomly or move down
                if (columns[i] > h && Math.random() > 0.975) {
                    columns[i] = 0;
                }
                
                columns[i] += fontSize * speed; // Move down by font size * speed factor
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resize);
        resize();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [color, speed, density]);

    return (
        <canvas 
            ref={canvasRef} 
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: opacity }}
        />
    );
}