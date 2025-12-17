import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '@/components/LanguageContext';

export function Footer() {
    const { language } = useLanguage();

    return (
        <footer className="bg-[#050505] text-white py-12 border-t border-neutral-900 mt-auto">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="text-xl font-bold tracking-tighter mb-4 block">
                            HOLO<span className="text-indigo-500">STUDIO</span>
                        </Link>
                        <p className="text-neutral-500 max-w-sm text-sm leading-relaxed">
                            {language === 'en' 
                                ? 'Building trust-managed AI businesses at the intersection of Safety, Media, Gaming, and Trading.'
                                : 'AI 안전, 미디어, 게임, 트레이딩의 교차점에서 신뢰할 수 있는 AI 비즈니스를 구축합니다.'}
                        </p>
                    </div>
                    
                    <div>
                        <h4 className="font-bold text-sm mb-4 text-white uppercase tracking-wider">{language === 'en' ? 'Company' : '회사소개'}</h4>
                        <ul className="space-y-2 text-sm text-neutral-400">
                            <li><Link to={createPageUrl("Company")} className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to={createPageUrl("Contact")} className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link to={createPageUrl("Contact")} className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="font-bold text-sm mb-4 text-white uppercase tracking-wider">Legal</h4>
                        <ul className="space-y-2 text-sm text-neutral-400">
                            <li><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link to="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link to="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>
                
                <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-neutral-600 text-xs">
                    <p>© 2025 HOLO STUDIO. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <span>Seoul</span>
                        <span>Singapore</span>
                        <span>San Francisco</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}