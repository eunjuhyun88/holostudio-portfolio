import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Layers, Trophy, Target, Globe, Cpu, BarChart3, Gamepad2, Play, ChevronDown, ExternalLink, FileText } from 'lucide-react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { useLanguage } from '@/components/LanguageContext';
import Background3D from '@/components/Background3D';
import SEO from '@/components/SEO';

export default function Home() {
    const { language } = useLanguage();

    const content = {
        en: {
            hero: {
                tag: "Full-Media AI Guardrails",
                title: "HOLO STUDIO",
                sub: "We build full-stack AI Guardrails + Web3-native attribution for the next media economy.",
                desc: "Safety, provenance, and programmable distribution across AI media, gaming, and on-chain communities.",
                cta1: "Explore Our Businesses",
                cta2: "Contact / Partnership"
            },
            market: {
                year: { val: "2025", label: "AI Regulation Tipping Point" },
                eu: { val: "EU Act", label: "DSA & Compliance Force" },
                size: { val: "$80B", label: "AI Content Market (2030)" },
                gap: { val: "$13B+", label: "Gaming Safety Gap" }
            },
            problem: {
                title: "The Core Problem",
                sub: "AI content generation is exploding, but safety infrastructure remains fragmented and incomplete.",
                cards: [
                    { title: "Content Safety Crisis", desc: "Meta & platforms replacing moderators with AI, causing instability.", badge: "AI Risk" },
                    { title: "Safety System Limits", desc: "Text-only filters fail on Video/Audio/3D. No multi-modal rails.", badge: "Limited Scope" },
                    { title: "Gaming/3D Safety Gap", desc: "Metaverses face unregulated toxic UGC with no defense layers.", badge: "3D Gap" }
                ]
            },
            thesis: {
                label: "HOLO STUDIO Thesis",
                main: "We turn AI content into verifiable, safe, and monetizable media objects.",
                keywords: ["Guardrails", "Provenance", "Value Routing"]
            },
            business_intro: {
                title: "Our Products",
                sub: "One Company, Four Specialized Engines."
            },
            milestones: {
                title: "Proof & Milestones",
                sub: "Proven Traction & Industry Validation",
                items: [
                    { title: "Seedify AI Hackathon", desc: "1st Place Winner" },
                    { title: "NVIDIA Inception", desc: "Official Member" },
                    { title: "Top Accelerators", desc: "AppWorks & OnePiece Labs" },
                    { title: "Major Grants", desc: "Alchemy & Story Protocol" }
                ]
            },
            diagram: {
                title: "One Company, Four Businesses",
                desc: "HOLO STUDIO executes Safety, Provenance, and Distribution as a unified portfolio."
            },
            research: {
                title: "Research & Updates",
                viewAll: "View Roadmap",
                items: [
                    { title: "PoC Protocol v1 Launch", date: "Q4 2025", desc: "The standard for verifiable AI provenance and IP lineage." },
                    { title: "MemePing v2 Dashboard", date: "Q1 2026", desc: "Real-time impact tracking across Twitter, Reddit, & Farcaster." },
                    { title: "INFT & OG Labs Integration", date: "Q1 2026", desc: "Cross-chain interoperability for AI-generated assets." }
                ]
            },
            contact: {
                title: "Work with HOLO.",
                sub: "Building the trusted autonomous future.",
                cta1: "Invest / Partner",
                cta2: "Enterprise Inquiry"
            }
        },
        ko: {
            hero: {
                tag: "Full-Media AI Guardrails",
                title: "HOLO STUDIO",
                sub: "AI 콘텐츠 생성과 안전성을 동시에 제공하는 차세대 미디어/게임/Web3 회사.",
                desc: "안전(Safety) + 출처(Provenance) + 가치(Value)를 하나의 포트폴리오로 구축합니다.",
                cta1: "사업 포트폴리오 보기",
                cta2: "제휴 및 문의"
            },
            market: {
                year: { val: "2025", label: "AI 규제/안전성 전환점" },
                eu: { val: "EU Act", label: "DSA 및 AI Act 시행" },
                size: { val: "$80B", label: "AI 콘텐츠 시장 (2030)" },
                gap: { val: "$13B+", label: "게이밍/3D 안전성 갭" }
            },
            problem: {
                title: "해결하려는 핵심 문제",
                sub: "AI 콘텐츠 생성이 폭발적으로 증가하는데, 안전성 인프라는 여전히 단편적이고 불완전합니다.",
                cards: [
                    { title: "2025 콘텐츠 안전성 위기", desc: "대형 플랫폼의 검열 자동화로 인한 불안정성 심화.", badge: "AI 리스크" },
                    { title: "기존 안전 시스템의 한계", desc: "텍스트 중심 필터링의 한계. 이미지/영상/3D 가드레일 부재.", badge: "범위 제한" },
                    { title: "게이밍/3D 안전성 사각지대", desc: "메타버스 내 무방비한 유해 콘텐츠 생성.", badge: "3D 격차" }
                ]
            },
            thesis: {
                label: "HOLO STUDIO Thesis",
                main: "우리는 AI 콘텐츠를 검증 가능하고, 안전하며, 수익화 가능한 객체로 전환합니다.",
                keywords: ["가드레일", "출처증명", "가치분배"]
            },
            business_intro: {
                title: "핵심 제품",
                sub: "하나의 회사, 네 개의 전문화된 엔진."
            },
            milestones: {
                title: "성과 및 마일스톤",
                sub: "검증된 트랙션 및 업계의 인정",
                items: [
                    { title: "Seedify AI 해커톤", desc: "1위 우승 (Winner)" },
                    { title: "NVIDIA Inception", desc: "공식 멤버 선정" },
                    { title: "글로벌 액셀러레이터", desc: "AppWorks & OnePiece Labs" },
                    { title: "주요 그랜트 선정", desc: "Alchemy & Story Protocol" }
                ]
            },
            diagram: {
                title: "하나의 회사, 네 개의 사업",
                desc: "HOLO STUDIO는 안전, 출처, 확산의 전 과정을 사업 포트폴리오로 분리해 실행합니다."
            },
            research: {
                title: "리서치 및 업데이트",
                viewAll: "로드맵 보기",
                items: [
                    { title: "PoC 프로토콜 v1 런칭", date: "2025년 4분기", desc: "검증 가능한 AI 출처 및 IP 계보 표준." },
                    { title: "MemePing v2 대시보드", date: "2026년 1분기", desc: "Twitter, Reddit, Farcaster 실시간 영향력 추적." },
                    { title: "INFT & OG Labs 통합", date: "2026년 1분기", desc: "AI 생성 자산을 위한 크로스체인 상호운용성." }
                ]
            },
            contact: {
                title: "HOLO와 함께하세요.",
                sub: "신뢰할 수 있는 자율 에이전트의 미래를 만듭니다.",
                cta1: "투자 / 제휴 문의",
                cta2: "기업 도입 문의"
            }
        }
    };

    const t = content[language];

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const [activeStage, setActiveStage] = useState(0);



    const products = [
        {
            id: "aidguardian",
            name: "AiD Guardian",
            tag: { en: "Multi-Modal Safety Engine", ko: "멀티모달 안전 엔진" },
            desc: { 
                en: "Multi-modal content safety engine for image/video/audio/text. Low-latency classification + timeline risk view.",
                ko: "이미지/영상/오디오/텍스트를 위한 멀티모달 콘텐츠 안전 엔진. 초저지연 분류 및 타임라인 위험 분석."
            },
            features: {
                en: ["Accuracy / Recall", "Latency < 10ms", "GARM Categories"],
                ko: ["정확도 / 재현율", "지연시간 < 10ms", "GARM 카테고리"]
            },
            image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/cc0228bec_2025-12-171042431.png",
            color: "text-indigo-400",
            borderColor: "border-indigo-500",
            glowColor: "shadow-indigo-500/50",
            bgGradient: "from-indigo-600",
            path: "/AidGuardian",
            primaryBtn: { en: "Try Demo", ko: "데모 체험" },
            secondaryBtn: { en: "Contact Sales", ko: "도입 문의" }
        },
        {
            id: "playarts",
            name: "PlayArts",
            tag: { en: "Creation-time Provenance", ko: "생성 시점 출처 증명" },
            desc: {
                en: "Creation-time provenance + cross-platform impact tracking. Not post-hoc watermarking, but verification at the source.",
                ko: "생성 시점의 출처 증명 및 크로스 플랫폼 영향력 추적. 사후 워터마킹이 아닌 원천 검증 기술."
            },
            features: {
                en: ["Proof-of-Creation", "Sentinel Attestations", "Impact Events"],
                ko: ["생성 증명(PoC)", "Sentinel 검증", "임팩트 이벤트"]
            },
            image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/81cf8f3b2_2025-12-17105846.png",
            color: "text-lime-400",
            borderColor: "border-lime-400",
            glowColor: "shadow-lime-400/50",
            bgGradient: "from-lime-500",
            path: "/PlayArts",
            primaryBtn: { en: "Partnership", ko: "파트너십" },
            secondaryBtn: { en: "Deck", ko: "소개서" }
        },
        {
            id: "elememetal",
            name: "EleMEMEtal",
            tag: { en: "Game-first UGC Ecosystem", ko: "게임 중심 UGC 생태계" },
            desc: {
                en: "High-decision PvP with AI-native UGC loops. Ensuring safety and provenance for player-created assets.",
                ko: "AI 기반 UGC 루프가 결합된 고전략 PvP. 플레이어 생성 자산의 안전성과 출처를 보장합니다."
            },
            features: {
                en: ["1v1 PvP Core Loop", "AI Content Expansion", "Safety Rails"],
                ko: ["1v1 PvP 코어 루프", "AI 콘텐츠 확장", "안전 가드레일"]
            },
            image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/9692fcde2_2025-12-1463649.png",
            color: "text-orange-500",
            borderColor: "border-orange-500",
            glowColor: "shadow-orange-500/50",
            bgGradient: "from-orange-600",
            path: "/Elememetal",
            primaryBtn: { en: "Playtest", ko: "플레이 테스트" },
            secondaryBtn: { en: "Publish Kit", ko: "퍼블리싱 키트" }
        },
        {
            id: "stockhoo",
            name: "Stockhoo",
            tag: { en: "Zone-based Social Intelligence", ko: "구간 기반 소셜 인텔리전스" },
            desc: {
                en: "Zone-based market conversation + proof + AI signal layer. Credibility and insights for on-chain markets.",
                ko: "구간(Zone) 기반 시장 대화 + 증명 + AI 시그널 레이어. 온체인 시장을 위한 신뢰와 인사이트."
            },
            features: {
                en: ["Zone Chat", "Proof of Profit", "AI Strategy Signals"],
                ko: ["구간 채팅", "수익 증명", "AI 전략 시그널"]
            },
            image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/45cb06182_2025-12-17105903.png",
            color: "text-emerald-400",
            borderColor: "border-emerald-400",
            glowColor: "shadow-emerald-400/50",
            bgGradient: "from-emerald-500",
            path: "/Stockhoo",
            primaryBtn: { en: "Open App", ko: "앱 열기" },
            secondaryBtn: { en: "Deck", ko: "소개서" }
        }
    ];

    const milestoneConfig = [
        { icon: Trophy, color: "text-yellow-500" },
        { icon: Target, color: "text-blue-500" },
        { icon: Trophy, color: "text-white" },
        { icon: Cpu, color: "text-green-500" }
    ];

    const milestones = t.milestones.items.map((item, idx) => ({
        ...item,
        icon: milestoneConfig[idx]?.icon || Trophy,
        color: milestoneConfig[idx]?.color || "text-white"
    }));

    return (
        <div className="bg-[#050505] text-white selection:bg-indigo-500/30 font-sans">
            <SEO 
                title="Home" 
                description={t.hero.sub} 
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "HOLO STUDIO",
                    "url": window.location.origin,
                    "logo": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/84a15b48f_a-sleek-modern-logo-design-featuring-the_SMuLZaSWTXC5gHfZms6l4g_nbGlpkO2SJKMVbyEcJBYDA2.JPEG",
                    "description": t.hero.sub
                }}
            />
            {/* Section 01: HERO (Pinned) */}
            <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
                {/* 3D Background */}
                <Background3D />
                
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-[#050505] to-[#050505] opacity-90" />
                </div>

                <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-1.5 mb-8 border border-indigo-500/30 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono tracking-[0.2em] uppercase backdrop-blur-sm">
                            {t.hero.tag}
                        </div>
                        <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-500">
                            {t.hero.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light tracking-wide">
                            {t.hero.sub}
                            <br className="hidden md:block"/>
                            <span className="text-neutral-500 text-base md:text-lg mt-4 block font-mono">{t.hero.desc}</span>
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 h-12 text-base font-bold border-0" onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}>
                                {t.hero.cta1}
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base border-neutral-800 text-white hover:bg-white/10 bg-transparent">
                                {t.hero.cta2}
                            </Button>
                        </div>
                    </motion.div>
                </div>
                
                {/* Scroll Indicator */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-600"
                >
                    <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                    <div className="w-px h-12 bg-gradient-to-b from-neutral-600 to-transparent" />
                </motion.div>
            </section>

            {/* Section 02: WHY NOW (Market Pressure Strip) */}
            <section className="py-12 border-y border-neutral-900 bg-[#080808]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">{t.market.year.val}</div>
                            <div className="text-xs text-neutral-500 uppercase tracking-wider">{t.market.year.label}</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">{t.market.eu.val}</div>
                            <div className="text-xs text-neutral-500 uppercase tracking-wider">{t.market.eu.label}</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">{t.market.size.val}</div>
                            <div className="text-xs text-neutral-500 uppercase tracking-wider">{t.market.size.label}</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">{t.market.gap.val}</div>
                            <div className="text-xs text-neutral-500 uppercase tracking-wider">{t.market.gap.label}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 03: THE CORE PROBLEM */}
            <section className="py-32 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div {...fadeIn} className="mb-16">
                        <h2 className="text-sm font-mono text-indigo-500 mb-4 uppercase tracking-widest">{t.problem.title}</h2>
                        <h3 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
                            {t.problem.sub}
                        </h3>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {t.problem.cards.map((card, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-8 rounded-2xl bg-neutral-900/30 border border-neutral-800 hover:border-indigo-500/50 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500/10 group-hover:text-indigo-400 transition-colors">
                                    {[Shield, Layers, Gamepad2][idx] && React.createElement([Shield, Layers, Gamepad2][idx], { className: "w-6 h-6" })}
                                </div>
                                <h4 className="text-xl font-bold mb-3">{card.title}</h4>
                                <p className="text-neutral-400 mb-6 text-sm leading-relaxed">{card.desc}</p>
                                <span className="inline-block px-3 py-1 bg-neutral-800 rounded-full text-[10px] text-neutral-300 uppercase tracking-wide group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-colors">
                                    {card.badge}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 04: COMPANY THESIS */}
            <section className="py-24 bg-[#0A0A0A] border-y border-neutral-900 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-xs font-mono text-neutral-500 mb-6 uppercase tracking-widest">{t.thesis.label}</h2>
                    <p className="text-2xl md:text-4xl font-medium leading-tight mb-12">
                        "{t.thesis.main}"
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-12 text-sm md:text-base font-mono text-neutral-400">
                        {t.thesis.keywords.map((kw, i) => (
                            <span key={i} className="flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${['bg-indigo-500', 'bg-purple-500', 'bg-orange-500'][i]}`}></span>
                                {kw}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 05 & 06: PRODUCT SPOTLIGHT (Scrollytelling) */}
            <section id="products" className="relative bg-[#050505]">
                {/* Intro Title */}
                <div className="absolute top-0 left-0 w-full pt-20 pb-10 px-6 z-10 pointer-events-none text-center md:text-left md:pl-20">
                     <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-2">{t.business_intro.title}</h2>
                     <p className="text-xl text-neutral-300">{t.business_intro.sub}</p>
                </div>

                {/* Sticky Visual Container */}
                <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center md:justify-start md:pl-20">
                    <div className="absolute inset-0 w-full h-full bg-[#050505]" />
                    
                    {/* Background Visuals Crossfading */}
                    <AnimatePresence mode="popLayout">
                        {products.map((prod, idx) => (
                            idx === activeStage && (
                                <motion.div
                                    key={prod.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute inset-0 w-full h-full"
                                >
                                    {/* Intensified Background Gradient */}
                                    <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] ${prod.bgGradient} via-[#050505] to-[#050505] opacity-40`} />
                                    <div className={`absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t ${prod.bgGradient} to-transparent opacity-10`} />
                                    
                                    {/* Large Background Text */}
                                    <div className={`absolute bottom-10 left-10 text-[13vw] font-black ${prod.color} opacity-20 leading-none select-none text-left tracking-tighter mix-blend-screen`}>
                                        {prod.name.toUpperCase()}
                                    </div>
                                    
                                    {/* Central Visual */}
                                    <div className="absolute top-1/2 left-0 md:left-24 transform -translate-y-1/2 w-full md:w-[45vw] h-[50vh] md:h-[60vh] flex items-center justify-center p-6">
                                        <div className={`relative w-full h-full rounded-3xl overflow-hidden border-2 ${prod.borderColor} bg-neutral-900/50 backdrop-blur-sm shadow-[0_0_100px_-20px_rgba(0,0,0,0.5)] ${prod.glowColor} group`}>
                                            <div className={`absolute inset-0 bg-gradient-to-br ${prod.bgGradient} to-transparent opacity-10`} />
                                            
                                            {/* Image Container - Adjusted to contain logos properly */}
                                            <div className="w-full h-full flex items-center justify-center p-8 md:p-12 relative z-10">
                                                <img 
                                                    src={prod.image} 
                                                    alt={prod.name} 
                                                    className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-105" 
                                                />
                                            </div>

                                            {/* Decorative UI Overlay */}
                                            <div className="absolute top-6 left-6 flex items-center gap-2">
                                                <div className={`w-2 h-2 rounded-full ${prod.color.replace('text-', 'bg-')} animate-pulse`} />
                                                <div className={`text-xs font-mono ${prod.color} tracking-widest`}>LIVE_VIEW</div>
                                            </div>
                                            
                                            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>

                {/* Scrolling Cards Overlay */}
                <div className="relative z-20 -mt-[100vh]">
                    {products.map((prod, idx) => {
                        const ref = useRef(null);
                        const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

                        useEffect(() => {
                            if (isInView) setActiveStage(idx);
                        }, [isInView, idx]);

                        return (
                            <div key={idx} ref={ref} className="min-h-screen md:h-screen w-full flex items-center justify-center md:justify-end px-4 md:px-24 py-20 md:py-0 pointer-events-none">
                                <motion.div 
                                    initial={{ opacity: 0, x: 50, y: 20 }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="max-w-md w-full pointer-events-auto"
                                >
                                    <div className={`bg-[#0A0A0A]/90 backdrop-blur-xl border ${prod.borderColor} p-6 md:p-8 rounded-3xl shadow-2xl relative overflow-hidden group hover:border-opacity-100 transition-all duration-500`}>
                                        <div className={`absolute inset-0 bg-gradient-to-br ${prod.bgGradient} to-transparent opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                                        
                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between mb-6">
                                                <div className={`text-sm font-bold tracking-wider uppercase ${prod.color} flex items-center gap-2`}>
                                                    <span className={`w-1.5 h-1.5 rounded-full ${prod.color.replace('text-', 'bg-')} shadow-[0_0_10px_currentColor]`} />
                                                    {prod.tag[language]}
                                                </div>
                                                <div className={`text-sm font-mono ${prod.color} opacity-50`}>0{idx + 1}</div>
                                            </div>
                                            
                                            <h3 className="text-4xl font-black mb-4 text-white tracking-tight">
                                                {prod.name}
                                            </h3>
                                            
                                            <p className="text-neutral-300 leading-relaxed mb-6 md:mb-8 text-sm md:text-base line-clamp-3 md:line-clamp-none">
                                                {prod.desc[language]}
                                            </p>

                                            {/* Features Blocks */}
                                            <div className="grid grid-cols-1 gap-2 mb-6 md:mb-8">
                                                {prod.features[language].map((feat, i) => (
                                                    <div key={i} className={`bg-black/40 px-3 py-2 md:px-4 md:py-3 rounded-xl text-xs md:text-sm font-medium text-neutral-200 border border-white/5 flex items-center gap-3 hover:border-white/20 transition-colors`}>
                                                        <div className={`w-1.5 h-1.5 rounded-full ${prod.color.replace('text-', 'bg-')} shadow-[0_0_8px_currentColor]`} />
                                                        {feat}
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="flex gap-4">
                                                <Link to={createPageUrl(prod.path.substring(1))} className="flex-1">
                                                    <Button className={`w-full ${prod.color.replace('text-', 'bg-').replace('400', '600')} hover:${prod.color.replace('text-', 'bg-').replace('400', '500')} text-white h-12 rounded-xl text-sm font-bold border-0 shadow-lg shadow-${prod.color.split('-')[1]}-900/20`}>
                                                        {prod.primaryBtn[language]}
                                                    </Button>
                                                </Link>
                                                <Button variant="outline" className="flex-1 border-neutral-700 text-white hover:bg-white/5 bg-transparent h-12 rounded-xl text-sm font-medium">
                                                    {prod.secondaryBtn[language]}
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Section 07: PROOF & MILESTONES */}
            <section className="py-32 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div {...fadeIn} className="mb-12">
                        <h2 className="text-3xl font-bold mb-2">{t.milestones.title}</h2>
                        <p className="text-neutral-500">{t.milestones.sub}</p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {milestones.map((m, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-[#0A0A0A] p-6 rounded-xl border border-neutral-800 flex flex-col justify-between h-32 hover:border-white/20 transition-colors"
                            >
                                <div className="flex justify-between items-start">
                                    <m.icon className={`w-6 h-6 ${m.color}`} />
                                    <ArrowRight className="w-4 h-4 text-neutral-700" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white mb-1">{m.title}</div>
                                    <div className="text-xs text-neutral-500">{m.desc}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 08: HOW IT CONNECTS (Diagram) */}
            <section className="py-24 bg-[#0A0A0A] border-t border-neutral-900 overflow-hidden relative">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                 <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-sm font-mono text-neutral-500 mb-8 uppercase tracking-widest">{t.diagram.title}</h2>
                    
                    <div className="flex flex-col items-center gap-4 mb-12">
                        <div className="bg-indigo-900/20 border border-indigo-500/30 px-8 py-4 rounded-xl text-indigo-400 font-bold w-64">
                            AiD Guardian (Safety)
                        </div>
                        <div className="h-8 w-px bg-neutral-800" />
                        <div className="bg-purple-900/20 border border-purple-500/30 px-8 py-4 rounded-xl text-purple-400 font-bold w-64">
                            PlayArts (Provenance)
                        </div>
                        <div className="h-8 w-px bg-neutral-800" />
                        <div className="flex gap-4">
                            <div className="bg-orange-900/20 border border-orange-500/30 px-6 py-4 rounded-xl text-orange-400 font-bold text-sm w-40">
                                EleMEMEtal
                            </div>
                            <div className="bg-emerald-900/20 border border-emerald-500/30 px-6 py-4 rounded-xl text-emerald-400 font-bold text-sm w-40">
                                Stockhoo
                            </div>
                        </div>
                    </div>

                    <p className="text-xl text-white font-medium max-w-2xl mx-auto">
                        {t.diagram.desc}
                    </p>
                 </div>
            </section>

            {/* Section 09: RESEARCH / UPDATES (Feed) */}
            <section id="research" className="py-24 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <h2 className="text-2xl font-bold">{t.research.title}</h2>
                        <Button variant="link" className="text-indigo-400">{t.research.viewAll}</Button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {t.research.items.map((item, idx) => (
                            <div key={idx} className="border-t border-neutral-800 pt-6 hover:border-indigo-500 transition-colors cursor-pointer group">
                                <div className="text-xs text-neutral-500 mb-2 font-mono">{item.date}</div>
                                <h3 className="text-lg font-bold mb-2 group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                                <p className="text-sm text-neutral-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 10: CONTACT */}
            <section className="py-32 bg-[#050505] border-t border-neutral-900">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
                    <div>
                        <h2 className="text-5xl font-black tracking-tighter mb-4">{t.contact.title}</h2>
                        <p className="text-neutral-500 text-lg">{t.contact.sub}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to={createPageUrl("Contact")}>
                            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-full px-10 h-14 text-lg font-bold border-0">
                                {t.contact.cta1}
                            </Button>
                        </Link>
                        <Button variant="outline" size="lg" className="rounded-full px-10 h-14 text-lg border-neutral-800 text-white hover:bg-white/10 bg-transparent">
                            {t.contact.cta2}
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}