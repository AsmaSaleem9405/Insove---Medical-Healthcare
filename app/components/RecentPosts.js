'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { blogsData } from "../data/blogs";

export default function RecentPosts() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleReadMoreBlogs = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const currentBlogs = blogsData.slice(0, visibleCount);

  // Helper function for dynamic category badge colors matching your theme
  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case "medical":
        return "bg-[#5bc0be]";
      case "mental health":
        return "bg-[#5bc0be]";
      case "dental":
        return "bg-[#5bc0be]";
      default:
        return "bg-[#5bc0be]";
    }
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden" style={{ perspective: "1200px" }}>
      {/* Section Header Animation */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl sm:text-4xl font-bold text-[#333333] mb-12"
      >
        Our Recent Posts
      </motion.h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {currentBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, rotateX: 15, scale: 0.95, y: 50 }}
              whileInView={{ opacity: 1, rotateX: 0, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.15, // Stagger effect for items
                ease: [0.215, 0.61, 0.355, 1],
              }}
              whileHover={{ 
                y: -8, 
                rotateX: 2, 
                rotateY: 2,
                transition: { duration: 0.3 } 
              }}
              className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col border border-gray-100 cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Blog Image & Category Badge Container */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                <span
                  className={`absolute bottom-0 left-0 text-white text-xs font-semibold px-4 py-2 uppercase tracking-wider rounded-none rounded-tr-lg shadow-md ${getCategoryColor(
                    blog.category
                  )}`}
                >
                  {blog.category}
                </span>
              </div>

              {/* Blog Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs text-gray-400 mb-2 block">
                  {blog.date}
                </span>

                <Link href={`/blog/${blog.slug}`}>
                  <h3 className="text-xl font-bold text-[#333333] mb-3 hover:text-[#5bc0be] transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                </Link>

                <p className="text-gray-500 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {blog.excerpt}{" "}
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="text-[#333333] font-medium italic underline hover:text-[#5bc0be]"
                  >
                    Read More
                  </Link>
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Read More Blogs Button Animation */}
      {visibleCount < blogsData.length && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-14"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleReadMoreBlogs}
            className="bg-[#1CBCCF]  text-white font-medium px-8 py-3.5 rounded-full shadow-lg transition-colors duration-300 uppercase text-sm tracking-wider cursor-pointer"
          >
            READ MORE BLOGS
          </motion.button>
        </motion.div>
      )}
    </section>
  );
}