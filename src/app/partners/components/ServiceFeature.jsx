"use client";

import { motion } from "framer-motion";

const featureCards = [
  {
    label: "Easy management",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="22" fill="url(#fc1)" opacity="0.15" />
        <path
          d="M16 30 C16 24 20 18 24 16 C28 18 32 24 32 30"
          stroke="url(#fc1)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="24" cy="32" r="3" fill="url(#fc1)" />
        <defs>
          <linearGradient id="fc1" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#818cf8" />
            <stop offset="1" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    label: "Fast action",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="22" fill="url(#fc2)" opacity="0.15" />
        <rect
          x="14"
          y="14"
          width="20"
          height="14"
          rx="3"
          stroke="url(#fc2)"
          strokeWidth="2.5"
        />
        <path
          d="M19 32 L29 32 M24 28 L24 32"
          stroke="url(#fc2)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="fc2" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#818cf8" />
            <stop offset="1" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    label: "High security",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="22" fill="url(#fc3)" opacity="0.15" />
        <path
          d="M24 10 L34 15 L34 25 C34 31 29 36 24 38 C19 36 14 31 14 25 L14 15 Z"
          stroke="url(#fc3)"
          strokeWidth="2.5"
          fill="none"
        />
        <path
          d="M19 24 L22 27 L29 21"
          stroke="url(#fc3)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="fc3" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#818cf8" />
            <stop offset="1" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    label: "Automation",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="22" fill="url(#fc4)" opacity="0.15" />
        <circle cx="24" cy="24" r="8" stroke="url(#fc4)" strokeWidth="2.5" />
        <path
          d="M24 10 L24 14 M24 34 L24 38 M10 24 L14 24 M34 24 L38 24"
          stroke="url(#fc4)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="fc4" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#818cf8" />
            <stop offset="1" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

export default function ServiceFeature() {
  return (
    <div className="max-w-7xl mx-auto px-8 -mt-16 relative z-10"> 
   
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {featureCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{
              y: -4,
              boxShadow: "0 20px 40px rgba(99,102,241,0.15)",
            }}
            className="bg-white rounded-2xl p-6 text-center shadow-xl border border-gray-100 cursor-pointer group transition-all duration-300"
          >
            <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300 text-xl">
              {card.icon}
            </div>
            <h4 className="font-bold text-gray-800 text-sm mb-2 text-xl">
              {card.label}
            </h4>
            <p className="text-gray-400  leading-relaxed text-lg">
              Pelentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum
              dapibus, mauris nec malesuada.
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
