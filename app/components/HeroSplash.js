'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSplash({ appName, tagline, imageSrc }) {
  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      
      {/* Container holding both the large image and text layered on top */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex flex-col items-center justify-center max-w-4xl w-full mx-auto"
      >
        
        {/* Large Image (Centered) */}
        <div className="relative w-full flex justify-center">
          <img 
            src={imageSrc} 
            alt="Insove Medical Professionals" 
            className="w-full max-w-2xl -mb-9 sm:max-w-3xl h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)] filter brightness-95"
          />
        </div>

        {/* Text Written Directly on Top of / Over the Center of the Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-7xl sm:text-9xl mt-20 font-extrabold tracking-tighter text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
          >
            {appName}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg sm:text-2xl font-medium text-slate-100 tracking-wide mt-2 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
          >
           Medical Healthcare
          </motion.p>
        </div>

      </motion.div>
    </div>
  );
}