import React from 'react';
import BusinessLayout from '../components/BusinessLayout';

export default function AidGuardian() {
    return (
        <BusinessLayout 
            name="AiD Guardian"
            tag="Enterprise Safety"
            oneLiner="The enterprise-grade multi-modal safety & compliance engine for the AI era."
            heroImage="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/11636bcbb_2025-12-1785347.png"
            
            problemPoints={[
                {
                    title: "The Compliance Gap",
                    description: "New regulations like the EU AI Act & DSA require strict transparency and auditability for AI content that current tools can't provide."
                },
                {
                    title: "Multi-Modal Blindspots",
                    description: "Standard text filters fail to detect toxic or non-compliant content embedded in Images, Video frames, and Audio tracks."
                },
                {
                    title: "Black Box Liability",
                    description: "Without explainable AI decisions, enterprises face legal risks when content is flagged or blocked without clear reasoning."
                }
            ]}

            solutionSteps={[
                {
                    title: "Ingest & Decompose",
                    description: "We ingest multi-modal content and decompose it into text, visual frames, and audio segments for granular analysis."
                },
                {
                    title: "Analyze & Score",
                    description: "Our engine applies specialized models to score content against GARM safety categories and custom enterprise policies in real-time."
                },
                {
                    title: "Enforce & Report",
                    description: "Automatically block or flag content, generating an immutable audit trail for compliance reporting."
                }
            ]}

            screenshots={[
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/0355a95a1_2025-12-1785353.png",
                    caption: "Enterprise Dashboard: Real-time Risk Monitoring"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/8765e1d18_2025-12-1785357.png",
                    caption: "GARM-Aligned Categorization System"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/23ae40722_2025-12-1792042.png",
                    caption: "Developer-First API & SDK Documentation"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/75b195b83_2025-12-1785350.png",
                    caption: "Deep Multi-Modal Content Analysis"
                }
            ]}

            stats={[
                { value: "100%", label: "Accuracy Target" },
                { value: "86.9%", label: "Precision Rate" },
                { value: "<10ms", label: "Processing Latency" },
                { value: "8", label: "GARM Categories" }
            ]}

            useCases={[
                {
                    title: "Ad Tech Platforms",
                    description: "Protect advertiser brand equity by ensuring ads never appear next to toxic AI-generated content."
                },
                {
                    title: "UGC Platforms",
                    description: "Scale moderation for millions of images and videos with automated, policy-aware AI agents."
                },
                {
                    title: "Enterprise GenAI",
                    description: "Wrap internal AI tools with a safety layer to prevent generation of non-compliant or harmful outputs."
                }
            ]}

            businessModel="SaaS Subscription (Tiered by Volume) + Enterprise Licensing for On-Premise Deployment."

            roadmap={[
                {
                    quarter: "Q1 2025",
                    title: "Video Analysis v2",
                    items: ["Real-time streaming support", "Audio-visual correlation"]
                },
                {
                    quarter: "Q2 2025",
                    title: "Enterprise Suite",
                    items: ["SSO/SAML integration", "Custom policy engine"]
                },
                {
                    quarter: "Q3 2025",
                    title: "Global Certification",
                    items: ["EU AI Act Compliance Audit", "ISO 27001"]
                }
            ]}
        />
    );
}