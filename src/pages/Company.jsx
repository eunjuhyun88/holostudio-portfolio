import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from '@/components/LanguageContext';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import CosmicBackground from '@/components/CosmicBackground';

// --- Components ---

// Individual Word Component for Typing Effect
const TypingWord = ({ word, i, total, progress }) => {
    const start = i / total;
    const end = start + (1 / total);
    const opacity = useTransform(progress, [start, end], [0.2, 1]);

    return (
        <motion.span 
            style={{ opacity }}
            className="inline-block mr-[0.2em]"
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
                    <motion.p 
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
                        className="text-5xl md:text-7xl lg:text-9xl font-black text-indigo-500 tracking-tighter uppercase glow-text"
                    >
                        {language === 'en' ? "It is credibility." : "바로 신뢰입니다."}
                    </motion.p>
                </div>
             </motion.div>
        </div>
    )
}


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
                episode: "The Origin",
                title: "The Trust Layer",
                subtitle: "FROM GAMING ARCHITECTS TO AI TRUST BUILDERS",
                text: [
                    "We did not arrive here by accident. We have been building systems where value, rules, and trust must work at scale—for over a decade.",
                    "At EA, Netmarble, and Smilegate, we designed real-time infrastructure and virtual economies for millions of users. Systems where digital assets had to behave like real ones.",
                    "We learned early: without enforcement, value does not persist."
                ]
            },
            chapters: [
                {
                    year: "2014 – 2020",
                    headline: "THE GAMING ERA",
                    content: "Before “Metaverse” or “Web3” entered the mainstream, we were already operating large-scale multiplayer systems. High-concurrency environments. Persistent virtual economies. Rules that determined what could be earned, owned, and exchanged. Gaming taught us a foundational lesson: simulation without rules becomes chaos."
                },
                {
                    year: "2021 – 2023",
                    headline: "THE CONVERGENCE",
                    content: "As AI and crypto matured, a deeper pattern emerged. AI showed how intelligence could be simulated. Crypto showed how truth could be settled. But generative assets—created infinitely, shared instantly—had no native way to be verified, attributed, or accounted for. So we began building the connective infrastructure. Bridging simulation and settlement. Solving trust for generative media."
                },
                {
                    year: "2024",
                    headline: "THE COLLAPSE OF TRUST",
                    content: "Generative AI scaled creation to zero cost. But trust did not scale. Attribution broke. Accountability faded. Value leaked across platforms. The problem was never creativity. It was the absence of a trust layer. That realization shaped everything we built next."
                },
                {
                    year: "INFRASTRUCTURE",
                    headline: "BUILDING THE TRUST LAYER",
                    content: "HoloStudio treats content not as static files, but as living events. Creation. Verification. Propagation. Settlement. Stories move. Value flows. And every contribution must be attributable. We build infrastructure where provenance is native, credit is programmable, and trust is enforced by systems—not promises."
                },
                {
                    year: "2025 & BEYOND",
                    headline: "THE AUTONOMOUS AGE",
                    content: "The next era will not be defined by applications. It will be defined by autonomous agents. Agents that create. Agents that trade. Agents that interact independently. We are building the operating system where this is possible—a system where human and AI creation can coexist on a verifiable, trustless settlement layer."
                }
            ],
            thesis: [
                {
                    headline: "A CHOICE FOR THE FUTURE",
                    content: "The future is not neutral. It is a choice between chaos and credibility. Between infinite generation and enforceable trust."
                },
                {
                    headline: "ONE COHERENT SYSTEM",
                    content: "We do not build disconnected products. We build a single, coherent architecture where trust enables distribution, and distribution creates value. From adversarial defense to economic settlement, every layer is designed to work together."
                }
            ],
            identity: {
                 headline: "WHY WE EXIST",
                 content: "We are building the safeguards that allow generative media to scale without losing ownership, accountability, or human intent. The systems that will define the next decade do not exist yet. We are here to build them."
            },
            founders: [
                {
                    name: "Steven Park",
                    role: "Co-Founder & CEO",
                    bio: "Global Strategy & Defense. Led cross-border AI/Web3 strategy connecting Silicon Valley tech with Asian gaming giants. Deep expertise in GTM for decentralized protocols.",
                    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                },
                {
                    name: "Yongwan Kim",
                    role: "Co-Founder & CTO",
                    bio: "10+ years in Gaming & Infra. Former EA & Netmarble. Expert in Kubernetes, DevOps, and Test Automation at massive scale. Combining deep engineering rigor with AI innovation.",
                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"
                },
                {
                    name: "Seongdae Kim",
                    role: "Co-Founder & Chief Architect",
                    bio: "Graphics & Systems Veteran. Former Unity, Netmarble, Smilegate. Master of real-time rendering pipelines and performance-critical systems.",
                    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
                },
                {
                    name: "Junhyeok Choi",
                    role: "Dev Team Leader",
                    bio: "Oversees PlayArts architecture and development roadmap. Ensuring technical excellence across all protocol layers.",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                },
                {
                    name: "Minji You",
                    role: "Front Engineer",
                    bio: "Specialized in modern UI with React, Tailwind, Vite and Svelte. UX Specialist focused on seamless interactions.",
                    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
                },
                {
                    name: "Jaehyeon Kwon",
                    role: "Backend Engineer",
                    bio: "Builds scalable ASP.NET (9.0) and PostgreSQL systems. Expert in authentication, data modeling, and secure cloud deployment.",
                    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=800"
                }
            ],
        },
        ko: {
            intro: {
                episode: "The Origin",
                title: "The Trust Layer",
                subtitle: "게임 아키텍트에서 AI 신뢰 설계자로",
                text: [
                    "우리가 이곳에 이른 것은 우연이 아닙니다. 지난 10년 동안 우리는 가치, 규칙, 신뢰가 대규모로 작동해야 하는 시스템을 구축해 왔습니다.",
                    "EA, 넷마블, 스마일게이트에서 수백만 명의 사용자를 위한 실시간 인프라와 가상 경제를 설계했습니다. 디지털 자산이 실제 자산처럼 동작해야 하는 시스템들이었습니다.",
                    "우리는 일찍이 깨달았습니다. 강제력이 없다면 가치는 지속되지 않습니다."
                ]
            },
            chapters: [
                {
                    year: "2014 – 2020",
                    headline: "게이밍 시대",
                    content: "‘메타버스’나 ‘Web3’가 주류가 되기 전부터 우리는 이미 대규모 멀티플레이어 시스템을 운영하고 있었습니다. 높은 동시 접속 환경. 지속적인 가상 경제. 무엇을 얻고, 소유하고, 교환할 수 있는지를 결정하는 규칙들. 게임은 우리에게 근본적인 교훈을 주었습니다. 규칙 없는 시뮬레이션은 혼란일 뿐입니다."
                },
                {
                    year: "2021 – 2023",
                    headline: "융합의 시대",
                    content: "AI와 암호화폐가 성숙해지면서 더 깊은 패턴이 드러났습니다. AI는 지능이 어떻게 시뮬레이션될 수 있는지를 보여주었고, 크립토는 진실이 어떻게 합의될 수 있는지를 보여주었습니다. 그러나 무한히 생성되고 즉시 공유되는 생성형 자산에는 검증, 귀속, 회계 처리를 위한 네이티브 방식이 없었습니다. 그래서 우리는 연결 인프라를 구축하기 시작했습니다. 시뮬레이션과 합의를 연결하는 것. 생성형 미디어에 대한 신뢰를 해결하는 것입니다."
                },
                {
                    year: "2024",
                    headline: "신뢰의 붕괴",
                    content: "생성형 AI는 창작 비용을 0으로 만들었습니다. 하지만 신뢰는 확장되지 않았습니다. 기여는 무너졌고, 책임 소재는 흐려졌으며, 가치는 플랫폼 전반으로 유출되었습니다. 문제는 결코 창의성이 아니었습니다. 신뢰 레이어의 부재였습니다. 그 깨달음이 우리가 다음에 구축한 모든 것을 형성했습니다."
                },
                {
                    year: "INFRASTRUCTURE",
                    headline: "신뢰 레이어 구축",
                    content: "HoloStudio는 콘텐츠를 정적 파일이 아닌 살아있는 이벤트로 취급합니다. 생성. 검증. 전파. 정산. 이야기는 움직이고 가치는 흐릅니다. 그리고 모든 기여는 추적 가능해야 합니다. 우리는 출처가 기본적으로 내장되고, 크레딧이 프로그래밍 가능하며, 신뢰가 약속이 아닌 시스템에 의해 강제되는 인프라를 구축합니다."
                },
                {
                    year: "2025 & BEYOND",
                    headline: "자율 에이전트의 시대",
                    content: "다음 시대는 애플리케이션이 아닌 자율 에이전트에 의해 정의될 것입니다. 창조하는 에이전트. 거래하는 에이전트. 독립적으로 상호 작용하는 에이전트. 우리는 이것이 가능한 운영 체제를 구축하고 있습니다. 인간과 AI의 창작물이 검증 가능한 무신뢰 정산 레이어 위에서 공존할 수 있는 시스템입니다."
                }
            ],
            thesis: [
                {
                    headline: "미래를 위한 선택",
                    content: "미래는 중립적이지 않습니다. 혼돈과 신뢰, 무한한 생성과 집행 가능한 신뢰 사이의 선택입니다."
                },
                {
                    headline: "하나의 일관된 시스템",
                    content: "우리는 단절된 제품을 만들지 않습니다. 신뢰가 유통을 가능하게 하고, 유통이 가치를 창출하는 하나의 일관된 아키텍처를 구축합니다. 적대적 방어부터 경제적 정산까지, 모든 레이어가 함께 작동하도록 설계되었습니다."
                }
            ],
            identity: {
                 headline: "우리의 존재 이유",
                 content: "우리는 소유권, 책임, 인간의 의도를 잃지 않으면서 생성형 미디어가 확장될 수 있도록 안전장치를 구축하고 있습니다. 다음 10년을 정의할 시스템은 아직 존재하지 않습니다. 우리가 그것을 만들기 위해 여기 있습니다."
            },
            founders: [
                {
                    name: "Steven Park",
                    role: "Co-Founder & CEO",
                    bio: "글로벌 전략 및 방어. 실리콘밸리 기술과 아시아 게임 거인을 연결하는 크로스보더 AI/Web3 전략 주도. 탈중앙화 프로토콜의 GTM에 대한 깊은 전문 지식.",
                    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                },
                {
                    name: "Yongwan Kim",
                    role: "Co-Founder & CTO",
                    bio: "게임 및 인프라 분야 10년 이상 경력. 전 EA 및 넷마블. 대규모 쿠버네티스, 데브옵스, 테스트 자동화 전문가. 깊은 엔지니어링 엄격함과 AI 혁신의 결합.",
                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"
                },
                {
                    name: "Seongdae Kim",
                    role: "Co-Founder & Chief Architect",
                    bio: "그래픽 및 시스템 베테랑. 전 유니티, 넷마블, 스마일게이트. 실시간 렌더링 파이프라인 및 성능 중요 시스템 마스터.",
                    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
                },
                {
                    name: "Junhyeok Choi",
                    role: "Dev Team Leader",
                    bio: "PlayArts 아키텍처와 개발 로드맵을 총괄합니다. 모든 프로토콜 레이어에서 기술적 우수성을 보장합니다.",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                },
                {
                    name: "Minji You",
                    role: "Front Engineer",
                    bio: "React, Tailwind, Vite 및 Svelte를 활용한 현대적인 UI 전문. 매끄러운 인터랙션에 중점을 둔 UX 스페셜리스트입니다.",
                    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
                },
                {
                    name: "Jaehyeon Kwon",
                    role: "Backend Engineer",
                    bio: "확장 가능한 ASP.NET (9.0) 및 PostgreSQL 시스템 구축. 인증, 데이터 모델링 및 안전한 클라우드 배포 전문가입니다.",
                    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=800"
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
                <CosmicBackground />

                 {/* Retain the spinning rings for the tech feel later in scroll */}
                 <motion.div
                    animate={{ 
                        opacity: visualState.showGuardRail ? 0.3 : 0,
                        scale: visualState.showGuardRail ? 1 : 0.9
                    }}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
                 >
                    <div className="w-[80vh] h-[80vh] rounded-full border border-indigo-500/10 shadow-[0_0_150px_rgba(99,102,241,0.05)] animate-[spin_30s_linear_infinite]" />
                 </motion.div>
            </div>

            {/* Scrolling Content Layer */}
            <main className="relative z-10">
                <div className="relative z-10 py-32 px-6 md:px-12 max-w-[90vw] mx-auto min-h-screen flex flex-col items-center justify-center">
                    <div className="text-center mb-64 w-full">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-indigo-400 font-bold tracking-[0.5em] mb-12 text-2xl md:text-3xl uppercase glow-text"
                        >
                            {c.intro?.episode || "Episode I"}
                        </motion.h2>
                        <motion.h1 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9] uppercase mb-12 drop-shadow-2xl scale-y-110 w-full"
                        >
                            {c.intro?.title || "The Trust Layer"}
                        </motion.h1>

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
                    <div className="space-y-64 w-full max-w-[80vw] mx-auto pb-32">
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
                <div className="w-full">
                     <ThesisSection items={c.thesis} />
                </div>

                {/* Closing Statement */}
                <ClosingStatement />

                {/* Team Identity Section */}
                <TeamIdentity identity={c.identity || {headline: "WHO WE ARE", content: "Loading..."}} />

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
                            <p className="text-neutral-500 max-w-sm mt-6 md:mt-0 leading-relaxed text-sm md:text-base">
                                {language === 'en' 
                                    ? "A team combining deep AI research, AAA gaming production, and Web3 economics."
                                    : "딥 AI 리서치, AAA 게임 프로덕션, 그리고 Web3 경제 설계를 결합한 팀입니다."}
                            </p>
                        </div>

                        {/* Desktop: Grid, Mobile: Horizontal Scroll */}
                        <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-6 md:gap-12 lg:gap-16 pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 no-scrollbar">
                            {c.founders.map((founder, i) => (
                                <div key={i} className="flex-shrink-0 w-[85vw] md:w-auto snap-center">
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