import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Zap, RotateCcw, Swords, Crown, Skull } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function ElememetalDemo() {
    const [cards, setCards] = useState([
        { id: 1, type: 'fire', power: 3, level: 1 },
        { id: 2, type: 'fire', power: 3, level: 1 },
        { id: 3, type: 'water', power: 4, level: 1 }
    ]);
    const [bank, setBank] = useState(0);
    const [enemyPower, setEnemyPower] = useState(15);
    const [message, setMessage] = useState("Merge fire cards to boost power!");
    const [gameState, setGameState] = useState('playing'); // playing, won, lost

    const types = {
        fire: { color: 'text-orange-500', bg: 'bg-orange-950/40', border: 'border-orange-500/50', icon: '🔥' },
        water: { color: 'text-blue-500', bg: 'bg-blue-950/40', border: 'border-blue-500/50', icon: '💧' },
        joker: { color: 'text-purple-500', bg: 'bg-purple-950/40', border: 'border-purple-500/50', icon: '🃏' }
    };

    const mergeCards = (idx1, idx2) => {
        const c1 = cards[idx1];
        const c2 = cards[idx2];
        
        // Basic merge logic
        if (c1.type === c2.type || c1.type === 'joker' || c2.type === 'joker') {
            const newType = c1.type === 'joker' ? c2.type : c1.type;
            const isJokerMerge = c1.type === 'joker' || c2.type === 'joker';
            const multiplier = isJokerMerge ? 3 : 2.5;
            
            const newCard = { 
                id: Date.now(), 
                type: newType, 
                power: Math.floor((c1.power + c2.power) * 1.5), 
                level: Math.max(c1.level, c2.level) + 1 
            };
            
            const remaining = cards.filter((_, i) => i !== idx1 && i !== idx2);
            setCards([...remaining, newCard]);
            setBank(prev => prev + 5);
            setMessage(isJokerMerge ? "JOKER MERGE! 3x BOOSTER!" : "Element Fusion! Power Up!");
            
            // Spawn Joker chance
            if (Math.random() > 0.7) {
                setTimeout(() => {
                    setCards(prev => [...prev, { id: Date.now() + 1, type: 'joker', power: 5, level: 1 }]);
                    setMessage("A Wild Joker Appeared!");
                }, 500);
            }
        }
    };

    const attack = () => {
        const totalPower = cards.reduce((acc, c) => acc + c.power, 0);
        if (totalPower >= enemyPower) {
            setGameState('won');
            setMessage("VICTORY! Enemy defeated!");
        } else {
            setGameState('lost');
            setMessage("Defeat! Not enough power.");
        }
    };

    const reset = () => {
        setCards([
            { id: 1, type: 'fire', power: 3, level: 1 },
            { id: 2, type: 'fire', power: 3, level: 1 },
            { id: 3, type: 'water', power: 4, level: 1 }
        ]);
        setBank(0);
        setEnemyPower(25); // Increase difficulty
        setGameState('playing');
        setMessage("Merge duplicate cards to level up!");
    };

    // Calculate total power
    const totalPower = cards.reduce((acc, c) => acc + c.power, 0);

    return (
        <div className="w-full h-full bg-[#050505] p-6 relative overflow-hidden flex flex-col rounded-3xl border border-white/5">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/50 via-[#050505] to-[#050505] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col h-full justify-between">
                {/* Header / Stats */}
                <div className="flex justify-between items-start">
                    <div className="flex gap-6">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">Total Power</span>
                            <div className={`text-2xl font-black flex items-center gap-2 ${totalPower >= enemyPower ? 'text-green-500' : 'text-white'}`}>
                                <Swords className="w-5 h-5" /> {totalPower}
                                <span className="text-xs text-neutral-500 font-normal self-end mb-1">/ {enemyPower} REQUIRED</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">Bank</span>
                            <div className="text-2xl font-black text-yellow-500 flex items-center gap-1">
                                <Zap className="w-4 h-4 fill-yellow-500" /> {bank}
                            </div>
                        </div>
                    </div>

                    <div className="text-right">
                        <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">Enemy Boss</div>
                        <div className="text-xl font-bold text-red-500 flex items-center justify-end gap-2">
                            {enemyPower} HP <Skull className="w-4 h-4" />
                        </div>
                    </div>
                </div>

                {/* Game Area */}
                <div className="flex-1 flex flex-col items-center justify-center py-8">
                    {gameState === 'playing' ? (
                        <div className="flex justify-center flex-wrap gap-4 items-end min-h-[160px]">
                            <AnimatePresence mode="popLayout">
                                {cards.map((card, idx) => (
                                    <motion.div
                                        key={card.id}
                                        layout
                                        initial={{ scale: 0.8, opacity: 0, y: 50 }}
                                        animate={{ scale: 1, opacity: 1, y: 0 }}
                                        exit={{ scale: 0, opacity: 0 }}
                                        whileHover={{ y: -10, scale: 1.05 }}
                                        onClick={() => {
                                            // Simple click-to-merge with neighbor for demo
                                            if (idx < cards.length - 1) {
                                                const next = cards[idx + 1];
                                                if (next.type === card.type || card.type === 'joker' || next.type === 'joker') {
                                                    mergeCards(idx, idx + 1);
                                                }
                                            }
                                        }}
                                        className={`
                                            w-24 h-36 rounded-xl border-2 flex flex-col items-center justify-center cursor-pointer relative group transition-colors
                                            ${types[card.type].bg} ${types[card.type].border}
                                            ${card.level > 1 ? 'shadow-lg shadow-white/5' : ''}
                                        `}
                                    >
                                        <div className={`text-2xl mb-1`}>{types[card.type].icon}</div>
                                        <div className={`text-xs font-bold uppercase mb-2 ${types[card.type].color}`}>
                                            {card.type}
                                        </div>
                                        <div className="text-3xl font-black text-white">{card.power}</div>
                                        <div className="text-[10px] text-neutral-400 mt-2">LVL {card.level}</div>
                                        
                                        {/* Merge Hint */}
                                        {idx < cards.length - 1 && (cards[idx+1].type === card.type || card.type === 'joker' || cards[idx+1].type === 'joker') && (
                                            <div className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                                                <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs shadow-lg animate-bounce">
                                                    +
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center"
                        >
                            {gameState === 'won' ? (
                                <div className="text-yellow-500 mb-4">
                                    <Crown className="w-16 h-16 mx-auto mb-2" />
                                    <h3 className="text-2xl font-bold">VICTORY!</h3>
                                </div>
                            ) : (
                                <div className="text-red-500 mb-4">
                                    <Skull className="w-16 h-16 mx-auto mb-2" />
                                    <h3 className="text-2xl font-bold">DEFEATED</h3>
                                </div>
                            )}
                            <Button onClick={reset} className="bg-white text-black hover:bg-neutral-200">
                                Play Again
                            </Button>
                        </motion.div>
                    )}
                </div>

                {/* Footer Controls */}
                <div className="flex flex-col items-center gap-4">
                    <div className="bg-white/5 px-4 py-2 rounded-full text-sm text-neutral-300 border border-white/10 animate-pulse">
                        {message}
                    </div>
                    
                    {gameState === 'playing' && (
                        <div className="flex gap-3">
                            <Button 
                                onClick={attack}
                                disabled={totalPower < enemyPower}
                                className={`w-32 rounded-full font-bold ${
                                    totalPower >= enemyPower 
                                    ? 'bg-red-600 hover:bg-red-500 text-white animate-pulse' 
                                    : 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                                }`}
                            >
                                ATTACK BOSS
                            </Button>
                            <Button variant="outline" size="icon" onClick={reset} className="rounded-full border-neutral-700 hover:bg-white/10 text-white">
                                <RotateCcw className="w-4 h-4" />
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}