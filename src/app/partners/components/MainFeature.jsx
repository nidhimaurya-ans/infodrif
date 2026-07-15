
// export default function FeatureRow({ number, image, title, reverse }) {
//   const floatAnim = {
//     y: [0, -12, 0],
//     transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
//   };

//   return (
//     <div
//       className={`relative flex  ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8 lg:gap-16 mb-28`}
//     >
//       {/* Number Badge */}
//       <motion.div
//         initial={{ scale: 0 }}
//         whileInView={{ scale: 1 }}
//         viewport={{ once: true }}
//         transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
//         className={`absolute ${reverse ? "lg:left-[48%]" : "lg:left-[52%]"} top-0 lg:top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-gradient-to-br from-[#b9a9ff] to-[#6d5cc4] flex items-center justify-center text-white text-[10px] font-bold shadow-[0_0_0_6px_#f6f4ff] hidden lg:flex`}
//       >
//         {number}
//         <span className="absolute w-10 h-10 rounded-full bg-[#6d5cc4]/20 animate-ping"></span>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, x: reverse ? 60 : -60 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//         className="flex-1 flex justify-center"
//       >
//         <motion.img
//           animate={floatAnim}
//           src={image}
//           alt={title}
//           className="w-[300px] lg:w-[380px] object-contain drop-shadow-[0_20px_40px_rgba(108,92,231,0.15)]"
//         />
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, x: reverse ? -60 : 60 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         className={`flex-1 ${reverse ? "lg:text-right" : "lg:text-left"} text-center`}
//       >
//         <h3 className="text-[16px] font-bold text-[#1a1c2e]">{title}</h3>
//         <p className="mt-3 text-[11px] leading-[1.7] text-[#9aa0b6] max-w-[420px] mx-auto lg:mx-0">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Et leo
//           duis ut diam quam nulla porttitor. Quisque tortor mauris, vestibulum
//           id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci
//           luctus non, consectetuer lobortis quis, varius in, purus.
//         </p>
//         {/* <button
//           className="mt-6 px-5 py-2 rounded-full bg-[#f6f5ff] text-[#8a85b8] text-[10px] font-medium flex items-center gap-2 mx-auto lg:mx-0 hover:bg-[#ece8ff] transition lg:ml-0"
//           style={{ marginLeft: reverse ? "auto" : "0" }}
//         >
//           Learn more{" "}
//           <span className="w-4 h-4 rounded-full bg-[#e6e2ff] flex items-center justify-center text-[8px]">
//             →
//           </span>
//         </button> */}

// {/* <motion.div
//             className="inline-block"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <button className="group relative px-10 py-4 border border-white/20 cursor-pointer rounded-full text-white text-sm tracking-widest uppercase overflow-hidden transition-colors duration-500 hover:border-white/50">
//               <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
//               <span className="relative z-10 group-hover:text-black transition-colors duration-500">
//                Contact us 
//               </span>
//             </button>
//           </motion.div> */}





//       </motion.div>
//     </div>
//   );
// }






import { motion } from "framer-motion";

export default function FeatureRow({
  number,
  image,
  title,
  reverse,
  description,
   index,
}) {
  const floatAnim = {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    // <div
    //   className={`relative flex flex-col ${
    //     reverse ? "lg:flex-row-reverse" : "lg:flex-row"
    //   } items-center gap-8 lg:gap-16 mb-20`}
    // >


<motion.div
  initial={
    index % 2 === 1
      ? { opacity: 0, y: 80 }
      : { opacity: 1, y: 0 }
  }
  whileInView={
    index % 2 === 1
      ? { opacity: 1, y: 0 }
      : {}
  }
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7 }}
  className={`relative flex flex-col ${
    reverse ? "lg:flex-row-reverse" : "lg:flex-row"
  } items-center gap-8 lg:gap-16 mb-20`}
>




      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center"
      >
        <motion.img
          animate={floatAnim}
          src={image}
          alt={title}
          className="w-[300px] lg:w-[380px] object-contain drop-shadow-[0_20px_40px_rgba(108,92,231,0.15)]"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -60 : 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 text-center lg:text-left"
      >
       
        <div
          className={`flex items-center gap-4 mb-4 ${
            reverse
              ? "justify-center lg:justify-start"
              : "justify-center lg:justify-start"
          }`}
        >
          {/* <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 200,
              delay: 0.3,
            }}
            className="relative w-8 h-8 rounded-full bg-blue-600/30 blur-[130px] flex items-center justify-center text-white text-xs font-bold shadow-[0_0_0_6px_#f6f4ff] shrink-0"
          >
            {number}
            <span className="absolute w-10 h-10 rounded-full bg-[#6d5cc4]/20 animate-ping"></span>
          </motion.div> */}

          <h3 className="text-[22px] font-bold text-[#1a1c2e]">
            {title}
          </h3>
        </div>

       
        
<p
  className={`text-[16px] leading-[1.5] text-gray-500 max-w-[420px] ${
    reverse ? "mx-auto lg:mx-0" : "mx-auto lg:mx-0"
  }`}
>
  {description}
</p>
        {/*
        <motion.div
          className="inline-block mt-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="group relative px-10 py-4 border border-white/20 cursor-pointer rounded-full text-white text-sm tracking-widest uppercase overflow-hidden transition-colors duration-500 hover:border-white/50">
            <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">
              Contact us
            </span>
          </button>
        </motion.div>
        */}
      </motion.div>
  </motion.div>
  );
}