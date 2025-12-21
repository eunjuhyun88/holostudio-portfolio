import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function MeshGradient({ theme = 'light' }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let time = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // Define gradient blobs
        const blobs = [
            { 
                x: 0.2, 
                y: 0.3, 
                color: theme === 'dark' ? [99, 102, 241] : [165, 180, 252], // indigo
                speedX: 0.0003,
                speedY: 0.0002,
                radiusBase: 0.25
            },
            { 
                x: 0.8, 
                y: 0.2, 
                color: theme === 'dark' ? [168, 85, 247] : [196, 181, 253], // purple
                speedX: -0.0002,
                speedY: 0.0003,
                radiusBase: 0.3
            },
            { 
                x: 0.5, 
                y: 0.7, 
                color: theme === 'dark' ? [79, 70, 229] : [167, 139, 250], // violet
                speedX: 0.00025,
                speedY: -0.00025,
                radiusBase: 0.28
            },
            { 
                x: 0.1, 
                y: 0.8, 
                color: theme === 'dark' ? [124, 58, 237] : [216, 180, 254], // purple-light
                speedX: -0.00015,
                speedY: -0.0002,
                radiusBase: 0.22
            }
        ];

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            time += 1;

            // Clear with background
            ctx.fillStyle = theme === 'dark' ? 'rgba(5, 5, 5, 1)' : 'rgba(255, 255, 255, 1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw each blob
            blobs.forEach((blob, idx) => {
                // Animate position
                blob.x += blob.speedX;
                blob.y += blob.speedY;

                // Bounce off edges
                if (blob.x < 0 || blob.x > 1) blob.speedX *= -1;
                if (blob.y < 0 || blob.y > 1) blob.speedY *= -1;

                // Keep within bounds
                blob.x = Math.max(0, Math.min(1, blob.x));
                blob.y = Math.max(0, Math.min(1, blob.y));

                // Pulsing radius
                const pulse = Math.sin(time * 0.001 + idx * 1.5) * 0.05 + 1;
                const radius = Math.min(canvas.width, canvas.height) * blob.radiusBase * pulse;

                // Create radial gradient
                const gradient = ctx.createRadialGradient(
                    blob.x * canvas.width,
                    blob.y * canvas.height,
                    0,
                    blob.x * canvas.width,
                    blob.y * canvas.height,
                    radius
                );

                // Color stops with smooth falloff
                const alpha = theme === 'dark' ? 0.15 : 0.3;
                gradient.addColorStop(0, `rgba(${blob.color[0]}, ${blob.color[1]}, ${blob.color[2]}, ${alpha})`);
                gradient.addColorStop(0.5, `rgba(${blob.color[0]}, ${blob.color[1]}, ${blob.color[2]}, ${alpha * 0.5})`);
                gradient.addColorStop(1, `rgba(${blob.color[0]}, ${blob.color[1]}, ${blob.color[2]}, 0)`);

                // Draw blob
                ctx.globalCompositeOperation = 'screen'; // Blend mode for overlapping
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            });

            // Reset composite operation
            ctx.globalCompositeOperation = 'source-over';
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resize);
        };
    }, [theme]);

    return (
        <motion.canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        />
    );
}