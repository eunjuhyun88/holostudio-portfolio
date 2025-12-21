import React from 'react';
import BusinessLayout from '../components/BusinessLayout';
import ElememetalDemo from '../components/interactive/ElememetalDemo';
import { useLanguage } from '@/components/LanguageContext';
import { useTheme } from '@/components/ThemeContext';
import { Sword, Coins, Users, Cpu, Layers, Zap, Hexagon, Trophy, Box } from 'lucide-react';

export default function Elememetal() {
    const { language } = useLanguage();
    const { theme } = useTheme();

    const content = {
        en: {
            tag: <span className="font-bold"><span className={theme === 'dark' ? 'text-orange-400' : 'text-orange-700'}>Trust Layer: Gaming</span> | <span className={theme === 'dark' ? 'text-orange-300' : 'text-orange-600'}>Skill-Based Strategy TCG</span></span>,
            primaryButtonText: "Play Now",
            oneLiner: <span className={`font-bold ${theme === 'dark' ? 'text-orange-400' : 'text-orange-700'}`}>A competitive battler where every card is an asset and every match is pure strategy.</span>,
            story: (
                <>
                    <p className="mb-6 text-lg md:text-xl leading-relaxed text-neutral-300">
                        <span className="text-white font-bold">Ownership without Borders. Strategy without Randomness.</span>
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-neutral-300">
                        EleMEMEtal changes the game. Every card is an asset, every match is a high-stakes mind game, and the economy is entirely player-driven.
                        No hidden algorithms. Just pure strategy.
                    </p>
                </>
            ),
            problemPoints: [
                {
                    title: "Enhance & Combo",
                    description: "Merge same-element cards. Chain consecutive plays for 1.3x → 1.9x damage multiplier."
                },
                {
                    title: "Power Bank",
                    description: "Empty slots generate Power Bank points. Use for fixed damage ignoring defense."
                },
                {
                    title: "Joker System",
                    description: "5 Jokers per game. Break the meta at the perfect moment."
                }
            ],
            solutionSteps: [
                {
                    title: "Connected Trust Layer",
                    description: "AiD Guardian validates UGC safety. PlayArts proves asset origin. Value Routing distributes economy rewards."
                }
            ],
            screenshots: [],
            stats: [
                { value: "0%", label: "Pay-To-Win" },
                { value: "100%", label: "Ownership" },
                { value: "5-10m", label: "Match Time" },
                { value: "Zero", label: "Randomness" }
            ],
            useCases: [
                {
                    title: "Mission",
                    description: "Gamers building for gamers. Respecting time and rewarding skill."
                },
                {
                    title: "True Ownership",
                    description: "Every card is an NFT. Trade freely. Complete ownership."
                },
                {
                    title: "Team",
                    description: "Veterans from Unity, Netmarble, Smilegate."
                }
            ],
            businessModel: "Player-Owned Economy. Craft in Forge. Trade in Marketplace. No card packs, no gacha.",
            roadmap: [
                {
                    quarter: "Phase 1",
                    status: "in_progress",
                    title: "Alpha Launch",
                    items: ["Simultaneous Turns", "Instant Result", "Zero Random"]
                },
                {
                    quarter: "Phase 2",
                    status: "upcoming",
                    title: "Joker Genesis",
                    items: ["AI Generated Cards", "Unique Abilities"]
                },
                {
                    quarter: "Phase 3",
                    status: "upcoming",
                    title: "Global Expansion",
                    items: ["Mobile", "Esports", "Cross-IP"]
                }
            ],
            customerStories: [
                {
                    quote: "Finally, a TCG where skill actually matters. No RNG, no pay-to-win nonsense. Just pure strategy.",
                    author: "Mike Torres",
                    role: "Pro Player",
                    company: "Esports Team Alpha",
                    image: null
                },
                {
                    quote: "My cards have real value that I control. I can trade them, sell them, or keep building my collection. This is gaming done right.",
                    author: "Lisa Park",
                    role: "Competitive Player",
                    company: null,
                    image: null
                }
            ]
        },
        ko: {
            tag: <span className="font-bold"><span className={theme === 'dark' ? 'text-orange-400' : 'text-orange-700'}>Trust Layer: Gaming</span> | <span className={theme === 'dark' ? 'text-orange-300' : 'text-orange-600'}>실력 기반 전략 TCG</span></span>,
            primaryButtonText: "지금 플레이",
            oneLiner: <span className={`font-bold ${theme === 'dark' ? 'text-orange-400' : 'text-orange-700'}`}>모든 카드가 자산이 되고, 모든 매치가 순수한 전략이 되는 경쟁 배틀러.</span>,
            story: (
                <>
                    <p className="mb-6 text-lg md:text-xl leading-relaxed text-neutral-300">
                        <span className="text-white font-bold">경계 없는 소유권. 무작위성 없는 전략.</span>
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-neutral-300">
                        EleMEMEtal은 게임의 판도를 바꿉니다. 모든 카드가 자산이 되고, 모든 매치가 치열한 두뇌 싸움이 되며, 경제가 전적으로 플레이어에 의해 주도됩니다.
                        숨겨진 알고리즘은 없습니다. 오직 순수한 전략뿐입니다.
                    </p>
                </>
            ),
            problemPoints: [
                {
                    title: "강화 & 콤보",
                    description: "같은 원소 카드를 합쳐 더 강력한 유닛. 연속 플레이로 1.3x → 1.9x 데미지."
                },
                {
                    title: "파워 뱅크",
                    description: "빈 슬롯이 파워 뱅크 포인트 생성. 방어력 무시 고정 피해."
                },
                {
                    title: "조커 시스템",
                    description: "게임당 5장. 완벽한 순간에 메타를 깨부수세요."
                }
            ],
            solutionSteps: [
                {
                    title: "Trust Layer 연결",
                    description: "AiD Guardian으로 UGC 안전성 검증, PlayArts로 자산 출처 증명, Value Routing으로 가치 분배."
                }
            ],
            screenshots: [],
            stats: [
                { value: "0%", label: "Pay-To-Win" },
                { value: "100%", label: "소유권" },
                { value: "5-10m", label: "매치 시간" },
                { value: "Zero", label: "무작위성" }
            ],
            useCases: [
                {
                    title: "미션",
                    description: "게이머를 위해 게임을 만드는 게이머. 시간을 존중하고 실력을 보상."
                },
                {
                    title: "진정한 소유권",
                    description: "모든 카드는 NFT. 자유롭게 거래. 완전한 소유권."
                },
                {
                    title: "팀",
                    description: "Unity, 넷마블, 스마일게이트 출신 베테랑."
                }
            ],
            businessModel: "플레이어 소유 경제. 대장간에서 카드 제작. 오픈 마켓플레이스 거래. 카드 팩도 가챠도 없음.",
            roadmap: [
                {
                    quarter: "1단계",
                    status: "in_progress",
                    title: "알파 출시",
                    items: ["동시 턴", "즉각 결과", "제로 랜덤"]
                },
                {
                    quarter: "2단계",
                    status: "upcoming",
                    title: "조커 제네시스",
                    items: ["AI 생성 카드", "고유 능력"]
                },
                {
                    quarter: "3단계",
                    status: "upcoming",
                    title: "글로벌 확장",
                    items: ["모바일", "e스포츠", "크로스 IP"]
                }
            ],
            customerStories: [
                {
                    quote: "드디어 실력이 진짜 중요한 TCG입니다. 무작위도 없고, Pay-to-Win도 없습니다. 순수한 전략뿐입니다.",
                    author: "Mike Torres",
                    role: "프로 플레이어",
                    company: "Esports Team Alpha",
                    image: null
                },
                {
                    quote: "내 카드는 내가 통제하는 진짜 가치를 갖습니다. 거래하고, 팔고, 컬렉션을 쌓을 수 있습니다. 이것이 올바른 게임입니다.",
                    author: "Lisa Park",
                    role: "경쟁 플레이어",
                    company: null,
                    image: null
                }
            ]
        }
    };

    const c = content[language] || content.en;

    return (
        <BusinessLayout 
            name="EleMEMEtal"
            theme="elememetal"
            HeroComponent={ElememetalDemo}
            showAnalytics={true}
            tag={c.tag}
            primaryButton={{ text: c.primaryButtonText, url: "http://game-dev.playarts.ai" }}
            deckUrl="https://docsend.com/view/97ziwvrkmetmqs82"
            oneLiner={c.oneLiner}
            story={c.story}
            heroImage="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/15a1915ba_2025-12-17100148.png"
            videoUrl="https://www.youtube.com/embed/L638G0X76Qk"
            
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
                    icon: Sword,
                    title: language === 'en' ? "Skill-Based Combat" : "실력 기반 전투",
                    description: language === 'en' ? "Deterministic mechanics. No RNG damage rolls." : "결정론적 메커니즘. 무작위 데미지 없음."
                },
                {
                    icon: Coins,
                    title: language === 'en' ? "Player Economy" : "플레이어 경제",
                    description: language === 'en' ? "Craft, trade, and sell assets. 100% player ownership." : "자산 제작, 거래, 판매. 100% 플레이어 소유권."
                },
                {
                    icon: Cpu,
                    title: language === 'en' ? "AI Opponents" : "AI 상대",
                    description: language === 'en' ? "Train against adaptive AI agents that learn your style." : "당신의 스타일을 학습하는 적응형 AI 에이전트와 훈련."
                },
                {
                    icon: Hexagon,
                    title: language === 'en' ? "Elemental Synergy" : "원소 시너지",
                    description: language === 'en' ? "Deep strategic depth with elemental interactions." : "원소 상호작용을 통한 깊은 전략적 깊이."
                },
                {
                    icon: Trophy,
                    title: language === 'en' ? "Tournaments" : "토너먼트",
                    description: language === 'en' ? "Regular esports events with high-stakes prize pools." : "높은 상금이 걸린 정기 e스포츠 이벤트."
                },
                {
                    icon: Box,
                    title: language === 'en' ? "Asset Interop" : "자산 상호운용성",
                    description: language === 'en' ? "Allow users to trade and use their game assets (NFT cards) in multiple titles, increasing their utility and value." : "사용자가 게임 자산(NFT 카드)을 여러 타이틀에서 거래하고 사용하여 효용성과 가치를 높일 수 있습니다."
                }
            ]}
            specs={[
                {
                    label: language === 'en' ? "Game Engine" : "게임 엔진",
                    value: "Unity (WebGL / Mobile)"
                },
                {
                    label: language === 'en' ? "Asset Standard" : "자산 표준",
                    value: "ERC-1155 (Dynamic Metadata)"
                },
                {
                    label: language === 'en' ? "Network" : "네트워크",
                    value: "Deterministic Lockstep (Predictive Rollback)"
                },
                {
                    label: language === 'en' ? "Matchmaking" : "매치메이킹",
                    value: "Glicko-2 Rating System"
                },
                {
                    label: language === 'en' ? "AI Integration" : "AI 통합",
                    value: "Reinforcement Learning Agents (PPO)"
                }
            ]}
            detailedSpecs={(
                <div className="space-y-8">
                    <div>
                        <h4 className="text-xl font-bold text-white mb-4">{language === 'en' ? "Deterministic Combat Engine" : "결정론적 전투 엔진"}</h4>
                        <p className="text-neutral-300 leading-relaxed mb-6">
                            {language === 'en' 
                                ? "Unlike traditional TCGs that rely on RNG for damage variance, EleMEMEtal uses a fully deterministic state machine. Every interaction is calculable, allowing for 'Solve' states where skilled players can guarantee victory 3 turns in advance." 
                                : "데미지 변동을 위해 RNG에 의존하는 기존 TCG와 달리, EleMEMEtal은 완전한 결정론적 상태 머신을 사용합니다. 모든 상호작용은 계산 가능하며, 숙련된 플레이어는 3턴 전에 승리를 확정 짓는 '해결(Solve)' 상태를 만들어낼 수 있습니다."}
                        </p>
                        <div className="p-4 bg-orange-900/10 rounded-xl border border-orange-500/20 mb-6 overflow-x-auto custom-scrollbar">
                            <code className="text-sm font-mono text-orange-200 block">
                                Damage = (Base * ElementMult) + ComboBonus + BankSpend<br/>
                                <span className="opacity-50">// No random() calls in core logic</span>
                            </code>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-4">{language === 'en' ? "Dynamic NFT Metadata" : "동적 NFT 메타데이터"}</h4>
                        <p className="text-neutral-300 leading-relaxed">
                            {language === 'en'
                                ? "Cards evolve based on match history. Win rates, tournament badges, and 'Shiny' status are written directly to the NFT metadata via Oracle updates, permanently increasing the asset's provenance value."
                                : "카드는 경기 기록에 따라 진화합니다. 승률, 토너먼트 배지, '샤이니' 상태가 오라클 업데이트를 통해 NFT 메타데이터에 직접 기록되어 자산의 가치를 영구적으로 높입니다."}
                        </p>
                    </div>
                </div>
            )}
            partners={null}
        />
    );
}