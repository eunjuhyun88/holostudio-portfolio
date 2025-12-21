import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { createPageUrl } from './utils';
import { ChevronDown, Menu, X, ArrowRight, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from 'framer-motion';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { LanguageProvider, useLanguage } from '@/components/LanguageContext';
import { ThemeProvider, useTheme } from '@/components/ThemeContext';

function LayoutContent({ children }) {
    const { language, toggleLanguage } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileProductsOpen, setMobileProductsOpen] = useState(true); // Default open for better visibility or false? Let's make it toggleable but maybe default open is easier for users? Let's stick to false and let user toggle. actually user asked for "clearly indicated", so toggle is good.
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
        setMobileProductsOpen(false);
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
        <div className={`min-h-screen font-sans transition-colors duration-300 ${
            theme === 'dark' ? 'bg-[#050505] text-white' : 'bg-white text-neutral-900'
        }`}>
            <style>{`
                @import url('https://fonts.cdnfonts.com/css/rigid-display');
                @import url('https://fonts.cdnfonts.com/css/graphyne');
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap');
                
                /* Default everything to lighter weight */
                strong, b, .font-bold, .font-extrabold, .font-semibold, h1, h2, h3, h4, h5, h6 {
                    font-family: 'Rigid Display', sans-serif !important;
                    font-weight: 500 !important; /* Force lighter weight as requested */
                }
                .font-heavy {
                    font-family: 'Rigid Display', sans-serif !important;
                    font-weight: 700 !important;
                }
                .font-inktrap {
                    font-family: 'Graphyne', sans-serif !important;
                }
                .font-clean {
                    font-family: 'Montserrat', sans-serif !important;
                }
            `}</style>
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-indigo-600 focus:text-white top-0 left-0">
                Skip to content
            </a>
            {/* Global Navigation - Trendy Floating "Island" Style */}
            <nav 
                aria-label="Main Navigation"
                className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-start px-4 py-6 md:px-8 md:py-8 pointer-events-none transition-all duration-300 font-clean ${isScrolled ? 'md:py-4' : ''}`}
            >
                {/* Left Group: Logo + Nav */}
                <div className="flex items-center gap-4 pointer-events-auto">
                    {/* Logo Pill */}
                    <Link to="/" className={`group flex items-center justify-center w-16 h-16 rounded-full backdrop-blur-xl border shadow-lg hover:scale-105 transition-all duration-300 ${
                        theme === 'dark'
                            ? 'bg-[#0A0A0A]/80 border-white/10 shadow-black/20'
                            : 'bg-[#F7F7F7]/90 border-neutral-200/30 shadow-neutral-300/20'
                    }`}>
                        <img 
                            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/84a15b48f_a-sleek-modern-logo-design-featuring-the_SMuLZaSWTXC5gHfZms6l4g_nbGlpkO2SJKMVbyEcJBYDA2.JPEG" 
                            alt="Holo Studio" 
                            className="w-12 h-12 rounded-full object-cover opacity-90 group-hover:opacity-100"
                        />
                    </Link>

                    {/* Desktop Nav Island */}
                    <div className={`hidden md:flex items-center backdrop-blur-xl border rounded-full px-1 h-12 shadow-lg ${
                        theme === 'dark' 
                            ? 'bg-[#0A0A0A]/80 border-white/10 shadow-black/20' 
                            : 'bg-white/80 border-neutral-300/30 shadow-neutral-300/20'
                    }`}>
                        {/* Links */}
                        <div className="flex items-center px-2">
                            {navLinks[language].map((link) => (
                                link.name === 'Products' || link.name === '프로덕트' ? (
                                    <div key={link.name} className="flex items-center">
                                        <Link 
                                            to={createPageUrl('Products')}
                                            className={`pl-5 pr-2 py-2 font-medium text-sm transition-colors ${
                                                location.pathname === '/Products' || isProductActive 
                                                    ? (theme === 'dark' ? 'text-white' : 'text-neutral-900') 
                                                    : (theme === 'dark' ? 'text-neutral-300 hover:text-white' : 'text-neutral-600 hover:text-neutral-900')
                                            }`}
                                        >
                                            {link.name}
                                        </Link>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <button className={`pr-3 pl-1 py-2 font-medium text-sm transition-colors flex items-center ${
                                                    isProductActive 
                                                        ? (theme === 'dark' ? 'text-white' : 'text-neutral-900')
                                                        : (theme === 'dark' ? 'text-neutral-300 hover:text-white' : 'text-neutral-600 hover:text-neutral-900')
                                                }`}>
                                                    <ChevronDown className="w-3 h-3" />
                                                </button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className={`w-48 backdrop-blur-xl border rounded-xl p-1 shadow-lg mt-2 ${
                                                theme === 'dark' ? 'bg-[#0A0A0A]/90 border-white/10' : 'bg-white/90 border-neutral-300/30'
                                            }`}>
                                                {products.map((product) => (
                                                    <DropdownMenuItem key={product.name} asChild>
                                                        <Link 
                                                            to={createPageUrl(product.path.substring(1))}
                                                            className={`flex items-center w-full px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                                                                theme === 'dark' 
                                                                    ? 'text-neutral-300 hover:bg-white/5 hover:text-white' 
                                                                    : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900'
                                                            }`}
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
                                        className={`px-5 py-2 font-medium text-sm transition-colors ${
                                            theme === 'dark' ? 'text-neutral-300 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'
                                        }`}
                                    >
                                        {link.name}
                                    </button>
                                ) : (
                                    <Link 
                                        key={link.name}
                                        to={createPageUrl(link.path.substring(1))}
                                        className={`px-5 py-2 font-medium text-sm transition-colors ${
                                            location.pathname === link.path 
                                                ? (theme === 'dark' ? 'text-white' : 'text-neutral-900')
                                                : (theme === 'dark' ? 'text-neutral-300 hover:text-white' : 'text-neutral-600 hover:text-neutral-900')
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
                    <div className={`hidden md:flex items-center backdrop-blur-xl border rounded-full p-1.5 h-12 shadow-lg gap-2 ${
                        theme === 'dark' 
                            ? 'bg-[#0A0A0A]/80 border-white/10 shadow-black/20' 
                            : 'bg-white/80 border-neutral-300/30 shadow-neutral-300/20'
                    }`}>
                        {/* Theme Toggle */}
                        <button 
                            onClick={toggleTheme}
                            className={`flex items-center gap-2 px-4 h-full rounded-full transition-all border border-transparent ${
                                theme === 'dark' 
                                    ? 'hover:bg-white/5 text-neutral-300 hover:text-white hover:border-white/10' 
                                    : 'hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900 hover:border-neutral-300'
                            }`}
                        >
                            {theme === 'dark' ? '🌙' : '☀️'}
                        </button>

                        <div className={`w-px h-4 ${theme === 'dark' ? 'bg-white/10' : 'bg-neutral-300'}`} />

                        {/* Language Toggle */}
                        <button 
                            onClick={toggleLanguage}
                            className={`flex items-center gap-2 px-4 h-full rounded-full text-xs font-mono transition-all border border-transparent ${
                                theme === 'dark' 
                                    ? 'hover:bg-white/5 text-neutral-300 hover:text-white hover:border-white/10' 
                                    : 'hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900 hover:border-neutral-300'
                            }`}
                        >
                            <Globe className="w-3 h-3" />
                            <span className={language === 'en' ? (theme === 'dark' ? 'text-white' : 'text-neutral-900') : (theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600')}>EN</span>
                            <span className={theme === 'dark' ? 'text-neutral-700' : 'text-neutral-400'}>/</span>
                            <span className={language === 'ko' ? (theme === 'dark' ? 'text-white' : 'text-neutral-900') : (theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600')}>KO</span>
                        </button>

                        <div className={`w-px h-4 ${theme === 'dark' ? 'bg-white/10' : 'bg-neutral-300'}`} />

                        <a href="https://docsend.com/view/6xxvddwgkmbg2a8i" target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" className={`rounded-full text-sm px-5 h-9 ${
                                theme === 'dark' 
                                    ? 'text-neutral-300 hover:text-white hover:bg-white/5' 
                                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                            }`}>
                                {language === 'en' ? 'Deck' : '소개서'}
                            </Button>
                        </a>

                        <Button className={`rounded-full px-6 h-9 text-sm font-bold transition-all ${
                            theme === 'dark'
                                ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_20px_rgba(79,70,229,0.3)] border border-indigo-500/50'
                                : 'bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 hover:from-cyan-400 hover:via-violet-400 hover:to-pink-400 text-white border-0 shadow-lg'
                        }`}>
                            {language === 'en' ? 'Invest / Partner' : '투자 / 제휴'} <ArrowRight className="w-3 h-3 ml-2" />
                        </Button>
                    </div>

                    {/* Mobile Menu Button - Styled as a Pill */}
                    <button 
                        className={`md:hidden flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-xl border shadow-lg ${
                            theme === 'dark' 
                                ? 'bg-[#0A0A0A]/80 border-white/10 text-white shadow-black/20' 
                                : 'bg-white/80 border-neutral-300/30 text-neutral-900 shadow-neutral-300/20'
                        }`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                    </div>

                    {/* Mobile Menu Overlay */}
                    <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-[#050505]/95 backdrop-blur-2xl z-40 pt-24 px-6 md:hidden overflow-y-auto pointer-events-auto"
                        >
                            {/* Decorative Gradients */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px] pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[100px] pointer-events-none" />

                            <div className="flex flex-col gap-6 text-lg relative z-10">
                                <div className="flex items-center gap-4 mb-4">
                                     <button 
                                        onClick={toggleLanguage}
                                        className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                                    >
                                        <span className={language === 'en' ? 'text-white' : 'text-neutral-300'}>English</span>
                                        <span className="text-neutral-700">|</span>
                                        <span className={language === 'ko' ? 'text-white' : 'text-neutral-300'}>한국어</span>
                                    </button>
                                </div>

                                {navLinks[language].map((link) => (
                                    link.name === 'Products' || link.name === '프로덕트' ? (
                                        <div key={link.name} className="py-2 border-b border-white/5 pb-4">
                                            <button 
                                                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                                                className="flex items-center justify-between w-full font-bold text-white text-xl mb-2"
                                            >
                                                {link.name}
                                                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                                            </button>
                                            <AnimatePresence>
                                                {mobileProductsOpen && (
                                                    <motion.ul 
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                                        className="space-y-3 pl-4 border-l border-white/10 ml-1 overflow-hidden"
                                                    >
                                                        {products.map((product) => (
                                                            <motion.li 
                                                                key={product.name}
                                                                initial={{ x: -10, opacity: 0 }}
                                                                animate={{ x: 0, opacity: 1 }}
                                                                transition={{ duration: 0.3 }}
                                                            >
                                                                <Link
                                                                    to={createPageUrl(product.path.substring(1))}
                                                                    className="block py-1 text-neutral-300 hover:text-white text-base"
                                                                    onClick={() => setMobileMenuOpen(false)}
                                                                >
                                                                    {product.name}
                                                                </Link>
                                                            </motion.li>
                                                        ))}
                                                    </motion.ul>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : link.isAnchor ? (
                                        <button 
                                            key={link.name}
                                            onClick={() => scrollToSection(link.path.substring(2))}
                                            className="text-left font-medium text-neutral-300 hover:text-white text-xl py-2 border-b border-white/5"
                                        >
                                            {link.name}
                                        </button>
                                    ) : (
                                        <Link 
                                            key={link.name}
                                            to={createPageUrl(link.path.substring(1))}
                                            className="font-medium text-neutral-300 hover:text-white text-xl py-2 border-b border-white/5"
                                        >
                                            {link.name}
                                        </Link>
                                    )
                                ))}

                                <Button className={`w-full rounded-full mt-8 h-12 text-lg font-bold ${
                                    theme === 'dark'
                                        ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_20px_rgba(79,70,229,0.3)]'
                                        : 'bg-orange-500 hover:bg-orange-600 text-white'
                                }`}>
                                    {language === 'en' ? 'Invest / Partner' : '투자 및 제휴 문의'}
                                </Button>
                            </div>
                        </motion.div>
                    )}
                    </AnimatePresence>
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
            <footer className={`relative z-50 py-16 mt-20 border-t ${
                theme === 'dark' 
                    ? 'bg-black/40 text-white border-white/10 backdrop-blur-xl'
                    : 'bg-white text-neutral-900 border-neutral-200'
            }`}>
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
                            <p className={`max-w-sm mb-6 text-sm leading-relaxed ${
                                theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
                            }`}>
                                {language === 'en' 
                                    ? 'Building trust-managed AI businesses at the intersection of Safety, Media, Gaming, and Trading.'
                                    : 'AI 안전, 미디어, 게임, 트레이딩의 교차점에서 신뢰할 수 있는 AI 비즈니스를 구축합니다.'}
                            </p>
                        </div>
                        
                        <div>
                            <h4 className={`font-semibold text-lg mb-4 ${
                                theme === 'dark' ? 'text-white' : 'text-neutral-900'
                            }`}>{language === 'en' ? 'Products' : '프로덕트'}</h4>
                            <ul className="space-y-2">
                                {products.map(prod => (
                                    <li key={prod.name}>
                                        <Link to={createPageUrl(prod.path.substring(1))} className={`transition-colors text-sm flex items-center gap-2 group ${
                                            theme === 'dark' 
                                                ? 'text-neutral-300 hover:text-white'
                                                : 'text-neutral-600 hover:text-neutral-900'
                                        }`}>
                                            <span className={`w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity ${
                                                theme === 'dark' ? 'bg-indigo-500' : 'bg-purple-500'
                                            }`} />
                                            {prod.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className={`font-semibold text-lg mb-4 ${
                                theme === 'dark' ? 'text-white' : 'text-neutral-900'
                            }`}>{language === 'en' ? 'Company' : '회사소개'}</h4>
                            <ul className="space-y-2">
                                <li><Link to={createPageUrl('Company')} className={`transition-colors text-sm ${
                                    theme === 'dark' ? 'text-neutral-300 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'
                                }`}>{language === 'en' ? 'About Us' : '소개'}</Link></li>
                                <li><Link to={createPageUrl('Company') + '#team'} className={`transition-colors text-sm ${
                                    theme === 'dark' ? 'text-neutral-300 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'
                                }`}>{language === 'en' ? 'Team' : '팀'}</Link></li>
                                <li><button onClick={() => scrollToSection('proof')} className={`transition-colors text-sm ${
                                    theme === 'dark' ? 'text-neutral-300 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'
                                }`}>{language === 'en' ? 'Milestones' : '성과'}</button></li>
                                <li><button onClick={() => scrollToSection('roadmap')} className={`transition-colors text-sm ${
                                    theme === 'dark' ? 'text-neutral-300 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'
                                }`}>{language === 'en' ? 'Roadmap' : '로드맵'}</button></li>
                                <li><Link to={createPageUrl('Showcase3D')} className={`transition-colors text-sm ${
                                    theme === 'dark' ? 'text-neutral-300 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'
                                }`}>{language === 'en' ? '3D Showcase' : '3D 쇼케이스'}</Link></li>
                                <li><Link to={createPageUrl('Contact')} className={`transition-colors text-sm ${
                                    theme === 'dark' ? 'text-neutral-300 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'
                                }`}>{language === 'en' ? 'Contact' : '문의하기'}</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center text-sm ${
                        theme === 'dark' 
                            ? 'border-white/5 text-neutral-300'
                            : 'border-neutral-300/30 text-neutral-600'
                    }`}>
                        <p>© 2025 HOLOSTUDIO. All rights reserved.</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <a href="#" className={theme === 'dark' ? 'hover:text-white' : 'hover:text-neutral-900'}>Privacy Policy</a>
                            <a href="#" className={theme === 'dark' ? 'hover:text-white' : 'hover:text-neutral-900'}>Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

import LoadingScreen from '@/components/LoadingScreen';

export default function Layout({ children }) {
    const [loading, setLoading] = useState(true);

    return (
        <ThemeProvider>
            <LanguageProvider>
                 <AnimatePresence>
                    {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
                </AnimatePresence>
                {!loading && <LayoutContent>{children}</LayoutContent>}
            </LanguageProvider>
        </ThemeProvider>
    );
}