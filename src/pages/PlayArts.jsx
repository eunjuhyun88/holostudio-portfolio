import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';
import { useTheme } from '@/components/ThemeContext';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

// Scene Component - Full viewport section with scroll-triggered animations
const Scene = ({ children, bgColor, id, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });
    
    return (
        <motion.section
            ref={ref}
            id={id}
            className="min-h-screen flex items-center justify-center relative"
            style={{ backgroundColor: bgColor }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0.3 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-6xl mx-auto px-6 md:px-12 py-20">
                {children}
            </div>
        </motion.section>
    );
};

// Typography Component with staggered animation
const Message = ({ children, delay = 0, size = "large", align = "left" }) => {
    const sizeClasses = {
        huge: "text-5xl md:text-8xl lg:text-9xl",
        large: "text-4xl md:text-6xl lg:text-7xl",
        medium: "text-3xl md:text-5xl lg:text-6xl",
        small: "text-2xl md:text-4xl lg:text-5xl",
        body: "text-xl md:text-2xl lg:text-3xl"
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className={`${sizeClasses[size]} font-bold leading-[1.1] tracking-tight ${
                align === 'center' ? 'text-center' : 'text-left'
            }`}
        >
            {children}
        </motion.div>
    );
};

const Subtitle = ({ children, delay = 0 }) => {
    return (
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className="text-base md:text-xl lg:text-2xl font-light leading-relaxed max-w-3xl opacity-70"
        >
            {children}
        </motion.p>
    );
};

export default function PlayArts() {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const content = {
        en: {
            scenes: [
                {
                    id: "foundation",
                    bg: "#0a0a0a",
                    textColor: "text-white",
                    content: {
                        headline: "THE FOUNDATION",
                        subhead: "ATTRIBUTION GAP",
                        message: "ENGINEERING THE MISSING LINK IN THE AI CONTENT ECONOMY"
                    }
                },
                {
                    id: "observation",
                    bg: "#1a2e05",
                    textColor: "text-lime-50",
                    content: {
                        message: "We watched creators vanish as AI mimicked their style.",
                        sub: "Platforms captured 100% of viral value. No trail. No credit. No compensation."
                    }
                },
                {
                    id: "crisis",
                    bg: "#365314",
                    textColor: "text-lime-100",
                    content: {
                        phase: "Phase 1",
                        title: "THE ATTRIBUTION CRISIS",
                        message: "Every AI-generated asset is an orphan. No provenance. No ownership. No value routing."
                    }
                },
                {
                    id: "void",
                    bg: "#3f6212",
                    textColor: "text-lime-50",
                    content: {
                        phase: "Phase 2",
                        title: "THE MISSING STANDARD",
                        message: "AI created content at infinite scale. But there was no protocol for 'Who made this?'"
                    }
                },
                {
                    id: "market-freeze",
                    bg: "#4d7c0f",
                    textColor: "text-white",
                    content: {
                        phase: "Phase 3",
                        title: "MARKET FAILURE",
                        message: "Creators stopped sharing. Platforms faced liability. Innovation froze."
                    }
                },
                {
                    id: "declaration",
                    bg: "#000000",
                    textColor: "text-lime-400",
                    content: {
                        message: "The scarce resource is no longer creativity.",
                        emphasis: "IT IS PROVENANCE."
                    }
                },
                {
                    id: "solution",
                    bg: "#1a2e05",
                    textColor: "text-white",
                    content: {
                        headline: "ENGINEERED PROVENANCE",
                        message: "Provenance is not a claim. It is a cryptographic proof.",
                        points: [
                            { title: "Context Anchoring", desc: "Every asset carries its generation DNA" },
                            { title: "Perceptual Verification", desc: "Distributed nodes validate origin" },
                            { title: "Value Routing", desc: "Smart contracts distribute rewards automatically" }
                        ]
                    }
                },
                {
                    id: "protocol",
                    bg: "#365314",
                    textColor: "text-lime-50",
                    content: {
                        headline: "THE PROTOCOL",
                        message: "PlayArts",
                        sub: "Creation → Verification → Settlement",
                        desc: "One atomic protocol. Immutable. Decentralized. Automatic."
                    }
                },
                {
                    id: "fit",
                    bg: "#3f6212",
                    textColor: "text-white",
                    content: {
                        message: "We are not storytellers.",
                        emphasis: "We are protocol architects."
                    }
                },
                {
                    id: "cta",
                    bg: "#0a0a0a",
                    textColor: "text-lime-400",
                    content: {
                        message: "Building AI Provenance Infrastructure.",
                        sub: "Ready to anchor your content?",
                        button: "Launch Protocol"
                    }
                }
            ]
        },
        ko: {
            scenes: [
                {
                    id: "foundation",
                    bg: "#0a0a0a",
                    textColor: "text-white",
                    content: {
                        headline: "기반",
                        subhead: "귀속의 공백",
                        message: "AI 콘텐츠 경제의 미싱 링크를 엔지니어링하다"
                    }
                },
                {
                    id: "observation",
                    bg: "#1a2e05",
                    textColor: "text-lime-50",
                    content: {
                        message: "우리는 AI가 창작자의 스타일을 모방하면서 그들이 사라지는 것을 목격했습니다.",
                        sub: "플랫폼은 바이럴 가치의 100%를 독점했습니다. 흔적도, 크레딧도, 보상도 없이."
                    }
                },
                {
                    id: "crisis",
                    bg: "#365314",
                    textColor: "text-lime-100",
                    content: {
                        phase: "Phase 1",
                        title: "귀속의 위기",
                        message: "모든 AI 생성 자산은 고아입니다. 출처도, 소유권도, 가치 분배도 없습니다."
                    }
                },
                {
                    id: "void",
                    bg: "#3f6212",
                    textColor: "text-lime-50",
                    content: {
                        phase: "Phase 2",
                        title: "표준의 부재",
                        message: "AI는 무한한 규모로 콘텐츠를 생성했습니다. 하지만 '누가 만들었는가'에 대한 프로토콜은 없었습니다."
                    }
                },
                {
                    id: "market-freeze",
                    bg: "#4d7c0f",
                    textColor: "text-white",
                    content: {
                        phase: "Phase 3",
                        title: "시장 실패",
                        message: "창작자들은 공유를 멈췄습니다. 플랫폼은 책임에 직면했습니다. 혁신은 얼어붙었습니다."
                    }
                },
                {
                    id: "declaration",
                    bg: "#000000",
                    textColor: "text-lime-400",
                    content: {
                        message: "희소한 자원은 더 이상 창의성이 아닙니다.",
                        emphasis: "출처 증명입니다."
                    }
                },
                {
                    id: "solution",
                    bg: "#1a2e05",
                    textColor: "text-white",
                    content: {
                        headline: "엔지니어링된 출처 증명",
                        message: "출처 증명은 주장이 아닙니다. 암호학적 증명입니다.",
                        points: [
                            { title: "맥락 앵커링", desc: "모든 자산은 생성 DNA를 담습니다" },
                            { title: "지각 검증", desc: "분산 노드가 기원을 검증합니다" },
                            { title: "가치 라우팅", desc: "스마트 계약이 자동으로 보상을 분배합니다" }
                        ]
                    }
                },
                {
                    id: "protocol",
                    bg: "#365314",
                    textColor: "text-lime-50",
                    content: {
                        headline: "프로토콜",
                        message: "PlayArts",
                        sub: "생성 → 검증 → 정산",
                        desc: "하나의 원자적 프로토콜. 불변. 탈중앙화. 자동."
                    }
                },
                {
                    id: "fit",
                    bg: "#3f6212",
                    textColor: "text-white",
                    content: {
                        message: "우리는 스토리텔러가 아닙니다.",
                        emphasis: "프로토콜 아키텍트입니다."
                    }
                },
                {
                    id: "cta",
                    bg: "#0a0a0a",
                    textColor: "text-lime-400",
                    content: {
                        message: "AI 출처 증명 인프라를 구축하고 있습니다.",
                        sub: "당신의 콘텐츠를 고정할 준비가 되셨나요?",
                        button: "프로토콜 시작"
                    }
                }
            ]
        }
    };

    const scenes = content[language]?.scenes || content.en.scenes;

    return (
        <div ref={containerRef} className="bg-black text-white overflow-x-hidden">
            <SEO 
                title="PlayArts - The Provenance Protocol" 
                description="Engineering the missing link in the AI content economy"
            />

            {/* Scroll Progress Indicator */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-lime-400 z-50 origin-left"
                style={{ scaleX: scrollYProgress }}
            />

            {/* Scene 1: Foundation */}
            <Scene bgColor={scenes[0].bg} id={scenes[0].id} index={0}>
                <div className={`space-y-8 ${scenes[0].textColor}`}>
                    <Message size="small" delay={0}>
                        {scenes[0].content.headline}
                    </Message>
                    <Message size="huge" delay={0.2}>
                        {scenes[0].content.subhead}
                    </Message>
                    <Subtitle delay={0.4}>
                        {scenes[0].content.message}
                    </Subtitle>
                </div>
            </Scene>

            {/* Scene 2: Observation */}
            <Scene bgColor={scenes[1].bg} id={scenes[1].id} index={1}>
                <div className={`space-y-12 ${scenes[1].textColor}`}>
                    <Message size="large" delay={0}>
                        {scenes[1].content.message}
                    </Message>
                    <Subtitle delay={0.3}>
                        {scenes[1].content.sub}
                    </Subtitle>
                </div>
            </Scene>

            {/* Scene 3-5: Phase Narrative */}
            {scenes.slice(2, 5).map((scene, idx) => (
                <Scene key={scene.id} bgColor={scene.bg} id={scene.id} index={idx + 2}>
                    <div className={`space-y-6 ${scene.textColor}`}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6 }}
                            className="text-sm md:text-base uppercase tracking-[0.3em] opacity-50 font-mono"
                        >
                            {scene.content.phase}
                        </motion.div>
                        <Message size="medium" delay={0.2}>
                            {scene.content.title}
                        </Message>
                        <Subtitle delay={0.4}>
                            {scene.content.message}
                        </Subtitle>
                    </div>
                </Scene>
            ))}

            {/* Scene 6: Declaration (Peak) */}
            <Scene bgColor={scenes[5].bg} id={scenes[5].id} index={5}>
                <div className={`space-y-16 ${scenes[5].textColor} text-center mx-auto max-w-5xl`}>
                    <Message size="large" align="center" delay={0}>
                        {scenes[5].content.message}
                    </Message>
                    <Message size="huge" align="center" delay={0.3}>
                        {scenes[5].content.emphasis}
                    </Message>
                </div>
            </Scene>

            {/* Scene 7: Solution */}
            <Scene bgColor={scenes[6].bg} id={scenes[6].id} index={6}>
                <div className={`space-y-12 ${scenes[6].textColor}`}>
                    <div className="space-y-6">
                        <Message size="small" delay={0}>
                            {scenes[6].content.headline}
                        </Message>
                        <Message size="medium" delay={0.2}>
                            {scenes[6].content.message}
                        </Message>
                    </div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10"
                    >
                        {scenes[6].content.points.map((point, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                                className="space-y-3"
                            >
                                <div className="text-xl md:text-2xl font-bold text-lime-400">
                                    {point.title}
                                </div>
                                <div className="text-sm md:text-base opacity-70 font-light">
                                    {point.desc}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </Scene>

            {/* Scene 8: Protocol */}
            <Scene bgColor={scenes[7].bg} id={scenes[7].id} index={7}>
                <div className={`space-y-8 ${scenes[7].textColor} text-center mx-auto`}>
                    <Message size="small" align="center" delay={0}>
                        {scenes[7].content.headline}
                    </Message>
                    <Message size="huge" align="center" delay={0.2}>
                        {scenes[7].content.message}
                    </Message>
                    <Subtitle delay={0.4}>
                        {scenes[7].content.sub}
                    </Subtitle>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-base md:text-xl opacity-60 max-w-2xl mx-auto pt-8"
                    >
                        {scenes[7].content.desc}
                    </motion.div>
                </div>
            </Scene>

            {/* Scene 9: Founder-Market Fit */}
            <Scene bgColor={scenes[8].bg} id={scenes[8].id} index={8}>
                <div className={`space-y-12 ${scenes[8].textColor} text-center mx-auto max-w-4xl`}>
                    <Message size="large" align="center" delay={0}>
                        {scenes[8].content.message}
                    </Message>
                    <Message size="large" align="center" delay={0.3}>
                        {scenes[8].content.emphasis}
                    </Message>
                </div>
            </Scene>

            {/* Scene 10: CTA */}
            <Scene bgColor={scenes[9].bg} id={scenes[9].id} index={9}>
                <div className={`space-y-12 ${scenes[9].textColor} text-center mx-auto`}>
                    <Message size="medium" align="center" delay={0}>
                        {scenes[9].content.message}
                    </Message>
                    <Subtitle delay={0.3}>
                        {scenes[9].content.sub}
                    </Subtitle>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="pt-8"
                    >
                        <a href="https://playarts.ai/" target="_blank" rel="noopener noreferrer">
                            <Button className="bg-lime-500 hover:bg-lime-400 text-black px-8 h-14 text-lg rounded-full font-bold">
                                {scenes[9].content.button} <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex gap-8 justify-center items-center pt-16 text-sm opacity-40"
                    >
                        <a href="https://docsend.com/view/wdasib73q44ppc3a" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
                            Deck
                        </a>
                        <span>•</span>
                        <a href="mailto:contact@holostudio.com" className="hover:opacity-100 transition-opacity">
                            Contact
                        </a>
                    </motion.div>
                </div>
            </Scene>
        </div>
    );
}