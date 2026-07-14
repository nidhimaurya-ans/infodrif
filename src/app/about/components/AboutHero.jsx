
"use client";



import React from 'react';
import { motion } from 'framer-motion';
import { Users, ThumbsUp, Briefcase, ArrowRight } from 'lucide-react';

export const AboutHero = () => {
  const stats = [
    { icon: <Users size={28} />, value: "200+", label: "Specialized Consultants" },
    { icon: <ThumbsUp size={28} />, value: "100%", label: "Client Satisfaction" },
    { icon: <Briefcase size={28} />, value: "1K+", label: "Completed Cases" },
  ];

  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              AI Consulting <br />
              <span className="relative inline-block">
                Services
                <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-600/30 -z-10 rounded-sm"></span>
              </span>
            </h1>
            
            <p className="text-slate-400 text-lg max-w-md leading-relaxed">
              Our expert AI consultants work closely with you to understand your unique challenges and objectives, delivering tailored solutions that drive growth.
            </p>
            
            <button className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]">
              Get A Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Right Visual - Abstract AI Interface */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 shadow-2xl"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80')] bg-cover bg-center opacity-60 mix-blend-luminosity"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-transparent"></div>
            
            {/* Floating UI Elements */}
            <div className="absolute top-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
              <div className="text-xs text-blue-400 font-bold mb-1">AI Status</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">Operational</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-[#0a1428]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-4 px-4 py-2 group cursor-default">
                <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};