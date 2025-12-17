import React from 'react';
import BusinessLayout from '../components/BusinessLayout';
import ElememetalDemo from '../components/interactive/ElememetalDemo';

export default function Elememetal() {
    return (
        <BusinessLayout 
            name="EleMEMEtal"
            theme="elememetal"
            HeroComponent={ElememetalDemo}
            showAnalytics={true}
            tag="Competitive Strategy"
            primaryButton={{ text: "Play Now", url: "http://game-dev.playarts.ai" }}
            deckUrl="https://docsend.com/view/97ziwvrkmetmqs82"
            oneLiner="Imagine if gaming assets were as liquid as elements."
            story={
                <>
                    <p className="mb-6">
                        Competitive gaming has become stale. Pay-to-win mechanics and loot boxes 
                        have replaced skill and strategy. Players spend thousands on assets they don't truly own, 
                        trapped in walled gardens.
                    </p>
                    <p>
                        EleMEMEtal changes the game. We've built a competitive battler where every card is an asset, 
                        every match is a high-stakes mind game, and the economy is entirely player-driven. 
                        No hidden algorithms, just pure strategy.
                    </p>
                </>
            }
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

            partners={
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Selected By */}
                    <div>
                        <p className="text-xs font-bold text-neutral-500 uppercase tracking-[0.2em] mb-6">Selected By</p>
                        <div className="flex flex-wrap items-center gap-4">
                            {/* NVIDIA */}
                            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors">
                                <div className="text-xl font-bold text-white">NVIDIA</div>
                                <div className="h-6 w-px bg-white/20" />
                                <div className="text-[10px] font-bold text-neutral-400 leading-tight">Inception<br/>Program</div>
                            </div>
                            {/* Google Cloud */}
                            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors">
                                <div className="text-xl font-bold text-white">Google Cloud</div>
                                <div className="text-[10px] text-neutral-400 border border-neutral-600 px-1.5 py-0.5 rounded-full">Partner</div>
                            </div>
                        </div>
                    </div>

                    {/* Backed By */}
                    <div>
                        <p className="text-xs font-bold text-neutral-500 uppercase tracking-[0.2em] mb-6">Backed By</p>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-6 opacity-90">
                            {/* Arbitrum */}
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-[#2D374B] flex items-center justify-center border border-white/10">
                                    <div className="w-4 h-4 bg-[#12AAFF] transform rotate-45" />
                                </div>
                                <span className="font-bold text-lg text-neutral-300">Arbitrum</span>
                            </div>
                            {/* Alchemy */}
                            <div className="font-bold text-xl text-blue-500">alchemy</div>
                            {/* OnePiece Labs */}
                            <div className="flex items-center gap-1">
                                <span className="font-bold text-xl text-white">onepiece</span>
                                <span className="text-xs text-neutral-500 font-mono">labs</span>
                            </div>
                            {/* Seedify */}
                            <div className="bg-white/5 px-3 py-1 rounded text-sm font-bold text-white border border-white/10">
                                SEEDIFY
                            </div>
                            {/* AppWorks */}
                            <div className="font-bold text-xl text-[#FF6B00]">AppWorks</div>
                            {/* Story */}
                            <div className="font-black italic text-xl text-white">STORY</div>
                            {/* OKX Hackathon */}
                            <div className="flex flex-col leading-none">
                                <span className="text-[10px] text-neutral-500 uppercase">Winner</span>
                                <span className="font-bold text-white">OKX Hackathon</span>
                            </div>
                        </div>
                    </div>
                </div>
            }
        />
    );
}