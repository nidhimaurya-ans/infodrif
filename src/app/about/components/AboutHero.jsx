"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Users,
  ThumbsUp,
  Briefcase,
  ArrowRight,
  Sparkles,
  Brain,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

const CountUp = ({ end, suffix = "", className = "" }) => {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 1800;
      const increment = Math.ceil(end / (duration / 16));

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          if (nodeRef.current) nodeRef.current.textContent = end + suffix;
          clearInterval(timer);
        } else {
          if (nodeRef.current) nodeRef.current.textContent = start + suffix;
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, end, suffix]);

  return (
    <span ref={nodeRef} className={className}>
      0{suffix}
    </span>
  );
};

export const AboutHero = () => {
  const stats = [
    {
      icon: <Users size={32} />,
      value: 250,
      suffix: "+",
      label: "Expert AI Consultants",
      color: "from-violet-500 to-indigo-500",
    },
    {
      icon: <ThumbsUp size={32} />,
      value: 100,
      suffix: "%",
      label: "Client Satisfaction",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Briefcase size={32} />,
      value: 250,
      suffix: "+",
      label: "Projects Delivered",
      color: "from-amber-500 to-orange-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative  flex items-center overflow-hidden bg-[#0a0a0f] pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#4f46e510_0%,transparent_50%)]" />
      <div className="absolute top-20 -right-40 w-[700px] h-[700px] bg-gradient-to-br from-violet-600/10 to-indigo-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="lg:col-span-7 space-y-10"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-3xl bg-white/5 border border-white/10 text-sm font-medium text-violet-400 mb-6">
                <Sparkles className="w-4 h-4" />
                AI EXCELLENCE SINCE 2021
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-[62px] font-semibold leading-[1.5] tracking-tighter text-white"
            >
              AI Consulting <br />
              That{" "}
              <span className="bg-gradient-to-r from-[#FF50A6] to-[#FF8650] bg-clip-text text-transparent">
                Delivers Results
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-400 max-w-lg leading-relaxed"
            >
              We partner with visionary organizations to architect intelligent
              systems that transform operations, unlock new opportunities, and
              create lasting competitive advantage.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group cursor-pointer flex items-center gap-3 bg-white text-gray-900 px-10 py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-violet-500/20 hover:shadow-2xl hover:shadow-violet-500/30 transition-all duration-300"
              >
                Get Strategic
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button> */}

              <motion.button className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="/contact"
                  className="w-full sm:w-auto text-center font-bold text-[15px] text-white px-8 py-4 rounded-xl bg-gradient-to-r from-[#6256FF] via-[#B642FF] to-[#FF7356] hover:shadow-[0_8px_30px_rgba(98,86,255,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Get Strategy{" "}
                  <ArrowRight className="inline-block w-4 h-4 ml-1" />
                </a>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 flex items-center justify-center h-[310px] sm:h-[350px] md:h-[400px] lg:h-[440px]">
              <Image
                src="/assets/about1.png"
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
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-15  p-10 "
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="group flex items-center gap-8 px-4 py-3 transition-all duration-500"
              >
                <div
                  className={`p-5 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-lg shadow-black/30 group-hover:scale-105 transition-transform duration-300`}
                >
                  {stat.icon}
                </div>
                <div>
                  <div className="text-5xl font-semibold text-white tabular-nums">
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                      className="font-mono"
                    />
                  </div>
                  <div className="text-slate-400 mt-1.5 text-sm font-medium tracking-wider uppercase">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
