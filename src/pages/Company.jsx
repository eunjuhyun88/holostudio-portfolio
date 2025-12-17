import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from '@/components/LanguageContext';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Starfield from '@/components/Starfield';
import Background3D from '@/components/Background3D';

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

                        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-8 tracking-tighter leading-[1.1] text-white relative`}>
                            {item.headline}
                        </h2>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={`text-lg md:text-xl font-light leading-relaxed max-w-4xl ml-auto ${currentPalette.text}`}
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
    return (
        <div className="min-h-[60vh] flex items-center justify-center relative overflow-hidden py-32">
             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="text-center px-6 max-w-6xl mx-auto z-10"
             >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-300 mb-8 leading-tight tracking-tight">
                    The scarce resource is no longer creativity.
                </h2>
                <div className="overflow-hidden">
                    <motion.p 
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
                        className="text-5xl md:text-7xl lg:text-9xl font-black text-indigo-500 tracking-tighter uppercase glow-text"
                    >
                        It is credibility.
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
            intro: {
                episode: "Episode I",
                title: "The Trust Layer",
                subtitle: "FROM GAMING ARCHITECTS TO AI TRUST BUILDERS",
                text: [
                    "Long before AI flooded the galaxy with infinite creation, there were builders shaping virtual worlds at scale. We did not arrive here by accident.",
                    "For over a decade, we were architects inside the largest digital universes—EA, Netmarble, Smilegate—designing economies, simulations, and infrastructure that served millions in real time.",
                    "In those worlds, we learned a fundamental truth: digital assets must feel as real as physical ones, or the system collapses."
                ]
            },
            chapters: [
                {
                    year: "2014 – 2020",
                    headline: "THE GAMING ERA",
                    content: "Before “Metaverse” and “Web3” entered the public lexicon, we were already operating massive multiplayer systems—balancing virtual economies, securing high-concurrency environments, and enforcing rules where value had to be earned, not imagined. Games taught us something critical: simulation without rules becomes chaos. Value without enforcement dissolves."
                },
                {
                    year: "2021 – 2023",
                    headline: "THE CONVERGENCE",
                    content: "Then, two forces collided. AI taught the world how to simulate intelligence. Crypto taught the world how to settle truth. We recognized the missing bridge. Gaming gave us simulation. Blockchain gave us settlement. What was missing was trust for generative assets. So we began building the infrastructure to connect these worlds—solving what became the oracle problem for AI-generated content: How does something created infinitely become verifiable finitely?"
                },
                {
                    year: "2024",
                    headline: "THE COLLAPSE OF TRUST",
                    content: "Generative AI exploded. Creation became effortless. And trust collapsed. Attribution broke. Accountability faded. Value leaked across platforms without origin or credit. The galaxy was flooded with content—but no system to distinguish signal from noise, human from machine, truth from fabrication. So we pivoted. We focused everything we had learned—from adversarial systems, economic design, and large-scale infrastructure—into one mission: to build the trust layer for the age of infinite creation. That system became HoloStudio."
                },
                {
                    year: "INFRASTRUCTURE",
                    headline: "BUILDING THE TRUST LAYER",
                    content: "HoloStudio treats content not as static files, but as living events: Creation. Verification. Propagation. Settlement. Stories move. Value flows. And every contribution must be attributable. We build the infrastructure where provenance is native, credit is programmable, and trust is enforced by systems—not promises."
                },
                {
                    year: "2025 & Beyond",
                    headline: "THE AUTONOMOUS AGE",
                    content: "The next era will not be run by applications. It will be run by autonomous agents. Agents that create. Agents that trade. Agents that interact without supervision. We are building the operating system where this is possible—a world where “Made by Human” and “Verified AI” coexist on a trustless settlement layer. Because the scarce resource is no longer creativity. It is credibility."
                }
            ],
            thesis: [
                {
                    headline: "A CHOICE FOR THE FUTURE",
                    content: "The future is not neutral. It is a choice between chaos and credibility. Between infinite generation and finite trust."
                },
                {
                    headline: "A UNIFIED SYSTEM",
                    content: "We do not build disconnected products. We build a single coherent system—where trust enables distribution, and distribution creates value. From adversarial defense to economic settlement, every layer is connected."
                }
            ],
            identity: {
                 headline: "WHO WE ARE",
                 content: "We are not new to this galaxy. For over a decade, we have built infrastructure that served millions. Now, we are converging that experience into one purpose: to build the safeguards that allow generative media to scale without losing humanity. The systems that will define the next decade do not exist yet. We are here to build them."
            },
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
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
                {/* Unified 3D Background similar to Home */}
                <div className="absolute inset-0 opacity-40">
                    <Background3D />
                </div>

                {/* Reduced Starfield for subtle depth */}
                <div className="absolute inset-0 opacity-50">
                    <Starfield density={300} speed={0.01} />
                </div>
                
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/5 to-transparent mix-blend-screen opacity-30" />
                 
                 <motion.div 
                    animate={{ opacity: visualState.showNoise ? 0.05 : 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-0 mix-blend-overlay"
                 />
                 
                 {/* Retain the spinning rings for the tech feel later in scroll, but larger and more subtle to blend with 3D bg */}
                 <motion.div
                    animate={{ 
                        opacity: visualState.showGuardRail ? 0.3 : 0,
                        scale: visualState.showGuardRail ? 1 : 0.9
                    }}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                 >
                    <div className="w-[80vh] h-[80vh] rounded-full border border-indigo-500/10 shadow-[0_0_150px_rgba(99,102,241,0.05)] animate-[spin_30s_linear_infinite]" />
                 </motion.div>
                 
                 <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10" style={{ background: 'linear-gradient(to bottom, #050505 0%, transparent 15%, transparent 85%, #050505 100%)' }} />
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

                {/* Founder Spotlight Section */}
                <div className="bg-[#0A0A0A] border-y border-neutral-900 py-32 md:py-48">
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

                        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
                            {c.founders.map((founder, i) => (
                                <FounderCard key={i} {...founder} delay={i * 0.1} />
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