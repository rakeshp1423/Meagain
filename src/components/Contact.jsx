import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

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

    emailjs
      .send(
        "service_dhtvnrs", // Service ID
        "template_e08gqzq", // Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "_776UVntFEo0Rv8pk" // Public Key
      )
      .then(
        () => {
          setStatus("✅ I got your message, I’ll contact you soon 😊");
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
          setTimeout(() => setStatus(""), 5000);
        },
        (error) => {
          console.error(error);
          setStatus("❌ Failed to send message. Try again later.");
          setLoading(false);
          setTimeout(() => setStatus(""), 5000);
        }
      );
  };

  const socialLinks = [
    {
      icon: <FaLinkedin size={28} />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/your-linkedin",
    },
    {
      icon: <FaGithub size={28} />,
      label: "GitHub",
      url: "https://github.com/your-github",
    },
    {
      icon: <FaEnvelope size={28} />,
      label: "Email Me",
      url: "mailto:your-email@example.com",
    },
  ];

  return (
    <section id="contact" className="bg-[#02020A] text-white py-20 px-6">
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
  );
}
