import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function MouseGlowText({
  children,
  className = "",
  glowColor = "rgba(255, 255, 255, 0.5)",
  as: Component = motion.div,
  ...props
}) {
  const ref = useRef(null);
  
  // Use MotionValues for high-performance updates without re-renders
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Add spring physics for natural, fluid movement (less robotic)
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center
    // We limit the range to prevent the shadow from moving too far away
    mouseX.set((e.clientX - centerX) / 10);
    mouseY.set((e.clientY - centerY) / 10);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Create dynamic shadows based on the sprung values
  // Layer 1: Sharp, close shadow for definition
  // Layer 2: Softer, colorful glow for the "light" effect
  // Layer 3: Wide, subtle ambient dispersion
  const textShadow = useTransform(
    [x, y],
    ([latestX, latestY]) => {
        // Invert direction for the shadow (light source logic)
        const sX = latestX * -1;
        const sY = latestY * -1;
        return `
            ${sX * 0.5}px ${sY * 0.5}px 0px rgba(255,255,255,0.1),
            ${sX}px ${sY}px 4px ${glowColor},
            ${sX * 2}px ${sY * 2}px 20px ${glowColor.replace(')', ', 0.4)').replace('rgb', 'rgba')}
        `;
    }
  );

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-block cursor-default select-none ${className}`}
      style={{
        textShadow,
        ...props.style,
      }}
      {...props}
    >
      {/* Use a mask or clip to ensure the gradient text stays sharp on top */}
      <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-br from-white via-indigo-100 to-white/80">
          {children}
      </span>
    </Component>
  );
}