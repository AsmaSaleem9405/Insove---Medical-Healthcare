"use client";

import { blogsData } from "@/app/data/blogs";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { use } from "react";

export default function BlogDetailPage({ params }) {
  // Unwrap params using React.use() for Next.js 15+ compatibility
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div
    className="w-full min-h-screen bg-white overflow-hidden" style={{ perspective: "1200px" }}>
      {/* Full width wrapper set to pure white */}
      <main className="min-h-screen bg-white text-gray-950 py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        
        {/* Back Link Animation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link
            href="/"
            className="text-sm font-semibold text-[#29b6f6] hover:underline mb-6 inline-block transition-transform hover:-translate-x-1"
          >
            &larr; Back to Home
          </Link>
        </motion.div>

        {/* Category & Date Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="flex items-center gap-4 mb-3"
        >
          <span className="bg-[#5bc0be] text-white text-xs font-semibold px-3 py-1 rounded uppercase tracking-wider shadow-sm">
            {blog.category}
          </span>
          <span className="text-sm text-gray-500">{blog.date}</span>
        </motion.div>

        {/* Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-950 mb-6 leading-tight">
            {blog.title}
          </h1>
        </motion.div>

        {/* Featured Image with 3D Depth & Scroll Effect */}
        <motion.div
          initial={{ opacity: 0, rotateX: 15, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, rotateX: 0, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
          className="relative h-[350px] sm:h-[450px] w-full rounded-2xl overflow-hidden mb-8 shadow-2xl border border-gray-100"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            priority
            className="object-cover transform transition-transform duration-700 hover:scale-105"
          />
        </motion.div>

        {/* Full Content Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="prose max-w-none text-gray-800 text-lg leading-relaxed space-y-6"
        >
          <p>{blog.content}</p>
          <p>
            Implementing these strategies consistently will yield significant long-term improvements in your overall wellbeing and daily lifestyle. Make sure to consult with professional experts if you encounter persistent symptoms or require personalized guidance tailored to your specific situation.
          </p>
        </motion.div>

      </main>
    </div>
  );
}