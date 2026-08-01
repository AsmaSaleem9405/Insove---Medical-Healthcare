'use client';

import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: 'Why To Believe With Insove Medical Healthcare ?',
    answer:
      'We provide trusted, professional, and patient-centered medical care backed by advanced diagnostic tools and experienced healthcare specialists committed to your health and recovery.',
  },
  {
    question: 'Will We Get Healthcare Updates After Surgery ?',
    answer:
      'Our medical team provides comprehensive post-surgery monitoring, updates, and personalized care guidelines to ensure smooth and safe recovery.',
  },
  {
    question: 'What Is The Cost For Just Repairing ?',
    answer:
      'Treatment and procedure costs vary based on individual diagnosis and specialized requirements. Consult our advisors for a detailed breakdown.',
  },
  {
    question: 'What Time Will It Take To Finish My Recovery ?',
    answer:
      'Recovery timelines depend entirely on the specific procedure performed and individual patient health parameters, managed closely by our specialists.',
  },
];

const clinicData = {
  laboratory: {
    title: 'Laboratory Analysis',
    description:
      'Our laboratory provides precise diagnostic testing utilizing advanced medical technology to support accurate health evaluations and reliable results.',
    subDescription:
      'We ensure rapid turnaround times and comprehensive sample analysis, assisting physicians in delivering effective treatments and patient care.',
    tags: ['Advanced Diagnostics', 'Pathology Testing', 'Microbiology Lab'],
    image: '/icons/hand.png',
  },
  cardiology: {
    title: 'Cardiology Clinic',
    description:
      'Expert cardiac care focused on the prevention, early detection, and treatment of heart conditions using state-of-the-art cardiovascular technology.',
    subDescription:
      'Our dedicated cardiologists provide personalized care plans, routine heart screenings, and advanced diagnostic monitoring for optimal heart health.',
    tags: ['Cardiac Monitoring', 'ECG Testing', 'Heart Health'],
    image: '/icons/hand.png',
  },
  gynecology: {
    title: 'Gynecology Clinic',
    description:
      'Comprehensive women’s health services covering routine screenings, prenatal care, and advanced obstetric treatments with compassionate expertise.',
    subDescription:
      'Our dedicated specialists prioritize patient well-being, offering modern diagnostic technology in a safe and supportive medical environment.',
    tags: ['Prenatal Care', 'Routine Screening', 'Women Wellness'],
    image: '/icons/hand.png',
  },
  pathology: {
    title: 'Pathology Clinic',
    description:
      'Accurate tissue and cellular analysis driven by state-of-the-art laboratory equipment and expert pathologists for precise diagnosis.',
    subDescription:
      'Fast turnaround times and detailed reporting to assist your primary healthcare providers in formulating effective treatments.',
    tags: ['Biopsy Testing', 'Cytopathology', 'Blood Chemistry'],
    image: '/icons/hand.png',
  },
  pediatrics: {
    title: 'Pediatrics Clinic',
    description:
      'Specialized medical care tailored for infants, children, and adolescents, ensuring healthy growth and development milestones.',
    subDescription:
      'Friendly and gentle care environments designed to keep young patients comfortable while receiving necessary vaccinations and checkups.',
    tags: ['Vaccinations', 'Growth Monitoring', 'Neonatal Care'],
    image: '/icons/hand.png',
  },
  neurology: {
    title: 'Neurology Clinic',
    description:
      'Expert evaluation and treatment of disorders affecting the brain, spinal cord, and peripheral nervous system using advanced diagnostics.',
    subDescription:
      'Personalized neuro-rehabilitation programs designed to improve neurological function and enhance everyday quality of life.',
    tags: ['Stroke Care', 'EEG Testing', 'Headache Clinic'],
    image: '/icons/hand.png',
  },
};

export default function InsoveFaqAndServicesPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeTab, setActiveTab] = useState('laboratory');

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>FAQ & Clinical Services | Insove Medical Healthcare</title>
        <meta
          name="description"
          content="Explore Insove Medical Healthcare FAQ and specialized clinic services including cardiology, neurology, laboratory analysis, and pediatrics."
        />
        <meta
          name="keywords"
          content="Insove medical healthcare, cardiology clinic, medical FAQ, laboratory analysis, neurology clinic"
        />
        <link rel="canonical" href="https://yourdomain.com/services-faq" />
      </Head>

      <main id="FAQ"
       className="w-full min-h-screen bg-white text-slate-800 font-sans perspective-[1400px]">
        
        {/* SECTION 1: FAQ Accordion */}
        <section className="w-full py-16 px-4 md:px-8 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              We’ve Got Answers
            </h1>
          </motion.div>

          <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
            {faqData.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="py-5 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center text-left focus:outline-none group"
                  >
                    <span className="text-lg md:text-xl font-semibold text-slate-800 group-hover:text-cyan-600 transition-colors">
                      {faq.question}
                    </span>
                    <motion.span 
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-600 font-bold text-lg group-hover:bg-cyan-50 group-hover:text-cyan-600 transition-colors"
                    >
                      {isOpen ? '–' : '+'}
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 pr-12 text-slate-600 text-sm md:text-base leading-relaxed">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* SECTION 2: Clinic Services Card */}
        <section className="w-full py-16 px-4 md:px-8 flex justify-center items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotateX: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformStyle: 'preserve-3d' }}
            className="relative w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl p-6 md:p-12 bg-slate-50 border border-slate-100"
          >
            
            <div className="absolute inset-0 z-0 opacity-25">
              <Image
                src="/images/Departments.png"
                alt="Light Sky Background"
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            <div className="absolute inset-0 z-[1] bg-[#E8F0F1] backdrop-blur-[1px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Navigation Sidebar Tabs */}
              <div className="lg:col-span-4 flex flex-col space-y-3 border-b lg:border-b-0 lg:border-r border-slate-200 pb-6 lg:pb-0 lg:pr-6">
                {[
                  { key: 'laboratory', label: 'LABORATORY ANALYSIS' },
                  { key: 'cardiology', label: 'CARDIOLOGY CLINIC' },
                  { key: 'gynecology', label: 'GYNECOLOGY CLINIC' },
                  { key: 'pathology', label: 'PATHOLOGY CLINIC' },
                  { key: 'pediatrics', label: 'PEDIATRICS CLINIC' },
                  { key: 'neurology', label: 'NEUROLOGY CLINIC' },
                ].map((tab) => {
                  const isActive = activeTab === tab.key;
                  return (
                    <motion.button
                      key={tab.key}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveTab(tab.key)}
                      className={`text-left text-xs md:text-sm font-bold tracking-wider py-2.5 px-3 rounded-lg transition-all ${
                        isActive
                          ? 'text-cyan-500 bg-cyan-50/80 shadow-sm'
                          : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/60'
                      }`}
                    >
                      {tab.label}
                    </motion.button>
                  );
                })}
              </div>

              {/* Right Column: Dynamic Clinic Details & Image */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeTab + "-content"}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {clinicData[activeTab].title}
                    </h2>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      {clinicData[activeTab].description}
                    </p>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                      {clinicData[activeTab].subDescription}
                    </p>

                    {/* Sub-tags in a single wrapping line with separators */}
                    <div className="flex flex-wrap items-center gap-y-2 pt-2 whitespace-nowrap">
                      {clinicData[activeTab].tags.map((tag, idx) => (
                        <span key={idx} className="inline-flex items-center text-xs font-semibold text-cyan-600">
                          <span className="hover:text-cyan-700 cursor-pointer">{tag}</span>
                          {idx < clinicData[activeTab].tags.length - 1 && (
                            <span className="text-slate-300 mx-3">|</span>
                          )}
                        </span>
                      ))}
                    </div>

                    {/* Learn More CTA Button */}
                    <div className="pt-4">
                      <motion.a
                        whileHover={{ scale: 1.05, translateZ: 20 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-sm px-7 py-3 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                      >
                        LEARN MORE
                      </motion.a>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Right Column Image */}
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeTab + "-image"}
                    initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                    transition={{ duration: 0.5 }}
                    style={{ transformStyle: 'preserve-3d' }}
                    className="relative w-full h-64 md:h-80 flex justify-center items-center"
                  >
                    <Image
                      src={clinicData[activeTab].image}
                      alt={clinicData[activeTab].title}
                      fill
                      className="object-contain drop-shadow-xl transition-all duration-500"
                    />
                  </motion.div>
                </AnimatePresence>

              </div>

            </div>
          </motion.div>
        </section>

      </main>
    </>
  );
}