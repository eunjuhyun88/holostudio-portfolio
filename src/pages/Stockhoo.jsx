import React from 'react';
import BusinessLayout from '../components/BusinessLayout';
import StockhooDemo from '../components/interactive/StockhooDemo';
import { useLanguage } from '@/components/LanguageContext';
import { BarChart3, Bot, Zap, Globe, Database, Smartphone, Activity, MessageSquare, TrendingUp } from 'lucide-react';

export default function Stockhoo() {
    const { language } = useLanguage();

    const content = {
        en: {
            tag: "AI Trading Intelligence",
            primaryButtonText: "Launch Terminal",
            oneLiner: "The Operating System for Context-Aware Trading",
            story: (
                <>
                    <p className="mb-6 text-lg md:text-xl leading-relaxed text-neutral-300">
                        <strong>The Zone Context Primitive.</strong> ATR-based bands define dynamic Zones for each coin and timeframe. 
                        Each Zone aggregates CEX, on-chain, perps, liquidations, and social chat.
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
                    title: "Text-to-Indicator",
                    items: ["Highlight 4H Order Blocks", "Custom Logic Creation", "Natural Language Query"]
                },
                {
                    quarter: "Phase 2",
                    title: "Text-to-Drawing",
                    items: ["Auto-generate trendlines", "Structural Sweeps", "Fib levels across Zones"]
                },
                {
                    quarter: "Phase 3",
                    title: "Zone Sharing",
                    items: ["One-click template sharing", "Community Zone Libraries", "Social Alpha Integration"]
                }
            ]
        },
        ko: {
            tag: "AI 트레이딩 지능",
            primaryButtonText: "터미널 실행",
            oneLiner: "상황 인식 트레이딩을 위한 운영 체제",
            story: (
                <>
                    <p className="mb-6 text-lg md:text-xl leading-relaxed text-neutral-300">
                        <strong>구역 맥락 프리미티브(Zone Context Primitive).</strong> ATR 기반 밴드는 각 코인과 시간대별로 동적인 구역을 정의합니다.
                        각 구역은 CEX, 온체인, 무기한 선물, 청산, 소셜 채팅 데이터를 집계합니다.
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
                    title: "Text-to-Indicator",
                    items: ["4시간 오더 블록 강조", "사용자 정의 로직 생성", "자연어 쿼리"]
                },
                {
                    quarter: "2단계",
                    title: "Text-to-Drawing",
                    items: ["추세선 자동 생성", "구조적 스윕", "구역 간 피보나치 레벨"]
                },
                {
                    quarter: "3단계",
                    title: "구역 공유",
                    items: ["원클릭 템플릿 공유", "커뮤니티 구역 라이브러리", "소셜 알파 통합"]
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
        />
    );
}