"use client"

import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  Play, 
  Megaphone, 
  MessageSquare, 
  Plus, 
  Star, 
  Menu, 
  X,
  Compass,
  Layers,
  Activity,
  Award,
  Globe
} from 'lucide-react';

export default function Hero() {


 
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Transform calculations to shift layers based on hover coordinates
  const characterX = useTransform(mouseX, [-300, 300], [-15, 15]);
  const characterY = useTransform(mouseY, [-300, 300], [-15, 15]);
  const cardBackX = useTransform(mouseX, [-300, 300], [-8, 8]);
  const cardBackY = useTransform(mouseY, [-300, 300], [-8, 8]);
  const cardFrontX = useTransform(mouseX, [-300, 300], [-30, 30]);
  const cardFrontY = useTransform(mouseY, [-300, 300], [-30, 30]);

  // Track mouse coordinates over the relative wrapper
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const xVal = e.clientX - rect.left - width / 2;
    const yVal = e.clientY - rect.top - height / 2;
    mouseX.set(xVal);
    mouseY.set(yVal);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Stagger configurations for initial page loading entrance
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <div className="relative min-h-screen bg-[#030611] text-slate-100 overflow-hidden font-sans select-none">
      
      {/* Dynamic Immersive Background Lighting */}
      <div className="absolute top-5 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {/* Central Core Blue Lighting Aura behind the man cutout */}
        <div className="absolute top-[15%] right-[-10%] lg:right-[12%] w-[550px] h-[550px] rounded-full bg-blue-600/30 blur-[130px]" />
        {/* Soft Pink glow on edge */}
        <div className="absolute top-[40%] right-[-15%] w-[450px] h-[450px] rounded-full bg-pink-500/15 blur-[120px]" />
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25" />
      </div>


     

      
   
      <main className="relative z-10 top-24 max-w-7xl mx-auto px-6 pt-6 pb-16 lg:pt-14 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Content Area */}
          <motion.div 
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-6 md:space-y-8 text-center lg:text-left"
          >
            {/* Tagline Badge */}
            <motion.div 
              variants={textItemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a0f1d] border border-slate-800/80 shadow-inner"
            >
              <span className="text-sm">🚀</span>
              <span className="text-slate-300 font-bold text-[11px] tracking-wider uppercase">#1 Performance Marketing Agency</span>
            </motion.div>

            {/* Main Header Heading */}
            <motion.h1 
              variants={textItemVariants}
              className="text-white font-bold text-4xl sm:text-5xl md:text-5xl lg:text-[52px] tracking-tight leading-[1.1] sm:leading-[1.15]"
            >
              Smart Ideas <br />
              <span className="bg-gradient-to-r from-[#5082FF] via-[#9B66FF] to-[#D55EFF] bg-clip-text text-transparent">For Your</span>{' '}
              <span className="bg-gradient-to-r from-[#FF50A6] to-[#FF8650] bg-clip-text text-transparent">Brands</span><br />
              Here<span className="text-[#FF7356]">.</span>
            </motion.h1>

            {/* Description Sentence */}
            <motion.p 
              variants={textItemVariants}
              className="text-slate-400 text-[15px] sm:text-[17px] leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              DailyHnt helps affiliates discover high-converting offers, optimize campaigns, and maximize commissions through performance-first marketing.
            </motion.p>

            {/* Action CTA Buttons */}
            <motion.div 
              variants={textItemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a href="#" className="w-full sm:w-auto text-center font-bold text-[15px] text-white px-8 py-4 rounded-xl bg-gradient-to-r from-[#6256FF] via-[#B642FF] to-[#FF7356] hover:shadow-[0_8px_30px_rgba(98,86,255,0.4)] transition-all duration-300 transform hover:-translate-y-0.5">
                Get Started <ArrowRight className="inline-block w-4 h-4 ml-1" />
              </a>
              
              <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-2.5 font-semibold text-[15px] text-white px-8 py-4 rounded-xl bg-white/5 border border-slate-800 hover:bg-white/10 hover:border-slate-600 transition-all duration-300">
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-white">
                  <Play className="w-2.5 h-2.5 fill-current" />
                </span>
                Watch Video
              </a>
            </motion.div>

            {/* Customer Rating Section */}
            <motion.div 
              variants={textItemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6 border-t border-slate-800/60 max-w-md mx-auto lg:mx-0"
            >
              {/* Stacked Face Avatars */}
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-[#030611] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" alt="Avatar 1" />
                <img className="w-10 h-10 rounded-full border-2 border-[#030611] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" alt="Avatar 2" />
                <img className="w-10 h-10 rounded-full border-2 border-[#030611] object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150" alt="Avatar 3" />
                <img className="w-10 h-10 rounded-full border-2 border-[#030611] object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150" alt="Avatar 4" />
              </div>
              
              {/* Star Rating details */}
              <div className="text-center sm:text-left">
                <h4 className="text-white font-bold text-sm">Our Happy Customers</h4>
                <div className="flex items-center gap-2 mt-1 justify-center sm:justify-start">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <span className="text-slate-400 text-xs font-semibold">4.9 <span className="text-slate-500">(15k Reviews)</span></span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column Interactive Composited Graphics (Mouse Move Parallax Active) */}
          <div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-6 relative flex items-center justify-center min-h-[500px] lg:min-h-[600px] mt-8 lg:mt-0"
          >
            {/* Infinite Dashed Circular Rotating Orbits */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
              className="absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] border border-dashed border-blue-500/15 rounded-full pointer-events-none" 
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 110, ease: "linear" }}
              className="absolute w-[460px] h-[460px] sm:w-[560px] sm:h-[560px] border border-dashed border-blue-500/10 rounded-full pointer-events-none" 
            />

            {/* Sparkle Twinkles */}
            <div className="absolute top-[12%] right-[12%] text-blue-400/50 text-[10px] animate-pulse">✦</div>
            <div className="absolute bottom-[30%] left-[5%] text-purple-400/40 text-base animate-pulse">✦</div>

         
            <motion.div 
              style={{ x: characterX, y: characterY }}
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
              className="relative z-10 w-[270px] sm:w-[360px] lg:w-[400px]"
            >
              <img 
                src="https://assets.codepen.io/252973/man-with-laptop.png" 
                alt="Presenter" 
                className="w-full h-auto drop-shadow-[0_25px_50px_rgba(59,130,246,0.25)] select-none pointer-events-none"
              />
            </motion.div>

            {/* FLOATING CARD 1: Voice/Megaphone Badge (Top-Left) */}
            <motion.div 
              style={{ x: cardBackX, y: cardBackY }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute top-[6%] left-[8%] z-20 w-14 h-14 rounded-2xl bg-[#090e1a]/80 backdrop-blur-xl border border-white/5 flex items-center justify-center shadow-2xl shadow-blue-500/5"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white">
                <Megaphone className="w-4.5 h-4.5" />
              </div>
            </motion.div>

            {/* FLOATING CARD 2: Project Stats Badge with Sparkline (Mid-Left) */}
            <motion.div 
              style={{ x: cardFrontX, y: cardFrontY }}
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-[23%] left-[-2%] sm:left-[-4%] z-20 w-44 rounded-2xl bg-[#090e1a]/70 backdrop-blur-xl border border-white/5 p-4.5 shadow-2xl"
            >
              <span className="text-white text-2xl font-extrabold tracking-tight">550+</span>
              <p className="text-slate-400 text-[11px] font-bold mt-0.5">Projects Completed</p>
              
              {/* SVGLite Sparkline Vector Chart */}
              <div className="w-full mt-3">
                <svg viewBox="0 0 100 25" className="w-full h-6 drop-shadow-[0_2px_4px_rgba(168,85,247,0.3)]">
                  <path 
                    d="M0 18 Q15 2, 30 14 T60 8 T90 4 T100 12" 
                    fill="none" 
                    stroke="url(#purpleGrad)" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                  />
                  <defs>
                    <linearGradient id="purpleGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>

            {/* FLOATING CARD 3: Video Player Badge (Bottom-Left) */}
            <motion.div 
              style={{ x: cardBackX, y: cardBackY }}
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[24%] left-[6%] sm:left-[10%] z-20 w-12 h-12 rounded-xl bg-[#090e1a]/85 backdrop-blur-xl border border-white/5 flex items-center justify-center shadow-lg"
            >
              <div className="w-8.5 h-8.5 rounded-lg bg-slate-900 flex items-center justify-center text-blue-400">
                <Play className="w-3.5 h-3.5 fill-current" />
              </div>
            </motion.div>

            {/* FLOATING CARD 4: Message Icon Badge (Mid-Right) */}
            <motion.div 
              style={{ x: cardBackX, y: cardBackY }}
              animate={{ y: [0, -14, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.2 }}
              className="absolute right-[5%] top-[45%] z-20 w-14 h-14 rounded-2xl bg-[#090e1a]/80 backdrop-blur-xl border border-white/5 flex items-center justify-center shadow-xl shadow-pink-500/5"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-slate-300">
                <MessageSquare className="w-4 h-4 text-slate-300" />
              </div>
            </motion.div>

            {/* FLOATING CARD 5: Interactive Team Status Panel (Bottom-Right) */}
            <motion.div 
              style={{ x: cardFrontX, y: cardFrontY }}
              animate={{ y: [0, -9, 0] }}
              transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 0.8 }}
              className="absolute bottom-[8%] right-[-4%] sm:right-[0%] z-20 w-[210px] rounded-2xl bg-[#090e1a]/70 backdrop-blur-xl border border-white/5 p-4 shadow-2xl"
            >
              <span className="text-white text-xs font-bold block mb-2.5">Team Members</span>
              <div className="flex items-center justify-between">
                {/* Embedded Profile Images */}
                <div className="flex -space-x-2">
                  <img className="w-8 h-8 rounded-full object-cover border-2 border-slate-950" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="Team 1" />
                  <img className="w-8 h-8 rounded-full object-cover border-2 border-slate-950" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100" alt="Team 2" />
                  <img className="w-8 h-8 rounded-full object-cover border-2 border-slate-950" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100" alt="Team 3" />
                  <img className="w-8 h-8 rounded-full object-cover border-2 border-slate-950" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=100" alt="Team 4" />
                </div>
                {/* Gradient Accent Add Button */}
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF4E83] to-[#FF7356] flex items-center justify-center text-white cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md shadow-pink-500/20">
                  <Plus className="w-4 h-4" strokeWidth={3} />
                </div>
              </div>
            </motion.div>

          </div>
        </div>

       
      </main>

    </div>
  );
}





// "use client"


// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// /* ============================================================
//    IMAGES (Unsplash)
// ============================================================ */
// const HERO_MAN =
//   "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=80";

// const CUSTOMER_AVATARS = [
//   "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop",
//   "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop",
//   "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop",
//   "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop",
// ];

// const TEAM_AVATARS = [
//   "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop",
//   "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop",
//   "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop",
//   "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop",
// ];

// /* ============================================================
//    COUNT-UP HOOK
// ============================================================ */
// const useCountUp = (target, { duration = 2, decimals = 0 } = {}) => {
//   const [val, setVal] = useState(0);
//   useEffect(() => {
//     let raf;
//     const t0 = performance.now();
//     const tick = (now) => {
//       const p = Math.min((now - t0) / (duration * 1000), 1);
//       const eased = 1 - Math.pow(1 - p, 3);
//       setVal(target * eased);
//       if (p < 1) raf = requestAnimationFrame(tick);
//     };
//     raf = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(raf);
//   }, [target, duration]);
//   return decimals ? val.toFixed(decimals) : Math.round(val);
// };

// /* ============================================================
//    SMALL ICONS
// ============================================================ */
// const ArrowRight = ({ className = "" }) => (
//   <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={2}>
//     <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );
// const PlayIcon = ({ className = "" }) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
//     <path d="M8 5v14l11-7z" />
//   </svg>
// );
// const Megaphone = ({ className = "" }) => (
//   <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={1.8}>
//     <path d="M3 11v2a1 1 0 001 1h2l4 4V6L6 10H4a1 1 0 00-1 1z" strokeLinejoin="round" />
//     <path d="M14 8a4 4 0 010 8M17 5a8 8 0 010 14" strokeLinecap="round" />
//   </svg>
// );
// const ChatIcon = ({ className = "" }) => (
//   <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={1.8}>
//     <path d="M21 12a8 8 0 01-11.5 7.2L4 20l1-4.5A8 8 0 1121 12z" strokeLinejoin="round" />
//     <circle cx="9" cy="12" r="1" fill="currentColor" stroke="none" />
//     <circle cx="12.5" cy="12" r="1" fill="currentColor" stroke="none" />
//     <circle cx="16" cy="12" r="1" fill="currentColor" stroke="none" />
//   </svg>
// );
// const Sparkle = ({ className = "" }) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
//     <path d="M12 0l1.8 8.4L22 12l-8.2 1.6L12 24l-1.8-10.4L2 12l8.2-1.6z" />
//   </svg>
// );

// /* Trust-bar placeholder logos */
// const LogoMark = ({ type }) => {
//   const c = "w-6 h-6";
//   switch (type) {
//     case 0:
//       return (
//         <svg viewBox="0 0 24 24" className={c} fill="none" stroke="currentColor" strokeWidth={1.6}>
//           <path d="M12 2l9 5v10l-9 5-9-5V7z" strokeLinejoin="round" />
//           <circle cx="12" cy="12" r="3" />
//         </svg>
//       );
//     case 1:
//       return (
//         <svg viewBox="0 0 24 24" className={c} fill="none" stroke="currentColor" strokeWidth={1.6}>
//           <circle cx="12" cy="12" r="9" />
//           <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//       );
//     case 2:
//       return (
//         <svg viewBox="0 0 24 24" className={c} fill="currentColor">
//           <path d="M12 2C7 7 7 13 12 22c5-9 5-15 0-20z" opacity=".9" />
//         </svg>
//       );
//     case 3:
//       return (
//         <svg viewBox="0 0 24 24" className={c} fill="currentColor">
//           {[6, 12, 18].map((y) =>
//             [6, 12, 18].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="1.6" />)
//           )}
//         </svg>
//       );
//     default:
//       return (
//         <svg viewBox="0 0 24 24" className={c} fill="currentColor">
//           <path d="M12 2l1.5 7.5L21 8l-5.5 4L21 16l-7.5-1.5L12 22l-1.5-7.5L3 16l5.5-4L3 8l7.5 1.5z" />
//         </svg>
//       );
//   }
// };

// /* ============================================================
//    ANIMATION HELPERS
// ============================================================ */
// const up = (delay = 0) => ({
//   initial: { opacity: 0, y: 30 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
// });

// const FloatCard = ({ children, className = "", delay = 0, fy = 12, fd = 4 }) => (
//   <motion.div
//     className={`absolute ${className}`}
//     initial={{ opacity: 0, scale: 0.8, y: 24 }}
//     animate={{ opacity: 1, scale: 1, y: 0 }}
//     transition={{ duration: 0.6, delay, ease: "easeOut" }}
//   >
//     <motion.div
//       animate={{ y: [0, -fy, 0] }}
//       transition={{ duration: fd, repeat: Infinity, ease: "easeInOut", delay }}
//     >
//       {children}
//     </motion.div>
//   </motion.div>
// );

// const glass =
//   "backdrop-blur-md bg-white/[0.06] border border-white/10 shadow-xl shadow-black/40";

// const gradientText = {
//   backgroundImage:
//     "linear-gradient(90deg,#3b82f6,#8b5cf6,#ec4899,#fb923c,#3b82f6)",
//   backgroundSize: "200% auto",
//   WebkitBackgroundClip: "text",
//   backgroundClip: "text",
//   color: "transparent",
//   animation: "gradientShift 6s linear infinite",
// };


// /* ============================================================
//    HERO — LEFT
// ============================================================ */
// const HeroLeft = () => {
//   const rating = useCountUp(4.9, { decimals: 1, duration: 2 });
//   const avatarBorders = [
//     "border-pink-500",
//     "border-orange-400",
//     "border-sky-400",
//     "border-violet-400",
//   ];

//   return (
//     <div className="relative z-20">
//       {/* Badge */}
//       <motion.div
//         {...up(0.1)}
//         className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
//       >
//         <span>🚀</span> #1 Performance Marketing Agency
//       </motion.div>

//       {/* Heading */}
//       <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
//         <motion.span {...up(0.2)} className="block text-white">
//           Smart Ideas
//         </motion.span>
//         <motion.span {...up(0.35)} className="block" style={gradientText}>
//           For Your Brands
//         </motion.span>
//         <motion.span {...up(0.5)} className="block text-white">
//           Here<span className="text-orange-400">.</span>
//         </motion.span>
//       </h1>

//       {/* Paragraph */}
//       <motion.p
//         {...up(0.65)}
//         className="mt-6 max-w-md text-slate-400 leading-relaxed"
//       >
//         DailyHnt helps affiliates discover high-converting offers, optimize
//         campaigns, and maximize commissions through performance-first marketing.
//       </motion.p>

//       {/* Buttons */}
//       <motion.div {...up(0.8)} className="mt-8 flex flex-wrap items-center gap-4">
//         <motion.button
//           whileHover={{ scale: 1.04, y: -2 }}
//           whileTap={{ scale: 0.97 }}
//           className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400 px-7 py-4 font-semibold text-white shadow-lg shadow-violet-600/30"
//         >
//           Get Started <ArrowRight className="w-5 h-5" />
//         </motion.button>

//         <motion.button
//           whileHover={{ scale: 1.04, y: -2 }}
//           whileTap={{ scale: 0.97 }}
//           className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4 font-semibold text-white"
//         >
//           <span className="w-7 h-7 rounded-full border border-white/40 grid place-items-center">
//             <PlayIcon className="w-3 h-3 ml-0.5" />
//           </span>
//           Watch Video
//         </motion.button>
//       </motion.div>

//       {/* Customers */}
//       <motion.div {...up(0.95)} className="mt-10 flex items-center gap-4">
//         <div className="flex -space-x-3">
//           {CUSTOMER_AVATARS.map((src, i) => (
//             <motion.img
//               key={src}
//               src={src}
//               alt="customer"
//               initial={{ opacity: 0, scale: 0 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 1 + i * 0.1, type: "spring", stiffness: 260 }}
//               className={`w-11 h-11 rounded-full object-cover border-2 ${avatarBorders[i]} bg-slate-800`}
//             />
//           ))}
//         </div>
//         <div>
//           <p className="font-semibold text-white">Our Happy Customers</p>
//           <div className="flex items-center gap-2 text-sm">
//             <span className="text-yellow-400 tracking-tight">★★★★★</span>
//             <span className="text-white font-medium">{rating}</span>
//             <span className="text-blue-400">(15k Reviews)</span>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// /* ============================================================
//    HERO — RIGHT (portrait + floating cards)
// ============================================================ */
// const HeroRight = () => {
//   const projects = useCountUp(550, { duration: 2.2 });

//   return (
//     <div className="relative z-10 h-[460px] sm:h-[540px] lg:h-[620px] mt-12 lg:mt-0">
//       {/* Glows */}
//       <motion.div
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full bg-blue-600/40 blur-[110px]"
//         animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <div className="absolute top-1/3 -right-10 w-72 h-72 rounded-full bg-pink-600/25 blur-[110px]" />

//       {/* Orbital ring */}
//       <motion.div
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] max-w-[90%] rounded-full border border-dashed border-blue-400/20"
//         animate={{ rotate: 360 }}
//         transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
//       >
//         <span className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(96,165,250,0.7)]" />
//         <span className="absolute top-1/2 -right-1 w-1.5 h-1.5 rounded-full bg-pink-300 shadow-[0_0_10px_2px_rgba(244,114,182,0.7)]" />
//       </motion.div>

//       {/* Portrait (masked to fake cut-out) */}
//       <motion.img
//         src={HERO_MAN}
//         alt="Marketing expert"
//         initial={{ opacity: 0, scale: 0.92 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
//         className="absolute inset-0 m-auto h-full w-auto max-w-none object-contain object-top select-none pointer-events-none"
//         style={{
//           WebkitMaskImage:
//             "radial-gradient(ellipse 62% 78% at 50% 42%, #000 58%, transparent 86%)",
//           maskImage:
//             "radial-gradient(ellipse 62% 78% at 50% 42%, #000 58%, transparent 86%)",
//         }}
//       />

//       {/* Sparkles */}
//       {[
//         "top-[10%] right-[16%] w-5 h-5 text-blue-200",
//         "top-[52%] left-[3%] w-4 h-4 text-blue-300",
//         "top-[20%] left-[34%] w-3 h-3 text-pink-200",
//       ].map((cls, i) => (
//         <motion.div
//           key={i}
//           className={`absolute ${cls}`}
//           animate={{ opacity: [0.2, 1, 0.2], scale: [0.7, 1.2, 0.7], rotate: 90 }}
//           transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
//         >
//           <Sparkle className="w-full h-full" />
//         </motion.div>
//       ))}

//       {/* Megaphone icon card */}
//       <FloatCard className="top-[8%] left-[12%] hidden sm:block" delay={0.6}>
//         <div className={`w-14 h-14 rounded-2xl grid place-items-center text-white ${glass}`}>
//           <Megaphone className="w-6 h-6" />
//         </div>
//       </FloatCard>

//       {/* 550+ Projects card */}
//       <FloatCard className="top-[26%] left-0 sm:-left-2" delay={0.8} fy={14}>
//         <div className={`rounded-2xl px-6 py-5 w-44 ${glass}`}>
//           <p className="text-3xl font-bold text-white">{projects}+</p>
//           <p className="text-xs text-slate-400 mt-1">Projects Completed</p>
//           <svg viewBox="0 0 120 36" className="mt-3 w-full h-8">
//             <defs>
//               <linearGradient id="ln" x1="0" x2="1">
//                 <stop offset="0" stopColor="#8b5cf6" />
//                 <stop offset="1" stopColor="#ec4899" />
//               </linearGradient>
//             </defs>
//             <polyline
//               points="0,30 20,24 40,26 60,16 80,18 100,8 120,4"
//               fill="none"
//               stroke="url(#ln)"
//               strokeWidth="2.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </div>
//       </FloatCard>

//       {/* Chat icon card */}
//       <FloatCard className="top-[50%] right-0 hidden md:block" delay={1}>
//         <div className={`w-14 h-14 rounded-2xl grid place-items-center text-white ${glass}`}>
//           <ChatIcon className="w-6 h-6" />
//         </div>
//       </FloatCard>

//       {/* Play button card */}
//       <FloatCard className="bottom-[20%] left-[8%] hidden sm:block" delay={1.1}>
//         <motion.div
//           whileHover={{ scale: 1.1 }}
//           className={`w-14 h-14 rounded-2xl grid place-items-center text-white ${glass}`}
//         >
//           <PlayIcon className="w-5 h-5 ml-0.5" />
//         </motion.div>
//       </FloatCard>

//       {/* Team Members card */}
//       <FloatCard className="bottom-[6%] right-0 hidden md:block" delay={1.2} fy={10}>
//         <div className={`rounded-2xl px-5 py-4 ${glass}`}>
//           <p className="text-sm font-medium text-white mb-3">Team Members</p>
//           <div className="flex items-center -space-x-2">
//             {TEAM_AVATARS.map((src) => (
//               <img
//                 key={src}
//                 src={src}
//                 alt="team"
//                 className="w-9 h-9 rounded-full object-cover border-2 border-slate-900"
//               />
//             ))}
//             <span className="w-9 h-9 rounded-full grid place-items-center text-white border-2 border-slate-900 bg-gradient-to-br from-pink-500 to-orange-400">
//               +
//             </span>
//           </div>
//         </div>
//       </FloatCard>
//     </div>
//   );
// };

// /* ============================================================
//    TRUST BAR
// ============================================================ */
// const TrustBar = () => {
//   const companies = useCountUp(100, { duration: 2 });
//   const names = ["logipsum", "LOGOIPSUM", "logoipsum", "LOGOIPSUM", "logoipsum"];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
//       className="relative z-20 mt-16 rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-8"
//     >
//       <p className="text-center text-slate-300">
//         Trusted by more than{" "}
//         <span className="font-bold text-blue-400">{companies}+</span> companies
//       </p>
//       <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
//         {names.map((n, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.4 + i * 0.1 }}
//             whileHover={{ scale: 1.06, color: "#e2e8f0" }}
//             className="flex items-center gap-2 text-slate-500 transition-colors"
//           >
//             <LogoMark type={i} />
//             <span className="font-semibold tracking-tight">{n}</span>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// /* ============================================================
//    MAIN PAGE
// ============================================================ */
// const Hero = () => (
//   <div className="relative min-h-screen overflow-hidden bg-[#070b16] text-white">
//     {/* Global ambient glows */}
//     <div className="pointer-events-none absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-blue-700/20 blur-[140px]" />
//     <div className="pointer-events-none absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-pink-700/20 blur-[150px]" />
//     <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.04),_transparent_60%)]" />

   

//     <main className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-10 lg:pt-16">
//       <section className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
//         <HeroLeft />
//         <HeroRight />
//       </section>

   
//     </main>

    
//   </div>
// );

// export default Hero;