import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Background3D({ theme = 'dark' }) {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Scene Setup
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(theme === 'dark' ? 0x050505 : 0xf5f5f5, 0.002);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 30;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mountRef.current.appendChild(renderer.domElement);

        // --- 1. THE MAIN 3D EFFECT (ICOSAHEDRON CRYSTAL) ---
        // Restoring the original central object but with finer particles
        const geometry = new THREE.IcosahedronGeometry(15, 2);
        
        // Crystal particles - Subtle iridescent in light mode
        const material = new THREE.PointsMaterial({
            color: theme === 'dark' ? 0x818cf8 : 0x94a3b8, // Slate blue for crystal
            size: theme === 'dark' ? 0.1 : 0.12,
            transparent: true,
            opacity: theme === 'dark' ? 0.9 : 0.5,
            sizeAttenuation: true,
        });

        // Add noise to vertices
        const positionAttribute = geometry.attributes.position;
        const vertex = new THREE.Vector3();
        for (let i = 0; i < positionAttribute.count; i++) {
            vertex.fromBufferAttribute(positionAttribute, i);
            vertex.x += (Math.random() - 0.5) * 1.0;
            vertex.y += (Math.random() - 0.5) * 1.0;
            vertex.z += (Math.random() - 0.5) * 1.0;
            positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
        }

        const crystalMesh = new THREE.Points(geometry, material);
        scene.add(crystalMesh);

        // Inner core - Subtle aurora glow in light mode
        const coreGeometry = new THREE.IcosahedronGeometry(8, 1);
        const coreMaterial = new THREE.PointsMaterial({
            color: theme === 'dark' ? 0xffffff : 0xc4b5fd, // Lavender
            size: theme === 'dark' ? 0.05 : 0.08,
            transparent: true,
            opacity: theme === 'dark' ? 0.6 : 0.4,
        });
        const corePoints = new THREE.Points(coreGeometry, coreMaterial);
        scene.add(corePoints);

        // Crystal layers for light mode - Iridescent effect
        if (theme === 'light') {
            const holo1Geo = new THREE.IcosahedronGeometry(10, 1);
            const holo1Mat = new THREE.PointsMaterial({
                color: 0xa78bfa, // Purple
                size: 0.10,
                transparent: true,
                opacity: 0.3,
            });
            const holo1 = new THREE.Points(holo1Geo, holo1Mat);
            scene.add(holo1);

            const holo2Geo = new THREE.IcosahedronGeometry(13, 1);
            const holo2Mat = new THREE.PointsMaterial({
                color: 0x60a5fa, // Blue
                size: 0.12,
                transparent: true,
                opacity: 0.25,
            });
            const holo2 = new THREE.Points(holo2Geo, holo2Mat);
            scene.add(holo2);
        }

        // Wireframe - Subtle crystal lines in light mode
        const wireframeMaterial = new THREE.LineBasicMaterial({ 
            color: theme === 'dark' ? 0x6366f1 : 0x94a3b8, // Slate for crystal
            transparent: true, 
            opacity: theme === 'dark' ? 0.3 : 0.25 
        });
        const wireframe = new THREE.LineSegments(new THREE.WireframeGeometry(geometry), wireframeMaterial);
        scene.add(wireframe);


        // --- 2. BACKGROUND BLOCKS & FIELD ---
        // Adding the requested floating blocks as background environment
        const blocksGroup = new THREE.Group();
        scene.add(blocksGroup);

        // Instanced Blocks
        const boxCount = 200;
        const boxGeo = new THREE.BoxGeometry(1, 1, 1);
        const boxMat = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            wireframe: true,
            transparent: true,
            opacity: 0.05, // Very subtle background
        });
        const boxes = new THREE.InstancedMesh(boxGeo, boxMat, boxCount);
        
        const dummy = new THREE.Object3D();
        
        for (let i = 0; i < boxCount; i++) {
            // Spread them wider to form a tunnel/field
            const range = 80;
            dummy.position.x = (Math.random() - 0.5) * range;
            dummy.position.y = (Math.random() - 0.5) * range;
            dummy.position.z = (Math.random() - 0.5) * range - 10; // Push some back
            
            dummy.rotation.x = Math.random() * Math.PI;
            dummy.rotation.y = Math.random() * Math.PI;
            
            const s = Math.random() * 2 + 0.5;
            dummy.scale.set(s, s, s);
            
            dummy.updateMatrix();
            boxes.setMatrixAt(i, dummy.matrix);
        }
        blocksGroup.add(boxes);

        // Fine Dust Particles (Warp Effect)
        const dustGeo = new THREE.BufferGeometry();
        const dustCount = 4000; 
        const dustPos = new Float32Array(dustCount * 3);
        // Store initial Z positions to reset them
        for(let i=0; i<dustCount; i++) {
            dustPos[i*3] = (Math.random() - 0.5) * 200; // x
            dustPos[i*3+1] = (Math.random() - 0.5) * 200; // y
            dustPos[i*3+2] = (Math.random() - 0.5) * 200; // z
        }
        dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));

        const dustMat = new THREE.PointsMaterial({
            color: theme === 'dark' ? 0xa5b4fc : 0xbfdbfe, // Light blue particles
            size: theme === 'dark' ? 0.08 : 0.06, 
            transparent: true,
            opacity: theme === 'dark' ? 0.6 : 0.3,
            blending: THREE.AdditiveBlending
        });
        const dustSystem = new THREE.Points(dustGeo, dustMat);
        blocksGroup.add(dustSystem);

        // Animation Loop
        let animationFrameId;
        let targetSpeed = 0.2; // Base speed

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            const time = Date.now() * 0.001;

            // Scroll interaction for warp speed
            // Using window.scrollY directly for simplicity
            const scrollFactor = Math.min(window.scrollY * 0.005, 2.0); 
            
            // Random surge effect for "occasional emphasis"
            // occasional burst of speed/intensity
            const timeSeconds = Date.now() / 1000;
            const surge = Math.sin(timeSeconds * 0.5) > 0.9 ? 2.0 : 1.0; // Every few seconds, double speed
            const currentSpeed = (0.1 + scrollFactor) * surge; 

            // Animate Dust (Warp Effect)
            const positions = dustSystem.geometry.attributes.position.array;
            
            // Pulse color intensity during surge - Aurora shimmer in light mode
            if (surge > 1.0) {
                if (theme === 'dark') {
                    dustMat.color.setHex(0xc7d2fe);
                    dustMat.opacity = 0.8;
                } else {
                    dustMat.color.setHex(0xc4b5fd); // Lavender
                    dustMat.opacity = 0.5;
                }
            } else {
                if (theme === 'dark') {
                    dustMat.color.setHex(0xa5b4fc);
                    dustMat.opacity = 0.6;
                } else {
                    dustMat.color.setHex(0xbfdbfe); // Light blue
                    dustMat.opacity = 0.3;
                }
            }

            for(let i=0; i<dustCount; i++) {
                // Move particles towards camera (positive Z)
                positions[i*3+2] += currentSpeed; 

                // If particle passes camera, reset to back
                if(positions[i*3+2] > 50) {
                    positions[i*3+2] = -150;
                    // Randomize X/Y slightly on reset for variety
                    positions[i*3] = (Math.random() - 0.5) * 200;
                    positions[i*3+1] = (Math.random() - 0.5) * 200;
                }
            }
            dustSystem.geometry.attributes.position.needsUpdate = true;

            // Add some rotation to the tunnel
            dustSystem.rotation.z = time * 0.05;

            // Animate Crystal (The Main 3D Effect) - Slowed down
            crystalMesh.rotation.y += 0.001;
            crystalMesh.rotation.x += 0.0005;
            corePoints.rotation.y -= 0.002;
            corePoints.rotation.x -= 0.001;
            wireframe.rotation.y += 0.001;
            wireframe.rotation.x += 0.0005;

            // Animate Background Blocks - Slowed down
            blocksGroup.rotation.z = time * 0.02; 
            blocksGroup.rotation.x = Math.sin(time * 0.1) * 0.02;

            // Gentle zoom breathe - reduced to not interfere with warp
            const zoom = Math.sin(time * 0.3) * 1; 
            camera.position.z = 30 + zoom;

            // Float entire scene slightly
            scene.position.y = Math.sin(time * 0.5) * 0.5;

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