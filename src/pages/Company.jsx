import React from 'react';
import { motion } from "framer-motion";
import { useLanguage } from '@/components/LanguageContext';
import { Button } from "@/components/ui/button";
import { Download, Shield, Zap, Users, Database, Cpu, Layers, Gamepad2, Network, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO.js';

export default function Company() {
    const { language } = useLanguage();

    const t = {
        en: {
            hero: {
                tag: "TECHNOLOGY & STRATEGY",
                title: "The Infrastructure of Trust",
                sub: "We are building the fundamental safety and value layers for the autonomous AI economy.",
                desc: "Beyond simple content creation, we engineer the verifying protocols, decentralized infrastructure, and economic models that make AI sustainable."
            },
            tech: {
                title: "Core Infrastructure",
                sub: "Our proprietary technology stack for Full-Media AI Guardrails.",
                pipeline: {
                    title: "6-Step Verification Pipeline",
                    steps: [
                        { name: "Input Analysis", desc: "Multi-modal prompt injection detection" },
                        { name: "AI Generation", desc: "Real-time content synthesis" },
                        { name: "Media Guard", desc: "Sub-second visual/audio safety checks" },
                        { name: "DAO Consensus", desc: "Community-driven edge case resolution" },
                        { name: "On-Chain Proof", desc: "Immutable provenance anchor" },
                        { name: "Game Asset", desc: "Engine-ready safe output" }
                    ]
                },
                depin: {
                    title: "DePIN GPU Mesh",
                    desc: "A decentralized physical infrastructure network that democratizes access to safety compute.",
                    features: [
                        { icon: Network, title: "Heterogeneous Compute", desc: "Unifying GB200 to Consumer GPUs into a single safety mesh." },
                        { icon: Cpu, title: "MIG Slicing", desc: "Optimized resource allocation via Multi-Instance GPU partitioning." },
                        { icon: Database, title: "Distributed Training", desc: "Decentralized checkpointing for robust model evolution." }
                    ]
                }
            },
            strategy: {
                title: "Strategic Architecture",
                sub: "How we create value through gamification and differentiation.",
                gamification: {
                    title: "Gamified Safety Loop",
                    cards: [
                        { title: "Remix Battles", desc: "Turning safety filtering into competitive play.", icon: Gamepad2 },
                        { title: "Dual Economy", desc: "Creator vs Verifier incentive alignment via NFT revenue.", icon: Zap },
                        { title: "RLHF Challenges", desc: "Community missions that generate high-quality safety data.", icon: Users }
                    ]
                },
                diff: {
                    title: "Competitive Moat",
                    items: [
                        "Vertical Integration: From GPU Infra to Game UI",
                        "1M+ Operational Data Points from PlayArts",
                        "First-Mover in 3D/Metaverse Safety Standards"
                    ]
                }
            },
            roadmap: {
                title: "Master Plan 2025-2026",
                sub: "From specialized gaming utility to universal AI infrastructure.",
                phases: [
                    { 
                        year: "2025", 
                        name: "Foundation", 
                        desc: "Establishing the core safety engine and operational data.",
                        items: ["500K+ Users Onboarded", "Proprietary Safety Model V1", "TCG Game Launch"]
                    },
                    { 
                        year: "2026 Q1-Q2", 
                        name: "Expansion", 
                        desc: "Opening the infrastructure to third-party developers.",
                        items: ["Guardrails API Public Beta", "Video/3D Safety Modules", "DePIN Testnet"]
                    },
                    { 
                        year: "2026+", 
                        name: "Ecosystem", 
                        desc: "Full decentralization and enterprise standardization.",
                        items: ["Global Compliance Certs", "DAO Governance Launch", "Enterprise SLA Rollout"]
                    }
                ]
            }
        },
        ko: {
            hero: {
                tag: "TECHNOLOGY & STRATEGY",
                title: "신뢰의 인프라스트럭처",
                sub: "자율 AI 경제를 위한 근본적인 안전 및 가치 레이어를 구축합니다.",
                desc: "단순한 콘텐츠 생성을 넘어, AI를 지속 가능하게 만드는 검증 프로토콜, 탈중앙화 인프라, 그리고 경제 모델을 설계합니다."
            },
            tech: {
                title: "핵심 기술 인프라",
                sub: "Full-Media AI Guardrails를 위한 독자적인 기술 스택.",
                pipeline: {
                    title: "6단계 검증 파이프라인",
                    steps: [
                        { name: "입력 분석", desc: "멀티모달 프롬프트 인젝션 탐지" },
                        { name: "AI 생성", desc: "실시간 콘텐츠 합성" },
                        { name: "Media Guard", desc: "초고속 시각/청각 안전성 검사" },
                        { name: "DAO 합의", desc: "커뮤니티 기반 엣지 케이스 해결" },
                        { name: "온체인 증명", desc: "불변의 출처 기록 (Provenance)" },
                        { name: "게임 자산화", desc: "엔진 호환 안전 출력" }
                    ]
                },
                depin: {
                    title: "DePIN GPU 메쉬",
                    desc: "안전성 컴퓨팅 접근을 민주화하는 탈중앙화 물리 인프라 네트워크.",
                    features: [
                        { icon: Network, title: "이기종 컴퓨팅", desc: "GB200부터 소비자용 GPU까지 단일 메쉬로 통합." },
                        { icon: Cpu, title: "MIG 슬라이싱", desc: "Multi-Instance GPU 분할을 통한 최적화된 자원 배분." },
                        { icon: Database, title: "분산 학습", desc: "견고한 모델 진화를 위한 탈중앙 체크포인트 저장." }
                    ]
                }
            },
            strategy: {
                title: "전략 아키텍처",
                sub: "게이미피케이션과 차별화를 통한 가치 창출 전략.",
                gamification: {
                    title: "게이미피케이션 세이프티 루프",
                    cards: [
                        { title: "리믹스 배틀", desc: "안전 필터링을 경쟁적 플레이로 전환.", icon: Gamepad2 },
                        { title: "듀얼 이코노미", desc: "NFT 수익을 통한 창작자-검증자 인센티브 일치.", icon: Zap },
                        { title: "RLHF 챌린지", desc: "고품질 안전 데이터를 생성하는 커뮤니티 미션.", icon: Users }
                    ]
                },
                diff: {
                    title: "경쟁 우위 (Moat)",
                    items: [
                        "수직 계열화: GPU 인프라부터 게임 UI까지 통합",
                        "PlayArts 운영으로 확보한 100만+ 데이터 포인트",
                        "3D/메타버스 안전 표준의 퍼스트 무버"
                    ]
                }
            },
            roadmap: {
                title: "마스터 플랜 2025-2026",
                sub: "특화된 게이밍 유틸리티에서 범용 AI 인프라로의 진화.",
                phases: [
                    { 
                        year: "2025", 
                        name: "기반 구축 (Foundation)", 
                        desc: "핵심 안전 엔진 및 운영 데이터 확보.",
                        items: ["500K+ 사용자 확보", "자체 안전 모델 V1", "TCG 게임 런칭"]
                    },
                    { 
                        year: "2026 Q1-Q2", 
                        name: "확장 (Expansion)", 
                        desc: "서드파티 개발자에게 인프라 개방.",
                        items: ["Guardrails API 퍼블릭 베타", "비디오/3D 안전 모듈", "DePIN 테스트넷"]
                    },
                    { 
                        year: "2026+", 
                        name: "생태계 (Ecosystem)", 
                        desc: "완전한 탈중앙화 및 엔터프라이즈 표준화.",
                        items: ["글로벌 컴플라이언스 인증", "DAO 거버넌스 런칭", "엔터프라이즈 SLA"]
                    }
                ]
            }
        }
    };

    const c = t[language];

    return (
        <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-indigo-500/30">
            <SEO 
                title="Company" 
                description={c.hero.sub}
                schema={{
                    "@context": "https://schema.org",
                    "@type": "AboutPage",
                    "name": "Technology & Vision | HOLO STUDIO",
                    "description": c.hero.sub
                }}
            />
            {/* 1. COMPACT HERO */}
            <section className="pt-40 pb-20 px-6 border-b border-neutral-900">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="text-xs font-mono text-indigo-500 mb-6 tracking-widest">{c.hero.tag}</div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            {c.hero.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-300 font-light leading-relaxed mb-8">
                            {c.hero.sub}
                        </p>
                        <p className="text-neutral-500 text-base max-w-2xl leading-relaxed">
                            {c.hero.desc}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. TECHNOLOGY STACK */}
            <section className="py-24 px-6 bg-[#080808]">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-4">{c.tech.title}</h2>
                        <p className="text-neutral-500">{c.tech.sub}</p>
                    </div>

                    {/* Pipeline Visualization */}
                    <div className="mb-24">
                        <h3 className="text-lg font-mono text-indigo-400 mb-8 uppercase tracking-widest">{c.tech.pipeline.title}</h3>
                        <div className="relative">
                            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-indigo-900/20 via-indigo-500/20 to-indigo-900/20 -translate-y-1/2 hidden md:block" />
                            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                                {c.tech.pipeline.steps.map((step, i) => (
                                    <div key={i} className="relative bg-[#111] p-4 rounded-xl border border-neutral-800 hover:border-indigo-500/50 transition-all group z-10">
                                        <div className="absolute -top-3 left-4 bg-[#080808] px-2 text-xs font-mono text-neutral-500 group-hover:text-indigo-400 transition-colors">
                                            0{i+1}
                                        </div>
                                        <div className="font-bold text-white mb-2 text-sm">{step.name}</div>
                                        <div className="text-xs text-neutral-500 leading-tight">{step.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* DePIN Section */}
                    <div className="bg-[#111] rounded-3xl p-8 md:p-12 border border-neutral-800">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">{c.tech.depin.title}</h3>
                                <p className="text-neutral-400 leading-relaxed mb-8">
                                    {c.tech.depin.desc}
                                </p>
                                <div className="space-y-6">
                                    {c.tech.depin.features.map((feat, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-indigo-900/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                                                <feat.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-white text-sm mb-1">{feat.title}</div>
                                                <div className="text-xs text-neutral-500">{feat.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-[#080808] rounded-2xl p-8 border border-neutral-800 flex items-center justify-center h-full min-h-[300px]">
                                {/* Abstract Mesh Visual */}
                                <div className="relative w-full max-w-sm aspect-square">
                                    <div className="absolute inset-0 bg-indigo-500/5 rounded-full animate-pulse" />
                                    <div className="grid grid-cols-2 gap-4 h-full">
                                        <div className="bg-[#151515] rounded-xl border border-white/5 p-4 flex flex-col justify-center items-center">
                                            <Cpu className="w-8 h-8 text-neutral-700 mb-2" />
                                            <div className="text-[10px] text-neutral-500 font-mono">H100 CLUSTER</div>
                                        </div>
                                        <div className="bg-[#151515] rounded-xl border border-white/5 p-4 flex flex-col justify-center items-center translate-y-8">
                                            <Gamepad2 className="w-8 h-8 text-neutral-700 mb-2" />
                                            <div className="text-[10px] text-neutral-500 font-mono">CONSUMER NODE</div>
                                        </div>
                                        <div className="bg-[#151515] rounded-xl border border-white/5 p-4 flex flex-col justify-center items-center -translate-y-8">
                                            <Layers className="w-8 h-8 text-neutral-700 mb-2" />
                                            <div className="text-[10px] text-neutral-500 font-mono">VERIFIER NODE</div>
                                        </div>
                                        <div className="bg-[#151515] rounded-xl border border-white/5 p-4 flex flex-col justify-center items-center">
                                            <Database className="w-8 h-8 text-neutral-700 mb-2" />
                                            <div className="text-[10px] text-neutral-500 font-mono">STORAGE LAYER</div>
                                        </div>
                                    </div>
                                    {/* Connecting Lines (CSS) */}
                                    <div className="absolute inset-0 pointer-events-none">
                                        <svg className="w-full h-full opacity-20">
                                            <line x1="25%" y1="25%" x2="75%" y2="75%" stroke="white" strokeWidth="1" />
                                            <line x1="75%" y1="25%" x2="25%" y2="75%" stroke="white" strokeWidth="1" />
                                            <circle cx="50%" cy="50%" r="40" fill="#050505" stroke="currentColor" className="text-indigo-500" />
                                        </svg>
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-bold text-indigo-500 bg-[#050505] px-2 py-1 rounded">
                                            MESH
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. STRATEGY */}
            <section className="py-24 px-6 bg-[#050505]">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-4">{c.strategy.title}</h2>
                        <p className="text-neutral-500">{c.strategy.sub}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-lg font-mono text-indigo-400 mb-6 uppercase tracking-widest">{c.strategy.gamification.title}</h3>
                            <div className="space-y-4">
                                {c.strategy.gamification.cards.map((card, i) => (
                                    <div key={i} className="flex gap-5 p-4 rounded-xl hover:bg-white/5 transition-colors">
                                        <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-indigo-500 flex-shrink-0 border border-neutral-800">
                                            <card.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">{card.title}</h4>
                                            <p className="text-sm text-neutral-400">{card.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-mono text-indigo-400 mb-6 uppercase tracking-widest">{c.strategy.diff.title}</h3>
                            <div className="bg-[#111] p-8 rounded-2xl border border-neutral-800">
                                <ul className="space-y-6">
                                    {c.strategy.diff.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <CheckCircle2 className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-neutral-300 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. ROADMAP */}
            <section className="py-24 px-6 bg-[#080808] border-t border-neutral-900">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">{c.roadmap.title}</h2>
                        <p className="text-neutral-500">{c.roadmap.sub}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {c.roadmap.phases.map((phase, i) => (
                            <div key={i} className="group relative">
                                <div className="absolute top-0 left-0 w-full h-1 bg-neutral-800 group-hover:bg-indigo-500 transition-colors" />
                                <div className="pt-8">
                                    <div className="text-4xl font-black text-neutral-800 group-hover:text-white/10 transition-colors mb-4">{phase.year}</div>
                                    <h3 className="text-xl font-bold text-white mb-2">{phase.name}</h3>
                                    <p className="text-sm text-neutral-400 mb-6 min-h-[40px]">{phase.desc}</p>
                                    
                                    <ul className="space-y-3">
                                        {phase.items.map((item, j) => (
                                            <li key={j} className="flex items-center gap-2 text-sm text-neutral-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DOWNLOAD CTA */}
            <section className="py-24 bg-[#050505] border-t border-neutral-900 text-center">
                <div className="max-w-2xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8">Ready to dive deeper?</h2>
                    <Button size="lg" className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 h-12 font-bold">
                        Download Full Deck <Download className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </section>
        </div>
    );
}