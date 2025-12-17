import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Background3D() {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Scene Setup
        const scene = new THREE.Scene();
        // Darker fog to blend into the black background
        scene.fog = new THREE.FogExp2(0x050505, 0.002);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 30;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mountRef.current.appendChild(renderer.domElement);

        const worldGroup = new THREE.Group();
        scene.add(worldGroup);

        // 1. Fine Particle Cloud (Grid of Points)
        // Use BoxGeometry to create a cube-shaped cloud of points
        const particleGeo = new THREE.BoxGeometry(40, 40, 40, 40, 40, 40);
        const particleMat = new THREE.PointsMaterial({
            color: 0x818cf8, // Indigo-400
            size: 0.02, // Extremely fine particles as requested
            transparent: true,
            opacity: 0.4,
            sizeAttenuation: true,
        });
        const particleSystem = new THREE.Points(particleGeo, particleMat);
        worldGroup.add(particleSystem);

        // 2. Floating Wireframe Blocks
        // Create many cubes floating around to match the "blocks" reference
        const boxCount = 150;
        const boxGeo = new THREE.BoxGeometry(1, 1, 1);
        const boxMat = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            wireframe: true,
            transparent: true,
            opacity: 0.08, // Subtle
        });
        const boxes = new THREE.InstancedMesh(boxGeo, boxMat, boxCount);
        
        const dummy = new THREE.Object3D();
        const randoms = [];
        
        for (let i = 0; i < boxCount; i++) {
            // Distribute in a cloud
            const range = 50;
            dummy.position.x = (Math.random() - 0.5) * range;
            dummy.position.y = (Math.random() - 0.5) * range;
            dummy.position.z = (Math.random() - 0.5) * range;
            
            // Random rotation
            dummy.rotation.x = Math.random() * Math.PI;
            dummy.rotation.y = Math.random() * Math.PI;
            
            // Varied scales for "blocks" look
            const s = Math.random() * 3 + 0.5;
            dummy.scale.set(s, s, s);
            
            dummy.updateMatrix();
            boxes.setMatrixAt(i, dummy.matrix);
            
            // Store random values for animation
            randoms.push({
                speed: (Math.random() - 0.5) * 0.01,
                axis: new THREE.Vector3(Math.random(), Math.random(), Math.random()).normalize()
            });
        }
        worldGroup.add(boxes);

        // 3. Central Large Cube Structure (Wireframe)
        const centralGeo = new THREE.BoxGeometry(25, 25, 25, 4, 4, 4);
        const centralMat = new THREE.LineBasicMaterial({
            color: 0x4f46e5, // Indigo-600
            transparent: true,
            opacity: 0.05,
        });
        const centralWireframe = new THREE.LineSegments(new THREE.WireframeGeometry(centralGeo), centralMat);
        worldGroup.add(centralWireframe);

        // Animation Loop
        let animationFrameId;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);

            const time = Date.now() * 0.0005;

            // Rotate entire system
            worldGroup.rotation.y = time * 0.1;
            worldGroup.rotation.x = Math.sin(time * 0.2) * 0.1;

            // "Magnify" / Breathe effect
            // Move camera in and out slowly to simulate expanding/contracting blocks
            const zoom = Math.sin(time * 0.5) * 5; // +/- 5 units
            camera.position.z = 30 + zoom;

            // Animate individual boxes? 
            // Updating InstancedMesh every frame is heavy, sticking to camera/group movement for performance.

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
            particleGeo.dispose();
            particleMat.dispose();
            boxGeo.dispose();
            boxMat.dispose();
            centralGeo.dispose();
            centralMat.dispose();
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} className="fixed inset-0 z-0 pointer-events-none" />;
}