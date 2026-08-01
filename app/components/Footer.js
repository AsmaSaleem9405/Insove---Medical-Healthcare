'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";

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

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <footer id="contact"
     className="w-full bg-white text-slate-600 font-sans border-t border-slate-100 pt-16 pb-8 overflow-hidden perspective-[1000px]">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-100">          
          
          {/* Column 1: Brand Info & Socials (Span 4) */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-4 transform-gpu">
            {/* Logo / Brand - Fixed href to "/" */}
            <div className="flex items-center">
              <Link href="/">
                <motion.div 
                  whileHover={{ scale: 1.05, rotateY: 5, z: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-30 h-30 -mb-6 -mt-9 flex-shrink-0 cursor-pointer"
                >
                  <Image 
                    src="/images/logo.png" 
                    alt="Insove Logo" 
                    fill 
                    className="object-contain object-left"
                  />
                </motion.div>
              </Link>
            </div>

            <p className="text-sm text-slate-500 leading-relaxed pr-4">
              Providing professional and reliable healthcare services with dedicated medical experts to ensure your well-being around the clock.
            </p>

            {/* Contact Details with Image Icons and Hover Effects */}
            <div className="space-y-3 text-sm pt-2">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3 group cursor-pointer transition-all"
              >
                <div className="relative w-4 h-4 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-125">
                  <Image src="/icons/location.png" alt="Location" fill className="object-contain" />
                </div>
                <span className="text-slate-600 group-hover:text-[#1bc2db] transition-colors">123 Arling, Miola, NY</span>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 group transition-all"
              >
                <div className="relative w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-125">
                  <Image src="/icons/mail.png" alt="Email" fill className="object-contain" />
                </div>
                <a href="mailto:Info@yourinfo.com" className="text-slate-600 hover:text-[#1bc2db] transition-colors">
                  Info@yourinfo.com
                </a>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 group transition-all"
              >
                <div className="relative w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-125">
                  <Image src="/icons/call.png" alt="Phone" fill className="object-contain" />
                </div>
                <a href="tel:+4873849452" className="text-slate-600 hover:text-[#1bc2db] transition-colors">
                  (+487) 384 9452
                </a>
              </motion.div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-3 pt-3">
              {[
                { name: "Facebook", href: "https://www.facebook.com", icon: <FaFacebookF className="w-3.5 h-3.5" /> },
                { name: "Instagram", href: "https://www.instagram.com", icon: <FaInstagram className="w-3.5 h-3.5" /> },
                { name: "Twitter", href: "https://www.twitter.com", icon: <FaTwitter className="w-3.5 h-3.5" /> },
                { name: "LinkedIn", href: "https://www.linkedin.com", icon: <FaLinkedinIn className="w-3.5 h-3.5" /> },
                { name: "YouTube", href: "https://www.youtube.com", icon: <FaYoutube className="w-3.5 h-3.5" /> },
              ].map((social, i) => (
                <motion.a 
                  key={i} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ scale: 1.15, rotateZ: 5, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#1CBCCF] hover:text-white hover:border-[#1CBCCF] transition-all duration-300 shadow-sm"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links (Span 4) */}
          <motion.div variants={itemVariants} className="lg:col-span-4 transform-gpu">
            <h3 className="text-slate-900 font-bold text-lg mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <ul className="space-y-3">
                {quickLinksCol1.map((link, index) => (
                  <motion.li key={index} whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link 
                      href={link.href} 
                      className={`hover:text-[#90C6CD] transition-colors ${link.name === 'Home' ? 'text-[#1CBCCF] font-medium' : 'text-slate-600'}`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <ul className="space-y-3">
                {quickLinksCol2.map((link, index) => (
                  <motion.li key={index} whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link 
                      href={link.href} 
                      className="text-slate-600 hover:text-[#90C6CD] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Column 3: Opening Hours (Span 4) */}
          <motion.div variants={itemVariants} className="lg:col-span-4 transform-gpu">
            <h3 className="text-slate-900 font-bold text-lg mb-6">Opening Hours</h3>
            <div className="space-y-3.5 text-sm">
              {openingHours.map((schedule, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ scale: 1.02, x: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex justify-between items-center pb-2.5 border-b border-slate-100 last:border-0"
                >
                  <span className="text-slate-500">{schedule.days}</span>
                  <span className="font-medium text-[#1CBCCF]">
                    {schedule.time}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom Copyright Row */}
        <motion.div 
          variants={itemVariants}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4"
        >
          <p>© 2023 Insove - All rights reserved</p>
          <p>
            Developed by: <span className="text-slate-600 font-medium">Asma Saleem</span>
          </p>
        </motion.div>

      </motion.div>
    </footer>
  );
}