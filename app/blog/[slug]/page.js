import { blogsData } from "@/app/data/blogs";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Dynamic SEO Metadata Generation
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return { title: "Blog Not Found" };
  }

  return {
    title: `${blog.title} | Blog Website`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [{ url: blog.image }],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen bg-white">
      <main className="min-h-screen bg-white text-gray-950 py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/"
          className="text-sm font-semibold text-[#29b6f6] hover:underline mb-6 inline-block"
        >
          &larr; Back to Home
        </Link>

        {/* Category & Date */}
        <div className="flex items-center gap-4 mb-3">
          <span className="bg-[#5bc0be] text-white text-xs font-semibold px-3 py-1 rounded uppercase tracking-wider">
            {blog.category}
          </span>
          <span className="text-sm text-gray-500">{blog.date}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-950 mb-6 leading-tight">
          {blog.title}
        </h1>

        {/* Featured Image */}
        <div className="relative h-[350px] sm:h-[450px] w-full rounded-2xl overflow-hidden mb-8 shadow-md">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Full Original Content */}
        <div className="prose max-w-none text-gray-800 text-lg leading-relaxed space-y-6">
          <p>{blog.content}</p>
          <p>
            Implementing these strategies consistently will yield significant long-term improvements in your overall wellbeing. Make sure to consult with specialized professionals if you encounter persistent symptoms or require personalized guidance tailored to your specific situation.
          </p>
        </div>
      </main>
    </div>
  );
}