import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
    LayoutDashboard, 
    Building2, 
    Briefcase, 
    FlaskConical, 
    Mail, 
    ChevronLeft, 
    ChevronRight,
    Shield,
    Zap,
    Gamepad2,
    BarChart3
} from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Sidebar({ isOpen, setIsOpen, isMobile, onCloseMobile }) {
    const location = useLocation();
    const { language } = useLanguage();

    const navItems = {
        en: [
            { name: 'Home', path: '/', icon: LayoutDashboard },
            { name: 'Company', path: '/Company', icon: Building2 },
            { name: 'Proof', path: '/#proof', icon: TrophyIcon, isAnchor: true },
            { name: 'Research', path: '/#research', icon: FlaskConical, isAnchor: true },
            { name: 'Contact', path: '/Contact', icon: Mail },
        ],
        ko: [
            { name: '홈', path: '/', icon: LayoutDashboard },
            { name: '회사소개', path: '/Company', icon: Building2 },
            { name: '성과', path: '/#proof', icon: TrophyIcon, isAnchor: true },
            { name: '리서치', path: '/#research', icon: FlaskConical, isAnchor: true },
            { name: '문의', path: '/Contact', icon: Mail },
        ]
    };

    const businesses = [
        { name: 'AiD Guardian', path: '/AidGuardian', icon: Shield, color: 'text-indigo-400' },
        { name: 'PlayArts', path: '/PlayArts', icon: Zap, color: 'text-lime-400' },
        { name: 'EleMEMEtal', path: '/Elememetal', icon: Gamepad2, color: 'text-orange-400' },
        { name: 'Stockhoo', path: '/Stockhoo', icon: BarChart3, color: 'text-emerald-400' },
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
        if (isMobile) onCloseMobile();
    };

    const SidebarContent = () => (
        <div className="flex flex-col h-full bg-[#0A0A0A] border-r border-white/10">
            {/* Header */}
            <div className={cn("h-16 flex items-center px-4 border-b border-white/5", isOpen ? "justify-between" : "justify-center")}>
                {isOpen && (
                    <Link to="/" className="flex items-center gap-3 font-bold text-xl tracking-tighter">
                         <img 
                            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/84a15b48f_a-sleek-modern-logo-design-featuring-the_SMuLZaSWTXC5gHfZms6l4g_nbGlpkO2SJKMVbyEcJBYDA2.JPEG" 
                            alt="Logo" 
                            className="w-8 h-8 rounded-full"
                        />
                        <span>HOLO</span>
                    </Link>
                )}
                {!isOpen && (
                    <img 
                        src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/84a15b48f_a-sleek-modern-logo-design-featuring-the_SMuLZaSWTXC5gHfZms6l4g_nbGlpkO2SJKMVbyEcJBYDA2.JPEG" 
                        alt="Logo" 
                        className="w-8 h-8 rounded-full"
                    />
                )}
                
                {!isMobile && (
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className={cn("p-1.5 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white transition-colors", !isOpen && "hidden")}
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                )}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto py-6 px-3 space-y-8">
                {/* Main Nav */}
                <div className="space-y-1">
                    {isOpen && <div className="px-3 text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Menu</div>}
                    {navItems[language].map((item, idx) => (
                        item.isAnchor ? (
                            <button
                                key={idx}
                                onClick={() => scrollToSection(item.path.substring(2))}
                                className={cn(
                                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group",
                                    "hover:bg-white/5 text-neutral-400 hover:text-white",
                                    !isOpen && "justify-center px-0"
                                )}
                            >
                                <item.icon className="w-5 h-5" />
                                {isOpen && <span className="font-medium text-sm">{item.name}</span>}
                            </button>
                        ) : (
                            <Link
                                key={idx}
                                to={createPageUrl(item.path.substring(1))}
                                onClick={() => isMobile && onCloseMobile()}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group",
                                    location.pathname === item.path ? "bg-indigo-600/10 text-indigo-400" : "hover:bg-white/5 text-neutral-400 hover:text-white",
                                    !isOpen && "justify-center px-0"
                                )}
                            >
                                <item.icon className="w-5 h-5" />
                                {isOpen && <span className="font-medium text-sm">{item.name}</span>}
                            </Link>
                        )
                    ))}
                </div>

                {/* Businesses */}
                <div className="space-y-1">
                    {isOpen && <div className="px-3 text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Projects</div>}
                    {businesses.map((biz, idx) => (
                        <Link
                            key={idx}
                            to={createPageUrl(biz.path.substring(1))}
                            onClick={() => isMobile && onCloseMobile()}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group",
                                location.pathname === biz.path ? "bg-white/5 text-white" : "hover:bg-white/5 text-neutral-400 hover:text-white",
                                !isOpen && "justify-center px-0"
                            )}
                        >
                            <biz.icon className={cn("w-5 h-5", biz.color)} />
                            {isOpen && <span className="font-medium text-sm">{biz.name}</span>}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Footer / User Area Placeholder */}
            {!isMobile && (
                <div className="p-4 border-t border-white/5">
                    {!isOpen ? (
                        <button onClick={() => setIsOpen(true)} className="w-full flex justify-center p-2 hover:bg-white/5 rounded-xl">
                            <ChevronRight className="w-5 h-5 text-neutral-400" />
                        </button>
                    ) : (
                        <div className="text-xs text-neutral-500 text-center">
                            © 2025 HOLO STUDIO
                        </div>
                    )}
                </div>
            )}
        </div>
    );

    function TrophyIcon(props) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
            </svg>
        )
    }

    // Mobile Drawer
    if (isMobile) {
        return (
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                            onClick={onCloseMobile}
                        />
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                            className="fixed inset-y-0 left-0 w-[280px] bg-[#0A0A0A] z-50"
                        >
                            <SidebarContent />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        );
    }

    // Desktop Sidebar
    return (
        <motion.div 
            className="sticky top-0 h-screen hidden md:block"
            animate={{ width: isOpen ? 280 : 80 }}
            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
        >
            <SidebarContent />
        </motion.div>
    );
}