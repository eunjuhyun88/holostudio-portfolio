import React from 'react';
import BusinessLayout from '../components/BusinessLayout';
import AidGuardianDemo from '../components/interactive/AidGuardianDemo';
import { useLanguage } from '@/components/LanguageContext';
import { Shield, Eye, FileText, Zap, Server, Lock, Scan, Activity, AlertTriangle } from 'lucide-react';

export default function AidGuardian() {
    const { language } = useLanguage();

    const content = {
        en: {
            tag: <span><span className="text-blue-400">Trust Layer: Safety</span> | <span className="text-cyan-400">The Security Standard</span></span>,
            primaryButtonText: "Launch Dashboard",
            oneLiner: <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">The absolute barrier against toxic AI content. Multi-modal verification at scale.</span>,
            story: (
                <>
                    <p className="mb-6 text-lg md:text-xl leading-relaxed text-neutral-300">
                        <span className="text-white font-bold">Content Safety is Non-Negotiable.</span>
                    </p>
                    <p className="mb-6 text-lg md:text-xl leading-relaxed text-neutral-300">
                        The explosion of AI-generated content has made safety a survival issue for all platforms.
                        EU AI Act regulations, GARM brand safety requirements, and the spread of deepfakes require a new standard.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-neutral-300">
                        AiD Guardian is that standard. We analyze image, video, audio, and text simultaneously to enforce safety and detect AI generation.
                    </p>
                </>
            ),
            problemPoints: [
                {
                    title: "Regulatory Tsunami",
                    description: "EU AI Act transparency obligations are mandatory. Fines up to 7% of global revenue."
                },
                {
                    title: "Brand Safety Crisis",
                    description: "68% of consumers withdraw trust when ads appear near toxic content."
                },
                {
                    title: "Big Tech Void",
                    description: "Explicit GARM compliance is missing from major cloud providers. We fill that gap."
                }
            ],
            solutionSteps: [
                {
                    title: "Regulatory Compliance",
                    description: "Internalized EU AI Act transparency, HITL, and Audit Logging in the architecture."
                },
                {
                    title: "GARM Standard",
                    description: "Precision detection of 11 harmful categories aligned with global advertising standards."
                },
                {
                    title: "AI Detection",
                    description: "Identification of Deepfake & AI content with machine-readable tagging."
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
                { value: "100%", label: "Brand Safety Accuracy" },
                { value: "<10ms", label: "CLIP Latency" },
                { value: "86.9%", label: "Violence Recall" },
                { value: "98.9%", label: "AI Detection AUC" }
            ],
            features: [
                {
                    title: "Multi-Modal Analysis",
                    description: "Simultaneous analysis of Image (CLIP), Video (Frame-by-frame), Audio (Whisper), and Text.",
                    icon: Scan
                },
                {
                    title: "GARM Compliance",
                    description: "Full support for GARM's 8 safety categories including hate speech, adult content, and violence.",
                    icon: Shield
                },
                {
                    title: "AI & Deepfake Detection",
                    description: "98.86% ROC AUC accuracy on Sora, Runway, Veo generated content.",
                    icon: Eye
                }
            ],
            specs: [
                { label: "Architecture", value: "Open Core (Apache 2.0)" },
                { label: "Latency", value: "15.3ms (Avg Dashboard)" },
                { label: "Deployment", value: "Cloud / On-Premise" },
                { label: "Compliance", value: "EU AI Act / GARM" }
            ],
            detailedSpecs: (
                <div className="space-y-8">
                    <div>
                        <h4 className="text-xl font-bold text-white mb-4">Multi-Modal Safety Pipeline</h4>
                        <p className="text-neutral-300 leading-relaxed mb-6">
                            Our architecture processes inputs through concurrent analysis streams. Video frames are sampled at 2Hz for visual risk, while audio is transcribed via Whisper and analyzed for toxicity. 
                            Text overlays are OCR'd and cross-referenced.
                        </p>
                    </div>
                </div>
            ),
            useCases: [
                {
                    title: "Live Streaming & Gaming",
                    description: "Real-time toxic content filtering."
                },
                {
                    title: "Ad Tech & Media",
                    description: "GARM compliance for brand value protection."
                },
                {
                    title: "Enterprise Compliance",
                    description: "EU AI Act response, risk elimination."
                }
            ],
            businessModel: "Buyer-Based Open Core: Free core, paid Enterprise Compliance/SSO.",
            roadmap: [
                {
                    quarter: "2025 Q1-Q2",
                    status: "in_progress",
                    title: "Phase 1",
                    items: ["Naver/Kakao POC", "AI Act Compliance", "KISA Certification"]
                },
                {
                    quarter: "2025 Q3-Q4",
                    status: "upcoming",
                    title: "Phase 2",
                    items: ["EU DSA Targeting", "DoubleVerify Partnership", "$500K ARR"]
                },
                {
                    quarter: "2026",
                    status: "upcoming",
                    title: "Phase 3",
                    items: ["Open Source Viral", "North America Expansion", "$3-5M ARR"]
                }
            ],
            customerStories: []
        },
        ko: {
            tag: "Trust Layer: Safety | 콘텐츠 안전성의 기준",
            primaryButtonText: "대시보드 실행",
            oneLiner: "유해 AI 콘텐츠에 대한 절대적인 방어벽. 멀티모달 검증의 표준입니다.",
            story: (
                <>
                    <p className="mb-6 text-lg md:text-xl leading-relaxed text-neutral-300">
                        <span className="text-white font-bold">안전은 타협할 수 없습니다.</span>
                    </p>
                    <p className="mb-6 text-lg md:text-xl leading-relaxed text-neutral-300">
                        AI 생성 콘텐츠의 폭발적인 증가는 모든 플랫폼의 생존 문제입니다.
                        EU AI Act 규제, GARM 브랜드 세이프티 요구, 딥페이크의 확산은 새로운 기준을 요구합니다.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-neutral-300">
                        AiD Guardian이 바로 그 기준입니다. 이미지, 영상, 오디오, 텍스트를 동시에 분석하여 유해성을 차단하고 AI 생성을 식별합니다. 이것은 단순한 필터링이 아닌, 완전한 Trust Layer의 시작입니다.
                    </p>
                </>
            ),
            problemPoints: [
                {
                    title: "규제 해일",
                    description: "EU AI Act 투명성 의무는 필수입니다. 위반 시 글로벌 매출 최대 7%의 벌금이 부과됩니다."
                },
                {
                    title: "브랜드 세이프티 위기",
                    description: "유해 콘텐츠 옆에 광고가 노출될 때, 소비자의 68%는 브랜드에 대한 신뢰를 철회합니다."
                },
                {
                    title: "빅테크의 공백",
                    description: "주요 클라우드 제공업체들은 명시적인 GARM 준수를 선언하지 않았습니다. 우리가 그 공백을 메웁니다."
                }
            ],
            solutionSteps: [
                {
                    title: "규제 완벽 대응",
                    description: "EU AI Act 투명성, HITL, 감사 로그를 아키텍처에 내재화하여 법적 리스크를 제거합니다."
                },
                {
                    title: "GARM 표준 적용",
                    description: "11개 유해 콘텐츠 카테고리를 정밀 탐지하여 글로벌 광고 표준을 충족합니다."
                },
                {
                    title: "AI 생성 콘텐츠 탐지",
                    description: "딥페이크 및 AI 생성물 식별과 기계 판독 가능 표시 부착을 보장합니다."
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
                { value: "100%", label: "브랜드 안전성 정확도" },
                { value: "<10ms", label: "CLIP 레이턴시" },
                { value: "86.9%", label: "폭력 콘텐츠 리콜" },
                { value: "98.9%", label: "AI 탐지 ROC AUC" }
            ],
            features: [
                {
                    title: "멀티모달 분석",
                    description: "이미지(CLIP), 비디오(프레임 단위), 오디오(Whisper), 텍스트 동시 분석.",
                    icon: Scan
                },
                {
                    title: "GARM 프레임워크 준수",
                    description: "8대 안전 카테고리 완벽 지원.",
                    icon: Shield
                },
                {
                    title: "AI 및 딥페이크 탐지",
                    description: "Sora, Runway, Veo 등 주요 생성기 98.86% ROC AUC 정확도.",
                    icon: Eye
                }
            ],
            specs: [
                { label: "아키텍처", value: "오픈코어 (Apache 2.0)" },
                { label: "레이턴시", value: "15.3ms (평균)" },
                { label: "배포 방식", value: "클라우드 / 온프레미스" },
                { label: "규제 준수", value: "EU AI Act / GARM" }
            ],
            detailedSpecs: (
                <div className="space-y-8">
                    <div>
                        <h4 className="text-xl font-bold text-white mb-4">심층 멀티모달 안전 파이프라인</h4>
                        <p className="text-neutral-300 leading-relaxed mb-6">
                            당사의 아키텍처는 동시 분석 스트림을 통해 입력을 처리합니다. 비디오 프레임은 시각적 위험을 위해 2Hz로 샘플링되며, 오디오는 Whisper를 통해 텍스트로 변환되어 독성 분석이 수행됩니다.
                        </p>
                    </div>
                </div>
            ),
            useCases: [
                {
                    title: "라이브 스트리밍/게임",
                    description: "실시간 유해 콘텐츠 필터링."
                },
                {
                    title: "광고 및 미디어",
                    description: "GARM 표준 준수로 브랜드 가치 보호."
                },
                {
                    title: "엔터프라이즈 컴플라이언스",
                    description: "EU AI Act 대응, 과징금 리스크 제거."
                }
            ],
            businessModel: "구매자 기반 오픈코어: 핵심 기능 무료, 기업용 유료 라이선싱.",
            roadmap: [
                {
                    quarter: "2025 Q1-Q2",
                    status: "in_progress",
                    title: "Phase 1",
                    items: ["네이버/카카오 POC", "AI 기본법 준수", "KISA 인증"]
                },
                {
                    quarter: "2025 Q3-Q4",
                    status: "upcoming",
                    title: "Phase 2",
                    items: ["EU DSA 타겟팅", "DoubleVerify 파트너십", "$500K ARR"]
                },
                {
                    quarter: "2026",
                    status: "upcoming",
                    title: "Phase 3",
                    items: ["오픈소스 바이럴", "북미 확장", "$3-5M ARR"]
                }
            ],
            customerStories: []
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
            features={c.features}
            specs={c.specs}
            screenshots={c.screenshots}
            stats={c.stats}
            detailedSpecs={c.detailedSpecs}
            useCases={c.useCases}
            businessModel={c.businessModel}
            roadmap={c.roadmap}
            customerStories={c.customerStories}
        />
    );
}