'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section 
      id="home"
      className="relative flex items-center overflow-hidden bg-[#E8F0F1] py-16 md:py-0"
      style={{
        width: "100%",
        maxWidth: "1920px",
        minHeight: "510px",
        height: "auto",
        maxHeight: "none",
        margin: "0 auto",
      }}
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-6 right-10 w-64 h-64 bg-cyan-200/25 rounded-full blur-2xl pointer-events-none"></div>
      
      {/* Container */}
      <div className="max-w-[1300px] mx-auto px-6 md:ml-26 w-full grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 items-center">
        
        {/* Left Side: Staggered Content Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-6 flex flex-col items-center md:items-start space-y-4 text-center md:text-left z-10"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="inline-flex items-center gap-2 mt-0 md:mt-25 px-3 py-1 rounded-full bg-white text-cyan-500 text-[11px] font-bold shadow-sm"
          >
            <Image
              src="/icons/heart.png"
              alt="Live Icon"
              width={14}
              height={14}
              className="object-contain"
            />
            <span className="tracking-wider uppercase">
              LIVE YOUR LIFE
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold font-poppins tracking-tight leading-[1.15] text-[#4C5354]"
          >
            We Care About <br />
            <span className="text-[#4C5354]">
              Your Health
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-[#6B7280] text-sm sm:text-base max-w-md leading-relaxed font-normal"
          >
            Insove makes healthcare easier by helping you book appointments, consult
            trusted doctors, manage your medical records, and access quality care from
            anywhere—all through one secure and user-friendly platform.
          </motion.p>

          {/* Contact Us Button */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="pt-1 flex justify-center md:justify-start"
          >
            <button className="group flex items-center space-x-2 px-8 py-4 md:py-5 rounded-full bg-[#1CBCCF] text-white font-semibold text-xs sm:text-sm shadow-md shadow-cyan-400/25 hover:shadow-lg hover:shadow-cyan-400/35 hover:-translate-y-0.5 transition-all duration-200">
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
          className="md:col-span-6 relative flex items-center justify-center h-[380px] sm:h-[480px]  md:h-[620px]"
        >
          {/* Circular Backdrop fully contained and aligned inside the section bounds */}
          <div className="absolute w-[280px] h-[280px] sm:w-[420px] sm:mt-34 sm:h-[420px] md:w-[550px] md:h-[550px] md:mr-18 md:mt-40 top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 md:translate-x-0 md:right-4 rounded-full bg-[#F1F5F9] border border-cyan-200/20 -z-0 pointer-events-none"></div>

          {/* Doctor Image with Hover Effect & Next.js Image Component */}
         <motion.div
  whileHover={{ scale: 1.02 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
  className="relative z-10
    w-full
    max-w-[320px]
    sm:max-w-md
    md:max-w-2xl
    md:mr-40
    md:mt-6
    md:mb-36
    sm:mt-52
    xs:mt-77
   md: h-[420px]
    md:h-[540px]
    md:h-[760px]
    flex justify-center items-end"
>
  <Image
    src="/images/dr-1.png"
    alt="Insove Medical Professional"
    fill
    className="object-contain object-bottom drop-shadow-xl"
    priority
  />
</motion.div>
        </motion.div>

      </div>
    </section>
  );
}