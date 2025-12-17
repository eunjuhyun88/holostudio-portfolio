import React from 'react';
import BusinessLayout from '../components/BusinessLayout';

export default function AidGuardian() {
    return (
        <BusinessLayout 
            name="AiD Guardian"
            tag="Enterprise Safety"
            oneLiner="Multi-modal brand safety & compliance engine for AI content (image, video, audio, text)."
            heroImage="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/11636bcbb_2025-12-1785347.png"
            
            problemPoints={[
                {
                    title: "Regulatory Compliance Gap",
                    description: "Enterprises struggle to meet EU AI Act & DSA transparency requirements for generated content."
                },
                {
                    title: "Brand Safety Risks",
                    description: "Standard text filters miss NSFW/Toxic content in images and videos, risking brand reputation."
                },
                {
                    title: "Black Box AI",
                    description: "Lack of explainability in why content was flagged or blocked creates operational bottlenecks."
                }
            ]}

            solutionSteps={[
                {
                    title: "Multi-Modal Analysis",
                    description: "Native understanding of Vision, Audio, and Language to catch context-dependent violations."
                },
                {
                    title: "Real-time GARM Scoring",
                    description: "Maps content risks to industry-standard GARM categories for advertiser suitability."
                },
                {
                    title: "Full Audit Trail",
                    description: "Immutable logs of every decision for regulatory compliance and human-in-the-loop review."
                }
            ]}

            screenshots={[
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/0355a95a1_2025-12-1785353.png",
                    caption: "High Accuracy Performance Metrics"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/8765e1d18_2025-12-1785357.png",
                    caption: "GARM Framework Classification"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/23ae40722_2025-12-1792042.png",
                    caption: "Developer-Friendly API Documentation"
                },
                {
                    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_690a8b149c85bcc4b04fe025/75b195b83_2025-12-1785350.png",
                    caption: "Comprehensive Multi-Modal Analysis"
                }
            ]}

            stats={[
                { value: "100%", label: "Brand Safety Accuracy" },
                { value: "86.9%", label: "Violence Recall" },
                { value: "<10ms", label: "CLIP Latency" },
                { value: "8", label: "GARM Categories" }
            ]}

            useCases={[
                {
                    title: "Ad Tech Platforms",
                    description: "Ensure ad placements don't appear next to toxic AI-generated content."
                },
                {
                    title: "Social Media Apps",
                    description: "Automated moderation for user-generated image and video content."
                },
                {
                    title: "Enterprise GenAI",
                    description: "Prevent internal AI tools from generating non-compliant or harmful outputs."
                }
            ]}

            businessModel="Enterprise Licensing + API Usage Pricing. Tiered plans for volume and retention."

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