'use client';
import Image from "next/image";

import React, { useState } from 'react';
import { MapPin, Phone, Search, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    const query = searchQuery.toLowerCase().trim();
    if (query.includes("doc")) {
      window.location.href = "/doctors";
    } else if (query.includes("dept") || query.includes("department")) {
      window.location.href = "/department";
    } else if (query.includes("serv")) {
      window.location.href = "/services";
    } else if (query.includes("blog")) {
      window.location.href = "/blog";
    } else if (query.includes("cont")) {
      window.location.href = "/contact";
    } else {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="w-full bg-white border-b border-slate-100 shadow-sm relative">
      {/* Top Bar: Logo, Location, Phone, Search, Book Now */}
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
              alt="Location"
              width={16}
              height={16}
              className="object-contain"
            />         
            <span className="text-slate-600 font-normal">123 Arling, Miola, NY</span>
          </div>
          <div className="flex items-center space-x-2">
            <Image
              src="/icons/call.png"
              alt="Phone"
              width={16}
              height={16}
              className="object-contain"
            />         
            <span className="font-normal text-slate-600">(+487) 384 9452</span>
          </div>
        </div>

        {/* Search Icon & Mobile Hamburger */}
        <div className="flex items-center space-x-3">
          {/* Mobile Search Button Styled Like Desktop */}
          <form onSubmit={handleSearch} className="md:hidden flex items-center bg-transparent space-x-2">
            <button type="submit" className="flex items-center focus:outline-none bg-transparent border-none cursor-pointer">
              <Search className="w-4 h-4 text-[#1CBCCF] stroke-[2.2]" />
            </button>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-sm italic bg-transparent text-slate-500 placeholder:text-slate-400 placeholder:italic focus:outline-none w-24"
            />
          </form>

          {/* Desktop Book Now Button */}
          <div className="hidden md:block">
            <button className="px-7 py-2.5 mr-27 rounded-full border border-[#1CBCCF] text-slate-700 font-medium text-sm hover:bg-[#1CBCCF] hover:text-white transition-all duration-200">
              BOOK NOW
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-700 focus:outline-none p-2 z-50 relative"
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
            <a href="#" className="text-[#1CBCCF] font-medium py-2">Home</a>
            <span className="text-slate-200 font-light">|</span>
            <a href="#" className="text-slate-600 hover:text-[#1CBCCF] transition-colors py-2">Doctors</a>
            <span className="text-slate-200 font-light">|</span>
            <a href="#" className="text-slate-600 hover:text-[#1CBCCF] transition-colors py-2">Department</a>
            <span className="text-slate-200 font-light">|</span>
            <a href="#" className="text-slate-600 hover:text-[#1CBCCF] transition-colors py-2">Services</a>
            <span className="text-slate-200 font-light">|</span>
            <a href="#" className="text-slate-600 hover:text-[#1CBCCF] transition-colors py-2">Blog</a>
            <span className="text-slate-200 font-light">|</span>
            <a href="#" className="text-slate-600 hover:text-[#1CBCCF] transition-colors py-2">Contact</a>
          </nav>

          {/* Search Form (Clickable & Redirects on Enter) */}
          <form onSubmit={handleSearch} className="flex items-center bg-transparent space-x-2.5">
            <button type="submit" className="flex items-center focus:outline-none bg-transparent border-none cursor-pointer">
              <Search className="w-5 h-5 text-[#1CBCCF] stroke-[2.2]" />
            </button>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-base italic bg-transparent text-slate-500 placeholder:text-slate-400 placeholder:italic focus:outline-none w-32"
            />
          </form>
        </div>
      </div>

      {/* Full-Screen Mobile Overlay Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden flex flex-col px-6 pt-2 pb-6 overflow-y-auto">
          
          {/* Top Row inside menu: Logo */}
          <div className="flex items-center justify-between h-16 mb-1">
            <div className="relative w-20 h-20 flex items-center">
              <Image
                src="/images/Logo.png"
                alt="Insove Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Centered Navigation Links, Contact Info & Book Now Button starting from top */}
          <div className="flex flex-col items-center space-y-4 text-center w-full mt-1">
            <nav className="flex flex-col items-center space-y-3 text-base font-medium w-full">
              <a href="#" className="text-[#1CBCCF] py-1" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#" className="text-slate-600 hover:text-[#1CBCCF] transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>Doctors</a>
              <a href="#" className="text-slate-600 hover:text-[#1CBCCF] transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>Department</a>
              <a href="#" className="text-slate-600 hover:text-[#1CBCCF] transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#" className="text-slate-600 hover:text-[#1CBCCF] transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>Blog</a>
              <a href="#" className="text-slate-600 hover:text-[#1CBCCF] transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </nav>

            {/* Contact Info with separation line colored #1CBCCF */}
            <div className="flex flex-col items-center space-y-2 text-sm text-slate-600 pt-3 border-t border-[#1CBCCF] w-full">
              <div className="flex items-center justify-center space-x-2">
                <Image src="/icons/location.png" alt="Location" width={16} height={16} className="object-contain" />         
                <span>123 Arling, Miola, NY</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Image src="/icons/call.png" alt="Phone" width={16} height={16} className="object-contain" />         
                <span>(+487) 384 9452</span>
              </div>
            </div>

            {/* Mobile Smaller Book Now Button */}
            <div className="w-full pt-1">
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="px-5 py-2 rounded-full border border-[#1CBCCF] text-slate-700 font-medium text-xs hover:bg-[#1CBCCF] hover:text-white transition-all duration-200"
              >
                BOOK NOW
              </button>
            </div>
          </div>

        </div>
      )}
    </header>
  );
}