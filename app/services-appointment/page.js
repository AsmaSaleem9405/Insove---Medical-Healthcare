import React from 'react';
import Image from 'next/image';

export default function ServicesAppointmentPage() {
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

            {/* Optional Overlay to improve text contrast if needed */}

            {/* Left Content */}
            <div className="relative z-20 max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Our Best Services For <br /> Your Solution
              </h2>
            </div>

            {/* Right Content */}
            <div className="relative z-20 max-w-md text-sm sm:text-base text-cyan-50">
              <p>
                Vitae aliquam vestibulum elit adipiscing massa diam in dignissim.
                Risus tellus libero elementum aliquam etiam. Lectus adipiscing est
                auctor mi quisque nunc non viverra est.
              </p>
            </div>
          </div>

          {/* Service Cards Container */}
          <div className="max-w-[1066px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-10 sm:-mt-16 relative z-30">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-50 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <img
                  src="/icons/general-practitioner.png"
                  alt="General Practitioners"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h4 className="font-bold text-gray-800 text-lg mb-2">
                General Practitioners
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Aliquam etiam lectus adipiscing est auctor mi quisque non viverra.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-50 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <img
                  src="/icons/pregnancy-support.png"
                  alt="Pregnancy Support"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h4 className="font-bold text-gray-800 text-lg mb-2">
                Pregnancy Support
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Aliquam etiam lectus adipiscing est auctor mi quisque non viverra.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-50 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <img
                  src="/icons/nutritional-support.png"
                  alt="Nutritional Support"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h4 className="font-bold text-gray-800 text-lg mb-2">
                Nutritional Support
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Aliquam etiam lectus adipiscing est auctor mi quisque non viverra.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-50 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <img
                  src="/icons/pharmaceutical-care.png"
                  alt="Pharmaceutical Care"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h4 className="font-bold text-gray-800 text-lg mb-2">
                Pharmaceutical Care
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Aliquam etiam lectus adipiscing est auctor mi quisque non viverra.
              </p>
            </div>

          </div>
        </section>

        {/* SECTION 3: Book Appointment Form */}
        <section className="max-w-4xl mx-auto pt-6">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Book Appointment Or Call: <span className="text-[#3bc5d4]">(+487) 384 9452</span>
            </h3>
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
              <div>
                <input type="text" placeholder="Full Name" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-700 text-sm focus:outline-none focus:border-[#3bc5d4]" />
              </div>
              <div>
                <input type="tel" placeholder="Phone Number" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-700 text-sm focus:outline-none focus:border-[#3bc5d4]" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input type="date" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-500 text-sm focus:outline-none focus:border-[#3bc5d4]" />
              </div>
              <div>
                <input type="time" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-500 text-sm focus:outline-none focus:border-[#3bc5d4]" />
              </div>
            </div>

            <div className="pt-4">
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