// "use client";

// import React from 'react';
// import { motion } from 'framer-motion';
// import {
//   Rocket,
//   Target,
//   DollarSign,
//   ShieldCheck,
//   TrendingUp,
//   Users,
//   Settings,
//   Lightbulb,
//   PieChart,
//   ShoppingCart,
//   Lock
// } from 'lucide-react';

// export default function WorkStretegy() {
//   // Feature list data
//   const features = [
//     {
//       icon: Rocket,
//       title: 'Work Smarter',
//       description: 'Save time, boost efficiency'
//     },
//     {
//       icon: Target,
//       title: 'Make Better Decisions',
//       description: 'Data-driven, results-focused'
//     },
//     {
//       icon: DollarSign,
//       title: 'Increase Profits',
//       description: 'Optimize. Convert. Grow.'
//     },
//     {
//       icon: ShieldCheck,
//       title: 'Secure & Scalable',
//       description: 'Built for long-term success'
//     }
//   ];

//   // Orbit icon data — positioned around the globe
//   const orbitIcons = [
//     { icon: TrendingUp, label: 'GROWTH', angle: -90, radius: 200 },      // Top
//     { icon: Users, label: 'CUSTOMERS', angle: -140, radius: 200 },       // Top-left
//     { icon: Settings, label: 'AUTOMATION', angle: -40, radius: 200 },    // Top-right
//     { icon: Lightbulb, label: 'STRATEGY', angle: -190, radius: 200 },    // Left
//     { icon: ShoppingCart, label: 'SALES', angle: 10, radius: 200 },      // Right
//     { icon: PieChart, label: 'DATA', angle: 90, radius: 200 },           // Bottom
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15, delayChildren: 0.2 }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
//   };

//   return (
//     <div className="relative min-h-screen bg-[#020617] text-white overflow-hidden font-sans">

//       <div className="absolute inset-0 pointer-events-none z-0">

//         <div className="absolute top-[20%] right-[10%] w-[700px] h-[700px] rounded-full bg-blue-600/15 blur-[150px]" />

//         <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-purple-700/10 blur-[130px]" />

//         <div
//           className="absolute inset-0 opacity-[0.07]"
//           style={{
//             backgroundImage: `linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)`,
//             backgroundSize: '50px 50px',
//             maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
//             WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)'
//           }}
//         />
//       </div>

//       {/* ============ MAIN GRID ============ */}
//       <main className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">

//           {/* ================================================ */}
//           {/* LEFT COLUMN                                      */}
//           {/* ================================================ */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="lg:col-span-6 space-y-8 relative z-20"
//           >
//             {/* Small top accent line */}
//             <motion.div variants={itemVariants} className="w-16 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

//             {/* Main Heading */}
//             <motion.h1
//               variants={itemVariants}
//               className="text-white font-bold text-3xl sm:text-3xl lg:text-[52px] tracking-tight leading-[1.02] uppercase"
//             >
//               Smarter <br />
//               Solutions.<br />
//               <span className="bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#A855F7] bg-clip-text text-transparent">
//                 Stronger <br /> Businesses.
//               </span>
//             </motion.h1>

//             {/* Divider */}
//             {/* <motion.div variants={itemVariants} className="w-16 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500" /> */}

//             {/* Subtext */}
//             <motion.div variants={itemVariants} className="space-y-1.5">
//               <p className="text-white text-[15px] sm:text-[17px] font-medium tracking-[0.15em] uppercase">
//                 AI + Automation + Strategy
//               </p>
//               <p className="text-blue-400 text-[15px] sm:text-[17px] font-medium tracking-[0.35em] uppercase">
//                 Build. Grow. Scale.
//               </p>
//             </motion.div>

//             {/* Feature List Card */}
//             <motion.div
//               variants={itemVariants}
//               className="mt-10 rounded-2xl bg-gradient-to-br from-[#0a1229]/90 to-[#050b1c]/90 backdrop-blur-xl border border-white/10 p-6 shadow-2xl shadow-blue-500/5 max-w-md"
//             >
//               <ul className="space-y-5">
//                 {features.map((feature, index) => {
//                   const Icon = feature.icon;
//                   return (
//                     <motion.li
//                       key={index}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.8 + index * 0.15, duration: 0.5 }}
//                       className="flex items-start gap-4 group cursor-pointer"
//                     >
//                       {/* Icon Circle */}
//                       <div className="flex-shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-blue-500/15 to-purple-500/15 border border-blue-400/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 group-hover:scale-110 transition-all duration-300">
//                         <Icon className="w-5 h-5 text-blue-400" strokeWidth={2} />
//                       </div>
//                       {/* Text */}
//                       <div className="flex-1 pt-0.5">
//                         <h4 className="text-white font-bold text-[15px]">{feature.title}</h4>
//                         <p className="text-slate-400 text-[13px] mt-0.5">{feature.description}</p>
//                       </div>
//                     </motion.li>
//                   );
//                 })}
//               </ul>
//             </motion.div>
//           </motion.div>

//           {/* ================================================ */}
//           {/* RIGHT COLUMN — GLOBE + ORBITING ICONS + PODIUM   */}
//           {/* ================================================ */}
//           <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[700px] mt-8 lg:mt-0">

//             {/* ============ GLOBE + ORBIT SYSTEM ============ */}
//             <div className="relative w-full h-[500px] flex items-center justify-center">

//               {/* Outer aura behind globe */}
//               <div className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
//                 style={{
//                   background: 'radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(59,130,246,0) 70%)',
//                   filter: 'blur(30px)'
//                 }}
//               />

//               {/* Rotating Wireframe Globe */}
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
//                 className="relative w-[320px] h-[320px] sm:w-[360px] sm:h-[360px]"
//               >
//                 <WireframeGlobe />
//               </motion.div>

//               {/* Static overlay glow on globe (doesn't rotate) */}
//               <div className="absolute w-[320px] h-[320px] sm:w-[360px] sm:h-[360px] rounded-full pointer-events-none"
//                 style={{
//                   background: 'radial-gradient(circle at 30% 30%, rgba(96,165,250,0.4) 0%, rgba(59,130,246,0.1) 40%, transparent 70%)'
//                 }}
//               />

//               {/* Orbit Icons — floating around globe */}
//               {orbitIcons.map((item, i) => {
//                 const Icon = item.icon;
//                 const rad = (item.angle * Math.PI) / 180;
//                 // Responsive radius using CSS
//                 return (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, scale: 0 }}
//                     animate={{
//                       opacity: 1,
//                       scale: 1,
//                       y: [0, -8, 0]
//                     }}
//                     transition={{
//                       opacity: { delay: 0.5 + i * 0.1, duration: 0.5 },
//                       scale: { delay: 0.5 + i * 0.1, duration: 0.5, type: 'spring' },
//                       y: { repeat: Infinity, duration: 3 + i * 0.3, ease: 'easeInOut', delay: i * 0.2 }
//                     }}
//                     className="absolute flex flex-col items-center gap-2 z-20"
//                     style={{
//                       left: `calc(50% + ${Math.cos(rad) * 200}px)`,
//                       top: `calc(50% + ${Math.sin(rad) * 200}px)`,
//                       transform: 'translate(-50%, -50%)'
//                     }}
//                   >
//                     {/* Icon Bubble */}
//                     <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0d1a35]/95 to-[#050b1c]/95 backdrop-blur-lg border border-blue-400/40 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:scale-110 hover:border-blue-300 transition-all duration-300 cursor-pointer">
//                       <Icon className="w-6 h-6 text-blue-300" strokeWidth={2} />
//                     </div>
//                     {/* Label */}
//                     <span className="text-blue-200 text-[10px] font-bold tracking-[0.15em] whitespace-nowrap drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
//                       {item.label}
//                     </span>
//                   </motion.div>
//                 );
//               })}

//               {/* Connection lines from globe to icons */}
//               <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" xmlns="http://www.w3.org/2000/svg">
//                 <defs>
//                   <radialGradient id="lineGrad" cx="50%" cy="50%" r="50%">
//                     <stop offset="0%" stopColor="rgba(59,130,246,0.5)" />
//                     <stop offset="100%" stopColor="rgba(59,130,246,0)" />
//                   </radialGradient>
//                 </defs>
//                 {orbitIcons.map((item, i) => {
//                   const rad = (item.angle * Math.PI) / 180;
//                   const x2 = 50 + (Math.cos(rad) * 40);
//                   const y2 = 50 + (Math.sin(rad) * 40);
//                   return (
//                     <line
//                       key={i}
//                       x1="50%"
//                       y1="50%"
//                       x2={`${x2}%`}
//                       y2={`${y2}%`}
//                       stroke="url(#lineGrad)"
//                       strokeWidth="1"
//                       strokeDasharray="3 3"
//                       opacity="0.3"
//                     />
//                   );
//                 })}
//               </svg>
//             </div>

//             {/* ============ HOLOGRAPHIC PODIUM WITH BEAM ============ */}
//             <div className="relative w-full flex flex-col items-center mt-[-40px] z-10">

//               {/* Vertical Light Beam rising from podium */}
//               <motion.div
//                 initial={{ opacity: 0, scaleY: 0.5 }}
//                 animate={{ opacity: [0.4, 0.8, 0.4], scaleY: 1 }}
//                 transition={{
//                   opacity: { repeat: Infinity, duration: 3, ease: 'easeInOut' },
//                   scaleY: { duration: 1, delay: 1 }
//                 }}
//                 className="absolute bottom-[60px] w-[220px] h-[280px] pointer-events-none z-0"
//                 style={{ transformOrigin: 'bottom center' }}
//               >
//                 <div className="w-full h-full"
//                   style={{
//                     background: 'linear-gradient(to top, rgba(59,130,246,0.55) 0%, rgba(96,165,250,0.35) 40%, rgba(59,130,246,0) 100%)',
//                     filter: 'blur(15px)',
//                     clipPath: 'polygon(40% 100%, 60% 100%, 90% 0%, 10% 0%)'
//                   }}
//                 />
//               </motion.div>

//               {/* Particle rain effect inside beam */}
//               <div className="absolute bottom-[60px] w-[220px] h-[280px] pointer-events-none z-0 overflow-hidden">
//                 {[...Array(30)].map((_, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ y: -20, opacity: 0 }}
//                     animate={{
//                       y: 280,
//                       opacity: [0, 1, 1, 0]
//                     }}
//                     transition={{
//                       duration: 2 + Math.random() * 2,
//                       repeat: Infinity,
//                       delay: Math.random() * 3,
//                       ease: 'linear'
//                     }}
//                     className="absolute w-[1.5px] h-[8px] bg-blue-300 rounded-full"
//                     style={{
//                       left: `${20 + Math.random() * 60}%`,
//                       boxShadow: '0 0 4px rgba(96,165,250,0.8)'
//                     }}
//                   />
//                 ))}
//               </div>

//               {/* Podium — Circular Stacked Discs */}
//               <div className="relative w-[280px] h-[100px] flex items-center justify-center z-10">
//                 {/* Bottom disc — widest */}
//                 <div className="absolute bottom-0 w-[280px] h-[35px] rounded-[50%] bg-gradient-to-b from-[#1e3a8a] to-[#0f172a] border border-blue-400/40 shadow-[0_0_40px_rgba(59,130,246,0.5)]" />
//                 {/* Middle disc */}
//                 <div className="absolute bottom-[20px] w-[230px] h-[30px] rounded-[50%] bg-gradient-to-b from-[#2563eb] to-[#1e3a8a] border border-blue-300/50 shadow-[0_0_30px_rgba(59,130,246,0.6)]" />
//                 {/* Top disc — brightest */}
//                 <div className="absolute bottom-[40px] w-[190px] h-[28px] rounded-[50%] bg-gradient-to-b from-[#3b82f6] to-[#1d4ed8] border border-blue-200/70 shadow-[0_0_35px_rgba(96,165,250,0.8)]">
//                   {/* Bright inner ring */}
//                   <div className="absolute inset-[3px] rounded-[50%] bg-gradient-to-b from-[#60a5fa] to-[#2563eb] opacity-80" />
//                 </div>

//                 {/* Bright core light on top */}
//                 <div className="absolute bottom-[55px] w-[140px] h-[20px] rounded-[50%] bg-[#93c5fd] opacity-70 blur-md" />
//                 <div className="absolute bottom-[58px] w-[100px] h-[14px] rounded-[50%] bg-white opacity-90 blur-sm" />
//               </div>

//               {/* Sparkles around podium base */}
//               {[...Array(8)].map((_, i) => (
//                 <motion.div
//                   key={i}
//                   animate={{
//                     opacity: [0, 1, 0],
//                     scale: [0.5, 1.2, 0.5]
//                   }}
//                   transition={{
//                     duration: 2 + Math.random() * 2,
//                     repeat: Infinity,
//                     delay: Math.random() * 3
//                   }}
//                   className="absolute w-1 h-1 rounded-full bg-blue-300"
//                   style={{
//                     bottom: `${Math.random() * 40}px`,
//                     left: `${20 + Math.random() * 60}%`,
//                     boxShadow: '0 0 6px rgba(96,165,250,0.9)'
//                   }}
//                 />
//               ))}

//               {/* Ground reflection glow */}
//               <div className="absolute bottom-0 w-[400px] h-[100px] rounded-[50%] pointer-events-none"
//                 style={{
//                   background: 'radial-gradient(ellipse, rgba(59,130,246,0.4) 0%, rgba(59,130,246,0) 70%)',
//                   filter: 'blur(20px)'
//                 }}
//               />
//             </div>

//           </div>
//         </div>
//       </main>

//       {/* Bottom fade grid effect */}
//       <div className="absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none"
//         style={{
//           background: 'linear-gradient(to top, rgba(2,6,23,0.9), transparent)'
//         }}
//       />
//     </div>
//   );
// }

// // ================================================================
// // WIREFRAME GLOBE COMPONENT — Built with pure SVG for authenticity
// // ================================================================
// function WireframeGlobe() {
//   return (
//     <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_30px_rgba(59,130,246,0.6)]">
//       <defs>
//         {/* Radial gradient for globe surface */}
//         <radialGradient id="globeFill" cx="35%" cy="35%" r="65%">
//           <stop offset="0%" stopColor="#1e40af" stopOpacity="0.4" />
//           <stop offset="50%" stopColor="#1e3a8a" stopOpacity="0.5" />
//           <stop offset="100%" stopColor="#0c1e5e" stopOpacity="0.7" />
//         </radialGradient>
//         {/* Linear gradient for meridians */}
//         <linearGradient id="meridianGrad" x1="0" y1="0" x2="1" y2="0">
//           <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
//           <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.8" />
//           <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
//         </linearGradient>
//       </defs>

//       {/* Main sphere background */}
//       <circle cx="200" cy="200" r="150" fill="url(#globeFill)" />

//       {/* Latitude lines (horizontal ellipses) */}
//       {[30, 60, 90, 120, 150, 180, 210, 240, 270].map((y, i) => {
//         const ry = Math.abs(150 - Math.abs(y - 200)) * 0.85;
//         return (
//           <ellipse
//             key={`lat-${i}`}
//             cx="200"
//             cy={y + 50}
//             rx="150"
//             ry={ry * 0.15}
//             fill="none"
//             stroke="#3b82f6"
//             strokeWidth="0.5"
//             opacity="0.4"
//           />
//         );
//       })}

//       {/* Longitude lines (vertical ellipses) */}
//       {[0, 30, 60, 90, 120, 150].map((angle, i) => (
//         <ellipse
//           key={`lng-${i}`}
//           cx="200"
//           cy="200"
//           rx={150 * Math.abs(Math.cos((angle * Math.PI) / 180))}
//           ry="150"
//           fill="none"
//           stroke="#3b82f6"
//           strokeWidth="0.5"
//           opacity="0.35"
//           transform={`rotate(${angle * 0.5}, 200, 200)`}
//         />
//       ))}

//       {/* Main outer circle */}
//       <circle cx="200" cy="200" r="150" fill="none" stroke="#60a5fa" strokeWidth="1.2" opacity="0.7" />

//       {/* Dotted continents — abstract */}
//       {generateDots().map((dot, i) => (
//         <circle
//           key={i}
//           cx={dot.x}
//           cy={dot.y}
//           r={dot.r}
//           fill="#93c5fd"
//           opacity={dot.o}
//         />
//       ))}

//       {/* Bright connection nodes */}
//       {[
//         { x: 150, y: 160 },
//         { x: 240, y: 180 },
//         { x: 180, y: 240 },
//         { x: 260, y: 220 },
//         { x: 140, y: 220 }
//       ].map((node, i) => (
//         <g key={`node-${i}`}>
//           <circle cx={node.x} cy={node.y} r="3" fill="#60a5fa" opacity="0.9" />
//           <circle cx={node.x} cy={node.y} r="6" fill="none" stroke="#60a5fa" strokeWidth="0.5" opacity="0.5" />
//         </g>
//       ))}
//     </svg>
//   );
// }

// // Helper: Generate random continent-like dots on the globe
// function generateDots() {
//   const dots = [];
//   const cx = 200, cy = 200, r = 145;
//   // Seeded pseudo-random for consistent output
//   let seed = 42;
//   const rand = () => {
//     seed = (seed * 9301 + 49297) % 233280;
//     return seed / 233280;
//   };

//   for (let i = 0; i < 400; i++) {
//     // Generate points within a circle
//     const angle = rand() * Math.PI * 2;
//     const dist = Math.sqrt(rand()) * r;
//     const x = cx + Math.cos(angle) * dist;
//     const y = cy + Math.sin(angle) * dist;
//     dots.push({
//       x,
//       y,
//       r: 0.6 + rand() * 1.2,
//       o: 0.3 + rand() * 0.6
//     });
//   }
//   return dots;
// }

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Target,
  DollarSign,
  ShieldCheck,
  Users,
  TrendingUp,
  Cpu,
  ShoppingCart,
  PieChart,
  Lightbulb,
} from "lucide-react";

const WorkStretegy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Orbital items configuration - Positions match reference image
  const orbitItems = [
    { icon: <TrendingUp size={20} />, label: "GROWTH", angle: 0 }, // Top
    { icon: <Users size={20} />, label: "CUSTOMERS", angle: 60 }, // Top Left
    { icon: <Cpu size={20} />, label: "AUTOMATION", angle: 120 }, // Top Right
    { icon: <Lightbulb size={20} />, label: "STRATEGY", angle: 180 }, // Bottom Left
    { icon: <ShoppingCart size={20} />, label: "SALES", angle: 240 }, // Bottom Right
    { icon: <PieChart size={20} />, label: "DATA", angle: 300 }, // Bottom
  ];

  return (
    <div className="relative min-h-screen bg-[#000205] text-white overflow-hidden font-sans selection:bg-blue-500/30">
      {/* --- AMBIENT BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[1000px] h-[1000px] bg-blue-900/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-blue-900/30 to-transparent" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 w-full items-center">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 space-y-8 py-12"
          >
   

            <div className="space-y-1">
              <motion.h1
                variants={itemVariants}
                className="text-3xl md:text-4xl font-black tracking-tight leading-[1.1] uppercase text-white drop-shadow-lg"
              >
                Smarter <br /> Solutions.
              </motion.h1>
              <motion.h1
                variants={itemVariants}
                className=" bg-gradient-to-r from-[#5082FF] via-[#9B66FF] to-[#D55EFF] bg-clip-text text-transparent text-3xl md:text-3xl font-black tracking-tight leading-[1.1] uppercase "
              >
                Stronger <br /> Businesses.
              </motion.h1>
            </div>

            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-slate-400 font-bold tracking-[0.25em] text-xs md:text-sm uppercase">
                AI + AUTOMATION + STRATEGY
              </p>
              <p className="text-blue-400 font-bold tracking-[0.3em] text-xs md:text-sm uppercase drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]">
                Build. Grow. Scale.
              </p>
            </motion.div>

            {/* Feature Card - Exact Glassmorphism from reference */}
            <motion.div
              variants={itemVariants}
              className="relative bg-slate-900/40 backdrop-blur-2xl border border-blue-500/20 rounded-2xl p-6 max-w-sm overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]"
            >
              {/* Glow effect inside card */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-5 relative z-10">
                {[
                  {
                    icon: <Rocket size={20} />,
                    title: "Work Smarter",
                    desc: "Save time, boost efficiency",
                    color: "text-cyan-400",
                  },
                  {
                    icon: <Target size={20} />,
                    title: "Make Better Decisions",
                    desc: "Data-driven, results-focused",
                    color: "text-purple-400",
                  },
                  {
                    icon: <DollarSign size={20} />,
                    title: "Increase Profits",
                    desc: "Optimize. Convert. Grow.",
                    color: "text-emerald-400",
                  },
                  {
                    icon: <ShieldCheck size={20} />,
                    title: "Secure & Scalable",
                    desc: "Built for long-term success",
                    color: "text-blue-400",
                  },
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 group cursor-default"
                  >
                    <div
                      className={`p-2.5 rounded-lg bg-slate-800/50 border border-slate-700 group-hover:border-blue-500/50 group-hover:bg-slate-800 transition-all ${feature.color}`}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm tracking-wide">
                        {feature.title}
                      </h4>
                      <p className="text-slate-400 text-xs mt-0.5">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* --- RIGHT SIDE (B-SIDE): HOLOGRAPHIC VISUAL --- */}
          <div className="lg:col-span-7 relative h-[600px] md:h-[700px] flex items-center justify-center">
            {/* Orbital System Container */}
            <div className="relative w-[450px] h-[450px] md:w-[550px] md:h-[550px]">
              {/* SVG Connecting Lines (The "Web") */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                <defs>
                  <linearGradient
                    id="lineGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                    <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Lines from center to each icon position */}
                {orbitItems.map((_, i) => {
                  const angle = i * 60 * (Math.PI / 180);
                  const r = 175; // Orbit radius for lines
                  const x2 = 275 + r * Math.cos(angle - Math.PI / 2); // 275 is center (550/2)
                  const y2 = 275 + r * Math.sin(angle - Math.PI / 2);
                  return (
                    <motion.line
                      key={i}
                      x1="275"
                      y1="275"
                      x2={x2}
                      y2={y2}
                      stroke="url(#lineGrad)"
                      strokeWidth="1"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.5, delay: 1 + i * 0.1 }}
                    />
                  );
                })}
              </svg>

              {/* Central Holographic Globe */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] md:w-[280px] md:h-[280px]">
                {/* Outer Glow Ring */}
                <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-[spin_10s_linear_infinite] shadow-[0_0_30px_rgba(59,130,246,0.3)]" />
                <div className="absolute inset-4 rounded-full border border-blue-400/20 animate-[spin_15s_linear_infinite_reverse]" />

                {/* The Globe Wireframe */}
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-900/40 to-slate-900/40 backdrop-blur-sm border border-blue-500/40 overflow-hidden shadow-[inset_0_0_40px_rgba(59,130,246,0.2)]">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-blue-400" />
                    <div className="absolute top-0 left-1/2 w-[1px] h-full bg-blue-400" />
                    <div className="absolute top-1/2 left-1/2 w-[70%] h-[70%] border border-blue-400/50 rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute top-1/2 left-1/2 w-[140%] h-[40%] border border-blue-400/30 rounded-full -translate-x-1/2 -translate-y-1/2 rotate-12" />
                  </div>
                  {/* Continents (Abstract) */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.4),transparent_50%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(147,197,253,0.3),transparent_40%)]" />
                </div>

                {/* Floating Particles around globe */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,1)]"
                    style={{
                      top: `${50 + 35 * Math.sin(i * 1.04)}%`,
                      left: `${50 + 35 * Math.cos(i * 1.04)}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>

              {/* Orbital Icons */}
              {orbitItems.map((item, idx) => {
                // Calculate position on circle
                const angle = (item.angle * Math.PI) / 180;
                const radius = 180; // Distance from center
                const x = Math.cos(angle - Math.PI / 2) * radius;
                const y = Math.sin(angle - Math.PI / 2) * radius;

                return (
                  <motion.div
                    key={idx}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      x: x,
                      y: y,
                      translateX: "-50%",
                      translateY: "-50%",
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: 0.8 + idx * 0.15,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <motion.div
                      className="flex flex-col items-center gap-2 group cursor-pointer"
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.5,
                      }}
                    >
                      {/* Icon Circle */}
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0a1525] border border-blue-500/60 flex items-center justify-center text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:scale-110 group-hover:border-blue-400 group-hover:text-white transition-all duration-300 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item.icon}
                      </div>
                      {/* Label */}
                      <span className="text-[9px] md:text-[10px] font-black tracking-widest text-slate-300 group-hover:text-blue-400 transition-colors whitespace-nowrap uppercase bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                        {item.label}
                      </span>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* BOTTOM PODIUM (The Platform) */}
            <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-full max-w-[500px] perspective-[1000px]">
              {/* Glowing Data Streams Rising Up */}
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[200px] h-[300px] overflow-hidden opacity-60">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bottom-0 w-[2px] bg-gradient-to-t from-blue-500 via-cyan-400 to-transparent"
                    style={{
                      left: `${10 + i * 6}%`,
                      height: `${50 + Math.random() * 100}px`,
                    }}
                    animate={{
                      height: [
                        `${50 + Math.random() * 50}px`,
                        `${150 + Math.random() * 100}px`,
                        `${50 + Math.random() * 50}px`,
                      ],
                      opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              {/* Podium Rings */}
              <div className="relative flex flex-col items-center justify-end h-[150px]">
                {/* Top Platform (Where globe sits) */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="w-[280px] h-[40px] bg-gradient-to-b from-blue-900/80 to-blue-950/80 rounded-[100%] border-t-2 border-blue-400/60 shadow-[0_0_30px_rgba(59,130,246,0.6)] z-30 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)]" />
                </motion.div>

                {/* Middle Ring */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="w-[360px] h-[50px] bg-[#070d1a] rounded-[100%] border-t border-blue-800/40 -mt-4 z-20 shadow-xl"
                />

                {/* Bottom Ring */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="w-[440px] h-[60px] bg-[#02040a] rounded-[100%] border-t border-blue-900/20 -mt-6 z-10 opacity-80"
                />

                {/* Reflection/Glow on floor */}
                <div className="absolute bottom-0 w-[300px] h-[20px] bg-blue-500/30 blur-2xl rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WorkStretegy;
