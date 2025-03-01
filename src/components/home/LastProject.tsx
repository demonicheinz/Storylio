"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const dummyProjects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A modern dashboard for e-commerce with real-time analytics",
    image: "/images/projects/project1.jpg",
    tech: ["Next.js", "TailwindCSS", "TypeScript"],
    link: "/work/e-commerce-dashboard",
  },
  {
    id: 2,
    title: "Social Media App",
    description: "Full-stack social media application with real-time chat",
    image: "/images/projects/project2.jpg",
    tech: ["React", "Node.js", "Socket.io"],
    link: "/work/social-media-app",
  },
  {
    id: 3,
    title: "AI Writing Assistant",
    description: "AI-powered writing assistant with grammar checking",
    image: "/images/projects/project3.jpg",
    tech: ["Python", "FastAPI", "React"],
    link: "/work/ai-writing-assistant",
  },
];

export default function LastProject() {
  return (
    <section className="py-10 md:py-16">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground dark:text-white">
          Latest Projects
        </h2>
        <p className="text-muted-foreground dark:text-blue-100">Check out my recent work</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {dummyProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative bg-card dark:bg-black border border-border dark:border-neutral-800 rounded-xl overflow-hidden"
            >
              <Link
                href={project.link}
                className="block"
              >
                <div className="relative h-48 w-full">
                  <div className="absolute inset-0 bg-muted dark:bg-neutral-800 animate-pulse" />
                  {/* Note: Replace with actual project images */}
                  {/* <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  /> */}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-foreground dark:text-white group-hover:text-purple transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground dark:text-blue-100 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-muted dark:bg-neutral-800 text-muted-foreground dark:text-blue-100 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            href="/work"
            className="inline-flex items-center px-4 py-2 border border-border dark:border-neutral-800 rounded-lg
            text-foreground dark:text-white hover:bg-muted dark:hover:bg-neutral-800 transition-colors"
            title="View all projects"
          >
            View All Projects
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
