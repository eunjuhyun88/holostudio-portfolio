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
      
      // Reduced movement range for better legibility (less "shaky")
      // Dividing by larger numbers makes the movement smaller
      const x = (centerX - e.clientX) / 50; 
      const y = (centerY - e.clientY) / 50;
      
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
        // Using the provided glowColor for the shadows to match the theme
        // Reduced offsets for sharper text
        textShadow: `
            ${position.x * 0.5}px ${position.y * 0.5}px 0px rgba(255,255,255,0.1),
            ${position.x * 1.5}px ${position.y * 1.5}px 4px ${glowColor},
            ${position.x * 3.0}px ${position.y * 3.0}px 12px ${glowColor}
        `,
        ...props.style,
      }}
      {...props}
    >
      <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/90">
          {children}
      </span>
    </Component>
  );
}