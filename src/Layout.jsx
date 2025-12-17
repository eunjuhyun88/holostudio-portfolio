import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/components/LanguageContext';

function LayoutContent({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const location = useLocation();

    // Close mobile nav on route change
    useEffect(() => {
        setMobileNavOpen(false);
    }, [location]);

    // Handle keyboard shortcut for search
    useEffect(() => {
        const down = (e) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                // We need a way to trigger the search in Header. 
                // Since we don't have global state for search open, we rely on Header internal state or props.
                // For simplicity in this structure, Header handles its own shortcut or we pass a ref.
                // But the ShadCN Command component usually handles the shortcut internally or we pass an `open` prop.
                // In Header.jsx I added the open state locally, which is fine. 
                // If we want global shortcut, we can lift state up, but for now Header manages it.
                // Actually, the ShadCN <CommandDialog /> handles the shortcut if we set it up right, 
                // but usually we need to toggle the open state.
                // I'll leave it to Header component for now.
            }
        };
        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    return (
        <div className="flex min-h-screen bg-[#050505] text-white font-sans selection:bg-indigo-500/30">
            {/* Desktop Sidebar */}
            <Sidebar 
                isOpen={sidebarOpen} 
                setIsOpen={setSidebarOpen} 
                isMobile={false} 
            />

            {/* Mobile Sidebar (Drawer) */}
            <Sidebar 
                isOpen={mobileNavOpen} 
                setIsOpen={setMobileNavOpen} 
                isMobile={true} 
                onCloseMobile={() => setMobileNavOpen(false)}
            />

            <div className="flex-1 flex flex-col min-w-0 transition-all duration-300">
                <Header onOpenMobileNav={() => setMobileNavOpen(true)} />
                
                <main className="flex-1 w-full max-w-[1920px] mx-auto">
                    {children}
                </main>
                
                <Footer />
            </div>
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