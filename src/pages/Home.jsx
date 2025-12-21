import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Layers, Trophy, Target, Globe, Cpu, BarChart3, Gamepad2, Play, ChevronDown, ExternalLink, FileText, Rocket, Medal, Award, Plus, Minus, Microscope, Beaker, FileSearch, Network, Database } from 'lucide-react';
import { motion, useScroll, useTransform, useInView, AnimatePresence, useMotionValue, useMotionTemplate } from "framer-motion";
import { useLanguage } from '@/components/LanguageContext';
import { useTheme } from '@/components/ThemeContext';
import Background3D from '@/components/Background3D';
import CosmicBackground from '@/components/CosmicBackground';
import ScrollMotionBackground from '@/components/ScrollMotionBackground';
import FadeInSection from '@/components/FadeInSection';
import SEO from '@/components/SEO';
import Roadmap from '@/components/Roadmap';
import MouseGlowText from '@/components/MouseGlowText';
import GlitchText from '@/components/GlitchText';
import SciFiCard from '@/components/SciFiCard';
import Floating from '@/components/Floating';
import TiltCard from '@/components/TiltCard';
import { BorderBeam } from '@/components/ui/border-beam';

export default function Home() {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const containerRef = useRef(null);
    
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const { scrollYProgress } = useScroll();

    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.85, 1],
        theme === 'dark' 
            ? ['#050505', '#050505', '#050505', '#050505', '#050505', '#050505', '#050505', '#050505']
            : ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FAFAFA', '#FAFAFA', '#F8F8F8']
    );

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const content = {
        en: {
            hero: {
                tag: "TRUST INFRASTRUCTURE FOR THE AI ECONOMY",
                title: "HOLO STUDIO",
                sub: "AI can create infinitely. But without verification, nothing holds value.",
                desc: "HOLO STUDIO builds the trust layer that makes AI content safe, attributable, and economically usable.",
                cta1: "View Our Solutions",
                cta2: "Partner With Us"
            },
            identity: {
                tag: "WHAT WE DO",
                title: "As AI-generated content becomes the default, trust becomes the bottleneck.",
                problems: [
                    "Platforms can't verify what's real.",
                    "Creators can't prove ownership.",
                    "Markets can't route value correctly."
                ],
                solution: "HOLO STUDIO exists to solve this.",
                approach: "We don't build a single product. We build one trust layer, expressed across safety, media, gaming, and markets."
            },
            proofWorks: {
                tag: "PROOF IT WORKS",
                title: "This is not a concept. This is working infrastructure.",
                stats: {
                    detection: { val: "88.89%", label: "AI-generated content detection accuracy" },
                    latency: { val: "<10ms", label: "Real-time verification latency" },
                    roc: { val: "98.9%", label: "ROC AUC" },
                    garm: { val: "100%", label: "GARM brand safety accuracy" }
                },
                footer: "Deployed, benchmarked, and production-ready."
            },
            whyNow: {
                tag: "WHY NOW",
                title: "AI verification is no longer optional.",
                context: "The brand safety market stopped at classification. Regulation is forcing verification.",
                facts: [
                    "EU AI Act enforcement begins August 2026",
                    "Fines up to 7% of global revenue",
                    "AI-generated media is scaling faster than moderation or law",
                    "Platforms are becoming legally and reputationally liable"
                ],
                deadline: "August 2026",
                warning: "18 months. That's the window to build trust infrastructure before enforcement hits."
            },
            costOfInaction: {
                tag: "THE COST OF INACTION",
                title: "Without trust infrastructure, everyone loses.",
                impacts: [
                    { val: "$330M", desc: "Lost from a single deepfake CFO video call" },
                    { val: "68%", desc: "Of consumers permanently distrust brands after unsafe ad placement" }
                ],
                risks: [
                    "Platforms face existential legal and regulatory risk",
                    "Creators lose ownership in an ocean of unverifiable AI content",
                    "Value cannot be routed without provenance"
                ],
                conclusion: "AI without trust doesn't scale. It collapses."
            },
            thesis: {
                tag: "OUR THESIS",
                line1: "Creativity is abundant.",
                line2: "Trust is scarce.",
                line3: "When AI becomes an economic actor, trust becomes infrastructure.",
                intro: "HOLO STUDIO builds that infrastructure through three core primitives:",
                primitives: [
                    { name: "Safety", desc: "What is allowed" },
                    { name: "Provenance", desc: "Who created it" },
                    { name: "Value Routing", desc: "Who gets paid" }
                ]
            },
            business_intro: {
                tag: "PRODUCTS",
                title: "One Trust Layer. Four Engines."
            },
            validation: {
                tag: "VALIDATION",
                title: "Proven traction. Industry validation.",
                items: [
                    { title: "Seedify AI Hackathon", desc: "1st Place" },
                    { title: "NVIDIA Inception", desc: "Official Member" },
                    { title: "Google Cloud", desc: "Ecosystem Partner" },
                    { title: "AppWorks · OnePiece Labs", desc: "Global Accelerators" },
                    { title: "Alchemy · Story Protocol", desc: "Major Grants" }
                ]
            },
            diagram: {
                title: "One Company, Four Products",
                desc: "HOLO STUDIO executes Safety, Provenance, and Distribution as a unified portfolio."
            },
            research: {
                title: "Core Research Areas",
                sub: "Defining the Standards for the Autonomous Age",
                items: [
                    {
                        icon: Shield,
                        title: "Adversarial Defense",
                        desc: "Next-gen defenses against prompt injection and jailbreaking in multimodal LLMs.",
                        tags: ["Safety", "LLM Security"]
                    },
                    {
                        icon: Microscope,
                        title: "Proof of Creation",
                        desc: "Cryptographic attribution standards for generative content (EIP-7007 extension).",
                        tags: ["Provenance", "Cryptography"]
                    },
                    {
                        icon: Globe,
                        title: "Agent Economy",
                        desc: "Economic models for autonomous agent interaction and value exchange.",
                        tags: ["Economics", "Game Theory"]
                    }
                ]
            },
            roadmap: {
                tag: "ROADMAP",
                title: "From foundation to standard.",
                subtitle: "Each milestone strengthens the trust layer for autonomous AI.",
                viewAll: "Full Schedule",
                items: [
                    { 
                        id: "poc",
                        title: "PoC Protocol v1", 
                        date: "Q4 2025", 
                        status: "current",
                        desc: "Standard for verifiable AI provenance & IP lineage",
                        details: "Implementing EIP-7007 compatible verification for generative assets. Mainnet deployment.",
                        tags: ["Protocol", "Security", "Mainnet"]
                    },
                    { 
                        id: "memeping",
                        title: "MemePing v2", 
                        date: "Q1 2026", 
                        status: "upcoming",
                        desc: "Cross-platform impact tracking",
                        details: "Real-time impact tracking across Twitter, Reddit, & Farcaster.",
                        tags: ["Analytics", "AI", "Social"]
                    },
                    { 
                        id: "stockhoo",
                        title: "Stockhoo Launch", 
                        date: "Q1 2026", 
                        status: "upcoming",
                        desc: "Zone-based market intelligence",
                        details: "Public launch of Stockhoo web and mobile apps. On-chain verification for trader reputation.",
                        tags: ["Fintech", "Social", "Market"]
                    },
                    { 
                        id: "elememetal",
                        title: "EleMEMEtal Launch", 
                        date: "Q2 2026", 
                        status: "future",
                        desc: "AI-native PvP with provenance",
                        details: "Global launch. Full UGC editor release allowing players to create and trade verified assets.",
                        tags: ["Game", "UGC", "AI"]
                    }
                ]
            },
            closing: {
                tag: "CLOSING",
                line1: "AI is moving fast. Trust infrastructure isn't.",
                line2: "HOLO STUDIO is building the missing layer that allows AI content to be used, owned, and monetized responsibly.",
                line3: "We don't manage content. We verify reality.",
                cta1: "Invest / Partner",
                cta2: "Enterprise Inquiry"
            }
        },
        ko: {
            hero: {
                tag: "AI 경제의 신뢰 인프라",
                title: "HOLO STUDIO",
                sub: "AI는 무한히 생성합니다. 하지만 검증 없이는 아무것도 가치를 갖지 못합니다.",
                desc: "HOLO STUDIO는 AI 콘텐츠를 안전하고, 귀속 가능하며, 경제적으로 사용 가능하게 만드는 신뢰 레이어를 구축합니다.",
                cta1: "솔루션 보기",
                cta2: "파트너 문의"
            },
            identity: {
                tag: "우리가 하는 일",
                title: "AI 생성 콘텐츠가 기본이 되면서, 신뢰가 병목이 됩니다.",
                problems: [
                    "플랫폼은 무엇이 진짜인지 검증할 수 없습니다.",
                    "창작자는 소유권을 증명할 수 없습니다.",
                    "시장은 가치를 올바르게 전달할 수 없습니다."
                ],
                solution: "HOLO STUDIO는 이를 해결하기 위해 존재합니다.",
                approach: "우리는 단일 제품을 만들지 않습니다. 안전, 미디어, 게임, 시장 전반에 걸쳐 표현되는 하나의 신뢰 레이어를 구축합니다."
            },
            proofWorks: {
                tag: "작동하는 증거",
                title: "이것은 개념이 아닙니다. 작동하는 인프라입니다.",
                stats: {
                    detection: { val: "88.89%", label: "AI 생성 콘텐츠 탐지 정확도" },
                    latency: { val: "<10ms", label: "실시간 검증 지연시간" },
                    roc: { val: "98.9%", label: "ROC AUC" },
                    garm: { val: "100%", label: "GARM 브랜드 안전 정확도" }
                },
                footer: "배포되고, 벤치마크되고, 프로덕션 준비 완료."
            },
            whyNow: {
                tag: "왜 지금인가",
                title: "AI 검증은 더 이상 선택이 아닙니다.",
                context: "브랜드 안전 시장은 분류에서 멈췄습니다. 규제가 검증을 강제하고 있습니다.",
                facts: [
                    "EU AI Act 시행 2026년 8월 시작",
                    "글로벌 매출 7%까지 과징금",
                    "AI 생성 미디어가 규제나 법보다 빠르게 확장 중",
                    "플랫폼들이 법적·평판적 책임을 지게 됨"
                ],
                deadline: "2026년 8월",
                warning: "18개월. 집행 전 신뢰 인프라를 구축할 수 있는 시간입니다."
            },
            costOfInaction: {
                tag: "방치의 대가",
                title: "신뢰 인프라 없이는 모두가 잃습니다.",
                impacts: [
                    { val: "$330M", desc: "단일 딥페이크 CFO 화상회의로 인한 손실" },
                    { val: "68%", desc: "불안전한 광고 배치 후 브랜드를 영구히 불신하는 소비자" }
                ],
                risks: [
                    "플랫폼은 존재적 법적·규제 리스크에 직면",
                    "창작자는 검증 불가능한 AI 콘텐츠의 바다에서 소유권을 잃음",
                    "출처 증명 없이는 가치가 전달될 수 없음"
                ],
                conclusion: "신뢰 없는 AI는 확장되지 않습니다. 무너집니다."
            },
            thesis: {
                tag: "우리의 테제",
                line1: "창의성은 풍부합니다.",
                line2: "신뢰는 희소합니다.",
                line3: "AI가 경제 주체가 될 때, 신뢰는 인프라가 됩니다.",
                intro: "HOLO STUDIO는 세 가지 핵심 요소를 통해 이 인프라를 구축합니다:",
                primitives: [
                    { name: "안전", desc: "무엇이 허용되는가" },
                    { name: "출처 증명", desc: "누가 만들었는가" },
                    { name: "가치 전달", desc: "누가 보상받는가" }
                ]
            },
            business_intro: {
                tag: "프로덕트",
                title: "하나의 신뢰 레이어. 네 개의 엔진."
            },
            validation: {
                tag: "검증",
                title: "검증된 트랙션. 산업 검증.",
                items: [
                    { title: "Seedify AI Hackathon", desc: "1st Place" },
                    { title: "NVIDIA Inception", desc: "Official Member" },
                    { title: "Google Cloud", desc: "Ecosystem Partner" },
                    { title: "AppWorks · OnePiece Labs", desc: "Global Accelerators" },
                    { title: "Alchemy · Story Protocol", desc: "Major Grants" }
                ]
            },
            diagram: {
                title: "THE STACK",
                desc: "검증에서 시작해 경제로 확장합니다. 하나의 스택."
            },
            research: {
                title: "핵심 리서치 분야",
                sub: "자율 에이전트 시대를 위한 표준 연구",
                items: [
                    {
                        icon: Shield,
                        title: "적대적 방어 (Adversarial Defense)",
                        desc: "멀티모달 LLM의 프롬프트 인젝션 및 탈옥 방지를 위한 차세대 방어 기술 개발.",
                        tags: ["안전", "LLM 보안"]
                    },
                    {
                        icon: Microscope,
                        title: "생성 증명 (Proof of Creation)",
                        desc: "생성형 콘텐츠를 위한 암호학적 출처 증명 표준 (EIP-7007 확장).",
                        tags: ["출처증명", "암호학"]
                    },
                    {
                        icon: Globe,
                        title: "에이전트 경제 (Agent Economy)",
                        desc: "자율 에이전트 간 가치 교환 모델 연구.",
                        tags: ["경제", "게임이론"]
                    }
                ]
            },
            roadmap: {
                tag: "로드맵",
                title: "기초에서 표준으로.",
                subtitle: "각 마일스톤은 자율 AI를 위한 신뢰 레이어를 강화합니다.",
                viewAll: "전체 일정 보기",
                items: [
                    { 
                        id: "poc",
                        title: "PoC 프로토콜 v1", 
                        date: "2025년 4분기", 
                        status: "current",
                        desc: "검증 가능한 AI 출처 및 IP 계보 표준.",
                        details: "생성형 자산을 위한 EIP-7007 호환 검증 구현. 가스 최적화된 검증 증명과 함께 메인넷 배포.",
                        tags: ["프로토콜", "보안", "메인넷"]
                    },
                    { 
                        id: "memeping",
                        title: "MemePing v2", 
                        date: "2026년 1분기", 
                        status: "upcoming",
                        desc: "크로스 플랫폼 영향력 추적.",
                        details: "Twitter, Reddit, Farcaster 실시간 영향력 추적.",
                        tags: ["분석", "AI", "소셜"]
                    },
                    { 
                        id: "stockhoo",
                        title: "Stockhoo 런칭", 
                        date: "2026년 1분기", 
                        status: "upcoming",
                        desc: "Zone 기반 시장 인텔리전스.",
                        details: "Stockhoo 웹 및 모바일 앱 퍼블릭 런칭. 트레이더 평판 및 '수익 증명(Proof of Profit)'을 위한 온체인 검증 통합.",
                        tags: ["핀테크", "소셜", "마켓"]
                    },
                    { 
                        id: "elememetal",
                        title: "EleMEMEtal 런칭", 
                        date: "2026년 2분기", 
                        status: "future",
                        desc: "출처 증명이 적용된 AI 네이티브 게임.",
                        details: "EleMEMEtal 글로벌 런칭. 플레이어가 검증된 게임 자산을 생성하고 거래할 수 있는 완전한 UGC 에디터 공개.",
                        tags: ["게임", "UGC", "AI"]
                    }
                ]
            },
            closing: {
                tag: "마무리",
                line1: "AI는 빠르게 움직입니다. 신뢰 인프라는 그렇지 않습니다.",
                line2: "HOLO STUDIO는 AI 콘텐츠를 책임감 있게 사용, 소유, 수익화할 수 있도록 하는 누락된 레이어를 구축하고 있습니다.",
                line3: "우리는 콘텐츠를 관리하지 않습니다. 현실을 검증합니다.",
                cta1: "투자 / 파트너",
                cta2: "기업 문의"
            }
        }
    };

    const t = content[language];

    const techContent = {
        en: {
            intro: {
                main_pre: "We provide the ",
                main_bold: "audit trails, IP protection, and payment rails",
                main_post: " that turn chaotic AI generation into a trusted asset class.",
                sub_pre: "For enterprises, this means ",
                sub_bold1: "compliance and safety",
                sub_mid: ". For creators, it means ",
                sub_bold2: "ownership and revenue",
                sub_post: "."
            },
            title: "Core Infrastructure",
            sub: "Agent Action Verification Stack",
            pipeline: {
                title: "6-Step Verification Pipeline",
                steps: [
                    { name: "Agent Input Analysis", desc: "Multi-modal prompt & intent inspection" },
                    { name: "Autonomous AI Action", desc: "Real-time content synthesis" },
                    { name: "Media Guardrails", desc: "Sub-second visual, audio, and semantic validation" },
                    { name: "Decentralized Consensus", desc: "Community arbitration for edge-case resolution" },
                    { name: "Verifiable Provenance", desc: "Immutable on-chain proof of origin and execution" },
                    { name: "Economic Output Layer", desc: "Engine-ready, safety-cleared assets for digital economies" }
                ]
            },
            depin: {
                tag: "DePIN GPU MESH",
                title: "The Engine of Trust",
                desc: "Verification must be cheaper than generation. We built a decentralized GPU mesh to drive the marginal cost of safety toward zero.",
                features: [
                    { icon: Network, title: "Agent-Native Scalability", desc: "10,000+ consumer and enterprise nodes unified under one verification layer." },
                    { icon: Cpu, title: "90% Cost Reduction", desc: "Optimized MIG slicing makes trust affordable at global scale." },
                    { icon: Database, title: "Sovereign Infrastructure", desc: "Community-owned. Censorship-resistant. Platform-independent." }
                ]
            }
        },
        ko: {
            intro: {
                main_pre: "우리는 무질서한 AI 생성을 신뢰할 수 있는 자산으로 전환하는 ",
                main_bold: "감사 추적, IP 보호, 결제 레일",
                main_post: "을 제공합니다.",
                sub_pre: "기업에게는 ",
                sub_bold1: "컴플라이언스와 안전",
                sub_mid: "을, 창작자에게는 ",
                sub_bold2: "소유권과 수익",
                sub_post: "을 보장합니다."
            },
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
                tag: "DePIN GPU 메쉬",
                title: "신뢰의 엔진",
                desc: "검증 비용은 생성 비용보다 저렴해야 합니다. 우리는 안전성의 한계 비용을 0으로 만들기 위해 탈중앙화 GPU 메쉬를 구축했습니다.",
                features: [
                    { icon: Network, title: "멈추지 않는 확장성", desc: "10,000+ 소비자 및 기업용 노드를 단일 검증 레이어로 통합." },
                    { icon: Cpu, title: "90% 비용 절감", desc: "최적화된 MIG 슬라이싱으로 모든 창작자가 감당 가능한 검증 비용 실현." },
                    { icon: Database, title: "주권 인프라", desc: "빅테크가 아닌 커뮤니티가 소유하며, 검열에 저항하는 인프라." }
                ]
            }
        }
    };

    const tech = techContent[language];

    const [activeStage, setActiveStage] = useState(0);

    const products = [
        {
            id: "aidguardian",
            name: "AiD Guardian",
            tag: { en: "Enterprise Safety Engine", ko: "검증 엔진" },
            desc: { 
                en: "Real-time liability protection for platforms. We filter toxic AI content with <10ms latency, ensuring brand safety and GARM compliance.",
                ko: "AI 콘텐츠 탐지. 브랜드 안전. 규제 준수. 모든 것의 시작점. 88.89% AI 탐지 정확도 · GARM 8카테고리 전체 지원 · EU AI Act 대응"
            },
            features: {
                en: ["Risk Mitigation", "Latency < 10ms", "Regulatory Compliance"],
                ko: ["리스크 완화", "지연시간 < 10ms", "규제 준수"]
            },
            image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/cc0228bec_2025-12-171042431.png",
            color: "text-blue-400",
            borderColor: "border-blue-400",
            glowColor: "shadow-blue-400/50",
            bgGradient: "from-blue-500",
            path: "/AidGuardian",
            primaryBtn: { en: "Request Demo", ko: "데모 요청" },
            secondaryBtn: { en: "Integration", ko: "도입 문의" }
        },
        {
            id: "playarts",
            name: "PlayArts",
            tag: { en: "IP Provenance Protocol", ko: "출처 증명 프로토콜" },
            desc: {
                en: "The standard for verifiable AI assets. We cryptographically bind ownership and origin to content at the moment of generation.",
                ko: "검증된 콘텐츠에 소유권을 부여합니다. 생성 → 검증 → 소유권 → 수익화. 생성 시점 암호학적 서명 · 파생물 자동 추적 · 로열티 자동 정산"
            },
            features: {
                en: ["IP Protection", "On-Chain Evidence", "Royalty Routing"],
                ko: ["IP 보호", "온체인 증거", "로열티 분배"]
            },
            image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/81cf8f3b2_2025-12-17105846.png",
            color: "text-yellow-400",
            borderColor: "border-yellow-400",
            glowColor: "shadow-yellow-400/50",
            bgGradient: "from-yellow-500",
            path: "/PlayArts",
            primaryBtn: { en: "Partner", ko: "파트너십" },
            secondaryBtn: { en: "Read Spec", ko: "기술 명세" }
        },
        {
            id: "elememetal",
            name: "EleMEMEtal",
            tag: { en: "Web3 Gaming Showcase", ko: "게임 쇼케이스" },
            desc: {
                en: "Demonstrating the protocol in action. A fully on-chain battle arena where every asset is user-generated, verified, and traded.",
                ko: "프로토콜이 실제로 작동하는 증거. 모든 에셋이 AI 생성, 검증, 거래되는 온체인 배틀 아레나."
            },
            features: {
                en: ["Protocol Demo", "Asset Ownership", "Safe UGC"],
                ko: ["프로토콜 데모", "자산 소유권", "안전한 UGC"]
            },
            image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/9692fcde2_2025-12-1463649.png",
            color: "text-pink-400",
            borderColor: "border-pink-400",
            glowColor: "shadow-pink-400/50",
            bgGradient: "from-pink-500",
            path: "/Elememetal",
            primaryBtn: { en: "View Economy", ko: "경제 구조" },
            secondaryBtn: { en: "For Publishers", ko: "퍼블리셔용" }
        },
        {
            id: "stockhoo",
            name: "Stockhoo",
            tag: { en: "Zone-Based Market Intelligence", ko: "트레이딩 쇼케이스" },
            desc: {
                en: "Verifiable reputation for AI trading signals. We bring on-chain proof of profit to social market intelligence.",
                ko: "수익 주장이 아닌 증명. 온체인 수익 기록이 있는 AI 트레이딩 시그널."
            },
            features: {
                en: ["Verified Signals", "Proof of Profit", "AI Strategy"],
                ko: ["검증된 시그널", "수익 증명", "AI 전략"]
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
        { icon: Trophy, color: "text-yellow-400", bg: "bg-yellow-400/10" },
        { icon: Rocket, color: "text-blue-400", bg: "bg-blue-400/10" },
        { icon: Medal, color: "text-slate-300", bg: "bg-slate-300/10" },
        { icon: Award, color: "text-purple-400", bg: "bg-purple-400/10" }
    ];

    const milestones = t.milestones.items.map((item, idx) => ({
        ...item,
        icon: milestoneConfig[idx]?.icon || Trophy,
        color: milestoneConfig[idx]?.color || "text-white",
        bg: milestoneConfig[idx]?.bg || "bg-white/5"
    }));

    const [currentSection, setCurrentSection] = useState(0);
    
    const observeSection = (el, index) => {
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setCurrentSection(index);
            },
            { threshold: 0.5 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    };

    return (
        <motion.div 
            ref={containerRef}
            style={{ backgroundColor }}
            className={`font-sans relative ${
                theme === 'dark' 
                    ? 'text-white selection:bg-indigo-500/30' 
                    : 'text-neutral-900 selection:bg-orange-200'
            }`}>
            <SEO 
                title="Home" 
                description={t.hero.sub} 
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "HOLO STUDIO",
                    "url": typeof window !== 'undefined' ? window.location.origin : '',
                    "logo": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/84a15b48f_a-sleek-modern-logo-design-featuring-the_SMuLZaSWTXC5gHfZms6l4g_nbGlpkO2SJKMVbyEcJBYDA2.JPEG",
                    "description": t.hero.sub
                }}
            />

            {/* Sticky Background Container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none">
                {/* Fixed Global Background Layer */}
                <div className="absolute inset-0 z-0">
                    <CosmicBackground key={`cosmic-${theme}`} theme={theme} />
                    <Background3D key={`bg3d-${theme}`} theme={theme} />
                    <ScrollMotionBackground key={`scroll-${theme}`} theme={theme} />
                    
                    <motion.div 
                        className="absolute inset-0 z-10"
                        style={{
                            background: theme === 'dark' 
                                ? useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(79, 70, 229, 0.08), transparent 40%)`
                                : useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(139, 92, 246, 0.06), transparent 60%)`
                        }}
                    />
                </div>

                {/* Dynamic Background Effects per Section */}
                <AnimatePresence mode="wait">
                    {currentSection === 0 && (
                        <motion.div
                            key="hero-bg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 z-20"
                        >
                            {theme === 'dark' && (
                                <>
                                    <div className="absolute top-20 left-[10%] w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '4s' }} />
                                    <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '5s' }} />
                                </>
                            )}
                        </motion.div>
                    )}
                    {currentSection === 1 && (
                        <motion.div
                            key="numbers-bg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 z-20"
                        >
                            {theme === 'dark' && (
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
                            )}
                        </motion.div>
                    )}
                    {currentSection === 2 && (
                        <motion.div
                            key="why-bg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 z-20"
                        >
                            {theme === 'dark' && (
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />
                            )}
                        </motion.div>
                    )}
                    {currentSection === 3 && (
                        <motion.div
                            key="challenge-bg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 z-20"
                        >
                            {theme === 'dark' && (
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-[120px]" />
                            )}
                        </motion.div>
                    )}
                    {currentSection === 4 && (
                        <motion.div
                            key="thesis-bg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 z-20"
                        >
                            {theme === 'dark' && (
                                <>
                                    <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px]" />
                                    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]" />
                                </>
                            )}
                        </motion.div>
                    )}
                    {currentSection === 5 && (
                        <motion.div
                            key="products-bg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 z-20"
                        >
                            {theme === 'dark' && (
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
                            )}
                        </motion.div>
                    )}
                    {currentSection === 6 && (
                        <motion.div
                            key="milestones-bg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 z-20"
                        >
                            {theme === 'dark' && (
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]" />
                            )}
                        </motion.div>
                    )}
                    {currentSection === 7 && (
                        <motion.div
                            key="roadmap-bg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 z-20"
                        >
                            {theme === 'dark' && (
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
                            )}
                        </motion.div>
                    )}
                    {currentSection === 8 && (
                        <motion.div
                            key="contact-bg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 z-20"
                        >
                            {theme === 'dark' && (
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px]" />
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Scrollable Content Overlay */}
            <div className="relative z-30 -mt-[100vh]">
                {/* Hero Section */}
                <section className="min-h-screen flex flex-col items-center justify-center px-6" ref={(el) => observeSection(el, 0)}>
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className={`inline-block px-5 py-2 mb-8 rounded-full text-xs md:text-sm font-bold tracking-wide uppercase border ${
                                theme === 'dark'
                                    ? 'border-indigo-500/30 bg-indigo-500/10 text-indigo-400'
                                    : 'bg-gradient-to-r from-cyan-100/80 via-violet-100/80 to-pink-100/80 border-violet-300/40 text-violet-900 backdrop-blur-sm'
                            }`}>
                                {t.hero.tag}
                            </div>
                            {theme === 'dark' ? (
                                <MouseGlowText
                                    as={motion.h1}
                                    glowColor="rgba(99, 102, 241, 0.8)"
                                    secondaryGlowColor="rgba(168, 85, 247, 0.5)"
                                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 md:mb-8 leading-[1.1]"
                                >
                                    {t.hero.title}
                                </MouseGlowText>
                            ) : (
                                <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 md:mb-8 leading-[1.1] text-neutral-900">
                                    {t.hero.title}
                                </motion.h1>
                            )}
                            <motion.p 
                                className={`text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed mb-4 ${
                                    theme === 'dark' ? 'text-neutral-100' : 'text-neutral-900 font-bold'
                                }`}
                            >
                                {t.hero.sub}
                            </motion.p>
                            <motion.p 
                                className={`text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8 md:mb-12 ${
                                    theme === 'dark' ? 'text-neutral-200' : 'text-neutral-700'
                                }`}
                            >
                                {t.hero.desc}
                            </motion.p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className={`group rounded-full px-8 h-12 text-base font-bold border-0 transition-all hover:scale-105 ${
                                    theme === 'dark'
                                        ? 'bg-white text-black hover:bg-neutral-200 shadow-[0_0_30px_rgba(255,255,255,0.3)]'
                                        : 'bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 text-white shadow-lg'
                                }`} onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}>
                                    {t.hero.cta1}
                                </Button>
                                <Button variant="outline" size="lg" className={`rounded-full px-8 h-12 text-base font-bold transition-all hover:scale-105 ${
                                    theme === 'dark'
                                        ? 'border-neutral-800 text-white hover:bg-white/10 bg-transparent'
                                        : 'border-neutral-300 text-neutral-900 hover:bg-neutral-100 bg-white shadow-sm'
                                }`}>
                                    {t.hero.cta2}
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* By The Numbers Section */}
                <section className={`min-h-screen flex flex-col items-center justify-center border-y px-6 ${
                    theme === 'dark' ? 'bg-black/20 border-white/5' : 'bg-neutral-100/40 border-neutral-300/30'
                }`} ref={(el) => observeSection(el, 1)}>
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="text-center mb-16">
                            <h2 className={`text-sm font-mono mb-6 uppercase tracking-widest font-bold ${
                                theme === 'dark' ? 'text-indigo-500' : 'text-violet-700'
                            }`}>
                                {language === 'en' ? 'PROVEN PERFORMANCE' : '검증된 성과'}
                            </h2>
                            {theme === 'dark' ? (
                                <MouseGlowText
                                    as="h3"
                                    glowColor="rgba(99, 102, 241, 0.8)"
                                    className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight"
                                >
                                    {language === 'en' ? 'By the Numbers' : '수치로 보는 성과'}
                                </MouseGlowText>
                            ) : (
                                <h3 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight bg-gradient-to-r from-cyan-600 via-violet-600 to-pink-600 bg-clip-text text-transparent">
                                    {language === 'en' ? 'By the Numbers' : '수치로 보는 성과'}
                                </h3>
                            )}
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16 text-center">
                            {Object.values(t.market).map((stat, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className={`text-3xl md:text-4xl font-black mb-2 ${
                                        theme === 'dark' ? 'text-white' : 'text-neutral-900'
                                    }`}>{stat.val}</div>
                                    <div className={`text-xs uppercase tracking-wider font-bold ${
                                        theme === 'dark' ? 'text-neutral-200' : 'text-neutral-700'
                                    }`}>{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                        
                        <div className={`border-t pt-12 ${theme === 'dark' ? 'border-white/5' : 'border-neutral-300/50'}`}>
                            <p className={`text-center text-sm uppercase tracking-widest font-bold mb-8 ${
                                theme === 'dark' ? 'text-neutral-200' : 'text-neutral-600'
                            }`}>BACKED BY</p>
                            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                                <span className={`font-black text-lg ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>NVIDIA Inception</span>
                                <span className={`font-black text-lg ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>Google Cloud</span>
                                <span className={`font-black text-lg ${theme === 'dark' ? 'text-blue-400' : 'text-cyan-600'}`}>Alchemy</span>
                                <span className={`font-black text-lg ${theme === 'dark' ? 'text-orange-500' : 'text-violet-600'}`}>AppWorks</span>
                                <span className={`font-black text-lg ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>STORY Protocol</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Now Section */}
                <section className={`min-h-screen flex items-center justify-center border-y px-6 ${
                    theme === 'dark' ? 'bg-black/20 border-white/5' : 'bg-neutral-50/50 border-neutral-300/30'
                }`} ref={(el) => observeSection(el, 2)}>
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className={`text-sm font-mono mb-12 uppercase tracking-widest font-bold ${
                            theme === 'dark' ? 'text-orange-500' : 'text-orange-700'
                        }`}>
                            {language === 'en' ? 'Why Now' : '왜 지금인가'}
                        </h2>
                        {theme === 'dark' ? (
                            <MouseGlowText
                                as="h3"
                                glowColor="rgba(249, 115, 22, 0.8)"
                                className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight"
                            >
                                {language === 'en' 
                                    ? 'AI verification is no longer optional.' 
                                    : 'AI 검증은 더 이상 선택이 아닙니다.'}
                            </MouseGlowText>
                        ) : (
                            <h3 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                                {language === 'en' 
                                    ? 'AI verification is no longer optional.' 
                                    : 'AI 검증은 더 이상 선택이 아닙니다.'}
                            </h3>
                        )}
                        <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed ${
                            theme === 'dark' ? 'text-neutral-200' : 'text-neutral-700'
                        }`}>
                            {language === 'en'
                                ? 'The $13B brand safety market stopped at "classification." EU AI Act enforcement begins August 2026 — with fines up to 7% of global revenue.'
                                : '7조원 브랜드 안전 시장은 "분류"에서 멈췄습니다. EU AI Act는 2026년 8월 시행되며, 위반 시 글로벌 매출 7%까지 과징금이 부과됩니다.'}
                        </p>
                        <div className={`inline-block px-8 py-4 rounded-2xl border ${
                            theme === 'dark' ? 'bg-orange-500/10 border-orange-500/30' : 'bg-orange-100 border-orange-300'
                        }`}>
                            <div className={`text-5xl md:text-6xl font-black mb-2 ${
                                theme === 'dark' ? 'text-orange-400' : 'text-orange-600'
                            }`}>{t.regulatory.date}</div>
                            <div className={`text-sm font-bold ${
                                theme === 'dark' ? 'text-orange-300' : 'text-orange-700'
                            }`}>{t.regulatory.warning}</div>
                        </div>
                    </div>
                </section>

                {/* The Challenge Section */}
                <section className={`min-h-screen flex items-center justify-center border-y px-6 ${
                    theme === 'dark' ? 'bg-black/20 border-white/5' : 'bg-white border-neutral-300/30'
                }`} ref={(el) => observeSection(el, 3)}>
                    <div className="max-w-6xl mx-auto w-full">
                        <div className="mb-16 text-center max-w-4xl mx-auto">
                            <h2 className={`text-sm font-mono mb-12 uppercase tracking-widest font-bold ${
                                theme === 'dark' ? 'text-red-500' : 'text-red-700'
                            }`}>
                                {language === 'en' ? 'The Cost of Inaction' : '방치의 대가'}
                            </h2>
                            {theme === 'dark' ? (
                                <MouseGlowText
                                    as="h3"
                                    glowColor="rgba(239, 68, 68, 0.8)"
                                    className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight"
                                >
                                    {language === 'en'
                                        ? 'Without trust infrastructure, everyone loses.'
                                        : '신뢰 인프라 없이는 모두가 잃습니다.'}
                                </MouseGlowText>
                            ) : (
                                <h3 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">
                                    {language === 'en'
                                        ? 'Without trust infrastructure, everyone loses.'
                                        : '신뢰 인프라 없이는 모두가 잃습니다.'}
                                </h3>
                            )}
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            {t.cost.items.slice(0, 2).map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className={`p-6 rounded-2xl border text-center ${
                                        theme === 'dark'
                                            ? 'bg-black/30 border-red-500/20'
                                            : 'bg-red-50/50 border-red-200'
                                    }`}
                                >
                                    <div className={`text-3xl md:text-4xl font-black mb-2 ${
                                        theme === 'dark' ? 'text-red-400' : 'text-red-600'
                                    }`}>{item.val}</div>
                                    <p className={`text-sm ${
                                        theme === 'dark' ? 'text-neutral-200' : 'text-neutral-700'
                                    }`}>{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {t.problem.cards.map((card, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`p-6 rounded-xl border ${
                                        theme === 'dark'
                                            ? 'bg-black/40 border-white/10'
                                            : 'bg-white border-neutral-200'
                                    }`}
                                >
                                    <h4 className={`text-lg font-black mb-2 ${
                                        theme === 'dark' ? 'text-white' : 'text-neutral-900'
                                    }`}>{card.title}</h4>
                                    <p className={`text-sm leading-relaxed ${
                                        theme === 'dark' ? 'text-neutral-200' : 'text-neutral-700'
                                    }`}>{card.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Company Thesis Section */}
                <section className={`min-h-screen flex items-center justify-center border-y px-6 ${
                    theme === 'dark' ? 'bg-black/20 border-white/5' : 'bg-neutral-100/40 border-neutral-300/30'
                }`} ref={(el) => observeSection(el, 4)}>
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className={`text-sm font-mono mb-12 uppercase tracking-widest font-bold ${
                            theme === 'dark' ? 'text-neutral-200' : 'text-violet-700'
                        }`}>
                            {t.thesis.label}
                        </h2>
                        
                        <div className="mb-20">
                            {language === 'en' ? (
                                <>
                                    <p className={`text-3xl md:text-5xl lg:text-7xl font-black leading-tight mb-6 ${
                                        theme === 'dark' ? 'text-white' : 'text-neutral-900'
                                    }`}>
                                        Creativity is abundant.
                                    </p>
                                    {theme === 'dark' ? (
                                        <MouseGlowText
                                            as="p"
                                            glowColor="rgba(99, 102, 241, 0.9)"
                                            className="text-4xl md:text-6xl lg:text-8xl font-black leading-tight mb-8"
                                        >
                                            Trust is scarce.
                                        </MouseGlowText>
                                    ) : (
                                        <p className="text-4xl md:text-6xl lg:text-8xl font-black leading-tight mb-8 bg-gradient-to-r from-cyan-600 via-violet-600 to-pink-600 bg-clip-text text-transparent">
                                            Trust is scarce.
                                        </p>
                                    )}
                                    <p className={`text-2xl md:text-3xl lg:text-4xl font-bold leading-tight ${
                                        theme === 'dark' ? 'text-neutral-200' : 'text-neutral-700'
                                    }`}>
                                        When AI becomes an economic actor,<br/>
                                        <span className={theme === 'dark' ? 'text-indigo-400' : 'text-violet-600'}>
                                            trust becomes infrastructure.
                                        </span>
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p className={`text-3xl md:text-5xl lg:text-7xl font-black leading-tight mb-6 ${
                                        theme === 'dark' ? 'text-white' : 'text-neutral-900'
                                    }`}>
                                        더 이상 희소한 자원은 창의성이 아닙니다.
                                    </p>
                                    {theme === 'dark' ? (
                                        <MouseGlowText
                                            as="p"
                                            glowColor="rgba(99, 102, 241, 0.9)"
                                            className="text-4xl md:text-6xl lg:text-8xl font-black leading-tight mb-8"
                                        >
                                            바로 신뢰입니다.
                                        </MouseGlowText>
                                    ) : (
                                        <p className="text-4xl md:text-6xl lg:text-8xl font-black leading-tight mb-8 bg-gradient-to-r from-cyan-600 via-violet-600 to-pink-600 bg-clip-text text-transparent">
                                            바로 신뢰입니다.
                                        </p>
                                    )}
                                </>
                            )}
                        </div>

                        <div className={`flex flex-wrap justify-center gap-6 md:gap-12 text-base md:text-lg font-mono font-bold ${
                            theme === 'dark' ? 'text-neutral-200' : 'text-neutral-800'
                        }`}>
                            {t.thesis.keywords.map((kw, i) => (
                                <motion.span 
                                    key={i} 
                                    className="flex items-center gap-3 cursor-default"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <span className={`w-3 h-3 rounded-full ${
                                        theme === 'dark' 
                                            ? ['bg-indigo-500', 'bg-purple-500', 'bg-orange-500'][i]
                                            : ['bg-cyan-400', 'bg-violet-400', 'bg-pink-400'][i]
                                    }`} />
                                    {kw}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Products Section - Keep existing scrollytelling implementation */}
                <section id="products" className={`relative border-y ${
                    theme === 'dark' ? 'border-white/5' : 'border-neutral-300/30'
                }`} ref={(el) => observeSection(el, 5)}>
                    <div className="relative md:absolute top-0 left-0 w-full pt-20 pb-10 px-6 z-10 pointer-events-none text-center md:text-left md:pl-20">
                         <h2 className={`text-xl font-heavy uppercase tracking-widest mb-2 ${
                             theme === 'dark' ? 'text-neutral-200' : 'text-neutral-900'
                         }`}>{t.business_intro.title}</h2>
                         <p className={`text-xl ${
                             theme === 'dark' ? 'text-neutral-200' : 'text-neutral-700'
                         }`}>{t.business_intro.sub}</p>
                    </div>

                    <div className="hidden md:flex sticky top-0 h-screen w-full overflow-hidden items-center justify-center md:justify-start md:pl-20 pointer-events-none">
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
                                        {theme === 'dark' && (
                                            <>
                                                <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] ${prod.bgGradient} via-[#050505] to-[#050505] opacity-40`} />
                                                <div className={`absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t ${prod.bgGradient} to-transparent opacity-10`} />
                                            </>
                                        )}
                                        
                                        <div className={`absolute bottom-10 left-10 text-[13vw] font-black ${prod.color} leading-none select-none text-left tracking-tighter ${
                                            theme === 'dark' ? 'opacity-20 mix-blend-screen' : 'opacity-15 mix-blend-multiply'
                                        }`}>
                                            {prod.name.toUpperCase()}
                                        </div>
                                        
                                        <div className="absolute top-1/2 left-0 md:left-24 transform -translate-y-1/2 w-full md:w-[45vw] h-[50vh] md:h-[60vh] flex items-center justify-center p-6">
                                            <div className={`relative w-full h-full rounded-3xl overflow-hidden border-2 ${prod.borderColor} shadow-[0_0_100px_-20px_rgba(0,0,0,0.5)] ${prod.glowColor} ${
                                                theme === 'dark' ? 'bg-neutral-900/50 backdrop-blur-sm' : 'bg-white'
                                            }`}>
                                                {theme === 'dark' && (
                                                    <div className={`absolute inset-0 bg-gradient-to-br ${prod.bgGradient} to-transparent opacity-10`} />
                                                )}
                                                
                                                <div className="w-full h-full flex items-center justify-center p-8 md:p-12 relative z-10">
                                                    <img 
                                                        src={prod.image} 
                                                        alt={prod.name} 
                                                        className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]" 
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>

                    <div className="relative z-20 mt-0 md:-mt-[100vh]">
                    {products.map((prod, idx) => {
                        const ref = useRef(null);
                        const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

                        useEffect(() => {
                            if (isInView) setActiveStage(idx);
                        }, [isInView, idx]);

                        return (
                            <div key={idx} ref={ref} className="min-h-auto py-12 md:py-0 md:h-screen w-full flex items-end md:items-center justify-center md:justify-end px-4 md:px-24 pointer-events-none">
                                <motion.div 
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="max-w-md w-full pointer-events-auto"
                                >
                                    <TiltCard className={`p-6 md:p-8 rounded-3xl border ${
                                        theme === 'dark'
                                            ? 'bg-black/40 border-white/10 backdrop-blur-xl'
                                            : 'bg-white border-neutral-200 shadow-md'
                                    }`}>
                                        <div className="md:hidden mb-6 rounded-xl overflow-hidden border aspect-video">
                                            <img src={prod.image} alt={prod.name} className="w-full h-full object-contain p-4" />
                                        </div>

                                        <div className={`text-xs font-bold uppercase ${prod.color} mb-4`}>
                                            {prod.tag[language]}
                                        </div>

                                        <h3 className={`text-3xl md:text-4xl font-black mb-4 ${
                                            theme === 'dark' ? 'text-white' : 'text-neutral-900'
                                        }`}>
                                            {prod.name}
                                        </h3>

                                        <p className={`leading-relaxed mb-6 text-sm md:text-base ${
                                            theme === 'dark' ? 'text-neutral-200' : 'text-neutral-700'
                                        }`}>
                                            {prod.desc[language]}
                                        </p>

                                        <div className="grid grid-cols-1 gap-2 mb-6">
                                            {prod.features[language].map((feat, i) => (
                                                <div key={i} className={`px-3 py-2 rounded-xl text-xs border ${
                                                    theme === 'dark'
                                                        ? 'bg-black/40 text-neutral-200 border-white/5'
                                                        : 'bg-neutral-50 text-neutral-900 border-neutral-900/20'
                                                }`}>
                                                    {feat}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex gap-4">
                                           <Link to={createPageUrl(prod.path.substring(1))} className="flex-1">
                                               <Button className={`w-full h-12 rounded-full text-sm font-bold ${
                                                   theme === 'dark'
                                                       ? `${prod.color.replace('text-', 'bg-').replace('400', '600')} text-white`
                                                       : 'bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 text-white'
                                               }`}>
                                                   {prod.primaryBtn[language]}
                                               </Button>
                                           </Link>
                                        </div>
                                    </TiltCard>
                                </motion.div>
                            </div>
                        );
                    })}
                    </div>
                </section>

                {/* Milestones Section */}
                <section id="proof" className={`min-h-screen flex items-center justify-center border-y px-6 ${
                    theme === 'dark' ? 'bg-black/20 border-white/5' : 'bg-neutral-100/40 border-neutral-300/30'
                }`} ref={(el) => observeSection(el, 6)}>
                    <div className="max-w-7xl mx-auto w-full py-20">
                        <div className="mb-16 text-center max-w-4xl mx-auto">
                            <h2 className={`text-sm font-mono mb-12 uppercase tracking-widest font-bold ${
                                theme === 'dark' ? 'text-yellow-500' : 'text-orange-700'
                            }`}>
                                {language === 'en' ? 'VALIDATION' : '검증'}
                            </h2>
                            {theme === 'dark' ? (
                                <MouseGlowText
                                    as="h3"
                                    glowColor="rgba(234, 179, 8, 0.8)"
                                    className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
                                >
                                    {t.milestones.title}
                                </MouseGlowText>
                            ) : (
                                <h3 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
                                    {t.milestones.title}
                                </h3>
                            )}
                            <p className={`text-lg md:text-xl font-medium ${
                                theme === 'dark' ? 'text-neutral-200' : 'text-neutral-700'
                            }`}>
                                {t.milestones.sub}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {milestones.map((m, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`p-8 rounded-2xl border ${
                                        theme === 'dark'
                                            ? 'bg-black/40 border-white/10'
                                            : 'bg-white border-neutral-200 shadow-md'
                                    }`}
                                >
                                    <div className={`w-12 h-12 rounded-lg ${m.bg} flex items-center justify-center mb-6`}>
                                        <m.icon className={`w-6 h-6 ${m.color}`} />
                                    </div>
                                    <div className={`text-lg font-black mb-2 ${
                                        theme === 'dark' ? 'text-white' : 'text-neutral-900'
                                    }`}>{m.title}</div>
                                    <div className={`text-sm font-medium ${
                                        theme === 'dark' ? 'text-neutral-200' : 'text-neutral-700'
                                    }`}>{m.desc}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Roadmap Section */}
                <section id="roadmap" className="relative" ref={(el) => observeSection(el, 7)}>
                    <Roadmap 
                        items={t.roadmap.items} 
                        title={t.roadmap.title} 
                        viewAllText={t.roadmap.viewAll} 
                    />
                </section>

                {/* Contact Section */}
                <section className={`min-h-screen flex items-center justify-center border-t px-6 ${
                    theme === 'dark' 
                        ? 'bg-gradient-to-t from-[#050505] to-[#050505]/80 border-white/5'
                        : 'bg-gradient-to-br from-neutral-100 via-violet-50/40 to-cyan-50/40 border-neutral-300/30'
                }`} ref={(el) => observeSection(el, 8)}>
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className={`text-sm font-mono mb-12 uppercase tracking-widest font-bold ${
                            theme === 'dark' ? 'text-indigo-500' : 'text-violet-700'
                        }`}>
                            {language === 'en' ? 'JOIN THE FUTURE' : '함께 만들어가요'}
                        </h2>
                        {theme === 'dark' ? (
                            <MouseGlowText
                                as="h3"
                                glowColor="rgba(99, 102, 241, 0.9)"
                                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-tight"
                            >
                                {t.contact.title}
                            </MouseGlowText>
                        ) : (
                            <h3 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-tight bg-gradient-to-r from-cyan-600 via-violet-600 to-pink-600 bg-clip-text text-transparent">
                                {t.contact.title}
                            </h3>
                        )}
                        <p className={`text-xl md:text-2xl font-medium mb-12 ${
                            theme === 'dark' ? 'text-neutral-200' : 'text-neutral-700'
                        }`}>
                            {t.contact.sub}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to={createPageUrl("Contact")}>
                                <Button size="lg" className={`rounded-full px-12 h-16 text-lg font-bold border-0 transition-all hover:scale-105 ${
                                    theme === 'dark'
                                        ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_40px_rgba(79,70,229,0.4)]'
                                        : 'bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 text-white shadow-xl'
                                }`}>
                                    {t.contact.cta1}
                                </Button>
                            </Link>
                            <Button variant="outline" size="lg" className={`rounded-full px-12 h-16 text-lg font-bold transition-all hover:scale-105 ${
                                theme === 'dark'
                                    ? 'border-neutral-800 text-white hover:bg-white/10 bg-transparent'
                                    : 'border-violet-300 text-neutral-900 hover:bg-white/60 bg-white/40 backdrop-blur-md shadow-lg'
                            }`}>
                                {t.contact.cta2}
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </motion.div>
    );
}