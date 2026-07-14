
"use client";

import {useState} from "react";
import {motion} from "framer-motion";



export default function Pricing(){

 const [active, setActive] = useState("Premium");




    return(
         <section className="relative overflow-hidden">
      {/* Wave top */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 80 C360 20 1080 20 1440 80 L1440 0 L0 0 Z"
            fill="url(#waveGrad)"
          />
          <defs>
            <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
              <stop stopColor="#4f46e5" />
              <stop offset="1" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[320px]">
        {/* Left – Premium card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white flex items-center justify-center px-12 py-16"
        >
          <div className="max-w-xs w-full bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-1">Premium</h3>
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 mb-6">
              $49.99
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Lorem ipsum dolor sit amet",
                "Et leo duis ut diam quam nulla porttitor",
                "Quisque lorem tortor fringilla sed",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="w-5 h-5 rounded-full border-2 border-indigo-200 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-indigo-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right – Pricing info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-indigo-600 via-blue-600 to-blue-500 flex flex-col items-center justify-center px-12 py-16 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Pricing list</h2>
          <p className="text-white/70 text-sm max-w-xs mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <div className="flex gap-3">
            {["Premium", "Starter"].map((plan) => (
              <motion.button
                key={plan}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(plan)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  active === plan
                    ? "bg-white text-blue-600 shadow-lg"
                    : "border border-white/40 text-white hover:bg-white/10"
                }`}
              >
                {plan}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    )
}