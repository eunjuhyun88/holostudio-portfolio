import React from 'react';
import BusinessLayout from '../components/BusinessLayout';
import ElememetalDemo from '../components/interactive/ElememetalDemo';
import { useLanguage } from '@/components/LanguageContext';
import { Sword, Coins, Users, Cpu, Layers, Zap, Hexagon, Trophy, Box } from 'lucide-react';

export default function Elememetal() {
    const { language } = useLanguage();

    const content = {
        en: {
            tag: "Competitive Strategy",
            primaryButtonText: "Play Now",
            oneLiner: "Imagine if gaming assets were as liquid as elements.",
            story: (
                <>
                    <p className="mb-6 text-lg md:text-xl leading-relaxed text-neutral-300">
                        Competitive gaming has become stale. Pay-to-win mechanics and loot boxes 
                        have replaced skill and strategy. Players spend thousands on assets they don't truly own, 
                        trapped in walled gardens.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-neutral-300">
                        EleMEMEtal changes the game. We've built a competitive battler where every card is an asset, 
                        every match is a high-stakes mind game, and the economy is entirely player-driven. 
                        No hidden algorithms, just pure strategy.
                    </p>
                </>
            ),
            problemPoints: [
                {
                    title: "Bank Leverage",
                    description: "Look weak on purpose to build Power Bank. Sacrifice early rounds to unleash +18 guaranteed damage later."
                },
                {
                    title: "Readable Mastery",
                    description: "No hidden info besides the hand. Zero RNG damage ranges. The best players win by reading timing, not getting lucky."
                },
                {
                    title: "Skill Gap",
                    description: "Deterministic outcomes mean the better strategist wins. Limited swing tools force real commitment."
                }
            ],
            solutionSteps: [
                {
                    title: "Core Mechanics: Enhance & Combo",
                    description: "Merge same-element cards to create a stronger unit. Chain consecutive plays to scale damage x1.3, x1.6, up to x1.9."
                },
                {
                    title: "The X-Factor: Power Bank",
                    description: "Empty slots aren't wasted—they generate Power Bank points. Spend them for fixed damage that ignores defense."
                },
                {
                    title: "Game Breaker: Joker System",
                    description: "Only 5 Jokers per game. Attack, Defense, or Utility. Using them at the perfect moment breaks the meta."
                }
            ],
            screenshots: [
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/7d50a039d_2025-12-17100209.png",
                    caption: "Deterministic Combat: Instant Resolution"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/cc19758fb_2025-12-17100150.png",
                    caption: "The Forge: Craft, Upgrade, Salvage"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/86f4b6cbe_2025-12-17100153.png",
                    caption: "Player Owned Marketplace"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/906125d10_2025-12-17100207.png",
                    caption: "Joker Genesis: AI-Powered Cards"
                }
            ],
            stats: [
                { value: "0%", label: "Pay-To-Win" },
                { value: "100%", label: "Ownership" },
                { value: "5-10m", label: "Match Time" },
                { value: "Zero", label: "Randomness" }
            ],
            useCases: [
                {
                    title: "Our Mission",
                    description: "We are gamers building for gamers. We believe in games that respect your time and reward your skill."
                },
                {
                    title: "True Ownership",
                    description: "Every card is an NFT. Trade freely. Complete ownership of your achievements and assets."
                },
                {
                    title: "The Team",
                    description: "Built by veterans from Unity, Netmarble, and Smilegate at the intersection of AI, Gaming, and Web3."
                }
            ],
            businessModel: "Player-Owned Economy. Craft cards in The Forge using Shards and Dust. Trade on the open marketplace. No card packs, no gacha.",
            roadmap: [
                {
                    quarter: "Phase 1",
                    title: "Alpha Launch",
                    items: ["Simultaneous Turns", "Instant Resolution", "Zero Randomness"]
                },
                {
                    quarter: "Phase 2",
                    title: "Joker Genesis",
                    items: ["AI-Generated Cards", "Experimental Meta", "Unique Abilities"]
                },
                {
                    quarter: "Phase 3",
                    title: "Global Expansion",
                    items: ["Mobile Release", "Esports Tournaments", "Cross-IP Collabs"]
                }
            ]
        },
        ko: {
            tag: "경쟁 전략",
            primaryButtonText: "지금 플레이",
            oneLiner: "게임 자산이 원소처럼 유동적이라면.",
            story: (
                <>
                    <p className="mb-6 text-lg md:text-xl leading-relaxed text-neutral-300">
                        경쟁 게임은 진부해졌습니다. Pay-to-Win 메커니즘과 전리품 상자가
                        실력과 전략을 대체했습니다. 플레이어들은 실제로 소유하지도 못하는 자산에 수천 달러를 쓰며,
                        폐쇄적인 정원에 갇혀 있습니다.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-neutral-300">
                        EleMEMEtal은 게임의 판도를 바꿉니다. 모든 카드가 자산이 되고,
                        모든 매치가 치열한 두뇌 싸움이 되며, 경제가 전적으로 플레이어에 의해 주도되는 경쟁 배틀러를 만들었습니다.
                        숨겨진 알고리즘은 없습니다. 오직 순수한 전략뿐입니다.
                    </p>
                </>
            ),
            problemPoints: [
                {
                    title: "뱅크 레버리지",
                    description: "파워 뱅크를 쌓기 위해 일부러 약한 척하세요. 초반 라운드를 희생하여 나중에 +18의 확정 피해를 입히세요."
                },
                {
                    title: "예측 가능한 숙련도",
                    description: "손패 외에는 숨겨진 정보가 없습니다. 무작위 데미지 범위도 없습니다. 운이 아니라 타이밍을 읽는 플레이어가 승리합니다."
                },
                {
                    title: "실력 격차",
                    description: "결정론적 결과는 더 나은 전략가가 승리함을 의미합니다. 변수 요소를 제한하여 진정한 헌신을 강요합니다."
                }
            ],
            solutionSteps: [
                {
                    title: "핵심 메커니즘: 강화 & 콤보",
                    description: "같은 원소 카드를 합쳐 더 강력한 유닛을 만드세요. 연속 플레이를 통해 데미지를 1.3배, 1.6배, 최대 1.9배까지 증폭시키세요."
                },
                {
                    title: "X-팩터: 파워 뱅크",
                    description: "빈 슬롯은 낭비되지 않습니다—파워 뱅크 포인트를 생성합니다. 방어력을 무시하는 고정 피해를 입히는 데 사용하세요."
                },
                {
                    title: "게임 브레이커: 조커 시스템",
                    description: "게임당 조커는 단 5장. 공격, 방어, 또는 유틸리티. 완벽한 순간에 사용하여 메타를 깨부수세요."
                }
            ],
            screenshots: [
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/7d50a039d_2025-12-17100209.png",
                    caption: "결정론적 전투: 즉각적인 결과"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/cc19758fb_2025-12-17100150.png",
                    caption: "대장간: 제작, 업그레이드, 분해"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/86f4b6cbe_2025-12-17100153.png",
                    caption: "플레이어 소유 마켓플레이스"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/906125d10_2025-12-17100207.png",
                    caption: "조커 제네시스: AI 구동 카드"
                }
            ],
            stats: [
                { value: "0%", label: "Pay-To-Win" },
                { value: "100%", label: "소유권" },
                { value: "5-10m", label: "매치 시간" },
                { value: "Zero", label: "무작위성" }
            ],
            useCases: [
                {
                    title: "우리의 미션",
                    description: "우리는 게이머를 위해 게임을 만드는 게이머입니다. 우리는 당신의 시간을 존중하고 실력을 보상하는 게임을 믿습니다."
                },
                {
                    title: "진정한 소유권",
                    description: "모든 카드는 NFT입니다. 자유롭게 거래하세요. 당신의 업적과 자산에 대한 완전한 소유권을 가집니다."
                },
                {
                    title: "팀",
                    description: "Unity, 넷마블, 스마일게이트 출신의 베테랑들이 AI, 게임, Web3의 교차점에서 만들었습니다."
                }
            ],
            businessModel: "플레이어 소유 경제. 대장간에서 조각과 가루를 사용해 카드를 제작하세요. 오픈 마켓플레이스에서 거래하세요. 카드 팩도, 가챠도 없습니다.",
            roadmap: [
                {
                    quarter: "1단계",
                    title: "알파 출시",
                    items: ["동시 턴 진행", "즉각적 결과", "무작위성 제로"]
                },
                {
                    quarter: "2단계",
                    title: "조커 제네시스",
                    items: ["AI 생성 카드", "실험적 메타", "고유 능력"]
                },
                {
                    quarter: "3단계",
                    title: "글로벌 확장",
                    items: ["모바일 출시", "e스포츠 토너먼트", "크로스 IP 콜라보"]
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
            
            problemPoints={c.problemPoints}
            solutionSteps={c.solutionSteps}
            screenshots={c.screenshots}
            stats={c.stats}
            useCases={c.useCases}
            businessModel={c.businessModel}
            roadmap={c.roadmap}
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
            partners={
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Selected By */}
                    <div>
                        <p className="text-xs font-bold text-neutral-500 uppercase tracking-[0.2em] mb-6">Selected By</p>
                        <div className="flex flex-wrap items-center gap-4">
                            {/* NVIDIA */}
                            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors">
                                <div className="text-xl font-bold text-white">NVIDIA</div>
                                <div className="h-6 w-px bg-white/20" />
                                <div className="text-[10px] font-bold text-neutral-400 leading-tight">Inception<br/>Program</div>
                            </div>
                            {/* Google Cloud */}
                            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors">
                                <div className="text-xl font-bold text-white">Google Cloud</div>
                                <div className="text-[10px] text-neutral-400 border border-neutral-600 px-1.5 py-0.5 rounded-full">Partner</div>
                            </div>
                        </div>
                    </div>

                    {/* Backed By */}
                    <div>
                        <p className="text-xs font-bold text-neutral-500 uppercase tracking-[0.2em] mb-6">Backed By</p>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-6 opacity-90">
                            {/* Arbitrum */}
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-[#2D374B] flex items-center justify-center border border-white/10">
                                    <div className="w-4 h-4 bg-[#12AAFF] transform rotate-45" />
                                </div>
                                <span className="font-bold text-lg text-neutral-300">Arbitrum</span>
                            </div>
                            {/* Alchemy */}
                            <div className="font-bold text-xl text-blue-500">alchemy</div>
                            {/* OnePiece Labs */}
                            <div className="flex items-center gap-1">
                                <span className="font-bold text-xl text-white">onepiece</span>
                                <span className="text-xs text-neutral-500 font-mono">labs</span>
                            </div>
                            {/* Seedify */}
                            <div className="bg-white/5 px-3 py-1 rounded text-sm font-bold text-white border border-white/10">
                                SEEDIFY
                            </div>
                            {/* AppWorks */}
                            <div className="font-bold text-xl text-[#FF6B00]">AppWorks</div>
                            {/* Story */}
                            <div className="font-black italic text-xl text-white">STORY</div>
                            {/* OKX Hackathon */}
                            <div className="flex flex-col leading-none">
                                <span className="text-[10px] text-neutral-500 uppercase">Winner</span>
                                <span className="font-bold text-white">OKX Hackathon</span>
                            </div>
                        </div>
                    </div>
                </div>
            }
        />
    );
}