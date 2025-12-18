import React from 'react';
import BusinessLayout from '../components/BusinessLayout';
import PlayArtsVisual from '../components/interactive/PlayArtsVisual';
import { useLanguage } from '@/components/LanguageContext';
import { Fingerprint, Network, Scale, Database, Code, Globe, Copyright, Share2, Coins } from 'lucide-react';

export default function PlayArts() {
    const { language } = useLanguage();

    const content = {
        en: {
            tag: "Value Routing Protocol • Fair Value Distribution • Media Economy",
            primaryButtonText: "Launch App",
            oneLiner: "Ensuring fair and transparent value distribution for content creators and AI in the media economy.",
            story: (
                <>
                    <p className="mb-6 text-lg md:text-xl leading-relaxed text-neutral-300">
                        Redefining the flow of value for a new Media Renaissance where creators and AI coexist.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-neutral-300">
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
                {
                    url: "Growth metrics dashboard showing asset minting and funding milestones",
                    caption: "Protocol Growth & Seed Funding"
                },
                {
                    url: "Timeline visualization of protocol development and ecosystem expansion",
                    caption: "Strategic Roadmap: Protocol Expansion"
                },
                {
                    url: "Interface showing community rewards and engagement mechanics",
                    caption: "Community Gamification Mechanics"
                },
                {
                    url: "Diagram illustrating the solution for attribution and ownership",
                    caption: "Solving the AI Attribution Problem"
                }
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
                    status: "in_progress",
                    title: "Foundation Phase",
                    items: ["Sentinel v3.0 Production", "MCP Registry v1.0", "MemePing v1.0 Launch"]
                },
                {
                    quarter: "Q3-Q4 2025",
                    status: "upcoming",
                    title: "Expansion Phase",
                    items: ["Strong PoC (On-chain)", "Public Node Beta", "Cross-chain Support"]
                },
                {
                    quarter: "2026",
                    status: "upcoming",
                    title: "Decentralization",
                    items: ["Permissionless Nodes", "DAO Governance", "ZK-PoC Research"]
                }
            ],
            customerStories: [
                {
                    quote: "Finally, a way to fairly track and monetize AI-assisted artwork.",
                    author: "Elena R.",
                    role: "Digital Artist",
                    company: "Independent"
                },
                {
                    quote: "PlayArts protocol allows us to license our IP to AI models with confidence.",
                    author: "Kenji S.",
                    role: "Director",
                    company: "Studio 4"
                }
            ]
        },
        ko: {
            tag: "가치 라우팅 프로토콜 • 공정한 가치 분배 • 미디어 경제",
            primaryButtonText: "앱 실행",
            oneLiner: "미디어 경제에서 콘텐츠 제작자와 AI에게 공정하고 투명한 가치 분배를 보장하며, 착취 없이 혁신이 번성하는 창의적인 경제 인프라를 구축합니다.",
            story: (
                <>
                    <p className="mb-6 text-lg md:text-xl leading-relaxed text-neutral-300">
                        창작자와 AI가 공존하는 새로운 미디어 르네상스를 위해, 가치의 흐름을 완전히 재정의합니다.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-neutral-300">
                        PlayArts는 이 연결고리를 복원합니다. 우리는 AI 시대를 위한 출처(Provenance) 레이어를 구축하여,
                        모든 미디어가 그 역사, 기여자, 가치 분배 로직을 온체인 상에 담도록 보장합니다.
                    </p>
                </>
            ),
            problemPoints: [
                {
                    title: "귀속의 위기",
                    description: "창작자들은 AI 모델이 동의나 크레딧 없이 자신의 스타일을 모방함에 따라 소유권을 잃고 있습니다."
                },
                {
                    title: "가치 유출",
                    description: "플랫폼이 바이럴 AI 콘텐츠의 가치를 100% 독점하며, 프롬프트 작성자와 리믹스 제작자는 아무런 보상을 받지 못합니다."
                },
                {
                    title: "출처의 공백",
                    description: "웹 전반에 걸쳐 AI 콘텐츠 생성의 '누가, 무엇을, 어떻게'를 검증할 표준이 존재하지 않습니다."
                }
            ],
            solutionSteps: [
                {
                    title: "맥락 앵커링 (MCP)",
                    description: "Model Context Passport를 통해 생성 맥락(프롬프트, 모델, 파라미터)을 소스 단계에서 포착합니다."
                },
                {
                    title: "센티넬 검증",
                    description: "분산된 노드 네트워크가 지각 해싱(Perceptual Hashing)을 사용하여 콘텐츠의 기원과 무결성을 검증합니다."
                },
                {
                    title: "가치 라우팅",
                    description: "스마트 계약은 가치가 생성될 때 원작자와 확산 기여자에게 자동으로 보상을 분배합니다."
                }
            ],
            screenshots: [
                {
                    url: "Growth metrics dashboard showing asset minting and funding milestones",
                    caption: "프로토콜 성장 및 시드 펀딩"
                },
                {
                    url: "Timeline visualization of protocol development and ecosystem expansion",
                    caption: "전략적 로드맵: 프로토콜 확장"
                },
                {
                    url: "Interface showing community rewards and engagement mechanics",
                    caption: "커뮤니티 게이미피케이션 메커니즘"
                },
                {
                    url: "Diagram illustrating the solution for attribution and ownership",
                    caption: "AI 귀속 문제 해결"
                }
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
                    description: "프롬프트 엔지니어링 및 창작물에 대한 소유권을 증명하세요."
                },
                {
                    title: "밈(Meme) 크리에이터",
                    description: "밈의 바이럴 확산을 추적하고 그 영향력으로부터 수익을 창출하세요."
                },
                {
                    title: "엔터프라이즈 브랜드",
                    description: "IP 권리를 보호하고 브랜드 자산의 진위 여부를 검증하세요."
                }
            ],
            businessModel: "검증 수수료 (노드 수익) + 프로토콜 거래 수수료 + B2B SDK 라이선싱.",
            roadmap: [
                {
                    quarter: "2025년 상반기",
                    status: "in_progress",
                    title: "기반 구축 단계",
                    items: ["Sentinel v3.0 프로덕션", "MCP 레지스트리 v1.0", "MemePing v1.0 출시"]
                },
                {
                    quarter: "2025년 하반기",
                    status: "upcoming",
                    title: "확장 단계",
                    items: ["강력한 PoC (온체인)", "퍼블릭 노드 베타", "크로스체인 지원"]
                },
                {
                    quarter: "2026년",
                    status: "upcoming",
                    title: "탈중앙화",
                    items: ["무허가 노드", "DAO 거버넌스", "ZK-PoC 연구"]
                }
            ],
            customerStories: [
                {
                    quote: "드디어 AI 보조 예술 작품을 공정하게 추적하고 수익화할 수 있는 방법이 생겼습니다.",
                    author: "Elena R.",
                    role: "Digital Artist",
                    company: "Independent"
                },
                {
                    quote: "PlayArts 프로토콜 덕분에 우리 IP를 자신 있게 AI 모델에 라이선스할 수 있습니다.",
                    author: "Kenji S.",
                    role: "Director",
                    company: "Studio 4"
                }
            ]
        }
    };

    const c = content[language] || content.en;

    return (
        <BusinessLayout 
            name="PlayArts"
            theme="playarts"
            HeroComponent={PlayArtsVisual}
            showAnalytics={true}
            tag={c.tag}
            primaryButton={{ text: c.primaryButtonText, url: "https://playarts.ai/" }}
            deckUrl="https://docsend.com/view/wdasib73q44ppc3a"
            oneLiner={c.oneLiner}
            story={c.story}
            heroImage="PlayArts Protocol Overview: Visualizing the flow of provenace from creation to value settlement"
            
            problemPoints={c.problemPoints}
            solutionSteps={c.solutionSteps}
            screenshots={c.screenshots}
            stats={c.stats}
            useCases={c.useCases}
            businessModel={c.businessModel}
            roadmap={c.roadmap}
            customerStories={c.customerStories}
            features={[
                {
                    icon: Fingerprint,
                    title: language === 'en' ? "Immutable Provenance" : "불변의 출처 증명",
                    description: language === 'en' ? "Cryptographic proof of origin for every generated asset." : "생성된 모든 자산에 대한 암호학적 기원 증명."
                },
                {
                    icon: Coins,
                    title: language === 'en' ? "Value Routing" : "가치 라우팅",
                    description: language === 'en' ? "Automated royalty distribution via smart contracts." : "스마트 계약을 통한 자동 로열티 분배."
                },
                {
                    icon: Network,
                    title: language === 'en' ? "Decentralized Verification" : "탈중앙 검증",
                    description: language === 'en' ? "Node network for consensus-based content verification." : "합의 기반 콘텐츠 검증을 위한 노드 네트워크."
                },
                {
                    icon: Copyright,
                    title: language === 'en' ? "IP Protection" : "IP 보호",
                    description: language === 'en' ? "Secure ownership of style and prompt engineering." : "스타일 및 프롬프트 엔지니어링에 대한 안전한 소유권."
                },
                {
                    icon: Share2,
                    title: language === 'en' ? "Viral Tracking" : "바이럴 추적",
                    description: language === 'en' ? "Track asset usage and derivatives across platforms." : "플랫폼 전반에 걸친 자산 사용 및 파생물 추적."
                },
                {
                    icon: Globe,
                    title: language === 'en' ? "Cross-Chain" : "크로스체인",
                    description: language === 'en' ? "Interoperable asset standards across major blockchains." : "주요 블록체인 간 상호 운용 가능한 자산 표준."
                }
            ]}
            specs={[
                {
                    label: language === 'en' ? "Protocol Standard" : "프로토콜 표준",
                    value: "EIP-7007 (Verifiable AI Generated Content)"
                },
                {
                    label: language === 'en' ? "Verification Method" : "검증 방식",
                    value: "Perceptual Hashing (pHash) + Zero-Knowledge Proofs"
                },
                {
                    label: language === 'en' ? "Consensus" : "합의 알고리즘",
                    value: "Proof of Creation (PoC)"
                },
                {
                    label: language === 'en' ? "Throughput" : "처리량",
                    value: "10,000+ Attestations / Second (L2 Scaling)"
                },
                {
                    label: language === 'en' ? "Storage" : "저장소",
                    value: "IPFS / Arweave (Decentralized Storage)"
                }
            ]}
            detailedSpecs={(
                <div className="space-y-8">
                    <div>
                        <h4 className="text-xl font-bold text-white mb-4">{language === 'en' ? "Sentinel Node Verification" : "센티넬 노드 검증"}</h4>
                        <p className="text-neutral-400 leading-relaxed mb-6">
                            {language === 'en'
                                ? "PlayArts utilizes a decentralized network of 'Sentinel' nodes that perform perceptual hashing (pHash) on incoming media. This creates a fingerprint tolerant to minor modifications (compression, resizing) but sensitive to semantic changes, ensuring robust duplicate detection."
                                : "PlayArts는 들어오는 미디어에 대해 지각 해싱(pHash)을 수행하는 '센티넬' 노드의 탈중앙화 네트워크를 활용합니다. 이는 사소한 수정(압축, 크기 조정)에는 관대하지만 의미적 변경에는 민감한 지문을 생성하여 강력한 중복 탐지를 보장합니다."}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 bg-lime-900/10 rounded-xl border border-lime-500/20 text-center">
                                <div className="text-lime-400 font-bold text-2xl mb-1">99.7%</div>
                                <div className="text-xs text-neutral-500 uppercase">Detection Rate</div>
                            </div>
                            <div className="p-4 bg-lime-900/10 rounded-xl border border-lime-500/20 text-center">
                                <div className="text-lime-400 font-bold text-2xl mb-1">&lt;200ms</div>
                                <div className="text-xs text-neutral-500 uppercase">Verification Time</div>
                            </div>
                            <div className="p-4 bg-lime-900/10 rounded-xl border border-lime-500/20 text-center">
                                <div className="text-lime-400 font-bold text-2xl mb-1">ZK-Snark</div>
                                <div className="text-xs text-neutral-500 uppercase">Privacy Proof</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-4">{language === 'en' ? "Model Context Passport (MCP)" : "모델 컨텍스트 여권 (MCP)"}</h4>
                        <p className="text-neutral-400 leading-relaxed mb-4">
                            {language === 'en'
                                ? "Every asset includes a cryptographically signed JSON manifest containing the generation parameters. This allows for 'Recipe' trading, where the prompt itself becomes a tradable asset."
                                : "모든 자산에는 생성 매개변수가 포함된 암호학적으로 서명된 JSON 매니페스트가 포함됩니다. 이를 통해 프롬프트 자체가 거래 가능한 자산이 되는 '레시피' 거래가 가능해집니다."}
                        </p>
                        <div className="p-4 bg-[#0A0A0A] rounded-xl border border-white/10 overflow-x-auto">
                            <pre className="text-xs text-lime-300 font-mono">
{`{
  "mcp_version": "1.0",
  "model": "Stable Diffusion XL",
  "seed": 482910482,
  "prompt_hash": "0x7f83...2a1b",
  "contributors": [
    { "role": "prompter", "address": "0x123...", "share": 0.8 },
    { "role": "model_provider", "address": "0x456...", "share": 0.2 }
  ],
  "signature": "0x98a..."
}`}
                            </pre>
                        </div>
                    </div>
                </div>
            )}
        />
    );
}