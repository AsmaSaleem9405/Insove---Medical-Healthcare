'use client';
import Image from "next/image";

import React, { useState } from 'react';
import { MapPin, Phone, Search, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-slate-100 shadow-sm relative">
      {/* Top Bar: Logo, Location, Phone, Book Now */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        
        {/* Logo with 3 overlapping circles */}
        <div className="relative w-27 h-27 flex items-center md:ml-30 justify-center">
          <Image
            src="/images/Logo.png"
            alt="Insove Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Contact Info (Hidden on small screens) */}
        <div className="hidden md:flex items-center space-x-8 text-sm text-slate-600">
          <div className="flex items-center ml-79 space-x-2">
            <Image
              src="/icons/location.png"
              alt="Logo"
              width={16}
              height={16}
              className="object-contain"
            />           
            <span className="text-slate-600 font-normal">123 Arling, Miola, NY</span>
          </div>
          <div className="flex items-center space-x-2">
            <Image
              src="/icons/call.png"
              alt="Logo"
              width={16}
              height={16}
              className="object-contain"
            />             
            <span className="font-normal text-slate-600">(+487) 384 9452</span>
          </div>
        </div>

        {/* Book Now Button & Mobile Hamburger */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <button className="px-7 py-2.5 mr-27 rounded-full border border-cyan-400 text-slate-700 font-medium text-sm hover:bg-cyan-400 hover:text-white transition-all duration-200">
              BOOK NOW
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-700 focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Floating Centered Navigation Bar (Desktop) */}
      <div className="hidden md:block absolute left-1/2 -bottom-13 transform -translate-x-1/2 w-full max-w-5xl px-4 z-20">
        <div className="bg-white rounded-xl shadow-lg border border-slate-100 px-6 h-16 flex items-center justify-between">
          <nav className="flex items-center space-x-5 text-sm font-normal">
            <a href="#" className="text-cyan-400 font-medium py-2">Home</a>
            <span className="text-slate-200 font-light">|</span>
            <a href="#" className="text-slate-600 hover:text-cyan-400 transition-colors py-2">Doctors</a>
            <span className="text-slate-200 font-light">|</span>
            <a href="#" className="text-slate-600 hover:text-cyan-400 transition-colors py-2">Department</a>
            <span className="text-slate-200 font-light">|</span>
            <a href="#" className="text-slate-600 hover:text-cyan-400 transition-colors py-2">Services</a>
            <span className="text-slate-200 font-light">|</span>
            <a href="#" className="text-slate-600 hover:text-cyan-400 transition-colors py-2">Blog</a>
            <span className="text-slate-200 font-light">|</span>
            <a href="#" className="text-slate-600 hover:text-cyan-400 transition-colors py-2">Contact</a>
          </nav>

          {/* Search Input/Icon */}
          <div className="flex items-center text-slate-400 hover:text-slate-600 cursor-pointer space-x-2">
            <Image
              src="/icons/search.png"
              alt="Logo"
              width={16}
              height={16}
              className="object-contain"
            />             
            <span className="text-sm hidden sm:inline text-slate-400 font-normal">Search..</span>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 py-4 shadow-md space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-normal">
            <a href="#" className="text-cyan-400 font-medium py-1">Home</a>
            <a href="#" className="text-slate-600 hover:text-cyan-400 transition-colors py-1">Doctors</a>
            <a href="#" className="text-slate-600 hover:text-cyan-400 transition-colors py-1">Department</a>
            <a href="#" className="text-slate-600 hover:text-cyan-400 transition-colors py-1">Services</a>
            <a href="#" className="text-slate-600 hover:text-cyan-400 transition-colors py-1">Blog</a>
            <a href="#" className="text-slate-600 hover:text-cyan-400 transition-colors py-1">Contact</a>
          </nav>

          <div className="pt-2 border-t border-slate-100 flex flex-col space-y-3 text-sm text-slate-600">
            <div className="flex items-center space-x-2">
              <Image src="/icons/location.png" alt="Location" width={16} height={16} className="object-contain" />           
              <span>123 Arling, Miola, NY</span>
            </div>
            <div className="flex items-center space-x-2">
              <Image src="/icons/call.png" alt="Phone" width={16} height={16} className="object-contain" />             
              <span>(+487) 384 9452</span>
            </div>
          </div>

          <div className="pt-2">
            <button className="w-full py-2.5 rounded-full border border-cyan-400 text-slate-700 font-medium text-sm hover:bg-cyan-400 hover:text-white transition-all duration-200">
              BOOK NOW
            </button>
          </div>
        </div>
      )}
    </header>
  );
}