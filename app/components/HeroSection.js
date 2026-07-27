'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ArrowRight } from 'lucide-react';

export default function HeroSection({ imageSrc }) {
  return (
    <section className="relative min-h-[calc(100vh-136px)], mt-29  flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50/30 py-12 lg:py-0">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Staggered Content Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col items-start space-y-6 text-left z-10"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-500 text-xs font-bold shadow-sm"
          >
            <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="tracking-wider uppercase">LIVE YOUR LIFE</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-800 leading-[1.15]"
          >
            We Care About <br />
            <span className="text-slate-800">Your Health</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-slate-500 text-base sm:text-lg max-w-lg leading-relaxed font-normal"
          >
            Vitae aliquam vestibulum elit adipiscing massa diam in dignissim. Risus tellus libero elementum aliquam etiam. Lectus adipiscing est auctor mi quisque nunc non viverra est.
          </motion.p>

          {/* Contact Us Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="pt-2"
          >
            <button className="group flex items-center space-x-3 px-8 py-4 rounded-full bg-cyan-400 text-white font-semibold text-sm shadow-lg shadow-cyan-400/25 hover:shadow-xl hover:shadow-cyan-400/40 hover:-translate-y-0.5 transition-all duration-200">
              <span>CONTACT US</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: Circular Background Shape & Doctor Image with Entrance Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="lg:col-span-6 relative flex items-center justify-center lg:justify-end mt-10 lg:mt-0"
        >
          {/* Large Soft Circular Backdrop */}
          <div className="absolute w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] rounded-full bg-cyan-100/50 border border-cyan-200/30 -z-0"></div>

          {/* Doctor Image with Hover Effect */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative z-10 w-full max-w-md sm:max-w-lg flex justify-center"
          >
            <img 
              src={imageSrc} 
              alt="Insove Medical Professional" 
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}