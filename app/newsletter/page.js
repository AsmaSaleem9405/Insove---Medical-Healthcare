'use client';

import Image from 'next/image';

export default function NewsletterPage() {
  const brands = [
    { name: "Lifetrace", icon: "/icons/Lifetrace.png" },
    { name: "medcare", icon: "/icons/Medcare.png" },
    { name: "BETRAEL", icon: "/icons/Betael.png" },
    { name: "Healer.", icon: "/icons/Healer..png" },
    { name: "SOVEN", icon: "/icons/Soven.png" },
  ];

  return (
    <main className="w-full min-h-screen relative overflow-hidden flex flex-col justify-between font-sans bg-white">
      
      {/* Background White Layer */}
      <div className="absolute inset-0 bg-white backdrop-blur-[0.5px]" />

      {/* Top Section: Brand Logos Row */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-12 w-36">
                <Image 
                  src={brand.icon} 
                  alt={`${brand.name} logo`} 
                  fill 
                  className="object-contain filter brightness-95 opacity-95"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Section: Full-Width Newsletter Banner (Not Rounded) */}
      <section className="w-full relative overflow-hidden py-16 sm:py-20 px-6 sm:px-12 lg:px-20 mt-auto shadow-2xl z-10">
        
        {/* Newsletter Background Image from Gallery */}
        <div className="absolute inset-0 pb-100 -z-10 w-full h-full">
          <Image 
            src="/images/ourbg.png" 
            alt="Newsletter Background Pattern" 
            fill 
            className="object-cover object-center"
          />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
          
          <div className="text-center lg:text-left max-w-xl">
            <span className="text-white/90 text-xs sm:text-sm font-semibold tracking-widest uppercase block mb-3">
              OUR NEWSLETTER
            </span>
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Subscribe Us To <br className="hidden sm:inline" /> Get More Updates
            </h1>
          </div>

          <div className="w-full max-w-lg">
            <form 
              onSubmit={(e) => { e.preventDefault(); }} 
              className="relative flex flex-col sm:flex-row items-center bg-transparent border border-white/70 rounded-full p-1.5 backdrop-blur-sm transition-all focus-within:border-white shadow-inner"
            >
              <input 
                type="email" 
                required 
                placeholder="Your Email Address" 
                aria-label="Your Email Address"
                className="w-full bg-transparent px-6 py-3.5 text-white placeholder-white/80 focus:outline-none text-sm sm:text-base text-center sm:text-left"
              />
              <button 
                type="submit" 
                className="w-full sm:w-auto mt-2 sm:mt-0 bg-white text-[#15a3bc] font-semibold px-8 py-3.5 rounded-full hover:bg-neutral-100 transition-colors shadow-md text-sm sm:text-base whitespace-nowrap active:scale-95"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}