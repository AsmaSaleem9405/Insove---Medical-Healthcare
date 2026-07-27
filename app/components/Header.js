'use client';
import Image from "next/image";

import React from 'react';
import { MapPin, Phone, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-slate-100 shadow-sm relative">
      {/* Top Bar: Logo, Location, Phone, Book Now */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        
        {/* Logo with 3 overlapping circles */}
        <div className="relative w-27 h-27 flex items-center ml-30 justify-center">
  <Image
    src="/images/logo.png"
    alt="Insove Logo"
    fill
    className="object-contain"
  />
</div>
        {/* Contact Info (Hidden on small screens) */}
        <div className="hidden md:flex items-center space-x-8 text-sm text-slate-600">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span className="text-slate-600 font-normal">123 Arling, Miola, NY</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-cyan-400" />
            <span className="font-semibold text-slate-800">(+487) 384 9452</span>
          </div>
        </div>

        {/* Book Now Button */}
        <div>
          <button className="px-7 py-2.5 rounded-full border border-cyan-400 text-slate-700 font-medium text-sm hover:bg-cyan-400 hover:text-white transition-all duration-200">
            BOOK NOW
          </button>
        </div>
      </div>

      {/* Floating Centered Navigation Bar */}
      <div className="absolute left-1/2 -bottom-13  transform -translate-x-1/2 w-full max-w-5xl px-4 z-20">
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
            <Search className="w-4 h-4 text-cyan-400" />
            <span className="text-sm hidden sm:inline text-slate-400 font-normal">Search..</span>
          </div>
        </div>
      </div>
    </header>
  );
}