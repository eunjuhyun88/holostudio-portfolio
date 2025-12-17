import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from './utils';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Layout({ children }) {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [businessDropdownOpen, setBusinessDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
        setBusinessDropdownOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Company', path: '/', isAnchor: false },
        { name: 'Products', path: '/#products', isAnchor: true },
        { name: 'Proof', path: '/#proof', isAnchor: true },
        { name: 'Research', path: '/#research', isAnchor: true },
        { name: 'Contact', path: '/Contact' },
    ];

    const businesses = [
        { name: 'AiD Guardian', path: '/AidGuardian' },
        { name: 'PlayArts', path: '/PlayArts' },
        { name: 'EleMEMEtal', path: '/Elememetal' },
        { name: 'Stocku', path: '/Stocku' },
    ];

    const scrollToSection = (id) => {
        if (location.pathname !== '/') {
            // If not on home, navigate to home first (handled by Link)
            // But we need to handle the scroll after navigation
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-[#050505] font-sans text-white">
            {/* Global Navigation */}
            <nav 
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
                    isScrolled ? 'bg-[#050505]/90 backdrop-blur-md border-neutral-800 py-3 shadow-sm' : 'bg-transparent border-transparent py-5'
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity z-50 text-white">
                        HOLO<span className="text-indigo-500">STUDIO</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {/* Businesses Dropdown */}
                        <div 
                            className="relative group"
                            onMouseEnter={() => setBusinessDropdownOpen(true)}
                            onMouseLeave={() => setBusinessDropdownOpen(false)}
                        >
                            <button className="flex items-center gap-1 font-medium text-neutral-400 hover:text-white transition-colors py-2">
                                Businesses
                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${businessDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            
                            {/* Dropdown Menu */}
                            <div className={`absolute top-full left-0 w-56 pt-2 transition-all duration-200 ${
                                businessDropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'
                            }`}>
                                <div className="bg-[#0A0A0A] rounded-xl shadow-xl border border-neutral-800 overflow-hidden p-2">
                                    {businesses.map((biz) => (
                                        <Link 
                                            key={biz.name}
                                            to={createPageUrl(biz.path.substring(1))} // Remove leading slash for createPageUrl
                                            className="block px-4 py-3 rounded-lg hover:bg-neutral-900 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                                        >
                                            {biz.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {navLinks.map((link) => (
                            link.isAnchor ? (
                                <button 
                                    key={link.name}
                                    onClick={() => scrollToSection(link.path.substring(2))} // Remove /#
                                    className="font-medium text-neutral-400 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </button>
                            ) : (
                                <Link 
                                    key={link.name}
                                    to={createPageUrl(link.path.substring(1))}
                                    className="font-medium text-neutral-400 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex gap-3">
                        <Button variant="ghost" className="text-neutral-300 hover:text-white hover:bg-white/10">
                            Download Deck
                        </Button>
                        <Button className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-full px-6 border border-indigo-500/20">
                            Invest / Partner
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden z-50 p-2 text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {mobileMenuOpen && (
                    <div className="fixed inset-0 bg-[#050505] z-40 pt-24 px-6 md:hidden overflow-y-auto">
                        <div className="flex flex-col gap-6 text-lg">
                            <div className="space-y-4 border-b border-neutral-800 pb-6">
                                <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">Our Businesses</p>
                                {businesses.map((biz) => (
                                    <Link 
                                        key={biz.name}
                                        to={createPageUrl(biz.path.substring(1))}
                                        className="block font-medium text-white"
                                    >
                                        {biz.name}
                                    </Link>
                                ))}
                            </div>
                            
                            {navLinks.map((link) => (
                                link.isAnchor ? (
                                    <button 
                                        key={link.name}
                                        onClick={() => scrollToSection(link.path.substring(2))}
                                        className="text-left font-medium text-neutral-400 hover:text-white"
                                    >
                                        {link.name}
                                    </button>
                                ) : (
                                    <Link 
                                        key={link.name}
                                        to={createPageUrl(link.path.substring(1))}
                                        className="font-medium text-neutral-400 hover:text-white"
                                    >
                                        {link.name}
                                    </Link>
                                )
                            ))}
                            
                            <Button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white rounded-full mt-4">
                                Investment Inquiry
                            </Button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Page Content */}
            <main className="pt-24">
                {children}
            </main>

            {/* Global Footer */}
            <footer className="bg-[#050505] text-white py-16 mt-20 border-t border-neutral-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-2">
                            <Link to="/" className="text-2xl font-bold tracking-tighter mb-6 block">
                                HOLO<span className="text-indigo-500">STUDIO</span>
                            </Link>
                            <p className="text-neutral-400 max-w-sm mb-6">
                                Building trust-managed AI businesses at the intersection of Safety, Media, Gaming, and Trading.
                            </p>
                            <div className="flex gap-4">
                                {/* Social icons would go here */}
                            </div>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold text-lg mb-4">Businesses</h4>
                            <ul className="space-y-2">
                                {businesses.map(biz => (
                                    <li key={biz.name}>
                                        <Link to={createPageUrl(biz.path.substring(1))} className="text-neutral-400 hover:text-white transition-colors">
                                            {biz.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold text-lg mb-4">Company</h4>
                            <ul className="space-y-2">
                                <li><button onClick={() => scrollToSection('milestones')} className="text-neutral-400 hover:text-white transition-colors">Milestones</button></li>
                                <li><button onClick={() => scrollToSection('team')} className="text-neutral-400 hover:text-white transition-colors">Team</button></li>
                                <li><Link to={createPageUrl('Contact')} className="text-neutral-400 hover:text-white transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm">
                        <p>© 2025 HOLOSTUDIO. All rights reserved.</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white">Privacy Policy</a>
                            <a href="#" className="hover:text-white">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}