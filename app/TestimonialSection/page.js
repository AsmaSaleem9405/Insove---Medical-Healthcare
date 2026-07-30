'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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

// Side preview images positioned with larger container sizes (w-20 h-20 / w-24 h-24)
const secondaryAvatars = [
  { src: "/images/img1.png", alt: "User 1", position: "top-2 left-1/3 w-20 h-20 md:w-24 md:h-24" },
  { src: "/images/img2.png", alt: "User 2", position: "top-12 left-4 w-20 h-20 md:w-24 md:h-24" },
  { src: "/images/img3.png", alt: "User 3", position: "bottom-8 left-12 w-20 h-20 md:w-24 md:h-24" },
  { src: "/images/img4.png", alt: "User 4", position: "bottom-2 left-1/2 w-20 h-20 md:w-24 md:h-24" },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section 
      aria-label="Insove Patient Testimonials"
      className="relative min-h-[550px] overflow-hidden py-16 px-4 md:px-12 lg:px-20 bg-cover bg-center transition-all duration-700"
      style={{ backgroundImage: `url('/images/test-bg.png')` }}
    >
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[400px]">
        
        {/* Left Side: Floating Avatars Cluster */}
        <div className="lg:col-span-6 relative h-[320px] md:h-[380px] flex items-center justify-center">
          
          {secondaryAvatars.map((item, index) => (
            <div 
              key={index} 
              className={`absolute ${item.position} rounded-full overflow-hidden  transition-transform duration-500 hover:scale-110 animate-bounce-slow`}
              style={{ animationDelay: `${index * 0.7}s` }}
            >
              <Image 
                src={item.src} 
                alt={item.alt} 
                width={150} 
                height={150} 
                className="w-20 h-20 object-cover shadow-amber-50 rounded-full"
              />
            </div>
          ))}

          {/* Central Active Featured Person Avatar */}
          <div className="absolute z-10 w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-cyan-400 to-teal-200 shadow-2xl animate-float">
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
        </div>

        {/* Right Side: Testimonial Quote & Controls */}
        <div className="lg:col-span-6 flex flex-col justify-center px-2 md:px-6">
          
          <div className="transition-all duration-500 transform translate-y-0">
            {/* Inline Paragraph with Opening and Closing Gallery Semicolons */}
            <p className="text-slate-700 text-base   md:text-lg leading-relaxed font-normal">
              <span className="inline-block relative w-12 h-12 align-middle mr-2 -mt-1">
                <Image 
                  src="/images/semi.png" 
                  alt="Quote Opening" 
                  fill 
                  className="object-contain -ml-13"
                />
              </span>
              <span>{currentTestimonial.quote}</span>
              <span className="inline-block relative w-12 h-12 align-middle ml-2 -mt-1 rotate-180">
                <Image 
                  src="/images/semi.png" 
                  alt="Quote Closing" 
                  fill 
                  className="object-contain"
                />
              </span>
            </p>

            {/* Customer Details */}
            <div className="mt-6">
              <h3 className="text-slate-900 font-bold text-lg md:text-xl tracking-wide">
                {currentTestimonial.name}
              </h3>
              <span className="text-cyan-600/80 text-xs font-semibold tracking-widest uppercase">
                {currentTestimonial.role}
              </span>
            </div>
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'w-8 bg-cyan-500 shadow-sm' 
                    : 'w-2.5 bg-cyan-200 hover:bg-cyan-300'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}