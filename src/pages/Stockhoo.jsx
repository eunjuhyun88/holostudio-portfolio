import React from 'react';
import BusinessLayout from '../components/BusinessLayout';
import StockhooDemo from '../components/interactive/StockhooDemo';
import { useLanguage } from '@/components/LanguageContext';

export default function Stockhoo() {
    const { language } = useLanguage();

    const content = {
        en: {
            tag: "AI Trading Intelligence",
            oneLiner: "The Operating System for Context-Aware Trading",
            primaryBtn: "Launch Terminal",
            story: (
                <>
                    <p className="mb-6">
                        <strong>The Zone Context Primitive.</strong> ATR-based bands define dynamic Zones for each coin and timeframe. 
                        Each Zone aggregates CEX, on-chain, perps, liquidations, and social chat.
                    </p>
                    <p>
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
                { caption: "Social Alpha: Talk From Your Zone" },
                { caption: "AI Architecture: Coin-Specialized Models" },
                { caption: "AI Agent: Natural Language Trading" }
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
            tag: "AI 트레이딩 인텔리전스",
            oneLiner: "컨텍스트 인식 트레이딩을 위한 운영 체제",
            primaryBtn: "터미널 실행",
            story: (
                <>
                    <p className="mb-6">
                        <strong>존(Zone) 컨텍스트 프리미티브.</strong> ATR 기반 밴드는 각 코인과 시간대에 대해 동적인 Zone을 정의합니다.
                        각 Zone은 CEX, 온체인, 무기한 선물, 청산 및 소셜 채팅 데이터를 집계합니다.
                    </p>
                    <p>
                        Zone은 모든 트레이딩 컨텍스트와 결정의 기본 단위가 됩니다. 10개의 서로 다른 화면을 보는 대신,
                        StockHoo는 CEX 데이터, 오더 플로우, 고래의 움직임, 청산 클러스터를 하나의 실행 가능한 뷰로 통합합니다.
                    </p>
                </>
            ),
            problemPoints: [
                {
                    title: "정보 과부하",
                    description: "트레이더들은 차트, 온체인 지표, 소셜 센티먼트에 흩어진 파편화된 데이터에 압도당합니다."
                },
                {
                    title: "노이즈가 많은 소셜 신호",
                    description: "텔레그램과 디스코드는 시끄럽습니다. 누가 손실 중인지, 수익 중인지, 물려 있는지를 가격 존에 앵커링하여 알아야 합니다."
                },
                {
                    title: "일반적인 AI 모델",
                    description: "표준 LLM은 금융 데이터에서 환각을 일으킵니다. 특정 자산의 미세 구조(BTC vs SOL)에 맞춰 파인튜닝된 모델이 필요합니다."
                }
            ],
            solutionSteps: [
                {
                    title: "Zone Heat Score™",
                    description: "실시간으로 모든 가격 존의 '온도'를 계산합니다. 변동성, 코멘트 속도, 오더북 밀도를 0-100의 단일 점수로 결합합니다."
                },
                {
                    title: "자연어 트레이딩",
                    description: "코인별 특화 AI에게 기회를 찾도록 요청하세요. Zone을 스캔하고, 리스크를 계산하며, 완전한 트레이드 계획을 제공합니다."
                },
                {
                    title: "컨텍스트 앵커 채팅",
                    description: "당신의 존에서 대화하세요. 검증된 소셜 포지션이 있는 Zone은 물린 트레이더와 승리하는 트레이더를 드러냅니다."
                }
            ],
            screenshots: [
                { caption: "소셜 알파: 당신의 존에서 대화하세요" },
                { caption: "AI 아키텍처: 코인 특화 모델" },
                { caption: "AI 에이전트: 자연어 트레이딩" }
            ],
            stats: [
                { value: "0-100", label: "Zone Heat Score" },
                { value: "3", label: "특화 모델" },
                { value: "Real-time", label: "오더 플로우 집계" },
                { value: "Context-Aware", label: "소셜 센티먼트" }
            ],
            useCases: [
                {
                    title: "개인 트레이더",
                    description: "Zone Heat Score로 높은 확률의 셋업을 찾고 AI가 생성한 트레이드 계획으로 실행하세요."
                },
                {
                    title: "소셜 트레이더",
                    description: "커뮤니티가 어디에 위치해 있는지—물려 있는지 승리 중인지—가격 레벨에 앵커링하여 정확히 확인하세요."
                },
                {
                    title: "애널리스트",
                    description: "프로그래밍 가능한 AI 차팅을 사용하여 기술적 분석을 자동화하고 존 템플릿을 공유하세요."
                }
            ],
            businessModel: "부분 유료화 SaaS (기본 존) + 프로 구독 (AI 모델 & Heat Score) + B2B API.",
            roadmap: [
                {
                    quarter: "Phase 1 (Live)",
                    title: "텍스트-지표 변환",
                    items: ["4시간봉 오더 블록 강조", "커스텀 로직 생성", "자연어 쿼리"]
                },
                {
                    quarter: "Phase 2",
                    title: "텍스트-드로잉 변환",
                    items: ["추세선 자동 생성", "구조적 스윕(Sweeps)", "Zone 간 피보나치 레벨"]
                },
                {
                    quarter: "Phase 3",
                    title: "Zone 공유",
                    items: ["원클릭 템플릿 공유", "커뮤니티 Zone 라이브러리", "소셜 알파 통합"]
                }
            ]
        }
    };

    const c = content[language];

    const screenshots = [
        { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/b1e5d09d4_2025-12-1822847.png", caption: c.screenshots[0].caption },
        { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/f20b5241d_2025-12-1822848.png", caption: c.screenshots[1].caption },
        { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/1fd50bfcc_2025-12-1822850.png", caption: c.screenshots[2].caption }
    ];

    return (
        <BusinessLayout 
            name="Stockhoo"
            theme="stockhoo"
            HeroComponent={StockhooDemo}
            showAnalytics={true}
            tag={c.tag}
            primaryButton={{ text: c.primaryBtn, url: "http://stockhoo.playarts.ai" }}
            deckUrl="https://docsend.com/view/ari494ikfzsuix7z"
            oneLiner={c.oneLiner}
            story={c.story}
            heroImage="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/42c331243_2025-12-1822844.png"
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