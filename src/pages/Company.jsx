import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from '@/components/LanguageContext';
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Plus, Minus } from 'lucide-react';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Background3D from '@/components/Background3D';

// --- Components ---

// Smooth Text Reveal Component
const ScrollRevealText = ({ children, className = "" }) => {
    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ["start 0.9", "start 0.25"]
    });

    const text = typeof children === 'string' ? children : String(children);
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

// Team Identity Component (Refactored for Founder Spotlight)
const TeamIdentity = () => (
    <div className="min-h-[60vh] flex flex-col justify-center px-6 md:px-12 max-w-[1600px] mx-auto py-24">
        <div className="mb-8 md:mb-16">
            <div className="w-8 h-8 bg-white mb-8" />
            <h2 className="text-sm font-bold tracking-widest uppercase text-neutral-400 mb-2">Our DNA</h2>
        </div>
        
        <div className="text-[8vw] md:text-[6vw] leading-[1.1] font-bold tracking-tighter text-white select-none">
            <motion.div 
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-4 md:gap-8 mb-4 md:mb-0 flex-wrap"
            >
                <div className="w-[0.6em] h-[0.6em] bg-[#9bf00b] rounded-tl-full flex-shrink-0" />
                <span>Founders</span>
            </motion.div>
            
            <motion.div 
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-4 md:gap-8 md:ml-[1.5em] mb-4 md:mb-0 flex-wrap"
            >
                <div className="w-[0.5em] h-[0.5em] border-[0.15em] border-[#ff69b4] flex-shrink-0" />
                <span>Builders</span>
            </motion.div>
        </div>

        <div className="mt-16 md:mt-24 max-w-2xl ml-auto">
            <p className="text-lg md:text-2xl text-neutral-400 leading-relaxed">
                We are a team built at the intersection of AI infrastructure, gaming, and Web3.
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
        className="group relative"
    >
        <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 mb-6">
            {/* Image Placeholder or Actual Image */}
            {image ? (
                <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            ) : (
                <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-neutral-600">
                    Image
                </div>
            )}
            
            {/* Hover Overlay with Quote/Insight */}
            <div className="absolute inset-0 bg-indigo-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-center">
                 <p className="text-white text-lg font-medium leading-relaxed italic">
                    "{bio}"
                 </p>
            </div>
            
            {/* Arrow Button */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                <ArrowRight className="w-4 h-4" />
            </div>
        </div>

        <div className="border-l-2 border-indigo-500 pl-4">
            <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
            <p className="text-sm font-mono text-indigo-400 tracking-wider uppercase">{role}</p>
        </div>
    </motion.div>
);

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
    return (
        <div className="border-t border-neutral-800 py-8">
            <h3 className="text-xl md:text-3xl font-medium text-white mb-6 pr-8">
                {question}
            </h3>
            <p className="text-lg text-neutral-400 leading-relaxed max-w-3xl">
                {answer}
            </p>
        </div>
    );
};


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
            founders: [
                {
                    name: "Steven Park",
                    role: "Co-Founder & CEO",
                    bio: "Global GTM & Defense Consulting. Led cross-border AI/Web3 strategy with deep networks in crypto ecosystems and infra partners.",
                    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/adcd1f3a8_2025-12-1820101.png"
                },
                {
                    name: "Seongdae Kim",
                    role: "Co-Founder & CTO",
                    bio: "Graphics & Systems Expert. Experience at Unity, Netmarble, Smilegate. Expert in real-time graphics, rendering pipelines, and performance-critical systems.",
                    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/baf658d9f_2025-12-1820104.png"
                },
                {
                    name: "Yongwan Kim",
                    role: "Co-Founder & AI Lead",
                    bio: "AI & Infra Lead. 10+ years at EA Sports, Netmarble. Expert in GPU optimization, multi-agent systems, and AI infrastructure.",
                    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/289c24d41_2025-12-1820103.png"
                }
            ],
            faq: [
                {
                    q: "Are we too early for the AI Trust layer?",
                    a: "We believe the collapse of trust is happening now. With Deepfakes and AI-generated misinformation scaling, the infrastructure for verification cannot wait."
                },
                {
                    q: "Why combine Gaming, Media, and Infra?",
                    a: "They are the same problem. Game assets need ownership (EleMEMEtal), Media needs provenance (PlayArts), and both need safe compute (DePIN). We solve the root cause."
                },
                {
                    q: "Is this just another blockchain project?",
                    a: "No. Blockchain is just the settlement layer. Our core IP is in the AI models (Guardrails) and the off-chain verification nodes."
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
            founders: [
                {
                    name: "Steven Park",
                    role: "Co-Founder & CEO",
                    bio: "Global GTM & Defense Consulting. 크립토 생태계와 인프라 파트너들과의 깊은 네트워크를 바탕으로 크로스보더 AI/Web3 전략을 주도했습니다.",
                    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/adcd1f3a8_2025-12-1820101.png"
                },
                {
                    name: "Seongdae Kim",
                    role: "Co-Founder & CTO",
                    bio: "Graphics & Systems Expert. Unity, Netmarble, Smilegate 출신. 실시간 그래픽스, 렌더링 파이프라인 및 고성능 시스템 전문가.",
                    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/baf658d9f_2025-12-1820104.png"
                },
                {
                    name: "Yongwan Kim",
                    role: "Co-Founder & AI Lead",
                    bio: "AI & Infra Lead. EA Sports, Netmarble 10년 이상 경력. GPU 최적화, 멀티 에이전트 시스템 및 AI 인프라 전문가.",
                    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/289c24d41_2025-12-1820103.png"
                }
            ],
            faq: [
                {
                    q: "AI 신뢰 레이어 구축, 너무 이른 것 아닌가요?",
                    a: "신뢰의 붕괴는 이미 시작되었습니다. 딥페이크와 AI 생성 허위 정보가 확산되는 지금, 검증 인프라는 더 이상 기다릴 수 없습니다."
                },
                {
                    q: "왜 게임, 미디어, 인프라를 결합하나요?",
                    a: "본질적으로 같은 문제입니다. 게임 자산은 소유권(EleMEMEtal)이, 미디어는 출처(PlayArts)가 필요하며, 둘 다 안전한 컴퓨팅(DePIN)이 필요합니다. 우리는 근본 원인을 해결합니다."
                },
                {
                    q: "단순한 블록체인 프로젝트인가요?",
                    a: "아닙니다. 블록체인은 정산 레이어일 뿐입니다. 우리의 핵심 기술은 AI 모델(Guardrails)과 오프체인 검증 노드에 있습니다."
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
                 <div className={`transition-opacity duration-1000 ${visualState.darker ? 'opacity-30' : 'opacity-60'}`}>
                    <Background3D />
                 </div>
                 <div className="absolute inset-0 bg-[#050505] mix-blend-multiply opacity-20" />
                 <motion.div 
                    animate={{ opacity: visualState.showNoise ? 0.15 : 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-0 mix-blend-overlay"
                 />
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

                {/* Founder Spotlight Section */}
                <div className="bg-[#0A0A0A] border-y border-neutral-900 py-24 md:py-32">
                    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                            <div>
                                <h2 className="text-sm font-bold tracking-widest uppercase text-indigo-500 mb-4">Leadership</h2>
                                <h3 className="text-4xl md:text-6xl font-bold text-white max-w-2xl leading-tight">
                                    {language === 'en' ? "Builders at the Intersection." : "교차점의 빌더들."}
                                </h3>
                            </div>
                            <p className="text-neutral-500 max-w-sm mt-6 md:mt-0 leading-relaxed text-sm md:text-base">
                                {language === 'en' 
                                    ? "A team combining deep AI research, AAA gaming production, and Web3 economics."
                                    : "딥 AI 리서치, AAA 게임 프로덕션, 그리고 Web3 경제 설계를 결합한 팀입니다."}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {c.founders.map((founder, i) => (
                                <FounderCard key={i} {...founder} delay={i * 0.1} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-[1000px] mx-auto px-6 py-24 md:py-40">
                    <h2 className="text-[12vw] md:text-[5vw] font-bold text-neutral-800 leading-none mb-16 select-none text-center md:text-left">
                        FAQ
                    </h2>
                    <div className="space-y-2">
                        {c.faq.map((item, i) => (
                            <FAQItem key={i} question={item.q} answer={item.a} />
                        ))}
                    </div>
                </div>
                
                {/* Final CTA */}
                <div className="flex flex-col items-center justify-center pb-40 px-6 text-center">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 max-w-3xl leading-tight text-white">
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