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

// Chapter Component
const Chapter = ({ headline, content, index, onActive, isLast }) => {
    return (
        <div className={`min-h-[60vh] flex flex-col justify-center px-6 md:px-12 py-20 ${isLast ? 'pb-32' : ''} border-l border-white/10 md:border-l-0 ml-4 md:ml-0`}>
            <motion.div 
                className="max-w-6xl w-full"
                onViewportEnter={() => onActive(index)}
                viewport={{ margin: "-20% 0px -20% 0px" }}
            >
                {/* Decorative Line */}
                <div className="w-12 h-1 bg-white mb-6 md:mb-8 hidden md:block" />

                <h2 
                    className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-white tracking-tight"
                    style={{ lineHeight: 1.25 }} 
                >
                    <ScrollRevealText>
                        {headline}
                    </ScrollRevealText>
                </h2>

                {content && (
                     <div 
                        className="text-lg md:text-xl lg:text-2xl text-neutral-400 font-light max-w-4xl"
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
            chapters: [
                {
                    headline: "The scarce resource is no longer creativity—it is credibility.",
                    content: "AI has radically lowered the cost of creation, but trust has collapsed. As everyone becomes a media creator, stories move faster than verification. Attribution breaks, accountability fades, and value leaks."
                },
                {
                    headline: "Generative media lacks a native trust layer.",
                    content: "We treat content not as static files, but as living events—Creation, Verification, Propagation, Settlement. HoloStudio builds the infrastructure where stories are verifiable and contribution is attributable."
                },
                {
                    headline: "A unified infrastructure for the Autonomous Age.",
                    content: "We do not build disconnected products. We build a single coherent system where trust enables distribution, and distribution creates value. From adversarial defense to economic settlement, every layer is connected."
                },
                {
                    headline: "The future is a choice between chaos and credibility.",
                    content: "We are building the safeguards that allow generative media to scale without losing humanity. The systems that will define the next decade do not exist yet. We are here to build them."
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