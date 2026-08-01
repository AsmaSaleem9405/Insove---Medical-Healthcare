'use client';

import React, { useState } from 'react';
import Header from '@/app/components/Header';
import HeroSection from '@/app/components/HeroSection';
import HeroSplash from '@/app/components/HeroSplash';
import ServicesAppointmentPage from '@/app/services-appointment/page';
import TestimonialSection from '@/app/TestimonialSection/page';
import TeamClient from '@/app/team/TeamClient'; 
import FaqAndServicesPage from '@/app/faq-services/page';
import RecentPosts from '@/app/components/RecentPosts';
import NewsletterPage from '@/app/newsletter/page';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/app/components/Footer';

export default function Page() {
  const [showMain, setShowMain] = useState(false);

  return (
    // min-h-screen creates natural page height allowing the right-side scrollbar to appear
    <main className="min-h-screen w-full relative overflow-x-hidden bg-slate-950">
      
      {/* Full-Page Fixed Background Image behind everything */}
      <div 
        className="fixed inset-0 w-screen h-screen bg-cover bg-center bg-no-repeat filter blur-xl scale-110 opacity-70 pointer-events-none z-0"
        style={{ backgroundImage: "url('/images/blur.jpg')" }}
      />

      <AnimatePresence mode="wait">
        {!showMain ? (
          /* 1. Splash Screen View: Fixed full viewport layout with the scrollbar on the right */
          <motion.div
            key="splash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 pt-13 w-full h-screen flex items-center justify-center overflow-hidden"
          >
            <HeroSplash 
              appName="Insove"
              imageSrc="/images/doctors.png"
              onEnter={() => setShowMain(true)}
            />
          </motion.div>
        ) : (
          /* 2. Main Website View */
          <motion.div
            key="main-site"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 min-h-screen bg-slate-50 overflow-x-hidden"
          >
            <Header />
            <HeroSection />
            <ServicesAppointmentPage />
            <TestimonialSection />
            <TeamClient />
            <FaqAndServicesPage />
            <RecentPosts />
            <NewsletterPage />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}