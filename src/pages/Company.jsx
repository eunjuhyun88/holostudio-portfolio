import React from 'react';
import { motion } from "framer-motion";
import { useLanguage } from '@/components/LanguageContext';
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Trophy, Target, Shield, Zap, Cpu, Globe, Users, Database, Layers, Gamepad2 } from 'lucide-react';

export default function Company() {
    const { language } = useLanguage();

    const t = {
        en: {
            header: {
                title: "Technology & Vision",
                sub: "Building the infrastructure for the next generation of AI media.",
            },
            solution: {
                tag: "Our Solution",
                title: "Industry First System",
                sub: "Combining 1 year of PlayArts media ops know-how with Web3 tech.",
                cards: [
                    { title: "Full-Media AI Guardrails", desc: "Real-time filtering & verification for Text, Image, Video, Audio.", icon: Shield },
                    { title: "Blockchain Verification", desc: "Immutable records & Web3 infra for origin tracking.", icon: Database },
                    { title: "DAO Community", desc: "DAO-based continuous improvement & transparent governance.", icon: Users },
                    { title: "Gaming Integration", desc: "Unified SDK support for Game Engines & Metaverse.", icon: Gamepad2 }
                ],
                stats: {
                    title: "Proven Foundation",
                    desc: "Based on 1 year of PlayArts ops, 500K+ users, 1M+ content processed.",
                    items: [
                        { value: "12", label: "Game Ops Experience" },
                        { value: "3", label: "Media Types Supported" },
                        { value: "99.7%", label: "Accuracy" }
                    ]
                }
            },
            process: {
                tag: "AI Safety Pipeline",
                title: "6-Step Verification Process",
                sub: "Real-time verification for all media types",
                steps: ["User Input", "AI Generation", "Media Guard", "DAO Review", "Blockchain", "Game Asset"],
                features: [
                    { title: "Real-time Processing", desc: "Sub-second latency for all media types." },
                    { title: "Scalable Infra", desc: "Cloud-native design for millions of concurrent checks." },
                    { title: "Continuous Learning", desc: "AI Model improvement via community feedback." }
                ]
            },
            strategy: {
                gamification: {
                    tag: "Strategy",
                    title: "Gamification Strategy",
                    cards: [
                        { title: "Remix Battles", desc: "Safe content competition, community voting winners." },
                        { title: "Dual NFT Game", desc: "Creator-Verifier competitive model, NFT revenue share." },
                        { title: "Community Challenges", desc: "Cooperative filtering missions, AI model RLHF data collection." }
                    ]
                },
                diff: {
                    tag: "Differentiation",
                    title: "Key Differentiation",
                    points: [
                        "Industry First: Full-Media AI Guardrails",
                        "1Y+ PlayArts Media Ops Experience",
                        "Gaming/3D Specialized Safety System",
                        "Blockchain DAO-based Continuous Evolution"
                    ],
                    goals: {
                        title: "YEAR 1 GOALS",
                        items: [
                            { val: "1M+", label: "Content Filtered" },
                            { val: "100K+", label: "DAO Participants" },
                            { val: "6M", label: "Creator Revenue" },
                            { val: "95%+", label: "Safety Score" }
                        ]
                    }
                }
            },
            depin: {
                tag: "DePIN Infra",
                title: "GPU Mesh Network",
                sub: "Democratizing GPU resources via decentralized physical infra network.",
                cards: [
                    { title: "Heterogeneous GPU Pool", desc: "Unified network from GB200 to RTX 4090." },
                    { title: "MIG (Multi-Instance GPU)", desc: "Efficient resource use via instance slicing." },
                    { title: "Distributed Checkpoint", desc: "Stability via multi-node decentralized learning." }
                ]
            },
            roadmap: {
                tag: "Execution Plan",
                title: "Execution Roadmap 2025-2026",
                sub: "Evolving from Dual Card Battler to AI+Web3 Guardrail Platform",
                phases: [
                    { time: "2025", title: "HoloStudio Foundation", items: ["500K+ Users", "Media Content Ops Data", "AI Safety R&D"] },
                    { time: "2025 Q4", title: "Dual Card Battle Market Entry", items: ["Team Battler (TCG) Launch", "Gaming AI Media Engine", "Guardrail Package Service"] },
                    { time: "2026 Q1-Q2", title: "AI+Web3 Guardrail Core", items: ["Full-Media Guardrails API", "Video AI Safety Module", "Blockchain Verification Infra"] },
                    { time: "2026+", title: "Enterprise Expansion", items: ["Global Compliance Cert", "DAO Governance System", "1M+ Content Filtering"] }
                ],
                future: {
                    title: "Future Plan: HoloStudio Metaverse",
                    cards: [
                        { title: "2026 2H", desc: "HoloStudio Metaverse Full 3D Open World" },
                        { title: "Full 3D", desc: "Rendering Games, Universe Expansion" },
                        { title: "Integrated", desc: "Guardrail Ecosystem Fully Automated" },
                        { title: "Global", desc: "Expansion Plan Post 2026" }
                    ]
                }
            }
        },
        ko: {
            header: {
                title: "기술 및 비전",
                sub: "차세대 AI 미디어를 위한 인프라를 구축합니다.",
            },
            solution: {
                tag: "우리의 솔루션",
                title: "업계 최초: Industry First: 시스템",
                sub: "1년간 PlayArts 운영으로 축적된 미디어 콘텐츠 노하우 + Web3 기술 융합",
                cards: [
                    { title: "Full-Media AI Guardrails", desc: "텍스트, 이미지, 비디오 AI 생성 콘텐츠 대상 실시간 필터링 및 검증", icon: Shield },
                    { title: "블록체인 검증", desc: "블록체인 추적 및 Web3 인프라를 통한 불변성 검증", icon: Database },
                    { title: "DAO 커뮤니티", desc: "DAO 기반 지속적 개선과 투명한 의사결정 프로세스", icon: Users },
                    { title: "게이밍 통합", desc: "게임 엔진 및 메타버스 플랫폼을 위한 SDK 통합 지원", icon: Gamepad2 }
                ],
                stats: {
                    title: "검증된 기반",
                    desc: "PlayArts의 1년간 운영 경험을 바탕으로 500K+ 사용자와 1M+ 콘텐츠 처리 실적을 보유. 검증된 인프라를 확장하여 AI 안전성 문제를 전면적으로 해결합니다.",
                    items: [
                        { value: "12", label: "게임 운영 경험" },
                        { value: "3", label: "미디어 타입 지원" },
                        { value: "99.7%", label: "정확도" }
                    ]
                }
            },
            process: {
                tag: "AI SAFETY PIPELINE",
                title: "6단계 검증 프로세스",
                sub: "Full-Media AI Guardrails: 모든 미디어 타입 실시간 검증",
                steps: ["사용자 입력", "AI 생성", "Media Guard", "DAO 리뷰", "블록체인", "Game Asset"],
                features: [
                    { title: "실시간 처리", desc: "모든 미디어 타입에 대해 초단위 지연 시간으로 정밀 처리" },
                    { title: "확장 가능한 인프라", desc: "수백만 건의 동시 접속을 지원하는 클라우드 네이티브 설계" },
                    { title: "지속적 학습", desc: "커뮤니티 피드백과 검증된 결과를 통해 AI 모델 개선" }
                ]
            },
            strategy: {
                gamification: {
                    tag: "전략",
                    title: "게이미피케이션 전략",
                    cards: [
                        { title: "리믹스 배틀", desc: "안전한 콘텐츠 미션 경쟁, 커뮤니티 투표로 우승자 선정" },
                        { title: "듀얼 NFT 게임 (개발 예정)", desc: "창작자-검증자 경쟁 모델, NFT 수익 분배 시스템 구축" },
                        { title: "커뮤니티 챌린지", desc: "협업 필터링 미션, AI 모델 고도화 데이터 수집" }
                    ]
                },
                diff: {
                    tag: "차별화",
                    title: "핵심 차별점",
                    points: [
                        "업계 최초: Full-Media AI Guardrails",
                        "1년+ PlayArts 미디어 운영 경험 기반",
                        "게이밍/3D 콘텐츠 특화 안전성 시스템",
                        "블록체인 DAO 기반 지속 진화"
                    ],
                    goals: {
                        title: "YEAR 1 목표",
                        items: [
                            { val: "1M+", label: "콘텐츠 필터링" },
                            { val: "100K+", label: "DAO 참여자" },
                            { val: "6M", label: "크리에이터 수익" },
                            { val: "95%+", label: "안전성 평가" }
                        ]
                    }
                }
            },
            depin: {
                tag: "DEPIN 인프라",
                title: "GPU Mesh 네트워크",
                sub: "탈중앙화된 물리 인프라 네트워크로 GPU 자원의 민주화를 실현합니다.",
                cards: [
                    { title: "이기종 GPU 풀", desc: "GB200에서 RTX 4090까지 다양한 GPU를 단일 네트워크로 통합" },
                    { title: "MIG (Multi-Instance GPU)", desc: "물리적 GPU를 독립적인 인스턴스로 분할하여 효율적인 자원 활용" },
                    { title: "분산 체크포인트 학습", desc: "대규모 모델 학습을 여러 노드에 분산하여 안정성 확보" }
                ]
            },
            roadmap: {
                tag: "실행 계획",
                title: "실행 로드맵 2025-2026",
                sub: "듀얼카드배틀 게임으로 시작해 AI+Web3 가드레일 플랫폼으로 진화",
                phases: [
                    { time: "현재 (2025)", title: "HoloStudio 운영 기반", items: ["500K+ 사용자 및 1M+ 콘텐츠 처리 완료", "미디어 콘텐츠 운영 노하우 축적", "AI 안전성 가드레일 연구 및 개발"] },
                    { time: "2025 Q4", title: "듀얼카드배틀 마켓 진입", items: ["팀 카드배틀 게임(TCG) 런칭", "게이밍 AI 미디어 생성 유틸리티 제공", "가드레일 패키지 통합 서비스"] },
                    { time: "2026 Q1-Q2", title: "AI+Web3 가드레일 코어", items: ["Full-Media AI Guardrails API", "비디오 AI 생성 콘텐츠 안전성 모듈", "블록체인 기반 검증 인프라 구축"] },
                    { time: "2026년 내", title: "엔터프라이즈 확장", items: ["글로벌 컴플라이언스 인증", "DAO 거버넌스 시스템 구축", "1M+ 콘텐츠 필터링 목표"] }
                ],
                future: {
                    title: "향후 계획: 홀로스튜디오 메타버스",
                    cards: [
                        { title: "2026 하반기", desc: "홀로스튜디오 메타버스 풀사이즈 3D 오픈월드" },
                        { title: "Full 3D", desc: "렌더링 게임 유니버스 확장" },
                        { title: "통합형", desc: "가드레일 생태계 완전 자동화" },
                        { title: "글로벌", desc: "확장 계획 2026년 이후" }
                    ]
                }
            }
        }
    };

    const c = t[language];

    return (
        <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-indigo-500/30">
            {/* Header */}
            <section className="pt-32 pb-16 px-6 bg-[#050505]">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-white">
                            {c.header.title}
                        </h1>
                        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                            {c.header.sub}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 4. SOLUTION */}
            <section className="py-24 bg-[#080808]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold mb-4">{c.solution.tag}</div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{c.solution.title}</h2>
                        <p className="text-neutral-500">{c.solution.sub}</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 mb-12">
                        {c.solution.cards.map((card, i) => (
                            <div key={i} className="bg-[#111] p-6 rounded-xl border border-neutral-800 hover:border-indigo-500/50 transition-all text-center group">
                                <div className="w-12 h-12 mx-auto bg-neutral-800 rounded-full flex items-center justify-center mb-4 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                                    <card.icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold mb-2">{card.title}</h3>
                                <p className="text-xs text-neutral-500 leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-3xl p-8 md:p-12 border border-indigo-500/20">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">{c.solution.stats.title}</h3>
                                <p className="text-neutral-400 leading-relaxed mb-8">
                                    {c.solution.stats.desc}
                                </p>
                            </div>
                            <div className="grid grid-cols-3 gap-6 text-center">
                                {c.solution.stats.items.map((item, i) => (
                                    <div key={i}>
                                        <div className="text-3xl font-black text-indigo-400 mb-1">{item.value}</div>
                                        <div className="text-xs text-neutral-500 font-bold uppercase">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PROCESS */}
            <section className="py-24 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold mb-4">{c.process.tag}</div>
                    <h2 className="text-3xl font-bold mb-4">{c.process.title}</h2>
                    <p className="text-neutral-500 mb-16">{c.process.sub}</p>

                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-20">
                        {c.process.steps.map((step, i) => (
                            <div key={i} className="flex items-center">
                                <div className="flex flex-col items-center gap-3">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg ${i % 2 === 0 ? 'bg-indigo-600 text-white' : 'bg-white text-black'}`}>
                                        {i + 1}
                                    </div>
                                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-wide">{step}</span>
                                </div>
                                {i < c.process.steps.length - 1 && (
                                    <div className="hidden md:block w-12 h-px bg-neutral-800 mx-4" />
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {c.process.features.map((feat, i) => (
                            <div key={i} className="border border-neutral-800 rounded-xl p-6 text-left hover:border-indigo-500/50 transition-colors">
                                <h4 className="font-bold mb-2 text-white">{feat.title}</h4>
                                <p className="text-sm text-neutral-500">{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. STRATEGY & DIFF */}
            <section className="py-24 bg-[#080808]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Strategy */}
                        <div className="bg-[#111] rounded-3xl p-8 border border-neutral-800">
                            <div className="text-center mb-8">
                                <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold mb-2">{c.strategy.gamification.tag}</div>
                                <h3 className="text-2xl font-bold text-indigo-300">{c.strategy.gamification.title}</h3>
                            </div>
                            <div className="space-y-4">
                                {c.strategy.gamification.cards.map((card, i) => (
                                    <div key={i} className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-indigo-900/50 flex items-center justify-center flex-shrink-0 text-indigo-400 mt-1">
                                            {[Zap, Gamepad2, Users][i] && React.createElement([Zap, Gamepad2, Users][i], { size: 16 })}
                                        </div>
                                        <div>
                                            <div className="font-bold text-white mb-1">{card.title}</div>
                                            <div className="text-xs text-neutral-500">{card.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Diff */}
                        <div className="bg-[#111] rounded-3xl p-8 border border-neutral-800">
                            <div className="text-center mb-8">
                                <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold mb-2">{c.strategy.diff.tag}</div>
                                <h3 className="text-2xl font-bold text-indigo-300">{c.strategy.diff.title}</h3>
                            </div>
                            <div className="space-y-3 mb-8">
                                {c.strategy.diff.points.map((pt, i) => (
                                    <div key={i} className="bg-white text-black font-bold text-sm px-4 py-3 rounded-lg flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs flex-shrink-0">{i + 1}</div>
                                        {pt}
                                    </div>
                                ))}
                            </div>
                            
                            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                <h4 className="font-bold text-indigo-400 mb-4 uppercase text-xs tracking-widest">{c.strategy.diff.goals.title}</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    {c.strategy.diff.goals.items.map((item, i) => (
                                        <div key={i} className="bg-neutral-900 p-3 rounded-lg text-center border border-neutral-800">
                                            <div className="font-black text-xl text-white mb-1">{item.val}</div>
                                            <div className="text-[10px] text-neutral-500 uppercase">{item.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. DePIN */}
            <section className="py-24 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold mb-4">{c.depin.tag}</div>
                        <h2 className="text-3xl font-bold mb-4 text-white">{c.depin.title}</h2>
                        <p className="text-neutral-500">{c.depin.sub}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        {c.depin.cards.map((card, i) => (
                            <div key={i} className="bg-[#111] p-8 rounded-2xl border border-neutral-800 text-center hover:border-indigo-500/50 transition-colors">
                                <div className="w-12 h-12 mx-auto bg-neutral-800 rounded-lg flex items-center justify-center mb-6 text-indigo-400">
                                    {[Cpu, Layers, Database][i] && React.createElement([Cpu, Layers, Database][i], { size: 24 })}
                                </div>
                                <h3 className="font-bold mb-3 text-lg">{card.title}</h3>
                                <p className="text-sm text-neutral-500">{card.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-[#111] rounded-3xl p-12 border border-neutral-800 text-center">
                        <h3 className="font-bold text-neutral-400 mb-12 uppercase tracking-widest text-sm">Mesh Network Architecture</h3>
                        <div className="relative max-w-2xl mx-auto aspect-video bg-neutral-900 rounded-xl flex items-center justify-center border border-neutral-800">
                            {/* Simple CSS Mesh Diagram Representation */}
                            <div className="relative w-full h-full p-8">
                                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                    <div className="w-64 h-64 border border-indigo-500/30 rounded-full animate-pulse" />
                                    <div className="absolute w-96 h-96 border border-indigo-500/10 rounded-full" />
                                </div>
                                <div className="grid grid-cols-3 gap-8 h-full items-center relative z-10">
                                    <div className="flex flex-col gap-8">
                                        <div className="w-12 h-12 bg-indigo-900 rounded-full mx-auto flex items-center justify-center text-xs font-bold border border-indigo-500">GB200</div>
                                        <div className="w-10 h-10 bg-indigo-900/50 rounded-full mx-auto flex items-center justify-center text-[10px] border border-indigo-500/50">H100</div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                         <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center font-bold shadow-[0_0_30px_rgba(255,255,255,0.2)]">CORE</div>
                                    </div>
                                    <div className="flex flex-col gap-8">
                                        <div className="w-10 h-10 bg-indigo-900/50 rounded-full mx-auto flex items-center justify-center text-[10px] border border-indigo-500/50">4090</div>
                                        <div className="w-12 h-12 bg-indigo-900 rounded-full mx-auto flex items-center justify-center text-xs font-bold border border-indigo-500">A100</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. ROADMAP */}
            <section className="py-24 bg-[#080808]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold mb-4">{c.roadmap.tag}</div>
                        <h2 className="text-3xl font-bold mb-4 text-white">{c.roadmap.title}</h2>
                        <p className="text-neutral-500">{c.roadmap.sub}</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 mb-20">
                        {c.roadmap.phases.map((phase, i) => (
                            <div key={i} className="relative group">
                                <div className={`absolute top-0 left-0 w-full h-1 ${i === 0 ? 'bg-indigo-500' : 'bg-neutral-800 group-hover:bg-indigo-500/50 transition-colors'}`} />
                                <div className={`w-4 h-4 rounded-full absolute -top-1.5 left-1/2 -translate-x-1/2 border-2 border-[#080808] ${i === 0 ? 'bg-indigo-500' : 'bg-neutral-600 group-hover:bg-indigo-500 transition-colors'}`} />
                                
                                <div className="pt-8 text-center px-4">
                                    <div className="text-xs font-bold text-indigo-400 mb-2 uppercase">{phase.time}</div>
                                    <h3 className="font-bold text-white mb-6 h-12 flex items-center justify-center">{phase.title}</h3>
                                    <ul className="text-xs text-neutral-400 space-y-3 text-left bg-[#111] p-4 rounded-xl border border-neutral-800">
                                        {phase.items.map((item, j) => (
                                            <li key={j} className="flex items-start gap-2">
                                                <span className="w-1 h-1 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-neutral-900 rounded-3xl p-10 border border-neutral-800 text-center">
                        <h3 className="text-2xl font-bold mb-10">{c.roadmap.future.title}</h3>
                        <div className="grid md:grid-cols-4 gap-6">
                            {c.roadmap.future.cards.map((card, i) => (
                                <div key={i} className="bg-white text-black p-6 rounded-xl">
                                    <div className="font-black text-xl mb-2 text-indigo-600">{card.title}</div>
                                    <div className="text-sm font-bold">{card.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}