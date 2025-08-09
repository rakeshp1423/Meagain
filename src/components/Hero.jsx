// src/components/Hero.jsx
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: <FaGithub />, link: "https://github.com/yourusername" },
  { icon: <FaLinkedin />, link: "https://linkedin.com/in/yourusername" },
  { icon: <FaTwitter />, link: "https://twitter.com/yourusername" },
  { icon: <FaEnvelope />, link: "mailto:youremail@example.com" },
];

const Hero = () => {
  return (
    <section className="relative text-white h-screen flex items-center justify-center px-6 md:px-16 overflow-hidden bg-[#02020A]">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-transparent to-green-500/5"></div>

      <div
        className="flex flex-col-reverse md:flex-row items-center gap-10 w-full max-w-7xl relative z-10"
        id="home"
      >
        {/* Left Text Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <p className="text-lg text-gray-300 mb-2">Hi, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Rakesh Kumar
          </h1>
          <h2 className="text-2xl md:text-4xl text-[#14F195] font-semibold mb-4 h-12">
            <Typewriter
              words={["Web Developer", "Frontend Engineer", "React Specialist"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
          <p className="text-gray-300 max-w-md mb-6">
            I build modern, responsive, and user-focused websites using the
            latest technologies.
          </p>

          <div className="flex justify-center md:justify-start gap-4 mb-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/cv.pdf"
              download
              className="px-6 py-3 bg-[#14F195] text-black rounded-lg font-semibold transition-all duration-300 hover:bg-transparent hover:border hover:text-[#14F195] border border-transparent"
            >
              Download CV
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="px-6 py-3 border border-[#14F195] rounded-lg font-semibold transition-all duration-700 hover:bg-[#14F195] hover:text-black"
            >
              Contact Me
            </motion.a>
          </div>

          {/* Social Links with smooth stagger */}
          <div className="flex justify-center md:justify-start gap-6 text-2xl text-gray-300">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2 * index + 0.5, // staggered delay
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.2 }}
                className="hover:text-[#14F195] transition"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Side Image with Multiple Glass Blobs */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 relative flex justify-center"
        >
          {/* Blob 1 - Top Left */}
          <motion.div
            className="absolute -top-10 -left-10 w-40 h-40 bg-green-400/20 rounded-full backdrop-blur-lg"
            animate={{ x: [0, 15, -15, 0], y: [0, -10, 10, 0] }}
            transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
            style={{ zIndex: -1 }}
          />

          {/* Blob 2 - Bottom Left */}
          <motion.div
            className="absolute bottom-0 -left-16 w-56 h-56 bg-[#14F195]/15 rounded-full backdrop-blur-xl"
            animate={{ x: [0, -10, 10, 0], y: [0, 20, -20, 0] }}
            transition={{ repeat: Infinity, duration: 11, ease: "easeInOut" }}
            style={{ zIndex: -1 }}
          />

          {/* Blob 3 - Top Right */}
          <motion.div
            className="absolute -top-16 right-0 w-48 h-48 bg-green-300/25 rounded-full backdrop-blur-lg"
            animate={{ x: [0, -20, 20, 0], y: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            style={{ zIndex: -1 }}
          />

          {/* Blob 4 - Bottom Right */}
          <motion.div
            className="absolute bottom-10 right-10 w-36 h-36 bg-emerald-400/20 rounded-full backdrop-blur-lg"
            animate={{ x: [0, 10, -10, 0], y: [0, -15, 15, 0] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            style={{ zIndex: -1 }}
          />

          {/* Blob 5 - Behind Center */}
          <motion.div
            className="absolute w-72 h-72 bg-[#14F195]/10 rounded-full backdrop-blur-2xl"
            animate={{ x: [0, 20, -20, 0], y: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
            style={{ zIndex: -1 }}
          />

          {/* Blob 6 - Small Accent */}
          <motion.div
            className="absolute top-1/2 -left-20 w-24 h-24 bg-green-200/20 rounded-full backdrop-blur-md"
            animate={{ x: [0, 12, -12, 0], y: [0, -8, 8, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            style={{ zIndex: -1 }}
          />

          {/* Hero Image */}
          <img
            src="/me.png"
            alt="Developer Illustration"
            className="w-full max-w-md mx-auto relative z-10"
          />
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        href="#about"
        className="absolute bottom-6 flex flex-col items-center text-gray-300 hover:text-[#14F195] transition"
      >
        <span className="text-sm mb-1">Scroll Down</span>
        <FaChevronDown className="animate-bounce text-xl" />
      </motion.a>
    </section>
  );
};

export default Hero;
