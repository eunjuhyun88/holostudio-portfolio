1: import React, { useState, useEffect, useRef } from 'react';
   2: import { Button } from "@/components/ui/button";
   3: import { ArrowRight, CheckCircle2, Users, Milestone, ArrowLeft } from 'lucide-react';
   4: import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from "framer-motion";
   5: import { Link } from 'react-router-dom';
   6: import { createPageUrl } from '@/utils';
   7: import SEO from '@/components/SEO';
   8: import AnalyticsDashboard from '@/components/analytics/AnalyticsDashboard';
   9: import { useLanguage } from '@/components/LanguageContext';
  10: import Starfield from '@/components/Starfield';
  11: import MouseGlowText from '@/components/MouseGlowText';
  12: 
  13: // Helper component to trigger background changes and animate entry
  14: const ColorSection = ({ children, onInView, className = "" }) => {
  15:     const ref = useRef(null);
  16:     const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });
  17: 
  18:     useEffect(() => {
  19:         if (isInView && onInView) {
  20:             onInView();
  21:         }
  22:     }, [isInView, onInView]);
  23: 
  24:     return (
  25:         <motion.div 
  26:             ref={ref} 
  27:             className={className}
  28:             initial={{ opacity: 0, y: 50 }}
  29:             whileInView={{ opacity: 1, y: 0 }}
  30:             viewport={{ once: true, margin: "-100px" }}
  31:             transition={{ duration: 0.8, ease: "easeOut" }}
  32:         >
  33:             {children}
  34:         </motion.div>
  35:     );
  36: };
  37: 
  38: export default function BusinessLayout({ 
  39:     name, 
  40:     tag, 
  41:     oneLiner, 
  42:     story, // Added story prop
  43:     heroImage, 
  44:     problemPoints = [], 
  45:     solutionSteps = [], 
  46:     screenshots = [], 
  47:     useCases = [], 
  48:     businessModel,
  49:     roadmap = [],
  50:     stats = [],
  51:     features = [],
  52:     specs = [], // New specs prop
  53:     videoUrl = null, // New videoUrl prop
  54:     theme = "default",
  55:     primaryButton = { text: "Request Access", url: null },
  56:     deckUrl = null,
  57:     HeroComponent = null,
  58:     showAnalytics = false,
  59:     heroContainerClass = "aspect-[16/9]",
  60:     partners = null
  61: }) {
  62:     const { language } = useLanguage();
  63:     
  64:     // Parallax & Mouse Interaction Setup
  65:     const mouseX = useMotionValue(0);
  66:     const mouseY = useMotionValue(0);
  67:     const springConfig = { damping: 25, stiffness: 70 };
  68:     const springX = useSpring(mouseX, springConfig);
  69:     const springY = useSpring(mouseY, springConfig);
  70: 
  71:     useEffect(() => {
  72:         const handleMouseMove = (e) => {
  73:             const { clientX, clientY } = e;
  74:             const { innerWidth, innerHeight } = window;
  75:             // Normalize to -1 to 1
  76:             mouseX.set((clientX / innerWidth) - 0.5);
  77:             mouseY.set((clientY / innerHeight) - 0.5);
  78:         };
  79:         window.addEventListener("mousemove", handleMouseMove);
  80:         return () => window.removeEventListener("mousemove", handleMouseMove);
  81:     }, []);
  82: 
  83:     // Parallax Transforms
  84:     const bgX = useTransform(springX, [-0.5, 0.5], ['-5%', '5%']);
  85:     const bgY = useTransform(springY, [-0.5, 0.5], ['-5%', '5%']);
  86:     const bgXReverse = useTransform(springX, [-0.5, 0.5], ['5%', '-5%']);
  87:     const bgYReverse = useTransform(springY, [-0.5, 0.5], ['5%', '-5%']);
  88: 
  89:     // Defines themes with specific color sequences for scroll sections
  90:     // Each sequence: [Hero, Problem/Challenge, Screenshots/Solution, Analytics, Roadmap/Footer]
  91:     // Adjusted logic to handle variable sections later, but ensuring enough colors
  92:     // Unified dark theme with subtle glows instead of hard background switches
  93:     const themes = {
  94:         default: {
  95:             accent: "text-indigo-500",
  96:             accentBg: "bg-indigo-500",
  97:             glow: "shadow-[0_0_100px_rgba(99,102,241,0.1)]",
  98:             gradient: "from-indigo-950/30",
  99:             buttonPrimary: "bg-white text-black hover:bg-neutral-200",
 100:             sectionColors: ["#0f172a", "#1e1b4b", "#312e81", "#172554", "#0f172a"],
 101:             glowHex: "rgba(99, 102, 241, 0.8)",
 102:             glowSecondary: "rgba(168, 85, 247, 0.5)" // Indigo -> Purple
 103:         },
 104:         elememetal: {
 105:             accent: "text-orange-500",
 106:             accentBg: "bg-orange-500",
 107:             glow: "shadow-[0_0_100px_rgba(249,115,22,0.1)]",
 108:             gradient: "from-orange-950/30",
 109:             buttonPrimary: "bg-orange-600 text-white hover:bg-orange-500",
 110:             // Deep Orange -> Dark Red -> Brown -> Dark Amber
 111:             sectionColors: ["#2a0a00", "#450a0a", "#3f1d0b", "#431407", "#2a0a00"],
 112:             glowHex: "rgba(249, 115, 22, 0.8)",
 113:             glowSecondary: "rgba(220, 38, 38, 0.5)" // Orange -> Red
 114:         },
 115:         aidguardian: {
 116:             accent: "text-indigo-400",
 117:             accentBg: "bg-indigo-500",
 118:             glow: "shadow-[0_0_100px_rgba(99,102,241,0.1)]",
 119:             gradient: "from-indigo-950/30",
 120:             buttonPrimary: "bg-indigo-600 text-white hover:bg-indigo-500",
 121:             // Deep Indigo -> Violet -> Blue -> Slate
 122:             sectionColors: ["#1e1b4b", "#2e1065", "#172554", "#1e3a8a", "#0f172a"],
 123:             glowHex: "rgba(99, 102, 241, 0.8)",
 124:             glowSecondary: "rgba(168, 85, 247, 0.5)" // Indigo -> Purple
 125:         },
 126:         playarts: {
 127:             accent: "text-lime-400",
 128:             accentBg: "bg-lime-500",
 129:             glow: "shadow-[0_0_100px_rgba(132,204,22,0.1)]",
 130:             gradient: "from-lime-950/30",
 131:             buttonPrimary: "bg-lime-500 text-black hover:bg-lime-400",
 132:             // Dark Lime -> Deep Green -> Teal -> Dark Moss
 133:             sectionColors: ["#1a2e05", "#064e3b", "#115e59", "#14532d", "#0f172a"],
 134:             glowHex: "rgba(132, 204, 22, 0.8)",
 135:             glowSecondary: "rgba(16, 185, 129, 0.5)" // Lime -> Emerald
 136:         },
 137:         stockhoo: {
 138:             accent: "text-emerald-400",
 139:             accentBg: "bg-emerald-500",
 140:             glow: "shadow-[0_0_100px_rgba(16,185,129,0.1)]",
 141:             gradient: "from-emerald-950/30",
 142:             buttonPrimary: "bg-emerald-600 text-white hover:bg-emerald-500",
 143:             // Deep Emerald -> Cyan -> Teal -> Slate
 144:             sectionColors: ["#022c22", "#083344", "#0f766e", "#042f2e", "#0f172a"],
 145:             glowHex: "rgba(16, 185, 129, 0.8)",
 146:             glowSecondary: "rgba(6, 182, 212, 0.5)" // Emerald -> Cyan
 147:         }
 148:     };
 149: 
 150:     const s = themes[theme] || themes.default;
 151:     const [activeSection, setActiveSection] = useState(0);
 152:     // Always use dark mode for consistency
 153:     const isLight = false;
 154: 
 155:     // Dynamic Styles - Always Dark Mode base
 156:     const textPrimary = "text-white";
 157:     const textSecondary = "text-neutral-400";
 158:     const textMuted = "text-neutral-500";
 159:     const border = "border-white/10";
 160:     const bgCard = "bg-white/5";
 161:     const bgCardHover = "hover:border-white/20";
 162:     const accentText = s.accent;
 163:     
 164:     // Dynamic background color using Motion for smooth interpolation
 165:     const currentSectionColor = (s.sectionColors || ["#0f172a"])[activeSection % (s.sectionColors?.length || 1)];
 166: 
 167:     const sections = [
 168:         { id: 'overview', label: 'Overview' },
 169:         { id: 'features', label: 'Features' },
 170:         { id: 'challenge', label: 'Challenge & Solution' },
 171:         { id: 'specs', label: 'Tech Specs' },
 172:         ...(HeroComponent ? [{ id: 'demo', label: 'Live Demo' }] : []),
 173:         { id: 'roadmap', label: 'Roadmap' },
 174:         { id: 'experience', label: 'Experience' },
 175:         ...(showAnalytics ? [{ id: 'analytics', label: 'Analytics' }] : [])
 176:     ];
 177: 
 178:     const getSectionIndex = (id) => sections.findIndex(s => s.id === id);
 179: 
 180:     const scrollToId = (id) => {
 181:         const el = document.getElementById(id);
 182:         if (el) {
 183:             const y = el.getBoundingClientRect().top + window.pageYOffset - 120;
 184:             window.scrollTo({ top: y, behavior: 'smooth' });
 185:         }
 186:     };
 187: 
 188:     // Mobile Table of Contents (Horizontal Scroll)
 189:     const MobileTOC = () => (
 190:         <div className="lg:hidden sticky top-[80px] z-30 -mx-4 px-4 mb-8 overflow-x-auto no-scrollbar bg-gradient-to-b from-inherit to-transparent pb-4">
 191:              <div className={`inline-flex gap-2 p-1 rounded-full ${isLight ? 'bg-black/5 border-black/10' : 'bg-white/10 border-white/10'} border backdrop-blur-md`}>
 192:                 {sections.map((section, idx) => (
 193:                     <button
 194:                         key={section.id}
 195:                         onClick={() => scrollToId(section.id)}
 196:                         className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
 197:                             activeSection === idx 
 198:                             ? `${s.buttonPrimary} shadow-lg` 
 199:                             : `${textSecondary} hover:${textPrimary}`
 200:                         }`}
 201:                     >
 202:                         {section.label}
 203:                     </button>
 204:                 ))}
 205:             </div>
 206:         </div>
 207:     );
 208: 
 209:     return (
 210:         <div className={`min-h-screen font-sans selection:bg-indigo-500/30 bg-[#050505] ${textPrimary} relative overflow-hidden`}>
 211:             {/* Solid Background Transition Layer */}
 212:             <motion.div 
 213:                 className="fixed inset-0 pointer-events-none z-0"
 214:                 animate={{
 215:                     backgroundColor: currentSectionColor
 216:                 }}
 217:                 transition={{ duration: 1.2, ease: "easeInOut" }}
 218:             />
 219: 
 220:             {/* Space Effects Layer */}
 221:             <div className="fixed inset-0 z-0 pointer-events-none">
 222:                 {/* 1. Starfield */}
 223:                 <div className="absolute inset-0 opacity-60 mix-blend-screen">
 224:                     <Starfield density={800} speed={0.03} />
 225:                 </div>
 226: 
 227:                 {/* 2. Nebula/Glow Blobs with Parallax */}
 228:                 <motion.div
 229:                     className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px]"
 230:                     animate={{
 231:                         backgroundColor: currentSectionColor,
 232:                         opacity: [0.3, 0.5, 0.3],
 233:                         scale: [1, 1.1, 1],
 234:                         rotate: [0, 90, 0]
 235:                     }}
 236:                     transition={{ 
 237:                         backgroundColor: { duration: 1.2 },
 238:                         default: { duration: 20, repeat: Infinity, ease: "linear" }
 239:                     }}
 240:                     style={{ 
 241:                         filter: 'brightness(1.5)',
 242:                         x: bgX,
 243:                         y: bgY
 244:                     }}
 245:                 />
 246:                 
 247:                 <motion.div
 248:                     className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full blur-[100px]"
 249:                     animate={{
 250:                         backgroundColor: currentSectionColor,
 251:                         opacity: [0.2, 0.4, 0.2],
 252:                         scale: [1, 1.2, 1],
 253:                     }}
 254:                     transition={{ 
 255:                         backgroundColor: { duration: 1.2 },
 256:                         default: { duration: 15, repeat: Infinity, ease: "linear", delay: 2 }
 257:                     }}
 258:                     style={{ 
 259:                         filter: 'brightness(2) hue-rotate(30deg)',
 260:                         x: bgXReverse,
 261:                         y: bgYReverse
 262:                     }}
 263:                 />
 264: 
 265:                 {/* 3. Gradient Overlay for Depth */}
 266:                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
 267: 
 268:                 {/* Sci-Fi Grid Overlay */}
 269:                 <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
 270:                 
 271:                 {/* HUD Corners */}
 272:                 <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-white/10 rounded-tl-3xl m-8" />
 273:                 <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-white/10 rounded-tr-3xl m-8" />
 274:                 <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-white/10 rounded-bl-3xl m-8" />
 275:                 <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-white/10 rounded-br-3xl m-8" />
 276:             </div>
 277:             
 278:             {/* Grain Overlay */}
 279:             <div className="fixed inset-0 pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0" />
 280: 
 281:             <SEO 
 282:                 title={name} 
 283:                 description={oneLiner}
 284:                 image={heroImage.startsWith('http') ? heroImage : undefined}
 285:             />
 286: 
 287:             <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-24 md:py-40">
 288:                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">
 289:                     
 290:                     {/* LEFT COLUMN - Sidebar */}
 291:                     <aside className="lg:col-span-3 xl:col-span-3 relative z-20 order-2 lg:order-1 lg:mt-32">
 292:                         <div className="space-y-8 sticky top-32">
 293:                             <Link to={createPageUrl('Products')} className={`hidden lg:inline-flex items-center gap-2 ${textSecondary} hover:${textPrimary} transition-colors mb-2 text-sm font-medium group`}>
 294:                                 <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
 295:                                 {language === 'en' ? 'Back to Products' : '프로덕트로 돌아가기'}
 296:                             </Link>
 297: 
 298:                             <motion.div 
 299:                                 initial={{ opacity: 0, x: -20 }}
 300:                                 animate={{ opacity: 1, x: 0 }}
 301:                                 className={`rounded-3xl p-8 bg-white/[0.02] backdrop-blur-2xl border border-white/10 shadow-2xl relative overflow-hidden text-white`}
 302:                             >
 303:                                 {/* Glow Effect */}
 304:                                 <div className={`absolute top-0 right-0 w-64 h-64 ${s.accentBg} opacity-10 blur-[80px] -translate-y-1/2 translate-x-1/2`} />
 305: 
 306:                                 <div className="relative z-10 mb-10">
 307:                                     <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white to-neutral-400 flex items-center justify-center text-black mb-6 shadow-[0_0_40px_rgba(255,255,255,0.15)]">
 308:                                         <div className="font-bold text-3xl tracking-tighter">{name.substring(0,2).toUpperCase()}</div>
 309:                                     </div>
 310:                                     <h1 className="text-3xl font-bold tracking-tighter mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">{name}</h1>
 311:                                     <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-white/5 border border-white/10 ${s.accent}`}>
 312:                                         {tag}
 313:                                     </div>
 314:                                 </div>
 315: 
 316:                                 <div className="relative z-10 space-y-8 pt-8 border-t border-white/10">
 317:                                     {stats.map((stat, i) => (
 318:                                         <div key={i} className="group">
 319:                                             <div className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 font-bold mb-2 group-hover:text-neutral-300 transition-colors">{stat.label}</div>
 320:                                             <div className="text-lg font-mono font-medium text-white group-hover:text-white transition-colors">{stat.value}</div>
 321:                                         </div>
 322:                                     ))}
 323:                                 </div>
 324: 
 325:                                 <div className="mt-8 pt-8 border-t border-white/5 space-y-3 hidden lg:block">
 326:                                     {primaryButton.url ? (
 327:                                         <a href={primaryButton.url} target="_blank" rel="noopener noreferrer" className="block w-full">
 328:                                             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
 329:                                                 <Button className={`w-full rounded-full h-12 ${s.buttonPrimary} border-0 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-shadow`}>
 330:                                                     {primaryButton.text} <ArrowRight className="w-4 h-4 ml-2" />
 331:                                                 </Button>
 332:                                             </motion.div>
 333:                                         </a>
 334:                                     ) : (
 335:                                         <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
 336:                                             <Button className={`w-full rounded-full h-12 ${s.buttonPrimary} border-0 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-shadow`}>
 337:                                                 {primaryButton.text}
 338:                                             </Button>
 339:                                         </motion.div>
 340:                                     )}
 341:                                     {deckUrl && (
 342:                                         <a href={deckUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
 343:                                             <Button variant="ghost" className="w-full rounded-full h-12 bg-transparent border border-neutral-700 text-white hover:border-white hover:bg-white/5">
 344:                                                 Download Deck
 345:                                             </Button>
 346:                                         </a>
 347:                                     )}
 348:                                 </div>
 349:                             </motion.div>
 350:                         </div>
 351:                     </aside>
 352: 
 353:                     {/* RIGHT COLUMN - Main Content */}
 354:                     <main className="lg:col-span-9 xl:col-span-8 space-y-20 md:space-y-40 z-10 relative order-1 lg:order-2">
 355:                         
 356:                         {/* 1. Hero */}
 357:                         <div id="overview">
 358:                         <ColorSection onInView={() => setActiveSection(getSectionIndex('overview'))}>
 359:                             {/* Mobile Title Block */}
 360:                             <div className="lg:hidden mb-8">
 361:                                 <Link to={createPageUrl('Products')} className={`inline-flex items-center gap-2 ${textSecondary} hover:${textPrimary} transition-colors mb-4 text-xs font-medium group`}>
 362:                                     <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
 363:                                     {language === 'en' ? 'Back to Products' : '프로덕트로 돌아가기'}
 364:                                 </Link>
 365:                                 <h1 className={`text-4xl font-bold tracking-tighter mb-2 ${textPrimary} drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]`}>{name}</h1>
 366:                                 <div className={`text-xs font-bold ${accentText} uppercase tracking-wider`}>{tag}</div>
 367:                             </div>
 368: 
 369:                             <MouseGlowText 
 370:                                 as={motion.h2}
 371:                                 glowColor={s.glowHex}
 372:                                 secondaryGlowColor={s.glowSecondary}
 373:                                 initial={{ opacity: 0, y: 20 }}
 374:                                 animate={{ opacity: 1, y: 0 }}
 375:                                 transition={{ delay: 0.1 }}
 376:                                 className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter mb-8 md:mb-12 max-w-5xl`}
 377:                             >
 378:                                 {oneLiner}
 379:                             </MouseGlowText>
 380: 
 381:                             {story && (
 382:                                 <motion.div 
 383:                                     initial={{ opacity: 0, y: 20 }}
 384:                                     animate={{ opacity: 1, y: 0 }}
 385:                                     transition={{ delay: 0.2 }}
 386:                                     className={`relative max-w-3xl mb-12 md:mb-16`}
 387:                                 >
 388:                                     <div className="absolute -left-4 top-0 h-full w-1 border-l border-white/10 hidden md:block" />
 389:                                     <div className={`text-base md:text-xl leading-relaxed ${textSecondary} font-light pl-4 md:pl-6`}>
 390:                                         {story}
 391:                                     </div>
 392:                                 </motion.div>
 393:                             )}
 394: 
 395:                             <MobileTOC />
 396: 
 397:                             {/* Mobile Stats Grid & Actions */}
 398:                             <div className="lg:hidden space-y-4 mb-12">
 399:                                 <div className="grid grid-cols-2 gap-3">
 400:                                     {stats.map((stat, i) => (
 401:                                         <div key={i} className={`p-4 rounded-xl ${bgCard} ${border} backdrop-blur-sm`}>
 402:                                             <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-1">{stat.label}</div>
 403:                                             <div className={`text-xl font-mono font-medium ${accentText}`}>{stat.value}</div>
 404:                                         </div>
 405:                                     ))}
 406:                                 </div>
 407:                                 {deckUrl && (
 408:                                     <a href={deckUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
 409:                                         <Button variant="outline" className={`w-full rounded-xl h-12 bg-transparent ${border} ${textPrimary} hover:bg-white/5`}>
 410:                                             Download Deck
 411:                                         </Button>
 412:                                     </a>
 413:                                 )}
 414:                             </div>
 415: 
 416:                             {/* Partners Section */}
 417:                             {partners && (
 418:                                 <div className="mt-12 md:mt-20 border-t border-white/5 pt-12">
 419:                                     {partners}
 420:                                 </div>
 421:                             )}
 422:                         </ColorSection>
 423:                           </div>
 424: 
 425:                         {/* 1.5 Features Section */}
 426:                         {features.length > 0 && (
 427:                             <div id="features">
 428:                                 <ColorSection onInView={() => setActiveSection(getSectionIndex('features'))}>
 429:                                     <div className="mb-12 md:mb-20">
 430:                                         <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-6 ${accentText} ${isLight ? 'border-black/10 bg-black/5' : 'border-white/10 bg-white/5'}`}>
 431:                                             KEY FEATURES
 432:                                         </span>
 433:                                         <h3 className="text-2xl md:text-3xl font-bold mb-8">Capabilities</h3>
 434:                                         <div className="grid md:grid-cols-3 gap-6">
 435:                                             {features.map((feature, i) => (
 436:                                                 <div key={i} className={`relative p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-500 hover:-translate-y-1 backdrop-blur-xl group overflow-hidden`}>
 437:                                                     <div className={`absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500`}>
 438:                                                         <div className={`w-32 h-32 rounded-full ${s.accentBg} blur-[60px]`} />
 439:                                                     </div>
 440: 
 441:                                                     <div className={`relative z-10 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-white/20 transition-all duration-500`}>
 442:                                                         {feature.icon && (
 443:                                                             <motion.div
 444:                                                                 animate={{ 
 445:                                                                     scale: [1, 1.05, 1],
 446:                                                                     filter: [`drop-shadow(0 0 0px ${s.glowHex}00)`, `drop-shadow(0 0 8px ${s.glowHex}60)`, `drop-shadow(0 0 0px ${s.glowHex}00)`]
 447:                                                                 }}
 448:                                                                 transition={{ 
 449:                                                                     duration: 3, 
 450:                                                                     repeat: Infinity, 
 451:                                                                     ease: "easeInOut",
 452:                                                                     delay: i * 0.2 // Stagger the pulses
 453:                                                                 }}
 454:                                                                 whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2, filter: `drop-shadow(0 0 15px ${s.glowHex})` }}
 455:                                                             >
 456:                                                                 <feature.icon className={`w-7 h-7 ${s.accent}`} />
 457:                                                             </motion.div>
 458:                                                         )}
 459:                                                     </div>
 460: 
 461:                                                     <h4 className={`relative z-10 text-2xl font-bold mb-3 ${textPrimary} tracking-tight`}>{feature.title}</h4>
 462:                                                     <p className={`relative z-10 text-lg ${textSecondary} leading-relaxed`}>{feature.description}</p>
 463:                                                 </div>
 464:                                             ))}
 465:                                         </div>
 466:                                     </div>
 467:                                 </ColorSection>
 468:                             </div>
 469:                         )}
 470: 
 471:                         {/* 2. Problem & Solution - Optimized for Mobile Horizontal Scroll */}
 472:                         <div id="challenge">
 473:                         <ColorSection onInView={() => setActiveSection(getSectionIndex('challenge'))}>
 474:                             <div className="grid md:grid-cols-2 gap-12 md:gap-24">
 475:                                 {/* Problem Section */}
 476:                                 <div>
 477:                                     <div className="mb-10">
 478:                                         <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest border mb-6 ${accentText} bg-white/5 border-white/10`}>
 479:                                             THE CHALLENGE
 480:                                         </span>
 481:                                         <h3 className="text-2xl md:text-3xl font-bold mb-2">Why this matters now</h3>
 482:                                     </div>
 483:                                     
 484:                                     <div className="flex md:block overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-6 pb-6 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar space-y-0 md:space-y-12">
 485:                                         {problemPoints.map((p, i) => (
 486:                                             <div key={i} className="flex-shrink-0 w-[85vw] md:w-auto snap-center">
 487:                                                 <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
 488:                                                     <h4 className={`text-xl font-bold mb-4 ${textPrimary}`}>{p.title}</h4>
 489:                                                     <p className={`${textSecondary} leading-relaxed text-lg`}>{p.description}</p>
 490:                                                 </div>
 491:                                             </div>
 492:                                         ))}
 493:                                     </div>
 494:                                 </div>
 495: 
 496:                                 {/* Solution Section */}
 497:                                 <div className="pt-0 md:pt-32">
 498:                                     <div className="mb-10">
 499:                                         <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest border mb-6 ${accentText} bg-white/5 border-white/10`}>
 500:                                             OUR SOLUTION
 501:                                         </span>
 502:                                         <h3 className="text-2xl md:text-3xl font-bold mb-2">How we solve it</h3>
 503:                                     </div>
 504:                                     
 505:                                     <div className="flex md:flex-col overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 md:gap-6 pb-6 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar">
 506:                                         {solutionSteps.map((step, i) => (
 507:                                             <div key={i} className={`flex-shrink-0 w-[85vw] md:w-auto snap-center flex flex-col md:flex-row gap-6 p-8 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl backdrop-blur-xl h-full md:h-auto group`}>
 508:                                                 <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-base bg-gradient-to-br from-white/10 to-transparent border border-white/10 text-white group-hover:scale-110 transition-transform`}>
 509:                                                     {i + 1}
 510:                                                 </div>
 511:                                                 <div>
 512:                                                     <h4 className="font-bold mb-3 text-2xl">{step.title}</h4>
 513:                                                     <p className={`${textSecondary} leading-relaxed text-lg md:text-lg`}>{step.description}</p>
 514:                                                 </div>
 515:                                             </div>
 516:                                         ))}
 517:                                     </div>
 518:                                 </div>
 519:                             </div>
 520:                         </ColorSection>
 521:                         </div>
 522: 
 523:                         {/* 2.5 Tech Specs */}
 524:                         {specs.length > 0 && (
 525:                             <div id="specs">
 526:                                 <ColorSection onInView={() => setActiveSection(getSectionIndex('specs'))}>
 527:                                     <div className="mb-12 md:mb-20">
 528:                                         <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-6 ${accentText} ${isLight ? 'border-black/10 bg-black/5' : 'border-white/10 bg-white/5'}`}>
 529:                                             SPECIFICATIONS
 530:                                         </span>
 531:                                         <h3 className="text-3xl font-bold mb-8">Technical Breakdown</h3>
 532:                                         <div className={`grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10`}>
 533:                                             {specs.map((spec, i) => (
 534:                                                 <div key={i} className={`p-8 bg-[#0A0A0A] hover:bg-[#111] transition-colors group`}>
 535:                                                     <div className={`text-xs font-mono uppercase tracking-widest ${textMuted} mb-3 group-hover:${s.accent} transition-colors`}>
 536:                                                         {spec.label}
 537:                                                     </div>
 538:                                                     <div className={`text-lg font-medium ${textPrimary} font-mono`}>
 539:                                                         {spec.value}
 540:                                                     </div>
 541:                                                 </div>
 542:                                             ))}
 543:                                         </div>
 544:                                     </div>
 545:                                 </ColorSection>
 546:                             </div>
 547:                         )}
 548: 
 549:                         {/* 2.5.5 Interactive Hero / Demo */}
 550:                         <div id="demo">
 551:                             <ColorSection onInView={() => setActiveSection(getSectionIndex('demo'))}>
 552:                                 <div className="mb-12">
 553:                                     <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-6 ${accentText} ${isLight ? 'border-black/10 bg-black/5' : 'border-white/10 bg-white/5'}`}>
 554:                                         LIVE DEMO
 555:                                     </span>
 556:                                     <h3 className="text-3xl font-bold mb-8">Interactive Preview</h3>
 557:                                     
 558:                                     <motion.div 
 559:                                         initial={{ opacity: 0, y: 20 }}
 560:                                         whileInView={{ opacity: 1, y: 0 }}
 561:                                         viewport={{ once: true }}
 562:                                         className={`relative ${heroContainerClass} rounded-3xl overflow-hidden ${isLight ? 'bg-black/5' : 'bg-[#111]'} ${border} group shadow-2xl`}
 563:                                     >
 564:                                         {HeroComponent ? (
 565:                                             <HeroComponent />
 566:                                         ) : heroImage.startsWith('http') ? (
 567:                                             <img 
 568:                                                 src={heroImage} 
 569:                                                 alt={name} 
 570:                                                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
 571:                                             />
 572:                                         ) : (
 573:                                             <div className="w-full h-full flex items-center justify-center p-8 md:p-12 text-center">
 574:                                                 <div>
 575:                                                     <h3 className="text-xl md:text-2xl font-bold mb-4">Project Preview</h3>
 576:                                                     <p className={`text-sm md:text-base ${textSecondary}`}>{heroImage}</p>
 577:                                                 </div>
 578:                                             </div>
 579:                                         )}
 580:                                     </motion.div>
 581:                                 </div>
 582:                             </ColorSection>
 583:                         </div>
 584: 
 585:                         {/* 4. Use Cases & Roadmap - Moved UP above Experience */}
 586:                         <div id="roadmap">
 587:                         <ColorSection onInView={() => setActiveSection(getSectionIndex('roadmap'))}>
 588:                             <div className="grid md:grid-cols-2 gap-6 md:gap-8">
 589:                                 
 590:                                 {/* Target Customers */}
 591:                                 <div className={`p-6 md:p-10 rounded-3xl ${border} ${bgCard} backdrop-blur-sm`}>
 592:                                     <h3 className={`text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-3 ${textPrimary}`}>
 593:                                         <Users className={`w-5 h-5 md:w-6 md:h-6 ${accentText}`} />
 594:                                         Target Customers
 595:                                     </h3>
 596:                                     {/* Desktop: List, Mobile: Horizontal Scroll */}
 597:                                     <div className="flex md:block overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar">
 598:                                         {useCases.map((u, i) => (
 599:                                             <div key={i} className="flex-shrink-0 w-[80vw] md:w-auto snap-center flex md:block gap-3 md:gap-4 p-4 md:p-0 rounded-xl bg-white/5 md:bg-transparent border md:border-0 border-white/10 md:mb-6 last:mb-0">
 600:                                                 <div className="flex gap-3 md:gap-4">
 601:                                                     <CheckCircle2 className={`w-5 h-5 ${accentText} flex-shrink-0 mt-0.5 md:mt-1`} />
 602:                                                     <div>
 603:                                                         <div className={`font-bold ${textPrimary} text-sm md:text-base`}>{u.title}</div>
 604:                                                         <div className={`text-xs md:text-sm ${textMuted} mt-1`}>{u.description}</div>
 605:                                                     </div>
 606:                                                 </div>
 607:                                             </div>
 608:                                         ))}
 609:                                     </div>
 610:                                 </div>
 611: 
 612:                                 {/* Roadmap */}
 613:                                 <div className={`p-6 md:p-10 rounded-3xl ${border} ${bgCard} backdrop-blur-sm`}>
 614:                                     <h3 className={`text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-3 ${textPrimary}`}>
 615:                                         <Milestone className={`w-5 h-5 md:w-6 md:h-6 ${accentText}`} />
 616:                                         Roadmap
 617:                                     </h3>
 618:                                     {/* Desktop: List, Mobile: Horizontal Scroll */}
 619:                                     <div className="flex md:block overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar">
 620:                                         {roadmap.map((item, i) => (
 621:                                             <div key={i} className={`flex-shrink-0 w-[75vw] md:w-auto snap-center relative pl-6 border-l ${isLight ? 'border-black/20' : 'border-white/10'} md:mb-8 last:mb-0 p-4 md:p-0 rounded-r-xl md:rounded-none bg-white/5 md:bg-transparent md:pl-6`}>
 622:                                                 <div className={`absolute left-0 md:-left-1.5 top-0 md:top-1.5 w-1 md:w-3 h-full md:h-3 rounded-none md:rounded-full ${s.accentBg} md:bg-transparent md:block hidden`} />
 623:                                                 <div className={`absolute left-0 top-0 bottom-0 w-1 ${s.accentBg} md:hidden rounded-l-xl`} />
 624:                                                 
 625:                                                 <div className={`absolute md:-left-1.5 md:top-1.5 w-3 h-3 rounded-full ${s.accentBg} hidden md:block`} />
 626: 
 627:                                                 <div className={`text-xs font-bold uppercase tracking-wider ${textMuted} mb-1`}>{item.quarter}</div>
 628:                                                 <div className={`font-bold text-base md:text-lg mb-1 md:mb-2 ${textPrimary}`}>{item.title}</div>
 629:                                                 <div className={`text-xs md:text-sm ${textSecondary}`}>
 630:                                                     {item.items.join(" • ")}
 631:                                                 </div>
 632:                                             </div>
 633:                                         ))}
 634:                                     </div>
 635:                                 </div>
 636:                             </div>
 637: 
 638:                             {/* Business Model Banner */}
 639:                             <div className={`mt-12 rounded-3xl p-8 md:p-16 ${border} ${isLight ? 'bg-white shadow-xl' : 'bg-gradient-to-br from-[#111] to-black'} relative overflow-hidden`}>
 640:                                  <div className="relative z-10">
 641:                                     <div className={`text-xs font-bold uppercase tracking-widest ${accentText} mb-4`}>BUSINESS MODEL</div>
 642:                                     <div className={`text-xl md:text-3xl font-bold leading-relaxed max-w-3xl ${textPrimary}`}>
 643:                                         "{businessModel}"
 644:                                     </div>
 645:                                  </div>
 646:                                  <div className={`absolute top-0 right-0 w-96 h-96 ${s.accentBg} opacity-5 blur-[100px] rounded-full transform translate-x-1/2 -translate-y-1/2`} />
 647:                             </div>
 648:                         </ColorSection>
 649:                         </div>
 650: 
 651:                         {/* 2.6 Video Showcase */}
 652:                         {videoUrl && (
 653:                             <div className="mb-20">
 654:                                 <div className={`aspect-video rounded-3xl overflow-hidden ${border} ${bgCard} shadow-2xl relative group`}>
 655:                                      <iframe 
 656:                                         src={videoUrl} 
 657:                                         className="w-full h-full" 
 658:                                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
 659:                                         allowFullScreen
 660:                                         title="Product Demo"
 661:                                     />
 662:                                 </div>
 663:                             </div>
 664:                         )}
 665: 
 666:                         {/* 3. Screenshots - Mobile Horizontal Scroll */}
 667:                         {screenshots.length > 0 && (
 668:                             <div id="experience">
 669:                             <ColorSection onInView={() => setActiveSection(getSectionIndex('experience'))}>
 670:                                 <div className="flex items-end justify-between mb-12">
 671:                                     <h3 className="text-3xl font-bold">Experience</h3>
 672:                                 </div>
 673:                                 {/* Desktop: Grid, Mobile: Horizontal Scroll */}
 674:                                 <div className="flex md:grid md:grid-cols-1 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-6 md:gap-8 pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar">
 675:                                     {screenshots.map((screen, i) => (
 676:                                         <div key={i} className={`flex-shrink-0 w-[90vw] md:w-full snap-center relative rounded-3xl overflow-hidden ${isLight ? 'bg-black/5' : 'bg-[#111]'} ${border} group shadow-xl`}>
 677:                                             {screen.url.startsWith('http') ? (
 678:                                                 <img 
 679:                                                     src={screen.url} 
 680:                                                     alt={screen.caption} 
 681:                                                     className="w-full h-auto object-cover"
 682:                                                 />
 683:                                             ) : (
 684:                                                 <div className="aspect-[2/1] flex items-center justify-center p-12 text-center">
 685:                                                     <p className={textSecondary}>{screen.caption}</p>
 686:                                                 </div>
 687:                                             )}
 688:                                             <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/80 backdrop-blur-md rounded-full border border-white/10 text-sm font-medium text-white">
 689:                                                 {screen.caption}
 690:                                             </div>
 691:                                         </div>
 692:                                     ))}
 693:                                 </div>
 694:                             </ColorSection>
 695:                             </div>
 696:                         )}
 697: 
 698:                         {/* 3.5. Analytics Dashboard */}
 699:                         {showAnalytics && (
 700:                             <div id="analytics">
 701:                                 <ColorSection onInView={() => setActiveSection(getSectionIndex('analytics'))}>
 702:                                     <div className="mb-12">
 703:                                         <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-6 ${accentText} ${isLight ? 'border-black/10 bg-black/5' : 'border-white/10 bg-white/5'}`}>
 704:                                             LIVE METRICS
 705:                                         </span>
 706:                                         <h3 className="text-3xl font-bold mb-4">Performance Dashboard</h3>
 707:                                         <p className="text-neutral-500 max-w-2xl mb-8">Real-time system metrics and ecosystem growth data.</p>
 708:                                         <AnalyticsDashboard type={theme} theme={theme} />
 709:                                     </div>
 710:                                 </ColorSection>
 711:                             </div>
 712:                         )}
 713: 
 714:                         {/* Mobile Action Bar (Sticky Bottom) */}
 715:                         <div className="lg:hidden fixed bottom-6 left-4 right-4 z-50">
 716:                             <div className={`rounded-2xl p-4 ${s.sidebarBg} border border-white/10 shadow-2xl flex items-center justify-between gap-4 backdrop-blur-xl`}>
 717:                                 <div>
 718:                                     <div className="text-xs text-neutral-400 uppercase font-bold">Get Started</div>
 719:                                     <div className="font-bold text-white text-sm">{name}</div>
 720:                                 </div>
 721:                                 {primaryButton.url ? (
 722:                                     <a href={primaryButton.url} target="_blank" rel="noopener noreferrer">
 723:                                         <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
 724:                                             <Button className={`rounded-full px-6 h-10 text-sm ${s.buttonPrimary} border-0`}>
 725:                                                 {primaryButton.text}
 726:                                             </Button>
 727:                                         </motion.div>
 728:                                     </a>
 729:                                 ) : (
 730:                                     <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
 731:                                         <Button className={`rounded-full px-6 h-10 text-sm ${s.buttonPrimary} border-0`}>
 732:                                             {primaryButton.text}
 733:                                         </Button>
 734:                                     </motion.div>
 735:                                 )}
 736:                             </div>
 737:                         </div>
 738: 
 739:                     </main>
 740:                 </div>
 741: 
 742:                 {/* Bottom Navigation */}
 743:                 <div className={`mt-24 md:mt-40 border-t ${border} pt-12 md:pt-20 pb-20 md:pb-0`}>
 744:                      <h3 className="text-4xl font-bold mb-12">More Products</h3>
 745:                      <div className="grid md:grid-cols-3 gap-8">
 746:                          {['AidGuardian', 'PlayArts', 'Elememetal', 'Stockhoo'].filter(p => p !== name.replace(/\s+/g, '')).slice(0, 3).map(proj => (
 747:                              <Link key={proj} to={createPageUrl(proj)} className="group block">
 748:                                  <div className={`aspect-[4/3] ${isLight ? 'bg-black/5' : 'bg-[#111]'} rounded-2xl mb-6 ${border} ${isLight ? 'group-hover:border-black/30' : 'group-hover:border-white/30'} transition-colors relative overflow-hidden`}>
 749:                                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity" />
 750:                                      <div className="absolute inset-0 flex items-center justify-center">
 751:                                         <span className={`text-2xl font-bold opacity-30 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-500 ${textPrimary}`}>
 752:                                             {proj}
 753:                                         </span>
 754:                                      </div>
 755:                                  </div>
 756:                                  <h4 className={`text-xl font-bold mb-2 ${isLight ? 'group-hover:text-black' : 'group-hover:text-indigo-400'} transition-colors`}>{proj}</h4>
 757:                                  <div className={`${textSecondary} text-sm flex items-center gap-2`}>
 758:                                      View Case Study <ArrowRight className="w-4 h-4" />
 759:                                  </div>
 760:                              </Link>
 761:                          ))}
 762:                      </div>
 763:                 </div>
 764: 
 765:             </div>
 766:         </div>
 767:     );
 768: }