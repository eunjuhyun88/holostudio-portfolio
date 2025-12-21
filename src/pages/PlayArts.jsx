import React from 'react';
import BusinessLayout from '../components/BusinessLayout';
import PlayArtsVisual from '../components/interactive/PlayArtsVisual';
import { useLanguage } from '@/components/LanguageContext';
import { useTheme } from '@/components/ThemeContext';
import { Fingerprint, Network, Scale, Database, Code, Globe, Copyright, Share2, Coins } from 'lucide-react';

export default function PlayArts() {
    const { language } = useLanguage();
    const { theme } = useTheme();

    const content = {
        en: {
            tag: <span className="font-bold"><span className={theme === 'dark' ? 'text-lime-400' : 'text-lime-700'}>Trust Layer: Provenance + Value</span> | <span className={theme === 'dark' ? 'text-lime-300' : 'text-lime-600'}>The Immutable Record</span></span>,
            primaryButtonText: "Launch App",
            oneLiner: <span className={`font-bold ${theme === 'dark' ? 'text-lime-400' : 'text-lime-700'}`}>The protocol that guarantees provenance and value routing for AI content.</span>,
            story: (
                <>
                    <p className="mb-6 text-lg md:text-xl leading-relaxed text-neutral-300">
                        <span className="text-white font-bold">Immutable Provenance. Automatic Value Routing.</span>
                    </p>
                    <p className="mb-6 text-lg md:text-xl leading-relaxed text-neutral-300">
                        Infinite content generation creates an attribution crisis. Creators are erased; platforms monopolize value. 
                        We do not ask "who made it"—we prove it.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-neutral-300">
                        PlayArts cryptographically anchors provenance at the moment of generation. It is the "Git for AI Content," ensuring that every piece of media carries its history and value logic on-chain.
                    </p>
                </>
            ),
            problemPoints: [
                {
                    title: "Attribution Crisis",
                    description: "Creators lose ownership as AI models mimic style without credit."
                },
                {
                    title: "Value Leakage",
                    description: "Platforms capture 100% of viral value. Prompters and remixers get nothing."
                },
                {
                    title: "Provenance Gap",
                    description: "No standard exists to verify the 'Who, What, and How' of AI content."
                }
            ],
            solutionSteps: [
                {
                    title: "Context Anchoring (MCP)",
                    description: "Model Context Passport captures generation context at source."
                },
                {
                    title: "Sentinel Verification",
                    description: "Distributed nodes verify origin via Perceptual Hashing."
                },
                {
                    title: "Value Routing",
                    description: "Smart contracts automatically distribute rewards to contributors."
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
                    description: "Proof of ownership for prompt engineering and output."
                },
                {
                    title: "Meme Creators",
                    description: "Tracking of viral spread and monetization of impact."
                },
                {
                    title: "Enterprise Brands",
                    description: "IP protection and asset authenticity verification."
                }
            ],
            businessModel: "Verification Fees (Node Revenue) + Protocol Transaction Fees + B2B SDK Licensing.",
            roadmap: [
                {
                    quarter: "1H 2025",
                    status: "in_progress",
                    title: "Foundation",
                    items: ["Sentinel v3.0", "MCP Registry v1.0", "MemePing v1.0"]
                },
                {
                    quarter: "2H 2025",
                    status: "upcoming",
                    title: "Expansion",
                    items: ["Strong PoC (On-chain)", "Public Node Beta", "Cross-chain"]
                },
                {
                    quarter: "2026",
                    status: "upcoming",
                    title: "Decentralization",
                    items: ["Permissionless Nodes", "DAO Governance", "ZK-PoC"]
                }
            ],
            customerStories: []
        },
        ko: {
            tag: <span className="font-bold"><span className={theme === 'dark' ? 'text-lime-400' : 'text-lime-700'}>Trust Layer: Provenance + Value</span> | <span className={theme === 'dark' ? 'text-lime-300' : 'text-lime-600'}>불변의 출처 기록</span></span>,
            primaryButtonText: "앱 실행",
            oneLiner: <span className={`font-bold ${theme === 'dark' ? 'text-lime-400' : 'text-lime-700'}`}>AI 콘텐츠의 출처를 증명하고 가치의 경로를 확정하는 프로토콜.</span>,
            story: (
                <>
                    <p className="mb-6 text-lg md:text-xl leading-relaxed text-neutral-300">
                        <span className="text-white font-bold">불변의 출처 증명. 자동화된 가치 라우팅.</span>
                    </p>
                    <p className="mb-6 text-lg md:text-xl leading-relaxed text-neutral-300">
                        무한한 콘텐츠 생성은 귀속의 위기를 초래했습니다. 창작자는 지워지고, 플랫폼이 가치를 독점합니다.
                        우리는 "누가 만들었는가"를 묻지 않습니다. 증명합니다.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-neutral-300">
                        PlayArts는 생성 시점에 출처를 암호학적으로 고정합니다. 이것은 "AI 콘텐츠를 위한 Git"이며, 모든 미디어가 자신의 역사와 가치 분배 로직을 온체인에 영구적으로 담도록 보장합니다.
                    </p>
                </>
            ),
            problemPoints: [
                {
                    title: "귀속의 위기",
                    description: "창작자의 스타일이 동의 없이 모방되어도 크레딧을 받지 못합니다."
                },
                {
                    title: "가치 유출",
                    description: "플랫폼이 바이럴 콘텐츠의 가치를 100% 독점합니다."
                },
                {
                    title: "출처의 공백",
                    description: "AI 콘텐츠의 '누가, 무엇을, 어떻게'를 검증할 표준이 없습니다."
                }
            ],
            solutionSteps: [
                {
                    title: "맥락 앵커링 (MCP)",
                    description: "Model Context Passport로 생성 맥락을 소스 단계에서 포착합니다."
                },
                {
                    title: "센티넬 검증",
                    description: "분산 노드가 지각 해싱으로 기원과 무결성을 검증합니다."
                },
                {
                    title: "가치 라우팅",
                    description: "스마트 계약이 원작자와 기여자에게 자동으로 보상을 분배합니다."
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
                    description: "프롬프트 엔지니어링 및 창작물에 대한 소유권 증명."
                },
                {
                    title: "밈 크리에이터",
                    description: "바이럴 확산 추적 및 영향력 수익화."
                },
                {
                    title: "엔터프라이즈 브랜드",
                    description: "IP 권리 보호 및 자산 진위 검증."
                }
            ],
            businessModel: "검증 수수료 (노드 수익) + 프로토콜 거래 수수료 + B2B SDK 라이선싱.",
            roadmap: [
                {
                    quarter: "2025 상반기",
                    status: "in_progress",
                    title: "기반 구축",
                    items: ["Sentinel v3.0", "MCP 레지스트리 v1.0", "MemePing v1.0"]
                },
                {
                    quarter: "2025 하반기",
                    status: "upcoming",
                    title: "확장",
                    items: ["Strong PoC (온체인)", "퍼블릭 노드 베타", "크로스체인"]
                },
                {
                    quarter: "2026",
                    status: "upcoming",
                    title: "탈중앙화",
                    items: ["무허가 노드", "DAO 거버넌스", "ZK-PoC"]
                }
            ],
            customerStories: []
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
                        <p className="text-neutral-300 leading-relaxed mb-6">
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
                        <p className="text-neutral-300 leading-relaxed mb-4">
                            {language === 'en'
                                ? "Every asset includes a cryptographically signed JSON manifest containing the generation parameters. This allows for 'Recipe' trading, where the prompt itself becomes a tradable asset."
                                : "모든 자산에는 생성 매개변수가 포함된 암호학적으로 서명된 JSON 매니페스트가 포함됩니다. 이를 통해 프롬프트 자체가 거래 가능한 자산이 되는 '레시피' 거래가 가능해집니다."}
                        </p>
                        <div className="p-4 bg-[#0A0A0A] rounded-xl border border-white/10 overflow-x-auto custom-scrollbar">
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