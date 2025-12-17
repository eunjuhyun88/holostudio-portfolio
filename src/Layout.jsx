import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from './utils';
import { ChevronDown, Menu, X, ArrowRight, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { LanguageProvider, useLanguage } from '@/components/LanguageContext';

function LayoutContent({ children }) {
    const { language, toggleLanguage } = useLanguage();
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

    const navLinks = {
        en: [
            { name: 'Company', path: '/', isAnchor: false },
            { name: 'Products', path: '/#products', isAnchor: true },
            { name: 'Proof', path: '/#proof', isAnchor: true },
            { name: 'Research', path: '/#research', isAnchor: true },
            { name: 'Contact', path: '/Contact' },
        ],
        ko: [
            { name: '회사소개', path: '/', isAnchor: false },
            { name: '사업분야', path: '/#products', isAnchor: true },
            { name: '성과', path: '/#proof', isAnchor: true },
            { name: '리서치', path: '/#research', isAnchor: true },
            { name: '문의', path: '/Contact' },
        ]
    };

    const businesses = [
        { name: 'AiD Guardian', path: '/AidGuardian' },
        { name: 'PlayArts', path: '/PlayArts' },
        { name: 'EleMEMEtal', path: '/Elememetal' },
        { name: 'Stocku', path: '/Stocku' },
    ];

    const scrollToSection = (id) => {
        if (location.pathname !== '/') {
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
                    <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity z-50">
                        <div className="w-10 h-10 rounded-lg overflow-hidden bg-white/10 border border-white/20">
                            <img 
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/84a15b48f_a-sleek-modern-logo-design-featuring-the_SMuLZaSWTXC5gHfZms6l4g_nbGlpkO2SJKMVbyEcJBYDA2.JPEG" 
                                alt="Holo Studio" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="text-xl font-bold tracking-tighter text-white hidden sm:block">
                            HOLO<span className="text-indigo-500">STUDIO</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6">
                        {/* Businesses Dropdown */}
                        <div 
                            className="relative group"
                            onMouseEnter={() => setBusinessDropdownOpen(true)}
                            onMouseLeave={() => setBusinessDropdownOpen(false)}
                        >
                            <button className="flex items-center gap-1 font-medium text-sm text-neutral-400 hover:text-white transition-colors py-2">
                                {language === 'en' ? 'Businesses' : '사업분야'}
                                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${businessDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            
                            {/* Dropdown Menu */}
                            <div className={`absolute top-full left-0 w-56 pt-2 transition-all duration-200 ${
                                businessDropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'
                            }`}>
                                <div className="bg-[#0A0A0A]/95 backdrop-blur-md rounded-xl shadow-2xl border border-neutral-800 overflow-hidden p-2">
                                    {businesses.map((biz) => (
                                        <Link 
                                            key={biz.name}
                                            to={createPageUrl(biz.path.substring(1))}
                                            className="block px-4 py-3 rounded-lg hover:bg-white/5 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                                        >
                                            {biz.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {navLinks[language].map((link) => (
                            link.isAnchor ? (
                                <button 
                                    key={link.name}
                                    onClick={() => scrollToSection(link.path.substring(2))} 
                                    className="font-medium text-sm text-neutral-400 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </button>
                            ) : (
                                <Link 
                                    key={link.name}
                                    to={createPageUrl(link.path.substring(1))}
                                    className="font-medium text-sm text-neutral-400 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center gap-4">
                         {/* Language Toggle */}
                        <button 
                            onClick={toggleLanguage}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs font-mono text-neutral-400 hover:text-white hover:border-neutral-700 transition-all"
                        >
                            <Globe className="w-3 h-3" />
                            <span className={language === 'en' ? 'text-white' : 'text-neutral-500'}>EN</span>
                            <span className="text-neutral-700">|</span>
                            <span className={language === 'ko' ? 'text-white' : 'text-neutral-500'}>KO</span>
                        </button>

                        <div className="h-6 w-px bg-neutral-800" />

                        <div className="flex gap-3">
                            <Button variant="ghost" className="text-sm text-neutral-400 hover:text-white hover:bg-white/5">
                                {language === 'en' ? 'Deck' : '소개서'}
                            </Button>
                            <Button className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-full px-5 h-9 text-sm font-medium shadow-[0_0_15px_rgba(79,70,229,0.3)] transition-all">
                                {language === 'en' ? 'Invest / Partner' : '투자 / 제휴'}
                            </Button>
                        </div>
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

                            <div className="space-y-4 border-b border-neutral-800 pb-6">
                                <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                                    {language === 'en' ? 'Our Businesses' : '사업분야'}
                                </p>
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
                            
                            {navLinks[language].map((link) => (
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
                            
                            <Button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white rounded-full mt-4 h-12">
                                {language === 'en' ? 'Invest / Partner' : '투자 및 제휴 문의'}
                            </Button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Page Content */}
            <main className="pt-24 min-h-screen">
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
                            <p className="text-neutral-400 max-w-sm mb-6 text-sm leading-relaxed">
                                {language === 'en' 
                                    ? 'Building trust-managed AI businesses at the intersection of Safety, Media, Gaming, and Trading.'
                                    : 'AI 안전, 미디어, 게임, 트레이딩의 교차점에서 신뢰할 수 있는 AI 비즈니스를 구축합니다.'}
                            </p>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold text-lg mb-4">{language === 'en' ? 'Businesses' : '사업분야'}</h4>
                            <ul className="space-y-2">
                                {businesses.map(biz => (
                                    <li key={biz.name}>
                                        <Link to={createPageUrl(biz.path.substring(1))} className="text-neutral-400 hover:text-white transition-colors text-sm">
                                            {biz.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold text-lg mb-4">{language === 'en' ? 'Company' : '회사소개'}</h4>
                            <ul className="space-y-2">
                                <li><button onClick={() => scrollToSection('proof')} className="text-neutral-400 hover:text-white transition-colors text-sm">{language === 'en' ? 'Milestones' : '성과'}</button></li>
                                <li><button onClick={() => scrollToSection('research')} className="text-neutral-400 hover:text-white transition-colors text-sm">{language === 'en' ? 'Research' : '리서치'}</button></li>
                                <li><Link to={createPageUrl('Contact')} className="text-neutral-400 hover:text-white transition-colors text-sm">{language === 'en' ? 'Contact' : '문의하기'}</Link></li>
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

export default function Layout({ children }) {
    return (
        <LanguageProvider>
            <LayoutContent>{children}</LayoutContent>
        </LanguageProvider>
    );
}