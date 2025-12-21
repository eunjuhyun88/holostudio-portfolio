import React from 'react';
import BusinessLayout from '../components/BusinessLayout';
import StockhooDemo from '../components/interactive/StockhooDemo';
import { useLanguage } from '@/components/LanguageContext';
import { useTheme } from '@/components/ThemeContext';
import { BarChart3, Bot, Zap, Globe, Database, Smartphone, Activity, MessageSquare, TrendingUp } from 'lucide-react';

export default function Stockhoo() {
    const { language } = useLanguage();
    const { theme } = useTheme();

    const content = {
        en: {
            tag: <span className="font-bold"><span className={theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'}>Trust Layer: Trading</span> | <span className={theme === 'dark' ? 'text-emerald-300' : 'text-emerald-600'}>Zone-Based Market Intelligence</span></span>,
            primaryButtonText: "Launch Terminal",
            oneLiner: <span className={`font-bold ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'}`}>The concerns of entering at 63K differ from 70K. Context matters. Zones provide context.</span>,
            story: (
                <>
                    <p className="mb-6 text-lg md:text-xl leading-relaxed text-neutral-300">
                        <span className="text-white font-bold">Signal amidst the Noise. Market Leadership for Everyone.</span>
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-neutral-300">
                        While creators understand content context, traders must understand market context.
                        The Zone is the atomic unit of decision making. StockHoo unifies CEX Data, Order Flow, Whale Movements, and Liquidation Clusters into one actionable view.
                    </p>
                </>
            ),
            problemPoints: [
                {
                    title: "Information Overload",
                    description: "Fragmented data across charts, on-chain metrics, and social sentiment."
                },
                {
                    title: "Noisy Social Signals",
                    description: "Telegram/Discord noise. You need to know who is underwater vs winning, anchored to price zones."
                },
                {
                    title: "Generic AI Limits",
                    description: "Standard LLMs hallucinate on finance. You need asset-specific fine-tuning."
                }
            ],
            solutionSteps: [
                {
                    title: "Zone Heat Score™",
                    description: "Calculates 'temperature' (0-100) of every price zone based on volatility and order density."
                },
                {
                    title: "Natural Language Trading",
                    description: "Coin-specific AI scans zones, calculates risk, and suggests trade plans."
                },
                {
                    title: "Context-Anchored Chat",
                    description: "Verified social positions reveal trapped vs winning traders."
                }
            ],
            screenshots: [
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/b1e5d09d4_2025-12-1822847.png",
                    caption: "Social Alpha: Talk From Your Zone"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/f20b5241d_2025-12-1822848.png",
                    caption: "AI Architecture: Coin-Specialized Models"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/1fd50bfcc_2025-12-1822850.png",
                    caption: "AI Agent: Natural Language Trading"
                }
            ],
            stats: [
                { value: "0-100", label: "Zone Heat Score" },
                { value: "3", label: "Specialized Models" },
                { value: "Real-time", label: "Order Flow" },
                { value: "Context-Aware", label: "Social Sentiment" }
            ],
            useCases: [
                {
                    title: "Retail Traders",
                    description: "High probability setups with Zone Heat Score."
                },
                {
                    title: "Social Traders",
                    description: "Anchor community positions to price levels."
                },
                {
                    title: "Analysts",
                    description: "Automate technical analysis with AI."
                }
            ],
            businessModel: "Freemium SaaS + Pro Subscription + B2B API.",
            roadmap: [
                {
                    quarter: "Phase 1 (Live)",
                    status: "in_progress",
                    title: "Text-to-Indicator",
                    items: ["Order Blocks", "Natural Language Query"]
                },
                {
                    quarter: "Phase 2",
                    status: "upcoming",
                    title: "Text-to-Drawing",
                    items: ["Auto Trendlines", "Fib Levels"]
                },
                {
                    quarter: "Phase 3",
                    status: "upcoming",
                    title: "Zone Sharing",
                    items: ["Community Libraries", "Social Alpha"]
                }
            ],
            customerStories: [
                {
                    quote: "Zone Heat Score changed how I trade. I can see exactly where the real liquidity is and avoid getting trapped in dead zones.",
                    author: "David Chen",
                    role: "Day Trader",
                    company: null,
                    image: null
                },
                {
                    quote: "The AI agent understands crypto market context better than any generic LLM. It's like having a trading partner who never sleeps.",
                    author: "Emma Rodriguez",
                    role: "Crypto Analyst",
                    company: "Digital Asset Fund",
                    image: null
                }
            ]
        },
        ko: {
            tag: <span className="font-bold"><span className={theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'}>Trust Layer: Trading</span> | <span className={theme === 'dark' ? 'text-emerald-300' : 'text-emerald-600'}>Zone 기반 시장 인텔리전스</span></span>,
            primaryButtonText: "터미널 실행",
            oneLiner: <span className={`font-bold ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'}`}>63K 진입과 70K 진입의 고민은 다릅니다. Zone이 맥락을 줍니다.</span>,
            story: (
                <>
                    <p className="mb-6 text-lg md:text-xl leading-relaxed text-neutral-300">
                        <span className="text-white font-bold">노이즈 속의 신호. 모두를 위한 시장 주도권.</span>
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-neutral-300">
                        크리에이터에게 콘텐츠 맥락이 있다면, 트레이더에게는 시장 맥락이 있습니다.
                        Zone은 모든 의사결정의 최소 단위입니다. StockHoo는 CEX 데이터, 오더 플로우, 고래 움직임, 청산 클러스터를 하나의 실행 가능한 뷰로 통합합니다.
                    </p>
                </>
            ),
            problemPoints: [
                {
                    title: "정보 과부하",
                    description: "차트, 온체인 지표, 소셜 센티먼트에 흩어진 데이터."
                },
                {
                    title: "소셜 신호의 노이즈",
                    description: "텔레그램/디스코드 소음 속 진짜 신호. 가격 레벨에 고정된 포지션 확인 필요."
                },
                {
                    title: "일반 AI의 한계",
                    description: "표준 LLM은 금융 데이터에 환각. 자산별 미세 조정 필요."
                }
            ],
            solutionSteps: [
                {
                    title: "Zone Heat Score™",
                    description: "모든 가격 구역의 '온도'를 0-100으로 계산."
                },
                {
                    title: "자연어 트레이딩",
                    description: "코인별 특화 AI가 구역 스캔, 리스크 계산, 트레이딩 플랜 제시."
                },
                {
                    title: "맥락 고정 채팅",
                    description: "검증된 소셜 포지션으로 갇힌 트레이더와 승리하는 트레이더 구분."
                }
            ],
            screenshots: [
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/b1e5d09d4_2025-12-1822847.png",
                    caption: "소셜 알파: 구역 기반 대화"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/f20b5241d_2025-12-1822848.png",
                    caption: "AI 아키텍처: 코인 특화 모델"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/1fd50bfcc_2025-12-1822850.png",
                    caption: "AI 에이전트: 자연어 트레이딩"
                }
            ],
            stats: [
                { value: "0-100", label: "Zone Heat Score" },
                { value: "3", label: "특화 모델" },
                { value: "Real-time", label: "오더 플로우" },
                { value: "Context-Aware", label: "소셜 센티먼트" }
            ],
            useCases: [
                {
                    title: "개인 트레이더",
                    description: "Zone Heat Score로 높은 확률 셋업, AI 트레이딩 플랜."
                },
                {
                    title: "소셜 트레이더",
                    description: "커뮤니티 포지션을 가격 레벨에 고정."
                },
                {
                    title: "분석가",
                    description: "AI 차트로 기술적 분석 자동화, Zone 템플릿 공유."
                }
            ],
            businessModel: "부분 유료화 SaaS (기본 Zone) + 프로 구독 (AI 모델 & Heat Score) + B2B API.",
            roadmap: [
                {
                    quarter: "1단계 (라이브)",
                    status: "in_progress",
                    title: "Text-to-Indicator",
                    items: ["오더 블록", "자연어 쿼리"]
                },
                {
                    quarter: "2단계",
                    status: "upcoming",
                    title: "Text-to-Drawing",
                    items: ["추세선", "피보나치 자동 생성"]
                },
                {
                    quarter: "3단계",
                    status: "upcoming",
                    title: "Zone 공유",
                    items: ["커뮤니티 라이브러리", "소셜 알파"]
                }
            ],
            customerStories: [
                {
                    quote: "Zone Heat Score가 제 트레이딩 방식을 바꿨습니다. 진짜 유동성이 어디 있는지 정확히 보고 데드 존에 갇히는 것을 피할 수 있습니다.",
                    author: "David Chen",
                    role: "데이 트레이더",
                    company: null,
                    image: null
                },
                {
                    quote: "AI 에이전트가 일반 LLM보다 암호화폐 시장 맥락을 훨씬 잘 이해합니다. 잠들지 않는 트레이딩 파트너를 갖는 것과 같습니다.",
                    author: "Emma Rodriguez",
                    role: "암호화폐 분석가",
                    company: "Digital Asset Fund",
                    image: null
                }
            ]
        }
    };

    const c = content[language] || content.en;

    return (
        <BusinessLayout 
            name="Stockhoo"
            theme="stockhoo"
            HeroComponent={StockhooDemo}
            showAnalytics={true}
            tag={c.tag}
            primaryButton={{ text: c.primaryButtonText, url: "http://stockhoo.playarts.ai" }}
            deckUrl="https://docsend.com/view/ari494ikfzsuix7z"
            oneLiner={c.oneLiner}
            story={c.story}
            heroImage="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/42c331243_2025-12-1822844.png"
            
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
                    icon: Activity,
                    title: language === 'en' ? "Zone Heatmap" : "구역 히트맵",
                    description: language === 'en' ? "Visual intensity of market activity in price zones." : "가격 구역 내 시장 활동의 시각적 강도."
                },
                {
                    icon: Bot,
                    title: language === 'en' ? "AI Trading Agent" : "AI 트레이딩 에이전트",
                    description: language === 'en' ? "Autonomous agent executing strategies based on zone signals." : "구역 시그널에 기반하여 전략을 실행하는 자율 에이전트."
                },
                {
                    icon: MessageSquare,
                    title: language === 'en' ? "Social Sentiment" : "소셜 센티먼트",
                    description: language === 'en' ? "Aggregated sentiment analysis from Crypto Twitter & Telegram." : "크립토 트위터 및 텔레그램의 집계된 센티먼트 분석."
                },
                {
                    icon: TrendingUp,
                    title: language === 'en' ? "Profit Proof" : "수익 증명",
                    description: language === 'en' ? "On-chain verification of trader PnL and reputation." : "트레이더 손익 및 평판에 대한 온체인 검증."
                },
                {
                    icon: Zap,
                    title: language === 'en' ? "Instant Alerts" : "즉시 알림",
                    description: language === 'en' ? "Real-time notifications for zone breakouts and volume spikes." : "구역 돌파 및 거래량 급증에 대한 실시간 알림."
                },
                {
                    icon: Database,
                    title: language === 'en' ? "Data Aggregation" : "데이터 집계",
                    description: language === 'en' ? "Unified view of CEX, DEX, and On-chain data." : "CEX, DEX, 온체인 데이터의 통합 뷰."
                }
            ]}
            specs={[
                {
                    label: language === 'en' ? "Data Sources" : "데이터 소스",
                    value: "Binance, Bybit, Coinbase, Uniswap, Twitter API"
                },
                {
                    label: language === 'en' ? "AI Model" : "AI 모델",
                    value: "Transformer-based Time-Series Forecasting"
                },
                {
                    label: language === 'en' ? "Latency" : "지연 시간",
                    value: "Real-time Streaming (< 500ms)"
                },
                {
                    label: language === 'en' ? "Platforms" : "플랫폼",
                    value: "Web, iOS, Android"
                },
                {
                    label: language === 'en' ? "Security" : "보안",
                    value: "Non-Custodial API Keys (IP Whitelisted)"
                }
            ]}
            detailedSpecs={(
                <div className="space-y-8">
                    <div>
                        <h4 className="text-xl font-bold text-white mb-4">{language === 'en' ? "Zone Heat Score™ Algorithm" : "구역 열기 점수(Zone Heat Score™) 알고리즘"}</h4>
                        <p className="text-neutral-300 leading-relaxed mb-6">
                            {language === 'en'
                                ? "The Heat Score is a composite metric derived from three primary data streams. It identifies 'Coiled' zones where price compression meets high social sentiment and pending order volume, often preceding a breakout."
                                : "열기 점수는 세 가지 주요 데이터 스트림에서 파생된 복합 지표입니다. 가격 압축이 높은 소셜 센티먼트 및 대기 주문량과 만나는 '응축된(Coiled)' 구역을 식별하여, 종종 돌파 직전의 상황을 포착합니다."}
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-4 p-3 bg-emerald-900/10 rounded-lg border border-emerald-500/10">
                                <div className="w-12 text-sm font-bold text-emerald-400">40%</div>
                                <div className="flex-1">
                                    <div className="text-sm font-bold text-white">Order Book Density</div>
                                    <div className="text-xs text-neutral-400">Bid/Ask depth ratio at key levels</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-3 bg-emerald-900/10 rounded-lg border border-emerald-500/10">
                                <div className="w-12 text-sm font-bold text-emerald-400">30%</div>
                                <div className="flex-1">
                                    <div className="text-sm font-bold text-white">Social Velocity</div>
                                    <div className="text-xs text-neutral-400">Rate of change in mention volume (CT/Telegram)</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-3 bg-emerald-900/10 rounded-lg border border-emerald-500/10">
                                <div className="w-12 text-sm font-bold text-emerald-400">30%</div>
                                <div className="flex-1">
                                    <div className="text-sm font-bold text-white">On-Chain Flow</div>
                                    <div className="text-xs text-neutral-400">Net exchange inflows/outflows</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-4">{language === 'en' ? "DPO Model Tuning" : "DPO 모델 튜닝"}</h4>
                        <p className="text-neutral-300 leading-relaxed">
                            {language === 'en'
                                ? "We use Direct Preference Optimization (DPO) to fine-tune our Llama-3 based agents. Instead of generic RLHF, our models are rewarded based on the PnL of their simulated trade calls over a 7-day rolling window, aligning AI incentives directly with trader profitability."
                                : "우리는 Llama-3 기반 에이전트를 미세 조정하기 위해 직접 선호 최적화(DPO)를 사용합니다. 일반적인 RLHF 대신, 우리 모델은 7일 롤링 윈도우 동안 시뮬레이션된 트레이딩 호출의 손익(PnL)을 기반으로 보상을 받아, AI의 인센티브를 트레이더의 수익성과 직접적으로 일치시킵니다."}
                        </p>
                    </div>
                </div>
            )}
        />
    );
}