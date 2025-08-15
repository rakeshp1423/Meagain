import React from "react";
import { motion } from "framer-motion";

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
      "Created to provide an interface with ready-to-use drag-and-drop components, enabling users to quickly generate and access the corresponding code for their layouts.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    img: "/hellogrd.png",
    live: "https://hellogrid.vercel.app/",
    github: "https://github.com/username/hellogrid",
  },
  {
    title: "CollegeTalks",
    description:
      "Built to provide students with a platform to create chat rooms and connect with each other for discussions, collaboration, and community building.",
    tech: ["HTML/CSS", "Django", "Python","MySQL"],
    img: "/college.png",
    live: "https://djangoproject-production-7018.up.railway.app/",
    github: "https://github.com/rakeshp1423/djangoProject",
  },
  {
  title: "iFly",
  description:
    "A flight booking and management platform designed to let users search flights, view live flight news, check delays, and manage their bookings seamlessly.",
  tech: ["React", "Tailwind CSS", "Django", "Django REST Framework"],
  img: "/ifly.png",
  live: "https://i-fly-roan.vercel.app/",
  github: "https://github.com/rakeshp1423/iFly-",
},

];

export default function Projects() {
  return (
    <section className="bg-[#02020A] py-16" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              className="bg-[#0B0B1A] border border-[#1E1E2F] rounded-xl overflow-hidden hover:scale-105 transform transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
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
                <p className="text-gray-400 text-sm mt-2">{proj.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {proj.tech.map((tech, idx) => (
                    <span
                      key={idx}
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
                    className="bg-[#10B981] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#0d9466] transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-16 border-t-2 border-[#10B981] w-full"></div>

        {/* Designs Section */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Explore My Creative Designs
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            From sleek UI mockups to detailed prototypes — step into my design
            world and see how I bring concepts to life visually.
          </p>
          <a
            href="/designs"
            className="bg-[#10B981] px-6 py-3 rounded-lg text-white font-medium hover:bg-[#0d9466] transition"
          >
            View Designs
          </a>
        </motion.div>
      </div>
    </section>
  );
}
