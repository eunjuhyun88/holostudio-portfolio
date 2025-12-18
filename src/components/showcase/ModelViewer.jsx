import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { Loader2 } from 'lucide-react';

export default function ModelViewer({ url, type }) {
    const mountRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // If video type, render video player directly
    if (type === 'mp4' || type === 'mov') {
        return (
            <div className="relative w-full h-full bg-white/5 rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center">
                <video 
                    src={url} 
                    controls 
                    className="max-w-full max-h-full w-full h-full object-contain"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>
        );
    }

    useEffect(() => {
        if (!mountRef.current || !url) return;

        // Scene setup
        const scene = new THREE.Scene();
        // Transparent background to blend with app
        scene.background = null; 

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 1);
        dirLight.position.set(5, 10, 7.5);
        scene.add(dirLight);
        
        const backLight = new THREE.DirectionalLight(0xffffff, 0.5);
        backLight.position.set(-5, -5, -5);
        scene.add(backLight);

        // Camera
        const camera = new THREE.PerspectiveCamera(45, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
        camera.position.set(0, 0, 5);

        // Renderer
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;

        // Load Model
        let loader;
        if (type === 'obj') {
            loader = new OBJLoader();
        } else {
            loader = new GLTFLoader();
        }

        setLoading(true);
        setError(null);

        loader.load(
            url,
            (object) => {
                let model = type === 'obj' ? object : object.scene;
                
                // Center and Scale model
                const box = new THREE.Box3().setFromObject(model);
                const size = box.getSize(new THREE.Vector3());
                const center = box.getCenter(new THREE.Vector3());

                // Reset position to center
                model.position.x += (model.position.x - center.x);
                model.position.y += (model.position.y - center.y);
                model.position.z += (model.position.z - center.z);

                // Scale to fit
                const maxDim = Math.max(size.x, size.y, size.z);
                const scale = 3 / maxDim; // Fit within 3 units
                model.scale.multiplyScalar(scale);

                scene.add(model);
                setLoading(false);

                // Add simple rotation animation
                const animate = () => {
                    requestAnimationFrame(animate);
                    controls.update();
                    renderer.render(scene, camera);
                };
                animate();
            },
            (xhr) => {
                // Progress
                // console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            (err) => {
                console.error('An error happened', err);
                setError('Failed to load model');
                setLoading(false);
            }
        );

        // Resize handler
        const handleResize = () => {
            if (!mountRef.current) return;
            camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, [url, type]);

    return (
        <div className="relative w-full h-full bg-white/5 rounded-3xl overflow-hidden border border-white/10">
            <div ref={mountRef} className="w-full h-full" />
            
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-10">
                    <div className="flex flex-col items-center gap-2">
                        <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
                        <span className="text-sm text-neutral-300">Loading Model...</span>
                    </div>
                </div>
            )}
            
            {error && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
                    <span className="text-red-400">{error}</span>
                </div>
            )}

            <div className="absolute bottom-4 right-4 text-xs text-neutral-500 bg-black/50 px-3 py-1 rounded-full backdrop-blur-md">
                Left Click: Rotate • Right Click: Pan • Scroll: Zoom
            </div>
        </div>
    );
}