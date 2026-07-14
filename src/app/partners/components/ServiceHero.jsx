


"use client";
import React from "react";
import { motion } from "framer-motion";


export default function ServiceHero(){

return(

    <div className="">
    <div className=" mt-12 max-w-7xl mx-auto px-8 pt-12 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
          Better teamwork and more sales,
          <br />
          start with a Nappli system
        </h1>
        <p className="text-white/60 text-sm mb-8">
          Business Card Management for your company
        </p>
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-white text-purple-700 font-semibold text-sm px-6 py-3 rounded-full shadow-lg"
          >
            Try for free
            <span className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xs">
              +
            </span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 border border-white/30 text-white text-sm px-6 py-3 rounded-full hover:bg-white/10 transition-all"
          >
            Watch video
            <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-2.5 h-2.5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </motion.button>
        </div>
        {/* Dots */}
        <div className="flex gap-2 mt-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`rounded-full transition-all ${
                i === 0
                  ? "w-6 h-2 bg-white"
                  : "w-2 h-2 bg-white/30"
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Right – isometric dashboard illustration */}
      <motion.div
        initial={{ opacity: 0, x: 40, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="relative flex justify-center items-center"
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          {/* Main dashboard card */}
          <div className="w-80 h-52 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-4 shadow-2xl transform rotate-3 skew-x-1">
            <div className="flex gap-2 mb-3">
              {["bg-red-400", "bg-yellow-400", "bg-green-400"].map((c, i) => (
                <div key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
              ))}
            </div>
            <div className="space-y-2">
              {[80, 60, 90, 50, 70].map((w, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex-shrink-0" />
                  <div
                    className="h-2 bg-white/25 rounded-full"
                    style={{ width: `${w}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Floating mini cards */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            className="absolute -bottom-8 -left-10 w-36 h-20 bg-white/15 backdrop-blur border border-white/20 rounded-xl p-3 shadow-xl"
          >
            <div className="w-full h-2 bg-white/30 rounded mb-2" />
            <div className="w-3/4 h-2 bg-white/20 rounded mb-2" />
            <div className="w-1/2 h-2 bg-blue-300/50 rounded" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
            className="absolute -top-8 -right-6 w-32 h-16 bg-white/15 backdrop-blur border border-white/20 rounded-xl p-3 shadow-xl"
          >
            <div className="w-full h-2 bg-cyan-300/50 rounded mb-2" />
            <div className="w-2/3 h-2 bg-white/20 rounded" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </div>
)




}