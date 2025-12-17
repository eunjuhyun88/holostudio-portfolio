import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useLanguage } from '@/components/LanguageContext';
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Background3D from '@/components/Background3D';

// --- Components ---

// Smooth Text Reveal Component
// Refactored to use standard inline flow instead of flexbox to fix line-height and spacing issues
const ScrollRevealText = ({ children, className = "" }) => {
    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ["start 0.9", "start 0.25"]
    });

    const text = typeof children === 'string' ? children : String(children);
    // Split by space but preserve it in the rendering
    const words = text.split(" ");

    return (
        <span ref={element} className={`${className} inline-block w-full`} style={{ wordBreak: 'keep-all' }}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
                return (
                    <Word 
                        key={i} 
                        progress={scrollYProgress} 
                        range={[start, end]}
                    >
                        {word}
                    </Word>
                );
            })}
        </span>
    );
};

const Word = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0.1, 1]);
    return (
        <span className="inline-block mr-[0.25em] last:mr-0">
            <motion.span 
                style={{ opacity }}
                className="transition-colors duration-100"
            >
                {children}
            </motion.span>
        </span>
    );
};

// Chapter Component
const Chapter = ({ headline, content, index, onActive, isLast }) => {
    return (
        <div className={`min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 ${isLast ? 'pb-40' : ''} border-l border-white/10 md:border-l-0 ml-4 md:ml-0`}>
            <motion.div 
                className="max-w-6xl w-full"
                onViewportEnter={() => onActive(index)}
                viewport={{ margin: "-40% 0px -40% 0px" }}
            >
                {/* Decorative Line */}
                <div className="w-12 h-1 bg-white mb-8 md:mb-12 hidden md:block" />

                <h2 
                    className="text-3xl md:text-5xl lg:text-7xl font-bold mb-8 md:mb-10 text-white tracking-tight"
                    style={{ lineHeight: 1.3 }} 
                >
                    <ScrollRevealText>
                        {headline}
                    </ScrollRevealText>
                </h2>

                {content && (
                     <div 
                        className="text-lg md:text-2xl lg:text-3xl text-neutral-400 font-light max-w-4xl"
                        style={{ lineHeight: 1.6 }}
                     >
                        <ScrollRevealText>
                            {content}
                        </ScrollRevealText>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

// Team Identity Component
const TeamIdentity = () => (
    <div className="min-h-[80vh] flex flex-col justify-center px-6 md:px-12 max-w-[1600px] mx-auto py-24">
        <div className="mb-8 md:mb-16">
            <div className="w-8 h-8 bg-white mb-8" />
            <h2 className="text-sm font-bold tracking-widest uppercase text-neutral-400 mb-2">Who We Are</h2>
        </div>
        
        <div className="text-[10vw] md:text-[8vw] leading-[1.1] font-bold tracking-tighter text-white select-none">
            <motion.div 
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-4 md:gap-8 mb-4 md:mb-0 flex-wrap"
            >
                <div className="w-[0.6em] h-[0.6em] bg-[#9bf00b] rounded-tl-full flex-shrink-0" />
                <span>Engineers</span>
            </motion.div>
            
            <motion.div 
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-4 md:gap-8 md:ml-[1.5em] mb-4 md:mb-0 flex-wrap"
            >
                <div className="w-[0.5em] h-[0.5em] border-[0.15em] border-[#ff69b4] flex-shrink-0" />
                <span>Researchers</span>
            </motion.div>
            
            <motion.div 
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center gap-4 md:gap-8 md:ml-[3em] flex-wrap"
            >
                <div className="w-[0.5em] h-[0.5em] bg-[#1d4ed8] rounded-full flex-shrink-0" />
                <span>Builders</span>
            </motion.div>
        </div>

        <div className="mt-16 md:mt-24 max-w-2xl ml-auto">
            <p className="text-lg md:text-2xl text-neutral-400 leading-relaxed">
                We are a global team of technologists, cryptographers, and product thinkers working to shape a better internet through verifiable infrastructure.
            </p>
        </div>
    </div>
);

// Venture Card
const VentureCard = ({ name, description, link, color }) => (
    <Link to={createPageUrl(link)} className="group block h-full">
        <div className="relative bg-[#0A0A0A] border border-neutral-800 h-full p-8 md:p-12 transition-all duration-500 hover:border-neutral-600 hover:bg-neutral-900 overflow-hidden flex flex-col rounded-3xl">
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            
            <div className="flex justify-between items-start mb-8 md:mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white">{name}</h3>
                <ArrowUpRight className="w-6 h-6 text-neutral-600 group-hover:text-white transition-colors duration-300" />
            </div>
            
            <div className="mt-auto">
                <p className="text-base md:text-lg text-neutral-400 leading-relaxed group-hover:text-neutral-200 transition-colors duration-300 break-keep">
                    {description}
                </p>
            </div>
        </div>
    </Link>
);


export default function Company() {
    const { language } = useLanguage();
    const [activeIndex, setActiveIndex] = React.useState(0);
    
    // Visual State Management
    const visualState = useMemo(() => {
        return {
            showNoise: [1, 2, 3].includes(activeIndex),
            showGuardRail: [4, 5].includes(activeIndex),
            showLines: [3].includes(activeIndex),
            showRouting: [9].includes(activeIndex),
            showVerification: [6, 7].includes(activeIndex),
            darker: [0, 10].includes(activeIndex),
        };
    }, [activeIndex]);

    const content = {
        en: {
            chapters: [
                {
                    headline: "We build what comes next for generative media.",
                    content: "AI has radically lowered the cost of creating content. What it has not solved is trust."
                },
                {
                    headline: "The scarce resource is no longer creativity — it is credibility.",
                    content: "As media becomes faster, cheaper, and more abundant, we need to know: Who created this? How it changed? Where it spread? Who should benefit? HoloStudio exists to answer those questions at the infrastructure level."
                },
                {
                    headline: "Everyone is becoming a media creator.",
                    content: "Every brand, every community, every individual now speaks directly to the world. But direct communication introduces a new failure mode. Stories move faster than systems can verify them."
                },
                {
                    headline: "Attribution breaks. Accountability fades. Value leaks.",
                    content: "AI accelerates this collapse. Hiring more storytellers does not fix the problem. Producing better content does not fix the problem. The problem is structural."
                },
                {
                    headline: "Generative media lacks a native trust layer.",
                    content: "HoloStudio’s belief is simple. Stories should be verifiable. Distribution should be measurable. Contribution should be attributable. Value should be programmable."
                },
                {
                    headline: "Media should not disappear into feeds. It should leave a trace.",
                    content: "We treat content not as static files, but as living events that evolve over time. Creation, verification, propagation, contribution, settlement."
                },
                {
                    headline: "Each step produces data. Each data point can be proven. Each proof can unlock value.",
                    content: "This is how media becomes infrastructure."
                },
                {
                    headline: "We do not operate as a collection of disconnected products.",
                    content: "We build a single coherent system, and express it through multiple execution layers. Infrastructure that anchors trust at the moment of creation. Protocols that track how narratives move and mutate. Products that prove these systems work in real markets."
                },
                {
                    headline: "Everything we build is connected by the same logic.",
                    content: "Trust enables distribution. Distribution creates value. Value sustains ecosystems. This is the loop we design for."
                },
                {
                    headline: "The future of media will be created with AI.",
                    content: "Whether that future is chaotic or credible is a choice. HoloStudio is building the safeguards that allow generative media to scale without losing trust, authorship, or accountability."
                },
                {
                    headline: "We are still at the beginning.",
                    content: "The systems that will define the next decade of media do not exist yet. We are here to build them. This is HoloStudio."
                }
            ],
            ventures: [
                {
                    name: "PlayArts",
                    desc: "Tracks origin, mutation, and spread of AI media, automating value distribution based on contribution.",
                    link: "PlayArts",
                    color: "from-lime-400 to-lime-600"
                },
                {
                    name: "EleMEMEtal",
                    desc: "Connects behavioral data generated by 'fun/competition' in games to a trustworthy structure.",
                    link: "Elememetal",
                    color: "from-orange-400 to-orange-600"
                },
                {
                    name: "StockHoo",
                    desc: "Precisely interprets market signals with Token-Specific AI tailored to asset microstructures.",
                    link: "Stockhoo",
                    color: "from-emerald-400 to-emerald-600"
                }
            ]
        },
        ko: {
             chapters: [
                {
                    headline: "우리는 생성형 미디어의 다음 시대를 만듭니다.",
                    content: "AI는 콘텐츠 생성 비용을 획기적으로 낮췄습니다. 하지만 '신뢰'의 문제는 해결하지 못했습니다."
                },
                {
                    headline: "이제 희소한 자원은 창의성이 아니라, '신뢰성'입니다.",
                    content: "미디어가 더 빠르고 저렴해질수록, 우리는 알아야 합니다. 누가 만들었는가? 어떻게 변형되었는가? 어디로 확산되었는가? HoloStudio는 이 질문들에 인프라 레벨에서 답합니다."
                },
                {
                    headline: "모두가 미디어 크리에이터가 되었습니다.",
                    content: "브랜드, 커뮤니티, 개인 모두가 세상과 직접 소통합니다. 하지만 직접 소통은 새로운 실패를 야기합니다. 이야기는 시스템이 검증할 수 있는 속도보다 더 빠르게 움직입니다."
                },
                {
                    headline: "출처는 끊기고, 책임은 희미해지며, 가치는 누수됩니다.",
                    content: "AI는 이 붕괴를 가속화합니다. 더 많은 스토리텔러를 고용한다고 해결되지 않습니다. 더 좋은 콘텐츠를 만든다고 해결되지 않습니다. 이것은 구조적인 문제입니다."
                },
                {
                    headline: "생성형 미디어에는 '신뢰 레이어'가 부재합니다.",
                    content: "HoloStudio의 믿음은 단순합니다. 이야기는 검증 가능해야 합니다. 확산은 측정 가능해야 합니다. 기여는 귀속 가능해야 합니다. 가치는 프로그래밍 가능해야 합니다."
                },
                {
                    headline: "미디어는 피드 속으로 사라져선 안 됩니다. 흔적(Trace)을 남겨야 합니다.",
                    content: "우리는 콘텐츠를 정적인 파일이 아니라, 시간의 흐름에 따라 진화하는 '살아있는 이벤트'로 다룹니다. 생성, 검증, 전파, 기여, 정산."
                },
                {
                    headline: "각 단계는 데이터를 생성합니다. 각 데이터는 증명될 수 있습니다. 각 증명은 가치를 만듭니다.",
                    content: "이것이 미디어가 인프라가 되는 방식입니다."
                },
                {
                    headline: "우리는 분절된 제품들의 집합으로 일하지 않습니다.",
                    content: "우리는 하나의 일관된 시스템을 구축하고, 여러 실행 레이어로 표현합니다. 생성 시점에 신뢰를 고정하는 인프라. 서사가 이동하고 변이하는 과정을 추적하는 프로토콜. 이 시스템이 실제 시장에서 작동함을 증명하는 제품들."
                },
                {
                    headline: "우리가 만드는 모든 것은 같은 논리로 연결됩니다.",
                    content: "신뢰는 확산을 가능하게 합니다. 확산은 가치를 창출합니다. 가치는 생태계를 지속시킵니다. 이것이 우리가 설계하는 루프(Loop)입니다."
                },
                {
                    headline: "미디어의 미래는 AI와 함께 만들어집니다.",
                    content: "그 미래가 혼돈일지 신뢰일지는 선택입니다. HoloStudio는 신뢰, 저작권, 책임을 잃지 않으면서도 생성형 미디어가 확장될 수 있는 안전장치를 만듭니다."
                },
                {
                    headline: "우리는 아직 시작점에 있습니다.",
                    content: "다음 10년의 미디어를 정의할 시스템은 아직 존재하지 않습니다. 우리가 그것을 만들기 위해 여기 있습니다. This is HoloStudio."
                }
            ],
            ventures: [
                {
                    name: "PlayArts",
                    desc: "AI 미디어의 출처·변형·확산을 추적하고, 기여도에 따라 가치 분배를 자동화합니다.",
                    link: "PlayArts",
                    color: "from-lime-400 to-lime-600"
                },
                {
                    name: "EleMEMEtal",
                    desc: "게임에서 ‘재미/경쟁’이 만들어내는 행동 데이터를 신뢰 가능한 구조로 연결합니다.",
                    link: "Elememetal",
                    color: "from-orange-400 to-orange-600"
                },
                {
                    name: "StockHoo",
                    desc: "코인(자산)별 미시구조에 맞춘 Token-Specific AI로 시장 신호를 정밀하게 해석합니다.",
                    link: "Stockhoo",
                    color: "from-emerald-400 to-emerald-600"
                }
            ]
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
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                 {/* Base 3D Background */}
                 <div className={`transition-opacity duration-1000 ${visualState.darker ? 'opacity-30' : 'opacity-60'}`}>
                    <Background3D />
                 </div>
                 
                 {/* Overlays */}
                 <div className="absolute inset-0 bg-[#050505] mix-blend-multiply opacity-20" />
                 
                 {/* Noise Layer */}
                 <motion.div 
                    animate={{ opacity: visualState.showNoise ? 0.15 : 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-0 mix-blend-overlay"
                 />
                 
                 {/* Guard Rail Ring */}
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

                 <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505] z-10" />
            </div>

            {/* Scrolling Content Layer */}
            <main className="relative z-10">
                <div className="max-w-[1400px] mx-auto">
                    {c.chapters.map((chapter, i) => (
                        <Chapter 
                            key={i}
                            headline={chapter.headline}
                            content={chapter.content}
                            index={i}
                            onActive={setActiveIndex}
                            isLast={i === c.chapters.length - 1}
                        />
                    ))}
                </div>

                {/* Team Identity Section */}
                <TeamIdentity />

                {/* Ventures Section */}
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-40">
                    <div className="mb-12 border-b border-white/10 pb-4">
                         <h2 className="text-sm font-bold tracking-widest uppercase text-neutral-400">Our Products</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 md:gap-8 min-h-[500px] md:h-[400px]">
                        {c.ventures.map((venture, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="h-full"
                            >
                                <VentureCard {...venture} />
                            </motion.div>
                        ))}
                    </div>
                </div>
                
                {/* Final CTA */}
                <div className="flex flex-col items-center justify-center pb-40 px-6 text-center">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 max-w-3xl leading-tight text-white">Ready to build the trust layer?</h2>
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