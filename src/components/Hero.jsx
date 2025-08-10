// src/components/Hero.jsx
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: <FaGithub />, link: "https://github.com/yourusername" },
  { icon: <FaLinkedin />, link: "https://linkedin.com/in/yourusername" },
  { icon: <FaTwitter />, link: "https://twitter.com/yourusername" },
  { icon: <FaEnvelope />, link: "mailto:youremail@example.com" },
];

const Hero = () => {
  return (
    <section className="relative text-white min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-16 overflow-hidden bg-[#02020A]">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-transparent to-green-500/5"></div>

      <div
        className="flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-12 w-full max-w-7xl relative z-10"
        id="home"
      >
        {/* Left Text Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <p className="text-base sm:text-lg text-gray-300 mb-2">Hi, I'm</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-3 sm:mb-4">
            Rakesh Kumar
          </h1>
          <h2 className="text-lg sm:text-2xl md:text-4xl text-[#14F195] font-semibold mb-3 sm:mb-4 min-h-[2rem]">
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
          <p className="text-gray-300 max-w-md mx-auto md:mx-0 mb-6 text-sm sm:text-base">
            I build modern, responsive, and user-focused websites using the latest technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/cv.pdf"
              download
              className="px-4 sm:px-6 py-2 sm:py-3 bg-[#14F195] text-black rounded-lg font-semibold transition-all duration-300 hover:bg-transparent hover:border hover:text-[#14F195] border border-transparent text-sm sm:text-base"
            >
              Download CV
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="px-4 sm:px-6 py-2 sm:py-3 border border-[#14F195] rounded-lg font-semibold transition-all duration-700 hover:bg-[#14F195] hover:text-black text-sm sm:text-base"
            >
              Contact Me
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-5 text-xl sm:text-2xl text-gray-300 flex-wrap">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2 * index + 0.5,
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

        {/* Right Image Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 relative flex justify-center max-w-sm sm:max-w-md lg:max-w-lg"
        >
          {/* Floating Blobs */}
          {[
            { class: "absolute -top-10 -left-10 w-24 sm:w-40 h-24 sm:h-40 bg-green-400/20" },
            { class: "absolute bottom-0 -left-16 w-36 sm:w-56 h-36 sm:h-56 bg-[#14F195]/15" },
            { class: "absolute -top-16 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-green-300/25" },
            { class: "absolute bottom-10 right-10 w-20 sm:w-36 h-20 sm:h-36 bg-emerald-400/20" },
            { class: "absolute w-48 sm:w-72 h-48 sm:h-72 bg-[#14F195]/10" },
            { class: "absolute top-1/2 -left-20 w-16 sm:w-24 h-16 sm:h-24 bg-green-200/20" },
          ].map((blob, i) => (
            <motion.div
              key={i}
              className={`${blob.class} rounded-full backdrop-blur-lg`}
              animate={{
                x: [0, 15, -15, 0],
                y: [0, -10, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 8 + i * 2,
                ease: "easeInOut",
              }}
              style={{ zIndex: -1 }}
            />
          ))}

          {/* Hero Image */}
          <img
            src="/me.png"
            alt="Developer"
            className="w-full h-auto relative z-10 drop-shadow-lg"
          />
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        href="#about"
        className="absolute bottom-6 flex flex-col items-center text-gray-300 hover:text-[#14F195] transition"
      >
        <span className="text-xs sm:text-sm mb-1">Scroll Down</span>
        <FaChevronDown className="animate-bounce text-lg sm:text-xl" />
      </motion.a>
    </section>
  );
};

export default Hero;
