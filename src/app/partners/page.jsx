"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Pricing from "./components/Pricing";
import FeatureRow from "./components/MainFeature";
import ServiceFeature from "./components/ServiceFeature";

const HERO_IMG =
  "https://www.pngplay.com/wp-content/uploads/13/Software-IT-Services-Transparent-PNG.png";
const FEATURE_1_IMG =
  "https://static.vecteezy.com/system/resources/thumbnails/034/119/337/small/email-marketing-3d-illustration-email-marketing-campaign-newsletter-marketing-and-email-service-png.png";
const FEATURE_2_IMG =
  "https://www.nextrow.com/wp-content/uploads/2024/12/Cloud_02.png";
const FEATURE_3_IMG =
  "https://png.pngtree.com/png-clipart/20250814/original/pngtree-d-illustration-of-marketing-and-business-growth-elements-including-charts-gears-png-image_21441659.png";
const FEATURE_4_IMG =
  "https://png.pngtree.com/png-clipart/20241129/original/pngtree-email-marketing-services-clip-art-png-image_17414295.png";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

const floatAnim = {
  // y: [0, -12, 0],
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
};

const IconCircle = ({ children }) => (
  <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#6C5CE7] to-[#4a3db5] flex items-center justify-center shadow-lg shadow-[#6C5CE7]/30">
    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7c6ff0] to-[#5242cc] flex items-center justify-center text-white">
      {children}
    </div>
  </div>
);

const features = [
  {
    number: 1,
    image: FEATURE_1_IMG,
    title: "Easy Management",
    description:
      "Automate repetitive business processes with AI-powered workflows that save time and improve productivity.",
  },
  {
    number: 2,
    image: FEATURE_2_IMG,
    title: "Fast Action",
    description:
      "Execute actions instantly with a fast, reliable, and scalable infrastructure.",
  },
  {
    number: 3,
    image: FEATURE_3_IMG,
    title: "High Security",
    description:
      "Protect your data with enterprise-grade security and encrypted communication.",
  },
  {
    number: 4,
    image: FEATURE_4_IMG,
    title: "Automation",
    description:
      "Reduce manual effort by automating repetitive tasks and business workflows.",
  },
];

export default function ServicePage() {
  return (
    <div className="bg-white text-[#1a1c4b] ">
      <div className="relative bg-[#030611] overflow-hidden min-h-screen">
        {/* Background */}
        <div className="absolute inset-0 bg-[#000205]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#4e54c8_0%,_transparent_60%)] opacity-60" />
        <div className="absolute top-0 left-0 w-1/2 h-[60%] bg-gradient-to-br from-[#3a2d8f]/40 to-transparent blur-3xl" />

        {/* Hero Content */}
        <div
          className="
relative
z-20
max-w-7xl
mx-auto
px-5
sm:px-8
lg:px-12

pt-24
sm:pt-28
md:pt-32
lg:pt-16

pb-20
lg:pb-0

min-h-[760px]


grid
grid-cols-1
lg:grid-cols-2
items-center
gap-12
"
        >
          {/* Left */}
          <motion.div
            initial="hidden"
            animate="visible"
            className=" "
          >
            <motion.h1
              custom={0}
              variants={fadeUp}
              className="
        text-white
        font-bold
        text-2xl
        sm:text-3xl
        lg:text-4xl
        leading-tight
        max-w-xl
        mx-auto
        lg:mx-0
        "
            >
              Better teamwork and more sales, start with a InfoDrift business
              card management system.
            </motion.h1>

            <motion.p
              custom={1}
              variants={fadeUp}
              className="
        mt-6
        text-md
        lg:text-lg
        text-white/70
        max-w-md
        mx-auto
        lg:mx-0
        "
            >
 InfoDrif helps affiliates discover high-converting offers, optimize campaigns, and maximize commissions through performance-first marketing.
            </motion.p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 flex justify-center lg:justify-start"
            >
              <button className="group relative px-6 py-4 rounded-full border border-white/20 text-white overflow-hidden cursor-pointer  text-bold">
                <span className="absolute inset-0 bg-blue-500/90 scale-x-0 group-hover:scale-x-100 transition origin-left duration-500 " />
                <span className="relative z-10 group-hover:text-white">
                  Try Our Services
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.img
              animate={floatAnim}
              src={HERO_IMG}
              alt="Hero"
              className="
        w-full
        max-w-[320px]
        sm:max-w-[420px]
        md:max-w-[520px]
        lg:max-w-[620px]
        xl:max-w-[680px]
        h-auto
        object-contain
        "
            />
          </motion.div>
        </div>

        {/* Bottom Shape */}
        <div className="absolute bottom-0 left-0 w-full h-[180px] sm:h-[220px] lg:h-[280px] z-10 pointer-events-none">
          <svg
            viewBox="0 0 1440 500"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0,150 C150,250 350,80 1440,0 L1440,500 L0,500 Z"
              fill="white"
            />
            <path
              d="M0,180 C60,220 80,140 0,120 Z"
              fill="#7C5CFF"
              opacity="0.9"
            />
          </svg>
        </div>
      </div>

      <section className="  mx-auto px-6   ">
        <ServiceFeature />
      </section>

      <section className="relative max-w-6xl mx-auto px-6 lg:px-12 pt-24 pb-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[35px] font-bold tracking-tight"
        >
          Main features
        </motion.h2>

        <div className="relative ">
          <svg
            className="hidden lg:block absolute left-1/2 top-0 w-[80%] h-[1200px] -translate-x-1/2 pointer-events-none"
            viewBox="0 0 800 1200"
            fill="none"
          >
            <path
              d="M400 0 C100 100, 700 300, 400 500 C100 700, 700 900, 400 1150"
              stroke="#E8E6FF"
              strokeWidth="1"
              strokeDasharray="6 10"
            />
          </svg>

          {features.map((feature, index) => (
            <FeatureRow
              key={feature.number}
              number={feature.number}
              image={feature.image}
              title={feature.title}
              description={feature.description}
              reverse={index % 2 === 1}
              index={index}
            />
          ))}
        </div>
      </section>

      <Pricing />
    </div>
  );
}
