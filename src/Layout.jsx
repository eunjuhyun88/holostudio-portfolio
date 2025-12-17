import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { createPageUrl } from './utils';
import { ChevronDown, Menu, X, ArrowRight, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from 'framer-motion';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { LanguageProvider, useLanguage } from '@/components/LanguageContext';

function LayoutContent({ children }) {
    const { language, toggleLanguage } = useLanguage();
    const location = useLocation();
    const navigate = useNavigate();
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

    // Close mobile menu on route change (Scroll handled by AnimatePresence)
    useEffect(() => {
        setMobileMenuOpen(false);
        setBusinessDropdownOpen(false);
    }, [location]);

    const navLinks = {
        en: [
            { name: 'Company', path: '/Company', isAnchor: false },
            { name: 'Products', path: '/Products', isAnchor: false },
            { name: 'Team', path: '/Company#team', isAnchor: false },
            { name: 'Proof', path: '/#proof', isAnchor: true },
            { name: 'Roadmap', path: '/#roadmap', isAnchor: true },
            { name: 'Contact', path: '/Contact' },
        ],
        ko: [
            { name: '회사소개', path: '/Company', isAnchor: false },
            { name: '프로덕트', path: '/Products', isAnchor: false },
            { name: '팀', path: '/Company#team', isAnchor: false },
            { name: '성과', path: '/#proof', isAnchor: true },
            { name: '로드맵', path: '/#roadmap', isAnchor: true },
            { name: '문의', path: '/Contact' },
        ]
    };

    const products = [
        { name: 'AiD Guardian', path: '/AidGuardian' },
        { name: 'PlayArts', path: '/PlayArts' },
        { name: 'EleMEMEtal', path: '/Elememetal' },
        { name: 'Stockhoo', path: '/Stockhoo' },
    ];

    const isProductActive = products.some(p => location.pathname.includes(p.path));

    const scrollToSection = (id) => {
        if (location.pathname !== '/') {
            // Use navigate for client-side transition if possible, but for hash on home page, 
            // we need to ensure the home page mounts first.
            navigate('/');
            // Small timeout to allow navigation to complete before scrolling
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
            <link href="https://fonts.cdnfonts.com/css/zt-gatha" rel="stylesheet" />
            <link href="https://fonts.cdnfonts.com/css/next-sphere" rel="stylesheet" />
            <style>{`
                body, .font-sans {
                    font-family: 'ZT Gatha', sans-serif !important;
                }
                h1, h2, h3, h4, h5, h6, .font-heading, strong, b, .font-bold {
                    font-family: 'Next Sphere', sans-serif !important;
                }
            `}</style>
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-indigo-600 focus:text-white top-0 left-0">
                Skip to content
            </a>
            {/* Global Navigation - Trendy Floating "Island" Style */}
            <nav 
                aria-label="Main Navigation"
                className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-start px-4 py-6 md:px-8 md:py-8 pointer-events-none transition-all duration-300 ${isScrolled ? 'md:py-4' : ''}`}
            >
                {/* Left Group: Logo + Nav */}
                <div className="flex items-center gap-4 pointer-events-auto">
                    {/* Logo Pill */}
                    <Link to="/" className="group flex items-center justify-center w-12 h-12 rounded-full bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/20 hover:scale-105 transition-all duration-300">
                        <img 
                            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/84a15b48f_a-sleek-modern-logo-design-featuring-the_SMuLZaSWTXC5gHfZms6l4g_nbGlpkO2SJKMVbyEcJBYDA2.JPEG" 
                            alt="Holo Studio" 
                            className="w-8 h-8 rounded-full object-cover opacity-90 group-hover:opacity-100"
                        />
                    </Link>

                    {/* Desktop Nav Island */}
                    <div className="hidden md:flex items-center bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-full px-1 h-12 shadow-lg shadow-black/20">
                        {/* Links */}
                        <div className="flex items-center px-2">
                            {navLinks[language].map((link) => (
                                link.name === 'Products' || link.name === '프로덕트' ? (
                                    <div key={link.name} className="flex items-center">
                                        <Link 
                                            to={createPageUrl('Products')}
                                            className={`pl-5 pr-2 py-2 font-medium text-sm transition-colors ${
                                                location.pathname === '/Products' || isProductActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                                            }`}
                                        >
                                            {link.name}
                                        </Link>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <button className={`pr-3 pl-1 py-2 font-medium text-sm transition-colors flex items-center ${
                                                    isProductActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                                                }`}>
                                                    <ChevronDown className="w-3 h-3" />
                                                </button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="w-48 bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 rounded-xl p-1 shadow-lg mt-2">
                                                {products.map((product) => (
                                                    <DropdownMenuItem key={product.name} asChild>
                                                        <Link 
                                                            to={createPageUrl(product.path.substring(1))}
                                                            className="flex items-center w-full px-3 py-2 rounded-lg text-sm text-neutral-300 hover:bg-white/5 hover:text-white transition-colors cursor-pointer"
                                                        >
                                                            {product.name}
                                                        </Link>
                                                    </DropdownMenuItem>
                                                ))}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                ) : link.isAnchor ? (
                                    <button 
                                        key={link.name}
                                        onClick={() => scrollToSection(link.path.substring(2))} 
                                        className="px-5 py-2 font-medium text-sm text-neutral-400 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </button>
                                ) : (
                                    <Link 
                                        key={link.name}
                                        to={createPageUrl(link.path.substring(1))}
                                        className={`px-5 py-2 font-medium text-sm transition-colors ${
                                            location.pathname === link.path ? 'text-white' : 'text-neutral-400 hover:text-white'
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                )
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Group: Actions */}
                <div className="flex items-center gap-3 pointer-events-auto">
                    {/* Actions Island */}
                    <div className="hidden md:flex items-center bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-full p-1.5 h-12 shadow-lg shadow-black/20 gap-2">
                        {/* Language Toggle */}
                        <button 
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-4 h-full rounded-full hover:bg-white/5 text-xs font-mono text-neutral-400 hover:text-white transition-all border border-transparent hover:border-white/10"
                        >
                            <Globe className="w-3 h-3" />
                            <span className={language === 'en' ? 'text-white' : 'text-neutral-500'}>EN</span>
                            <span className="text-neutral-700">/</span>
                            <span className={language === 'ko' ? 'text-white' : 'text-neutral-500'}>KO</span>
                        </button>

                        <div className="w-px h-4 bg-white/10" />

                        <a href="https://docsend.com/view/6xxvddwgkmbg2a8i" target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" className="rounded-full text-sm text-neutral-400 hover:text-white hover:bg-white/5 px-5 h-9">
                                {language === 'en' ? 'Deck' : '소개서'}
                            </Button>
                        </a>

                        <Button className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-full px-6 h-9 text-sm font-medium shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] transition-all border border-indigo-500/50">
                            {language === 'en' ? 'Invest / Partner' : '투자 / 제휴'} <ArrowRight className="w-3 h-3 ml-2" />
                        </Button>
                    </div>

                    {/* Mobile Menu Button - Styled as a Pill */}
                    <button 
                        className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 text-white shadow-lg shadow-black/20"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                    </div>

                    {/* Mobile Menu Overlay */}
                    {mobileMenuOpen && (
                    <div className="fixed inset-0 bg-[#050505] z-40 pt-24 px-6 md:hidden overflow-y-auto">
                        <div className="flex flex-col gap-6 text-lg">
                            <div className="flex items-center gap-4 mb-4">
                                 <button 
                                    onClick={toggleLanguage}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900"
                                >
                                    <span className={language === 'en' ? 'text-white' : 'text-neutral-500'}>English</span>
                                    <span className="text-neutral-700">|</span>
                                    <span className={language === 'ko' ? 'text-white' : 'text-neutral-500'}>한국어</span>
                                </button>
                            </div>

                            {navLinks[language].map((link) => (
                                link.name === 'Products' || link.name === '프로덕트' ? (
                                    <div key={link.name} className="py-2">
                                        <div className="font-bold text-white text-lg mb-2">{link.name}</div>
                                        <ul className="space-y-2 pl-4 border-l border-white/10 ml-1">
                                            {products.map((product) => (
                                                <li key={product.name}>
                                                    <Link
                                                        to={createPageUrl(product.path.substring(1))}
                                                        className="block py-1 text-neutral-400 hover:text-white"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {product.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : link.isAnchor ? (
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

                            <Button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white rounded-full mt-4 h-12">
                                {language === 'en' ? 'Invest / Partner' : '투자 및 제휴 문의'}
                            </Button>
                        </div>
                    </div>
                    )}
            </nav>

            {/* Page Content */}
            <main id="main-content" className="pt-24 min-h-screen">
                <AnimatePresence mode="wait" onExitComplete={() => {
                    if (!location.hash) window.scrollTo(0, 0);
                }}>
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="w-full min-h-screen"
                        onAnimationComplete={() => {
                            if (location.hash) {
                                const id = location.hash.substring(1);
                                const element = document.getElementById(id);
                                if (element) element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Global Footer - Glassmorphic & Connected */}
            <footer className="relative z-50 bg-black/40 backdrop-blur-xl text-white py-16 mt-20 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-2">
                            <Link to="/" className="flex items-center gap-3 text-2xl font-bold tracking-tighter mb-6 group">
                                <div className="w-10 h-10 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                                    <img 
                                        src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/84a15b48f_a-sleek-modern-logo-design-featuring-the_SMuLZaSWTXC5gHfZms6l4g_nbGlpkO2SJKMVbyEcJBYDA2.JPEG" 
                                        alt="Holo Studio" 
                                        className="w-6 h-6 rounded-full object-cover opacity-90"
                                    />
                                </div>
                                <span>HOLO<span className="text-indigo-500">STUDIO</span></span>
                            </Link>
                            <p className="text-neutral-400 max-w-sm mb-6 text-sm leading-relaxed">
                                {language === 'en' 
                                    ? 'Building trust-managed AI businesses at the intersection of Safety, Media, Gaming, and Trading.'
                                    : 'AI 안전, 미디어, 게임, 트레이딩의 교차점에서 신뢰할 수 있는 AI 비즈니스를 구축합니다.'}
                            </p>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold text-lg mb-4">{language === 'en' ? 'Products' : '프로덕트'}</h4>
                            <ul className="space-y-2">
                                {products.map(prod => (
                                    <li key={prod.name}>
                                        <Link to={createPageUrl(prod.path.substring(1))} className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                                            <span className="w-1 h-1 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {prod.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold text-lg mb-4">{language === 'en' ? 'Company' : '회사소개'}</h4>
                            <ul className="space-y-2">
                                <li><Link to={createPageUrl('Company')} className="text-neutral-400 hover:text-white transition-colors text-sm">{language === 'en' ? 'About Us' : '소개'}</Link></li>
                                <li><Link to={createPageUrl('Company') + '#team'} className="text-neutral-400 hover:text-white transition-colors text-sm">{language === 'en' ? 'Team' : '팀'}</Link></li>
                                <li><button onClick={() => scrollToSection('proof')} className="text-neutral-400 hover:text-white transition-colors text-sm">{language === 'en' ? 'Milestones' : '성과'}</button></li>
                                <li><button onClick={() => scrollToSection('roadmap')} className="text-neutral-400 hover:text-white transition-colors text-sm">{language === 'en' ? 'Roadmap' : '로드맵'}</button></li>
                                <li><Link to={createPageUrl('Contact')} className="text-neutral-400 hover:text-white transition-colors text-sm">{language === 'en' ? 'Contact' : '문의하기'}</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm">
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

export default function Layout({ children }) {
    return (
        <LanguageProvider>
            <LayoutContent>{children}</LayoutContent>
        </LanguageProvider>
    );
}