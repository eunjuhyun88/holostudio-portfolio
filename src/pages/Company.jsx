import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from '@/components/LanguageContext';
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, CheckCircle2, ChevronRight, Play, ArrowUpRight } from 'lucide-react';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Company() {
    const { language } = useLanguage();
    const containerRef = useRef(null);

    const t = {
        en: {
            hero: {
                title: "Building the Infrastructure of Trust",
                subtitle: "We are building the fundamental safety and value layers for the autonomous AI economy."
            },
            story: {
                label: "OUR STORY",
                text: "Founded to solve the critical challenges of the AI era, Holo Studio enables a sustainable digital economy. We move beyond simple content creation to engineer verifying protocols, decentralized infrastructure, and economic models that make AI safe and valuable."
            },
            roles: [
                { title: "Engineers", color: "text-lime-400", icon: "square" },
                { title: "Researchers", color: "text-pink-500", icon: "circle" },
                { title: "Builders", color: "text-blue-600", icon: "triangle" },
                { title: "Contributors", color: "text-orange-500", icon: "hexagon" }
            ],
            history: {
                title: "Our Journey",
                items: [
                    { year: "2024", title: "Inception", desc: "Holo Studio founded with a vision to secure the AI economy." },
                    { year: "2025", title: "Foundation", desc: "Launching the core safety engine and proprietary model V1." },
                    { year: "2026", title: "Expansion", desc: "Opening infrastructure to third-party developers and launching DePIN testnet." }
                ]
            },
            values: {
                title: "We advocate for a decentralized future — loudly and clearly",
                button: "Read our vision"
            },
            careers: {
                title: "Join a team that's building the next layer of the internet",
                desc: "We're hiring across engineering, design, research, product, and more. Remote-first. Mission-aligned.",
                button: "See open roles"
            },
            media: {
                title: "Explore our press, media and brand assets",
                items: [
                    { title: "Press Releases", link: "#" },
                    { title: "Brand Assets", link: "#" }
                ]
            }
        },
        ko: {
            hero: {
                title: "신뢰의 인프라스트럭처를 구축합니다",
                subtitle: "자율 AI 경제를 위한 근본적인 안전 및 가치 레이어를 만듭니다."
            },
            story: {
                label: "OUR STORY",
                text: "AI 시대의 핵심 과제를 해결하기 위해 설립된 Holo Studio는 지속 가능한 디지털 경제를 실현합니다. 단순한 콘텐츠 생성을 넘어, AI를 안전하고 가치 있게 만드는 검증 프로토콜, 탈중앙화 인프라, 그리고 경제 모델을 설계합니다."
            },
            roles: [
                { title: "Engineers", color: "text-lime-400", icon: "square" },
                { title: "Researchers", color: "text-pink-500", icon: "circle" },
                { title: "Builders", color: "text-blue-600", icon: "triangle" },
                { title: "Contributors", color: "text-orange-500", icon: "hexagon" }
            ],
            history: {
                title: "Our Journey",
                items: [
                    { year: "2024", title: "시작 (Inception)", desc: "AI 경제의 보안을 위한 비전으로 Holo Studio 설립." },
                    { year: "2025", title: "기반 (Foundation)", desc: "핵심 안전 엔진 및 자체 모델 V1 출시." },
                    { year: "2026", title: "확장 (Expansion)", desc: "서드파티 개발자에게 인프라 개방 및 DePIN 테스트넷 런칭." }
                ]
            },
            values: {
                title: "우리는 탈중앙화된 미래를 강력하게 지지합니다",
                button: "비전 읽기"
            },
            careers: {
                title: "인터넷의 다음 레이어를 함께 만들어갈 팀에 합류하세요",
                desc: "엔지니어링, 디자인, 리서치, 프로덕트 등 다양한 분야에서 채용 중입니다. 리모트 퍼스트. 미션 중심.",
                button: "채용 공고 보기"
            },
            media: {
                title: "보도자료 및 브랜드 에셋",
                items: [
                    { title: "보도자료", link: "#" },
                    { title: "브랜드 가이드", link: "#" }
                ]
            }
        }
    };

    const c = t[language];

    return (
        <div ref={containerRef} className="bg-[#050505] min-h-screen text-white font-sans selection:bg-indigo-500/30 overflow-hidden">
            <SEO 
                title="Company" 
                description={c.hero.subtitle}
            />

            {/* 1. HERO SECTION */}
            <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-32">
                <div className="max-w-[1400px] mx-auto w-full z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-8xl lg:text-[7rem] font-bold leading-[1] tracking-tight mb-12 max-w-5xl">
                            {c.hero.title}
                        </h1>
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <Link to={createPageUrl('Products')}>
                                <Button className="rounded-full bg-[#ccff00] text-black hover:bg-[#b3e600] px-8 py-6 text-lg font-bold">
                                    {language === 'en' ? 'Explore Products' : '프로덕트 탐색'}
                                </Button>
                            </Link>
                            <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg">
                                {language === 'en' ? 'Our Vision' : '우리의 비전'}
                            </Button>
                        </div>
                    </motion.div>
                </div>
                
                {/* Abstract 3D Element Placeholder */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-30 md:opacity-100 pointer-events-none mix-blend-screen">
                     <div className="w-full h-full bg-gradient-to-l from-indigo-900/20 to-transparent" />
                </div>
            </section>

            {/* 2. OUR STORY */}
            <section className="py-32 px-6 md:px-12 border-t border-white/10">
                <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-3">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 bg-white" />
                            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">{c.story.label}</span>
                        </div>
                    </div>
                    <div className="md:col-span-9">
                        <p className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight text-neutral-200">
                            {c.story.text}
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. WHO WE ARE (ROLES) */}
            <section className="py-32 px-6 md:px-12 bg-[#080808] border-t border-white/10">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-12">WHO WE ARE</div>
                    <div className="space-y-4">
                        {c.roles.map((role, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex items-center gap-4 md:gap-8 cursor-default"
                            >
                                <div className={`hidden md:flex w-12 h-12 items-center justify-center border-2 ${role.color.replace('text', 'border')} opacity-0 group-hover:opacity-100 transition-opacity`}>
                                    {/* Simple geometric shapes based on icon prop */}
                                    <div className={`w-4 h-4 ${role.color.replace('text', 'bg')}`} />
                                </div>
                                <div className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter transition-transform duration-500 group-hover:translate-x-4">
                                    {role.title}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. HISTORY / TIMELINE */}
            <section className="py-32 px-6 md:px-12 border-t border-white/10">
                <div className="max-w-[1400px] mx-auto">
                    <h2 className="text-5xl md:text-7xl font-bold mb-24">{c.history.title}</h2>
                    
                    <div className="relative border-l border-white/20 ml-4 md:ml-0 md:pl-12 space-y-24">
                        {c.history.items.map((item, i) => (
                            <div key={i} className="relative pl-8 md:pl-0 grid md:grid-cols-12 gap-8 items-start group">
                                <div className="absolute -left-[5px] md:-left-[53px] top-2 w-3 h-3 bg-[#050505] border-2 border-white rounded-full group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-colors" />
                                
                                <div className="md:col-span-3">
                                    <div className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">{item.year}</div>
                                    <h3 className="text-2xl font-bold">{item.title}</h3>
                                </div>
                                <div className="md:col-span-6">
                                    <p className="text-xl text-neutral-400 leading-relaxed">{item.desc}</p>
                                </div>
                                <div className="md:col-span-3 hidden md:flex items-center justify-end">
                                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. VALUES / MISSION */}
            <section className="py-32 px-6 md:px-12 bg-neutral-900 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-medium leading-tight mb-12">
                        {c.values.title}
                    </h2>
                    <Button className="bg-[#ccff00] text-black hover:bg-[#b3e600] rounded-full px-8 h-12 font-bold">
                        {c.values.button}
                    </Button>
                </div>
            </section>

            {/* 6. CAREERS */}
            <section className="py-32 px-6 md:px-12 bg-[#050505] border-t border-neutral-800">
                <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">WORK WITH US</div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                            {c.careers.title}
                        </h2>
                        <p className="text-xl text-neutral-400 mb-8 max-w-lg">
                            {c.careers.desc}
                        </p>
                        <Button className="bg-[#ccff00] text-black hover:bg-[#b3e600] rounded-full px-8 h-12 font-bold">
                            {c.careers.button}
                        </Button>
                    </div>
                    <div className="relative aspect-square md:aspect-video bg-[#111] rounded-2xl overflow-hidden border border-white/10 group">
                        {/* Placeholder for team image or office */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 group-hover:opacity-80 transition-opacity" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-neutral-500 font-mono text-sm">TEAM CULTURE VISUAL</span>
                        </div>
                    </div>
                </div>
            </section>

             {/* 7. MEDIA */}
             <section className="py-24 px-6 md:px-12 border-t border-white/10">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-12">MEDIA</div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">{c.media.title}</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {c.media.items.map((item, i) => (
                            <a key={i} href={item.link} className="group block bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                                <div className="flex justify-between items-center mb-12">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                        <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-white" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                            </a>
                        ))}
                    </div>
                </div>
             </section>
        </div>
    );
}