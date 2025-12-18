import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

// --- WAVE BACKGROUND COMPONENT ---
const WaveBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Wave Configuration - varied width and inverse transparency
    const waves = [
      // High Width, Low Visibility (Background layers)
      { frequency: 0.003, amplitude: 100, speed: 0.092, color: "rgba(34, 197, 94, 0.05)", yOffset: 0.4, width: 20 }, 
      { frequency: 0.004, amplitude: 80, speed: 0.104, color: "rgba(34, 197, 94, 0.1)", yOffset: 0.5, width: 10 }, 
      
      // Medium Width, Medium Visibility
      { frequency: 0.006, amplitude: 60, speed: 0.008, color: "rgba(34, 197, 94, 0.25)", yOffset: 0.5, width: 4 },
      
      // Low Width, High Visibility (Foreground details)
      { frequency: 0.009, amplitude: 40, speed: 0.015, color: "rgba(34, 197, 94, 0.6)", yOffset: 0.5, width: 1.5 }, 
      { frequency: 0.012, amplitude: 25, speed: 0.102, color: "rgba(34, 197, 94, 0.8)", yOffset: 0.52, width: 0.8 }, 
    ];

    let increment = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      increment += 0.02;

      waves.forEach((wave, index) => {
        ctx.beginPath();
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = wave.width; // Using dynamic width

        for (let x = 0; x < canvas.width; x++) {
          const y =
            canvas.height * wave.yOffset +
            Math.sin(x * wave.frequency + increment * wave.speed + index) * wave.amplitude;
          
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

// --- MAIN CONTACT COMPONENT ---
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    // Simulated email sending (Replace with your actual emailjs logic)
    setTimeout(() => {
        setStatus("✅ I got your message, I’ll contact you soon 😊");
        setForm({ name: "", email: "", message: "" });
        setLoading(false);
        setTimeout(() => setStatus(""), 5000);
    }, 2000);
  };

  const socialLinks = [
    {
      icon: <Linkedin size={28} />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/rakesh-kpatra/",
    },
    {
      icon: <Github size={28} />,
      label: "GitHub",
      url: "https://github.com/rakeshp1423",
    },
    {
      icon: <Mail size={28} />,
      label: "Email Me",
      url: "mailto:rrakeshkuma1423@gmail.com",
    },
  ];

  return (
    // Wrapper div handles the background color and positioning of the waves
    <div className="relative min-h-screen bg-[#02020A] overflow-hidden flex items-center justify-center">
      
      {/* The Animated Wave Background */}
      <WaveBackground />

      {/* Your Original Layout */}
      <section id="contact me" className="relative z-10 text-white py-20 px-6 w-full">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Intro + Social Links */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-green-400">
              Let’s Connect
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Got an idea? A project? Or just want to say hi?  
              I’m always open to discussing new opportunities and collaborations.  
              Reach out through the form or find me on these platforms:
            </p>

            <div className="flex flex-col gap-4">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl hover:bg-green-500/20 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-green-400">{link.icon}</span>
                  <span className="text-lg">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.form
            onSubmit={sendEmail}
            className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg space-y-5"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-gray-900/60 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-gray-900/60 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 rounded-lg bg-gray-900/60 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            ></textarea>

            <motion.button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors flex justify-center items-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {status && (
              <p className="text-center mt-2 text-sm text-gray-300">{status}</p>
            )}
          </motion.form>
        </div>
      </section>
    </div>
  );
}