import React from 'react';
import BusinessLayout from '../components/BusinessLayout';
import AidGuardianDemo from '../components/interactive/AidGuardianDemo';
import { useLanguage } from '@/components/LanguageContext';
import { Shield, Eye, FileText, Zap, Server, Lock, Scan, Activity, AlertTriangle } from 'lucide-react';

export default function AidGuardian() {
    const { language } = useLanguage();

    const content = {
        en: {
            tag: "EU AI Act Compliant • GARM Framework • $25B Market Opportunity",
            primaryButtonText: "Launch Dashboard",
            oneLiner: "Seizing the $25B content moderation market with the only solution combining EU AI Act compliance, GARM framework, and Open Core architecture.",
            story: (
                <>
                    <p className="mb-6 text-lg md:text-xl leading-relaxed text-neutral-300">
                        The convergence of <span className="text-white font-bold">EU AI Act regulations</span>, advertisers' demand for <span className="text-white font-bold">GARM-based brand safety</span>, and the explosion of AI-generated content is creating unprecedented demand for compliant, multi-modal moderation.
                    </p>
                    <p className="mb-6 text-lg md:text-xl leading-relaxed text-neutral-300">
                        AiD Guardian secures a unique position by combining regulatory compliance, GARM support, and AI detection. With major cloud providers like AWS and Google yet to declare explicit GARM or EU AI Act compliance, we have a clear <span className="text-white font-bold">First-Mover Advantage</span>.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-neutral-300">
                        We are targeting a global market projected to reach <span className="text-white font-bold">$25 billion by 2030</span> (CAGR 13-14%), providing the essential infrastructure for the next generation of safe AI.
                    </p>
                </>
            ),
            problemPoints: [
                {
                    title: "Regulatory Tsunami (EU AI Act)",
                    description: "Violating transparency obligations (Article 50) risks fines up to 7% of global revenue. Enterprises lack solutions for the 2026 full enforcement."
                },
                {
                    title: "Brand Safety Crisis",
                    description: "Failing GARM standards (hate speech, deepfakes) risks advertiser exodus. 68% of consumers lose trust when ads appear near toxic content."
                },
                {
                    title: "The Big Tech Void",
                    description: "No major cloud provider currently offers explicit GARM compliance or a dedicated EU AI Act response, creating a massive market gap."
                }
            ],
            solutionSteps: [
                {
                    title: "Regulatory Compliance",
                    description: "Internalizing EU AI Act requirements (Transparency, HITL, Audit Logging) at the architecture level to eliminate legal risks."
                },
                {
                    title: "GARM Standard Alignment",
                    description: "Precision detection of GARM's 11 harmful categories (adult, hate, violence, etc.) to meet global advertising standards."
                },
                {
                    title: "AI Generation Detection",
                    description: "Identifying AI-generated text/images/video (Deepfakes) and applying machine-readable watermarks for transparency."
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
                    description: "Simultaneous analysis of Image (CLIP), Video (Frame-by-frame), Audio (Whisper), and Text for complete context understanding.",
                    icon: Scan
                },
                {
                    title: "GARM Compliance",
                    description: "Full support for GARM's 8 safety categories including hate speech, adult content, and violence to ensure brand safety.",
                    icon: Shield
                },
                {
                    title: "AI & Deepfake Detection",
                    description: "Advanced detection of content generated by Sora, Runway, Veo, etc., with 98.86% ROC AUC accuracy.",
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
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                <div className="text-xs text-indigo-400 font-mono mb-2">INPUT</div>
                                <div className="text-white font-bold">Video / Stream</div>
                            </div>
                            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                <div className="text-xs text-indigo-400 font-mono mb-2">LATENCY</div>
                                <div className="text-white font-bold">~15ms / frame</div>
                            </div>
                            <div className="col-span-2 p-4 bg-white/5 rounded-xl border border-white/10">
                                <div className="text-xs text-indigo-400 font-mono mb-2">OUTPUT</div>
                                <div className="text-white font-bold">Risk Score (0-100) + GARM Categories</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-4">Compliance Layer</h4>
                        <ul className="space-y-3">
                            <li className="flex gap-3 text-neutral-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5" />
                                <span><strong>Audit Logging:</strong> Immutable record of all moderation decisions for EU AI Act Article 50.</span>
                            </li>
                            <li className="flex gap-3 text-neutral-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5" />
                                <span><strong>Explainability:</strong> Vector-based similarity search to provide "why" a content was flagged.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            ),
            useCases: [
                {
                    title: "Live Streaming & Gaming",
                    description: "Real-time filtering for the fastest growing (18.9% CAGR) media formats, protecting user experience and brand safety."
                },
                {
                    title: "Ad Tech & Media",
                    description: "Strict GARM compliance to secure premium ad inventory and protect brand equity from toxic content associations."
                },
                {
                    title: "Enterprise Compliance",
                    description: "Risk-proofing against EU AI Act fines and reputation damage by embedding compliance into the AI stack."
                }
            ],
            businessModel: "Buyer-Based Open Core: Free core features for developers, paid Enterprise Compliance/SSO licensing.",
            roadmap: [
                {
                    quarter: "2025 Q1-Q2",
                    status: "in_progress",
                    title: "Phase 1: Market Entry",
                    items: ["Korean Enterprise POCs", "AI Act Compliance MVP", "KISA Certification"]
                },
                {
                    quarter: "2025 Q3-Q4",
                    status: "upcoming",
                    title: "Phase 2: Global Expansion",
                    items: ["Target EU DSA Platforms", "DoubleVerify Partnership", "$500K ARR Goal"]
                },
                {
                    quarter: "2026",
                    status: "upcoming",
                    title: "Phase 3: Scale Up",
                    items: ["Open Source Viral Growth", "North American Expansion", "$3-5M ARR Goal"]
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
                { value: "100%", label: "브랜드 안전성 정확도" },
                { value: "<10ms", label: "CLIP 레이턴시" },
                { value: "86.9%", label: "폭력 콘텐츠 리콜" },
                { value: "98.9%", label: "AI 탐지 ROC AUC" }
            ],
            features: [
                {
                    title: "멀티모달 분석",
                    description: "이미지(CLIP), 비디오(프레임 단위), 오디오(Whisper), 텍스트를 동시에 분석하여 문맥을 완벽하게 이해합니다.",
                    icon: Scan
                },
                {
                    title: "GARM 프레임워크 준수",
                    description: "혐오 발언, 성인 콘텐츠, 폭력 등 GARM의 8대 안전 카테고리를 완벽하게 지원하여 브랜드 안전성을 보장합니다.",
                    icon: Shield
                },
                {
                    title: "AI 및 딥페이크 탐지",
                    description: "Sora, Runway, Veo 등 주요 생성기로 제작된 콘텐츠를 98.86%의 ROC AUC 정확도로 식별합니다.",
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
                            텍스트 오버레이는 OCR 처리되어 상호 참조됩니다.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                <div className="text-xs text-indigo-400 font-mono mb-2">INPUT</div>
                                <div className="text-white font-bold">Video / Stream</div>
                            </div>
                            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                <div className="text-xs text-indigo-400 font-mono mb-2">LATENCY</div>
                                <div className="text-white font-bold">~15ms / frame</div>
                            </div>
                            <div className="col-span-2 p-4 bg-white/5 rounded-xl border border-white/10">
                                <div className="text-xs text-indigo-400 font-mono mb-2">OUTPUT</div>
                                <div className="text-white font-bold">Risk Score (0-100) + GARM Categories</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-4">컴플라이언스 레이어</h4>
                        <ul className="space-y-3">
                            <li className="flex gap-3 text-neutral-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5" />
                                <span><strong>감사 로그(Audit Logging):</strong> EU AI Act 제50조 준수를 위한 모든 모더레이션 결정의 불변 기록.</span>
                            </li>
                            <li className="flex gap-3 text-neutral-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5" />
                                <span><strong>설명 가능성(Explainability):</strong> 콘텐츠가 플래그된 이유를 제공하기 위한 벡터 기반 유사성 검색.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            ),
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
            businessModel: "구매자 기반 오픈코어 모델: 핵심 기능은 무료 오픈소스로 제공, 기업용 컴플라이언스/SSO 기능은 유료 라이선싱.",
            roadmap: [
                {
                    quarter: "2025 Q1-Q2",
                    status: "in_progress",
                    title: "Phase 1: 한국 시장 진입",
                    items: ["네이버/카카오 POC 진행", "AI 기본법 준수 솔루션", "KISA 인증 추진"]
                },
                {
                    quarter: "2025 Q3-Q4",
                    status: "upcoming",
                    title: "Phase 2: 글로벌 확장",
                    items: ["EU DSA 플랫폼 타겟팅", "DoubleVerify 파트너십", "$500K ARR 목표"]
                },
                {
                    quarter: "2026",
                    status: "upcoming",
                    title: "Phase 3: 스케일업",
                    items: ["오픈소스 커뮤니티 바이럴", "북미 소셜 플랫폼 확장", "$3-5M ARR 달성"]
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