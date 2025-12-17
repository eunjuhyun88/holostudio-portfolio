import React from 'react';
import BusinessLayout from '../components/BusinessLayout';

export default function AidGuardian() {
    return (
        <BusinessLayout 
            name="AiD Guardian"
            theme="default"
            tag="Enterprise Safety"
            oneLiner="Enterprise-grade multi-modal safety & compliance engine for AI-generated content."
            heroImage="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/5adf17538_202522_22_34GMT9.png" // Using a dashboard-like placeholder or keeping existing
            
            heroStats={[
                { value: "100%", label: "Accuracy" },
                { value: "86.9%", label: "Precision" },
                { value: "<10ms", label: "Latency" },
                { value: "8 Categories", label: "GARM Coverage" }
            ]}

            problemPoints={[
                {
                    title: "Reactive is Impossible",
                    description: "Manual moderation cannot keep pace with the exponential explosion of AI-generated content. Post-hoc safety is no longer a viable strategy."
                },
                {
                    title: "Multi-Modal Blindspots",
                    description: "Text-only filters fail against complex risks in Images, Video, and Audio. Frame-level analysis is required for true safety."
                },
                {
                    title: "Compliance & Audit",
                    description: "With EU AI Act and platform policies tightening, enterprises need verifiable logs and explainable safety decisions, not black boxes."
                }
            ]}

            solutionSteps={[
                {
                    title: "Ingest",
                    description: "Seamlessly ingest Text, Image, Video, and Audio streams via high-throughput APIs."
                },
                {
                    title: "Analyze",
                    description: "Real-time multi-modal classification using frame-level signals and historical context analysis."
                },
                {
                    title: "Enforce & Report",
                    description: "Apply granular policies (Block/Label/Route) and generate audit-ready compliance reports automatically."
                }
            ]}

            screenshots={[
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/5adf17538_202522_22_34GMT9.png", // Reusing dashboard img
                    caption: "Multi-Modal Brand Safety Dashboard"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/79d5d9a01_2025-12-17101353.png", // Analysis cards placeholder
                    caption: "Frame-level detection for video content risks"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/d91b1dc0d_2025-12-17101351.png", // Table/Framework placeholder
                    caption: "GARM-aligned reporting for enterprise compliance workflows"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/3a148f0ad_2025-12-17101349.png", // Timeline/Analysis placeholder
                    caption: "Audit-ready history analysis for accountability"
                }
            ]}

            useCases={[
                {
                    title: "Generative Marketing",
                    description: "Ensure all AI-generated marketing assets meet brand safety guidelines before publishing."
                },
                {
                    title: "UGC Platforms",
                    description: "Automated compliance filtering for high-volume user-generated content streams."
                },
                {
                    title: "Gaming & Metaverse",
                    description: "Real-time safety layer for 3D assets and interactive experiences."
                }
            ]}

            businessModel="SaaS subscription (tiered by volume & modalities) with Enterprise licensing and optional Managed Policy Operations."

            roadmap={[
                {
                    quarter: "Next",
                    title: "Developer Platform",
                    items: ["Public API/SDK Release", "Self-serve Policy Builder"]
                },
                {
                    quarter: "Later",
                    title: "Ecosystem Integration",
                    items: ["Major Platform Connectors", "Marketplace for Safety Models"]
                },
                {
                    quarter: "Future",
                    title: "Advanced Compliance",
                    items: ["Automated Regulatory Reporting", "Cross-jurisdiction Rule Sets"]
                }
            ]}

            relatedBusinesses={[
                {
                    name: "EleMEMEtal",
                    description: "UGC safety applied to gaming economy",
                    path: "/Elememetal"
                },
                {
                    name: "PlayArts",
                    description: "Provenance + safety as trust rails",
                    path: "/PlayArts"
                }
            ]}
        />
    );
}