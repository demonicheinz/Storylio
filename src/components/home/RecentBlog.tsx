"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "Building a Modern Web Application",
    description: "Learn how to build a modern web application using Next.js 13 and TypeScript",
    image: "/images/blog/1.jpg",
    date: "March 15, 2024",
    readTime: "5 min read",
    link: "/blog/modern-web-app",
  },
  {
    title: "Mastering TypeScript",
    description: "A comprehensive guide to TypeScript features and best practices",
    image: "/images/blog/2.jpg",
    date: "March 10, 2024",
    readTime: "8 min read",
    link: "/blog/mastering-typescript",
  },
  {
    title: "React Server Components",
    description: "Understanding React Server Components and their benefits",
    image: "/images/blog/3.jpg",
    date: "March 5, 2024",
    readTime: "6 min read",
    link: "/blog/react-server-components",
  },
];

const RecentBlog = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        Latest
        <span className="text-purple"> insights</span>
      </h1>

      <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <Link
            href={blog.link}
            key={index}
            className="group bg-[#04071D] rounded-3xl overflow-hidden hover:bg-[#0c0e23] transition-all duration-300 border border-black/[0.2] dark:border-white/[0.2]"
          >
            <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-purple-500/10 rounded-full blur-[60px]" />
            <div className="aspect-[16/10] relative overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-8">
              <div className="flex items-center gap-3 text-sm text-[#E4ECFF] mb-4">
                <span>{blog.date}</span>
                <span className="text-purple">•</span>
                <span>{blog.readTime}</span>
              </div>

              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple transition-colors">
                {blog.title}
              </h3>

              <p className="text-[#E4ECFF] text-base mb-6">{blog.description}</p>

              <div className="flex items-center justify-end">
                <span className="text-purple font-medium group-hover:underline inline-flex items-center gap-2">
                  Read Article
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <title>Arrow Right Icon</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentBlog;
