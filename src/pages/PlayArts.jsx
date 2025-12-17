import React from 'react';
import BusinessLayout from '../components/BusinessLayout';
import PlayArtsVisual from '../components/interactive/PlayArtsVisual';
import { useLanguage } from '@/components/LanguageContext';

export default function PlayArts() {
    const { language } = useLanguage();

    const content = {
        en: {
            tag: "Media Protocol",
            oneLiner: "Imagine if creators truly owned the value they generate.",
            primaryBtn: "Launch App",
            story: (
                <>
                    <p className="mb-6">
                        The AI revolution has created a massive attribution crisis. 
                        Millions of assets are generated daily, yet the original creators and style pioneers 
                        see none of the value. The connection between inspiration and output has been severed.
                    </p>
                    <p>
                        PlayArts restores this link. We are building the provenance layer for the AI era, 
                        ensuring that every piece of media carries its history, its contributors, and its value routing logic on-chain.
                    </p>
                </>
            ),
            problemPoints: [
                {
                    title: "Attribution Crisis",
                    description: "Creators lose ownership as their style is copied by AI models without consent or credit."
                },
                {
                    title: "Value Leakage",
                    description: "Platforms capture 100% of the value from viral AI content, leaving prompters and remixers with nothing."
                },
                {
                    title: "Provenance Gap",
                    description: "No standard exists to verify the 'Who, What, and How' of AI content creation across the web."
                }
            ],
            solutionSteps: [
                {
                    title: "Context Anchoring (MCP)",
                    description: "We capture the generation context (prompt, model, params) at the source via the Model Context Passport."
                },
                {
                    title: "Sentinel Verification",
                    description: "A distributed network of nodes verifies the content's origin and integrity using perceptual hashing."
                },
                {
                    title: "Value Routing",
                    description: "Smart contracts automatically route rewards to the original creator and amplifiers when value is generated."
                }
            ],
            screenshots: [
                { caption: "Protocol Growth & Seed Funding" },
                { caption: "Strategic Roadmap: Protocol Expansion" },
                { caption: "Community Gamification Mechanics" },
                { caption: "Solving the AI Attribution Problem" }
            ],
            stats: [
                { value: "500K+", label: "Users" },
                { value: "1M+", label: "Assets Anchored" },
                { value: "$2M", label: "Seed Round" },
                { value: "99.7%", label: "PoC Accuracy" }
            ],
            useCases: [
                {
                    title: "AI Power Users",
                    description: "Prove ownership of your prompt engineering and creative output."
                },
                {
                    title: "Meme Creators",
                    description: "Track the viral spread of your memes and earn from their impact."
                },
                {
                    title: "Enterprise Brands",
                    description: "Secure IP rights and verify the authenticity of brand assets."
                }
            ],
            businessModel: "Verification Fees (Node Revenue) + Protocol Transaction Fees + B2B SDK Licensing.",
            roadmap: [
                {
                    quarter: "Q1-Q2 2025",
                    title: "Foundation Phase",
                    items: ["Sentinel v3.0 Production", "MCP Registry v1.0", "MemePing v1.0 Launch"]
                },
                {
                    quarter: "Q3-Q4 2025",
                    title: "Expansion Phase",
                    items: ["Strong PoC (On-chain)", "Public Node Beta", "Cross-chain Support"]
                },
                {
                    quarter: "2026",
                    title: "Decentralization",
                    items: ["Permissionless Nodes", "DAO Governance", "ZK-PoC Research"]
                }
            ]
        },
        ko: {
            tag: "미디어 프로토콜",
            oneLiner: "창작자가 자신이 만든 가치를 진정으로 소유한다면 어떨까요?",
            primaryBtn: "앱 실행",
            story: (
                <>
                    <p className="mb-6">
                        AI 혁명은 거대한 기여도 위기를 초래했습니다.
                        매일 수백만 개의 자산이 생성되지만, 원작자와 스타일 개척자들은
                        그 가치를 전혀 인정받지 못하고 있습니다. 영감과 결과물 사이의 연결고리가 끊어진 것입니다.
                    </p>
                    <p>
                        PlayArts는 이 연결고리를 복원합니다. 우리는 AI 시대를 위한 출처(Provenance) 레이어를 구축하고 있으며,
                        모든 미디어가 그 역사, 기여자, 그리고 가치 분배 로직을 온체인에 기록하도록 보장합니다.
                    </p>
                </>
            ),
            problemPoints: [
                {
                    title: "기여도 위기",
                    description: "동의나 크레딧 없이 AI 모델이 스타일을 모방함에 따라 창작자들은 소유권을 잃고 있습니다."
                },
                {
                    title: "가치 유출",
                    description: "플랫폼이 바이럴 AI 콘텐츠의 가치를 100% 가져가고, 프롬프트 작성자와 리믹서에게는 아무것도 남지 않습니다."
                },
                {
                    title: "출처 공백",
                    description: "웹 전반에 걸쳐 AI 콘텐츠 생성의 '누가, 무엇을, 어떻게'를 검증할 표준이 존재하지 않습니다."
                }
            ],
            solutionSteps: [
                {
                    title: "컨텍스트 앵커링 (MCP)",
                    description: "Model Context Passport를 통해 생성 컨텍스트(프롬프트, 모델, 매개변수)를 원천에서 캡처합니다."
                },
                {
                    title: "Sentinel 검증",
                    description: "분산 노드 네트워크가 지각 해싱(Perceptual Hashing)을 사용하여 콘텐츠의 기원과 무결성을 검증합니다."
                },
                {
                    title: "가치 라우팅",
                    description: "가치가 생성될 때 스마트 계약이 자동으로 원작자와 확산 기여자에게 보상을 라우팅합니다."
                }
            ],
            screenshots: [
                { caption: "프로토콜 성장 및 시드 펀딩" },
                { caption: "전략 로드맵: 프로토콜 확장" },
                { caption: "커뮤니티 게이미피케이션 메커니즘" },
                { caption: "AI 기여도 문제 해결 솔루션" }
            ],
            stats: [
                { value: "500K+", label: "사용자" },
                { value: "1M+", label: "앵커링된 자산" },
                { value: "$2M", label: "시드 라운드" },
                { value: "99.7%", label: "PoC 정확도" }
            ],
            useCases: [
                {
                    title: "AI 파워 유저",
                    description: "프롬프트 엔지니어링 및 창의적 산출물에 대한 소유권을 증명하세요."
                },
                {
                    title: "밈(Meme) 크리에이터",
                    description: "밈의 바이럴 확산을 추적하고 그 영향력으로부터 수익을 얻으세요."
                },
                {
                    title: "엔터프라이즈 브랜드",
                    description: "IP 권리를 보호하고 브랜드 자산의 진위 여부를 검증하세요."
                }
            ],
            businessModel: "검증 수수료 (노드 수익) + 프로토콜 거래 수수료 + B2B SDK 라이선싱.",
            roadmap: [
                {
                    quarter: "2025년 1-2분기",
                    title: "기반 구축 단계",
                    items: ["Sentinel v3.0 상용화", "MCP 레지스트리 v1.0", "MemePing v1.0 런칭"]
                },
                {
                    quarter: "2025년 3-4분기",
                    title: "확장 단계",
                    items: ["강력한 PoC (온체인)", "퍼블릭 노드 베타", "크로스체인 지원"]
                },
                {
                    quarter: "2026년",
                    title: "탈중앙화",
                    items: ["무허가 노드", "DAO 거버넌스", "ZK-PoC 연구"]
                }
            ]
        }
    };

    const c = content[language];
    
    // Merge screenshots URLs with localized captions
    const screenshots = [
        { url: "Growth metrics dashboard showing asset minting and funding milestones", caption: c.screenshots[0].caption },
        { url: "Timeline visualization of protocol development and ecosystem expansion", caption: c.screenshots[1].caption },
        { url: "Interface showing community rewards and engagement mechanics", caption: c.screenshots[2].caption },
        { url: "Diagram illustrating the solution for attribution and ownership", caption: c.screenshots[3].caption }
    ];

    return (
        <BusinessLayout 
            name="PlayArts"
            theme="playarts"
            HeroComponent={PlayArtsVisual}
            showAnalytics={true}
            tag={c.tag}
            primaryButton={{ text: c.primaryBtn, url: "https://playarts.ai/" }}
            deckUrl="https://docsend.com/view/wdasib73q44ppc3a"
            oneLiner={c.oneLiner}
            story={c.story}
            heroImage="PlayArts Protocol Overview: Visualizing the flow of provenace from creation to value settlement"
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