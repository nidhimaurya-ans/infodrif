"use client";

import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [activeSegment, setActiveSegment] = useState(null);

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

 
  // immediately overwritten by "blue"/"purple"). Duplicate object keys are a
  // silent JS bug — only the last one ever survives — so the intended
  // emerald/purple accents never actually rendered. Renamed the second key
  // to "accent" so both the gradient stop color AND the arc's own color are
  // preserved correctly.
  const segments = [
    {
      label: "Acquisition",
      startAngle: -170,
      endAngle: -100,
      id: "arc1",
      color: "emerald",
      title: "Customer Acquisition",
      description:
        "Generate qualified prospects using AI-driven targeting and campaigns.",
      stats: "+38% Conversion",
    },
    {
      label: "Pipeline",
      startAngle: -80,
      endAngle: -10,
      id: "arc2",
      color: "blue",
      title: "Sales Pipeline",
      description:
        "Track leads through every stage of your sales process with automated insights.",
      stats: "1,250 Active Leads",
    },
    {
      label: "Revenue",
      startAngle: 10,
      endAngle: 80,
      id: "arc3",
      color: "blue",
      title: "Revenue Growth",
      description:
        "Increase ROI with automated optimization and real-time analytics.",
      stats: "+184% ROI",
    },
    {
      label: "AI Intelligence",
      startAngle: 100,
      endAngle: 170,
      id: "arc4",
      color: "purple",
      title: "AI Intelligence",
      description:
        "Predict customer behavior and automate decision making with machine learning.",
      stats: "92% Prediction Accuracy",
    },
  ];

  // Helper to calculate SVG path for an arc
  const describeArc = (x, y, radius, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return [
      "M",
      start.x,
      start.y,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
    ].join(" ");
  };

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  return (
   
    <div className="relative  bg-[#000205] text-white overflow-hidden font-sans selection:bg-blue-500/30">
      {/* --- AMBIENT BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[1000px] h-[1000px] bg-blue-900/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-blue-900/30 to-transparent" />
      </div>


      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-16 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 w-full items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 space-y-6 sm:space-y-8 py-4 sm:py-8 lg:py-12"
          >
            <div className="space-y-1">
            
              <motion.h1
                variants={itemVariants}
                className="text-2xl sm:text-3xl font-black tracking-tight leading-[1.3] sm:leading-[1.5] uppercase text-white drop-shadow-lg"
              >
                Smarter Solutions.
              </motion.h1>
              <motion.h1
                variants={itemVariants}
                className="bg-gradient-to-r from-[#5082FF] via-[#9B66FF] to-[#D55EFF] bg-clip-text text-transparent text-2xl sm:text-3xl font-black tracking-tight leading-[1.1] uppercase"
              >
                Stronger Businesses.
              </motion.h1>
            </div>

            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-slate-400 font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[11px] sm:text-xs md:text-sm uppercase">
                AI + AUTOMATION + STRATEGY
              </p>
              <p className="text-blue-400 font-bold tracking-[0.25em] sm:tracking-[0.3em] text-[11px] sm:text-xs md:text-sm uppercase drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]">
                Build. Grow. Scale.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative w-full max-w-sm bg-slate-900/40 backdrop-blur-2xl border border-blue-500/20 rounded-2xl p-5 sm:p-6 overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]"
            >
              {/* Glow effect inside card */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-4 sm:space-y-5 relative z-10">
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
                    className="flex items-center gap-3 sm:gap-4 group cursor-default"
                  >
                    <div
                      className={`shrink-0 p-2.5 rounded-lg bg-slate-800/50 border border-slate-700 group-hover:border-blue-500/50 group-hover:bg-slate-800 transition-all ${feature.color}`}
                    >
                      {feature.icon}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-white text-sm tracking-wide truncate">
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

         
          <div className="lg:col-span-7 relative w-full flex items-center justify-center py-8 sm:py-10 lg:py-0">
         
            <div className="relative w-full max-w-[320px] xs:max-w-[380px] sm:max-w-[440px] md:max-w-[500px] aspect-square mx-auto">
            
              <svg
                viewBox="0 0 500 500"
                className="absolute inset-0 w-full h-full drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]"
              >
                <defs>
                  {/* Gradients for Arcs */}
                  {segments.map((seg, i) => (
                    <linearGradient
                      key={`grad-${i}`}
                      id={`grad-${i}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        stopColor={
                          seg.color === "blue"
                            ? "#3b82f6"
                            : seg.color === "emerald"
                              ? "#10b981"
                              : "#a855f7"
                        }
                      />
                      <stop
                        offset="100%"
                        stopColor={
                          seg.color === "blue"
                            ? "#60a5fa"
                            : seg.color === "emerald"
                              ? "#34d399"
                              : "#d946ef"
                        }
                      />
                    </linearGradient>
                  ))}
                </defs>

             
                <motion.g
                  className="opacity-20"
                  style={{ transformOrigin: "250px 250px" }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <path
                    d={describeArc(250, 250, 210, -180, -95)}
                    fill="none"
                    stroke="#60a5fa"
                    strokeWidth="1"
                  />
                  <circle
                    cx={polarToCartesian(250, 250, 210, -180).x}
                    cy={polarToCartesian(250, 250, 210, -180).y}
                    r="3"
                    fill="#60a5fa"
                  />

                  <path
                    d={describeArc(250, 250, 210, 0, 85)}
                    fill="none"
                    stroke="#34d399"
                    strokeWidth="1"
                  />
                  <circle
                    cx={polarToCartesian(250, 250, 210, 85).x}
                    cy={polarToCartesian(250, 250, 210, 85).y}
                    r="3"
                    fill="#34d399"
                  />
                </motion.g>

              
                {segments.map((seg, i) => {
                  const arcPath = describeArc(
                    250,
                    250,
                    160,
                    seg.startAngle,
                    seg.endAngle,
                  );
                  const textPath = describeArc(
                    250,
                    250,
                    160,
                    seg.startAngle,
                    seg.endAngle,
                  ); // Path for text to follow

                  return (
                    <g key={i}>
                      <motion.path
                        onHoverStart={() => setActiveSegment(seg)}
                        onHoverEnd={() => setActiveSegment(null)}
                        d={arcPath}
                        fill="none"
                        stroke={`url(#grad-${i})`}
                        strokeWidth="45"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, delay: i * 0.2 }}
                        style={{ cursor: "pointer" }}
                      />
                      {/* Text along path */}
                      <path id={seg.id} d={textPath} fill="none" />
                      <text
                        onMouseEnter={() => setActiveSegment(seg)}
                        onMouseLeave={() => setActiveSegment(null)}
                        className="fill-white font-bold text-[14px] uppercase tracking-wider"
                        style={{ cursor: "pointer" }}
                      >
                        <textPath
                          href={`#${seg.id}`}
                          startOffset="50%"
                          textAnchor="middle"
                        >
                          {seg.label}
                        </textPath>
                      </text>
                    </g>
                  );
                })}
              </svg>

              <AnimatePresence>
                {activeSegment && (
                 
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.25 }}
                    className="
                      absolute
                      left-1/2
                      top-[4%]
                      -translate-x-1/2
                      w-[78%]
                      max-w-[240px]
                      rounded-2xl
                      bg-slate-900/95
                      border
                      border-blue-500/30
                      p-3.5
                      sm:p-5
                      backdrop-blur-xl
                      shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                      z-50
                    "
                  >
                    <h4 className="text-sm sm:text-lg font-bold text-white">
                      {activeSegment.title}
                    </h4>

                    <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {activeSegment.description}
                    </p>

                    <div className="mt-2.5 sm:mt-4 border-t border-white/10 pt-2 sm:pt-3">
                      <span className="text-cyan-400 font-semibold text-xs sm:text-base">
                        {activeSegment.stats}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[44%] h-[44%] min-w-[130px] min-h-[130px] rounded-full bg-slate-900/80 border border-slate-700 backdrop-blur-md flex flex-col items-center justify-center text-center p-4 sm:p-6 shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10">
                <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-pulse" />

                <span className="text-blue-400 font-bold text-sm sm:text-lg mb-1">
                  Web<span className="text-white">FX</span>
                </span>
                <h3 className="text-white font-black text-base sm:text-xl leading-tight mb-2">
                  Revenue Engine
                </h3>
                <div className="h-[1px] w-10 sm:w-12 bg-blue-500/50 mb-2" />
                <p className="text-blue-300 text-[10px] sm:text-xs font-bold uppercase tracking-tighter">
                  <span className="text-white text-sm sm:text-base">15%</span>{" "}
                  Higher Lead Growth
                </p>
              </div>

         
              <div className="absolute w-full h-full pointer-events-none">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 sm:w-12 h-[2px] bg-gradient-to-r from-transparent to-blue-500/50" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 sm:w-12 h-[2px] bg-gradient-to-l from-transparent to-emerald-500/50" />

                <div className="absolute left-2 sm:left-10 top-[40%] w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_cyan]" />
                <div className="absolute right-2 sm:right-10 top-[60%] w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_lime]" />
              </div>

           
              <div className="absolute bottom-[-6%] sm:bottom-[-4%] left-1/2 -translate-x-1/2 w-full opacity-40 pointer-events-none">
                <div className="relative flex flex-col items-center justify-end h-[60px] sm:h-[100px]">
                  <div className="w-[60%] max-w-[300px] h-[18px] sm:h-[30px] bg-blue-900/20 rounded-[100%] border-t border-blue-500/30 blur-sm" />
                  <div className="absolute bottom-0 w-[40%] max-w-[200px] h-[6px] sm:h-[10px] bg-blue-500/20 blur-xl rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WorkStretegy;