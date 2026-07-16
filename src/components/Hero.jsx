"use client"

import React, { useState,useEffect } from 'react';
import { motion, useMotionValue, useTransform ,AnimatePresence} from 'framer-motion';
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
import Image from 'next/image';




const texts = [
  "For Your Brands",
  "For Your Business",
  "For Your Startup",
  "For Your Growth",
  "For Your Success",
];






export default function Hero() {
const [currentText, setCurrentText] = useState(0);
const [displayText, setDisplayText] = useState("");
const [textIndex, setTextIndex] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);

useEffect(() => {
  const current = texts[textIndex];

  const timer = setTimeout(() => {
    if (!isDeleting) {
      setDisplayText(current.substring(0, displayText.length + 1));

      if (displayText.length + 1 === current.length) {
        setTimeout(() => setIsDeleting(true), 1200);
      }
    } else {
      setDisplayText(current.substring(0, displayText.length - 1));

      if (displayText.length === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, isDeleting ? 50 : 90);

  return () => clearTimeout(timer);
}, [displayText, isDeleting, textIndex]);

 
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
    <div className="  bg-[#030611] text-slate-100 overflow-hidden font-sans select-none ">
      
      {/* Dynamic Immersive Background Lighting */}
      <div className="absolute top-5 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {/* Central Core Blue Lighting Aura behind the man cutout */}
        <div className="absolute top-[15%] right-[-10%] lg:right-[12%] w-[550px] h-[550px] rounded-full bg-blue-600/30 blur-[130px]" />
        {/* Soft Pink glow on edge */}
        <div className="absolute top-[40%] right-[-15%] w-[450px] h-[450px] rounded-full bg-pink-500/15 blur-[120px]" />
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25" />
      </div>


     

      
   
      <main className="relative z-10 pt-24 max-w-7xl mx-auto px-6 pt-6 pb-16 lg:pt-14 lg:pb-20">
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
  className="text-white font-bold text-4xl sm:text-5xl md:text-5xl lg:text-[52px] tracking-tight leading-[1.1] h-[100px]"
>
  Smart Ideas
  <br />

  <span className="bg-gradient-to-r from-[#5082FF] via-[#9B66FF] to-[#D55EFF] bg-clip-text text-transparent">
    {displayText.split(" ").slice(0, 2).join(" ")}
  </span>{" "}

  <span className="bg-gradient-to-r from-[#FF50A6] to-[#FF8650] bg-clip-text text-transparent">
    {displayText.split(" ").slice(2).join(" ")}
  </span>

</motion.h1>

            {/* Description Sentence */}
            <motion.p 
              variants={textItemVariants}
              className="text-slate-400 text-[15px] sm:text-[17px] leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              InfoDrif helps affiliates discover high-converting offers, optimize campaigns, and maximize commissions through performance-first marketing.
            </motion.p>

            {/* Action CTA Buttons */}
            <motion.div 
              variants={textItemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a href="/contact" className="w-full sm:w-auto text-center font-bold text-[15px] text-white px-8 py-4 rounded-xl bg-gradient-to-r from-[#6256FF] via-[#B642FF] to-[#FF7356] hover:shadow-[0_8px_30px_rgba(98,86,255,0.4)] transition-all duration-300 transform hover:-translate-y-0.5">
                Get Started <ArrowRight className="inline-block w-4 h-4 ml-1" />
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
          {/* <div 
          
            className="lg:col-span-6 relative flex items-center justify-center min-h-[500px] lg:min-h-[600px] mt-8 lg:mt-0"
          > */}
<div
  className="hidden md:flex lg:col-span-6 items-center justify-center relative min-h-[500px] lg:min-h-[600px] mt-8 lg:mt-0"
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
       

 <div className="relative z-10 flex items-center justify-center h-[310px] sm:h-[350px] md:h-[400px] lg:h-[440px]">
  <Image
    src="/assets/Hero.svg"
    alt="Brand Illustration"
    width={900}
    height={900}
    priority
    className="
      w-full
      max-w-[280px]
      sm:max-w-[380px]
      md:max-w-[480px]
      lg:max-w-[600px]
      xl:max-w-[680px]
      h-auto
      object-contain
    "
  />
</div>






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
              <span className="text-white text-2xl font-extrabold tracking-tight">250+</span>
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





