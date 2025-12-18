import React from 'react';
import BusinessLayout from '../components/BusinessLayout';
import AidGuardianDemo from '../components/interactive/AidGuardianDemo';
import { useLanguage } from '@/components/LanguageContext';
import { Shield, Eye, FileText, Zap, Server, Lock, Scan, Activity, AlertTriangle } from 'lucide-react';

export default function AidGuardian() {
    const { language } = useLanguage();

    const content = {
        en: {
            tag: "AI Safety Protocol • Verifiable AI Content • Ecosystem Safety",
            primaryButtonText: "Launch Dashboard",
            oneLiner: "Verifying the origin and integrity of AI-generated content to prevent misinformation and ensure digital ecosystem safety.",
            story: (
                <>
                    <p className="mb-6 text-lg md:text-xl leading-relaxed text-neutral-300">
                        Beyond simple security, we become the foundation of trust guarding the Digital Truth of the AI era.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-neutral-300">
                        By combining GARM-aligned safety standards with deep multi-modal analysis, 
                        we provide a real-time shield for your AI infrastructure. 
                        It's not just a filter; it's an intelligent compliance engine that adapts to your specific policy needs.
                    </p>
                </>
            ),
            problemPoints: [
                {
                    title: "The Compliance Gap",
                    description: "New regulations like the EU AI Act & DSA require strict transparency and auditability for AI content that current tools can't provide."
                },
                {
                    title: "Multi-Modal Blindspots",
                    description: "Standard text filters fail to detect toxic or non-compliant content embedded in Images, Video frames, and Audio tracks."
                },
                {
                    title: "Black Box Liability",
                    description: "Without explainable AI decisions, enterprises face legal risks when content is flagged or blocked without clear reasoning."
                }
            ],
            solutionSteps: [
                {
                    title: "Ingest & Decompose",
                    description: "We ingest multi-modal content and decompose it into text, visual frames, and audio segments for granular analysis."
                },
                {
                    title: "Analyze & Score",
                    description: "Our engine applies specialized models to score content against GARM safety categories and custom enterprise policies in real-time."
                },
                {
                    title: "Enforce & Report",
                    description: "Automatically block or flag content, generating an immutable audit trail for compliance reporting."
                }
            ],
            screenshots: [
                {
                    url: "Live monitoring dashboard showing risk levels across multiple content streams",
                    caption: "Enterprise Dashboard: Real-time Risk Monitoring"
                },
                {
                    url: "Content classification interface aligned with GARM safety standards",
                    caption: "GARM-Aligned Categorization System"
                },
                {
                    url: "Documentation hub for API integration and SDK usage",
                    caption: "Developer-First API & SDK Documentation"
                },
                {
                    url: "Detailed analysis view decomposing video/audio into safety scores",
                    caption: "Deep Multi-Modal Content Analysis"
                }
            ],
            stats: [
                { value: "Seed", label: "Initial Partnership" },
                { value: "Enterprise / AI", label: "Categories" },
                { value: "Global", label: "Location" },
                { value: "Holo Studio", label: "Partner" }
            ],
            useCases: [
                {
                    title: "Ad Tech Platforms",
                    description: "Protect advertiser brand equity by ensuring ads never appear next to toxic AI-generated content."
                },
                {
                    title: "UGC Platforms",
                    description: "Scale moderation for millions of images and videos with automated, policy-aware AI agents."
                },
                {
                    title: "Enterprise GenAI",
                    description: "Wrap internal AI tools with a safety layer to prevent generation of non-compliant or harmful outputs."
                }
            ],
            businessModel: "SaaS Subscription (Tiered by Volume) + Enterprise Licensing for On-Premise Deployment.",
            roadmap: [
                {
                    quarter: "Q1 2025",
                    status: "in_progress",
                    title: "Video Analysis v2",
                    items: ["Real-time streaming support", "Audio-visual correlation"]
                },
                {
                    quarter: "Q2 2025",
                    status: "upcoming",
                    title: "Enterprise Suite",
                    items: ["SSO/SAML integration", "Custom policy engine"]
                },
                {
                    quarter: "Q3 2025",
                    status: "upcoming",
                    title: "Global Certification",
                    items: ["EU AI Act Compliance Audit", "ISO 27001"]
                }
            ],
            customerStories: [
                {
                    quote: "AiD Guardian has completely transformed how we handle user-generated content validation.",
                    author: "Sarah Jin",
                    role: "CTO",
                    company: "MediaFlow Inc."
                },
                {
                    quote: "The verifiable truth layer is essential for our automated news aggregation platform.",
                    author: "David Park",
                    role: "Product Lead",
                    company: "NewsAI"
                }
            ]
        },
        ko: {
            tag: "EU AI Act 준수 • GARM 브랜드 세이프티 • 250억 달러 시장",
            primaryButtonText: "대시보드 실행",
            oneLiner: "규제 압박과 브랜드 안전 요구가 급증하는 250억 달러 규모의 콘텐츠 모더레이션 시장을 선점하는 EU AI Act 및 GARM 준수 솔루션입니다.",
            story: (
                <>
                    <p className="mb-6 text-lg md:text-xl leading-relaxed text-neutral-300">
                        EU AI Act 규제, 광고주들의 GARM 기반 브랜드 세이프티 요구, AI 생성 콘텐츠의 폭발적 증가는 규제 준수형·멀티모달 모더레이션 솔루션에 대한 전례 없는 수요를 창출하고 있습니다.
                    </p>
                    <p className="mb-6 text-lg md:text-xl leading-relaxed text-neutral-300">
                        AiD Guardian은 <span className="text-white font-bold">EU AI Act 규제 대응</span>, <span className="text-white font-bold">GARM 프레임워크 지원</span>, <span className="text-white font-bold">AI 생성 콘텐츠 탐지</span>를 결합하여 독보적인 위치를 점합니다.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-neutral-300">
                        현재 AWS, Google 등 주요 클라우드 플랫폼의 부재로 인한 명확한 퍼스트 무버(First-mover) 기회를 통해, 2030년까지 250억 달러 규모(CAGR 13~14%)로 성장할 글로벌 시장을 공략합니다.
                    </p>
                </>
            ),
            problemPoints: [
                {
                    title: "규제 해일 (EU AI Act)",
                    description: "투명성 의무(Article 50) 위반 시 글로벌 매출의 최대 7% 벌금. 2026년 전면 적용에 대비한 긴급한 컴플라이언스 솔루션이 부재합니다."
                },
                {
                    title: "브랜드 세이프티 위기",
                    description: "GARM 기준(혐오 발언, 딥페이크 등) 미충족 시 광고주 이탈 위험. 유해 콘텐츠 옆 광고 노출 시 소비자 68%가 브랜드 신뢰를 철회합니다."
                },
                {
                    title: "빅테크의 공백",
                    description: "주요 클라우드 사업자 중 누구도 명시적인 GARM 준수나 EU AI Act 대응을 선언하지 않아 시장의 명확한 기회가 존재합니다."
                }
            ],
            solutionSteps: [
                {
                    title: "규제 완벽 대응",
                    description: "EU AI Act의 투명성 의무, Human-in-the-Loop, 감사 로그(Audit Logging) 요건을 아키텍처 레벨에서 내재화하여 법적 리스크를 해소합니다."
                },
                {
                    title: "GARM 표준 적용",
                    description: "성인, 혐오, 딥페이크 등 GARM의 11개 유해 콘텐츠 카테고리를 정밀 탐지하여 글로벌 광고 표준을 충족합니다."
                },
                {
                    title: "AI 생성 콘텐츠 탐지",
                    description: "딥페이크 및 AI 생성 텍스트/이미지를 식별하고 기계 판독 가능 표시를 부착하여 투명성을 보장합니다."
                }
            ],
            screenshots: [
                {
                    url: "Live monitoring dashboard showing risk levels across multiple content streams",
                    caption: "엔터프라이즈 대시보드: 실시간 위험 모니터링"
                },
                {
                    url: "Content classification interface aligned with GARM safety standards",
                    caption: "GARM 기반 분류 시스템"
                },
                {
                    url: "Documentation hub for API integration and SDK usage",
                    caption: "개발자 중심 API 및 SDK 문서"
                },
                {
                    url: "Detailed analysis view decomposing video/audio into safety scores",
                    caption: "심층 멀티모달 콘텐츠 분석"
                }
            ],
            stats: [
                { value: "250억 달러", label: "2030년 시장 규모" },
                { value: "18.6%", label: "AI 모더레이션 성장률" },
                { value: "170억 유로", label: "AI 컴플라이언스 시장" },
                { value: "First Mover", label: "GARM/EU AI Act" }
            ],
            useCases: [
                {
                    title: "라이브 스트리밍/게임",
                    description: "18.9%의 높은 성장률을 보이는 라이브 스트리밍 및 게임 플랫폼을 위한 실시간 유해 콘텐츠 필터링."
                },
                {
                    title: "광고 및 미디어",
                    description: "GARM 표준 준수를 통해 브랜드 가치를 보호하고 글로벌 광고주들의 신뢰를 확보."
                },
                {
                    title: "엔터프라이즈 컴플라이언스",
                    description: "EU AI Act 등 강화되는 글로벌 규제에 대응하여 과징금 리스크 제거 및 기업 신뢰도 제고."
                }
            ],
            businessModel: "SaaS 구독 (볼륨별 등급) + 온프레미스 배포를 위한 엔터프라이즈 라이선싱.",
            roadmap: [
                {
                    quarter: "2025년 1분기",
                    status: "in_progress",
                    title: "비디오 분석 v2",
                    items: ["실시간 스트리밍 지원", "오디오-비주얼 상관관계 분석"]
                },
                {
                    quarter: "2025년 2분기",
                    status: "upcoming",
                    title: "엔터프라이즈 스위트",
                    items: ["SSO/SAML 통합", "맞춤형 정책 엔진"]
                },
                {
                    quarter: "2025년 3분기",
                    status: "upcoming",
                    title: "글로벌 인증",
                    items: ["EU AI 법안 준수 감사", "ISO 27001"]
                }
            ],
            customerStories: [
                {
                    quote: "AiD Guardian은 사용자 생성 콘텐츠 검증 방식을 완전히 변화시켰습니다.",
                    author: "Sarah Jin",
                    role: "CTO",
                    company: "MediaFlow Inc."
                },
                {
                    quote: "검증 가능한 진실 레이어는 우리의 자동 뉴스 수집 플랫폼에 필수적입니다.",
                    author: "David Park",
                    role: "Product Lead",
                    company: "NewsAI"
                }
            ]
        }
    };

    const c = content[language] || content.en;

    return (
        <BusinessLayout 
            name="AiD Guardian"
            theme="aidguardian"
            HeroComponent={AidGuardianDemo}
            heroContainerClass="min-h-[1200px]"
            showAnalytics={true}
            tag={c.tag}
            primaryButton={{ text: c.primaryButtonText, url: "http://221.148.221.12:7870" }}
            oneLiner={c.oneLiner}
            story={c.story}
            heroImage="AiD Guardian Dashboard: Main interface showing multi-modal safety analysis and compliance scoring"
            
            problemPoints={c.problemPoints}
            solutionSteps={c.solutionSteps}
            screenshots={c.screenshots}
            stats={c.stats}
            useCases={c.useCases}
            businessModel={c.businessModel}
            roadmap={c.roadmap}
            customerStories={c.customerStories}
        />
    );
}