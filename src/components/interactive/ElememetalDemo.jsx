import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Zap, RotateCcw } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function ElememetalDemo() {
    const [cards, setCards] = useState([
        { id: 1, type: 'fire', power: 3, level: 1 },
        { id: 2, type: 'fire', power: 3, level: 1 },
        { id: 3, type: 'water', power: 4, level: 1 }
    ]);
    const [bank, setBank] = useState(0);

    const mergeCards = () => {
        if (cards.length >= 2 && cards[0].type === cards[1].type) {
            const newCard = { 
                id: Date.now(), 
                type: cards[0].type, 
                power: cards[0].power * 2.5, 
                level: 2 
            };
            setCards([newCard, cards[2]].filter(Boolean));
            setBank(prev => prev + 2);
        }
    };

    const reset = () => {
        setCards([
            { id: 1, type: 'fire', power: 3, level: 1 },
            { id: 2, type: 'fire', power: 3, level: 1 },
            { id: 3, type: 'water', power: 4, level: 1 }
        ]);
        setBank(0);
    };

    return (
        <div className="w-full h-full bg-[#050505] p-6 relative overflow-hidden flex flex-col items-center justify-center">
            {/* Game UI Layer */}
            <div className="relative z-10 w-full max-w-md">
                <div className="flex justify-between items-center mb-8 px-4">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">Power Bank</span>
                        <div className="text-2xl font-black text-orange-500 flex items-center gap-1">
                            <Zap className="w-4 h-4 fill-orange-500" /> {bank}
                        </div>
                    </div>
                    <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={reset}
                        className="h-8 text-xs border-neutral-800 hover:bg-neutral-900 text-neutral-400"
                    >
                        <RotateCcw className="w-3 h-3 mr-1" /> Reset
                    </Button>
                </div>

                <div className="flex justify-center gap-4 mb-8 h-48 items-end">
                    <AnimatePresence>
                        {cards.map((card, idx) => (
                            <motion.div
                                key={card.id}
                                layout
                                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0, opacity: 0 }}
                                whileHover={{ y: -10 }}
                                onClick={idx < 2 && cards[0].type === cards[1].type && cards[0].level === 1 ? mergeCards : undefined}
                                className={`
                                    w-24 h-36 rounded-xl border-2 flex flex-col items-center justify-center cursor-pointer relative group
                                    ${card.type === 'fire' ? 'bg-orange-950/30 border-orange-500/50' : 'bg-blue-950/30 border-blue-500/50'}
                                    ${card.level > 1 ? 'shadow-[0_0_30px_rgba(249,115,22,0.3)]' : ''}
                                `}
                            >
                                <div className={`text-xs font-bold uppercase mb-2 ${card.type === 'fire' ? 'text-orange-400' : 'text-blue-400'}`}>
                                    {card.type}
                                </div>
                                <div className="text-3xl font-black text-white">{Math.floor(card.power)}</div>
                                <div className="text-[10px] text-neutral-500 mt-2">LVL {card.level}</div>
                                
                                {idx === 0 && cards[1] && cards[1].type === card.type && card.level === 1 && (
                                    <div className="absolute -right-6 top-1/2 -translate-y-1/2 z-20">
                                        <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs shadow-lg animate-bounce">
                                            +
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="text-center">
                    <div className="text-sm text-neutral-400 mb-2">
                        {cards.length === 3 
                            ? "Merge duplicate cards to level up!" 
                            : "Level Up! Base power multiplied by 2.5x"}
                    </div>
                </div>
            </div>
        </div>
    );
}