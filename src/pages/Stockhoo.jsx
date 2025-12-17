import React from 'react';
import BusinessLayout from '../components/BusinessLayout';
import StockhooDemo from '../components/interactive/StockhooDemo';

export default function Stockhoo() {
    return (
        <BusinessLayout 
            name="Stockhoo"
            theme="stockhoo"
            HeroComponent={StockhooDemo}
            showAnalytics={true}
            tag="AI Trading Intelligence"
            primaryButton={{ text: "Launch Terminal", url: "http://stockhoo.playarts.ai" }}
            deckUrl="https://docsend.com/view/ari494ikfzsuix7z"
            oneLiner="The Operating System for Context-Aware Trading"
            story={
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
            }
            heroImage="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/42c331243_2025-12-1822844.png"
            
            problemPoints={[
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
            ]}

            solutionSteps={[
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
            ]}

            screenshots={[
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
            ]}

            stats={[
                { value: "0-100", label: "Zone Heat Score" },
                { value: "3", label: "Specialized Models" },
                { value: "Real-time", label: "Order Flow Aggregation" },
                { value: "Context-Aware", label: "Social Sentiment" }
            ]}

            useCases={[
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
            ]}

            businessModel="Freemium SaaS (Basic Zones) + Pro Subscription (AI Models & Heat Score) + B2B API."

            roadmap={[
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
            ]}
        />
    );
}