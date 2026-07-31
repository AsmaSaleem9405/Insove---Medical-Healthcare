'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const quickLinksCol1 = [
    { name: "Home", href: "/" },
    { name: "Doctors", href: "/doctors" },
    { name: "Department", href: "/department" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
  ];

  const quickLinksCol2 = [
    { name: "Our Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
    { name: "Faqs", href: "/faqs" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  const openingHours = [
    { days: "Monday - Thursday", time: "8:00 Am - 6:00 Pm" },
    { days: "Friday - Saturday", time: "10:00 Am - 4:00 Pm" },
    { days: "Sunday", time: "Emergency Only" },
    { days: "Personal", time: "7:00 Pm - 9:00 Pm" },
  ];

  return (
    <footer className="w-full bg-white text-slate-600 font-sans border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-100">
          
          {/* Column 1: Brand Info & Socials (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Logo / Brand */}
            <div className="flex items-center space-x-2">
              <div className="relative w-8 h-8">
                <Image 
                  src="/images/doctors.png" 
                  alt="Insove Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-slate-900 tracking-tight">
                Insove <span className="block text-xs font-normal text-slate-400 tracking-normal">Medical Healthcare</span>
              </span>
            </div>

            <p className="text-sm text-slate-500 leading-relaxed pr-4">
              Elit adipi massa diam in dignissim. Sagittis pulvinar ut dis venenatis nunc nunc.
            </p>

            {/* Contact Details */}
            <div className="space-y-2.5 text-sm pt-2">
              <div className="flex items-start space-x-3">
                <span className="text-[#1bc2db] mt-0.5">📍</span>
                <span className="text-slate-600">123 Arling, Miola, NY</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[#1bc2db]">✉️</span>
                <a href="mailto:Info@yourinfo.com" className="text-slate-600 hover:text-[#1bc2db] transition-colors">
                  Info@yourinfo.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[#1bc2db]">📞</span>
                <a href="tel:+4873849452" className="text-slate-600 hover:text-[#1bc2db] transition-colors">
                  (+487) 384 9452
                </a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-3 pt-3">
              {[
                { name: "Facebook", href: "#", letter: "f" },
                { name: "Instagram", href: "#", letter: "ig" },
                { name: "Twitter", href: "#", letter: "t" },
                { name: "LinkedIn", href: "#", letter: "in" },
                { name: "YouTube", href: "#", letter: "yt" },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  aria-label={social.name}
                  className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#1bc2db] hover:text-white hover:border-[#1bc2db] transition-all text-xs font-bold shadow-sm"
                >
                  {social.letter}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (Span 4) */}
          <div className="lg:col-span-4">
            <h3 className="text-slate-900 font-bold text-lg mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <ul className="space-y-3">
                {quickLinksCol1.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className={`hover:text-[#1bc2db] transition-colors ${link.name === 'Home' ? 'text-[#1bc2db] font-medium' : 'text-slate-600'}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {quickLinksCol2.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="text-slate-600 hover:text-[#1bc2db] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Opening Hours (Span 4) */}
          <div className="lg:col-span-4">
            <h3 className="text-slate-900 font-bold text-lg mb-6">Opening Hours</h3>
            <div className="space-y-3.5 text-sm">
              {openingHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center pb-2.5 border-b border-slate-100 last:border-0">
                  <span className="text-slate-500">{schedule.days}</span>
                  <span className="font-medium text-[#1bc2db]">
                    {schedule.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2023 Insove - All rights reserved</p>
          <p>
            Designed by: <span className="text-slate-600 font-medium">TemplatesJungla</span>
          </p>
        </div>

      </div>
    </footer>
  );
}