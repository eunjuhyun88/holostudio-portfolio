import React from 'react';
import BusinessLayout from '../components/BusinessLayout';

export default function PlayArts() {
    return (
        <BusinessLayout 
            name="PlayArts"
            theme="default" // Using default (Indigo/Purple style matches PlayArts)
            tag="Media Protocol"
            oneLiner="Creation-time verifiable provenance + cross-platform impact tracking for AI media."
            heroImage="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/d07d506fa_2025-12-17101348.png"
            
            heroStats={[
                { value: "100%", label: "Verifiable" },
                { value: "X-Chain", label: "Tracking" },
                { value: "0", label: "Spoofing" },
                { value: "Standard", label: "C2PA Compatible" }
            ]}

            problemPoints={[
                {
                    title: "The Attribution Crisis",
                    description: "Once AI content is published, 'who made it' and 'how it was made' becomes impossible to verify. Post-hoc detection is unreliable."
                },
                {
                    title: "Value Leakage",
                    description: "Content spreads, remixes, and goes viral, but the original value (and revenue) fails to route back to the creator or IP holder."
                },
                {
                    title: "Trust Deficit",
                    description: "Without provenance, audiences cannot distinguish between authentic creative work and malicious deepfakes or unauthorized clones."
                }
            ]}

            solutionSteps={[
                {
                    title: "Proof-of-Creation (PoC)",
                    description: "Cryptographically sign and anchor the creation context (tools, prompts, assets) at the moment of generation."
                },
                {
                    title: "Cross-platform Tracking",
                    description: "Persistent identifiers track content as it spreads, gets remixed, or triggers engagement across the web."
                },
                {
                    title: "Value Events",
                    description: "Convert engagement into settlement-ready value events for automated licensing, royalties, or campaign attribution."
                }
            ]}

            screenshots={[
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/4dd42cdc5_2025-12-17101324.png",
                    caption: "Proof-of-Creation Protocol Pipeline"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/fe14da8dc_2025-12-17101323.png",
                    caption: "Impact Tracking Dashboard"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/0a86b4560_2025-12-17101320.png",
                    caption: "Value Routing Network"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/8e411e6d3_2025-12-17101318.png",
                    caption: "Creator Attribution View"
                }
            ]}

            useCases={[
                {
                    title: "IP Holders & Brands",
                    description: "Track usage of brand assets and verify authorized AI-generated marketing campaigns."
                },
                {
                    title: "Creator Economy",
                    description: "Automate revenue sharing for collaborative AI creation and remixes."
                },
                {
                    title: "Media Platforms",
                    description: "Integrate a provenance layer to display 'Verified Human/AI' badges to users."
                }
            ]}

            businessModel="B2B integration fees, usage-based protocol fees for signing/verification, and partner ecosystem revenue share."

            roadmap={[
                {
                    quarter: "Next",
                    title: "Platform Integrations",
                    items: ["Major Social Platform Pilot", "Creative Tool Plugins"]
                },
                {
                    quarter: "Later",
                    title: "Standardization",
                    items: ["Open Event Schema Release", "C2PA Interoperability"]
                },
                {
                    quarter: "Future",
                    title: "Decentralization",
                    items: ["Validator Network Expansion", "DAO Governance"]
                }
            ]}

            relatedBusinesses={[
                {
                    name: "AiD Guardian",
                    description: "Ensure safety before provenance",
                    path: "/AidGuardian"
                },
                {
                    name: "Stocku",
                    description: "On-chain data intelligence",
                    path: "/Stocku"
                }
            ]}
        />
    );
}