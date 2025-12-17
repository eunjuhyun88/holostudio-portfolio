import React from 'react';
import BusinessLayout from '../components/BusinessLayout';

export default function Elememetal() {
    return (
        <BusinessLayout 
            name="EleMEMEtal"
            tag="Gaming Economy"
            oneLiner="A safety-native UGC PvP card battler where skill meets trusted creative freedom."
            heroImage="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/44fe158d2_2025-12-1785335.png"
            
            problemPoints={[
                {
                    title: "Toxic UGC Risks",
                    description: "Games engaging with UGC often face moderation nightmares, leading to bans and brand damage."
                },
                {
                    title: "Pay-to-Win Fatigue",
                    description: "Traditional TCGs rely on expensive card packs, alienating skilled players who want fair competition."
                },
                {
                    title: "Lack of Ownership",
                    description: "Players pour hours into creating assets and strategies but own nothing when the servers shut down."
                }
            ]}

            solutionSteps={[
                {
                    title: "Safety-Native Design",
                    description: "We integrate safety checks directly into the creation flow, ensuring all UGC is brand-safe by default."
                },
                {
                    title: "Strategic Depth",
                    description: "A 5-10 minute high-density decision game with 'Power Bank' and 'Joker' mechanics for skill-based comebacks."
                },
                {
                    title: "Play-to-Prove",
                    description: "A meritocratic economy where your skill and creative contributions verify your reputation and earnings."
                }
            ]}

            screenshots={[
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/5fa26c821_2025-12-1785323.png",
                    caption: "Immersive Card Battle Arena"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/44fe158d2_2025-12-1785335.png",
                    caption: "Asset Customization & Utility"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/b43c87824_2025-12-1785330.png",
                    caption: "Strategic Deck Building"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/749ad41cd_2025-12-1785337.png",
                    caption: "Scalable Game Infrastructure"
                }
            ]}

            useCases={[
                {
                    title: "Competitive Gamers",
                    description: "Experience a fair, skill-based meta where prediction and timing beat spending."
                },
                {
                    title: "Creators",
                    description: "Design unique skins and assets that are verified, usable, and tradable."
                },
                {
                    title: "Streamers",
                    description: "Engage audiences with high-stakes, fast-paced matches perfect for live viewing."
                }
            ]}

            businessModel="Asset Marketplace Fees + Battle Pass / Season Passes + B2B UGC Safety Module."

            roadmap={[
                {
                    quarter: "Q2 2025",
                    title: "Alpha Launch",
                    items: ["Core PvP Loop", "Basic Asset Minting", "Closed Beta Testing"]
                },
                {
                    quarter: "Q4 2025",
                    title: "Creator Economy",
                    items: ["UGC Marketplace", "Creator Tools v1", "Community Tournaments"]
                },
                {
                    quarter: "2026",
                    title: "Metaverse Integration",
                    items: ["Cross-game Assets", "3D World Expansion", "Mobile Release"]
                }
            ]}
        />
    );
}