import React, { useRef, useState, useEffect } from "react";

export default function MouseGlowText({
  children,
  className = "",
  glowColor = "rgba(255, 255, 255, 0.5)",
  as: Component = "div",
  ...props
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate distance from center, capped for subtlety
      const x = (centerX - e.clientX) / 20; 
      const y = (centerY - e.clientY) / 20;
      
      setPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Component
      ref={ref}
      className={`relative inline-block cursor-default transition-all duration-100 ${className}`}
      style={{
        // Using text-shadow for a sharper, multi-colored layered look
        // Layer 1: White/Bright core (closest)
        // Layer 2: Cyan/Blue tint (middle)
        // Layer 3: Purple/Pink tint (outer)
        textShadow: `
            ${position.x * 0.2}px ${position.y * 0.2}px 0px rgba(255,255,255,0.7),
            ${position.x * 0.5}px ${position.y * 0.5}px 2px rgba(34, 211, 238, 0.5),
            ${position.x * 0.8}px ${position.y * 0.8}px 4px rgba(168, 85, 247, 0.4)
        `,
        ...props.style,
      }}
      {...props}
    >
      <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-br from-white via-indigo-50 to-white/90">
          {children}
      </span>
    </Component>
  );
}