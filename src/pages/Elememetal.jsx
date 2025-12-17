import React from 'react';
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Zap, Shield, Target, Database, Layers } from 'lucide-react';
import { motion } from "framer-motion";
import Background3D from '@/components/Background3D';
import SEO from '@/components/SEO';

const FeatureCard = ({ icon: Icon, title, description, color = "text-orange-500" }) => (
    <div className="bg-gradient-to-br from-[#1a0500] to-black border border-orange-900/20 p-8 rounded-lg relative overflow-hidden group hover:border-orange-500/50 transition-all duration-300">
        <div className={`w-12 h-12 rounded-lg bg-orange-900/10 border border-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className={`w-6 h-6 ${color}`} />
        </div>
        <h3 className="text-xl font-black uppercase tracking-wide text-white mb-4">{title}</h3>
        <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
    </div>
);

const SystemCard = ({ icon: Icon, title, sub, desc, color }) => (
    <div className="bg-black/40 border border-white/10 p-6 rounded-lg hover:bg-white/5 transition-colors">
        <div className="flex items-center gap-3 mb-4">
            <div className={`p-2 rounded bg-white/5 ${color}`}>
                <Icon className="w-5 h-5" />
            </div>
            <div>
                <h4 className="font-black uppercase text-white tracking-wider">{title}</h4>
                <span className="text-[10px] uppercase text-orange-500 font-bold px-1.5 py-0.5 bg-orange-500/10 rounded">{sub}</span>
            </div>
        </div>
        <p className="text-sm text-neutral-400 leading-relaxed">{desc}</p>
    </div>
);

export default function Elememetal() {
    return (
        <div className="bg-[#050100] min-h-screen font-sans text-white selection:bg-orange-500/30">
            <SEO title="EleMEMEtal" description="THINK. GAMBLE. STRIKE. A 5-10 minute competitive card battler." />
            
            {/* 1. HERO SECTION */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                {/* Background Layer */}
                <div className="absolute inset-0 bg-[url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/28eac1091_2025-12-1463702.png')] bg-cover bg-center opacity-40 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#050100]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-600/10 via-transparent to-transparent" />

                <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-8">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Live Alpha Available
                        </div>
                        
                        <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-6 uppercase italic leading-[0.9]">
                            <span className="block text-white drop-shadow-2xl">Think.</span>
                            <span className="block text-white drop-shadow-2xl">Gamble.</span>
                            <span className="block text-orange-500 drop-shadow-[0_0_30px_rgba(249,115,22,0.6)]">Strike.</span>
                        </h1>
                        
                        <p className="text-lg md:text-2xl text-neutral-300 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                            A 5-10 minute competitive card battler where every round is a mind game. 
                            Simultaneous turns. Instant resolution. <span className="text-white font-bold border-b border-orange-500">Zero RNG on damage.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button className="bg-[#FFCC00] hover:bg-[#FFD633] text-black h-14 px-10 rounded-sm font-black text-lg uppercase tracking-wide skew-x-[-10deg] hover:skew-x-[-5deg] transition-all shadow-[0_0_20px_rgba(255,204,0,0.4)]">
                                <span className="skew-x-[10deg]">Join Waitlist</span>
                            </Button>
                            <Button variant="outline" className="border-orange-500/50 text-white hover:bg-orange-500/10 h-14 px-10 rounded-sm font-bold text-lg uppercase tracking-wide bg-black/50 backdrop-blur-md">
                                <Play className="w-5 h-5 mr-3 fill-current" /> Watch Gameplay
                            </Button>
                        </div>

                        <div className="mt-16 flex justify-center gap-8 md:gap-16 text-xs md:text-sm font-bold uppercase tracking-widest text-neutral-500">
                            <div className="flex items-center gap-2 border border-white/10 px-4 py-2 rounded bg-black/40">
                                <Target className="w-4 h-4 text-orange-500" /> 1v1 PvP Strategy
                            </div>
                            <div className="flex items-center gap-2 border border-white/10 px-4 py-2 rounded bg-black/40">
                                <Zap className="w-4 h-4 text-orange-500" /> 5-10 Min Matches
                            </div>
                            <div className="flex items-center gap-2 border border-white/10 px-4 py-2 rounded bg-black/40">
                                <Database className="w-4 h-4 text-orange-500" /> Web3 Ownership
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. WHY IT'S DIFFERENT */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
                            Why It's <span className="text-orange-500">Different</span>
                        </h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto" />
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        <FeatureCard 
                            icon={Database}
                            title="Bank Leverage"
                            description="Look weak on purpose to build Power Bank. +18 damage guaranteed later."
                            color="text-blue-400"
                        />
                        <FeatureCard 
                            icon={Layers}
                            title="Commitment"
                            description="Limited swing tools force real decisions: spend now or hold for the kill?"
                            color="text-purple-400"
                        />
                        <FeatureCard 
                            icon={Zap}
                            title="Readable Mastery"
                            description="No hidden info besides the hand. The best players win by reading timing."
                            color="text-yellow-400"
                        />
                        <FeatureCard 
                            icon={Shield}
                            title="Skill Gap"
                            description="Deterministic outcomes mean the better strategist wins. Not the luckier one."
                            color="text-orange-500"
                        />
                    </div>
                </div>
            </section>

            {/* 3. CORE SYSTEMS */}
            <section className="py-32 bg-[#0A0200] border-y border-orange-900/20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 border-l-4 border-orange-500 pl-6">
                        Core Systems
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <SystemCard 
                            icon={Zap} 
                            title="Enhance" 
                            sub="System" 
                            desc="Merge same-element cards into one stronger card."
                            color="text-yellow-400"
                        />
                        <SystemCard 
                            icon={Target} 
                            title="Combo" 
                            sub="System" 
                            desc="Consecutive plays scale damage x1.3 / x1.6 / x1.9."
                            color="text-orange-500"
                        />
                        <SystemCard 
                            icon={Database} 
                            title="Power Bank" 
                            sub="System" 
                            desc="Empty slots generate PB. Spend for fixed damage."
                            color="text-blue-400"
                        />
                        <SystemCard 
                            icon={Shield} 
                            title="Joker" 
                            sub="System" 
                            desc="Only 5 per game. Attack / Defense / Utility."
                            color="text-purple-400"
                        />
                    </div>
                </div>
            </section>

            {/* 4. ELEMENTAL MASTERY */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black uppercase text-[#FFCC00] mb-4">Elemental Mastery</h2>
                    <p className="text-neutral-400 mb-16">Interact with the elements to reveal their combat properties.</p>
                    
                    <div className="relative aspect-[16/9] max-w-5xl mx-auto bg-black/50 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                        {/* Placeholder for interactive element chart */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img 
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/74f24a4a6_2025-12-1463657.png" 
                                alt="Elemental Chart"
                                className="w-full h-full object-contain p-8"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. GAMEPLAY DEEP DIVE */}
            <section className="py-32 bg-neutral-900/20">
                <div className="max-w-7xl mx-auto px-6 space-y-32">
                    
                    {/* Step 1 */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <img 
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/e2787b505_2025-12-1463656.png" 
                                alt="Simultaneous Lock"
                                className="rounded-xl border border-white/10 shadow-2xl w-full"
                            />
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                                <Target className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-3xl font-black uppercase italic mb-4">1. Simultaneous Lock</h3>
                            <p className="text-neutral-400 leading-relaxed text-lg">
                                Place 0-4 cards into your slots. Your opponent does the same. 
                                Once both hit <span className="text-[#FFCC00] font-bold">SUBMIT</span>, everything locks in. 
                                You can't see their moves until the reveal.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="w-12 h-12 bg-[#FFCC00] rounded-lg flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-3xl font-black uppercase italic mb-4">2. Deterministic Combat</h3>
                            <p className="text-neutral-400 leading-relaxed text-lg mb-6">
                                Resolution is instant and math-based.
                            </p>
                            <div className="bg-black/40 border border-yellow-500/30 p-6 rounded-lg">
                                <div className="text-xs text-yellow-500 font-bold uppercase tracking-widest mb-2">Damage Formula</div>
                                <div className="font-mono text-white text-lg">
                                    (Base × Combo) + Joker + PowerBank × Affinity
                                </div>
                            </div>
                            <p className="text-sm text-neutral-500 mt-4">
                                If your <span className="text-blue-400 font-bold">Water</span> card hits their <span className="text-orange-500 font-bold">Fire</span> card, you deal 1.5x damage.
                            </p>
                        </div>
                        <div>
                            <img 
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/ad39718b4_2025-12-1463655.png" 
                                alt="Deterministic Combat"
                                className="rounded-xl border border-white/10 shadow-2xl w-full"
                            />
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <img 
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942a6bbf2c58576b46b84ee/203fa4b9f_2025-12-1463654.png" 
                                alt="Deep Mechanics"
                                className="rounded-xl border border-white/10 shadow-2xl w-full"
                            />
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
                                <Layers className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-3xl font-black uppercase italic mb-4">3. Deep Mechanics</h3>
                            <p className="text-neutral-400 leading-relaxed text-lg">
                                Every card played matters. Survive a round to keep your <span className="text-purple-400 font-bold">Combo</span> multiplier alive. 
                                Merge duplicates to <span className="text-yellow-400 font-bold">Enhance</span> a single powerful strike.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* CTA FOOTER */}
            <section className="py-32 text-center bg-gradient-to-t from-orange-900/20 to-transparent">
                <h2 className="text-5xl md:text-7xl font-black uppercase italic mb-12">
                    Are You <span className="text-orange-500">Ready?</span>
                </h2>
                <Button className="bg-[#FFCC00] hover:bg-[#FFD633] text-black h-16 px-12 rounded-sm font-black text-xl uppercase tracking-wide skew-x-[-10deg] hover:skew-x-[-5deg] transition-all shadow-[0_0_40px_rgba(255,204,0,0.3)]">
                    <span className="skew-x-[10deg]">Join The Arena</span>
                </Button>
            </section>
        </div>
    );
}