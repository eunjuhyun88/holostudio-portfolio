import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { useLanguage } from '@/components/LanguageContext';
import { useTheme } from '@/components/ThemeContext';
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin } from 'lucide-react';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

// Founder Card Component
const FounderCard = ({ name, role, bio, motto, image, delay, linkedin }) => {
    const { theme } = useTheme();
    return (
    <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delay, duration: 0.6 }}
        className="group relative"
    >
        <div className={`relative aspect-square overflow-hidden mb-4 rounded-xl border transition-colors ${
            theme === 'dark'
                ? 'bg-neutral-900 border-white/10 group-hover:border-indigo-500/50'
                : 'bg-neutral-50 border-neutral-200 group-hover:border-neutral-900'
        }`}>
            {image ? (
                <div className={`w-full h-full flex items-center justify-center relative overflow-hidden ${
                    theme === 'dark' ? 'bg-neutral-800/50' : 'bg-neutral-100'
                }`}>
                    <img 
                        src={image} 
                        alt={name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{
                            filter: theme === 'dark' ? "grayscale(1) contrast(1.1)" : "none"
                        }} 
                    />
                    {theme === 'dark' && (
                        <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/10 transition-colors duration-300 mix-blend-overlay" />
                    )}
                </div>
            ) : (
                <div className={`w-full h-full flex items-center justify-center ${
                    theme === 'dark' ? 'bg-neutral-800 text-neutral-600' : 'bg-neutral-100 text-neutral-400'
                }`}>Image</div>
            )}
            
            {theme === 'dark' && (
                <>
                    <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/30 group-hover:border-indigo-500 transition-colors" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-white/30 group-hover:border-indigo-500 transition-colors" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white/30 group-hover:border-indigo-500 transition-colors" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/30 group-hover:border-indigo-500 transition-colors" />
                </>
            )}
        </div>

        <div className="space-y-3 pr-2">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className={`text-lg font-black leading-tight ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>{name}</h3>
                    <p className={`text-[10px] font-mono tracking-wider uppercase mt-1 font-bold ${
                        theme === 'dark' ? 'text-indigo-400' : 'text-neutral-700'
                    }`}>{role}</p>
                </div>
                {linkedin && (
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className={`p-1 transition-colors ${
                        theme === 'dark' ? 'text-neutral-500 hover:text-[#0077b5]' : 'text-neutral-400 hover:text-[#0077b5]'
                    }`}>
                        <Linkedin className="w-4 h-4" />
                    </a>
                )}
            </div>

            {motto && (
                <div className="relative py-2">
                     <p className={`font-black text-sm leading-snug ${
                         theme === 'dark' ? 'text-indigo-300' : 'text-orange-600'
                     }`}>{motto}</p>
                </div>
            )}
            
            <div className={`w-8 h-px transition-colors ${
                theme === 'dark' ? 'bg-white/10 group-hover:bg-indigo-500/50' : 'bg-neutral-300'
            }`} />
            
            <p className={`leading-snug text-xs whitespace-pre-line font-medium ${
                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-700'
            }`}>
                {bio}
            </p>
        </div>
    </motion.div>
)};

export default function Company() {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const [activeStage, setActiveStage] = useState(0);

    const content = {
        en: {
            intro: {
                episode: "The Foundation",
                title: "Infrastructure Gap",
                subtitle: "Engineering the Missing Link in the AI Economy",
                text: [
                    "We spent a decade designing virtual economies and real-time infrastructure for millions of users at EA, Netmarble, and Smilegate.",
                    "We know that rules without enforcement are meaningless. Simulation without verification is chaos.",
                    "As AI creation costs approach zero, verification costs explode. We build the infrastructure to solve this asymmetry."
                ]
            },
            chapters: [
                {
                    year: "Phase 1: 2014 – 2020",
                    headline: "Virtual Economies",
                    content: "We didn't just build games; we managed GDP-scale virtual economies. High concurrency. Real-time value exchange. We learned that digital assets only have value when the rules of ownership are enforceable."
                },
                {
                    year: "Phase 2: 2021 – 2023",
                    headline: "The Missing Link",
                    content: "AI simulated intelligence. Blockchain settled truth. But there was no bridge. No native structure existed to verify, attribute, or monetize the infinite flood of generative content. We identified this gap."
                },
                {
                    year: "Phase 3: 2024",
                    headline: "Market Failure",
                    content: "Deepfakes, IP theft, and platform liability. The absence of a trust layer caused a market failure. Enterprises froze adoption due to risk. Creators lost revenue. The market demanded a solution."
                },
                {
                    year: "Phase 4: 2025 & BEYOND",
                    headline: "The Trust Layer",
                    content: "Infrastructure for the autonomous age. Holo Studio is not a tool; it is the rail. Creation → Verification → Settlement. We enable AI to function as a trusted economic actor."
                }
            ],
            thesis: [
                {
                    headline: "ENGINEERED TRUST",
                    content: "Trust is not a sentiment; it is an engineering constraint. We provide mathematically verifiable safety and ownership."
                },
                {
                    headline: "UNIFIED STACK",
                    content: "Fragmented tools cannot scale with AI. We deliver a unified architecture where safety, provenance, and value routing operate as one atomic protocol."
                }
            ],
            identity: {
                 headline: "FOUNDER-MARKET FIT",
                 content: "Growth Hacker + Deep Tech Builder. We are not storytellers. We are system architects with a proven track record of managing high-stakes digital economies."
            },
            founders: [
                {
                    name: "Sungchul (Steven) Park",
                    role: "CEO",
                    motto: "Cross-border Strategy & Risk Management",
                    bio: `Managed 300B+ KRW Risk portfolios & $4M+ M&A Due Diligence.
Ex-CEO of Duel Partners, Ares Corp Global BD.
Stony Brook Valedictorian (GPA 4.0).`,
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Steven&backgroundColor=transparent",
                    linkedin: "https://www.linkedin.com/in/sungchul-park-364b531b2"
                },
                {
                    name: "Yongwan Kim",
                    role: "CTO",
                    motto: "Proven Scale at 1M+ CCU",
                    bio: `Architected global infrastructure for EA & Netmarble.
Delivered 99.99% uptime for massive multiplayer systems.
Holder of 5 core infrastructure patents.`,
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Yongwan&backgroundColor=transparent&glassesProbability=100",
                    linkedin: "https://www.linkedin.com/in/용완-김-02578b211/"
                },
                {
                    name: "Seongdae Kim",
                    role: "Chief Architect",
                    motto: "Core Engine & Rendering Specialist",
                    bio: `15+ years developing core engines at Unity & Netmarble.
Expert in real-time rendering pipelines and optimization.
Lead Architect for global AAA titles.`,
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Seongdae&backgroundColor=transparent",
                    linkedin: "https://www.linkedin.com/in/seongdae-kim-22539066/?originalSubdomain=kr"
                },
                {
                    name: "0xchew Hyun",
                    role: "Chief Builder",
                    motto: "Zero to One GTM Execution",
                    bio: `Founded MintedLab (#1 Web3 Growth Firm, $1M+ Revenue).
Led GTM for 150+ projects: Polkadot, Algorand, DFINITY.
Scaled communities from zero to millions of users.`,
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Eunjoo&backgroundColor=transparent",
                    linkedin: "https://www.linkedin.com/in/eunjoo-hyun"
                },
                {
                    name: "Antonio",
                    role: "Head of Ecosystem",
                    motto: "Ecosystem Growth Strategy",
                    bio: "Scaling Web3 ecosystems through data-driven GTM and strategic expansion.",
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Antonio&backgroundColor=transparent"
                },
                {
                    name: "Junhyeok Choi",
                    role: "Dev Team Lead",
                    motto: "Protocol Architecture",
                    bio: "Leading PlayArts protocol development and system architecture.",
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Junhyeok&backgroundColor=transparent"
                },
                {
                    name: "Minji You",
                    role: "Front Engineer",
                    motto: "UX/UI Engineering",
                    bio: "Crafting seamless user experiences with modern frontend stacks.",
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Minji&backgroundColor=transparent"
                },
                {
                    name: "Jaehyeon Kwon",
                    role: "Backend Engineer",
                    motto: "High-Performance Systems",
                    bio: "Building robust, scalable backend infrastructure for high-throughput data.",
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Jaehyeon&backgroundColor=transparent"
                }
            ],
            footer: {
                main: "Building AI Infrastructure with Embedded Trust at the intersection of Safety, Media, Gaming, and Trading."
            }
        },
        ko: {
            intro: {
                episode: "THE FOUNDATION",
                title: "Infrastructure Gap",
                subtitle: "AI 경제에 빠진 레이어를 만듭니다",
                text: [
                    "우리는 EA, 넷마블, 스마일게이트에서 수백만 유저의 가상 경제를 10년간 설계했습니다.",
                    "100만+ 동시접속. 실시간 가치 교환. 99.99% 업타임.",
                    "그 규모에서 배운 것: 규칙 없는 집행은 의미 없다. 검증 없는 시뮬레이션은 혼돈이다."
                ]
            },
            chapters: [
                {
                    year: "PHASE 1: 2014 – 2020",
                    headline: "가상 경제",
                    content: "우리는 게임을 만든 게 아닙니다. GDP 규모의 가상 경제를 운영했습니다. 디지털 자산은 소유권 규칙이 집행 가능하고 위반이 실시간으로 탐지될 때만 가치를 유지했습니다. 여기서 배웠습니다: 신뢰는 UX 기능이 아니다. 엔지니어링 제약 조건이다."
                },
                {
                    year: "PHASE 2: 2021 – 2023",
                    headline: "빠진 고리",
                    content: "AI는 지능을 시뮬레이션했습니다. 블록체인은 진실을 정산했습니다. 하지만 둘 사이에 다리가 없었습니다. 무한히 쏟아지는 생성형 콘텐츠를 검증하고, 귀속시키고, 수익화할 인프라가 없었습니다. 창작은 가속했습니다. 검증은 그러지 못했습니다."
                },
                {
                    year: "PHASE 3: 2024",
                    headline: "시장 실패",
                    content: "딥페이크. IP 도용. 플랫폼 책임. 신뢰 레이어의 부재가 시장 실패를 일으켰습니다. 기업들은 리스크 때문에 AI 도입을 얼렸습니다. 창작자들은 수익을 잃었습니다. 출처를 집행할 수 없어서 가치가 새어나갔습니다. 시장은 더 많은 AI 도구가 필요한 게 아니었습니다. 신뢰 레이어가 필요했습니다."
                },
                {
                    year: "PHASE 4: 2025 & BEYOND",
                    headline: "신뢰 레이어",
                    content: "Holo Studio는 도구가 아닙니다. 레일입니다. Creation → Verification → Ownership → Settlement. AI가 신뢰받는 경제 주체로 기능하게 합니다."
                }
            ],
            thesis: [
                {
                    headline: "ENGINEERED TRUST",
                    content: "신뢰는 감정이 아닙니다. 공학 제약 조건입니다. 수학적으로 검증 가능한 안전과 소유권을 제공합니다."
                },
                {
                    headline: "UNIFIED STACK",
                    content: "파편화된 도구는 AI와 함께 스케일되지 못합니다. 검증, 소유권, 수익화가 하나의 원자적 시스템으로 작동합니다."
                },
                {
                    headline: "VERIFICATION-FIRST",
                    content: "검증이 모든 것의 시작입니다. 검증 없는 소유권은 의미 없고, 소유권 없는 수익화는 불가능합니다."
                }
            ],
            identity: {
                 headline: "LEADERSHIP",
                 content: "Builders at the Intersection. 게임 인프라, 가상 경제, Web3의 교차점에서 왔습니다."
            },
            founders: [
                {
                    name: "박성철 (Steven Park)",
                    role: "CEO",
                    motto: "Cross-border Strategy & Risk Management",
                    bio: `3,000억원+ 리스크 포트폴리오 관리 · $4M+ M&A 실사
듀얼파트너스 前 CEO
스토니브룩 대학 수석 졸업 (GPA 4.0)`,
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Steven&backgroundColor=transparent",
                    linkedin: "https://www.linkedin.com/in/sungchul-park-364b531b2"
                },
                {
                    name: "김용완",
                    role: "CTO",
                    motto: "Proven Scale at 1M+ CCU",
                    bio: `EA Asia, 넷마블 글로벌 인프라 설계
100만 CCU, 99.99% 업타임
핵심 인프라 특허 5건
크래프톤, 펄어비스, 스마일게이트 직접 네트워크`,
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Yongwan&backgroundColor=transparent&glassesProbability=100",
                    linkedin: "https://www.linkedin.com/in/용완-김-02578b211/"
                },
                {
                    name: "김성대",
                    role: "CHIEF ARCHITECT",
                    motto: "Core Engine & Rendering Specialist",
                    bio: `Unity, 넷마블 15년+ 코어 엔진 개발
글로벌 AAA 타이틀 리드 아키텍트
실시간 렌더링 파이프라인 전문`,
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Seongdae&backgroundColor=transparent",
                    linkedin: "https://www.linkedin.com/in/seongdae-kim-22539066/?originalSubdomain=kr"
                },
                {
                    name: "0xchew 현",
                    role: "CHIEF BUILDER",
                    motto: "Zero to One GTM Execution",
                    bio: `MintedLab 창업 ($1M+ 매출)
150+ 프로젝트 GTM: Polkadot, Algorand, DFINITY
0에서 수백만 유저 커뮤니티 스케일링`,
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Eunjoo&backgroundColor=transparent",
                    linkedin: "https://www.linkedin.com/in/eunjoo-hyun"
                },
                {
                    name: "Antonio",
                    role: "HEAD OF ECOSYSTEM",
                    motto: "Ecosystem Growth Strategy",
                    bio: "Web3 에코시스템 확장\n데이터 기반 GTM",
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Antonio&backgroundColor=transparent"
                },
                {
                    name: "최준혁",
                    role: "DEV TEAM LEAD",
                    motto: "Protocol Architecture",
                    bio: "PlayArts 프로토콜 개발\n시스템 아키텍처 리드",
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Junhyeok&backgroundColor=transparent"
                },
                {
                    name: "유민지",
                    role: "FRONT ENGINEER",
                    motto: "UX/UI Engineering",
                    bio: "UX/UI 엔지니어링\n모던 프론트엔드 스택",
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Minji&backgroundColor=transparent"
                },
                {
                    name: "권재현",
                    role: "BACKEND ENGINEER",
                    motto: "High-Performance Systems",
                    bio: "고처리량 백엔드 인프라\n확장 가능한 시스템 구축",
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Jaehyeon&backgroundColor=transparent"
                }
            ],
            footer: {
                main: "AI 안전, 미디어, 게임, 트레이딩의 교차점에서 신뢰가 내재된 AI 인프라 비즈니스를 구축합니다."
            }
        }
    };

    const c = content[language] || content.en;

    // Color palettes - matching Home page aesthetic
    const scenePalettes = theme === 'dark' ? {
        foundation: { bg: 'bg-black/90', text: 'text-white', accent: 'text-indigo-400' },
        observation: { bg: 'bg-black/85', text: 'text-neutral-200', accent: 'text-blue-400' },
        phase1: { bg: 'bg-black/80', text: 'text-white', accent: 'text-purple-400' },
        phase2: { bg: 'bg-black/85', text: 'text-white', accent: 'text-cyan-400' },
        phase3: { bg: 'bg-black/90', text: 'text-white', accent: 'text-pink-400' },
        phase4: { bg: 'bg-black/95', text: 'text-white', accent: 'text-indigo-400' },
        engineered: { bg: 'bg-black/90', text: 'text-white', accent: 'text-orange-400' },
        unified: { bg: 'bg-black/85', text: 'text-white', accent: 'text-emerald-400' },
        credibility: { bg: 'bg-black', text: 'text-white', accent: 'text-yellow-400' },
        fit: { bg: 'bg-black/90', text: 'text-white', accent: 'text-indigo-400' },
        team: { bg: 'bg-black/95', text: 'text-white', accent: 'text-blue-400' },
        cta: { bg: 'bg-black', text: 'text-white', accent: 'text-indigo-400' }
    } : {
        foundation: { bg: 'bg-white', text: 'text-neutral-900', accent: 'text-orange-600' },
        observation: { bg: 'bg-gradient-to-br from-blue-50 to-cyan-50', text: 'text-neutral-800', accent: 'text-blue-700' },
        phase1: { bg: 'bg-gradient-to-br from-orange-50 to-amber-50', text: 'text-neutral-900', accent: 'text-orange-700' },
        phase2: { bg: 'bg-gradient-to-br from-emerald-50 to-teal-50', text: 'text-neutral-900', accent: 'text-emerald-700' },
        phase3: { bg: 'bg-gradient-to-br from-purple-50 to-pink-50', text: 'text-neutral-900', accent: 'text-purple-700' },
        phase4: { bg: 'bg-gradient-to-br from-neutral-100 to-slate-100', text: 'text-neutral-900', accent: 'text-neutral-900' },
        engineered: { bg: 'bg-white', text: 'text-neutral-900', accent: 'text-orange-600' },
        unified: { bg: 'bg-gradient-to-br from-neutral-50 to-blue-50', text: 'text-neutral-900', accent: 'text-blue-700' },
        credibility: { bg: 'bg-neutral-900', text: 'text-white', accent: 'text-yellow-400' },
        fit: { bg: 'bg-white', text: 'text-neutral-900', accent: 'text-orange-600' },
        team: { bg: 'bg-gradient-to-br from-neutral-50 to-slate-50', text: 'text-neutral-900', accent: 'text-neutral-900' },
        cta: { bg: 'bg-white', text: 'text-neutral-900', accent: 'text-orange-600' }
    };

    // Build story sections for scrollytelling
    const storySections = [
        { id: 'foundation', type: 'intro', data: c.intro, palette: scenePalettes.foundation },
        ...c.intro.text.map((text, i) => ({ 
            id: `obs-${i}`, 
            type: 'observation', 
            data: { text }, 
            palette: scenePalettes.observation 
        })),
        ...c.chapters.map((chapter, i) => ({ 
            id: `phase-${i}`, 
            type: 'chapter', 
            data: chapter, 
            palette: scenePalettes[`phase${i + 1}`] 
        })),
        ...c.thesis.map((item, i) => ({ 
            id: `thesis-${i}`, 
            type: 'thesis', 
            data: item, 
            palette: i === 0 ? scenePalettes.engineered : scenePalettes.unified 
        })),
        { id: 'credibility', type: 'credibility', data: {}, palette: scenePalettes.credibility },
        { id: 'fit', type: 'fit', data: c.identity, palette: scenePalettes.fit }
    ];

    return (
        <div className={`min-h-screen font-sans overflow-x-hidden relative ${
            theme === 'dark' ? 'bg-[#050505] text-white' : 'bg-white text-neutral-900'
        }`}>
            <SEO 
                title="Company" 
                description="Infrastructure Gap — Engineering the Missing Link in the AI Economy"
            />

            {/* Fixed Background Layer */}
            {theme === 'dark' && (
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02]" />
                </div>
            )}

            {/* Scrollytelling Section */}
            <section className="relative z-10">
                {/* Sticky Background Transitions */}
                <div className="hidden md:block sticky top-0 h-screen w-full overflow-hidden -z-10">
                    <AnimatePresence mode="wait">
                        {storySections.map((section, idx) => (
                            idx === activeStage && (
                                <motion.div
                                    key={section.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
                                    className={`absolute inset-0 w-full h-full ${section.palette.bg}`}
                                >
                                    {theme === 'dark' && (
                                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-40" />
                                    )}
                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015]" />
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>

                {/* Scrolling Content Cards - Stacked Layout */}
                <div className="relative">
                    {storySections.map((section, idx) => {
                        const ref = useRef(null);
                        const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

                        useEffect(() => {
                            if (isInView) setActiveStage(idx);
                        }, [isInView, idx]);

                        return (
                            <div 
                                key={section.id} 
                                ref={ref} 
                                className={`min-h-screen w-full flex items-center justify-center px-6 md:px-12 sticky top-0 ${
                                    theme === 'light' ? section.palette.bg : ''
                                }`}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, margin: "-30%" }}
                                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                                    className={`max-w-4xl w-full ${
                                        theme === 'dark' 
                                            ? 'backdrop-blur-sm bg-black/20 p-8 md:p-12 rounded-3xl border border-white/5' 
                                            : 'p-8 md:p-12'
                                    }`}
                                >
                                    {section.type === 'intro' && (
                                        <div className="space-y-6">
                                            <div className={`inline-block text-xs font-mono tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border font-bold ${
                                                theme === 'dark' 
                                                    ? 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10' 
                                                    : 'text-orange-600 border-orange-300 bg-orange-100'
                                            }`}>
                                                {section.data.episode}
                                            </div>
                                            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] ${section.palette.text}`}>
                                                {section.data.title}
                                            </h1>
                                            <p className={`text-xl md:text-2xl font-light leading-relaxed ${
                                                theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
                                            }`}>
                                                {section.data.subtitle}
                                            </p>
                                        </div>
                                    )}

                                    {section.type === 'observation' && (
                                        <div className={`border-l-4 pl-6 ${
                                            theme === 'dark' ? 'border-indigo-500/50' : 'border-blue-400'
                                        }`}>
                                            <p className={`text-2xl md:text-4xl font-bold leading-snug ${section.palette.text}`}>
                                                {section.data.text}
                                            </p>
                                        </div>
                                    )}

                                    {section.type === 'chapter' && (
                                        <div className="space-y-6">
                                            <div className={`inline-block text-xs font-mono tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border font-bold ${
                                                theme === 'dark' 
                                                    ? `${section.palette.accent} border-current/30 bg-current/10` 
                                                    : `${section.palette.accent} border-current/30 bg-current/10`
                                            }`}>
                                                {section.data.year}
                                            </div>
                                            <h2 className={`text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.9] ${section.palette.text}`}>
                                                {section.data.headline}
                                            </h2>
                                            <p className={`text-lg md:text-2xl font-light leading-relaxed ${
                                                theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                                            }`}>
                                                {section.data.content}
                                            </p>
                                        </div>
                                    )}

                                    {section.type === 'thesis' && (
                                        <div className="space-y-8">
                                            <h2 className={`text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.9] ${section.palette.text}`}>
                                                {section.data.headline}
                                            </h2>
                                            <div className={`border-l-4 pl-6 ${
                                                theme === 'dark' ? 'border-current/50' : 'border-current/30'
                                            }`}>
                                                <p className={`text-xl md:text-2xl font-light leading-relaxed ${section.palette.accent}`}>
                                                    {section.data.content}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {section.type === 'credibility' && (
                                        <div className="text-center space-y-12">
                                            <p className={`text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed ${
                                                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-300'
                                            }`}>
                                                {language === 'en' 
                                                    ? "The scarce resource is no longer creativity."
                                                    : "더 이상 희소한 자원은 창의성이 아닙니다."}
                                            </p>
                                            <h2 className={`text-5xl md:text-7xl lg:text-9xl font-black tracking-tight leading-[0.85] ${
                                                theme === 'dark' ? 'text-white' : 'text-white'
                                            }`}>
                                                {language === 'en' ? "IT IS CREDIBILITY." : "바로 신뢰입니다."}
                                            </h2>
                                        </div>
                                    )}

                                    {section.type === 'fit' && (
                                        <div className="space-y-6">
                                            <div className={`inline-block text-xs font-mono tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border font-bold ${
                                                theme === 'dark' 
                                                    ? 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10' 
                                                    : 'text-orange-600 border-orange-300 bg-orange-100'
                                            }`}>
                                                {section.data.headline}
                                            </div>
                                            <p className={`text-2xl md:text-3xl lg:text-5xl font-bold leading-tight ${section.palette.text}`}>
                                                {section.data.content}
                                            </p>
                                        </div>
                                    )}
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className={`relative py-24 md:py-32 px-6 md:px-12 border-y ${
                theme === 'dark' 
                    ? 'bg-black/40 border-white/5 backdrop-blur-sm' 
                    : 'bg-gradient-to-br from-neutral-50 to-slate-50 border-neutral-200'
            }`}>
                {theme === 'dark' && (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent pointer-events-none" />
                )}
                
                <div className="max-w-[1400px] mx-auto w-full relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 md:mb-20"
                    >
                        <div className={`inline-block text-xs font-mono tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border mb-6 font-bold ${
                            theme === 'dark' 
                                ? 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10' 
                                : 'text-orange-600 border-orange-300 bg-orange-100'
                        }`}>LEADERSHIP</div>
                        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black ${scenePalettes.team.text}`}>
                            {language === 'en' ? "Builders at the Intersection." : "교차점의 빌더들."}
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                        {c.founders.map((founder, i) => (
                            <FounderCard key={i} {...founder} delay={i * 0.08} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={`relative min-h-[70vh] flex items-center justify-center px-6 border-t overflow-hidden ${
                theme === 'dark' 
                    ? 'bg-gradient-to-b from-black via-black to-indigo-950/20 border-white/5' 
                    : 'bg-gradient-to-br from-white via-orange-50/20 to-violet-50/20 border-neutral-200'
            }`}>
                {theme === 'dark' && (
                    <>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/5 via-transparent to-transparent" />
                    </>
                )}
                
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto relative z-10"
                >
                    <div className={`inline-block text-xs font-mono tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border mb-8 font-bold ${
                        theme === 'dark' 
                            ? 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10' 
                            : 'text-orange-600 border-orange-300 bg-orange-100'
                    }`}>HOLO STUDIO</div>

                    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black mb-12 leading-tight ${scenePalettes.cta.text}`}>
                        {language === 'en' 
                            ? "Ready to build the trust layer?"
                            : "신뢰 레이어를 함께 만드시겠습니까?"}
                    </h2>

                    <Link to={createPageUrl('Contact')}>
                        <Button className={`rounded-full px-12 md:px-14 h-14 md:h-16 text-base md:text-lg font-bold border-0 transition-all hover:scale-105 shadow-xl ${
                            theme === 'dark'
                                ? 'bg-white text-black hover:bg-neutral-200 shadow-white/20'
                                : 'bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 hover:from-cyan-400 hover:via-violet-400 hover:to-pink-400 text-white hover:shadow-2xl'
                        }`}>
                            {language === 'en' ? 'Connect With Us' : '문의하기'} <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}