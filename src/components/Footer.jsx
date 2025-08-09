import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#02020A] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-green-400">Rakesh Kumar</h2>
          <p className="mt-2 text-gray-400 leading-relaxed">
            Crafting modern, scalable, and user-focused web experiences with a touch of creativity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#about" className="hover:text-green-400 transition">About</a></li>
            <li><a href="#experience" className="hover:text-green-400 transition">Experience</a></li>
            <li><a href="#projects" className="hover:text-green-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-green-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Skills / Tech Stack */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-green-400">Tech Stack</h3>
          <ul className="space-y-2 text-gray-400">
            <li>React.js / Next.js</li>
            <li>Tailwind CSS</li>
            <li>Django / DRF</li>
            <li>PostgreSQL / MySQL</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-green-400">Let's Connect</h3>
          <p className="text-gray-400 mb-4">rrakeshkuma1423@gmail.com</p>
          <div className="flex gap-4">
            <a
              href="mailto:rrakeshkuma1423@gmail.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-green-500 transition-colors"
            >
              <FaEnvelope size={18} />
            </a>
            <a
              href="https://github.com/rakeshp1423"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-green-500 transition-colors"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/rakesh-kpatra/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-green-500 transition-colors"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://x.com/KumarRakesh1423"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-green-500 transition-colors"
            >
              <FaTwitter size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-800 mt-10 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Rakesh Kumar. All Rights Reserved.
      </div>
    </footer>
  );
}
