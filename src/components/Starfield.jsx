import React, { useEffect, useRef } from 'react';

const Starfield = ({ speed = 0.1, density = 400 }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        let animationFrameId;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', resize);
        resize();

        // Initialize stars
        const stars = Array.from({ length: density }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            z: Math.random() * 2 + 0.5, // Depth factor for parallax
            size: Math.random() * 1.5,
            alpha: Math.random(),
            twinkleSpeed: Math.random() * 0.02 + 0.005
        }));

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            
            // Draw background (deep space)
            // We rely on the parent container's black background, or draw it here
            // ctx.fillStyle = '#000';
            // ctx.fillRect(0, 0, width, height);

            stars.forEach(star => {
                // Move stars slowly for "floating" effect
                star.y += speed * star.z;
                if (star.y > height) {
                    star.y = 0;
                    star.x = Math.random() * width;
                }

                // Twinkle effect
                star.alpha += star.twinkleSpeed;
                if (star.alpha > 1 || star.alpha < 0.2) {
                    star.twinkleSpeed = -star.twinkleSpeed;
                }

                const opacity = Math.max(0.1, Math.min(1, star.alpha));
                ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size * (star.z * 0.8), 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = window.requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [speed, density]);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

export default Starfield;