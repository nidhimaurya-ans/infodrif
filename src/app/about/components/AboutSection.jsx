

"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
       
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                alt="Team collaboration" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent mix-blend-multiply"></div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl -z-10"></div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
                <span className="text-blue-400 font-semibold uppercase tracking-wider text-sm">Who We Are</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                About Us
              </h2>
            </div>
            
            <p className="text-slate-400 text-lg leading-relaxed">
              Credibly innovate granular internal or organic sources whereas high standards in web-readiness. Energetically scale future-proof core competencies vis-a-vis impactful experiences.
            </p>
            
            <p className="text-slate-400 leading-relaxed">
              We leverage cutting-edge artificial intelligence to transform how businesses operate, making them more efficient, agile, and prepared for the future of digital commerce.
            </p>
            
            <button className="mt-4 bg-transparent border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 group">
              Get A Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};