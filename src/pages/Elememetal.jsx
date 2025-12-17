import React from 'react';
import BusinessLayout from '../components/BusinessLayout';

export default function Elememetal() {
    return (
        <BusinessLayout 
            name="EleMEMEtal"
            theme="elememetal"
            tag="Gaming Economy"
            oneLiner="Safety-native UGC PvP game economy designed for the AI era."
            heroImage="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/15a1915ba_2025-12-17100148.png"
            
            heroStats={[
                { value: "0%", label: "Pay-To-Win" },
                { value: "100%", label: "Ownership" },
                { value: "5-10m", label: "Match Time" },
                { value: "Safe", label: "UGC Native" }
            ]}

            problemPoints={[
                {
                    title: "The UGC Bottleneck",
                    description: "User-Generated Content is the future of gaming, but quality control, copyright, and toxicity management are massive operational bottlenecks."
                },
                {
                    title: "Outdated Economies",
                    description: "Traditional game economies aren't built for the speed and scale of AI-generated asset creation and distribution."
                },
                {
                    title: "Trust & Verification",
                    description: "Community-driven growth requires a trust layer to verify asset fairness and prevent abuse in competitive environments."
                }
            ]}

            solutionSteps={[
                {
                    title: "Create & Submit",
                    description: "Players craft unique cards/assets using AI tools. Submission is seamless."
                },
                {
                    title: "Native Safety Rails",
                    description: "Built-in AiD Guardian integration filters toxicity and IP infringement instantly."
                },
                {
                    title: "Compete & Earn",
                    description: "Verified assets enter the PvP economy. Value is generated through skill-based play and settled transparently."
                }
            ]}

            screenshots={[
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/7d50a039d_2025-12-17100209.png",
                    caption: "Deterministic Combat: 5-10 min PvP"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/cc19758fb_2025-12-17100150.png",
                    caption: "The Forge: AI Asset Creation"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/86f4b6cbe_2025-12-17100153.png",
                    caption: "Player Owned Marketplace"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/906125d10_2025-12-17100207.png",
                    caption: "Safety-Verified Asset Details"
                }
            ]}

            useCases={[
                {
                    title: "Competitive Gamers",
                    description: "Skill-based PvP with true ownership of assets and no pay-to-win mechanics."
                },
                {
                    title: "Creators",
                    description: "Monetize creativity by designing skins/cards that are safe and tradable."
                },
                {
                    title: "Communities",
                    description: "Build guilds and asset pools backed by verified provenance."
                }
            ]}

            businessModel="Game revenue (market fees, season passes), UGC economy transaction fees, and Partner IP collaborations."

            roadmap={[
                {
                    quarter: "Phase 1",
                    title: "Alpha Launch",
                    items: ["Core PvP Loop", "Basic Asset Forging"]
                },
                {
                    quarter: "Phase 2",
                    title: "UGC Economy",
                    items: ["Creator Marketplace", "Safety Integration"]
                },
                {
                    quarter: "Phase 3",
                    title: "Global Scale",
                    items: ["Mobile Release", "Esports Tournaments"]
                }
            ]}

            relatedBusinesses={[
                {
                    name: "AiD Guardian",
                    description: "Powering the safety layer",
                    path: "/AidGuardian"
                },
                {
                    name: "PlayArts",
                    description: "Asset provenance",
                    path: "/PlayArts"
                }
            ]}
        />
    );
}