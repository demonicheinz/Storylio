"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Earth - 3D Solar System",
    description: "3D Solar System Planets to Explore",
    image: "/images/projects/1.jpg",
    link: "/projects/earth",
    tech: ["react", "three.js", "tailwind", "typescript", "framer-motion"],
  },
  {
    title: "Yoom - Video Conferencing",
    description: "Video Conferencing App",
    image: "/images/projects/2.jpg",
    link: "/projects/yoom",
    tech: ["next.js", "webrtc", "socket.io", "tailwind"],
  },
  {
    title: "AI Image Saas",
    description: "AI Image Generation Application",
    image: "/images/projects/3.jpg",
    link: "/projects/ai-saas",
    tech: ["next.js", "openai", "stripe", "mongodb"],
  },
  {
    title: "Titanium",
    description: "Animated Apple iPhone 3D Website",
    image: "/images/projects/4.jpg",
    link: "/projects/titanium",
    tech: ["react", "three.js", "gsap", "tailwind"],
  },
];

const RecentProject = () => {
  return (
    <section className="w-full py-10">
      <h1 className="heading">
        Featured
        <span className="text-purple"> projects</span>
      </h1>

      <div className="my-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Link
            href={project.link}
            key={index}
            className="group relative bg-[#04071D] rounded-3xl overflow-hidden hover:bg-[#0c0e23] transition-all duration-300 border border-black/[0.2] dark:border-white/[0.2]"
          >
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-purple-500/10 rounded-full blur-[80px]" />
            <div className="aspect-[16/10] relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple transition-colors">
                {project.title}
              </h3>
              <p className="text-[#E4ECFF] text-base mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-sm px-3 py-1 bg-black/20 rounded-full text-[#E4ECFF]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-end">
                <span className="text-purple font-medium group-hover:underline inline-flex items-center gap-2">
                  View Project
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

export default RecentProject;
