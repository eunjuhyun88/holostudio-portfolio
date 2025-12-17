import React from 'react';
import BusinessLayout from '../components/BusinessLayout';

export default function PlayArts() {
    return (
        <BusinessLayout 
            name="PlayArts"
            tag="Media Protocol"
            oneLiner="Verifiable AI media provenance + cross-platform impact tracking + settlement-ready value events."
            heroImage="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/b79d90ba9_2025-12-1785343.png"
            
            problemPoints={[
                {
                    title: "Attribution Crisis",
                    description: "Creators lose control and credit as their style is copied by AI without attribution."
                },
                {
                    title: "Value Leakage",
                    description: "Platforms capture all the value from AI media, leaving creators and prompters with nothing."
                },
                {
                    title: "Provenance Gap",
                    description: "No standard way to verify the origin and remix history of viral AI content."
                }
            ]}

            solutionSteps={[
                {
                    title: "On-Chain Provenance",
                    description: "Every media asset is minted with an immutable record of its origin, prompt, and creator."
                },
                {
                    title: "Impact Tracking",
                    description: "Track how content travels and influences other creations across platforms."
                },
                {
                    title: "Value Settlement",
                    description: "Smart contracts automatically distribute royalties and rewards based on verified impact."
                }
            ]}

            screenshots={[
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/a60d41368_2025-12-1785347.png",
                    caption: "Seed Round Funding & Valuation"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/9e752e65e_2025-12-1785328.png",
                    caption: "Strategic Roadmap 2025-2026"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/9f7c0df24_2025-12-1785338.png",
                    caption: "Gamification & Community Strategy"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/a6d2cc0c8_2025-12-1785333.png",
                    caption: "Solving Core Media Problems"
                }
            ]}

            stats={[
                { value: "500K+", label: "Registered Users" },
                { value: "1M+", label: "Assets Minted" },
                { value: "$2M", label: "Seed Funding" },
                { value: "99.7%", label: "Accuracy" }
            ]}

            useCases={[
                {
                    title: "AI Artists & Creators",
                    description: "Protect style and earn from derivative works."
                },
                {
                    title: "Media Platforms",
                    description: "Integrate provenance verification to combat deepfakes."
                },
                {
                    title: "IP Holders",
                    description: "Monitor and monetize the usage of IP in AI generation."
                }
            ]}

            businessModel="Protocol Fees (Minting/Transfer) + B2B Licensing of Provenance SDK."

            roadmap={[
                {
                    quarter: "Q4 2025",
                    title: "Dual Card Battle Market",
                    items: ["TCG Launch", "In-game AI Media Utility"]
                },
                {
                    quarter: "Q1-Q2 2026",
                    title: "AI+Web3 Guardrail Core",
                    items: ["Full-Media AI Guardrails", "Video AI Safety Models"]
                },
                {
                    quarter: "2026+",
                    title: "Enterprise Expansion",
                    items: ["Global Compliance Certs", "DAO Governance"]
                }
            ]}
        />
    );
}