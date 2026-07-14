
"use client";



import React, { useState } from "react";
import { motion } from "framer-motion";
import ServiceHero from "./components/ServiceHero";
import ServiceFeature from "./components/ServiceFeature"
import MainFeature from "./components/MainFeature";
import Pricing from "./components/Pricing";







export default function ServicePage() {
  return (
    <div className="font-sans overflow-x-hidden">
      {/* Header with purple gradient bg */}
      <div className="relative bg-blue-700/10 pb-40">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/20 rounded-full blur-3xl" />
        </div>
       
        <ServiceHero />
      </div>

      {/* Feature summary cards overlap */}
      <div className="bg-gray-50 pt-0 pb-8">
        <ServiceFeature />
      </div>

      {/* Main features */}
      <MainFeature />

      {/* Pricing */}
      <Pricing />

    
    </div>
  );
}