"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function NewsletterPage() {
  const brands = [
    { name: "Lifetrace", icon: "/icons/Lifetrace.png" },
    { name: "medcare", icon: "/icons/Medcare.png" },
    { name: "BETRAEL", icon: "/icons/Betael.png" },
    { name: "Healer.", icon: "/icons/Healer..png" },
    { name: "SOVEN", icon: "/icons/Soven.png" },
  ];

  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <motion.main id="CTA"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full min-h-[auto] sm:min-h-screen relative overflow-x-hidden flex flex-col justify-between font-sans bg-white perspective-[1000px]"
    >
      <div className="absolute inset-0 bg-white backdrop-blur-[0.5px]" />

      {/* Top Section: Brand Logos Row */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-16 relative z-10 overflow-hidden">
        <motion.div 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex w-full overflow-hidden"
        >
          <div className="flex overflow-hidden w-full relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              animate={{ x: ["0%", "-33.333%"] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex items-center gap-5 sm:gap-16 shrink-0 min-w-full justify-around"
            >
              {duplicatedBrands.map((brand, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ 
                    scale: 1.1, 
                    rotateX: 5, 
                    rotateY: 10, 
                    z: 30,
                    filter: "drop-shadow(0px 15px 15px rgba(0,0,0,0.1))" 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-center justify-center cursor-pointer transform-gpu shrink-0"
                >
                  <div className="relative h-7 w-22 sm:h-12 sm:w-36">
                    <Image 
                      src={brand.icon} 
                      alt={`${brand.name} logo`} 
                      fill 
                      className="object-contain filter brightness-95 opacity-95 transition-all duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Bottom Section: Newsletter Banner */}
      <motion.section 
        initial={{ y: 50, opacity: 0, rotateX: -10 }}
        whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative overflow-hidden py-8 sm:py-20 px-4 sm:px-12 lg:px-20 mt-auto shadow-2xl z-10 transform-gpu"
      >
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 -z-10 w-full h-full"
        >
          <Image 
            src="/images/ourbg.png" 
            alt="Newsletter Background Pattern" 
            fill 
            className="object-cover object-center"
          />
        </motion.div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-10 relative z-10">
          
          <motion.div 
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-center lg:text-left max-w-xl"
          >
            <span className="text-white/90 text-[11px] sm:text-sm font-semibold tracking-widest uppercase block mb-1.5 sm:mb-3">
              OUR NEWSLETTER
            </span>
            <h1 className="text-white text-xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-snug sm:leading-tight">
              Subscribe Us To <br className="hidden sm:inline" /> Get More Updates
            </h1>
          </motion.div>

          <motion.div 
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="w-full max-w-lg"
          >
            <form 
              onSubmit={(e) => { e.preventDefault(); }} 
              className="relative flex flex-row items-center border border-white/70 rounded-full p-1.5 backdrop-blur-sm transition-all focus-within:border-white shadow-inner gap-0"
            >
              <input 
                type="email" 
                required 
                placeholder="Your Email Address" 
                aria-label="Your Email Address"
                className="w-full bg-transparent rounded-l-full pl-5 pr-2 py-3 sm:px-6 sm:py-3.5 text-white placeholder:text-white/80 focus:outline-none text-xs sm:text-base text-left truncate"
              />
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                type="submit" 
                className="shrink-0 bg-white text-[#15a3bc] font-semibold px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-full hover:bg-neutral-100 transition-colors shadow-md text-xs sm:text-base whitespace-nowrap cursor-pointer"
              >
                SUBSCRIBE
              </motion.button>
            </form>
          </motion.div>

        </div>
      </motion.section>
    </motion.main>
  );
}