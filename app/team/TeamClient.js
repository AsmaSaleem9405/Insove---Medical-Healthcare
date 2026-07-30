import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const teamSections = [
  [
    {
      id: 1,
      name: "Dr. Leslie Taylor",
      specialty: "PEDIATRICIAN",
      description: "Dedicated to providing compassionate healthcare for infants, children, and adolescents, ensuring their healthy growth and development.",
      // Using a local image path from the public folder
      image: "/images/dr1.png", 
      socials: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        youtube: "https://youtube.com",
      },
    },
    {
      id: 2,
      name: "Dr. Zachary Brown",
      specialty: "CARDIOLOGIST",
      description: "Expert in diagnosing and treating diseases of the cardiovascular system, focused on promoting long-term heart health and prevention.",
      image: "/images/dr2.png", 
      socials: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        youtube: "https://youtube.com",
      },
    },
  ],
  [
    {
      id: 3,
      name: "Dr. Sophia Martinez",
      specialty: "DERMATOLOGIST",
      description: "Specialized in medical and cosmetic dermatology, providing expert care for skin, hair, and nail conditions.",
      image: "/images/dr3 (2).jpg", 
      socials: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        youtube: "https://youtube.com",
      },
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "NEUROLOGIST",
      description: "Focused on evaluating and treating disorders related to the nervous system, brain, spine, and peripheral nerves.",
      image: "/images/dr4.jpg", 
      socials: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        youtube: "https://youtube.com",
      },
    },
  ],
  [
    {
      id: 5,
      name: "Dr. Emily Davis",
      specialty: "OPHTHALMOLOGIST",
      description: "Providing comprehensive eye and vision care, ranging from routine examinations to advanced surgical treatments.",
      image: "/images/dr5 (2).jpg", 
      socials: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        youtube: "https://youtube.com",
      },
    },
    {
      id: 6,
      name: "Dr. Michael Chen",
      specialty: "ORTHOPEDIC SURGEON",
      description: "Specializing in the musculoskeletal system, joint replacements, and sports injuries to restore mobility and strength.",
      image: "/images/dr6 (2).jpg", 
      socials: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        youtube: "https://youtube.com",
      },
    },
  ],
];

export default function TeamClient() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  // Auto move every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (isMounted.current) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % teamSections.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleIndexChange = (index) => {
    if (isMounted.current) {
      setCurrentIndex(index);
    }
  };

  return (
    <section className="py-16 px-6 sm:px-12 lg:px-20 bg-white max-w-[1440px] mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 tracking-tight">
          Our Team
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 transition-all duration-500">
        {teamSections[currentIndex].map((doctor) => (
          <div
            key={doctor.id}
            className="flex flex-col sm:flex-row items-center sm:items-start bg-white p-0 rounded-none shadow-none border-0 gap-6"
          >
            <div className="relative w-full sm:w-60 h-64 rounded-2xl overflow-hidden flex-shrink-0 bg-neutral-100 shadow-sm">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 240px"
                priority
              />
            </div>

            <div className="flex flex-col justify-between flex-grow text-center sm:text-left py-1">
              <div>
                <h3 className="text-2xl font-bold text-neutral-800">
                  {doctor.name}
                </h3>
                <span className="text-xs font-bold tracking-widest mt-1.5 block" style={{ color: "#1CBCCF" }}>
                  {doctor.specialty}
                </span>
                <p className="text-sm text-neutral-500 mt-3 leading-relaxed">
                  {doctor.description}
                </p>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-4 mt-6">
                <a
                  href={doctor.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${doctor.name}'s Facebook`}
                  className="transition-transform duration-200 hover:scale-125"
                  style={{ color: "#1CBCCF" }}
                >
                  <FaFacebookF size={16} />
                </a>
                <a
                  href={doctor.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${doctor.name}'s Twitter`}
                  className="transition-transform duration-200 hover:scale-125"
                  style={{ color: "#1CBCCF" }}
                >
                  <FaTwitter size={16} />
                </a>
                <a
                  href={doctor.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${doctor.name}'s Instagram`}
                  className="transition-transform duration-200 hover:scale-125"
                  style={{ color: "#1CBCCF" }}
                >
                  <FaInstagram size={16} />
                </a>
                <a
                  href={doctor.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${doctor.name}'s YouTube`}
                  className="transition-transform duration-200 hover:scale-125"
                  style={{ color: "#1CBCCF" }}
                >
                  <FaYoutube size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-3 mt-12">
        {teamSections.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndexChange(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "w-8"
                : "w-3 opacity-40 hover:opacity-75"
            }`}
            style={{ backgroundColor: "#1CBCCF" }}
          />
        ))}
      </div>
    </section>
  );
}