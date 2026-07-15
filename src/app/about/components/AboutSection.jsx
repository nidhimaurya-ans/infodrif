"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Quote } from "lucide-react";

// ---- Shared motion presets ----
const EASE = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: EASE },
  }),
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export const AboutSection = () => {
  const highlights = [
    "AI-driven strategy & implementation",
    "Enterprise-grade data security",
    "24/7 dedicated expert support",
  ];

  return (
    <section className="relative overflow-hidden bg-[#02040a] py-24 md:py-32">
      {/* ---------- Ambient Background ---------- */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* ---------------- LEFT: Visual ---------------- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="h-[520px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 via-transparent to-transparent mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02040a]/80 via-transparent to-transparent" />
            </div>

            {/* Floating experience badge */}
            <motion.div
              // animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-4 top-10 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-xl md:-left-8"
            >
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-xs uppercase tracking-wider text-slate-400">
                Years Experience
              </div>
            </motion.div>

            {/* Floating testimonial chip */}
            <motion.div
           
              transition={{
                duration: 5,
               repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-6 -right-4 max-w-[240px] rounded-2xl border border-white/15 bg-[#0a1428]/90 p-5 backdrop-blur-xl md:-right-8"
            >
              <Quote size={20} className="mb-2 text-blue-400" />
              <p className="text-sm leading-relaxed text-slate-300">
                "Their AI expertise reshaped our entire workflow."
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600" />
                <div>
                  <div className="text-xs font-semibold text-white">
                    Sarah Chen
                  </div>
                  <div className="text-[10px] text-slate-400">CTO, Nexus</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative glow */}
            <div className="absolute -bottom-8 right-1/4 -z-10 h-32 w-32 rounded-full bg-blue-600/20 blur-2xl" />
          </motion.div>

          {/* ---------------- RIGHT: Content ---------------- */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-7"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent" />
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Who We Are
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl"
            >
              Building intelligent
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                futures with AI
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed text-slate-400"
            >
              We leverage cutting-edge artificial intelligence to transform how
              businesses operate — making them more efficient, agile, and
              prepared for the future of digital commerce.
            </motion.p>

            {/* Feature checklist */}
            <motion.ul variants={container} className="space-y-3.5">
              {highlights.map((item, idx) => (
                <motion.li
                  key={idx}
                  variants={fadeUp}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <CheckCircle2 size={20} className="shrink-0 text-blue-400" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA */}
            {/* <motion.div variants={fadeUp} className="pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 rounded-full border-2 border-blue-600 px-8 py-3.5 font-semibold text-blue-400 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-[0_8px_30px_rgba(37,99,235,0.35)]"
              >
                Get A Quote
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
