import React from 'react';
import BusinessLayout from '../components/BusinessLayout';
import AidGuardianDemo from '../components/interactive/AidGuardianDemo';
import { useLanguage } from '@/components/LanguageContext';
import { Shield, Eye, FileText, Zap, Server, Lock, Scan, Activity, AlertTriangle } from 'lucide-react';

export default function AidGuardian() {
    const { language } = useLanguage();

    const content = {
        en: {
            tag: "Trust Layer: Safety | The First Gate of Content Safety",
            primaryButtonText: "Launch Dashboard",
            oneLiner: "The multi-modal verification engine answering the first question of AI content: \"Is it safe?\"",
            story: (
                <>
                    <p className="mb-6 text-lg md:text-xl leading-relaxed text-neutral-300">
                        <span className="text-white font-bold">"Is this content safe?"</span>
                    </p>
                    <p className="mb-6 text-lg md:text-xl leading-relaxed text-neutral-300">
                        With the explosion of AI-generated content, this question has become a survival issue for all platforms and brands.
                        EU AI Act regulations, GARM brand safety requirements, and the spread of deepfakes.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-neutral-300">
                        AiD Guardian answers this. Analyzing image, video, audio, and text simultaneously to detect toxic content and AI generation. Combining with PlayArts' proof of provenance to form a complete Trust Layer.
                    </p>
                </>
            ),
            problemPoints: [
                {
                    title: "Regulatory Tsunami",
                    description: "Fines up to 7% of global revenue for violating EU AI Act transparency obligations."
                },
                {
                    title: "Brand Safety Crisis",
                    description: "68% of consumers withdraw trust when ads appear near toxic content."
                },
                {
                    title: "Big Tech Void",
                    description: "Neither AWS nor Google has declared explicit GARM compliance."
                }
            ],
            solutionSteps: [
                {
                    title: "Regulatory Compliance",
                    description: "EU AI Act transparency, HITL, Audit Logging internalized in architecture."
                },
                {
                    title: "GARM Standard",
                    description: "Precision detection of 11 harmful categories."
                },
                {
                    title: "AI Detection",
                    description: "Deepfake & AI content identification with machine-readable tagging."
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
            tag: "Trust Layer: Safety | 콘텐츠 안전성의 첫 번째 관문",
            primaryButtonText: "대시보드 실행",
            oneLiner: "AI 콘텐츠의 첫 번째 질문 \"안전한가?\"에 답하는 멀티모달 검증 엔진.",
            story: (
                <>
                    <p className="mb-6 text-lg md:text-xl leading-relaxed text-neutral-300">
                        <span className="text-white font-bold">"이 콘텐츠가 안전한가?"</span>
                    </p>
                    <p className="mb-6 text-lg md:text-xl leading-relaxed text-neutral-300">
                        AI 생성 콘텐츠가 폭발적으로 증가하면서, 이 질문은 모든 플랫폼과 브랜드의 생존 문제가 되었습니다.
                        EU AI Act 규제, GARM 브랜드 세이프티 요구, 딥페이크의 확산.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-neutral-300">
                        AiD Guardian은 이 질문에 답합니다. 이미지, 비디오, 오디오, 텍스트를 동시에 분석하여 유해 콘텐츠와 AI 생성물을 탐지합니다. PlayArts의 출처 증명과 결합하여 완전한 Trust Layer를 구성합니다.
                    </p>
                </>
            ),
            problemPoints: [
                {
                    title: "규제 해일",
                    description: "EU AI Act 투명성 의무 위반 시 글로벌 매출 최대 7% 벌금."
                },
                {
                    title: "브랜드 세이프티 위기",
                    description: "유해 콘텐츠 옆 광고 노출 시 소비자 68%가 브랜드 신뢰를 철회."
                },
                {
                    title: "빅테크의 공백",
                    description: "AWS, Google 중 누구도 명시적 GARM 준수를 선언하지 않음."
                }
            ],
            solutionSteps: [
                {
                    title: "규제 완벽 대응",
                    description: "EU AI Act 투명성, HITL, 감사 로그를 아키텍처에 내재화."
                },
                {
                    title: "GARM 표준 적용",
                    description: "11개 유해 콘텐츠 카테고리 정밀 탐지."
                },
                {
                    title: "AI 생성 콘텐츠 탐지",
                    description: "딥페이크 및 AI 생성물 식별, 기계 판독 가능 표시 부착."
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