import React from 'react';
import HeroSplash from '@/app/components/HeroSplash';

export const metadata = {
  title: 'Insove | Advanced Medical Healthcare Web Application',
  description: 'Welcome to Insove, your trusted platform for modern medical care.',
};

export default function Page() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-950">
      {/* 1. Fully Blurred Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat filter blur-xl scale-110 opacity-70"
        style={{ backgroundImage: "url('/images/blur.jpg')" }}
      />
      
      {/* Dark tint overlay to make text and image pop */}
      <div className="absolute inset-0 " />

      {/* 2. Hero Content Layer */}
      <HeroSplash 
        appName="Insove"
        tagline="Medical Healthcare Web Application"
        imageSrc="/images/doctors.png"
      />
    </main>
  );
}