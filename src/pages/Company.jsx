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
                        <div className={`text-[8rem] md:text-[20rem] font-black leading-none opacity-10 absolute -top-10 -left-4 md:-top-20 md:-left-10 select-none text-transparent stroke-white`} style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}>
                            {index + 1}
                        </div>

                        <h2 className={`text-4xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-10 tracking-tighter leading-[0.9] text-white relative uppercase`}>
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
                     <p className="text-indigo-300 font-bold text-sm leading-snug">{motto}</p>
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
                episode: "The Origin",
                title: "Infrastructure Gap",
                subtitle: "AI 경제의 누락된 링크를 설계하다",
                text: [
                    "지난 10년간 우리는 EA, 넷마블, 스마일게이트에서 수백만 사용자가 참여하는 가상 경제와 실시간 인프라를 설계했습니다.",
                    "규칙 없는 시뮬레이션은 지속 불가능합니다. 우리는 이 교훈을 AI 시장에 적용합니다.",
                    "AI 생성 비용이 0에 수렴할 때, 검증과 신뢰 비용은 무한대로 발산합니다. 우리는 이 비대칭을 해결하는 인프라를 만듭니다."
                ]
            },
            chapters: [
                {
                    year: "Phase 1: 2014 – 2020",
                    headline: "Virtual Economies",
                    content: "우리는 게임이 아닌 경제를 운영했습니다. 높은 동시접속 트래픽과 가치 교환 시스템. 디지털 자산이 실제 가치를 가지기 위해 필요한 '합의된 규칙'을 설계하고 운영했습니다."
                },
                {
                    year: "Phase 2: 2021 – 2023",
                    headline: "The Missing Link",
                    content: "AI는 무한한 생성을 가능하게 했고, 블록체인은 불변의 기록을 가능하게 했습니다. 그러나 두 기술 사이에는 '검증된 연결'이 없었습니다. 우리는 이 공백이 시장의 가장 큰 기회임을 확인했습니다."
                },
                {
                    year: "Phase 3: 2024",
                    headline: "Market Failure",
                    content: "딥페이크, 저작권 분쟁, 플랫폼 리스크. 신뢰 인프라의 부재가 시장 실패를 초래했습니다. 기업은 안전을 원하고, 창작자는 보상을 원합니다. 시장은 솔루션을 요구하고 있습니다."
                },
                {
                    year: "Phase 4: 2025 & BEYOND",
                    headline: "The Trust Layer",
                    content: "AI가 경제 주체가 되는 시대. Holo Studio는 단순한 툴이 아닌 인프라입니다. 생성부터 정산까지, 모든 AI 액션이 검증되고 거래되는 신뢰의 파이프라인을 구축합니다."
                }
            ],
            thesis: [
                {
                    headline: "ENGINEERED TRUST",
                    content: "신뢰는 희망의 대상이 아니라 공학적 설계의 대상입니다. 우리는 수학적으로 검증 가능한 안전과 소유권을 제공합니다."
                },
                {
                    headline: "UNIFIED STACK",
                    content: "파편화된 솔루션은 AI 속도를 따라잡을 수 없습니다. 우리는 안전, 출처, 가치 분배가 하나의 프로토콜 위에서 작동하는 통합 아키텍처를 제시합니다."
                }
            ],
            identity: {
                 headline: "FOUNDER-MARKET FIT",
                 content: "Growth Hacker + Deep Tech Builder. 우리는 스토리텔링이 아닌, 작동하는 대규모 시스템과 경제를 설계해온 베테랑들입니다."
            },
            founders: [
                {
                    name: "Sungchul (Steven) Park",
                    role: "CEO",
                    motto: "Cross-border Strategy & Risk Management",
                    bio: `50억+ M&A 실사 · 3,000억+ 리스크 평가 주도.
전 Duel Partners 대표, Ares Corp 글로벌 BD.
연세대 석사 · Stony Brook 수석 졸업 (GPA 4.0).`,
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Steven&backgroundColor=transparent",
                    linkedin: "https://www.linkedin.com/in/sungchul-park-364b531b2"
                },
                {
                    name: "Yongwan Kim",
                    role: "CTO",
                    motto: "Proven Scale at 1M+ CCU",
                    bio: `EA & 넷마블 글로벌 인프라 아키텍트.
100만 동시접속 및 99.99% 가용성 달성.
핵심 인프라 특허 5건 보유.`,
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Yongwan&backgroundColor=transparent&glassesProbability=100",
                    linkedin: "https://www.linkedin.com/in/용완-김-02578b211/"
                },
                {
                    name: "Seongdae Kim",
                    role: "Chief Architect",
                    motto: "Core Engine & Rendering Specialist",
                    bio: `Unity & 넷마블 15년+ 코어 엔진 개발.
실시간 렌더링 파이프라인 및 고성능 최적화 전문가.
글로벌 AAA 타이틀 리드 아키텍트.`,
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Seongdae&backgroundColor=transparent",
                    linkedin: "https://www.linkedin.com/in/seongdae-kim-22539066/?originalSubdomain=kr"
                },
                {
                    name: "0xchew Hyun",
                    role: "Chief Builder",
                    motto: "Zero to One GTM Execution",
                    bio: `MintedLab 창업 (국내 1위 Web3 마케팅, $1M+ 매출).
150+ 프로젝트 GTM: Polkadot, Algorand, DFINITY.
커뮤니티 0 to Million 스케일업 경험.`,
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Eunjoo&backgroundColor=transparent",
                    linkedin: "https://www.linkedin.com/in/eunjoo-hyun"
                },
                {
                    name: "Antonio",
                    role: "Head of Ecosystem",
                    motto: "Ecosystem Growth Strategy",
                    bio: "데이터 기반 GTM 전략 및 생태계 확장 전문가.",
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Antonio&backgroundColor=transparent"
                },
                {
                    name: "Junhyeok Choi",
                    role: "Dev Team Lead",
                    motto: "Protocol Architecture",
                    bio: "PlayArts 프로토콜 아키텍처 및 개발 총괄.",
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Junhyeok&backgroundColor=transparent"
                },
                {
                    name: "Minji You",
                    role: "Front Engineer",
                    motto: "UX/UI Engineering",
                    bio: "현대적 프론트엔드 스택을 통한 최적의 UX 구현.",
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Minji&backgroundColor=transparent"
                },
                {
                    name: "Jaehyeon Kwon",
                    role: "Backend Engineer",
                    motto: "High-Performance Systems",
                    bio: "대규모 데이터 처리를 위한 고성능 백엔드 인프라 구축.",
                    image: "https://api.dicebear.com/7.x/notionists/svg?seed=Jaehyeon&backgroundColor=transparent"
                }
            ],
            footer: {
                main: "AI 안전, 미디어, 게임, 트레이딩의 교차점에서 신뢰가 내재된 AI 인프라 비즈니스를 구축합니다."
            }
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
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 opacity-80">
                    <CosmicBackground />
                </div>
                <div className="absolute inset-0 opacity-20 md:opacity-30">
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
            <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4">
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
                <div id="intro" className="relative z-10 py-24 md:py-32 px-4 md:px-12 max-w-[100vw] md:max-w-[90vw] mx-auto min-h-screen flex flex-col items-center justify-center overflow-x-hidden">
                    <div className="text-center mb-32 md:mb-64 w-full px-2">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-indigo-400 font-bold tracking-[0.3em] md:tracking-[0.5em] mb-6 md:mb-12 text-sm md:text-3xl uppercase glow-text"
                        >
                            {c.intro?.episode || "Episode I"}
                        </motion.h2>
                        <MouseGlowText 
                            as={motion.h1}
                            glowColor="rgba(99, 102, 241, 0.8)"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.95] md:leading-[0.9] uppercase mb-8 md:mb-12 scale-y-110 w-full break-words"
                        >
                            {c.intro?.title || "The Trust Layer"}
                        </MouseGlowText>

                        {c.intro?.subtitle && (
                            <motion.h3 
                                initial={{ opacity: 0 }} 
                                whileInView={{ opacity: 1 }}
                                className="text-sm md:text-2xl text-neutral-400 font-mono uppercase tracking-[0.15em] md:tracking-[0.2em] mb-24 md:mb-48 px-4"
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
                    <div id="history" className="space-y-32 md:space-y-64 w-full max-w-[90vw] md:max-w-[80vw] mx-auto pb-24 md:pb-32">
                        {c.chapters.map((chapter, i) => (
                            <div key={i} className="flex flex-col items-center text-center w-full">
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    className="text-indigo-400 font-mono text-lg md:text-2xl tracking-[0.2em] md:tracking-[0.3em] mb-6 md:mb-12 border-y md:border-y-2 border-indigo-500/50 py-2 md:py-4 w-full uppercase bg-indigo-500/10"
                                >
                                    {chapter.year}
                                </motion.div>
                                <motion.h2 
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                    className="text-3xl md:text-6xl lg:text-7xl font-black text-white mb-6 md:mb-12 tracking-tight uppercase drop-shadow-lg leading-[0.95] md:leading-[0.9] w-full px-2"
                                >
                                    {chapter.headline}
                                </motion.h2>
                                <div className="max-w-4xl mx-auto px-4">
                                    <TypingBlock className="text-lg md:text-2xl lg:text-3xl text-neutral-300 w-full leading-relaxed text-center font-normal tracking-wide">
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
                    <div className="max-w-4xl mx-auto mb-16">
                         <h3 className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4">HOLO STUDIO</h3>
                         <p className="text-2xl md:text-3xl font-bold leading-relaxed text-neutral-200">
                            {c.footer?.main || (language === 'en' 
                                ? "Building AI Infrastructure with Embedded Trust at the intersection of Safety, Media, Gaming, and Trading." 
                                : "AI 안전, 미디어, 게임, 트레이딩의 교차점에서 신뢰가 내재된 AI 인프라 비즈니스를 구축합니다.")}
                         </p>
                    </div>

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