// src/pages/DesignShowcase.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { SiFigma, SiAdobephotoshop, SiAdobexd, SiCanva, SiDribbble, SiBehance } from "react-icons/si";

// Images
import heroImg from "/hero.png";
import memozImg from "/memoz.png";
import carImg from "/car.png";
import petsImg from "/pets.png";
import ss1Img from "/Screenshot 2025-08-10 012413.png";
import ss2Img from "/Screenshot 2025-08-10 012718.png";

const designs = [
  { img: heroImg, title: "Hero Section Design", desc: "A bold hero section with modern typography and strong visual hierarchy." },
  { img: memozImg, title: "Memoz App UI", desc: "A sleek productivity app interface for note-taking and reminders." },
  { img: carImg, title: "Car Showcase", desc: "High-quality automotive UI design with realistic lighting effects." },
  { img: petsImg, title: "Pet Adoption Portal", desc: "Friendly and approachable interface for pet lovers." },
  { img: ss1Img, title: "Dashboard UI", desc: "A modern admin dashboard with analytics, charts, and a card-based layout." },
  { img: ss2Img, title: "E-commerce Product Page", desc: "Product-focused design with seamless checkout flow." },
];

export default function DesignShowcase() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const carouselRef = useRef();

  // Infinite auto-scroll carousel
  useEffect(() => {
    const carousel = carouselRef.current;
    let animationFrameId;

    const scroll = () => {
      if (carousel) {
        carousel.scrollLeft += 0.5;
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0; // Loop
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="bg-[#02020A] text-white">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-500">My Designs</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A curated collection of my UI/UX and web design work — blending creativity,
          usability, and aesthetics.
        </p>
      </section>

      {/* Auto-scroll Carousel */}
      <section className="relative py-10">
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-scroll no-scrollbar px-6 pb-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {[...designs, ...designs].map((d, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 w-72 rounded-xl overflow-hidden relative"
            >
              <img src={d.img} alt={d.title} className="w-full h-48 object-cover" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Alternating Layouts */}
      <section className="max-w-6xl mx-auto px-6 space-y-20">
        {designs.map((d, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col md:flex-row ${i % 2 === 0 ? "" : "md:flex-row-reverse"} gap-8 items-center`}
          >
            <div className="relative group w-full md:w-1/2">
              <img src={d.img} alt={d.title} className="rounded-xl object-cover w-full h-72" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <button
                  onClick={() => setSelectedIndex(i)}
                  className="px-4 py-2 bg-green-500 text-black font-semibold rounded-lg"
                >
                  View Full
                </button>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-3 text-green-500">{d.title}</h2>
              <p className="text-gray-400">{d.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* My Workflow */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-green-500 mb-4">My Workflow</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          My design process combines creativity, structure, and the best tools for the job.
        </p>
        <div className="flex justify-center gap-10 flex-wrap">
          {[SiFigma, SiAdobephotoshop, SiAdobexd, SiCanva].map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="bg-[#0a0a14] p-6 rounded-xl shadow-lg cursor-pointer"
            >
              <Icon size={50} className="text-green-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Inspiration */}
      <section className="py-20 text-center bg-[#0a0a14]">
        <h2 className="text-3xl font-bold text-green-500 mb-4">Inspiration</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          I draw inspiration from creative communities and design pioneers.
        </p>
        <div className="flex justify-center gap-10 flex-wrap">
          {[{ Icon: SiDribbble, link: "https://dribbble.com" }, { Icon: SiBehance, link: "https://behance.net" }].map(
            ({ Icon, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                className="bg-[#02020A] p-6 rounded-xl shadow-lg"
              >
                <Icon size={50} className="text-green-500" />
              </motion.a>
            )
          )}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-full max-w-6xl px-6">
              <button
                className="absolute top-4 right-4 text-white text-2xl"
                onClick={() => setSelectedIndex(null)}
              >
                <FaTimes />
              </button>
              <img
                src={designs[selectedIndex].img}
                alt={designs[selectedIndex].title}
                className="rounded-xl max-h-[80vh] mx-auto object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
