// src/components/About.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const About = () => {
  const ref = useRef(null);

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
  });

  // Slide in/out transforms
  const rawImgX = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ["-100%", "0%", "0%", "-100%"]);
  const rawTextX = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ["100%", "0%", "0%", "100%"]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Apply spring for smooth, slow animation
  const springConfig = { stiffness: 40, damping: 20, mass: 0.8 };
  const imgX = useSpring(rawImgX, springConfig);
  const textX = useSpring(rawTextX, springConfig);
  const imgOpacity = useSpring(rawOpacity, springConfig);
  const textOpacity = useSpring(rawOpacity, springConfig);

  // Variants for staggered skill fade-in
  const skillsContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.4 } // slower stagger
    }
  };

  const skillItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <section
      id="about me"
      ref={ref}
      className="bg-[#02020A] text-white min-h-screen flex items-center justify-center px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12">

        {/* Sliding Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          style={{ x: imgX, opacity: imgOpacity }}
        >
          <div className="relative p-6 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg">
            <img
              src="/me.png"
              alt="About illustration"
              className="w-full max-w-sm mx-auto rounded-xl"
            />
          </div>
        </motion.div>

        {/* Sliding Text */}
        <motion.div
          className="w-full md:w-1/2"
          style={{ x: textX, opacity: textOpacity }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#64FFDA]">
            About Me
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            I'm a passionate <span className="text-[#64FFDA]">Web Developer</span> and 
            <span className="text-[#64FFDA]"> Creative Designer</span> who loves crafting
            intuitive, dynamic, and visually appealing user experiences.  
            I specialize in building <span className="text-[#64FFDA]">modern web applications </span> 
            using React, Tailwind CSS, and design tools like Figma to bring concepts to life.  
            I believe in writing <span className="text-[#64FFDA]">clean, efficient, and accessible code</span> 
            while blending it with stunning UI/UX design.
          </p>

          {/* Staggered fade-in skills */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-400"
            variants={skillsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {[
              "👨‍💻 2+ Years of Experience",
              "🎨 UI/UX & Graphic Design Skills",
              "⚛️ React & Tailwind Expert",
              "🚀 Passionate about Clean Code",
              "🌏 Based in India"
            ].map((text, index) => (
              <motion.div key={index} variants={skillItem}>
                {text}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
