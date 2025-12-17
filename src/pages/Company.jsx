import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useLanguage } from '@/components/LanguageContext';
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, CheckCircle2, Heart, Zap, ArrowUpRight } from 'lucide-react';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Background3D from '@/components/Background3D';

// --- Components ---

// Helper component to avoid "Hooks inside loop" error
const RevealWord = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0.3, 1]);
    return (
        <motion.span 
            style={{ opacity }}
            className="mr-[0.25em] transition-colors duration-100"
        >
            {children}
        </motion.span>
    );
};

// Smooth Text Reveal Component
const ScrollRevealText = ({ children, className = "" }) => {
    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ["start 0.9", "start 0.25"]
    });

    // Ensure children is a string before splitting
    const text = typeof children === 'string' ? children : String(children);
    const words = text.split(" ");

    return (
        <p ref={element} className={`flex flex-wrap leading-tight ${className}`}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
                return (
                    <RevealWord 
                        key={i} 
                        progress={scrollYProgress} 
                        range={[start, end]}
                    >
                        {word}
                    </RevealWord>
                );
            })}
        </p>
    );
};

// Chapter Component
const Chapter = ({ title, headline, content, index, isLast }) => {
    return (
        <div className={`min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 ${isLast ? 'pb-40' : ''}`}>
            <div className="max-w-4xl">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-xs md:text-sm font-bold uppercase tracking-widest text-indigo-500 mb-8"
                >
                    {title}
                </motion.div>
                
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-12 leading-[1.1] tracking-tight">
                    <ScrollRevealText>
                        {headline}
                    </ScrollRevealText>
                </h2>

                {content && (
                     <div className="text-xl md:text-2xl text-neutral-400 leading-relaxed font-light max-w-2xl">
                        <ScrollRevealText>
                            {content}
                        </ScrollRevealText>
                    </div>
                )}
            </div>
        </div>
    );
};

// Venture Card
const VentureCard = ({ name, description, link }) => (
    <Link to={createPageUrl(link)} className="group block">
        <div className="relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-12 hover:border-indigo-500/50 transition-all duration-500 hover:bg-white/5">
            <div className="flex justify-between items-start mb-8">
                <h3 className="text-3xl font-bold text-white group-hover:text-indigo-400 transition-colors">{name}</h3>
                <ArrowUpRight className="w-6 h-6 text-neutral-500 group-hover:text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <p className="text-lg text-neutral-400 group-hover:text-neutral-200 transition-colors">
                {description}
            </p>
        </div>
    </Link>
);


export default function Company() {
    const { language } = useLanguage();
    
    // Using Korean as primary source as per prompt, English as fallback/translation
    const content = {
        ko: {
            chapters: [
                {
                    title: "CHAPTER 0 — HERO",
                    headline: "HoloStudio는 AI 시대의 ‘신뢰 가능한 안전장치’를 만든다.",
                    content: "AI는 무한히 생성하고 퍼뜨리지만, 신뢰와 책임은 자동으로 따라오지 않습니다. 우리는 검증 가능한 구조로 그 공백을 메웁니다."
                },
                {
                    title: "CHAPTER 1 — THE SHIFT",
                    headline: "이제 누구나 직접 말하고, 직접 확산시키는 시대다.",
                    content: "소셜, 유튜브, 팟캐스트, 뉴스레터… 기업과 개인 모두가 미디어가 됐습니다. 하지만 직접 말하기 시작하면 ‘신뢰 비용’이 폭증합니다."
                },
                {
                    title: "CHAPTER 2 — THE BREAKDOWN",
                    headline: "퍼지는 속도만 남고, 출처·크레딧·책임은 끊긴다.",
                    content: "누가 만들었는지, 어디서 변형됐는지, 무엇이 원본인지—기록이 끊어집니다. AI는 이 단절을 더 빠르게, 더 크게 만듭니다."
                },
                {
                    title: "CHAPTER 3 — THE MISDIAGNOSIS",
                    headline: "사람들은 ‘스토리텔러’를 찾지만, 근본 문제는 ‘스토리’가 아니다.",
                    content: "인력을 늘려도 파생과 채널 확산은 사람의 처리량을 초과합니다. 필요한 것은 더 많은 카피가 아니라, 신뢰가 유지되는 운영 시스템입니다."
                },
                {
                    title: "CHAPTER 4 — THE REAL PROBLEM",
                    headline: "핵심 병목은 ‘메시지’가 아니라 ‘검증과 정산’이다.",
                    content: "출처는 어떻게 남기는가. 기여는 어떻게 귀속되는가. 확산은 어떻게 측정되는가. 가치는 어떻게 안전하게 분배되는가. 이 구조가 없으면 신뢰도 수익도 계속 누수됩니다."
                },
                {
                    title: "CHAPTER 5 — WHAT WE BUILD",
                    headline: "HoloStudio는 검증 가능한 안전장치(Guardrails)를 설계한다.",
                    content: "우리는 신뢰·검증·책임·정산이 끊기지 않도록 시스템 레벨의 가드레일을 구축합니다. 이것이 AI 시대에 우리가 정체성을 강화하는 방식입니다."
                },
                {
                    title: "CHAPTER 6 — WHY WEB3 × AI",
                    headline: "AI가 ‘생성과 행동’을 만들고, Web3는 ‘검증과 권리’를 시스템으로 만든다.",
                    content: "AI만으로는 신뢰가 자동으로 생기지 않고, Web3만으로는 확장성과 사용성이 부족합니다. 우리는 두 흐름을 결합해 ‘검증 가능한 미래’를 현실화합니다."
                },
                {
                    title: "CHAPTER 7 — OUR VENTURES",
                    headline: "HoloStudio는 하나의 코어 역량 위에서 여러 사업을 확장한다.",
                    content: "각 사업은 다른 시장에 있지만, 모두 같은 질문을 해결합니다: “무엇이 진짜이며, 누구에게 귀속되는가?” 우리는 이를 각 도메인에서 제품으로 증명합니다."
                }
            ],
            ventures: [
                {
                    name: "PlayArts",
                    desc: "AI 생성 콘텐츠의 출처 증명과 확산 기반 가치 분배.",
                    link: "PlayArts"
                },
                {
                    name: "EleMEMEtal",
                    desc: "미디어·게임·밈이 결합된 참여형 IP 실험.",
                    link: "Elememetal"
                },
                {
                    name: "StockHoo",
                    desc: "토큰 단위로 특화된 AI 시장 인텔리전스 엔진.",
                    link: "Stockhoo"
                }
            ],
            cta: {
                headline: "우리는 ‘말’이 아니라 ‘구조’로 신뢰를 만든다.",
                sub: "파트너십, 투자, 채용—HoloStudio의 방향성과 실행에 함께할 분을 찾습니다.",
                button: "Connect With Us"
            }
        },
        en: {
             chapters: [
                {
                    title: "CHAPTER 0 — HERO",
                    headline: "HoloStudio builds the 'Trusted Guardrails' for the AI Era.",
                    content: "AI generates and spreads infinitely, but trust and responsibility do not follow automatically. We fill that gap with verifiable structures."
                },
                {
                    title: "CHAPTER 1 — THE SHIFT",
                    headline: "An era where everyone speaks and distributes directly.",
                    content: "Social, YouTube, Podcasts, Newsletters… Companies and individuals have all become media. But as direct speech increases, the 'cost of trust' skyrockets."
                },
                {
                    title: "CHAPTER 2 — THE BREAKDOWN",
                    headline: "Only speed remains; Source, Credit, and Responsibility are severed.",
                    content: "Who made it? Where was it transformed? What is the original? The record is broken. AI accelerates and amplifies this disconnection."
                },
                {
                    title: "CHAPTER 3 — THE MISDIAGNOSIS",
                    headline: "People look for 'Storytellers', but the root problem isn't the 'Story'.",
                    content: "Even with more people, derivatives and channel diffusion exceed human throughput. What is needed is not more copy, but an operating system that maintains trust."
                },
                {
                    title: "CHAPTER 4 — THE REAL PROBLEM",
                    headline: "The bottleneck is not 'Message', but 'Verification & Settlement'.",
                    content: "How to preserve provenance? How to attribute contribution? How to measure distribution? How to safely distribute value? Without this structure, trust and revenue leak."
                },
                {
                    title: "CHAPTER 5 — WHAT WE BUILD",
                    headline: "HoloStudio designs Verifiable Guardrails.",
                    content: "We build system-level guardrails so trust, verification, responsibility, and settlement are not broken. This is how we reinforce identity in the AI era."
                },
                {
                    title: "CHAPTER 6 — WHY WEB3 × AI",
                    headline: "AI creates 'Generation & Action', Web3 creates 'Verification & Rights' as a system.",
                    content: "AI alone does not create trust; Web3 alone lacks scalability and usability. We combine the two to realize a 'Verifiable Future'."
                },
                {
                    title: "CHAPTER 7 — OUR VENTURES",
                    headline: "HoloStudio expands multiple ventures upon a single Core Competence.",
                    content: "Each venture is in a different market, but solves the same question: 'What is real, and to whom does it belong?' We prove this with products in each domain."
                }
            ],
            ventures: [
                {
                    name: "PlayArts",
                    desc: "Provenance proof and distribution-based value distribution for AI content.",
                    link: "PlayArts"
                },
                {
                    name: "EleMEMEtal",
                    desc: "Interactive IP experiment combining media, gaming, and memes.",
                    link: "Elememetal"
                },
                {
                    name: "StockHoo",
                    desc: "AI market intelligence engine specialized for token units.",
                    link: "Stockhoo"
                }
            ],
            cta: {
                headline: "We build trust not with 'Words', but with 'Structure'.",
                sub: "Partnerships, Investment, Hiring — We are looking for those who share HoloStudio's direction and execution.",
                button: "Connect With Us"
            }
        }
    };

    const c = content[language] || content.ko; // Default to Korean

    return (
        <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-indigo-500/30">
            <SEO 
                title="Company" 
                description={c.chapters[0].headline}
            />

            {/* Pinned Background Layer */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                 <Background3D />
                 <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-transparent to-[#050505] z-10" />
                 <div className="absolute inset-0 bg-[#050505]/30 backdrop-blur-[2px] z-10" />
            </div>

            {/* Scrolling Content Layer */}
            <main className="relative z-10">
                {/* Chapters */}
                <div className="max-w-[1400px] mx-auto">
                    {c.chapters.map((chapter, i) => (
                        <Chapter 
                            key={i}
                            title={chapter.title}
                            headline={chapter.headline}
                            content={chapter.content}
                            index={i}
                        />
                    ))}
                </div>

                {/* Ventures Grid */}
                <div className="bg-[#050505]/90 backdrop-blur-xl border-t border-white/10 relative">
                    <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-32">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-16"
                        >
                            <h2 className="text-4xl md:text-6xl font-bold mb-6">Our Ventures</h2>
                            <p className="text-xl text-neutral-400 max-w-2xl">
                                {language === 'ko' ? 
                                    "우리는 각 도메인에서 인프라를 증명하는 제품을 만듭니다." : 
                                    "We build products that prove our infrastructure in each domain."}
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {c.ventures.map((venture, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <VentureCard {...venture} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-[#ccff00] text-black py-32 px-6 md:px-12 relative overflow-hidden">
                    <div className="max-w-[1400px] mx-auto relative z-10 text-center">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight"
                        >
                            {c.cta.headline}
                        </motion.h2>
                        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-80 font-medium">
                            {c.cta.sub}
                        </p>
                        <Link to={createPageUrl('Contact')}>
                            <Button className="bg-black text-white hover:bg-neutral-800 rounded-full px-12 h-16 text-lg font-bold shadow-2xl hover:scale-105 transition-all">
                                {c.cta.button} <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                    {/* Abstract Shapes */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
                        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px]" />
                    </div>
                </div>
            </main>
        </div>
    );
}