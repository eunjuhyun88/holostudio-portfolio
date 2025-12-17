import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Products() {
    const products = [
        {
            id: 'aidguardian',
            name: 'AiD Guardian',
            path: 'AidGuardian',
            tagline: 'Imagine if content safety was autonomous and instant.',
            description: 'Enterprise-grade safety and compliance engine for AI.',
            theme: 'bg-[#1e1b4b] text-indigo-100', // Indigo-950
            accent: 'text-indigo-400',
            button: 'bg-white text-indigo-950 hover:bg-indigo-50',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070'
        },
        {
            id: 'playarts',
            name: 'PlayArts',
            path: 'PlayArts',
            tagline: 'Imagine if creators truly owned the value they generate.',
            description: 'The Proof-of-Creation protocol for verifiable AI media.',
            theme: 'bg-[#1a2e05] text-lime-100', // Lime-950/Dark
            accent: 'text-[#ccff00]',
            button: 'bg-[#ccff00] text-black hover:bg-[#b3e600]',
            image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1964'
        },
        {
            id: 'elememetal',
            name: 'EleMEMEtal',
            path: 'Elememetal',
            tagline: 'Imagine if gaming assets were as liquid as elements.',
            description: 'A competitive card battler built on elemental mechanics.',
            theme: 'bg-[#2c1205] text-orange-100', // Orange-950
            accent: 'text-orange-500',
            button: 'bg-orange-500 text-white hover:bg-orange-600',
            image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=1974'
        },
        {
            id: 'stockhoo',
            name: 'Stockhoo',
            path: 'Stockhoo',
            tagline: 'Imagine if trading intelligence was actually intelligent.',
            description: 'Zone-based AI trading agent optimized via DPO.',
            theme: 'bg-[#022c22] text-emerald-100', // Emerald-950
            accent: 'text-emerald-400',
            button: 'bg-emerald-500 text-white hover:bg-emerald-600',
            image: 'https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&q=80&w=1964'
        }
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white pt-24">
             <div className="max-w-[1600px] mx-auto px-4 md:px-8 mb-16 text-center">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                    Our <span className="text-indigo-500">Products</span>
                </h1>
                <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                    Building the infrastructure for the next generation of digital trust and value.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                {products.map((product, index) => (
                    <Link 
                        key={product.id} 
                        to={createPageUrl(product.path)}
                        className={`group relative min-h-[500px] md:min-h-[600px] p-8 md:p-16 flex flex-col justify-between overflow-hidden transition-all duration-500 ${product.theme}`}
                    >
                        {/* Background Hover Effect */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        
                        {/* Content */}
                        <div className="relative z-20">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className={`text-2xl md:text-3xl font-bold tracking-tight ${product.accent}`}>
                                    {product.name}
                                </h3>
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md group-hover:scale-110 transition-transform duration-300`}>
                                    <ArrowUpRight className="w-5 h-5 text-white" />
                                </div>
                            </div>
                            
                            <h2 className="text-3xl md:text-5xl font-serif leading-[1.1] mb-6 max-w-xl">
                                {product.tagline}
                            </h2>
                            <p className="text-lg md:text-xl opacity-80 max-w-md font-light">
                                {product.description}
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="relative z-20 mt-12 flex items-center gap-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                             <span className="text-sm font-bold uppercase tracking-widest border-b border-current pb-1">Read the story</span>
                             <ArrowRight className="w-4 h-4" />
                        </div>

                        {/* Image Overlay/Texture */}
                        <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
                            <img src={product.image} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}