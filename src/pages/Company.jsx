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

// Team Identity Component - Inspired by Consensys style
const TeamIdentity = () => (
    <div className="min-h-[80vh] flex flex-col justify-center px-6 md:px-12 max-w-[1600px] mx-auto py-24">
        <div className="mb-8 md:mb-16">
            <div className="w-8 h-8 bg-[#9bf00b] mb-8" />
            <h2 className="text-sm font-bold tracking-widest uppercase text-neutral-400 mb-2">Who We Are</h2>
        </div>

        <div className="text-[8vw] md:text-[7vw] leading-[0.9] font-bold tracking-tighter text-white select-none flex flex-col">
            <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="text-[#9bf00b]">Engineers</span>
            </motion.div>

            <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="pl-[1em]"
            >
                <span className="text-white">Researchers</span>
            </motion.div>

            <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="pl-[0.5em]"
            >
                <span className="text-[#3b82f6]">Builders</span>
            </motion.div>

            <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pl-[2em]"
            >
                <span className="text-[#ff69b4]">Veterans</span>
            </motion.div>
        </div>

        <div className="mt-16 md:mt-24 max-w-3xl ml-auto border-l-2 border-white/20 pl-8">
            <p className="text-lg md:text-2xl text-neutral-300 leading-relaxed">
                We are not new to this game. For over a decade, we have been building the infrastructure that powers millions of users at companies like EA, Netmarble, and Smilegate. Now, we are converging that expertise to build the trust layer for the AI age.
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
            chapters: [
                {
                    headline: "We saw the convergence 10 years ago.",
                    content: "Before 'Metaverse' or 'Web3' were buzzwords, we were architects at the world's biggest gaming companies (EA, Netmarble). We spent a decade optimizing virtual economies, managing high-concurrency infrastructure, and building immersive worlds. We knew the physical and digital would eventually merge."
                },
                {
                    headline: "From Gaming to AI: The Evolution.",
                    content: "Gaming was the training ground. It taught us how to handle millions of transactions, how to prevent fraud in virtual economies, and how to scale simulation. Now, we apply those rigorous standards to AI. We are not just building software; we are building the operating system for the autonomous age."
                },
                {
                    headline: "We build for the Builders.",
                    content: "We are engineers, researchers, and builders first. We understand the pain of fragmentation. That's why HoloStudio isn't just a product—it's a cohesive infrastructure. From verifying media provenance to settling agentic value flow, we provide the rails for the next generation of builders."
                },
                {
                    headline: "Our Vision: The Trust Layer.",
                    content: "We are building HoloStudio to be the bedrock of credibility in a synthetic world. Our mission is to ensure that as AI scales creativity to infinity, trust remains the anchor. We are here to define the standards of the next digital era."
                }
            ],
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
                    headline: "10년 전부터 이 교차점을 준비해왔습니다.",
                    content: "'메타버스'나 'Web3'가 유행하기 훨씬 전부터, 우리는 EA와 넷마블 같은 세계적인 게임 기업의 아키텍트였습니다. 가상 경제 최적화, 대규모 트래픽 인프라 관리, 그리고 몰입형 세계 구축에 10년을 바쳤습니다. 우리는 물리적 세계와 디지털 세계의 융합이 필연적임을 알고 있었습니다."
                },
                {
                    headline: "게임에서 AI로의 진화.",
                    content: "게임은 우리의 훈련장이었습니다. 수백만 건의 트랜잭션을 처리하고, 가상 경제 내의 부정행위를 방지하며, 시뮬레이션을 확장하는 법을 배웠습니다. 이제 그 엄격한 기준을 AI에 적용합니다. 우리는 단순한 소프트웨어가 아니라, 자율 에이전트 시대를 위한 운영 체제를 만들고 있습니다."
                },
                {
                    headline: "빌더를 위해 빌더가 만듭니다.",
                    content: "우리는 엔지니어이자 연구원이며, 빌더입니다. 파편화된 도구들의 고통을 누구보다 잘 이해합니다. 그래서 HoloStudio는 단순한 제품이 아닌, 응집력 있는 인프라입니다. 미디어 출처 검증부터 에이전트 간 가치 정산까지, 차세대 빌더들을 위한 레일을 제공합니다."
                },
                {
                    headline: "우리의 비전: 신뢰 레이어 (Trust Layer).",
                    content: "우리는 HoloStudio가 합성 현실(Synthetic World)의 신뢰 기반이 되기를 바랍니다. AI가 창의성을 무한대로 확장할 때, '신뢰'가 흔들리지 않도록 하는 것. 그것이 우리의 미션입니다. 우리는 다음 디지털 시대의 표준을 정의하기 위해 여기에 있습니다."
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
                <div className="bg-[#0A0A0A] border-y border-neutral-900 py-32 md:py-48">
                    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
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

                        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
                            {c.founders.map((founder, i) => (
                                <FounderCard key={i} {...founder} delay={i * 0.1} />
                            ))}
                        </div>
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