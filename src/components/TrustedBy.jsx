"use client"

import { motion } from "framer-motion";

import { 
  
  Compass,
  Layers,
  Activity,
  Award,
  Globe
} from 'lucide-react';




export default function TrustedBy() {
  return (


        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="z-20 relative"
        >
          <div className="bg-[#090e1a]/50 backdrop-blur-md rounded-2xl p-8 border border-white/5 shadow-2xl">
       
            <p className="text-slate-400 font-semibold text-sm text-center mb-6">
              Trusted by more than <span className="text-blue-400 font-bold">100+</span> companies
            </p>
            
            {/* Horizontal Brand Flex grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-65">
              
              {/* Brand Item 1 */}
              <div className="flex items-center gap-2 group cursor-pointer hover:opacity-100 transition-opacity duration-300">
                <Compass className="w-5.5 h-5.5 text-slate-300" />
                <span className="font-extrabold text-slate-300 text-xs tracking-widest uppercase">logipsum</span>
              </div>
              
              {/* Brand Item 2 */}
              <div className="flex items-center gap-2 group cursor-pointer hover:opacity-100 transition-opacity duration-300">
                <Layers className="w-5.5 h-5.5 text-slate-300" />
                <span className="font-extrabold text-slate-300 text-xs tracking-widest uppercase">logipsum</span>
              </div>
              
              {/* Brand Item 3 */}
              <div className="flex items-center gap-2 group cursor-pointer hover:opacity-100 transition-opacity duration-300">
                <Activity className="w-5.5 h-5.5 text-slate-300" />
                <span className="font-extrabold text-slate-300 text-xs tracking-widest uppercase">logipsum</span>
              </div>
              
              {/* Brand Item 4 */}
              <div className="flex items-center gap-2 group cursor-pointer hover:opacity-100 transition-opacity duration-300">
                <Award className="w-5.5 h-5.5 text-slate-300" />
                <span className="font-extrabold text-slate-300 text-xs tracking-widest uppercase">logipsum</span>
              </div>
              
              {/* Brand Item 5 */}
              <div className="flex items-center gap-2 group cursor-pointer hover:opacity-100 transition-opacity duration-300 col-span-2 md:col-span-1">
                <Globe className="w-5.5 h-5.5 text-slate-300" />
                <span className="font-extrabold text-slate-300 text-xs tracking-widest uppercase">logipsum</span>
              </div>

            </div>
          </div>
        </motion.div>
  )

}