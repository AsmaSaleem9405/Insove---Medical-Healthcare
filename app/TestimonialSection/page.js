"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "Using Insove has completely transformed how I manage my family's health appointments and medical records. Everything is seamless, secure, and right at my fingertips!",
    name: "James Rodrigo",
    role: "PATIENT",
    activePersonImg: "/images/img1.png",
  },
  {
    id: 2,
    quote: "Insove made consulting with specialists effortless. The app is intuitive, fast, and the prescription tracking features give me total peace of mind.",
    name: "Dr. Sarah Jenkins",
    role: "VERIFIED USER",
    activePersonImg: "/images/img2.png",
  },
  {
    id: 3,
    quote: "Booking lab tests and reviewing my health reports through Insove has saved me so much time. It's an essential tool for anyone looking after their wellness.",
    name: "Michael Chen",
    role: "SUBSCRIBER",
    activePersonImg: "/images/img3.png",
  },
  {
    id: 4,
    quote: "From emergency contacts to daily medication reminders, Insove provides top-tier reliability. I highly recommend this healthcare platform to everyone!",
    name: "Aisha Khan",
    role: "PATIENT",
    activePersonImg: "/images/img4.png",
  },
];

const secondaryAvatars = [
  { src: "/images/img1.png", alt: "User 1", position: "top-2 left-1/3" },
  { src: "/images/img2.png", alt: "User 2", position: "top-12 left-2" },
  { src: "/images/img3.png", alt: "User 3", position: "bottom-8 left-8" },
  { src: "/images/img4.png", alt: "User 4", position: "bottom-2 left-1/2" },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200);
  const containerRef = useRef(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSmallLaptop = windowWidth >= 1024 && windowWidth < 1280;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1.02, 0.98]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [2, -2, 2]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  const avatarSizeClass = isSmallLaptop ? "w-20 h-20" : "w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24";
  const activeAvatarContainerClass = isSmallLaptop ? "w-32 h-32" : "w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40";

  return (
    <main id="testimonials"
     ref={containerRef} className="w-full bg-[url('/images/test-bg.png')] bg-cover bg-center bg-no-repeat overflow-hidden perspective-[1400px]">
      <motion.section 
        style={{ scale, rotateX, transformStyle: 'preserve-3d' }}
        aria-label="Insove Patient Testimonials"
        className="relative min-h-[550px] overflow-hidden py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 transition-all duration-700 will-change-transform"
      >
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center min-h-[400px]">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`relative h-[280px] sm:h-[320px] md:h-[380px] flex items-center justify-center ${
              isSmallLaptop ? "lg:col-span-5" : "lg:col-span-6"
            }`}
          >
            {secondaryAvatars.map((item, index) => (
              <div 
                key={index} 
                className={`absolute ${item.position} rounded-full overflow-hidden transition-transform duration-500 hover:scale-110 animate-bounce-slow`}
                style={{ animationDelay: `${index * 0.7}s` }}
              >
                <Image 
                  src={item.src} 
                  alt={item.alt} 
                  width={150} 
                  height={150} 
                  className={`${avatarSizeClass} object-cover shadow-amber-50 rounded-full`}
                />
              </div>
            ))}

            <div className={`absolute z-10 rounded-full p-1 bg-gradient-to-tr from-cyan-400 to-teal-200 shadow-2xl animate-float ${activeAvatarContainerClass}`}>
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <Image 
                  key={currentTestimonial.activePersonImg}
                  src={currentTestimonial.activePersonImg} 
                  alt={currentTestimonial.name}
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover rounded-full transition-opacity duration-500 opacity-100"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col justify-center px-2 sm:px-4 md:px-6 ${
              isSmallLaptop ? "lg:col-span-7 lg:pr-8" : "lg:col-span-6 lg:pr-24"
            }`}
          >
            <div className="transition-all duration-500 transform translate-y-0">
              <p className={`text-slate-700 leading-relaxed font-normal ${isSmallLaptop ? "text-base" : "text-sm sm:text-base md:text-lg"}`}>
                <span className="inline-block relative w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 align-sub mr-2">
                  <Image 
                    src="/images/semi.png" 
                    alt="Quote Opening" 
                    fill 
                    className="object-contain"
                  />
                </span>
                <span>{currentTestimonial.quote}</span>
                <span className="inline-block relative w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 align-sub ml-2 rotate-180 whitespace-nowrap">
                  <Image 
                    src="/images/semi.png" 
                    alt="Quote Closing" 
                    fill 
                    className="object-contain"
                  />
                </span>
              </p>

              <div className="mt-6">
                <h3 className="text-slate-900 font-bold text-base sm:text-lg md:text-xl tracking-wide">
                  {currentTestimonial.name}
                </h3>
                <span className="text-cyan-600/80 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
                  {currentTestimonial.role}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-6 sm:mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? 'w-6 sm:w-8 bg-cyan-500 shadow-sm' 
                      : 'w-2 sm:w-2.5 bg-cyan-200 hover:bg-cyan-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </motion.section>
    </main>
  );
}