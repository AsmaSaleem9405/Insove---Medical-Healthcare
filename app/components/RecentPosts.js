'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
        return "bg-[#70c1b3]";
      case "dental":
        return "bg-[#5bc0be]";
      default:
        return "bg-[#43aa8b]";
    }
  };

  return (
    // Added bg-white here to make the whole section background white
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <h2 className="text-3xl sm:text-4xl font-bold text-[#333333] mb-12">
        Our Recent Posts
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col border border-gray-100 transition-transform duration-300 hover:-translate-y-1"
          >
            {/* Blog Image & Category Badge Container */}
            <div className="relative h-56 w-full">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
              <span
                className={`absolute bottom-3 left-3 text-white text-xs font-semibold px-3 py-1 rounded uppercase tracking-wider ${getCategoryColor(
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
          </div>
        ))}
      </div>

      {/* Read More Blogs Button (Shows if there are more blogs to display) */}
      {visibleCount < blogsData.length && (
        <div className="text-center mt-14">
          <button
            onClick={handleReadMoreBlogs}
            className="bg-[#29b6f6] hover:bg-[#0288d1] text-white font-medium px-8 py-3.5 rounded-full shadow-md transition-all duration-300 uppercase text-sm tracking-wider cursor-pointer"
          >
            READ MORE BLOGS
          </button>
        </div>
      )}
    </section>
  );
}