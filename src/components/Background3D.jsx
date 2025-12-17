import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Background3D() {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Scene Setup
        const scene = new THREE.Scene();
        // Add subtle fog to blend with the dark background - adjusted for holographic feel
        scene.fog = new THREE.FogExp2(0x050505, 0.002);
        
        // Add lights to enhance the holographic effect if we used standard material, 
        // but for Points material lights don't affect it much. 
        // However, we can add a subtle ambient light in case we add meshes later.
        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 30;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mountRef.current.appendChild(renderer.domElement);

        // Geometry - Create a complex geometric shape using points
        // Using Icosahedron as base for a "tech/crystal" look
        const geometry = new THREE.IcosahedronGeometry(15, 2);
        
        // Create custom points material with vertex colors
        const material = new THREE.PointsMaterial({
            vertexColors: true,
            size: 0.2,
            transparent: true,
            opacity: 0.9,
            sizeAttenuation: true,
            blending: THREE.AdditiveBlending,
        });

        // Add some random noise and HOLOGRAPHIC colors
        const positionAttribute = geometry.attributes.position;
        const colors = [];
        const vertex = new THREE.Vector3();
        const color = new THREE.Color();

        // Holographic Palette
        const palette = [
            new THREE.Color('#00ffff'), // Cyan
            new THREE.Color('#ff00ff'), // Magenta
            new THREE.Color('#8a2be2'), // BlueViolet
            new THREE.Color('#00bfff'), // DeepSkyBlue
            new THREE.Color('#e0ffff'), // LightCyan
        ];

        for (let i = 0; i < positionAttribute.count; i++) {
            vertex.fromBufferAttribute(positionAttribute, i);
            
            // Distort slightly
            vertex.x += (Math.random() - 0.5) * 1.0;
            vertex.y += (Math.random() - 0.5) * 1.0;
            vertex.z += (Math.random() - 0.5) * 1.0;
            positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);

            // Assign holographic color based on position
            const mixedColor = palette[Math.floor(Math.random() * palette.length)].clone();
            // Add a gradient effect based on Y position
            const t = (vertex.y + 15) / 30;
            mixedColor.lerp(new THREE.Color('#ffffff'), t * 0.2); // Add some shine
            
            colors.push(mixedColor.r, mixedColor.g, mixedColor.b);
        }

        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        const points = new THREE.Points(geometry, material);
        scene.add(points);

        // Secondary geometry - inner core
        const coreGeometry = new THREE.IcosahedronGeometry(8, 1);
        const coreMaterial = new THREE.PointsMaterial({
            color: 0xccffff, // Light cyan glow
            size: 0.1,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
        });
        const corePoints = new THREE.Points(coreGeometry, coreMaterial);
        scene.add(corePoints);

        // Connecting lines for the outer shape to give it structure
        const wireframeMaterial = new THREE.LineBasicMaterial({ 
            color: 0xffffff, 
            transparent: true, 
            opacity: 0.08,
            blending: THREE.AdditiveBlending
        });
        const wireframe = new THREE.LineSegments(new THREE.WireframeGeometry(geometry), wireframeMaterial);
        scene.add(wireframe);

        // Animation Loop
        let animationFrameId;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);

            // Rotate entire system
            points.rotation.y += 0.002;
            points.rotation.x += 0.001;

            corePoints.rotation.y -= 0.004;
            corePoints.rotation.x -= 0.002;

            wireframe.rotation.y += 0.002;
            wireframe.rotation.x += 0.001;

            // Gentle floating movement
            const time = Date.now() * 0.001;
            scene.position.y = Math.sin(time * 0.5) * 1;

            renderer.render(scene, camera);
        };

        animate();

        // Handle Resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} className="fixed inset-0 z-0 pointer-events-none opacity-60" />;
}