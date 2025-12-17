import React from 'react';
import BusinessLayout from '../components/BusinessLayout';

export default function Elememetal() {
    return (
        <BusinessLayout 
            name="EleMEMEtal"
            tag="Gaming Economy"
            oneLiner="Safety-native UGC PvP game economy where creation and distribution are trust-managed by design."
            heroImage="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/44fe158d2_2025-12-1785335.png"
            
            problemPoints={[
                {
                    title: "Toxic UGC in Gaming",
                    description: "User-generated content in games is often toxic or non-compliant, leading to bans and revenue loss."
                },
                {
                    title: "Economic Imbalance",
                    description: "Traditional game economies fail to reward the creators of high-quality content fairly."
                },
                {
                    title: "Safety Bottlenecks",
                    description: "Manual moderation slows down the release of new UGC, killing community momentum."
                }
            ]}

            solutionSteps={[
                {
                    title: "Safety-Native Design",
                    description: "Content safety checks are embedded directly into the creation flow, preventing toxic assets."
                },
                {
                    title: "Trust-Managed Distribution",
                    description: "Only verified safe content is distributed, ensuring a brand-safe environment for sponsors."
                },
                {
                    title: "Fair Reward Economy",
                    description: "Creators earn tokens based on the utility and popularity of their safe assets in PvP battles."
                }
            ]}

            screenshots={[
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/5fa26c821_2025-12-1785323.png",
                    caption: "Award-Winning Game Design"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/44fe158d2_2025-12-1785335.png",
                    caption: "Gamification & Asset Utility"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/b43c87824_2025-12-1785330.png",
                    caption: "Dual-NFT Game Mechanics"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/749ad41cd_2025-12-1785337.png",
                    caption: "Infrastructure Architecture"
                }
            ]}

            useCases={[
                {
                    title: "Game Studios",
                    description: "Outsource UGC safety and economy management to a trusted module."
                },
                {
                    title: "Indie Developers",
                    description: "Quickly integrate safe UGC features without building moderation teams."
                },
                {
                    title: "Gamers & Creators",
                    description: "Play and earn in a safe, fair, and transparent ecosystem."
                }
            ]}

            businessModel="Transaction Fees on Asset Trades + Battle Pass Sales + API Access for Studios."

            roadmap={[
                {
                    quarter: "Q2 2025",
                    title: "Alpha Launch",
                    items: ["Core PvP Loop", "Basic Asset Minting"]
                },
                {
                    quarter: "Q4 2025",
                    title: "Creator Economy",
                    items: ["UGC Marketplace", "Creator Tools v1"]
                },
                {
                    quarter: "2026",
                    title: "Metaverse Integration",
                    items: ["Cross-game Assets", "3D World Expansion"]
                }
            ]}
        />
    );
}