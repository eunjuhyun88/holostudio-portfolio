import React from 'react';
import BusinessLayout from '../components/BusinessLayout';

export default function Stocku() {
    return (
        <BusinessLayout 
            name="Stocku"
            tag="Trading Intelligence"
            oneLiner="Zone-based trading intelligence with coin-specific small models trained on on-chain + market microstructure."
            heroImage="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/6b3b31eef_2025-12-1785326.png"
            
            problemPoints={[
                {
                    title: "Information Overload",
                    description: "Traders drown in noise across social media, on-chain data, and price charts."
                },
                {
                    title: "Generalized Models",
                    description: "Generic LLMs fail to capture the specific microstructure and behavioral patterns of individual tokens."
                },
                {
                    title: "Risk Management Failure",
                    description: "Retail traders lack the sophisticated risk controls and zone-based analysis of institutions."
                }
            ]}

            solutionSteps={[
                {
                    title: "Zone-Based Analysis",
                    description: "Identifies critical supply/demand zones and risk levels specific to each asset's history."
                },
                {
                    title: "Specialized Small Models",
                    description: "Coin-specific AI models trained on granular order book data and on-chain movements."
                },
                {
                    title: "Risk-First Intelligence",
                    description: "Prioritizes capital preservation with clear invalidation levels and risk/reward scoring."
                }
            ]}

            screenshots={[
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/6b3b31eef_2025-12-1785326.png",
                    caption: "GPU Mesh Network for Model Training"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/749ad41cd_2025-12-1785337.png",
                    caption: "Decentralized Infrastructure"
                }
            ]}

            useCases={[
                {
                    title: "Retail Traders",
                    description: "Get institutional-grade signals and risk frameworks."
                },
                {
                    title: "DAO Treasuries",
                    description: "Manage portfolio risk with automated zone monitoring."
                },
                {
                    title: "Market Makers",
                    description: "Fine-tune strategies with microstructure-aware AI inputs."
                }
            ]}

            businessModel="Freemium Subscription (Basic Zones free, Pro Models paid) + B2B API for Exchanges."

            roadmap={[
                {
                    quarter: "Q3 2025",
                    title: "Beta Launch",
                    items: ["Top 10 Tokens Support", "Basic Zone Alerts"]
                },
                {
                    quarter: "Q4 2025",
                    title: "Pro Analytics",
                    items: ["On-chain Correlation", "Custom Model Training"]
                },
                {
                    quarter: "2026",
                    title: "Trading Automation",
                    items: ["Execution Bot Integration", "Portfolio Balancing"]
                }
            ]}
        />
    );
}