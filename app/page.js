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
    // Changed overflow-hidden to overflow-visible (or remove overflow-hidden)
    <main className="min-h-screen relative overflow-visible bg-slate-950">
      <AnimatePresence mode="wait">
        {!showMain ? (
          /* 1. Splash Screen View */
          <motion.div
            key="splash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-50 min-h-screen"
          >
            {/* Fully Blurred Background Image */}
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat filter blur-xl scale-110 opacity-70"
              style={{ backgroundImage: "url('/images/blur.jpg')" }}
            />

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
            // Changed overflow-hidden to overflow-visible here too
            className="min-h-screen bg-slate-50 relative overflow-visible"
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