import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from '@/components/LanguageContext';
import { useTheme } from '@/components/ThemeContext';
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin } from 'lucide-react';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import CompanyBackground from '@/components/CompanyBackground';
import MouseGlowText from '@/components/MouseGlowText';
import CosmicBackground from '@/components/CosmicBackground';
import Starfield from '@/components/Starfield';

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
    const { theme } = useTheme();
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);

    const palettes = theme === 'dark' 
        ? [
            { bg: "bg-[#050505]", text: "text-indigo-400", accent: "bg-indigo-900" }, 
            { bg: "bg-[#050505]", text: "text-emerald-400", accent: "bg-emerald-900" }, 
            { bg: "bg-[#050505]", text: "text-orange-400", accent: "bg-orange-900" }, 
            { bg: "bg-[#050505]", text: "text-lime-400", accent: "bg-lime-900" }, 
        ]
        : [
            { bg: "bg-orange-50", text: "text-orange-900", accent: "bg-orange-200" },
            { bg: "bg-blue-50", text: "text-blue-900", accent: "bg-blue-200" },
            { bg: "bg-emerald-50", text: "text-emerald-900", accent: "bg-emerald-200" },
            { bg: "bg-purple-50", text: "text-purple-900", accent: "bg-purple-200" },
        ];

    const currentPalette = palettes[index % palettes.length];
    
    return (
        <div ref={ref} className="relative h-screen flex items-center sticky top-0 overflow-hidden">
            <div className={`absolute inset-0 z-0 ${currentPalette.bg}`} />
            {theme === 'dark' && (
                <>
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] rounded-full blur-[150px] opacity-20 ${currentPalette.accent} z-0 pointer-events-none`} />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0" />
                </>
            )}

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

                        <h2 className={`text-4xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-10 tracking-tighter leading-[0.9] relative uppercase ${
                            theme === 'dark' ? 'text-white' : 'text-neutral-900'
                        }`}>
                            {item.headline}
                        </h2>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={`text-2xl md:text-4xl font-black leading-tight max-w-5xl ml-auto ${currentPalette.text}`}
                    >
                        {item.content}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

// Team Identity Component - Inspired by Consensys style
const TeamIdentity = ({ identity }) => {
    const { theme } = useTheme();
    return (
    <div className={`min-h-[80vh] flex flex-col justify-center px-4 sm:px-6 md:px-12 max-w-[1600px] mx-auto py-16 sm:py-20 md:py-24 ${
        theme === 'dark' ? '' : 'bg-neutral-50'
    }`}>
        <div className="mb-8 md:mb-16">
            <div className={`w-8 h-8 mb-8 ${theme === 'dark' ? 'bg-[#4F6F52]' : 'bg-orange-500'}`} />
            <h2 className={`text-sm font-bold tracking-widest uppercase mb-2 ${
                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-700'
            }`}>{identity?.headline || "WHO WE ARE"}</h2>
        </div>

        <div className={`text-[8vw] sm:text-[6vw] md:text-[5vw] leading-[0.9] font-black tracking-tighter select-none flex flex-col ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
        }`}>
            <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className={theme === 'dark' ? 'text-indigo-500' : 'text-orange-600'}>Engineers</span>
            </motion.div>

            <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="pl-[1em]"
            >
                <span className={theme === 'dark' ? 'text-emerald-500' : 'text-blue-600'}>Researchers</span>
            </motion.div>

            <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="pl-[0.5em]"
            >
                <span className={theme === 'dark' ? 'text-orange-500' : 'text-emerald-600'}>Builders</span>
            </motion.div>

            <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pl-[2em]"
            >
                <span className={theme === 'dark' ? 'text-lime-500' : 'text-purple-600'}>Veterans</span>
            </motion.div>
        </div>

        <div className={`mt-12 sm:mt-16 md:mt-24 max-w-3xl ml-auto border-l-2 pl-4 sm:pl-6 md:pl-8 ${
            theme === 'dark' ? 'border-white/20' : 'border-neutral-300'
        }`}>
            <p className={`text-base sm:text-lg md:text-2xl leading-relaxed font-black break-keep ${
                theme === 'dark' ? 'text-neutral-300' : 'text-neutral-900'
            }`}>
                {identity?.content || "We are builders."}
            </p>
        </div>
    </div>
)};


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
        <div className={`relative aspect-square overflow-hidden mb-4 rounded-xl border transition-all duration-500 ${
            theme === 'dark'
                ? 'bg-neutral-900 border-white/10 group-hover:border-indigo-500/50 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]'
                : 'bg-neutral-50 border-neutral-200 group-hover:border-orange-400 group-hover:shadow-[0_0_20px_rgba(251,146,60,0.2)]'
        }`}>
            {image ? (
                <div className={`w-full h-full flex items-center justify-center relative overflow-hidden ${
                    theme === 'dark' ? 'bg-neutral-800/50' : 'bg-neutral-100'
                }`}>
                    <img 
                        src={image} 
                        alt={name} 
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        style={{
                            filter: theme === 'dark' ? "grayscale(1) contrast(1.1)" : "grayscale(0.3)"
                        }} 
                    />
                    {theme === 'dark' ? (
                        <>
                            <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/15 transition-all duration-500 mix-blend-overlay" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </>
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/0 via-transparent to-transparent group-hover:from-orange-500/20 transition-all duration-500" />
                    )}
                </div>
            ) : (
                <div className={`w-full h-full flex items-center justify-center ${
                    theme === 'dark' ? 'bg-neutral-800 text-neutral-600' : 'bg-neutral-100 text-neutral-400'
                }`}>Image</div>
            )}
            
            {/* Tech Corners - Enhanced animation */}
            {theme === 'dark' && (
                <>
                    <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/30 group-hover:border-indigo-400 group-hover:w-4 group-hover:h-4 transition-all duration-300" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-white/30 group-hover:border-indigo-400 group-hover:w-4 group-hover:h-4 transition-all duration-300" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white/30 group-hover:border-indigo-400 group-hover:w-4 group-hover:h-4 transition-all duration-300" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/30 group-hover:border-indigo-400 group-hover:w-4 group-hover:h-4 transition-all duration-300" />
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
                     <p className={`font-black text-sm leading-snug transition-all duration-300 ${
                         theme === 'dark' ? 'text-indigo-300 group-hover:text-indigo-200' : 'text-orange-600 group-hover:text-orange-700'
                     }`}>{motto}</p>
                </div>
            )}
            
            <div className={`w-8 h-px transition-all duration-500 ${
                theme === 'dark' 
                    ? 'bg-white/10 group-hover:bg-indigo-500/70 group-hover:w-16 group-hover:shadow-[0_0_10px_rgba(99,102,241,0.5)]' 
                    : 'bg-neutral-300 group-hover:bg-orange-400 group-hover:w-16'
            }`} />
            
            <p className={`leading-snug text-xs whitespace-pre-line font-medium ${
                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-700'
            }`}>
                {bio}
            </p>
        </div>
    </motion.div>
)};


// Closing Statement Component
const ClosingStatement = () => {
    const { language } = useLanguage();
    const { theme } = useTheme();
    return (
        <div className={`min-h-[60vh] flex items-center justify-center relative overflow-hidden py-20 sm:py-24 md:py-32 ${
            theme === 'dark' ? '' : 'bg-white'
        }`}>
             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="text-center px-4 sm:px-6 max-w-6xl mx-auto z-10"
             >
                <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 sm:mb-8 leading-tight tracking-tight break-keep ${
                    theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                }`}>
                    {language === 'en' ? "The scarce resource is no longer creativity." : "더 이상 희소한 자원은 창의성이 아닙니다."}
                </h2>
                <div className="overflow-hidden">
                    {theme === 'dark' ? (
                        <MouseGlowText 
                            as={motion.p}
                            glowColor="rgba(99, 102, 241, 0.8)"
                            secondaryGlowColor="rgba(168, 85, 247, 0.5)"
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
                            className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-black tracking-tighter uppercase break-keep"
                        >
                            {language === 'en' ? "It is credibility." : "바로 신뢰입니다."}
                        </MouseGlowText>
                    ) : (
                        <motion.p
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
                            className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-black tracking-tighter uppercase text-neutral-900 break-keep"
                        >
                            {language === 'en' ? "It is credibility." : "바로 신뢰입니다."}
                        </motion.p>
                    )}
                </div>
             </motion.div>
        </div>
    )
}


export default function Company() {
    const { language } = useLanguage();
    const { theme } = useTheme();
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

    return (
        <div className={`min-h-screen font-sans transition-colors duration-300 ${
            theme === 'dark' 
                ? 'bg-[#050505] text-white selection:bg-indigo-500/30'
                : 'bg-white text-neutral-900 selection:bg-orange-200'
        }`}>
            <SEO 
                title="Company" 
                description={c.intro?.title}
            />

            {/* Enhanced Background - Home Style */}
            {theme === 'dark' ? (
                <div className="fixed inset-0 z-0 pointer-events-none">
                    {/* 1. Starfield */}
                    <div className="absolute inset-0 opacity-60 mix-blend-screen">
                        <Starfield density={800} speed={0.03} />
                    </div>

                    {/* 2. Cosmic Gradients */}
                    <CosmicBackground theme="dark" />

                    {/* 3. Gradient Overlay for Depth */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />

                    {/* Sci-Fi Grid Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
                    
                    {/* HUD Corners */}
                    <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-white/10 rounded-tl-3xl m-8" />
                    <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-white/10 rounded-tr-3xl m-8" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-white/10 rounded-bl-3xl m-8" />
                    <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-white/10 rounded-br-3xl m-8" />
                </div>
            ) : (
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-200/30 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
                </div>
            )}
            
            {/* Grain Overlay */}
            <div className={`fixed inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0 ${
                theme === 'dark' ? 'opacity-[0.05]' : 'opacity-[0.02]'
            }`} />

            {/* Sticky Navigation (Desktop) - Home Style */}
            <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToId(item.id)}
                        className="group flex items-center justify-end gap-4"
                    >
                        <span className={`text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                            activeSection === item.id 
                                ? (theme === 'dark' ? 'text-white' : 'text-neutral-900') + ' opacity-100' 
                                : (theme === 'dark' ? 'text-neutral-500' : 'text-neutral-400') + ' opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0'
                        }`}>
                            {item.label}
                        </span>
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            activeSection === item.id 
                                ? (theme === 'dark' ? 'bg-indigo-500' : 'bg-orange-500') + ' scale-150' 
                                : (theme === 'dark' ? 'bg-neutral-600 group-hover:bg-white' : 'bg-neutral-400 group-hover:bg-neutral-900')
                        }`} />
                    </button>
                ))}
            </div>

            {/* Scrolling Content Layer */}
            <main className="relative z-10">
                <div id="intro" className={`relative z-10 py-20 sm:py-24 md:py-32 px-3 sm:px-4 md:px-12 max-w-[100vw] md:max-w-[90vw] mx-auto min-h-screen flex flex-col items-center justify-center overflow-x-hidden ${
                    theme === 'dark' ? '' : 'bg-white'
                }`}>
                    <div className="text-center mb-20 sm:mb-32 md:mb-64 w-full px-2">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className={`font-black tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.5em] mb-4 sm:mb-6 md:mb-12 text-xs sm:text-sm md:text-3xl uppercase ${
                                theme === 'dark' ? 'text-indigo-400 glow-text' : 'text-orange-600'
                            }`}
                        >
                            {c.intro?.episode || "Episode I"}
                        </motion.h2>
                        {theme === 'dark' ? (
                            <MouseGlowText 
                                as={motion.h1}
                                glowColor="rgba(99, 102, 241, 0.8)"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.95] md:leading-[0.9] uppercase mb-6 sm:mb-8 md:mb-12 scale-y-110 w-full break-words"
                            >
                                {c.intro?.title || "The Trust Layer"}
                            </MouseGlowText>
                        ) : (
                            <motion.h1
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter text-neutral-900 leading-[0.95] md:leading-[0.9] uppercase mb-6 sm:mb-8 md:mb-12 scale-y-110 w-full break-words"
                            >
                                {c.intro?.title || "The Trust Layer"}
                            </motion.h1>
                        )}

                        {c.intro?.subtitle && (
                            <motion.h3 
                                initial={{ opacity: 0 }} 
                                whileInView={{ opacity: 1 }}
                                className={`text-xs sm:text-sm md:text-2xl font-mono uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] mb-16 sm:mb-24 md:mb-48 px-2 sm:px-4 font-bold break-keep ${
                                    theme === 'dark' ? 'text-neutral-400' : 'text-neutral-700'
                                }`}
                            >
                                {c.intro.subtitle}
                            </motion.h3>
                        )}
                        
                        <div className="space-y-16 sm:space-y-20 md:space-y-24 w-full max-w-4xl mx-auto">
                            {c.intro?.text ? c.intro.text.map((t, i) => (
                                i === c.intro.text.length - 1 && theme === 'dark' ? (
                                    <MouseGlowText
                                        key={i}
                                        as={motion.p}
                                        glowColor="rgba(99, 102, 241, 0.6)"
                                        secondaryGlowColor="rgba(168, 85, 247, 0.4)"
                                        className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-black tracking-wide text-center text-white"
                                    >
                                        {t}
                                    </MouseGlowText>
                                ) : (
                                    <TypingBlock key={i} className={`text-base sm:text-lg md:text-2xl lg:text-3xl leading-relaxed font-black tracking-wide text-center break-keep ${
                                        theme === 'dark' ? 'text-neutral-200' : 'text-neutral-800'
                                    }`}>
                                        {t}
                                    </TypingBlock>
                                )
                            )) : (
                                <>
                                    <TypingBlock className={`text-xl md:text-2xl lg:text-3xl leading-relaxed font-black tracking-wide text-center ${
                                        theme === 'dark' ? 'text-neutral-200' : 'text-neutral-800'
                                    }`}>
                                        It is a period of digital chaos.
                                    </TypingBlock>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Chapters integrated as Typing Blocks */}
                    <div id="history" className={`space-y-20 sm:space-y-32 md:space-y-64 w-full max-w-[90vw] md:max-w-[80vw] mx-auto pb-16 sm:pb-24 md:pb-32 ${
                        theme === 'dark' ? '' : 'bg-white'
                    }`}>
                        {c.chapters.map((chapter, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="flex flex-col items-center text-center w-full relative group"
                            >
                                {/* Background effect on hover */}
                                {theme === 'dark' && (
                                    <div className="absolute inset-0 bg-gradient-radial from-indigo-500/0 via-indigo-500/0 to-transparent group-hover:from-indigo-500/5 group-hover:via-indigo-500/2 transition-all duration-700 pointer-events-none rounded-3xl blur-3xl" />
                                )}
                                
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    whileHover={{ scale: 1.02, boxShadow: theme === 'dark' ? '0 0 30px rgba(99, 102, 241, 0.3)' : '0 0 20px rgba(251, 146, 60, 0.2)' }}
                                    transition={{ duration: 0.3 }}
                                    className={`font-mono text-xs sm:text-sm md:text-lg lg:text-2xl tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] mb-4 sm:mb-6 md:mb-12 border-y md:border-y-2 py-2 md:py-4 w-full uppercase font-black cursor-pointer ${
                                        theme === 'dark' 
                                            ? 'text-indigo-400 border-indigo-500/50 bg-indigo-500/10 hover:bg-indigo-500/20 hover:border-indigo-400'
                                            : 'text-orange-600 border-orange-300 bg-orange-50 hover:bg-orange-100 hover:border-orange-400'
                                    }`}
                                >
                                    {chapter.year}
                                </motion.div>
                                
                                {theme === 'dark' ? (
                                    <MouseGlowText
                                        as={motion.h2}
                                        glowColor="rgba(99, 102, 241, 0.7)"
                                        secondaryGlowColor="rgba(168, 85, 247, 0.4)"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.8 }}
                                        className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 md:mb-12 tracking-tight uppercase leading-[0.95] md:leading-[0.9] w-full px-2 drop-shadow-lg break-keep"
                                    >
                                        {chapter.headline}
                                    </MouseGlowText>
                                ) : (
                                    <motion.h2 
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.8 }}
                                        className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 md:mb-12 tracking-tight uppercase leading-[0.95] md:leading-[0.9] w-full px-2 text-neutral-900 cursor-default break-keep"
                                    >
                                        {chapter.headline}
                                    </motion.h2>
                                )}
                                
                                <div className="max-w-4xl mx-auto px-2 sm:px-4">
                                    <TypingBlock className={`text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl w-full leading-relaxed text-center font-black tracking-wide break-keep ${
                                        theme === 'dark' ? 'text-neutral-300' : 'text-neutral-800'
                                    }`}>
                                        {chapter.content}
                                    </TypingBlock>
                                </div>
                            </motion.div>
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
                <div id="team" className={`border-y py-16 sm:py-24 md:py-32 lg:py-48 overflow-hidden relative ${
                    theme === 'dark' 
                        ? 'bg-[#0A0A0A]/80 border-white/10 backdrop-blur-xl' 
                        : 'bg-neutral-50 border-neutral-200'
                }`}>
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 sm:mb-16 md:mb-24">
                            <div>
                                <h2 className={`text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 sm:mb-4 ${
                                    theme === 'dark' ? 'text-indigo-500' : 'text-neutral-900'
                                }`}>Leadership</h2>
                                <h3 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black max-w-2xl leading-tight break-keep ${
                                    theme === 'dark' ? 'text-white' : 'text-neutral-900'
                                }`}>
                                    {language === 'en' ? "Builders at the Intersection." : "교차점의 빌더들."}
                                </h3>
                            </div>
                            <p className={`max-w-sm mt-4 sm:mt-6 md:mt-0 leading-relaxed text-xs sm:text-sm md:text-base font-medium break-keep ${
                                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-700'
                            }`}>
                                {language === 'en' 
                                    ? "A team combining deep AI research, AAA gaming production, and Web3 economics."
                                    : "딥 AI 리서치, AAA 게임 프로덕션, 그리고 Web3 경제 설계를 결합한 팀입니다."}
                            </p>
                        </div>

                        {/* Desktop: Grid, Mobile: Horizontal Scroll */}
                        <div className="flex md:grid md:grid-cols-4 lg:grid-cols-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-3 sm:gap-4 md:gap-6 lg:gap-8 pb-6 sm:pb-8 md:pb-0 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 no-scrollbar">
                            {c.founders.map((founder, i) => (
                                <div key={i} className="flex-shrink-0 w-[70vw] sm:w-[60vw] md:w-auto snap-center">
                                    <FounderCard {...founder} delay={i * 0.1} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                
                {/* Final CTA - Home Style */}
                <div className={`flex flex-col items-center justify-center pb-24 sm:pb-32 md:pb-40 px-4 sm:px-6 text-center relative ${
                    theme === 'dark' ? '' : 'bg-gradient-to-b from-white to-neutral-50'
                }`}>
                    {theme === 'dark' && (
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px]" />
                        </div>
                    )}
                    
                    <div className="max-w-4xl mx-auto mb-16 relative z-10">
                         <motion.h3 
                             initial={{ opacity: 0, y: 20 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             viewport={{ once: true }}
                             className={`text-sm font-bold tracking-widest uppercase mb-4 ${
                                 theme === 'dark' ? 'text-indigo-400' : 'text-orange-600'
                             }`}
                         >
                             HOLO STUDIO
                         </motion.h3>
                         <motion.p 
                             initial={{ opacity: 0, y: 20 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             viewport={{ once: true }}
                             transition={{ delay: 0.1 }}
                             className={`text-2xl md:text-3xl font-black leading-relaxed ${
                                 theme === 'dark' ? 'text-neutral-200' : 'text-neutral-900'
                             }`}
                         >
                            {c.footer?.main || (language === 'en' 
                                ? "Building AI Infrastructure with Embedded Trust at the intersection of Safety, Media, Gaming, and Trading." 
                                : "AI 안전, 미디어, 게임, 트레이딩의 교차점에서 신뢰가 내재된 AI 인프라 비즈니스를 구축합니다.")}
                         </motion.p>
                    </div>

                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-6 sm:mb-8 md:mb-12 max-w-3xl leading-tight relative z-10 break-keep ${
                            theme === 'dark' ? 'text-white' : 'text-neutral-900'
                        }`}
                    >
                        {language === 'en' ? "Ready to build the trust layer?" : "신뢰 레이어를 함께 만드시겠습니까?"}
                    </motion.h2>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="relative z-10"
                    >
                        <Link to={createPageUrl('Contact')}>
                            <Button className={`group rounded-full px-10 md:px-12 h-14 md:h-16 text-lg md:text-xl font-bold transition-all hover:scale-105 border-0 relative overflow-hidden ${
                                theme === 'dark'
                                    ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:shadow-[0_0_50px_rgba(79,70,229,0.6)]'
                                    : 'bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 hover:from-cyan-400 hover:via-violet-400 hover:to-pink-400 text-white shadow-lg hover:shadow-2xl'
                            }`}>
                                {theme === 'dark' && (
                                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                                )}
                                <span className="relative flex items-center">
                                    Connect With Us 
                                    <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}