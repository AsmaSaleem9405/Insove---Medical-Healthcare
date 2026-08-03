'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSplash({ appName, imageSrc, onEnter }) {
  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Container holding both the image and text */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, y: -80, scale: 0.95 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex flex-col items-center justify-center max-w-4xl w-full mx-auto py-12"
      >
        
        {/* Large Image (Responsive sizing & mobile scaling) */}
        <div className="relative w-full flex justify-center opacity-85 sm:opacity-100">
          <img 
            src={imageSrc} 
            alt="Insove Medical Professionals" 
            className="w-full max-w-xs sm:max-w-2xl lg:max-w-6xl h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)] filter brightness-95"
          />
        </div>

        {/* Text Written Directly on Top of the Image (Adaptive for Mobile & Desktop) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-4xl sm:text-7xl lg:text-9xl mt-12 sm:mt-20 font-extrabold tracking-tighter text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]"
          >
            {appName}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-sm sm:text-lg lg:text-2xl font-medium text-slate-100 tracking-wide mt-1 sm:mt-2 drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]"
          >
            Medical Healthcare
          </motion.p>

          {/* Clickable button with pointer-events-auto enabled */}
   <motion.button 
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
  whileHover={{ scale: 1.02, y: -2 }}
  whileTap={{ scale: 0.98 }}
  onClick={onEnter}
  className="pointer-events-auto mt-6 inline-flex items-center justify-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-[0_10px_25px_-5px_rgba(20,184,166,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(20,184,166,0.6)] border border-white/20 transition-all duration-300 cursor-pointer group"
>
  <span>Explore Website</span>
  <span className="transition-transform duration-300 group-hover:translate-x-1.5">&rarr;</span>
</motion.button>
        </div>

      </motion.div>
    </div>
  );
}