'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section 
className="relative flex items-center overflow-hidden bg-[#E8F0F1]"
      style={{ width: '100%', maxWidth: '1920px', height: '510px', margin: '0 auto' }}
    >
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-6 right-10 w-64 h-64 bg-cyan-200/25 rounded-full blur-2xl pointer-events-none"></div>
      
      {/* Container */}
      <div className="max-w-[1300px] mx-auto ml-26 px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Left Side: Staggered Content Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col items-start space-y-3 text-left z-10"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="inline-flex items-center mt-25  space-x-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-500 text-[11px] font-bold shadow-sm"
          >
            <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
            <span className="tracking-wider uppercase">LIVE YOUR LIFE</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-3xl xl:text-4xl  font-extrabold tracking-tight text-slate-800 leading-[1.15]"
          >
            We Care About <br />
            <span className="text-slate-800">Your Health</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-slate-500 text-sm sm:text-base max-w-md leading-relaxed font-normal"
          >
            Vitae aliquam vestibulum elit adipiscing massa diam in dignissim. Risus tellus libero elementum aliquam etiam. Lectus adipiscing est auctor mi quisque nunc non viverra est.
          </motion.p>

          {/* Contact Us Button */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="pt-1"
          >
            <button className="group flex items-center space-x-2 px-6 py-3 rounded-full bg-cyan-400 text-white font-semibold text-xs sm:text-sm shadow-md shadow-cyan-400/25 hover:shadow-lg hover:shadow-cyan-400/35 hover:-translate-y-0.5 transition-all duration-200">
              <span>CONTACT US</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: Circular Background Shape & Doctor Image with Entrance Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 15 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="lg:col-span-6 relative flex items-center justify-center lg:justify-end h-[620px]"
        >
          {/* Circular Backdrop fully contained and aligned inside the section bounds */}
<div className="absolute w-[550px] h-[550px] mr-18 mt-40 top-1/2 -translate-y-1/2 right-4 rounded-full bg-[#F1F5F9] border border-cyan-200/20 -z-0 pointer-events-none"></div>
          {/* Doctor Image with Hover Effect & Next.js Image Component */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative z-10 w-full max-w-xs mr-44 mt-6  sm:max-w-sm h-[520px] flex justify-center items-end"
          >
            <Image
              src="/images/dr-1.png"
              alt="Insove Medical Professional"
              fill
              className="object-contain object-bottom   drop-shadow-xl"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}