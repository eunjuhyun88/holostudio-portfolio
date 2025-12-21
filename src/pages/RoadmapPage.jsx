import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';
import { useTheme } from '@/components/ThemeContext';
import { Calendar, GitCommit, ChevronRight, Zap, Shield, FileText, Gamepad2, TrendingUp } from 'lucide-react';
import CosmicBackground from '@/components/CosmicBackground';
import Background3D from '@/components/Background3D';
import ScrollMotionBackground from '@/components/ScrollMotionBackground';

export default function RoadmapPage() {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const ref = useRef(null);
    
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    const content = {
        en: {
            title: "Product Roadmap",
            subtitle: "Building the trust infrastructure for autonomous AI",
            items: [
                {
                    id: "poc",
                    quarter: "Q4 2025",
                    title: "PoC Protocol v1",
                    desc: "Standard for verifiable AI provenance & IP lineage",
                    details: [
                        "EIP-7007 compatible verification for generative assets",
                        "Gas-optimized verification proofs",
                        "Mainnet deployment across major L2s",
                        "SDK release for developer integration"
                    ],
                    icon: Shield,
                    status: "current",
                    color: "indigo"
                },
                {
                    id: "memeping",
                    quarter: "Q1 2026",
                    title: "MemePing v2",
                    desc: "Cross-platform impact tracking",
                    details: [
                        "Real-time impact tracking across Twitter, Reddit, & Farcaster",
                        "AI-powered sentiment analysis",
                        "Influencer network mapping",
                        "Viral trajectory prediction"
                    ],
                    icon: TrendingUp,
                    status: "upcoming",
                    color: "blue"
                },
                {
                    id: "stockhoo",
                    quarter: "Q1 2026",
                    title: "Stockhoo Launch",
                    desc: "Zone-based market intelligence",
                    details: [
                        "Public launch of Stockhoo web and mobile apps",
                        "On-chain verification for trader reputation",
                        "Proof of Profit protocol integration",
                        "Social trading features"
                    ],
                    icon: TrendingUp,
                    status: "upcoming",
                    color: "emerald"
                },
                {
                    id: "elememetal",
                    quarter: "Q2 2026",
                    title: "EleMEMEtal Launch",
                    desc: "AI-native PvP with provenance",
                    details: [
                        "Global launch with full UGC editor",
                        "Player-created verified assets marketplace",
                        "Cross-game asset compatibility",
                        "Tournament and esports integration"
                    ],
                    icon: Gamepad2,
                    status: "future",
                    color: "orange"
                }
            ]
        },
        ko: {
            title: "프로덕트 로드맵",
            subtitle: "자율 AI를 위한 신뢰 인프라 구축",
            items: [
                {
                    id: "poc",
                    quarter: "2025년 4분기",
                    title: "PoC 프로토콜 v1",
                    desc: "검증 가능한 AI 출처 및 IP 계보 표준",
                    details: [
                        "생성형 자산을 위한 EIP-7007 호환 검증",
                        "가스 최적화된 검증 증명",
                        "주요 L2 메인넷 배포",
                        "개발자 통합을 위한 SDK 출시"
                    ],
                    icon: Shield,
                    status: "current",
                    color: "indigo"
                },
                {
                    id: "memeping",
                    quarter: "2026년 1분기",
                    title: "MemePing v2",
                    desc: "크로스 플랫폼 영향력 추적",
                    details: [
                        "Twitter, Reddit, Farcaster 실시간 영향력 추적",
                        "AI 기반 감성 분석",
                        "인플루언서 네트워크 매핑",
                        "바이럴 궤적 예측"
                    ],
                    icon: TrendingUp,
                    status: "upcoming",
                    color: "blue"
                },
                {
                    id: "stockhoo",
                    quarter: "2026년 1분기",
                    title: "Stockhoo 런칭",
                    desc: "Zone 기반 시장 인텔리전스",
                    details: [
                        "Stockhoo 웹 및 모바일 앱 퍼블릭 런칭",
                        "트레이더 평판 온체인 검증",
                        "수익 증명 프로토콜 통합",
                        "소셜 트레이딩 기능"
                    ],
                    icon: TrendingUp,
                    status: "upcoming",
                    color: "emerald"
                },
                {
                    id: "elememetal",
                    quarter: "2026년 2분기",
                    title: "EleMEMEtal 런칭",
                    desc: "출처 증명이 적용된 AI 네이티브 게임",
                    details: [
                        "완전한 UGC 에디터와 함께 글로벌 런칭",
                        "플레이어 생성 검증 자산 마켓플레이스",
                        "크로스 게임 자산 호환성",
                        "토너먼트 및 e스포츠 통합"
                    ],
                    icon: Gamepad2,
                    status: "future",
                    color: "orange"
                }
            ]
        }
    };

    const t = content[language];

    const colorMap = {
        indigo: {
            text: 'text-indigo-400',
            bg: 'bg-indigo-500/10',
            border: 'border-indigo-500/30',
            glow: 'shadow-[0_0_40px_rgba(99,102,241,0.3)]',
            lightBg: 'from-cyan-100 via-violet-100 to-indigo-100',
            lightText: 'text-indigo-700',
            lightBorder: 'border-indigo-400'
        },
        blue: {
            text: 'text-blue-400',
            bg: 'bg-blue-500/10',
            border: 'border-blue-500/30',
            glow: 'shadow-[0_0_40px_rgba(59,130,246,0.3)]',
            lightBg: 'from-blue-100 via-cyan-100 to-sky-100',
            lightText: 'text-blue-700',
            lightBorder: 'border-blue-400'
        },
        emerald: {
            text: 'text-emerald-400',
            bg: 'bg-emerald-500/10',
            border: 'border-emerald-500/30',
            glow: 'shadow-[0_0_40px_rgba(16,185,129,0.3)]',
            lightBg: 'from-emerald-100 via-teal-100 to-green-100',
            lightText: 'text-emerald-700',
            lightBorder: 'border-emerald-400'
        },
        orange: {
            text: 'text-orange-400',
            bg: 'bg-orange-500/10',
            border: 'border-orange-500/30',
            glow: 'shadow-[0_0_40px_rgba(251,146,60,0.3)]',
            lightBg: 'from-orange-100 via-amber-100 to-yellow-100',
            lightText: 'text-orange-700',
            lightBorder: 'border-orange-400'
        }
    };

    return (
        <div ref={ref} className={`min-h-screen font-sans transition-colors duration-300 ${
            theme === 'dark' 
                ? 'bg-[#050505] text-white'
                : 'bg-white text-neutral-900'
        }`}>
            {/* Global Background Layer */}
            {theme === 'dark' ? (
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 opacity-95">
                        <CosmicBackground theme={theme} />
                    </div>
                    <div className="absolute inset-0 opacity-85">
                        <Background3D theme={theme} />
                    </div>
                    <ScrollMotionBackground theme={theme} />
                </div>
            ) : (
                <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                    {/* Rotating iridescent gradients */}
                    <motion.div 
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-cyan-200/20 via-violet-200/20 to-pink-200/20 blur-3xl"
                    />
                    <motion.div 
                        animate={{ rotate: [360, 0] }}
                        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                        className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tl from-indigo-200/20 via-purple-200/20 to-blue-200/20 blur-3xl"
                    />
                    
                    {/* Floating particles */}
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 opacity-20"
                            animate={{
                                y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
                                x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                                scale: [1, 1.5, 1],
                                opacity: [0.1, 0.3, 0.1]
                            }}
                            transition={{
                                duration: 15 + Math.random() * 10,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.2
                            }}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`
                            }}
                        />
                    ))}
                    
                    {/* Multi-layer grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
                </div>
            )}

            {/* Content */}
            <div className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto">
                {/* Hero Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-32"
                >
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold tracking-widest uppercase mb-8 ${
                        theme === 'dark'
                            ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
                            : 'bg-gradient-to-r from-cyan-100 via-violet-100 to-pink-100 border-indigo-300 text-indigo-700'
                    }`}>
                        <GitCommit className="w-4 h-4" />
                        {language === 'en' ? 'PRODUCT TIMELINE' : '제품 타임라인'}
                    </div>
                    <h1 className={`text-5xl md:text-7xl font-black tracking-tight mb-6 ${
                        theme === 'dark' ? 'text-white' : 'text-neutral-900'
                    }`}>
                        {t.title}
                    </h1>
                    <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${
                        theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                    }`}>
                        {t.subtitle}
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Center animated line */}
                    <div className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 overflow-hidden ${
                        theme === 'dark' ? 'bg-neutral-900' : 'bg-neutral-200'
                    }`}>
                        <motion.div 
                            style={{ y: useTransform(scrollYProgress, [0, 1], ['-100%', '100%']) }}
                            className={`absolute inset-0 w-full h-1/3 bg-gradient-to-b from-transparent to-transparent ${
                                theme === 'dark' ? 'via-indigo-500' : 'via-violet-400'
                            }`}
                        />
                    </div>

                    {/* Items */}
                    <div className="space-y-32">
                        {t.items.map((item, idx) => {
                            const colors = colorMap[item.color];
                            const Icon = item.icon;
                            
                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    className={`relative ${idx % 2 === 0 ? 'md:pr-[55%]' : 'md:pl-[55%]'}`}
                                >
                                    {/* Timeline dot */}
                                    <motion.div 
                                        className={`absolute left-8 md:left-1/2 top-8 -translate-x-1/2 w-6 h-6 rounded-full border-4 z-10 ${
                                            theme === 'dark' ? 'border-[#050505]' : 'border-white'
                                        } ${item.status === 'current' ? (theme === 'dark' ? 'bg-indigo-500 ' + colors.glow : 'bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 shadow-lg') : (theme === 'dark' ? 'bg-neutral-700' : 'bg-neutral-400')}`}
                                        animate={item.status === 'current' ? { scale: [1, 1.2, 1] } : {}}
                                        transition={item.status === 'current' ? { duration: 2, repeat: Infinity } : {}}
                                    >
                                        {item.status === 'current' && (
                                            <motion.div
                                                className={`absolute inset-0 rounded-full ${
                                                    theme === 'dark' ? 'bg-indigo-500' : 'bg-violet-400'
                                                }`}
                                                animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            />
                                        )}
                                    </motion.div>

                                    {/* Content Card */}
                                    <div className={`ml-20 md:ml-0 group relative rounded-3xl border p-8 md:p-12 overflow-hidden transition-all duration-500 ${
                                        theme === 'dark'
                                            ? `bg-black/40 backdrop-blur-md ${colors.border} hover:${colors.border.replace('/30', '/60')} ${item.status === 'current' ? colors.glow : ''}`
                                            : `bg-white ${colors.lightBorder} hover:shadow-2xl shadow-lg`
                                    }`}>
                                        {/* Pulsing corners */}
                                        <motion.div 
                                            animate={{ opacity: [0.3, 1, 0.3] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                            className={`absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 ${
                                                theme === 'dark' ? colors.border : colors.lightBorder
                                            }`}
                                        />
                                        <motion.div 
                                            animate={{ opacity: [0.3, 1, 0.3] }}
                                            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                                            className={`absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 ${
                                                theme === 'dark' ? colors.border : colors.lightBorder
                                            }`}
                                        />

                                        {/* Background gradient */}
                                        {item.status === 'current' && theme === 'light' && (
                                            <div className={`absolute inset-0 bg-gradient-to-br ${colors.lightBg} opacity-40`} />
                                        )}
                                        {theme === 'dark' && (
                                            <div className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                        )}

                                        <div className="relative z-10">
                                            {/* Header */}
                                            <div className="flex items-center justify-between mb-6">
                                                <div className={`flex items-center gap-3 px-4 py-2 rounded-full border ${
                                                    theme === 'dark'
                                                        ? `${colors.bg} ${colors.border} ${colors.text}`
                                                        : `${colors.lightBg.replace('from-', 'bg-')} ${colors.lightBorder} ${colors.lightText}`
                                                }`}>
                                                    <Calendar className="w-4 h-4" />
                                                    <span className="text-sm font-bold">{item.quarter}</span>
                                                </div>
                                                {item.status === 'current' && (
                                                    <div className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                                                        theme === 'dark'
                                                            ? 'bg-indigo-500 text-white'
                                                            : 'bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 text-white'
                                                    }`}>
                                                        {language === 'en' ? 'Active' : '진행중'}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Icon */}
                                            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${
                                                theme === 'dark' ? colors.bg : colors.lightBg.replace('from-', 'bg-')
                                            } ${colors.border} border`}>
                                                <Icon className={`w-10 h-10 ${theme === 'dark' ? colors.text : colors.lightText}`} />
                                            </div>

                                            {/* Title & Description */}
                                            <h3 className={`text-3xl font-black mb-4 ${
                                                theme === 'dark' ? 'text-white' : 'text-neutral-900'
                                            }`}>
                                                {item.title}
                                            </h3>
                                            <p className={`text-lg mb-8 ${
                                                theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                                            }`}>
                                                {item.desc}
                                            </p>

                                            {/* Details */}
                                            <div className="space-y-3">
                                                {item.details.map((detail, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.1 }}
                                                        className="flex items-start gap-3"
                                                    >
                                                        <ChevronRight className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                                                            theme === 'dark' ? colors.text : colors.lightText
                                                        }`} />
                                                        <span className={`text-sm ${
                                                            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-700'
                                                        }`}>
                                                            {detail}
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}