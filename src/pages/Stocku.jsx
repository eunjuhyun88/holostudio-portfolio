import React from 'react';
import BusinessLayout from '../components/BusinessLayout';

export default function Stocku() {
    return (
        <BusinessLayout 
            name="Stocku"
            theme="default" // Stocku uses Green usually, default (with green accents in images) works, or add 'stocku' theme if needed. Sticking to default for consistency.
            tag="Trading Intelligence"
            oneLiner="Zone-based trading intelligence powered by coin-specific small models trained on on-chain + market microstructure data."
            heroImage="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/c6d3a54f5_2025-12-17101246.png"
            
            heroStats={[
                { value: "Zone", label: "Intelligence" },
                { value: "On-Chain", label: "Data Native" },
                { value: "DPO", label: "Optimized" },
                { value: "Small", label: "Specialized Models" }
            ]}

            problemPoints={[
                {
                    title: "One Size Fits None",
                    description: "BTC, ETH, and Altcoins have vastly different market structures and on-chain behaviors. Generic models fail to capture these nuances."
                },
                {
                    title: "The 'Why' is Missing",
                    description: "Black-box signals give probability without reasoning. Traders need context—market zones, liquidity walls, and on-chain flows."
                },
                {
                    title: "Decision Fatigue",
                    description: "Information overload from endless charts and discord groups. Traders need actionable, zone-based intelligence, not just more data."
                }
            ]}

            solutionSteps={[
                {
                    title: "Multi-Source Pipeline",
                    description: "Ingest and normalize data from On-chain, CEX/DEX Orderbooks, Derivatives, and Sentiment streams."
                },
                {
                    title: "Coin-Specific Training",
                    description: "Train specialized small models (SLMs) tuned to the specific microstructure and behavior of each asset."
                },
                {
                    title: "Zone Intelligence",
                    description: "Output actionable 'Zone' signals with risk controls, rather than just raw buy/sell indicators."
                }
            ]}

            screenshots={[
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/c6d3a54f5_2025-12-17101246.png",
                    caption: "Zone-based Trading Intelligence UI"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/9a9b7b4d1_2025-12-17101244.png",
                    caption: "Coin-Specific Model Performance"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/d08a68c6f_2025-12-17101242.png",
                    caption: "On-Chain & Microstructure Data Feed"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/ed08266f4_2025-12-17101239.png",
                    caption: "Signal Reasoning & Risk Analysis"
                }
            ]}

            useCases={[
                {
                    title: "Pro Traders",
                    description: "Enhance decision making with AI that understands specific coin behaviors and zones."
                },
                {
                    title: "DAO Treasuries",
                    description: "Optimize execution and risk management for large treasury assets."
                },
                {
                    title: "Market Makers",
                    description: "Integrate specialized microstructure signals into algorithmic strategies."
                }
            ]}

            businessModel="SaaS Subscription (Pro/Team), Premium Research/Signal Feed, and B2B API access for exchanges/funds."

            roadmap={[
                {
                    quarter: "Next",
                    title: "Data Pipeline",
                    items: ["Pipeline Stabilization", "Feature Engineering"]
                },
                {
                    quarter: "Later",
                    title: "Model Training",
                    items: ["DPO Optimization", "Backtesting Framework"]
                },
                {
                    quarter: "Future",
                    title: "Live MVP",
                    items: ["Beta Launch", "API Access"]
                }
            ]}

            relatedBusinesses={[
                {
                    name: "PlayArts",
                    description: "Value routing infrastructure",
                    path: "/PlayArts"
                },
                {
                    name: "AiD Guardian",
                    description: "Safety compliance",
                    path: "/AidGuardian"
                }
            ]}
        />
    );
}