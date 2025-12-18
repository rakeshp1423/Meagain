import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Download, Briefcase } from "lucide-react";

// --- BACKGROUND COMPONENT (Constellation Effect) ---
const ParticleNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = window.innerWidth < 768 ? 30 : 60; // Fewer particles on mobile
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5, // Slow velocity
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(100, 255, 218, 0.3)"; // Match #64FFDA
      ctx.strokeStyle = "rgba(100, 255, 218, 0.1)"; // Faint lines

      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw Dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw Connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) { // Connection threshold
            ctx.beginPath();
            ctx.lineWidth = 1 - distance / 100;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-50" />;
};


// --- YOUR ORIGINAL COMPONENT ---
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
      className="relative bg-[#02020A] text-white min-h-screen flex items-center justify-center px-6 md:px-16 overflow-hidden"
    >
      {/* ADDED: Background Element */}
      <ParticleNetwork />

      {/* Existing Content with Z-Index to stay on top */}
      <div className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center gap-12">

        {/* Sliding Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          style={{ x: imgX, opacity: imgOpacity }}
        >
          <div className="relative p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 shadow-lg">
            {/* Added a subtle glow behind the image frame for aesthetics */}
            <div className="absolute inset-0 bg-[#64FFDA] blur-[50px] opacity-10 rounded-2xl -z-10"></div>
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
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-400 mb-8"
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

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a 
             whileHover={{ scale: 1.05 }}
              href="/cv.pdf"
              download
              className="px-4 sm:px-6 py-2 sm:py-3 bg-[#14F195] text-black rounded-lg font-semibold transition-all duration-300 hover:bg-transparent hover:border hover:text-[#14F195] border border-transparent text-sm sm:text-base"
            >
              Download CV
            </a>
            
            <a 
              href="#projects" 
              className="flex items-center gap-2 px-6 py-3 border border-[#64FFDA] text-[#64FFDA] font-bold rounded-lg hover:bg-[#64FFDA]/10 transition-all hover:scale-105"
            >
              <Briefcase size={20} />
              View Projects
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;