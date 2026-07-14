
"use client";


import {motion} from "framer-motion";





// ─── ISOMETRIC ILLUSTRATIONS ─────────────────────────────────────────────────
const EasyManagementIllustration = () => (
  <svg viewBox="0 0 360 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="cardGrad1" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#e0e7ff" /><stop offset="1" stopColor="#f0f4ff" />
      </linearGradient>
      <linearGradient id="blueGrad" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#3b82f6" /><stop offset="1" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    {/* Back card */}
    <rect x="60" y="60" width="200" height="130" rx="14" fill="#dde4f7" transform="rotate(-6 160 120)" />
    {/* Mid card */}
    <rect x="50" y="80" width="210" height="135" rx="14" fill="#e8edfc" transform="rotate(-2 155 148)" />
    {/* Front card */}
    <rect x="40" y="95" width="220" height="140" rx="16" fill="url(#cardGrad1)" />
    {/* Avatar rows */}
    {[0,1,2,3].map((i) => (
      <g key={i} transform={`translate(0, ${i * 26})`}>
        <circle cx="80" cy="120" r="12" fill={i === 0 ? "url(#blueGrad)" : "#c7d2fe"} />
        <rect x="102" y="114" width={120 - i * 15} height="6" rx="3" fill="#c7d2fe" />
        <rect x="102" y="124" width={80 - i * 10} height="4" rx="2" fill="#e0e7ff" />
      </g>
    ))}
    {/* Phone icon floating */}
    <motion.g>
      <circle cx="270" cy="195" r="28" fill="url(#blueGrad)" />
      <path d="M262 188 C261 192 263 200 270 204 C277 208 284 207 285 203 L283 199 L279 200 C278 200 277 199 276 197 L274 193 C273 191 273 190 274 190 L270 188 Z" fill="white" />
    </motion.g>
    {/* Chat bubble */}
    <rect x="195" y="88" width="80" height="45" rx="10" fill="white" opacity="0.9" />
    <path d="M220 133 L215 143 L230 133" fill="white" opacity="0.9" />
    <rect x="205" y="98" width="60" height="4" rx="2" fill="#c7d2fe" />
    <rect x="205" y="108" width="45" height="4" rx="2" fill="#e0e7ff" />
    <rect x="205" y="118" width="52" height="4" rx="2" fill="#e0e7ff" />
  </svg>
);

const FastActionIllustration = () => (
  <svg viewBox="0 0 360 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="fa1" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#e0e7ff" /><stop offset="1" stopColor="#f0f4ff" />
      </linearGradient>
      <linearGradient id="fa2" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#3b82f6" /><stop offset="1" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    {/* Background cards */}
    <rect x="30" y="80" width="230" height="150" rx="16" fill="#dde4f7" transform="rotate(-4 145 155)" />
    <rect x="20" y="90" width="235" height="148" rx="16" fill="url(#fa1)" />
    {/* Lines */}
    {[0,1,2,3,4].map((i) => (
      <g key={i}>
        <circle cx="50" cy={120 + i * 22} r="8" fill={i % 2 === 0 ? "url(#fa2)" : "#c7d2fe"} />
        <rect x="68" y={116 + i * 22} width={160 - i * 15} height="5" rx="2.5" fill="#c7d2fe" />
        <rect x="68" y={124 + i * 22} width={100 - i * 10} height="3" rx="1.5" fill="#e0e7ff" />
      </g>
    ))}
    {/* Magnifier */}
    <circle cx="270" cy="150" r="45" fill="url(#fa2)" opacity="0.15" />
    <circle cx="265" cy="145" r="32" stroke="url(#fa2)" strokeWidth="8" fill="none" />
    <line x1="288" y1="168" x2="308" y2="195" stroke="url(#fa2)" strokeWidth="9" strokeLinecap="round" />
    <circle cx="255" cy="135" r="12" fill="url(#fa2)" opacity="0.3" />
  </svg>
);

const HighSecurityIllustration = () => (
  <svg viewBox="0 0 360 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="hs1" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#e0e7ff" /><stop offset="1" stopColor="#f0f4ff" />
      </linearGradient>
      <linearGradient id="hs2" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#3b82f6" /><stop offset="1" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    {/* Cards stack */}
    <rect x="50" y="100" width="200" height="130" rx="16" fill="#dde4f7" transform="rotate(-5 150 165)" />
    <rect x="40" y="110" width="210" height="130" rx="16" fill="url(#hs1)" />
    {[0,1,2,3].map((i) => (
      <g key={i}>
        <rect x="60" y={128 + i * 24} width={170 - i*20} height="6" rx="3" fill="#c7d2fe" />
        <rect x="60" y={138 + i * 24} width={110 - i*15} height="4" rx="2" fill="#e0e7ff" />
      </g>
    ))}
    {/* Lock icon */}
    <rect x="230" y="120" width="90" height="110" rx="18" fill="url(#hs2)" />
    <rect x="248" y="138" width="54" height="60" rx="10" fill="white" opacity="0.9" />
    <path d="M265 138 C265 128 285 128 285 138" stroke="white" strokeWidth="7" fill="none" strokeLinecap="round" />
    <circle cx="275" cy="165" r="8" fill="url(#hs2)" />
    <rect x="272" y="165" width="6" height="12" rx="3" fill="url(#hs2)" />
  </svg>
);

const AutomationIllustration = () => (
  <svg viewBox="0 0 360 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="au1" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#e0e7ff" /><stop offset="1" stopColor="#f0f4ff" />
      </linearGradient>
      <linearGradient id="au2" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#3b82f6" /><stop offset="1" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    {/* Cards */}
    <rect x="30" y="90" width="230" height="140" rx="16" fill="#dde4f7" transform="rotate(-3 145 160)" />
    <rect x="20" y="100" width="240" height="140" rx="16" fill="url(#au1)" />
    {[0,1,2,3].map((i) => (
      <g key={i}>
        <circle cx="55" cy={128 + i*26} r="9" fill={i < 2 ? "url(#au2)" : "#c7d2fe"} />
        <rect x="74" y={123 + i*26} width={150 - i*18} height="6" rx="3" fill="#c7d2fe" />
        <rect x="74" y={133 + i*26} width={100 - i*12} height="4" rx="2" fill="#e0e7ff" />
      </g>
    ))}
    {/* Refresh/Automation circle icon */}
    <circle cx="275" cy="155" r="48" fill="url(#au2)" opacity="0.12" />
    <circle cx="275" cy="155" r="34" stroke="url(#au2)" strokeWidth="8" fill="none" strokeDasharray="160 40" strokeLinecap="round" />
    {/* Arrow heads */}
    <polygon points="298,125 310,118 310,134" fill="url(#au2)" />
    <polygon points="252,185 240,192 240,176" fill="url(#au2)" />
    <circle cx="275" cy="155" r="12" fill="url(#au2)" opacity="0.3" />
  </svg>
);















const mainFeatures = [
  {
    number: "1",
    title: "Easy managment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et leo duis ut diam quam nulla porttitor. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus.",
    imageLeft: true,
    illustration: <EasyManagementIllustration />,
  },
  {
    number: "2",
    title: "Fast action",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et leo duis ut diam quam nulla porttitor. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus.",
    imageLeft: false,
    illustration: <FastActionIllustration />,
  },
  {
    number: "3",
    title: "High security",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et leo duis ut diam quam nulla porttitor. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus.",
    imageLeft: true,
    illustration: <HighSecurityIllustration />,
  },
  {
    number: "4",
    title: "Automation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et leo duis ut diam quam nulla porttitor. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus.",
    imageLeft: false,
    illustration: <AutomationIllustration />,
  },
];










export default function MainFeature(){
    return(
        <section className="bg-white py-24">
    <div className="max-w-6xl mx-auto px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-gray-800 text-center mb-20"
      >
        Main features
      </motion.h2>

      <div className="flex flex-col gap-24">
        {mainFeatures.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className={`flex flex-col ${
              feature.imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-12`}
          >
            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, x: feature.imageLeft ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-full lg:w-1/2 h-64"
              whileHover={{ scale: 1.02 }}
            >
              {feature.illustration}
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: feature.imageLeft ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              {/* Number badge */}
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 flex items-center justify-center text-white font-bold text-sm mb-5">
                {feature.number}
              </div>
              <h3
                className={`text-2xl font-bold text-gray-800 mb-4 ${
                  !feature.imageLeft ? "text-right lg:text-right" : ""
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-gray-500 text-sm leading-relaxed mb-6 ${
                  !feature.imageLeft ? "text-right" : ""
                }`}
              >
                {feature.description}
              </p>
              <div
                className={`flex ${
                  !feature.imageLeft ? "justify-end" : "justify-start"
                }`}
              >
                <motion.button
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 text-gray-600 text-sm font-medium hover:text-indigo-600 transition-colors"
                >
                  Learn more
                  <span className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:border-indigo-400 transition-colors">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
    )
}