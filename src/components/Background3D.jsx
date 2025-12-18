import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Background3D() {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Scene Setup
        const scene = new THREE.Scene();
        // Add subtle fog for depth
        scene.fog = new THREE.FogExp2(0x000000, 0.001);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
        camera.position.z = 100;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mountRef.current.appendChild(renderer.domElement);

        // --- GALAXY VORTEX EFFECT ---
        
        // 1. Core Light (The center of the suction)
        const coreGeo = new THREE.SphereGeometry(2, 32, 32);
        const coreMat = new THREE.MeshBasicMaterial({
            color: 0x6366f1, // Indigo
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });
        const core = new THREE.Mesh(coreGeo, coreMat);
        scene.add(core);
        
        // Core Glow
        const glowGeo = new THREE.SphereGeometry(15, 32, 32);
        const glowMat = new THREE.MeshBasicMaterial({
            color: 0x4338ca, // Darker Indigo
            transparent: true,
            opacity: 0.15,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending
        });
        const glow = new THREE.Mesh(glowGeo, glowMat);
        scene.add(glow);


        // 2. Galaxy Particles (Spiraling In)
        const particleCount = 4000;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);
        const speeds = new Float32Array(particleCount);
        const angles = new Float32Array(particleCount);
        const radii = new Float32Array(particleCount);

        const color = new THREE.Color();
        const colors = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            // Initial random setup
            const radius = Math.random() * 200 + 20; // Distance from center
            const angle = Math.random() * Math.PI * 2;
            
            // Convert polar to cartesian
            positions[i * 3] = Math.cos(angle) * radius;
            positions[i * 3 + 1] = Math.sin(angle) * radius; // Flattened galaxy
            positions[i * 3 + 2] = (Math.random() - 0.5) * 50; // Some Z spread

            // Store custom data for animation
            radii[i] = radius;
            angles[i] = angle;
            speeds[i] = (Math.random() * 0.2) + 0.05; // Random speed

            sizes[i] = Math.random() * 1.5;

            // Colors: Mix of Indigo, Blue, and White
            if (Math.random() > 0.5) {
                color.setHex(0x818cf8); // Indigo 400
            } else if (Math.random() > 0.5) {
                color.setHex(0xc7d2fe); // Indigo 200
            } else {
                color.setHex(0xffffff); // White
            }
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.PointsMaterial({
            size: 0.5,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            sizeAttenuation: true
        });

        const galaxy = new THREE.Points(geometry, material);
        scene.add(galaxy);

        // 3. Floating Debris (Subtle background movement)
        const debrisCount = 500;
        const debrisGeo = new THREE.BufferGeometry();
        const debrisPos = new Float32Array(debrisCount * 3);
        for(let i=0; i<debrisCount*3; i++) {
            debrisPos[i] = (Math.random() - 0.5) * 400;
        }
        debrisGeo.setAttribute('position', new THREE.BufferAttribute(debrisPos, 3));
        const debrisMat = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.2,
            transparent: true,
            opacity: 0.3
        });
        const debris = new THREE.Points(debrisGeo, debrisMat);
        scene.add(debris);


        // Animation Loop
        let animationFrameId;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            const time = Date.now() * 0.001;

            // Animate Galaxy Particles (Suction Effect)
            const positions = galaxy.geometry.attributes.position.array;
            
            for (let i = 0; i < particleCount; i++) {
                // Update properties
                radii[i] -= speeds[i] * 0.5; // Move towards center
                angles[i] += speeds[i] * 0.02; // Rotate

                // Reset if sucked in too close
                if (radii[i] < 2) {
                    radii[i] = 200; // Reset to outer edge
                    angles[i] = Math.random() * Math.PI * 2;
                }

                // Update position with spiral math
                const i3 = i * 3;
                positions[i3] = Math.cos(angles[i]) * radii[i];
                positions[i3 + 1] = Math.sin(angles[i]) * radii[i] * 0.8; // Elliptical orbit
                // Add some wave/wobble on Z for "organic" feel
                positions[i3 + 2] += Math.sin(time + radii[i] * 0.1) * 0.05;
            }
            galaxy.geometry.attributes.position.needsUpdate = true;
            
            // Rotate entire galaxy slowly
            galaxy.rotation.z = time * 0.05;
            galaxy.rotation.x = Math.sin(time * 0.1) * 0.1; // Subtle tilt

            // Pulse Core
            const scale = 1 + Math.sin(time * 2) * 0.05;
            core.scale.set(scale, scale, scale);
            glow.scale.set(scale * 1.1, scale * 1.1, scale * 1.1);

            // Debris gentle float
            debris.rotation.y = time * 0.02;

            // Camera subtle breath
            camera.position.z = 100 + Math.sin(time * 0.5) * 5;

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