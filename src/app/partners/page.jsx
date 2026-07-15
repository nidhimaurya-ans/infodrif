"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Pricing from "./components/Pricing";
import FeatureRow from "./components/MainFeature";
import ServiceFeature from "./components/ServiceFeature";

const HERO_IMG =
  "https://png.pngtree.com/png-clipart/20250222/original/pngtree-deal-with-business-picture-image_3075078.png";
const FEATURE_1_IMG =
  "https://static.vecteezy.com/system/resources/thumbnails/034/119/337/small/email-marketing-3d-illustration-email-marketing-campaign-newsletter-marketing-and-email-service-png.png";
const FEATURE_2_IMG =
  "https://www.nextrow.com/wp-content/uploads/2024/12/Cloud_02.png";
const FEATURE_3_IMG =
  "https://png.pngtree.com/png-clipart/20250814/original/pngtree-d-illustration-of-marketing-and-business-growth-elements-including-charts-gears-png-image_21441659.png";
const FEATURE_4_IMG =
  "https://png.pngtree.com/png-clipart/20241129/original/pngtree-email-marketing-services-clip-art-png-image_17414295.png"
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
    <div className=" bg-white text-[#1a1c4b] min-h-screen ">
      <div className=" bg-[#030611]">
        <div className="absolute inset-0  bg-[#000205]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#4e54c8_0%,_transparent_60%)] opacity-60"></div>
        <div className="absolute top-0 left-0 w-[50%] h-[60%] bg-gradient-to-br from-[#3a2d8f]/40 to-transparent blur-3xl"></div>

        <div className="  max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-[180px] lg:pb-[220px] grid lg:grid-cols-2 items-center">
          <motion.div initial="hidden" animate="visible" className="relative">
            <motion.h1
              custom={0}
              variants={fadeUp}
              className="mt-24 text-white text-[28px] lg:text-[32px] font-bold leading-[1.5] "
            >
              Better teamwork and more sales, start with a InfoDrift business
              card management system.
            </motion.h1>
            <motion.p
              custom={1}
              variants={fadeUp}
              className="mt-3 text-white/60 text-[20px] max-w-[360px]"
            >
              Business Card Management for your company
            </motion.p>

            <motion.div
              className="inline-block mt-7 flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="group relative px-10 py-4 border border-white/20 cursor-pointer rounded-full text-white text-sm tracking-widest uppercase overflow-hidden transition-colors duration-500 hover:border-white/50">
                <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                  Try Our Services
                </span>
              </button>
            </motion.div>

            {/* <motion.div
              custom={3}
              variants={fadeUp}
              className="mt-14 flex gap-2"
            >
              <span className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-[#3ad6ff] rounded-full"></span>
              </span>
              <span className="w-1.5 h-1.5 mt-1.5 bg-white/20 rounded-full"></span>
              <span className="w-1.5 h-1.5 mt-1.5 bg-white/20 rounded-full"></span>
            </motion.div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative lg:h-[380px] flex justify-center lg:justify-end mt-12 lg:mt-36"
          >
            <motion.img
              animate={floatAnim}
              src={HERO_IMG}
              alt="Hero illustration"
              className="w-[420px] lg:w-[520px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
            />
          </motion.div>
        </div>

        {/* White Slant Divider */}
        <div className="absolute bottom-0 left-0 w-full h-[55%] z-10">
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

      <section className="relative  mx-auto px-6   ">
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
