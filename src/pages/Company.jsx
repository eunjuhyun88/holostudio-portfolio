import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useLanguage } from '@/components/LanguageContext';
import { useTheme } from '@/components/ThemeContext';
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin } from 'lucide-react';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

// --- FULLSCREEN SCENE COMPONENT ---
const Scene = ({ children, id, bgColor, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-20% 0px" });
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (isInView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [isInView, hasAnimated]);

    return (
        <section 
            ref={ref}
            id={id}
            className={`relative min-h-screen w-full flex items-center justify-center px-6 md:px-12 transition-colors duration-1000 ${bgColor}`}
            style={{
                scrollSnapAlign: 'start',
            }}
        >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 w-full max-w-[1400px]"
            >
                {children}
            </motion.div>
        </section>
    );
};

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
            
            {/* Tech Corners - Only dark mode */}
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

    // Define Scene Colors per theme
    const sceneColors = theme === 'dark' ? {
        foundation: 'bg-[#0A0A14]',
        observation: 'bg-[#0D1117]', 
        phase1: 'bg-[#1A1625]',
        phase2: 'bg-[#0F1419]',
        phase3: 'bg-[#18141C]',
        phase4: 'bg-[#0A0A0A]',
        engineered: 'bg-[#050510]',
        unified: 'bg-[#0A0A14]',
        credibility: 'bg-black',
        fit: 'bg-[#0D1117]',
        team: 'bg-[#0A0A0A]',
        cta: 'bg-[#050505]'
    } : {
        foundation: 'bg-neutral-50',
        observation: 'bg-blue-50',
        phase1: 'bg-orange-50',
        phase2: 'bg-emerald-50',
        phase3: 'bg-purple-50',
        phase4: 'bg-neutral-100',
        engineered: 'bg-white',
        unified: 'bg-neutral-50',
        credibility: 'bg-neutral-900',
        fit: 'bg-white',
        team: 'bg-neutral-50',
        cta: 'bg-white'
    };

    return (
        <div className={`min-h-screen font-sans overflow-x-hidden ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
        }`}>
            <SEO 
                title="Company" 
                description="Infrastructure Gap — Engineering the Missing Link in the AI Economy"
            />

            {/* SCENE 1: FOUNDATION */}
            <Scene id="foundation" bgColor={sceneColors.foundation} index={0}>
                <div className="text-left max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className={`text-xs md:text-sm font-mono tracking-[0.3em] uppercase mb-12 ${
                            theme === 'dark' ? 'text-indigo-400' : 'text-orange-600'
                        }`}
                    >
                        THE FOUNDATION
                    </motion.div>
                    
                    <h1 className={`text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-8 uppercase ${
                        theme === 'dark' ? 'text-white' : 'text-neutral-900'
                    }`}>
                        {c.intro.title}
                    </h1>

                    <p className={`text-lg md:text-2xl font-light max-w-2xl tracking-wide leading-relaxed ${
                        theme === 'dark' ? 'text-neutral-400' : 'text-neutral-700'
                    }`}>
                        {c.intro.subtitle}
                    </p>
                </div>
            </Scene>

            {/* SCENE 2: OBSERVATION */}
            <Scene id="observation" bgColor={sceneColors.observation} index={1}>
                <div className="max-w-4xl space-y-12">
                    {c.intro.text.map((text, i) => (
                        <p key={i} className={`text-2xl md:text-4xl font-black leading-tight ${
                            theme === 'dark' ? 'text-neutral-200' : 'text-neutral-800'
                        }`}>
                            {text}
                        </p>
                    ))}
                </div>
            </Scene>

            {/* SCENES 3-6: PHASES */}
            {c.chapters.map((chapter, idx) => (
                <Scene 
                    key={idx}
                    id={`phase-${idx + 1}`} 
                    bgColor={sceneColors[`phase${idx + 1}`]} 
                    index={idx + 2}
                >
                    <div className="max-w-6xl">
                        <div className={`text-xs font-mono tracking-[0.3em] uppercase mb-6 ${
                            theme === 'dark' ? 'text-indigo-400' : 'text-orange-600'
                        }`}>
                            {chapter.year}
                        </div>
                        
                        <h2 className={`text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] mb-12 uppercase ${
                            theme === 'dark' ? 'text-white' : 'text-neutral-900'
                        }`}>
                            {chapter.headline}
                        </h2>

                        <p className={`text-xl md:text-3xl font-black leading-snug max-w-4xl ${
                            theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                        }`}>
                            {chapter.content}
                        </p>
                    </div>
                </Scene>
            ))}

            {/* SCENE 7 & 8: THESIS (ENGINEERED + UNIFIED) */}
            {c.thesis.slice(0, 2).map((item, idx) => (
                <Scene 
                    key={idx}
                    id={`thesis-${idx + 1}`}
                    bgColor={idx === 0 ? sceneColors.engineered : sceneColors.unified}
                    index={idx + 6}
                >
                    <div className="max-w-6xl">
                        <h2 className={`text-4xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-16 uppercase ${
                            theme === 'dark' ? 'text-white' : 'text-neutral-900'
                        }`}>
                            {item.headline}
                        </h2>

                        <p className={`text-2xl md:text-4xl font-black leading-tight max-w-5xl ${
                            theme === 'dark' 
                                ? (idx === 0 ? 'text-indigo-300' : 'text-emerald-300')
                                : (idx === 0 ? 'text-orange-700' : 'text-blue-700')
                        }`}>
                            {item.content}
                        </p>
                    </div>
                </Scene>
            ))}

            {/* SCENE 9: CREDIBILITY (Most Important) */}
            <Scene id="credibility" bgColor={sceneColors.credibility} index={8}>
                <div className="text-center max-w-6xl mx-auto">
                    <p className={`text-3xl md:text-5xl lg:text-6xl font-black mb-16 leading-tight ${
                        theme === 'dark' ? 'text-neutral-400' : 'text-neutral-100'
                    }`}>
                        {language === 'en' 
                            ? "The scarce resource is no longer creativity."
                            : "더 이상 희소한 자원은 창의성이 아닙니다."}
                    </p>

                    <h2 className={`text-5xl md:text-8xl lg:text-[12rem] font-black tracking-tighter leading-[0.85] uppercase ${
                        theme === 'dark' ? 'text-white' : 'text-white'
                    }`}>
                        {language === 'en' ? "IT IS CREDIBILITY." : "바로 신뢰입니다."}
                    </h2>
                </div>
            </Scene>

            {/* SCENE 10: FOUNDER-MARKET FIT */}
            <Scene id="fit" bgColor={sceneColors.fit} index={9}>
                <div className="max-w-5xl">
                    <div className={`text-xs font-mono tracking-[0.3em] uppercase mb-6 ${
                        theme === 'dark' ? 'text-indigo-400' : 'text-orange-600'
                    }`}>
                        {c.identity.headline}
                    </div>

                    <p className={`text-3xl md:text-5xl lg:text-6xl font-black leading-tight ${
                        theme === 'dark' ? 'text-white' : 'text-neutral-900'
                    }`}>
                        {c.identity.content}
                    </p>
                </div>
            </Scene>

            {/* SCENE 11: TEAM */}
            <section id="team" className={`min-h-screen py-32 px-6 md:px-12 ${sceneColors.team}`}>
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-24">
                        <div className={`text-xs font-mono tracking-[0.3em] uppercase mb-6 ${
                            theme === 'dark' ? 'text-indigo-400' : 'text-orange-600'
                        }`}>
                            LEADERSHIP
                        </div>
                        <h2 className={`text-3xl md:text-5xl font-black mb-4 ${
                            theme === 'dark' ? 'text-white' : 'text-neutral-900'
                        }`}>
                            {language === 'en' ? "Builders at the Intersection." : "교차점의 빌더들."}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {c.founders.map((founder, i) => (
                            <FounderCard key={i} {...founder} delay={i * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* SCENE 12: CTA */}
            <Scene id="cta" bgColor={sceneColors.cta} index={11}>
                <div className="text-center max-w-4xl mx-auto">
                    <div className={`text-xs font-mono tracking-[0.3em] uppercase mb-8 ${
                        theme === 'dark' ? 'text-indigo-400' : 'text-orange-600'
                    }`}>
                        HOLO STUDIO
                    </div>

                    <h2 className={`text-3xl md:text-5xl lg:text-6xl font-black mb-16 leading-tight ${
                        theme === 'dark' ? 'text-white' : 'text-neutral-900'
                    }`}>
                        {language === 'en' 
                            ? "Ready to build the trust layer?"
                            : "신뢰 레이어를 함께 만드시겠습니까?"}
                    </h2>

                    <Link to={createPageUrl('Contact')}>
                        <Button className={`rounded-full px-12 h-16 text-xl font-bold transition-transform hover:scale-105 ${
                            theme === 'dark'
                                ? 'bg-white text-black hover:bg-neutral-200'
                                : 'bg-orange-500 text-white hover:bg-orange-600'
                        }`}>
                            {language === 'en' ? 'Connect With Us' : '문의하기'} <ArrowRight className="ml-2 w-6 h-6" />
                        </Button>
                    </Link>
                </div>
            </Scene>
        </div>
    );
}