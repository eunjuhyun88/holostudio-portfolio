import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function MouseGlowText({
  children,
  className = "",
  glowColor = "rgba(255, 255, 255, 0.5)",
  as: Component = "div",
  ...props
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  // Convert hex/rgba to a multi-color gradient style for the "sharper" look
  // We'll use a mix-blend mode or text-shadow stack to create the "11 file" look
  // The user wants "colors mixed" and "less blurry"

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-block cursor-default ${className}`}
      style={{
        // Use a layered shadow for sharpness and color mixing
        filter: `
            drop-shadow(${position.x * -0.1}px ${position.y * -0.1}px 0px rgba(255,255,255,0.9))
            drop-shadow(${position.x * -0.2}px ${position.y * -0.2}px 2px ${glowColor})
            drop-shadow(${position.x * -0.3}px ${position.y * -0.3}px 8px ${glowColor})
        `,
        ...props.style,
      }}
      {...props}
    >
      {/* Main Text with Gradient - giving it that "mixed color" look */}
      <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-white">
          {children}
      </span>
      
      {/* Optional: Add a subtle overlay for the "mixed color" effect if needed */}
    </Component>
  );
}