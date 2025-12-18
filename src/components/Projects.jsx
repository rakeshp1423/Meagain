import React from "react";
import { motion } from "framer-motion";
import DesignShowcase from "./DesignShowcase";

const projects = [
  {
    title: "iHike Hiking Platform",
    description:
      "Frontend for a hiking community platform with booking, tours, and guide information.",
    tech: ["React", "Tailwind CSS", "Django REST"],
    img: "/ihike.png",
    live: "https://ihike.vercel.app/",
    github: "https://github.com/rakeshp1423/ihike",
  },
  {
    title: "HelloGrid",
    description:
      "Drag-and-drop UI builder with code generation support.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    img: "/hellogrd.png",
    live: "https://hellogrid.vercel.app/",
    github: "https://github.com/username/hellogrid",
  },
  {
    title: "CollegeTalks",
    description:
      "Student discussion and collaboration platform using Django.",
    tech: ["HTML/CSS", "Django", "Python", "MySQL"],
    img: "/college.png",
    live: "https://rakeshp1423.github.io/something/",
    github: "https://github.com/rakeshp1423/djangoProject",
  },
  {
    title: "iFly",
    description:
      "Flight booking and management system with live updates.",
    tech: ["React", "Tailwind CSS", "Django", "DRF"],
    img: "/ifly.png",
    live: "https://i-fly-roan.vercel.app/",
    github: "https://github.com/rakeshp1423/iFly-",
  },
];

export default function Projects() {
  return (
    <>
      {/* ================= Projects Section ================= */}
      <section className="bg-[#02020A] py-16" id="projects">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-10">
            Projects
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((proj, index) => (
              <motion.div
                key={index}
                className="bg-[#0B0B1A] border border-[#1E1E2F] rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white">
                    {proj.title}
                  </h3>

                  <p className="text-gray-400 text-sm mt-2">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {proj.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-[#1E1E2F] text-gray-300 px-3 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-5">
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#10B981] text-white px-4 py-2 rounded-lg text-sm"
                    >
                      Live Demo
                    </a>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Design Showcase Section ================= */}
      <DesignShowcase />
    </>
  );
}
