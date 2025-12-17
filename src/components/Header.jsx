import React, { useState } from 'react';
import { Search, Globe, Menu, X, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/components/LanguageContext';
import { Link, useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command";

export function Header({ onOpenMobileNav }) {
    const { language, toggleLanguage } = useLanguage();
    const [openSearch, setOpenSearch] = useState(false);
    const navigate = useNavigate();

    const handleSearchSelect = (path) => {
        setOpenSearch(false);
        navigate(path);
    };

    return (
        <header className="sticky top-0 z-40 w-full h-16 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 px-4 md:px-8 flex items-center justify-between">
            
            {/* Left: Mobile Menu Trigger & Search */}
            <div className="flex items-center gap-4">
                <button 
                    className="md:hidden p-2 -ml-2 text-neutral-400 hover:text-white"
                    onClick={onOpenMobileNav}
                >
                    <Menu className="w-5 h-5" />
                </button>

                <div 
                    className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg border border-white/5 text-sm text-neutral-400 hover:text-white transition-colors cursor-pointer w-full md:w-64"
                    onClick={() => setOpenSearch(true)}
                >
                    <Search className="w-4 h-4" />
                    <span className="hidden md:inline">Search projects...</span>
                    <span className="md:hidden">Search...</span>
                    <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border border-white/10 bg-white/5 px-1.5 font-mono text-[10px] font-medium text-neutral-500 opacity-100 ml-auto">
                        <span className="text-xs">⌘</span>K
                    </kbd>
                </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-3">
                <button 
                    onClick={toggleLanguage}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/5 text-xs font-mono text-neutral-400 hover:text-white transition-all border border-transparent hover:border-white/10"
                >
                    <Globe className="w-3 h-3" />
                    <span className={language === 'en' ? 'text-white' : 'text-neutral-500'}>EN</span>
                    <span className="text-neutral-700">/</span>
                    <span className={language === 'ko' ? 'text-white' : 'text-neutral-500'}>KO</span>
                </button>

                <div className="w-px h-4 bg-white/10 hidden sm:block" />

                <Link to={createPageUrl("Contact")}>
                    <Button size="sm" className="hidden sm:flex bg-indigo-600 hover:bg-indigo-500 text-white rounded-full px-4 text-xs font-bold border-0 shadow-[0_0_15px_rgba(79,70,229,0.3)]">
                        {language === 'en' ? 'Invest / Partner' : '투자 / 제휴'} <ArrowRight className="w-3 h-3 ml-2" />
                    </Button>
                </Link>
            </div>

            {/* Command Palette */}
            <CommandDialog open={openSearch} onOpenChange={setOpenSearch}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Projects">
                        <CommandItem onSelect={() => handleSearchSelect(createPageUrl("AidGuardian"))}>
                            AiD Guardian
                        </CommandItem>
                        <CommandItem onSelect={() => handleSearchSelect(createPageUrl("PlayArts"))}>
                            PlayArts
                        </CommandItem>
                        <CommandItem onSelect={() => handleSearchSelect(createPageUrl("Elememetal"))}>
                            EleMEMEtal
                        </CommandItem>
                        <CommandItem onSelect={() => handleSearchSelect(createPageUrl("Stockhoo"))}>
                            Stockhoo
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Pages">
                        <CommandItem onSelect={() => handleSearchSelect("/")}>Home</CommandItem>
                        <CommandItem onSelect={() => handleSearchSelect(createPageUrl("Company"))}>Company</CommandItem>
                        <CommandItem onSelect={() => handleSearchSelect(createPageUrl("Contact"))}>Contact</CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </header>
    );
}