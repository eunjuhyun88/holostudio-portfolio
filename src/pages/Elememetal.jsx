import React from 'react';
import BusinessLayout from '../components/BusinessLayout';

export default function Elememetal() {
    return (
        <BusinessLayout 
            name="EleMEMEtal"
            theme="elememetal"
            tag="Competitive Strategy"
            primaryButton={{ text: "Play Now", url: "http://game-dev.playarts.ai" }}
            deckUrl="https://docsend.com/view/97ziwvrkmetmqs82"
            oneLiner="THINK. GAMBLE. STRIKE. A 5-10 minute competitive card battler where every round is a mind game."
            heroImage="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/15a1915ba_2025-12-17100148.png"
            
            problemPoints={[
                {
                    title: "Bank Leverage",
                    description: "Look weak on purpose to build Power Bank. Sacrifice early rounds to unleash +18 guaranteed damage later."
                },
                {
                    title: "Readable Mastery",
                    description: "No hidden info besides the hand. Zero RNG damage ranges. The best players win by reading timing, not getting lucky."
                },
                {
                    title: "Skill Gap",
                    description: "Deterministic outcomes mean the better strategist wins. Limited swing tools force real commitment."
                }
            ]}

            solutionSteps={[
                {
                    title: "Core Mechanics: Enhance & Combo",
                    description: "Merge same-element cards to create a stronger unit. Chain consecutive plays to scale damage x1.3, x1.6, up to x1.9."
                },
                {
                    title: "The X-Factor: Power Bank",
                    description: "Empty slots aren't wasted—they generate Power Bank points. Spend them for fixed damage that ignores defense."
                },
                {
                    title: "Game Breaker: Joker System",
                    description: "Only 5 Jokers per game. Attack, Defense, or Utility. Using them at the perfect moment breaks the meta."
                }
            ]}

            screenshots={[
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/7d50a039d_2025-12-17100209.png",
                    caption: "Deterministic Combat: Instant Resolution"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/cc19758fb_2025-12-17100150.png",
                    caption: "The Forge: Craft, Upgrade, Salvage"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/86f4b6cbe_2025-12-17100153.png",
                    caption: "Player Owned Marketplace"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/906125d10_2025-12-17100207.png",
                    caption: "Joker Genesis: AI-Powered Cards"
                }
            ]}

            stats={[
                { value: "0%", label: "Pay-To-Win" },
                { value: "100%", label: "Ownership" },
                { value: "5-10m", label: "Match Time" },
                { value: "Zero", label: "Randomness" }
            ]}

            useCases={[
                {
                    title: "Our Mission",
                    description: "We are gamers building for gamers. We believe in games that respect your time and reward your skill."
                },
                {
                    title: "True Ownership",
                    description: "Every card is an NFT. Trade freely. Complete ownership of your achievements and assets."
                },
                {
                    title: "The Team",
                    description: "Built by veterans from Unity, Netmarble, and Smilegate at the intersection of AI, Gaming, and Web3."
                }
            ]}

            businessModel="Player-Owned Economy. Craft cards in The Forge using Shards and Dust. Trade on the open marketplace. No card packs, no gacha."

            roadmap={[
                {
                    quarter: "Phase 1",
                    title: "Alpha Launch",
                    items: ["Simultaneous Turns", "Instant Resolution", "Zero Randomness"]
                },
                {
                    quarter: "Phase 2",
                    title: "Joker Genesis",
                    items: ["AI-Generated Cards", "Experimental Meta", "Unique Abilities"]
                },
                {
                    quarter: "Phase 3",
                    title: "Global Expansion",
                    items: ["Mobile Release", "Esports Tournaments", "Cross-IP Collabs"]
                }
            ]}
        />
    );
}