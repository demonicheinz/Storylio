"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const dummyBlogs = [
  {
    id: 1,
    title: "Getting Started with Next.js 14",
    description: "Learn how to build modern web applications with Next.js 14",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Web Development",
    image: "/images/blog/nextjs.jpg",
    slug: "getting-started-nextjs-14",
  },
  {
    id: 2,
    title: "Understanding TypeScript Generics",
    description: "A comprehensive guide to TypeScript generics and their practical applications",
    date: "March 10, 2024",
    readTime: "8 min read",
    category: "TypeScript",
    image: "/images/blog/typescript.jpg",
    slug: "understanding-typescript-generics",
  },
  {
    id: 3,
    title: "Mastering Tailwind CSS",
    description: "Tips and tricks for building beautiful interfaces with Tailwind CSS",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "CSS",
    image: "/images/blog/tailwind.jpg",
    slug: "mastering-tailwind-css",
  },
];

export default function LastBlog() {
  return (
    <section className="py-10 md:py-16">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground dark:text-white">
          Latest Articles
        </h2>
        <p className="text-muted-foreground dark:text-blue-100">
          Thoughts, learnings, and experiences
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {dummyBlogs.map((blog) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative bg-card dark:bg-black border border-border dark:border-neutral-800 rounded-xl overflow-hidden"
            >
              <Link
                href={`/blog/${blog.slug}`}
                className="block"
              >
                <div className="relative h-48 w-full">
                  <div className="absolute inset-0 bg-muted dark:bg-neutral-800 animate-pulse" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground dark:text-blue-100 mb-2">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground dark:text-white group-hover:text-purple transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-muted-foreground dark:text-blue-100 line-clamp-2">
                    {blog.description}
                  </p>
                  <div className="mt-4">
                    <span className="text-xs px-2 py-1 bg-muted dark:bg-neutral-800 text-muted-foreground dark:text-blue-100 rounded-full">
                      {blog.category}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center px-4 py-2 border border-border dark:border-neutral-800 rounded-lg
            text-foreground dark:text-white hover:bg-muted dark:hover:bg-neutral-800 transition-colors"
            title="Read all articles"
          >
            Read All Articles
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
