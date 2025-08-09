import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Match section IDs
const navLinks = ['Home', 'About Me', 'Skills', 'Experience', 'Projects', 'ContactMe'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(link =>
        document.getElementById(link.toLowerCase())
      );
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && scrollPos >= sections[i].offsetTop) {
          setActiveSection(navLinks[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 font-inter ${
        scrolled ? 'bg-[#02020A] shadow-md' : 'bg-transparent'
      }`}
    >
      {/* Google Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');
        html {
          scroll-behavior: smooth;
        }
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-medium tracking-wide">Rakesh</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-base font-medium">
          {navLinks.map(link => (
            <li
              key={link}
              className={`transition duration-200 cursor-pointer ${
                activeSection === link
                  ? 'text-[#14F195]'
                  : 'hover:text-[#14F195]'
              }`}
            >
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu (Right) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#02020A] text-white transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-medium">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <ul className="flex flex-col gap-6 p-6 text-base font-medium">
          {navLinks.map(link => (
            <li
              key={link}
              className={`transition duration-200 ${
                activeSection === link
                  ? 'text-[#14F195]'
                  : 'hover:text-[#14F195]'
              }`}
            >
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
