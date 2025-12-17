import React from 'react';
import BusinessLayout from '../components/BusinessLayout';

export default function Stocku() {
    return (
        <BusinessLayout 
            name="Stocku (StockHoo)"
            tag="AI Trading Intelligence"
            oneLiner="Zone-based AI trading agent optimized via Direct Preference Optimization (DPO)."
            heroImage="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/6b3b31eef_2025-12-1785326.png"
            
            problemPoints={[
                {
                    title: "Information Overload",
                    description: "Traders are overwhelmed by fragmented data across charts, on-chain metrics, and social sentiment."
                },
                {
                    title: "Generic AI Failures",
                    description: "Standard LLMs hallucinate on financial data and lack understanding of specific coin microstructures."
                },
                {
                    title: "Risk Management Gaps",
                    description: "Retail traders often lack the institutional-grade risk frameworks needed to survive volatility."
                }
            ]}

            solutionSteps={[
                {
                    title: "Zone-Based Intelligence",
                    description: "We identify critical supply/demand zones and overlay real-time social sentiment and order flow."
                },
                {
                    title: "DPO-Optimized Agents",
                    description: "Our AI agents are fine-tuned using Direct Preference Optimization to align with profitable trading behaviors."
                },
                {
                    title: "3-Layer Normalization",
                    description: "Proprietary data pipeline normalizes raw, rank, and bucket data while preserving critical extreme values."
                }
            ]}

            screenshots={[
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/6b3b31eef_2025-12-1785326.png",
                    caption: "Distributed GPU Training Network"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/749ad41cd_2025-12-1785337.png",
                    caption: "Decentralized Data Infrastructure"
                }
            ]}

            stats={[
                { value: "70+", label: "Indicators Analyzed" },
                { value: "35%", label: "Directional Accuracy" },
                { value: "408B", label: "Market Size (2024)" },
                { value: "12-16", label: "Weeks to MVP" }
            ]}

            useCases={[
                {
                    title: "Retail Traders",
                    description: "Access institutional-grade signals and automated risk management suggestions."
                },
                {
                    title: "DAO Treasuries",
                    description: "Monitor portfolio health and execute zone-based rebalancing."
                },
                {
                    title: "Market Makers",
                    description: "Enhance strategies with sentiment-aware order flow analysis."
                }
            ]}

            businessModel="Freemium SaaS (Basic Zones) + Pro Subscription (AI Models) + B2B API."

            roadmap={[
                {
                    quarter: "Phase 1 (W1-4)",
                    title: "Data Pipeline",
                    items: ["Raw Data Collection", "10 Core Indicators", "3-Layer Normalization"]
                },
                {
                    quarter: "Phase 2 (W5-8)",
                    title: "DPO Training",
                    items: ["Labeling System", "Preference Pair Generation", "Model Fine-tuning"]
                },
                {
                    quarter: "Phase 3 (W9+)",
                    title: "MVP Launch",
                    items: ["BTC/ETH/SOL Support", "Zone UI Overlay", "Mobile App Beta"]
                }
            ]}
        />
    );
}