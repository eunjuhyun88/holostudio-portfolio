import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from '@/components/LanguageContext';
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin } from 'lucide-react';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import CosmicBackground from '@/components/CosmicBackground';
import Background3D from '@/components/Background3D';
import MouseGlowText from '@/components/MouseGlowText';

// --- Components ---

// Individual Word Component for Typing Effect
const TypingWord = ({ word, i, total, progress }) => {
    const start = i / total;
    const end = start + (1 / total);
    const opacity = useTransform(progress, [start, end], [0, 1]);
    const y = useTransform(progress, [start, end], [10, 0]);
    const blur = useTransform(progress, [start, end], [4, 0]);

    return (
        <motion.span 
            style={{ 
                opacity, 
                y,
                filter: useTransform(blur, b => `blur(${b}px)`)
            }}
            className="inline-block mr-[0.25em]"
        >
            {word}
        </motion.span>
    );
};

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
            {words.map((word, i) => (
                <TypingWord 
                    key={i} 
                    word={word} 
                    i={i} 
                    total={words.length} 
                    progress={scrollYProgress} 
                />
            ))}
        </motion.p>
    );
};

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
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

    const palettes = [
        { bg: "bg-[#050505]", text: "text-indigo-400", accent: "text-indigo-500/20" }, 
        { bg: "bg-[#050505]", text: "text-emerald-400", accent: "text-emerald-500/20" }, 
        { bg: "bg-[#050505]", text: "text-orange-400", accent: "text-orange-500/20" }, 
        { bg: "bg-[#050505]", text: "text-lime-400", accent: "text-lime-500/20" }, 
    ];

    const currentPalette = palettes[index % palettes.length];
    
    return (
        <div ref={ref} className="relative h-screen flex items-center sticky top-0 overflow-hidden">
            <div className="absolute inset-0 bg-[#050505] z-0" />
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] rounded-full blur-[150px] opacity-20 ${currentPalette.bg.replace('bg-', 'bg-') === 'bg-[#050505]' ? currentPalette.accent.replace('text-', 'bg-').replace('/20', '') : 'bg-indigo-900'} z-0 pointer-events-none`} />
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
                        <div className={`text-[12rem] md:text-[20rem] font-black leading-none opacity-10 absolute -top-20 -left-10 select-none text-transparent stroke-white`} style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}>
                            {index + 1}
                        </div>

                        <h2 className={`text-5xl md:text-7xl lg:text-8xl font-black mb-10 tracking-tighter leading-[0.9] text-white relative uppercase`}>
                            {item.headline}
                        </h2>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={`text-2xl md:text-4xl font-bold leading-tight max-w-5xl ml-auto ${currentPalette.text}`}
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
            <h2 className="text-sm font-bold tracking-widest uppercase text-neutral-400 mb-2">{identity?.headline || "WHO WE ARE"}</h2>
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
                {identity?.content || "We are builders."}
            </p>
        </div>
    </div>
);

// Founder Card Component
const FounderCard = ({ name, role, bio, motto, image, delay, linkedin }) => (
    <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delay, duration: 0.6 }}
        className="group relative"
    >
        <div className="relative aspect-square overflow-hidden bg-neutral-900 mb-4 rounded-xl border border-white/10 group-hover:border-indigo-500/50 transition-colors">
            {image ? (
                <div className="w-full h-full flex items-center justify-center bg-neutral-800/50 relative overflow-hidden">
                    <img 
                        src={image} 
                        alt={name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{
                            filter: "grayscale(1) contrast(1.1)" 
                        }} 
                    />
                    <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/10 transition-colors duration-300 mix-blend-overlay" />
                </div>
            ) : (
                <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-neutral-600">Image</div>
            )}
            
            {/* Tech Corners - Smaller */}
            <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/30 group-hover:border-indigo-500 transition-colors" />
            <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-white/30 group-hover:border-indigo-500 transition-colors" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white/30 group-hover:border-indigo-500 transition-colors" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/30 group-hover:border-indigo-500 transition-colors" />
        </div>

        <div className="space-y-3 pr-2">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-lg font-bold text-white leading-tight">{name}</h3>
                    <p className="text-[10px] font-mono text-indigo-400 tracking-wider uppercase mt-1">{role}</p>
                </div>
                {linkedin && (
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-[#0077b5] transition-colors p-1">
                        <Linkedin className="w-4 h-4" />
                    </a>
                )}
            </div>

            {motto && (
                <div className="relative py-2">
                     <p className="text-indigo-300 font-bold text-sm leading-snug">"{motto}"</p>
                </div>
            )}
            
            <div className="w-8 h-px bg-white/10 group-hover:bg-indigo-500/50 transition-colors" />
            
            <p className="text-neutral-400 leading-snug text-xs whitespace-pre-line">
                {bio}
            </p>
        </div>
    </motion.div>
);

// Closing Statement Component
const ClosingStatement = () => {
    const { language } = useLanguage();
    return (
        <div className="min-h-[60vh] flex items-center justify-center relative overflow-hidden py-32">
             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="text-center px-6 max-w-6xl mx-auto z-10"
             >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-300 mb-8 leading-tight tracking-tight">
                    {language === 'en' ? "The scarce resource is no longer creativity." : "더 이상 희소한 자원은 창의성이 아닙니다."}
                </h2>
                <div className="overflow-hidden">
                    <MouseGlowText 
                        as={motion.p}
                        glowColor="rgba(99, 102, 241, 0.8)" // Indigo
                        secondaryGlowColor="rgba(168, 85, 247, 0.5)" // Purple for contrast
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
                        className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter uppercase"
                    >
                        {language === 'en' ? "It is credibility." : "바로 신뢰입니다."}
                    </MouseGlowText>
                </div>
             </motion.div>
        </div>
    )
}


export default function Company() {
    const { language } = useLanguage();
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
    const [activeSection, setActiveSection] = React.useState('intro');

    React.useEffect(() => {
        const handleScroll = () => {
            const sections = ['intro', 'history', 'vision', 'identity', 'team'];
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top >= -window.innerHeight / 2 && rect.top < window.innerHeight / 2) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToId = (id) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    const navItems = [
        { id: 'intro', label: 'Intro' },
        { id: 'history', label: 'History' },
        { id: 'vision', label: 'Vision' },
        { id: 'identity', label: 'Identity' },
        { id: 'team', label: 'Team' },
    ];

    React.useEffect(() => {
        const handleMouseMove = (e) => {
            // Smooth damping could be added here, but direct mapping is responsive
            setMousePos({
                x: (e.clientX - window.innerWidth / 2) / 40,
                y: (e.clientY - window.innerHeight / 2) / 40
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
    
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
                episode: "The Origin",
                title: "The Trust Layer",
                subtitle: "Engineering Certainty for the AI Media Age",
                text: [
                    "We did not arrive here by accident. We have been building systems where value, rules, and trust must work at scale—for over a decade.",
                    "At EA, Netmarble, and Smilegate, we designed real-time infrastructure and virtual economies for millions of users.",
                    "We learned early: Without enforceability, value does not persist."
                ]
            },
            chapters: [
                {
                    year: "2014 – 2020",
                    headline: "THE GAMING ERA",
                    content: "Before “Metaverse” or “Web3”, we operated large-scale multiplayer systems. High concurrency. Persistent virtual economies. Rules determining ownership and exchange. The lesson was absolute: simulation without rules becomes chaos."
                },
                {
                    year: "2021 – 2023",
                    headline: "THE CONVERGENCE",
                    content: "AI showed how intelligence could be simulated. Crypto showed how truth could be settled. But infinite generative content lacked a native way for verification, attribution, or settlement."
                },
                {
                    year: "2024",
                    headline: "THE COLLAPSE OF TRUST",
                    content: "Generative AI scaled creation cost to zero. Trust did not scale. Attribution broke, accountability faded, and value leaked. The problem was never creativity. It was the absence of a trust layer."
                },
                {
                    year: "2025 & BEYOND",
                    headline: "THE TRUST LAYER",
                    content: "HoloStudio treats content as living events: Creation → Verification → Propagation → Settlement. Stories move, value flows. Every contribution is traceable. As AI creates infinite content, the value of trust infrastructure becomes absolute."
                }
            ],
            thesis: [
                {
                    headline: "ENGINEERED CERTAINTY",
                    content: "The future is not neutral. It is a choice between chaos and trust. We do not hope for trust; we engineer it."
                },
                {
                    headline: "ONE COHERENT SYSTEM",
                    content: "We do not build disconnected products. We build a single, coherent architecture where trust enables distribution, and distribution creates value."
                }
            ],
            identity: {
                 headline: "WHY THIS TEAM",
                 content: "\"Growth Hacker + Deep Tech Builder.\" We are architects of virtual economies, optimizing for real user value, not just storytelling."
            },
            founders: [
                {
                    name: "Sungchul (Steven) Park",
                    role: "CEO",
                    motto: "Connecting industries, people, and ideas across borders.",
                    bio: `Yonsei Masters & Stony Brook Valedictorian (GPA 4.0).
Ex-CEO of Duel Partners, Global BD at Ares Corp.
Led 5B+ KRW M&A DD & 300B+ Risk Assessment.`,
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Steven&backgroundColor=transparent",
                    linkedin: "https://www.linkedin.com/in/sungchul-park-364b531b2"
                },
                {
                    name: "Yongwan Kim",
                    role: "CTO",
                    motto: "Scale has already been proven.",
                    bio: `10+ years at EA FIFA/Sports & Netmarble.
Built 1M+ CCU Infrastructure, 99.8% Uptime.
Holder of 5+ Infrastructure Patents.`,
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Yongwan&backgroundColor=transparent&glassesProbability=100",
                    linkedin: "https://www.linkedin.com/in/용완-김-02578b211/"
                },
                {
                    name: "Seongdae Kim",
                    role: "Chief Architect",
                    motto: "Master of real-time rendering pipelines.",
                    bio: "Unity, Netmarble, Smilegate veteran. Expert in high-performance graphics engine architecture.",
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Seongdae&backgroundColor=transparent",
                    linkedin: "https://www.linkedin.com/in/seongdae-kim-22539066/?originalSubdomain=kr"
                },
                {
                    name: "0xchew Hyun",
                    role: "Chief Builder",
                    motto: "Experienced firsthand what works and what fails.",
                    bio: `Founder of MintedLab (#1 Web3 Marketing Firm).
Marketed 150+ Global Projects, $1M+ Sales.
Partners: Polkadot, Algorand, DFINITY.`,
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Eunjoo&backgroundColor=transparent",
                    linkedin: "https://www.linkedin.com/in/eunjoo-hyun"
                },
                {
                    name: "Antonio",
                    role: "Head of Ecosystem",
                    bio: "Ecosystem growth expert focusing on performance-driven growth. Scaling ecosystems through GTM strategy and marketing.",
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Antonio&backgroundColor=transparent"
                },
                {
                    name: "Junhyeok Choi",
                    role: "Dev Team Leader",
                    bio: "Oversees PlayArts architecture and development roadmap.",
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Junhyeok&backgroundColor=transparent"
                },
                {
                    name: "Minji You",
                    role: "Front Engineer",
                    bio: "Specialized in modern UI with React, Tailwind, Vite, Svelte.",
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Minji&backgroundColor=transparent"
                },
                {
                    name: "Jaehyeon Kwon",
                    role: "Backend Engineer",
                    bio: "Builds ASP.NET 9.0, PostgreSQL systems.",
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Jaehyeon&backgroundColor=transparent"
                }
            ],
        },
        ko: {
            intro: {
                episode: "The Origin",
                title: "The Trust Layer",
                subtitle: "AI 미디어 시대, 신뢰를 설계하는 팀",
                text: [
                    "우리가 이곳에 이른 것은 우연이 아닙니다. 지난 10년 동안 우리는 가치, 규칙, 신뢰가 대규모로 작동해야 하는 시스템을 구축해 왔습니다.",
                    "EA, 넷마블, 스마일게이트에서 수백만 명의 사용자를 위한 실시간 인프라와 가상 경제를 설계했습니다.",
                    "우리는 일찍이 깨달았습니다. 구속력이 없다면 가치는 지속되지 않습니다."
                ]
            },
            chapters: [
                {
                    year: "2014 – 2020",
                    headline: "게이밍 시대",
                    content: "‘메타버스’나 ‘Web3’가 주류가 되기 전부터 우리는 이미 대규모 멀티플레이어 시스템을 운영하고 있었습니다. 높은 동시 접속. 지속적인 가상 경제. 소유와 교환의 규칙들. 게임이 준 교훈은 명확했습니다. 규칙 없는 시뮬레이션은 혼란일 뿐입니다."
                },
                {
                    year: "2021 – 2023",
                    headline: "융합의 시대",
                    content: "AI는 지능이 어떻게 시뮬레이션될 수 있는지를 보여주었고, 크립토는 진실이 어떻게 합의될 수 있는지를 보여주었습니다. 그러나 무한히 생성되는 콘텐츠에는 검증, 귀속, 정산을 위한 네이티브 방식이 없었습니다."
                },
                {
                    year: "2024",
                    headline: "신뢰의 붕괴",
                    content: "생성형 AI는 창작 비용을 0으로 만들었습니다. 하지만 신뢰는 확장되지 않았습니다. 기여는 무너졌고, 가치는 플랫폼 전반으로 유출되었습니다. 문제는 결코 창의성이 아니었습니다. 신뢰 레이어의 부재였습니다."
                },
                {
                    year: "2025 & BEYOND",
                    headline: "Trust Layer",
                    content: "HoloStudio는 콘텐츠를 정적 파일이 아닌 살아있는 이벤트로 취급합니다. 생성 → 검증 → 전파 → 정산. 이야기는 움직이고 가치는 흐릅니다. 모든 기여는 추적 가능해야 합니다. AI가 콘텐츠를 무한히 만들수록, 신뢰 인프라의 가치는 절대적입니다."
                }
            ],
            thesis: [
                {
                    headline: "설계된 확신",
                    content: "미래는 중립적이지 않습니다. 혼돈과 신뢰 사이의 선택입니다. 우리는 신뢰를 희망하지 않습니다. 설계합니다."
                },
                {
                    headline: "하나의 일관된 시스템",
                    content: "우리는 단절된 제품을 만들지 않습니다. 신뢰가 유통을 가능하게 하고, 유통이 가치를 창출하는 하나의 일관된 아키텍처를 구축합니다."
                }
            ],
            identity: {
                 headline: "왜 이 팀인가",
                 content: "\"Growth Hacker + Deep Tech Builder.\" 우리는 스토리텔링과 투기보다는 실제 유저 가치에 최적화된 가상 경제의 아키텍트들입니다."
            },
            founders: [
                {
                    name: "Sungchul (Steven) Park",
                    role: "CEO",
                    motto: "국경을 넘어 산업, 사람, 아이디어를 연결합니다.",
                    bio: `연세대 석사 & Stony Brook 수석 졸업 (GPA 4.0).
전 Duel Partners 대표, Ares Corp 글로벌 BD.
50억+ M&A 실사 및 3000억+ 리스크 평가 주도.`,
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Steven&backgroundColor=transparent",
                    linkedin: "https://www.linkedin.com/in/sungchul-park-364b531b2"
                },
                {
                    name: "Yongwan Kim",
                    role: "CTO",
                    motto: "스케일은 이미 증명되었습니다.",
                    bio: `EA FIFA/Sports, 넷마블 10년+ 경력.
100만 동시접속 인프라 및 99.8% 가용성 구축.
인프라 관련 특허 5건 보유.`,
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Yongwan&backgroundColor=transparent&glassesProbability=100",
                    linkedin: "https://www.linkedin.com/in/용완-김-02578b211/"
                },
                {
                    name: "Seongdae Kim",
                    role: "Chief Architect",
                    motto: "실시간 렌더링 파이프라인 마스터.",
                    bio: "Unity, Netmarble, Smilegate 출신. 고성능 그래픽스 엔진 아키텍처 전문가.",
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Seongdae&backgroundColor=transparent",
                    linkedin: "https://www.linkedin.com/in/seongdae-kim-22539066/?originalSubdomain=kr"
                },
                {
                    name: "0xchew Hyun",
                    role: "Chief Builder",
                    motto: "무엇이 작동하고 무엇이 실패하는지 직접 경험했습니다.",
                    bio: `MintedLab(국내 1위 Web3 마케팅) 창업.
150+ 글로벌 프로젝트 마케팅, $1M+ 매출.
Polkadot, Algorand, DFINITY 파트너십.`,
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Eunjoo&backgroundColor=transparent",
                    linkedin: "https://www.linkedin.com/in/eunjoo-hyun"
                },
                {
                    name: "Antonio",
                    role: "Head of Ecosystem",
                    bio: "Ecosystem growth expert with a strong focus on performance-driven growth across Web3 projects. Scaling ecosystems through GTM strategy, project optimization, and marketing.",
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Antonio&backgroundColor=transparent"
                },
                {
                    name: "Junhyeok Choi",
                    role: "Dev Team Leader",
                    bio: "PlayArts 아키텍처와 개발 로드맵 총괄.",
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Junhyeok&backgroundColor=transparent"
                },
                {
                    name: "Minji You",
                    role: "Front Engineer",
                    bio: "React, Tailwind, Vite, Svelte 현대적 UI 전문.",
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Minji&backgroundColor=transparent"
                },
                {
                    name: "Jaehyeon Kwon",
                    role: "Backend Engineer",
                    bio: "ASP.NET 9.0, PostgreSQL 시스템 구축.",
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Jaehyeon&backgroundColor=transparent"
                }
            ],
        }
    };

    const c = content[language] || content.en;

    return (
        <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-indigo-500/30">
            <SEO 
                title="Company" 
                description={c.intro?.title}
            />

            {/* Visual State Management Layer */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 opacity-80">
                    <CosmicBackground />
                </div>
                <div className="absolute inset-0 opacity-30">
                    <Background3D />
                </div>
                
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-[#050505]/80 to-[#050505] opacity-80" />

                {/* Sci-Fi Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
                
                {/* HUD Corners */}
                <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-white/10 rounded-tl-3xl m-8" />
                <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-white/10 rounded-tr-3xl m-8" />
                <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-white/10 rounded-bl-3xl m-8" />
                <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-white/10 rounded-br-3xl m-8" />

                 {/* Retain the spinning rings for the tech feel later in scroll */}
                 <motion.div
                    animate={{ 
                        opacity: visualState.showGuardRail ? 0.3 : 0,
                        scale: visualState.showGuardRail ? 1 : 0.9,
                        x: mousePos.x * -1, // Parallax effect
                        y: mousePos.y * -1
                    }}
                    transition={{ 
                        opacity: { duration: 1, ease: "circOut" },
                        scale: { duration: 1, ease: "circOut" },
                        x: { type: "spring", stiffness: 50, damping: 20 },
                        y: { type: "spring", stiffness: 50, damping: 20 }
                    }}
                    className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
                 >
                    <div className="w-[80vh] h-[80vh] rounded-full border border-indigo-500/10 shadow-[0_0_150px_rgba(99,102,241,0.05)] animate-[spin_30s_linear_infinite]" />
                    <div className="absolute w-[60vh] h-[60vh] rounded-full border border-indigo-500/5 animate-[spin_20s_linear_infinite_reverse]" />
                 </motion.div>
            </div>

            {/* Sticky Navigation (Desktop) */}
            <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToId(item.id)}
                        className="group flex items-center justify-end gap-4"
                    >
                        <span className={`text-xs font-bold tracking-widest uppercase transition-all duration-300 ${activeSection === item.id ? 'text-white opacity-100' : 'text-neutral-500 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0'}`}>
                            {item.label}
                        </span>
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === item.id ? 'bg-indigo-500 scale-150' : 'bg-neutral-600 group-hover:bg-white'}`} />
                    </button>
                ))}
            </div>

            {/* Scrolling Content Layer */}
            <main className="relative z-10">
                <div id="intro" className="relative z-10 py-32 px-6 md:px-12 max-w-[90vw] mx-auto min-h-screen flex flex-col items-center justify-center">
                    <div className="text-center mb-64 w-full">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-indigo-400 font-bold tracking-[0.5em] mb-12 text-2xl md:text-3xl uppercase glow-text"
                        >
                            {c.intro?.episode || "Episode I"}
                        </motion.h2>
                        <MouseGlowText 
                            as={motion.h1}
                            glowColor="rgba(99, 102, 241, 0.8)"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9] uppercase mb-12 scale-y-110 w-full"
                        >
                            {c.intro?.title || "The Trust Layer"}
                        </MouseGlowText>

                        {c.intro?.subtitle && (
                            <motion.h3 
                                initial={{ opacity: 0 }} 
                                whileInView={{ opacity: 1 }}
                                className="text-xl md:text-2xl text-neutral-400 font-mono uppercase tracking-[0.2em] mb-48"
                            >
                                {c.intro.subtitle}
                            </motion.h3>
                        )}
                        
                        <div className="space-y-24 w-full max-w-4xl mx-auto">
                            {c.intro?.text ? c.intro.text.map((t, i) => (
                                <TypingBlock key={i} className="text-xl md:text-2xl lg:text-3xl text-neutral-200 leading-relaxed font-normal tracking-wide text-center">
                                    {t}
                                </TypingBlock>
                            )) : (
                                <>
                                    <TypingBlock className="text-xl md:text-2xl lg:text-3xl text-neutral-200 leading-relaxed font-normal tracking-wide text-center">
                                        It is a period of digital chaos.
                                    </TypingBlock>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Chapters integrated as Typing Blocks */}
                    <div id="history" className="space-y-64 w-full max-w-[80vw] mx-auto pb-32">
                        {c.chapters.map((chapter, i) => (
                            <div key={i} className="flex flex-col items-center text-center w-full">
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    className="text-indigo-400 font-mono text-2xl tracking-[0.3em] mb-12 border-y-2 border-indigo-500/50 py-4 w-full uppercase bg-indigo-500/10"
                                >
                                    {chapter.year}
                                </motion.div>
                                <motion.h2 
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                    className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-12 tracking-tight uppercase drop-shadow-lg leading-[0.9] w-full"
                                >
                                    {chapter.headline}
                                </motion.h2>
                                <div className="max-w-4xl mx-auto">
                                    <TypingBlock className="text-xl md:text-2xl lg:text-3xl text-neutral-300 w-full leading-relaxed text-center font-normal tracking-wide">
                                        {chapter.content}
                                    </TypingBlock>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Thesis / Vision Section (Full Width Sticky Scroll) */}
                <div id="vision" className="w-full">
                     <ThesisSection items={c.thesis} />
                </div>

                {/* Closing Statement */}
                <ClosingStatement />

                {/* Team Identity Section */}
                <div id="identity">
                    <TeamIdentity identity={c.identity || {headline: "WHO WE ARE", content: "Loading..."}} />
                </div>

                {/* Founder Spotlight Section - Mobile Horizontal Scroll */}
                <div id="team" className="bg-[#0A0A0A] border-y border-neutral-900 py-32 md:py-48 overflow-hidden">
                    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
                            <div>
                                <h2 className="text-sm font-bold tracking-widest uppercase text-indigo-500 mb-4">Leadership</h2>
                                <h3 className="text-3xl md:text-5xl font-bold text-white max-w-2xl leading-tight">
                                    {language === 'en' ? "Builders at the Intersection." : "교차점의 빌더들."}
                                </h3>
                            </div>
                            <p className="text-neutral-400 max-w-sm mt-6 md:mt-0 leading-relaxed text-sm md:text-base">
                                {language === 'en' 
                                    ? "A team combining deep AI research, AAA gaming production, and Web3 economics."
                                    : "딥 AI 리서치, AAA 게임 프로덕션, 그리고 Web3 경제 설계를 결합한 팀입니다."}
                            </p>
                        </div>

                        {/* Desktop: Grid, Mobile: Horizontal Scroll */}
                        <div className="flex md:grid md:grid-cols-4 lg:grid-cols-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 md:gap-6 lg:gap-8 pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 no-scrollbar">
                            {c.founders.map((founder, i) => (
                                <div key={i} className="flex-shrink-0 w-[60vw] md:w-auto snap-center">
                                    <FounderCard {...founder} delay={i * 0.1} />
                                </div>
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