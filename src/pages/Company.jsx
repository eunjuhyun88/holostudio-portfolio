import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from '@/components/LanguageContext';
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Plus, Minus } from 'lucide-react';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Starfield from '@/components/Starfield';
import PerspectiveCrawl from '@/components/PerspectiveCrawl';

// --- Components ---

// Typing Scroll Component
const TypingBlock = ({ children, className = "" }) => {
    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.9', 'end 0.5']
    });
    
    const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
    
    const words = String(children).split(" ");
    
    return (
        <motion.p 
            ref={element}
            style={{ scale, y }}
            className={`${className} inline-block w-full`} 
        >
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
                // Reveal from dark grey (opacity 0.2) to white (opacity 1)
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
                return (
                    <motion.span 
                        key={i}
                        style={{ opacity }}
                        className="inline-block mr-[0.2em]"
                    >
                        {word}
                    </motion.span>
                );
            })}
        </motion.p>
    );
};

const Word = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0.1, 1]);
    return (
        <span className="inline-block mr-[0.12em] last:mr-0">
            <motion.span 
                style={{ opacity }}
                className="transition-colors duration-100"
            >
                {children}
            </motion.span>
        </span>
    );
};

// Timeline Story Component
const StoryNode = ({ year, headline, content, index }) => (
    <div className="relative py-12 md:py-20 group">
        {/* Mobile Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10 md:hidden" />
        
        {/* Desktop Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent hidden md:block" />

        <div className={`flex flex-col md:flex-row gap-8 md:gap-24 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
            
            {/* Year Marker */}
            <div className="pl-16 md:pl-0 w-full md:w-auto md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center justify-start md:justify-center z-10">
                 <div className="relative">
                    <div className="absolute inset-0 bg-indigo-500 blur-xl opacity-20" />
                    <div className="relative w-auto px-4 h-10 rounded-full border border-indigo-500/30 bg-[#050505] flex items-center justify-center text-indigo-400 font-mono text-sm shadow-lg whitespace-nowrap">
                        {year}
                    </div>
                 </div>
            </div>

            {/* Content Side */}
            <div className={`flex-1 pl-16 md:pl-0 relative ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-tight">
                        <ScrollRevealText>
                            {headline}
                        </ScrollRevealText>
                    </h2>
                    <div className={`text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-2xl ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                        <ScrollRevealText>
                            {content}
                        </ScrollRevealText>
                    </div>
                </div>
            </div>

            {/* Empty Side for balance */}
            <div className="flex-1 hidden md:block" />
        </div>
    </div>
);

// Enhanced Thesis Section with Sticky Scroll and Color Transitions
const ThesisSection = ({ items }) => {
    return (
        <div className="relative">
            {items.map((item, index) => (
                <StickyThesisItem key={index} item={item} index={index} total={items.length} />
            ))}
        </div>
    );
};

const StickyThesisItem = ({ item, index, total }) => {
    const ref = useRef(null);
    // Use layout effect for stickiness, but parallax based on viewport
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Parallax and fade effects for content as it scrolls
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

    const isEven = index % 2 === 0;
    
    // Unified Dark Palette for Star Wars / Space Vibe
    // We keep the background consistently dark/black, but subtle glows/accents change
    const palettes = [
        { bg: "bg-[#050505]", text: "text-indigo-400", accent: "text-indigo-500/20" }, 
        { bg: "bg-[#050505]", text: "text-emerald-400", accent: "text-emerald-500/20" }, 
        { bg: "bg-[#050505]", text: "text-orange-400", accent: "text-orange-500/20" }, 
        { bg: "bg-[#050505]", text: "text-lime-400", accent: "text-lime-500/20" }, 
    ];

    const currentPalette = palettes[index % palettes.length];
    
    return (
        <div ref={ref} className="relative h-screen flex items-center sticky top-0 overflow-hidden">
            {/* Background Layer - Cosmic Deep Space Vibe */}
            <div className="absolute inset-0 bg-[#050505] z-0" />
            
            {/* Subtle Glow/Nebula effect based on palette */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] rounded-full blur-[150px] opacity-20 ${currentPalette.bg.replace('bg-', 'bg-') === 'bg-[#050505]' ? currentPalette.accent.replace('text-', 'bg-').replace('/20', '') : 'bg-indigo-900'} z-0 pointer-events-none`} />
            
            {/* Star field overlay (static or subtle movement could be added) */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0" />

            <motion.div 
                style={{ y, opacity, scale }}
                className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12"
            >
                 <div className="max-w-6xl">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Huge Number Index - Outline Style for Sci-Fi feel */}
                        <div className={`text-[12rem] md:text-[20rem] font-black leading-none opacity-10 absolute -top-20 -left-10 select-none text-transparent stroke-white`} style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}>
                            {index + 1}
                        </div>

                        <h2 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-12 tracking-tighter leading-[0.9] text-white relative`}>
                             {/* Apply ScrollRevealText for "written one by one" effect here too if desired, but user asked specifically for the crawl part. 
                                 However, to match the tone, let's keep it bold and clean. */}
                            {item.headline}
                        </h2>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={`text-lg md:text-2xl lg:text-3xl font-light leading-snug max-w-4xl ml-auto ${currentPalette.text}`}
                    >
                        {item.content}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

// Team Identity Component - Inspired by Consensys style
const TeamIdentity = ({ identity }) => (
    <div className="min-h-[80vh] flex flex-col justify-center px-6 md:px-12 max-w-[1600px] mx-auto py-24">
        <div className="mb-8 md:mb-16">
            <div className="w-8 h-8 bg-[#4F6F52] mb-8" />
            <h2 className="text-sm font-bold tracking-widest uppercase text-neutral-400 mb-2">{identity.headline}</h2>
        </div>

        <div className="text-[6vw] md:text-[5vw] leading-[0.9] font-bold tracking-tighter text-white select-none flex flex-col">
            <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="text-indigo-500">Engineers</span>
            </motion.div>

            <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="pl-[1em]"
            >
                <span className="text-emerald-500">Researchers</span>
            </motion.div>

            <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="pl-[0.5em]"
            >
                <span className="text-orange-500">Builders</span>
            </motion.div>

            <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pl-[2em]"
            >
                <span className="text-lime-500">Veterans</span>
            </motion.div>
        </div>

        <div className="mt-16 md:mt-24 max-w-3xl ml-auto border-l-2 border-white/20 pl-8">
            <p className="text-lg md:text-2xl text-neutral-300 leading-relaxed">
                {identity.content}
            </p>
        </div>
    </div>
);


// Founder Card Component
const FounderCard = ({ name, role, bio, image, delay }) => (
    <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delay, duration: 0.6 }}
        className="group"
    >
        <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 mb-8 rounded-sm">
            {image ? (
                <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" />
            ) : (
                <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-neutral-600">Image</div>
            )}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>

        <div className="space-y-4 pr-4">
            <div>
                <h3 className="text-3xl font-bold text-white mb-1">{name}</h3>
                <p className="text-sm font-mono text-indigo-400 tracking-wider uppercase">{role}</p>
            </div>
            
            <div className="w-12 h-px bg-white/20" />
            
            <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                {bio}
            </p>
        </div>
    </motion.div>
);


export default function Company() {
    const { language } = useLanguage();
    const [activeIndex, setActiveIndex] = React.useState(0);
    
    // Visual State Management
    const visualState = useMemo(() => {
        return {
            showNoise: [0, 1].includes(activeIndex),
            showGuardRail: [2].includes(activeIndex),
            showLines: [3].includes(activeIndex),
            showRouting: [3].includes(activeIndex),
            showVerification: [2].includes(activeIndex),
            darker: [0, 4].includes(activeIndex),
        };
    }, [activeIndex]);

    const content = {
        en: {
            intro: {
                episode: "Episode I",
                title: "The Trust Layer",
                subtitle: "FROM GAMING ARCHITECTS TO AI TRUST BUILDERS",
                text: [
                    "Long before AI flooded the galaxy with infinite creation, there were builders shaping virtual worlds at scale. We did not arrive here by accident.",
                    "For over a decade, we were architects inside the largest digital universes—EA, Netmarble, Smilegate—designing economies, simulations, and infrastructure that served millions in real time.",
                    "In those worlds, we learned a fundamental truth: digital assets must feel as real as physical ones, or the system collapses."
                ]
            },
            chapters: [
                {
                    year: "2014 – 2020",
                    headline: "THE GAMING ERA",
                    content: "Before “Metaverse” and “Web3” entered the public lexicon, we were already operating massive multiplayer systems—balancing virtual economies, securing high-concurrency environments, and enforcing rules where value had to be earned, not imagined. Games taught us something critical: simulation without rules becomes chaos. Value without enforcement dissolves."
                },
                {
                    year: "2021 – 2023",
                    headline: "THE CONVERGENCE",
                    content: "Then, two forces collided. AI taught the world how to simulate intelligence. Crypto taught the world how to settle truth. We recognized the missing bridge. Gaming gave us simulation. Blockchain gave us settlement. What was missing was trust for generative assets. So we began building the infrastructure to connect these worlds—solving what became the oracle problem for AI-generated content: How does something created infinitely become verifiable finitely?"
                },
                {
                    year: "2024",
                    headline: "THE COLLAPSE OF TRUST",
                    content: "Generative AI exploded. Creation became effortless. And trust collapsed. Attribution broke. Accountability faded. Value leaked across platforms without origin or credit. The galaxy was flooded with content—but no system to distinguish signal from noise, human from machine, truth from fabrication. So we pivoted. We focused everything we had learned—from adversarial systems, economic design, and large-scale infrastructure—into one mission: to build the trust layer for the age of infinite creation. That system became HoloStudio."
                },
                {
                    year: "INFRASTRUCTURE",
                    headline: "BUILDING THE TRUST LAYER",
                    content: "HoloStudio treats content not as static files, but as living events: Creation. Verification. Propagation. Settlement. Stories move. Value flows. And every contribution must be attributable. We build the infrastructure where provenance is native, credit is programmable, and trust is enforced by systems—not promises."
                },
                {
                    year: "2025 & Beyond",
                    headline: "THE AUTONOMOUS AGE",
                    content: "The next era will not be run by applications. It will be run by autonomous agents. Agents that create. Agents that trade. Agents that interact without supervision. We are building the operating system where this is possible—a world where “Made by Human” and “Verified AI” coexist on a trustless settlement layer. Because the scarce resource is no longer creativity. It is credibility."
                }
            ],
            thesis: [
                {
                    headline: "A CHOICE FOR THE FUTURE",
                    content: "The future is not neutral. It is a choice between chaos and credibility. Between infinite generation and finite trust."
                },
                {
                    headline: "A UNIFIED SYSTEM",
                    content: "We do not build disconnected products. We build a single coherent system—where trust enables distribution, and distribution creates value. From adversarial defense to economic settlement, every layer is connected."
                }
            ],
            identity: {
                 headline: "WHO WE ARE",
                 content: "We are not new to this galaxy. For over a decade, we have built infrastructure that served millions. Now, we are converging that experience into one purpose: to build the safeguards that allow generative media to scale without losing humanity. The systems that will define the next decade do not exist yet. We are here to build them."
            },
            founders: [
                {
                    name: "Steven Park",
                    role: "Co-Founder & CEO",
                    bio: "Global Strategy & Defense. Led cross-border AI/Web3 strategy connecting Silicon Valley tech with Asian gaming giants. Deep expertise in GTM for decentralized protocols.",
                    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/adcd1f3a8_2025-12-1820101.png"
                },
                {
                    name: "Yongwan Kim",
                    role: "Co-Founder & CTO",
                    bio: "10+ years in Gaming & Infra. Former EA & Netmarble. Expert in Kubernetes, DevOps, and Test Automation at massive scale. Combining deep engineering rigor with AI innovation.",
                    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/289c24d41_2025-12-1820103.png"
                },
                {
                    name: "Seongdae Kim",
                    role: "Co-Founder & Chief Architect",
                    bio: "Graphics & Systems Veteran. Former Unity, Netmarble, Smilegate. Master of real-time rendering pipelines and performance-critical systems.",
                    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/baf658d9f_2025-12-1820104.png"
                }
            ],
        },
        ko: {
             chapters: [
                {
                    year: "2014 - 2020",
                    headline: "The Gaming Era",
                    content: "EA, 넷마블, 스마일게이트. 우리는 지난 10년간 세계 최고의 게임 회사에서 가상 경제와 대규모 인프라를 설계했습니다. 수백만 유저의 트래픽을 처리하며, 디지털 자산이 물리적 자산만큼 견고해야 함을 배웠습니다."
                },
                {
                    year: "2021 - 2023",
                    headline: "The Convergence",
                    content: "AI와 블록체인의 충돌을 목격했습니다. 게임은 우리에게 시뮬레이션을, 크립토는 정산을 가르쳐주었습니다. 우리는 이 두 세계를 연결하는 인프라를 구축하기 시작했고, 생성형 자산을 위한 '오라클 문제'를 해결하는 데 집중했습니다."
                },
                {
                    year: "2024",
                    headline: "Building the Trust Layer",
                    content: "생성형 AI의 폭발과 함께 신뢰는 붕괴했습니다. 우리는 축적된 인프라 전문성을 바탕으로 HoloStudio를 구축했습니다. 무한한 콘텐츠의 시대에 출처, 기여, 가치 흐름을 투명하게 검증하는 통합 시스템입니다."
                },
                {
                    year: "2025 & Beyond",
                    headline: "The OS for Autonomous Agents",
                    content: "우리는 AI 에이전트들이 안전하게 거래하고, 창작하고, 상호작용할 수 있는 운영 체제를 만듭니다. '인간의 창작'과 '검증된 AI'가 신뢰할 수 있는 정산 레이어 위에서 공존하는 세상을 만듭니다."
                }
            ],
            thesis: [
                {
                    headline: "이제 희소한 자원은 창의성이 아니라, '신뢰성'입니다.",
                    content: "AI는 창작의 비용을 획기적으로 낮췄지만, 신뢰를 무너뜨렸습니다. 모두가 크리에이터가 된 세상에서 이야기는 검증 속도보다 빠르게 확산됩니다. 출처는 끊기고, 책임은 희미해지며, 가치는 누수됩니다."
                },
                {
                    headline: "생성형 미디어에는 '신뢰 레이어'가 필요합니다.",
                    content: "우리는 콘텐츠를 정적인 파일이 아닌, 생성-검증-전파-정산으로 이어지는 '살아있는 이벤트'로 정의합니다. HoloStudio는 이야기가 검증 가능하고 기여가 투명하게 귀속되는 인프라를 만듭니다."
                },
                {
                    headline: "자율 에이전트 시대를 위한 통합 인프라.",
                    content: "우리는 분절된 제품이 아닌, 하나의 일관된 시스템을 만듭니다. 신뢰가 확산을 가능하게 하고, 확산이 가치를 창출하는 선순환 구조. 적대적 방어부터 경제적 정산까지 모든 레이어가 연결되어 있습니다."
                },
                {
                    headline: "미래는 혼돈과 신뢰 사이의 선택입니다.",
                    content: "우리는 인간성을 잃지 않으면서 생성형 미디어가 확장될 수 있는 안전장치를 만듭니다. 다음 10년을 정의할 시스템, HoloStudio가 만듭니다."
                }
            ],
            founders: [
                {
                    name: "Steven Park",
                    role: "Co-Founder & CEO",
                    bio: "Global Strategy & Defense. 실리콘밸리 테크와 아시아 게임 거인을 연결하는 크로스보더 AI/Web3 전략을 주도했습니다. 탈중앙화 프로토콜 GTM 전문가.",
                    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/adcd1f3a8_2025-12-1820101.png"
                },
                {
                    name: "김용완 (Yongwan Kim)",
                    role: "Co-Founder & CTO",
                    bio: "10년 이상의 게임 & 인프라 전문가. EA & 넷마블 출신. Kubernetes, DevOps, 대규모 테스트 자동화 분야의 전문가입니다. 깊이 있는 엔지니어링 역량과 AI 혁신을 결합하여 기술 비전을 이끌고 있습니다.",
                    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/289c24d41_2025-12-1820103.png"
                },
                {
                    name: "김성대 (Seongdae Kim)",
                    role: "Co-Founder & Chief Architect",
                    bio: "Graphics & Systems Veteran. Unity, 넷마블, 스마일게이트 출신. 실시간 렌더링 파이프라인 및 고성능 시스템 설계의 마스터.",
                    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/baf658d9f_2025-12-1820104.png"
                }
            ],
        }
    };

    const c = content[language] || content.en;

    return (
        <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-indigo-500/30">
            <SEO 
                title="Company" 
                description={c.chapters[0].headline}
            />

            {/* Visual State Management Layer */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
                {/* Starfield Background */}
                <div className="absolute inset-0 opacity-80">
                    <Starfield density={800} speed={0.02} />
                </div>
                
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/5 to-transparent mix-blend-screen opacity-30" />
                 
                 <motion.div 
                    animate={{ opacity: visualState.showNoise ? 0.1 : 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-0 mix-blend-overlay"
                 />
                 
                 {/* Retain the spinning rings for the tech feel later in scroll */}
                 <motion.div
                    animate={{ 
                        opacity: visualState.showGuardRail ? 0.5 : 0,
                        scale: visualState.showGuardRail ? 1 : 0.8
                    }}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                 >
                    <div className="w-[60vh] h-[60vh] rounded-full border border-indigo-500/20 shadow-[0_0_100px_rgba(99,102,241,0.1)] animate-[spin_20s_linear_infinite]" />
                 </motion.div>
                 
                 <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10" style={{ background: 'linear-gradient(to bottom, #050505 0%, transparent 10%, transparent 90%, #050505 100%)' }} />
            </div>

            {/* Scrolling Content Layer */}
            <main className="relative z-10">
                <PerspectiveCrawl>
                    <div className="py-20 pb-40 w-full">
                        <div className="text-center mb-40 w-full">
                            <h2 className="text-indigo-400 font-bold tracking-[0.5em] mb-12 text-3xl md:text-4xl uppercase glow-text">
                                Episode I
                            </h2>
                            <h1 className="text-8xl md:text-[12rem] font-black tracking-tighter text-white leading-[0.85] uppercase mb-32 drop-shadow-2xl scale-y-110 w-full">
                                The Trust Layer
                            </h1>
                            <div className="space-y-32 w-full">
                                <p className="text-5xl md:text-8xl text-neutral-100 leading-[1.1] font-bold tracking-wider text-justify opacity-95 w-full block" style={{ textShadow: '0 0 15px rgba(255,255,255,0.4)', wordSpacing: '0.15em' }}>
                                    {language === 'en' 
                                        ? "It is a period of digital chaos. Generative AI has unleashed infinite content, but truth has vanished from the galaxy." 
                                        : "디지털 혼돈의 시대입니다. 생성형 AI가 무한한 콘텐츠를 해방시켰으나, 은하계에서 진실은 사라졌습니다."}
                                </p>
                                <p className="text-5xl md:text-8xl text-neutral-100 leading-[1.1] font-bold tracking-wider text-justify opacity-95 w-full block" style={{ textShadow: '0 0 15px rgba(255,255,255,0.4)', wordSpacing: '0.15em' }}>
                                    {language === 'en' 
                                        ? "We didn't just stumble upon AI. We've been building the prerequisites for this era for a decade. From the ruins of centralized servers, a new hope emerges..." 
                                        : "우리는 AI 시대를 우연히 맞이하지 않았습니다. 지난 10년간 이 시대를 위한 전제 조건들을 구축해왔습니다. 중앙화된 서버의 폐허 속에서, 새로운 희망이 떠오릅니다..."}
                                </p>
                            </div>
                        </div>

                        {/* Chapters integrated into the crawl */}
                        <div className="space-y-96 w-full">
                            {c.chapters.map((chapter, i) => (
                                <div key={i} className="flex flex-col items-center text-center w-full">
                                    <div className="text-indigo-400 font-mono text-4xl tracking-[0.3em] mb-16 border-y-4 border-indigo-500/50 py-6 w-full uppercase bg-indigo-500/10">
                                        {chapter.year}
                                    </div>
                                    <h2 className="text-7xl md:text-[10rem] font-black text-white mb-20 tracking-tight uppercase drop-shadow-lg leading-[0.9] w-full">
                                        {chapter.headline}
                                    </h2>
                                    <p className="text-4xl md:text-7xl text-neutral-200 w-full leading-tight text-justify font-bold tracking-wider">
                                        {chapter.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </PerspectiveCrawl>

                {/* Thesis / Vision Section (Full Width Sticky Scroll) */}
                <div className="w-full">
                     <ThesisSection items={c.thesis} />
                </div>

                {/* Team Identity Section */}
                <TeamIdentity identity={c.identity || {headline: "WHO WE ARE", content: "Loading..."}} />

                {/* Founder Spotlight Section */}
                <div className="bg-[#0A0A0A] border-y border-neutral-900 py-32 md:py-48">
                    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
                            <div>
                                <h2 className="text-sm font-bold tracking-widest uppercase text-indigo-500 mb-4">Leadership</h2>
                                <h3 className="text-3xl md:text-5xl font-bold text-white max-w-2xl leading-tight">
                                    {language === 'en' ? "Builders at the Intersection." : "교차점의 빌더들."}
                                </h3>
                            </div>
                            <p className="text-neutral-500 max-w-sm mt-6 md:mt-0 leading-relaxed text-sm md:text-base">
                                {language === 'en' 
                                    ? "A team combining deep AI research, AAA gaming production, and Web3 economics."
                                    : "딥 AI 리서치, AAA 게임 프로덕션, 그리고 Web3 경제 설계를 결합한 팀입니다."}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
                            {c.founders.map((founder, i) => (
                                <FounderCard key={i} {...founder} delay={i * 0.1} />
                            ))}
                        </div>
                    </div>
                </div>


                
                {/* Final CTA */}
                <div className="flex flex-col items-center justify-center pb-40 px-6 text-center">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 max-w-3xl leading-tight text-white">
                        {language === 'en' ? "Ready to build the trust layer?" : "신뢰 레이어를 함께 만드시겠습니까?"}
                    </h2>
                    <Link to={createPageUrl('Contact')}>
                        <Button className="bg-white text-black hover:bg-neutral-200 rounded-full px-10 md:px-12 h-14 md:h-16 text-lg md:text-xl font-bold transition-transform hover:scale-105">
                            Connect With Us <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6" />
                        </Button>
                    </Link>
                </div>
            </main>
        </div>
    );
}