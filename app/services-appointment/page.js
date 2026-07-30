"use client";

import React from 'react';
import Image from 'next/image';
import { useRef } from "react";

export default function ServicesAppointmentPage() {
 const dateRef = useRef(null);
  const timeRef = useRef(null);

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
    <main className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* SECTION 1: Statistics Counters */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div className="p-4">
            <h3 className="text-4xl sm:text-5xl font-bold text-[#3bc5d4]">+5120</h3>
            <p className="text-gray-500 text-sm mt-1">Happy Patients</p>
          </div>
          <div className="p-4">
            <h3 className="text-4xl sm:text-5xl font-bold text-[#3bc5d4]">+26</h3>
            <p className="text-gray-500 text-sm mt-1">Total Branches</p>
          </div>
          <div className="p-4">
            <h3 className="text-4xl sm:text-5xl font-bold text-[#3bc5d4]">+53</h3>
            <p className="text-gray-500 text-sm mt-1">Senior Doctors</p>
          </div>
          <div className="p-4">
            <h3 className="text-4xl sm:text-5xl font-bold text-[#3bc5d4]">+10</h3>
            <p className="text-gray-500 text-sm mt-1">Years Experience</p>
          </div>
        </section>

        {/* SECTION 2: Services Banner & Cards */}
        <section className="relative px-4 sm:px-6 lg:px-8">
          {/* Top Banner with Background Image & Left/Right Spacing */}
          <div 
            className="relative overflow-hidden rounded-3xl bg-[#1fc5d4] px-8 sm:px-12 lg:px-16 py-8 text-white flex flex-col lg:flex-row justify-between items-center gap-6 mx-auto w-full max-w-[1166px] h-auto lg:h-[318px]"
          >
            {/* Next.js Optimized Background Image */}
            <Image
              src="/images/bg.jpg"
              alt="Background Banner"
              fill
              className="object-cover object-center z-0"
              priority
            />

            {/* Left Content */}
            <div className="relative z-20 max-w-xl">
              <span className="text-xs uppercase tracking-widest font-semibold bg-white/20 px-3 py-1 rounded-full mb-3 inline-block">
                Welcome to Insove Healthcare
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Our Best Medical Services For <br /> Your Health Solution
              </h2>
            </div>

            {/* Right Content */}
            <div className="relative z-20 max-w-md text-sm sm:text-base text-cyan-50">
              <p>
                At Insove, we provide comprehensive, patient-centered medical care led by expert professionals. Your well-being and recovery are our top priorities every single day.
              </p>
            </div>
          </div>

          {/* Service Cards Container */}
          <div className="max-w-[1066px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-10 sm:-mt-16 relative z-30">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-50 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <img
                  src="/icons/home.png"
                  alt="General Practitioners"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h4 className="font-bold text-gray-800 text-lg mb-2">
                General Practitioners
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Comprehensive primary healthcare evaluations, routine checkups, and personalized wellness consultations.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-50 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <img
                  src="/icons/pregnancy.png"
                  alt="Pregnancy Support"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h4 className="font-bold text-gray-800 text-lg mb-2">
                Pregnancy Support
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Dedicated maternal care, prenatal monitoring, and expert guidance throughout your motherhood journey.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-50 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <img
                  src="/icons/medi2.png"
                  alt="Nutritional Support"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h4 className="font-bold text-gray-800 text-lg mb-2">
                Nutritional Support
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Custom diet plans and nutritional counseling designed to improve your metabolic health and vitality.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-50 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <img
                  src="/icons/medi1.png"
                  alt="Pharmaceutical Care"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h4 className="font-bold text-gray-800 text-lg mb-2">
                Pharmaceutical Care
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Safe medication management, expert pharmaceutical guidance, and prescription support services.
              </p>
            </div>

          </div>
        </section>

        {/* SECTION 3: Book Appointment Form */}
        <section className="max-w-4xl mx-auto pt-6">
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
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 pr-12 text-gray-700 text-sm focus:outline-none focus:border-[#3bc5d4]" 
                />
              </div>

              <div className="relative">
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 pr-12 text-gray-700 text-sm focus:outline-none focus:border-[#3bc5d4]" 
                />
              </div>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Date */}
      <div className="relative">
        <input
          ref={dateRef}
          type="date"
          className="custom-date w-full bg-white border border-gray-200 rounded-xl px-4 py-3 pr-12 text-gray-500 text-sm focus:outline-none focus:border-[#3bc5d4]"
        />

        <button
          type="button"
          onClick={openDatePicker}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
        >
          <Image
            src="/icons/calendar.png"
            alt="Calendar"
            width={20}
            height={20}
          />
        </button>
      </div>

      {/* Time */}
      <div className="relative">
        <input
          ref={timeRef}
          type="time"
          className="custom-time w-full bg-white border border-gray-200 rounded-xl px-4 py-3 pr-12 text-gray-500 text-sm focus:outline-none focus:border-[#3bc5d4]"
        />

        <button
          type="button"
          onClick={openTimePicker}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
        >
          <Image
            src="/icons/clock.png"
            alt="Clock"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>

            <div className="pt-4 text-center sm:text-left">
              <button type="submit" className="w-full sm:w-auto bg-[#1fc5d4] hover:bg-[#1bb0be] text-white font-medium px-8 py-3.5 rounded-full shadow-lg transition-colors duration-200 text-sm tracking-wide uppercase">
                Book An Appointment
              </button>
            </div>
          </form>
        </section>

      </div>
    </main>
  );
}