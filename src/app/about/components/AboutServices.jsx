

"use client"



import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Settings, 
  Cpu, 
  Network, 
  Shield, 
  BarChart3 
} from 'lucide-react';

export const AboutServices = () => {
  const services = [
    {
      title: "AI-Consulting offerings",
      description: "Credibly innovate granular internal or organic sources",
      icon: <MessageSquare size={32} />,
      featured: true, // The orange/blue highlighted card
      span: "col-span-1 md:col-span-2 lg:col-span-1"
    },
    {
      title: "Business Process Automation",
      description: "Credibly innovate granular internal or organic sources",
      icon: <Settings size={28} />,
      featured: false,
      span: "col-span-1"
    },
    {
      title: "Secure AI implementation strategies",
      description: "Credibly innovate granular internal or organic sources",
      icon: <Shield size={28} />,
      featured: false,
      span: "col-span-1"
    },
    {
      title: "AI Implementation",
      description: "Full-scale deployment of AI solutions tailored to your infrastructure",
      icon: <Cpu size={28} />,
      featured: false,
      span: "col-span-1"
    },
    {
      title: "Neural Network Architecture",
      description: "Custom deep learning models for complex business logic",
      icon: <Network size={28} />,
      featured: false,
      span: "col-span-1 md:col-span-2 lg:col-span-1"
    },
    {
      title: "Data Analytics & Insights",
      description: "Transform raw data into actionable business intelligence",
      icon: <BarChart3 size={28} />,
      featured: false,
      span: "col-span-1"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
            <span className="text-blue-400 font-semibold uppercase tracking-wider text-sm">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            We Provide Best <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              AI Consulting
            </span>
          </h2>
          <button className="mt-4 text-sm font-semibold text-slate-300 border border-white/20 hover:border-blue-500 hover:text-blue-400 px-6 py-2 rounded-full transition-all">
            View All Services
          </button>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`
                ${service.span} 
                ${service.featured 
                  ? 'bg-gradient-to-br from-blue-600 to-blue-800 text-white border-blue-500/50' 
                  : 'bg-[#0a1428]/50 border-white/10 hover:border-blue-500/30'
                } 
                relative group p-8 rounded-3xl border backdrop-blur-sm transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/20
              `}
            >
              {/* Icon */}
              <div className={`
                w-14 h-14 rounded-2xl flex items-center justify-center mb-6
                ${service.featured 
                  ? 'bg-white/20 text-white' 
                  : 'bg-blue-600/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white'
                }
                transition-all duration-300
              `}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className={`text-xl font-bold mb-3 ${service.featured ? 'text-white' : 'text-slate-200'}`}>
                {service.title}
              </h3>
              <p className={`text-sm leading-relaxed ${service.featured ? 'text-blue-100' : 'text-slate-400'}`}>
                {service.description}
              </p>

              {/* Decorative Corner */}
              {service.featured && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -mr-8 -mt-8 pointer-events-none"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};