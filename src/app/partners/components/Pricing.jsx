
"use client";

import {useState} from "react";
import {motion} from "framer-motion";



export default function Pricing(){

 const [activePlan, setActivePlan] = useState("Premium");




    return(
      
    

   
    


  <>
      <div className="relative ">
        <div className="absolute top-0 left-0 w-full h-[320px] sm:h-[380px] lg:h-[420px] overflow-hidden">
          <div className="w-full h-full bg-[#071b33]/90 [clip-path:polygon(0_25%,100%_0,100%_100%,0_100%)]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pt-20 sm:pt-28 lg:pt-32 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-end">
          
          {/* Premium Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full bg-white rounded-[12px] shadow-[0_20px_60px_rgba(0,0,0,0.2)] p-6 sm:p-8 text-center max-w-[380px] mx-auto lg:mx-0"
          >
            <h3 className="font-bold text-[16px] sm:text-[18px]">Premium</h3>
            <div className="mt-2 inline-block px-4 py-1 rounded-full bg-[#f3f6ff] text-[#5b8def] text-[15px] sm:text-[17px] font-bold">$49.99</div>
            <ul className="mt-6 space-y-2 text-left">
              {["Lorem ipsum dolor sit amet", "Et leo duis ut diam quam nulla porttitor", "Quisque lorem tortor fringilla sed"].map((t,i)=>(
                <li key={i} className="flex gap-2 text-[14px] sm:text-[16px] text-[#8a90a8]"><span className="w-3.5 h-3.5 rounded-full bg-[#e9edff] flex items-center justify-center text-[8px] shrink-0 mt-0.5">✓</span>{t}</li>
              ))}
            </ul>
          </motion.div>

          {/* Right content */}
          <div className="text-center lg:text-left pb-4 sm:pb-10">
            <h2 className="text-white text-[19px] sm:text-[22px] font-bold">Pricing list</h2>
            <p className="mt-2 text-white/60 text-[14px] sm:text-[17px] max-w-[300px] mx-auto lg:mx-0 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            
            <div className="mt-6 inline-flex flex-wrap justify-center p-1 rounded-full bg-white/[0.08] border border-white/10 backdrop-blur">
              <button onClick={()=>setActivePlan("Premium")} className={`px-4 sm:px-5 py-1.5 rounded-full text-[14px] sm:text-[16px] font-medium transition cursor-pointer ${activePlan==="Premium" ? "bg-[#6d5cc4] text-white" : "text-white/60"}`}>Premium</button>
              <button onClick={()=>setActivePlan("Starter")} className={`px-4 sm:px-5 py-1.5 rounded-full text-[14px] sm:text-[16px] font-medium transition cursor-pointer ${activePlan==="Starter" ? "bg-white/15 text-white" : "text-white/60"}`}>Starter</button>
            </div>
          </div>
        </div>

      
      </div>




</>



    )
}