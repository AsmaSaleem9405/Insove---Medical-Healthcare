"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

// Helper component for the 0-to-target counting animation
function Counter({ end, duration = 2000, prefix = "+" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrameId;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easeOutProgress = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      setCount(Math.floor(easeOutProgress * end));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return <span>{prefix}{count}</span>;
}

export default function ServicesAppointmentPage() {
  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const containerRef = useRef(null);

  // Scroll hooks for continuous dynamic motion on scroll up/down
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1.02, 0.98]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [3, -3, 3]);

  const openDatePicker = () => {
    if (dateRef.current?.showPicker) {
      dateRef.current.showPicker();
    } else {
      dateRef.current.focus();
    }
  };

  const openTimePicker = () => {
    if (timeRef.current?.showPicker) {
      timeRef.current.showPicker();
    } else {
      timeRef.current.focus();
    }
  };

  return (
    <main ref={containerRef} className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#3bc5d4] selection:text-white overflow-hidden perspective-[1400px]">
      
      {/* Main container with framer-motion 3D scroll reactions working both up and down */}
      <motion.div 
        style={{ scale, rotateX, transformStyle: 'preserve-3d' }}
        className="max-w-7xl mx-auto space-y-20 will-change-transform"
      >
        <div className="space-y-20">

         {/* SECTION 1: Statistics Counters (viewport once: false triggers on scroll down & up) */}
          <motion.section 
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100 p-6"
          >
            <div className="p-4">
              <h3 className="text-4xl sm:text-5xl font-bold text-[#3bc5d4]">
                <Counter end={5120} />
              </h3>
              <p className="text-gray-500 text-sm mt-1">Happy Patients</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl sm:text-5xl font-bold text-[#3bc5d4]">
                <Counter end={26} />
              </h3>
              <p className="text-gray-500 text-sm mt-1">Total Branches</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl sm:text-5xl font-bold text-[#3bc5d4]">
                <Counter end={53} />
              </h3>
              <p className="text-gray-500 text-sm mt-1">Senior Doctors</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl sm:text-5xl font-bold text-[#3bc5d4]">
                <Counter end={10} />
              </h3>
              <p className="text-gray-500 text-sm mt-1">Years Experience</p>
            </div>
          </motion.section>

          {/* SECTION 2: Services Banner & Cards */}
          <section className="relative px-4 sm:px-6 lg:px-8">
            
            {/* Top Banner - Slides in from Left with once: false */}
            <motion.div 
              initial={{ opacity: 0, x: -80, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-3xl bg-[#1fc5d4] px-8 sm:px-12 lg:px-16 py-8 text-white flex flex-col lg:flex-row justify-between items-center gap-6 mx-auto w-full max-w-[1166px] h-auto lg:h-[318px] shadow-2xl"
            >
              <Image
                src="/images/bg.jpg"
                alt="Background Banner"
                fill
                className="object-cover object-center z-0"
                priority
              />
              <div className="absolute inset-0 bg-black/10 z-10" />

              <div className="relative z-20 md:pb-12 max-w-xl">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                  Our Best Medical Services For <br /> Your Health Solution
                </h2>
              </div>

              <div className="relative z-20 max-w-md md:pb-12 pb-19 text-sm sm:text-base text-cyan-50">
                <p className="leading-relaxed">
                  At Insove, we provide comprehensive, patient-centered medical care led by expert professionals. Your well-being and recovery are our top priorities every single day.
                </p>
              </div>
            </motion.div>

            {/* Service Cards Container - Slides in from Right with once: false */}
            <motion.div 
              initial={{ opacity: 0, x: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[1066px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-16 sm:-mt-20 relative z-30"
            >
              {[
                { icon: "/icons/home.png", title: "General Practitioners", desc: "Comprehensive primary healthcare evaluations, routine checkups, and personalized wellness consultations." },
                { icon: "/icons/pregnancy.png", title: "Pregnancy Support", desc: "Dedicated maternal care, prenatal monitoring, and expert guidance throughout your motherhood journey." },
                { icon: "/icons/medi2.png", title: "Nutritional Support", desc: "Custom diet plans and nutritional counseling designed to improve your metabolic health and vitality." },
                { icon: "/icons/medi1.png", title: "Pharmaceutical Care", desc: "Safe medication management, expert pharmaceutical guidance, and prescription support services." }
              ].map((card, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-6 shadow-xl border border-gray-50 flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 mb-4 flex items-center justify-center">
                    <img src={card.icon} alt={card.title} className="w-8 h-8 object-contain" />
                  </div>
                  <h4 className="font-bold text-gray-800 text-lg mb-2">{card.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* SECTION 3: Book Appointment Form */}
          <motion.section 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto pt-6"
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Book Insove Appointment Or Call: <span className="text-[#3bc5d4]">(+487) 384 9452</span>
              </h3>
              <p className="text-gray-500 text-sm mt-2">Schedule your visit with our specialist doctors in just a few clicks.</p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-500 text-sm focus:outline-none focus:border-[#3bc5d4] appearance-none">
                    <option value="">Select Department</option>
                    <option value="general">General Practitioners</option>
                    <option value="pregnancy">Pregnancy Support</option>
                    <option value="nutrition">Nutritional Support</option>
                    <option value="pharma">Pharmaceutical Care</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">▼</div>
                </div>

                <div className="relative">
                  <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-500 text-sm focus:outline-none focus:border-[#3bc5d4] appearance-none">
                    <option value="">Select Doctor</option>
                    <option value="dr-smith">Dr. Smith</option>
                    <option value="dr-johnson">Dr. Johnson</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">▼</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input type="text" placeholder="Full Name" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 pr-12 text-gray-700 text-sm focus:outline-none focus:border-[#3bc5d4]" />
                </div>
                <div className="relative">
                  <input type="tel" placeholder="Phone Number" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 pr-12 text-gray-700 text-sm focus:outline-none focus:border-[#3bc5d4]" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input ref={dateRef} type="date" className="custom-date w-full bg-white border border-gray-200 rounded-xl px-4 py-3 pr-12 text-gray-500 text-sm focus:outline-none focus:border-[#3bc5d4]" />
                  <button type="button" onClick={openDatePicker} className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
                    <Image src="/icons/calendar.png" alt="Calendar" width={20} height={20} />
                  </button>
                </div>

                <div className="relative">
                  <input ref={timeRef} type="time" className="custom-time w-full bg-white border border-gray-200 rounded-xl px-4 py-3 pr-12 text-gray-500 text-sm focus:outline-none focus:border-[#3bc5d4]" />
                  <button type="button" onClick={openTimePicker} className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
                    <Image src="/icons/clock.png" alt="Clock" width={20} height={20} />
                  </button>
                </div>
              </div>

              <div className="pt-4 text-center sm:text-left">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full sm:w-auto bg-[#1fc5d4] hover:bg-[#1bb0be] text-white font-medium px-8 py-3.5 rounded-full shadow-lg transition-colors duration-200 text-sm tracking-wide uppercase"
                >
                  Book An Appointment
                </motion.button>
              </div>
            </form>
          </motion.section>

        </div>
      </motion.div>
    </main>
  );
}