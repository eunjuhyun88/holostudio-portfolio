import React from 'react';
import BusinessLayout from '../components/BusinessLayout';
import StockhooDemo from '../components/interactive/StockhooDemo';
import { useLanguage } from '@/components/LanguageContext';
import { BarChart3, Bot, Zap, Globe, Database, Smartphone, Activity, MessageSquare, TrendingUp } from 'lucide-react';

export default function Stockhoo() {
    const { language } = useLanguage();

    const content = {
        en: {
            tag: "AI Trading Intelligence • Strategic Market Advantage • Predictive Insights",
            primaryButtonText: "Launch Terminal",
            oneLiner: "Providing cutting-edge AI-driven predictive insights and actionable strategies to help traders secure a strategic advantage.",
            story: (
                <>
                    <p className="mb-6 text-lg md:text-xl leading-relaxed text-neutral-300">
                        Capturing the Signals of the future amidst the flood of data, empowering anyone to take the lead in the market.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-neutral-300">
                        The Zone becomes the atomic unit for all trading context and decisions. Instead of watching 10 different screens, 
                        StockHoo unifies CEX Data, Order Flow, Whale Movements, and Liquidation Clusters into one actionable view.
                    </p>
                </>
            ),
            problemPoints: [
                {
                    title: "Information Overload",
                    description: "Traders are overwhelmed by fragmented data across charts, on-chain metrics, and social sentiment."
                },
                {
                    title: "Noisy Social Signals",
                    description: "Telegram and Discord are noisy. You need to know who is underwater, in profit, or trapped—anchored to price zones."
                },
                {
                    title: "Generic AI Models",
                    description: "Standard LLMs hallucinate on financial data. You need models fine-tuned for specific asset microstructures (BTC vs SOL)."
                }
            ],
            solutionSteps: [
                {
                    title: "Zone Heat Score™",
                    description: "Calculates the 'temperature' of every price zone in real-time. Combining volatility, comment velocity, and order book density into a single score (0-100)."
                },
                {
                    title: "Natural Language Trading",
                    description: "Ask your coin-specific AI to find opportunities. It scans the Zone, calculates risk, and delivers a complete trade plan."
                },
                {
                    title: "Context-Anchored Chat",
                    description: "Talk from your zone. A Zone with verified social positions reveals trapped vs. winning traders."
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
                { value: "Real-time", label: "Order Flow Aggregation" },
                { value: "Context-Aware", label: "Social Sentiment" }
            ],
            useCases: [
                {
                    title: "Retail Traders",
                    description: "Find high-probability setups with Zone Heat Scores and execute with AI-generated trade plans."
                },
                {
                    title: "Social Traders",
                    description: "See exactly where the community is positioned—trapped or winning—anchored to price levels."
                },
                {
                    title: "Analysts",
                    description: "Use Programmable AI Charting to automate technical analysis and share zone templates."
                }
            ],
            businessModel: "Freemium SaaS (Basic Zones) + Pro Subscription (AI Models & Heat Score) + B2B API.",
            roadmap: [
                {
                    quarter: "Phase 1 (Live)",
                    status: "in_progress",
                    title: "Text-to-Indicator",
                    items: ["Highlight 4H Order Blocks", "Custom Logic Creation", "Natural Language Query"]
                },
                {
                    quarter: "Phase 2",
                    status: "upcoming",
                    title: "Text-to-Drawing",
                    items: ["Auto-generate trendlines", "Structural Sweeps", "Fib levels across Zones"]
                },
                {
                    quarter: "Phase 3",
                    status: "upcoming",
                    title: "Zone Sharing",
                    items: ["One-click template sharing", "Community Zone Libraries", "Social Alpha Integration"]
                }
            ],
            customerStories: [
                {
                    quote: "Stockhoo's signals helped me identify trends before the market moved.",
                    author: "James T.",
                    role: "Day Trader",
                    company: "Self-Employed"
                },
                {
                    quote: "The sentiment analysis is surprisingly accurate and actionable.",
                    author: "Sarah L.",
                    role: "Analyst",
                    company: "FinTech Partners"
                }
            ]
        },
        ko: {
            tag: "AI 트레이딩 인텔리전스 • 전략적 시장 우위 • 예측 통찰력",
            primaryButtonText: "터미널 실행",
            oneLiner: "최첨단 AI 기반 예측 통찰력과 실행 가능한 전략을 제공하여 트레이더가 금융 시장에서 전략적 우위를 확보하고 수익성 있는 기회를 포착하도록 지원합니다.",
            story: (
                <>
                    <p className="mb-6 text-lg md:text-xl leading-relaxed text-neutral-300">
                        데이터의 홍수 속에서 미래의 신호(Signal)를 포착하여, 누구나 시장의 주도권을 쥐게 합니다.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-neutral-300">
                        구역은 모든 트레이딩 맥락과 의사결정을 위한 최소 단위가 됩니다. 10개의 다른 화면을 보는 대신,
                        StockHoo는 CEX 데이터, 오더 플로우, 고래의 움직임, 청산 클러스터를 하나의 실행 가능한 뷰로 통합합니다.
                    </p>
                </>
            ),
            problemPoints: [
                {
                    title: "정보 과부하",
                    description: "트레이더들은 차트, 온체인 지표, 소셜 센티먼트에 흩어진 데이터에 압도당하고 있습니다."
                },
                {
                    title: "소셜 신호의 노이즈",
                    description: "텔레그램과 디스코드는 시끄럽습니다. 누가 손실 중인지, 이익 중인지, 아니면 갇혀 있는지를 가격 구역에 고정하여 파악해야 합니다."
                },
                {
                    title: "일반적인 AI 모델",
                    description: "표준 LLM은 금융 데이터에 대해 환각 현상을 보입니다. 특정 자산의 미시 구조(BTC vs SOL)에 맞게 미세 조정된 모델이 필요합니다."
                }
            ],
            solutionSteps: [
                {
                    title: "구역 열기 점수(Zone Heat Score™)",
                    description: "실시간으로 모든 가격 구역의 '온도'를 계산합니다. 변동성, 댓글 속도, 호가창 밀도를 하나의 점수(0-100)로 결합합니다."
                },
                {
                    title: "자연어 트레이딩",
                    description: "코인별 특화 AI에게 기회를 찾도록 요청하세요. AI가 구역을 스캔하고, 리스크를 계산하며, 완벽한 트레이딩 계획을 제시합니다."
                },
                {
                    title: "맥락 고정 채팅",
                    description: "구역에서 대화하세요. 검증된 소셜 포지션이 있는 구역은 갇힌 트레이더와 승리하는 트레이더를 드러냅니다."
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
                { value: "0-100", label: "구역 열기 점수" },
                { value: "3", label: "특화 모델" },
                { value: "Real-time", label: "오더 플로우 집계" },
                { value: "Context-Aware", label: "소셜 센티먼트" }
            ],
            useCases: [
                {
                    title: "개인 트레이더",
                    description: "구역 열기 점수로 높은 확률의 셋업을 찾고 AI가 생성한 트레이딩 계획으로 실행하세요."
                },
                {
                    title: "소셜 트레이더",
                    description: "커뮤니티가 정확히 어디에 위치해 있는지—갇혀 있는지, 이기고 있는지—를 가격 레벨에 고정하여 확인하세요."
                },
                {
                    title: "분석가",
                    description: "프로그래밍 가능한 AI 차트를 사용하여 기술적 분석을 자동화하고 구역 템플릿을 공유하세요."
                }
            ],
            businessModel: "부분 유료화 SaaS (기본 구역) + 프로 구독 (AI 모델 & 열기 점수) + B2B API.",
            roadmap: [
                {
                    quarter: "1단계 (라이브)",
                    status: "in_progress",
                    title: "Text-to-Indicator",
                    items: ["4시간 오더 블록 강조", "사용자 정의 로직 생성", "자연어 쿼리"]
                },
                {
                    quarter: "2단계",
                    status: "upcoming",
                    title: "Text-to-Drawing",
                    items: ["추세선 자동 생성", "구조적 스윕", "구역 간 피보나치 레벨"]
                },
                {
                    quarter: "3단계",
                    status: "upcoming",
                    title: "구역 공유",
                    items: ["원클릭 템플릿 공유", "커뮤니티 구역 라이브러리", "소셜 알파 통합"]
                }
            ],
            customerStories: [
                {
                    quote: "Stockhoo의 신호는 시장이 움직이기 전에 트렌드를 파악하는 데 도움을 주었습니다.",
                    author: "James T.",
                    role: "Day Trader",
                    company: "Self-Employed"
                },
                {
                    quote: "감성 분석이 놀랍도록 정확하고 실행 가능합니다.",
                    author: "Sarah L.",
                    role: "Analyst",
                    company: "FinTech Partners"
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
                        <p className="text-neutral-400 leading-relaxed mb-6">
                            {language === 'en'
                                ? "The Heat Score is a composite metric derived from three primary data streams. It identifies 'Coiled' zones where price compression meets high social sentiment and pending order volume, often preceding a breakout."
                                : "열기 점수는 세 가지 주요 데이터 스트림에서 파생된 복합 지표입니다. 가격 압축이 높은 소셜 센티먼트 및 대기 주문량과 만나는 '응축된(Coiled)' 구역을 식별하여, 종종 돌파 직전의 상황을 포착합니다."}
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-4 p-3 bg-emerald-900/10 rounded-lg border border-emerald-500/10">
                                <div className="w-12 text-sm font-bold text-emerald-400">40%</div>
                                <div className="flex-1">
                                    <div className="text-sm font-bold text-white">Order Book Density</div>
                                    <div className="text-xs text-neutral-500">Bid/Ask depth ratio at key levels</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-3 bg-emerald-900/10 rounded-lg border border-emerald-500/10">
                                <div className="w-12 text-sm font-bold text-emerald-400">30%</div>
                                <div className="flex-1">
                                    <div className="text-sm font-bold text-white">Social Velocity</div>
                                    <div className="text-xs text-neutral-500">Rate of change in mention volume (CT/Telegram)</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-3 bg-emerald-900/10 rounded-lg border border-emerald-500/10">
                                <div className="w-12 text-sm font-bold text-emerald-400">30%</div>
                                <div className="flex-1">
                                    <div className="text-sm font-bold text-white">On-Chain Flow</div>
                                    <div className="text-xs text-neutral-500">Net exchange inflows/outflows</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-4">{language === 'en' ? "DPO Model Tuning" : "DPO 모델 튜닝"}</h4>
                        <p className="text-neutral-400 leading-relaxed">
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