'use client';

import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';

const faqData = [
  {
    question: 'Why To Believe With Insove Medical Healthcare ?',
    answer:
      'Diam orci gravida convallis at enim risus viverra. Hac mi tristique in aliquet tincidunt nam lectus nec. Placerat interdum auctor facilisi massa laoreet hendrerit posuere a. Tristique ultricies consectetu at.',
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
      'Vel non viverra ligula odio ornare turpis mauris. Odio aliquam, tincidunt ut vitae elit risus. Tempor egestas condimentum et ac rutrum dui, odio.Vel non viverra ligula odio ornare turpis mauris.',
    subDescription:
      'Aliquam, tincidunt ut vitae elit risus. Tempor egestas condimentum et ac rutrum dui, odio. Non viverra ligula odio ornare turpis mauris. Dio a Vel non viverra ligula odio ornare turpis mauris.',
    tags: ['Advanced Diagnostics', 'Pathology Testing', 'Microbiology Lab'],
  },
  cardiology: {
    title: 'Cardiology Clinic',
    description:
      'Vel non viverra ligula odio ornare turpis mauris. Odio aliquam, tincidunt ut vitae elit risus. Tempor egestas condimentum et ac rutrum dui, odio.Vel non viverra ligula odio ornare turpis mauris.',
    subDescription:
      'Aliquam, tincidunt ut vitae elit risus. Tempor egestas condimentum et ac rutrum dui, odio. Non viverra ligula odio ornare turpis mauris. Dio a Vel non viverra ligula odio ornare turpis mauris.',
    tags: ['Neurocritical Care', 'Neuro Oncology', 'Geriatric Neurology'],
  },
  gynecology: {
    title: 'Gynecology Clinic',
    description:
      'Comprehensive women’s health services covering routine screenings, prenatal care, and advanced obstetric treatments with compassionate expertise.',
    subDescription:
      'Our dedicated specialists prioritize patient well-being, offering modern diagnostic technology in a safe and supportive medical environment.',
    tags: ['Prenatal Care', 'Routine Screening', 'Women Wellness'],
  },
  pathology: {
    title: 'Pathology Clinic',
    description:
      'Accurate tissue and cellular analysis driven by state-of-the-art laboratory equipment and expert pathologists for precise diagnosis.',
    subDescription:
      'Fast turnaround times and detailed reporting to assist your primary healthcare providers in formulating effective treatments.',
    tags: ['Biopsy Testing', 'Cytopathology', 'Blood Chemistry'],
  },
  pediatrics: {
    title: 'Pediatrics Clinic',
    description:
      'Specialized medical care tailored for infants, children, and adolescents, ensuring healthy growth and development milestones.',
    subDescription:
      'Friendly and gentle care environments designed to keep young patients comfortable while receiving necessary vaccinations and checkups.',
    tags: ['Vaccinations', 'Growth Monitoring', 'Neonatal Care'],
  },
  neurology: {
    title: 'Neurology Clinic',
    description:
      'Expert evaluation and treatment of disorders affecting the brain, spinal cord, and peripheral nervous system using advanced diagnostics.',
    subDescription:
      'Personalized neuro-rehabilitation programs designed to improve neurological function and enhance everyday quality of life.',
    tags: ['Stroke Care', 'EEG Testing', 'Headache Clinic'],
  },
};

export default function InsoveFaqAndServicesPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeTab, setActiveTab] = useState('cardiology');

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* Page-Level SEO Metadata Configuration */}
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

      <main className="w-full min-h-screen bg-white text-slate-800 font-sans">
        
        {/* SECTION 1: FAQ Accordion */}
        <section className="w-full py-16 px-4 md:px-8 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              We’ve Got Answers
            </h1>
          </div>

          <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
            {faqData.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="py-5 transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center text-left focus:outline-none group"
                  >
                    <span className="text-lg md:text-xl font-semibold text-slate-800 group-hover:text-cyan-600 transition-colors">
                      {faq.question}
                    </span>
                    <span className="ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-600 font-bold text-lg group-hover:bg-cyan-50 group-hover:text-cyan-600 transition-colors">
                      {isOpen ? '–' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="mt-3 pr-12 text-slate-600 text-sm md:text-base leading-relaxed animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 2: Clinic Services Card with Light Sky Background Image */}
        <section className="w-full py-16 px-4 md:px-8 flex justify-center items-center">
          <div className="relative w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl p-6 md:p-12 bg-slate-50 border border-slate-100">
            
            {/* Light Sky Background Image from Gallery */}
            <div className="absolute inset-0 z-0 opacity-25">
              <Image
                src="/images/Departments.png" // Replace with your gallery background image path
                alt="Light Sky Background"
                fill
                priority
                className="object-cover object-center"
              />
            </div>

<div className="absolute inset-0 z-[1] bg-[#E8F0F1] backdrop-blur-[1px] pointer-events-none" />
            {/* Subtle Gradient Overlay for Readability */}

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
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`text-left text-xs md:text-sm font-bold tracking-wider py-2.5 px-3 rounded-lg transition-all ${
                        isActive
                          ? 'text-cyan-500 bg-cyan-50/80 shadow-sm'
                          : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/60'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Dynamic Clinic Details & Graphics */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {clinicData[activeTab].title}
                  </h2>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {clinicData[activeTab].description}
                  </p>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                    {clinicData[activeTab].subDescription}
                  </p>

                  {/* Sub-tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {clinicData[activeTab].tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold text-cyan-600 hover:text-cyan-700 cursor-pointer pr-3"
                      >
                        {tag} {idx < clinicData[activeTab].tags.length - 1 && <span className="text-slate-300 ml-2">|</span>}
                      </span>
                    ))}
                  </div>

                  {/* Learn More CTA Button */}
                  <div className="pt-4">
                    <a
                      href="#contact"
                      className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-sm px-7 py-3 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                    >
                      LEARN MORE
                    </a>
                  </div>
                </div>

                {/* Vector Healthcare Illustration */}
                <div className="hidden md:flex justify-center items-center">
                  <div className="relative w-48 h-48 opacity-80">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="w-full h-full text-slate-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}