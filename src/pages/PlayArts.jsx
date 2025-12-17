import React from 'react';
import BusinessLayout from '../components/BusinessLayout';

export default function PlayArts() {
    return (
        <BusinessLayout 
            name="PlayArts"
            tag="Media Protocol"
            oneLiner="The Proof-of-Creation protocol for verifiable AI media provenance and value routing."
            heroImage="PlayArts Protocol Overview: Visualizing the flow of provenace from creation to value settlement"
            
            problemPoints={[
                {
                    title: "Attribution Crisis",
                    description: "Creators lose ownership as their style is copied by AI models without consent or credit."
                },
                {
                    title: "Value Leakage",
                    description: "Platforms capture 100% of the value from viral AI content, leaving prompters and remixers with nothing."
                },
                {
                    title: "Provenance Gap",
                    description: "No standard exists to verify the 'Who, What, and How' of AI content creation across the web."
                }
            ]}

            solutionSteps={[
                {
                    title: "Context Anchoring (MCP)",
                    description: "We capture the generation context (prompt, model, params) at the source via the Model Context Passport."
                },
                {
                    title: "Sentinel Verification",
                    description: "A distributed network of nodes verifies the content's origin and integrity using perceptual hashing."
                },
                {
                    title: "Value Routing",
                    description: "Smart contracts automatically route rewards to the original creator and amplifiers when value is generated."
                }
            ]}

            screenshots={[
                {
                    url: "Growth metrics dashboard showing asset minting and funding milestones",
                    caption: "Protocol Growth & Seed Funding"
                },
                {
                    url: "Timeline visualization of protocol development and ecosystem expansion",
                    caption: "Strategic Roadmap: Protocol Expansion"
                },
                {
                    url: "Interface showing community rewards and engagement mechanics",
                    caption: "Community Gamification Mechanics"
                },
                {
                    url: "Diagram illustrating the solution for attribution and ownership",
                    caption: "Solving the AI Attribution Problem"
                }
            ]}

            stats={[
                { value: "500K+", label: "Users" },
                { value: "1M+", label: "Assets Anchored" },
                { value: "$2M", label: "Seed Round" },
                { value: "99.7%", label: "PoC Accuracy" }
            ]}

            useCases={[
                {
                    title: "AI Power Users",
                    description: "Prove ownership of your prompt engineering and creative output."
                },
                {
                    title: "Meme Creators",
                    description: "Track the viral spread of your memes and earn from their impact."
                },
                {
                    title: "Enterprise Brands",
                    description: "Secure IP rights and verify the authenticity of brand assets."
                }
            ]}

            businessModel="Verification Fees (Node Revenue) + Protocol Transaction Fees + B2B SDK Licensing."

            roadmap={[
                {
                    quarter: "Q1-Q2 2025",
                    title: "Foundation Phase",
                    items: ["Sentinel v3.0 Production", "MCP Registry v1.0", "MemePing v1.0 Launch"]
                },
                {
                    quarter: "Q3-Q4 2025",
                    title: "Expansion Phase",
                    items: ["Strong PoC (On-chain)", "Public Node Beta", "Cross-chain Support"]
                },
                {
                    quarter: "2026",
                    title: "Decentralization",
                    items: ["Permissionless Nodes", "DAO Governance", "ZK-PoC Research"]
                }
            ]}
        />
    );
}