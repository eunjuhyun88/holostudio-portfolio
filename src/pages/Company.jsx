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
const Chapter = ({ title, headline, content, index, isLast, onActive }) => {
    return (
        <div className={`min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 ${isLast ? 'pb-40' : ''}`}>
            <motion.div 
                className="max-w-4xl"
                onViewportEnter={() => onActive(index)}
                viewport={{ margin: "-40% 0px -40% 0px" }}
            >
                {/* Title removed for seamless storytelling */}
                
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-12 leading-[1.1] tracking-tight whitespace-pre-line">
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
            </motion.div>
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
    const [activeIndex, setActiveIndex] = React.useState(0);
    
    // Visual State Management
    const visualState = useMemo(() => {
        // Defines the visual overlays active for each chapter index
        // 0: Hero, 1: Shift, 2: Break, 3: Position, 4: Guardian, 5: Web3, 6: Build, 7: Products, 8: Who, 9: CTA
        return {
            showNoise: [1, 2].includes(activeIndex),
            showGuardRail: [3, 4].includes(activeIndex),
            showLines: [2].includes(activeIndex), // Broken lines
            showRouting: [6].includes(activeIndex),
            showVerification: [5].includes(activeIndex),
            darker: [0, 9].includes(activeIndex),
        };
    }, [activeIndex]);

    const content = {
        ko: {
            chapters: [
                {
                    headline: "We build trust for the AI-native world.",
                    content: "AI가 콘텐츠·거래·의사결정을 대량 생산하는 시대에, 가장 희소한 자원은 ‘정보’가 아니라 신뢰입니다. HoloStudio는 AI가 만든 결과가 안전하고, 검증 가능하며, 책임 있게 유통되도록 하는 안전장치를 설계합니다."
                },
                {
                    headline: "AI가 “생성”을 넘어 “행동”하는 시대로 들어왔습니다.",
                    content: "모델은 이제 문장을 만들 뿐 아니라, 자동으로 배포하고, 거래하고, 상호작용합니다. 문제는 속도가 아니라, 그 과정이 증명되지 않는다는 것입니다."
                },
                {
                    headline: "When verification disappears, the internet breaks.",
                    content: "무엇이 진짜였는지(출처), 누가 책임지는지(책임), 누가 기여했는지(크레딧)가 끊기면 AI는 혁신이 아니라 위험의 증폭기가 됩니다."
                },
                {
                    headline: "신뢰는 ‘규칙’이 아니라 ‘인프라’여야 합니다.",
                    content: "정책·약관·사후 신고는 늦습니다. 우리는 생성/유통/행동의 경계(boundary)에서 검증이 시작되는 구조를 만듭니다."
                },
                {
                    headline: "AiD Guardian is our safety layer.",
                    content: "AiD Guardian은 AI 결과물/행동의 흐름에 검증 가능한 가드레일을 삽입합니다. 검증은 “나중에 확인”이 아니라, 처음부터 증명 가능한 상태로 만드는 것입니다."
                },
                {
                    headline: "Web3 makes verification composable.",
                    content: "검증 가능한 기록, 공개 가능한 증명, 그리고 자동 정산은 AI 시대의 신뢰를 프로토콜처럼 재사용할 수 있게 만듭니다."
                },
                {
                    headline: "Trust becomes proof. Proof becomes value.",
                    content: "HoloStudio는 “무엇을 믿을 수 있는가”를 증명 단위로 바꾸고, 그 증명이 실제 제품/시장 안에서 가치 흐름으로 이어지게 설계합니다."
                },
                {
                    headline: "We ship products that prove the thesis.",
                    content: "HoloStudio는 하나의 세계관을 말로 설명하지 않습니다. 제품으로 증명합니다."
                },
                {
                    headline: "WHO WE ARE\n\nEngineers. Researchers. Builders.",
                    content: "우리는 제품을 만드는 팀이자, 신뢰 인프라를 설계하는 팀입니다. AI와 Web3가 만나는 지점에서, 검증과 안전장치의 표준을 만듭니다."
                },
                {
                    headline: "If you’re building in AI × Web3, let’s build trust together.",
                    content: "파트너십, 투자, 채용, 공동 연구. HoloStudio의 검증 레이어 위에서 함께 확장할 수 있습니다."
                }
            ],
            ventures: [
                {
                    name: "PlayArts",
                    desc: "AI 미디어의 출처·변형·확산을 추적하고, 기여도에 따라 가치 분배를 자동화합니다.",
                    link: "PlayArts"
                },
                {
                    name: "EleMEMEtal",
                    desc: "게임에서 ‘재미/경쟁’이 만들어내는 행동 데이터를 신뢰 가능한 구조로 연결합니다.",
                    link: "Elememetal"
                },
                {
                    name: "StockHoo",
                    desc: "코인(자산)별 미시구조에 맞춘 Token-Specific AI로 시장 신호를 정밀하게 해석합니다.",
                    link: "Stockhoo"
                }
            ]
        },
        en: {
             chapters: [
                {
                    headline: "We build trust for the AI-native world.",
                    content: "In an era where AI mass-produces content, transactions, and decisions, the scarcest resource is not 'information' but trust. HoloStudio designs safety mechanisms to ensure AI outputs are safe, verifiable, and responsibly distributed."
                },
                {
                    headline: "AI has moved beyond “Creation” to “Action”.",
                    content: "Models now not only generate text but automatically distribute, trade, and interact. The problem is not the speed, but that the process remains unverified."
                },
                {
                    headline: "When verification disappears, the internet breaks.",
                    content: "If origin (provenance), responsibility (accountability), and contribution (credit) are severed, AI becomes an amplifier of risk rather than innovation."
                },
                {
                    headline: "Trust must be ‘Infrastructure’, not ‘Rules’.",
                    content: "Policies and post-incident reporting are too late. We build structures where verification begins at the boundary of generation, distribution, and action."
                },
                {
                    headline: "AiD Guardian is our safety layer.",
                    content: "AiD Guardian inserts verifiable guardrails into the flow of AI outputs and actions. Verification is not about \"checking later,\" but making it provable from the start."
                },
                {
                    headline: "Web3 makes verification composable.",
                    content: "Verifiable records, public proofs, and automated settlement make trust in the AI era reusable like a protocol."
                },
                {
                    headline: "Trust becomes proof. Proof becomes value.",
                    content: "HoloStudio turns \"what can be trusted\" into units of proof, and designs those proofs to flow as value within real products and markets."
                },
                {
                    headline: "We ship products that prove the thesis.",
                    content: "HoloStudio does not explain its worldview with words. We prove it with products."
                },
                 {
                    headline: "WHO WE ARE\n\nEngineers. Researchers. Builders.",
                    content: "We are a team building products and designing trust infrastructure. At the intersection of AI and Web3, we set the standard for verification and safety."
                },
                {
                    headline: "If you’re building in AI × Web3, let’s build trust together.",
                    content: "Partnerships, Investment, Hiring, Joint Research. Scale with us on top of HoloStudio's verification layer."
                }
            ],
            ventures: [
                {
                    name: "PlayArts",
                    desc: "Tracks origin, mutation, and spread of AI media, automating value distribution based on contribution.",
                    link: "PlayArts"
                },
                {
                    name: "EleMEMEtal",
                    desc: "Connects behavioral data generated by 'fun/competition' in games to a trustworthy structure.",
                    link: "Elememetal"
                },
                {
                    name: "StockHoo",
                    desc: "Precisely interprets market signals with Token-Specific AI tailored to asset microstructures.",
                    link: "Stockhoo"
                }
            ]
        }
    };

    const c = content[language] || content.ko;

    return (
        <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-indigo-500/30">
            <SEO 
                title="Company" 
                description={c.chapters[0].headline}
            />

            {/* Visual State Management Layer */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                 {/* Base 3D Background */}
                 <div className={`transition-opacity duration-1000 ${visualState.darker ? 'opacity-30' : 'opacity-60'}`}>
                    <Background3D />
                 </div>
                 
                 {/* Overlays based on state */}
                 <div className="absolute inset-0 bg-[#050505] mix-blend-multiply opacity-20" />
                 
                 {/* Noise Layer (The Shift / The Break) */}
                 <motion.div 
                    animate={{ opacity: visualState.showNoise ? 0.15 : 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-0 mix-blend-overlay"
                 />
                 
                 {/* Broken Lines (The Break) */}
                 <motion.div
                    animate={{ opacity: visualState.showLines ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center"
                 >
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent blur-[1px]" />
                 </motion.div>

                 {/* Guard Rail Ring (Position / Guardian) */}
                 <motion.div
                    animate={{ 
                        opacity: visualState.showGuardRail ? 1 : 0,
                        scale: visualState.showGuardRail ? 1 : 0.8
                    }}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                 >
                    <div className="w-[60vh] h-[60vh] rounded-full border border-indigo-500/30 shadow-[0_0_100px_rgba(99,102,241,0.2)] animate-[spin_10s_linear_infinite]" />
                    <div className="absolute w-[50vh] h-[50vh] rounded-full border border-indigo-400/20 animate-[spin_15s_linear_infinite_reverse]" />
                 </motion.div>

                 {/* Verification Grid (Web3 / Build) */}
                 <motion.div
                     animate={{ opacity: visualState.showVerification ? 1 : 0 }}
                     className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"
                 />

                 <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505] z-10" />
            </div>

            {/* Scrolling Content Layer */}
            <main className="relative z-10">
                <div className="max-w-[1400px] mx-auto">
                    {c.chapters.map((chapter, i) => (
                        <Chapter 
                            key={i}
                            title={chapter.title}
                            headline={chapter.headline}
                            content={chapter.content}
                            index={i}
                            onActive={setActiveIndex}
                            isLast={i === c.chapters.length - 1}
                        />
                    ))}
                </div>

                {/* Ventures Section (Attached to CH7 visually via logic, but rendered here for layout) */}
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-40">
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
                
                {/* Final CTA Button for CH9 */}
                <div className="flex justify-center pb-40">
                    <Link to={createPageUrl('Contact')}>
                        <Button className="bg-white text-black hover:bg-neutral-200 rounded-full px-10 h-14 text-lg font-bold transition-transform hover:scale-105">
                            Connect With Us <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </main>
        </div>
    );
}