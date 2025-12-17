import React from 'react';
import BusinessLayout from '../components/BusinessLayout';
import AidGuardianDemo from '../components/interactive/AidGuardianDemo';
import { useLanguage } from '@/components/LanguageContext';

export default function AidGuardian() {
    const { language } = useLanguage();

    const content = {
        en: {
            tag: "Enterprise Safety",
            oneLiner: "Imagine if content safety was autonomous and instant.",
            primaryBtn: "Launch Dashboard",
            story: (
                <>
                    <p className="mb-6">
                        Today, enterprises are paralyzed by the risks of generative AI. 
                        Compliance teams are overwhelmed by the volume of content, and traditional safety tools 
                        are blind to the nuances of multi-modal generation. 
                        We built AiD Guardian to bridge this gap.
                    </p>
                    <p>
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
                { caption: "Enterprise Dashboard: Real-time Risk Monitoring" },
                { caption: "GARM-Aligned Categorization System" },
                { caption: "Developer-First API & SDK Documentation" },
                { caption: "Deep Multi-Modal Content Analysis" }
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
                    title: "Video Analysis v2",
                    items: ["Real-time streaming support", "Audio-visual correlation"]
                },
                {
                    quarter: "Q2 2025",
                    title: "Enterprise Suite",
                    items: ["SSO/SAML integration", "Custom policy engine"]
                },
                {
                    quarter: "Q3 2025",
                    title: "Global Certification",
                    items: ["EU AI Act Compliance Audit", "ISO 27001"]
                }
            ]
        },
        ko: {
            tag: "엔터프라이즈 안전",
            oneLiner: "콘텐츠 안전이 자율적이고 즉각적이라면 어떨까요?",
            primaryBtn: "대시보드 실행",
            story: (
                <>
                    <p className="mb-6">
                        오늘날 기업들은 생성형 AI의 위험성 앞에서 마비되어 있습니다.
                        규정 준수 팀은 쏟아지는 콘텐츠의 양에 압도당하고 있으며, 기존의 안전 도구들은
                        멀티모달 생성의 미묘한 차이를 감지하지 못합니다.
                        우리는 이 격차를 해소하기 위해 AiD Guardian을 구축했습니다.
                    </p>
                    <p>
                        GARM 표준에 부합하는 안전 기준과 깊이 있는 멀티모달 분석을 결합하여,
                        귀사의 AI 인프라를 위한 실시간 방패를 제공합니다.
                        이는 단순한 필터가 아닙니다. 귀사의 특정 정책 요구 사항에 적응하는 지능형 규정 준수 엔진입니다.
                    </p>
                </>
            ),
            problemPoints: [
                {
                    title: "규정 준수의 공백",
                    description: "EU AI 법안 및 DSA와 같은 새로운 규제는 현재 도구들이 제공할 수 없는 AI 콘텐츠에 대한 엄격한 투명성과 감사 가능성을 요구합니다."
                },
                {
                    title: "멀티모달 사각지대",
                    description: "표준 텍스트 필터는 이미지, 비디오 프레임, 오디오 트랙에 포함된 유해하거나 규정에 위반되는 콘텐츠를 감지하지 못합니다."
                },
                {
                    title: "설명 불가능한 책임",
                    description: "AI의 결정을 설명할 수 없다면, 명확한 이유 없이 콘텐츠가 차단되거나 플래그 지정될 때 기업은 법적 위험에 직면하게 됩니다."
                }
            ],
            solutionSteps: [
                {
                    title: "수집 및 분해",
                    description: "멀티모달 콘텐츠를 수집하고 이를 텍스트, 시각 프레임, 오디오 세그먼트로 분해하여 세밀하게 분석합니다."
                },
                {
                    title: "분석 및 점수화",
                    description: "당사의 엔진은 특화된 모델을 적용하여 실시간으로 GARM 안전 카테고리 및 맞춤형 기업 정책에 따라 콘텐츠 점수를 매깁니다."
                },
                {
                    title: "집행 및 보고",
                    description: "콘텐츠를 자동으로 차단하거나 플래그를 지정하며, 규정 준수 보고를 위한 불변의 감사 기록을 생성합니다."
                }
            ],
            screenshots: [
                { caption: "엔터프라이즈 대시보드: 실시간 위험 모니터링" },
                { caption: "GARM 기반 분류 시스템" },
                { caption: "개발자 친화적 API 및 SDK 문서" },
                { caption: "심층 멀티모달 콘텐츠 분석" }
            ],
            stats: [
                { value: "Seed", label: "초기 파트너십" },
                { value: "Enterprise / AI", label: "카테고리" },
                { value: "Global", label: "위치" },
                { value: "Holo Studio", label: "파트너" }
            ],
            useCases: [
                {
                    title: "애드테크 플랫폼",
                    description: "유해한 AI 생성 콘텐츠 옆에 광고가 노출되는 것을 방지하여 광고주 브랜드 가치를 보호합니다."
                },
                {
                    title: "UGC 플랫폼",
                    description: "정책을 인지하는 자동화된 AI 에이전트로 수백만 개의 이미지와 비디오에 대한 모더레이션을 확장합니다."
                },
                {
                    title: "엔터프라이즈 GenAI",
                    description: "내부 AI 도구에 안전 레이어를 입혀 규정 위반이나 유해한 결과물 생성을 방지합니다."
                }
            ],
            businessModel: "SaaS 구독 (볼륨별 등급) + 온프레미스 배포를 위한 엔터프라이즈 라이선스.",
            roadmap: [
                {
                    quarter: "2025년 1분기",
                    title: "비디오 분석 v2",
                    items: ["실시간 스트리밍 지원", "오디오-비주얼 상관관계 분석"]
                },
                {
                    quarter: "2025년 2분기",
                    title: "엔터프라이즈 스위트",
                    items: ["SSO/SAML 통합", "맞춤형 정책 엔진"]
                },
                {
                    quarter: "2025년 3분기",
                    title: "글로벌 인증",
                    items: ["EU AI Act 규정 준수 감사", "ISO 27001"]
                }
            ]
        }
    };

    const c = content[language];

    // Merge screenshots URLs with localized captions
    const screenshots = [
        { url: "Live monitoring dashboard showing risk levels across multiple content streams", caption: c.screenshots[0].caption },
        { url: "Content classification interface aligned with GARM safety standards", caption: c.screenshots[1].caption },
        { url: "Documentation hub for API integration and SDK usage", caption: c.screenshots[2].caption },
        { url: "Detailed analysis view decomposing video/audio into safety scores", caption: c.screenshots[3].caption }
    ];

    return (
        <BusinessLayout 
            name="AiD Guardian"
            theme="aidguardian"
            HeroComponent={AidGuardianDemo}
            heroContainerClass="min-h-[1200px]"
            showAnalytics={true}
            tag={c.tag}
            primaryButton={{ text: c.primaryBtn, url: "http://221.148.221.12:7870" }}
            oneLiner={c.oneLiner}
            story={c.story}
            heroImage="AiD Guardian Dashboard: Main interface showing multi-modal safety analysis and compliance scoring"
            problemPoints={c.problemPoints}
            solutionSteps={c.solutionSteps}
            screenshots={screenshots}
            stats={c.stats}
            useCases={c.useCases}
            businessModel={c.businessModel}
            roadmap={c.roadmap}
        />
    );
}