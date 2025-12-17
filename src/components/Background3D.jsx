import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Background3D() {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Scene Setup
        const scene = new THREE.Scene();
        // Add subtle fog to blend with the dark background
        scene.fog = new THREE.FogExp2(0x050505, 0.002);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 30;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mountRef.current.appendChild(renderer.domElement);

        // Geometry - Create a complex geometric shape using points
        // Using Icosahedron as base for a "tech/crystal" look
        const geometry = new THREE.IcosahedronGeometry(15, 2);
        
        // Create custom points material
        const material = new THREE.PointsMaterial({
            color: 0x818cf8, // Indigo-400 equivalent (Brighter)
            size: 0.22, // Larger points
            transparent: true,
            opacity: 1.0, // Full opacity
            sizeAttenuation: true,
        });

        // Add some random noise to vertices to make it look more "organic/glitchy" like the reference
        const positionAttribute = geometry.attributes.position;
        const vertex = new THREE.Vector3();
        for (let i = 0; i < positionAttribute.count; i++) {
            vertex.fromBufferAttribute(positionAttribute, i);
            // Distort slightly
            vertex.x += (Math.random() - 0.5) * 1.0;
            vertex.y += (Math.random() - 0.5) * 1.0;
            vertex.z += (Math.random() - 0.5) * 1.0;
            positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
        }

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        // Secondary geometry - inner core
        const coreGeometry = new THREE.IcosahedronGeometry(8, 1);
        const coreMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.15, // Larger core points
            transparent: true,
            opacity: 0.8, // More visible core
        });
        const corePoints = new THREE.Points(coreGeometry, coreMaterial);
        scene.add(corePoints);

        // Connecting lines for the outer shape to give it structure
        const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0.3 }); // Brighter and more visible wireframe
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

    return <div ref={mountRef} className="fixed inset-0 z-0 pointer-events-none" />;
}