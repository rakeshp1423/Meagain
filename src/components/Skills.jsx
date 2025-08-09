// src/components/Skills.jsx
import React, { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaCode,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiDjango, SiC } from "react-icons/si";

const skillCategories = {
  "Programming Languages": [
    { name: "Python", icon: <FaPython className="text-blue-400" />, level: 90 },
    { name: "C", icon: <SiC className="text-gray-300" />, level: 80 },
    { name: "Java", icon: <FaJava className="text-red-500" />, level: 75 },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 85 },
  ],
  "Frameworks & Libraries": [
    { name: "Django", icon: <SiDjango className="text-green-600" />, level: 85 },
    { name: "React", icon: <FaReact className="text-cyan-400" />, level: 90 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" />, level: 85 },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 60 },
  ],
  "Extras & Tools": [
    { name: "Figma", icon: <SiFigma className="text-pink-500" />, level: 85 },
    { name: "VS Code", icon: <FaCode className="text-blue-400" />, level: 95 },
  ],
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Programming Languages");
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    setVisibleItems([]); // reset animation on category change
    skillCategories[activeCategory].forEach((_, i) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, i]);
      }, i * 200);
    });
  }, [activeCategory]);

  return (
    <section id="skills" className="bg-[#02020A] text-white py-16 px-4 md:px-8 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>

      {/* Category Switch Buttons */}
      <div className="flex justify-center mb-10 space-x-4 flex-wrap gap-2">
        {Object.keys(skillCategories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2  transition-colors duration-300 ${
              activeCategory === category
                ? "bg-green-500 text-black"
                : "bg-transparent hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skillCategories[activeCategory].map((skill, index) => (
          <div
            key={index}
            className={`bg-[#111] p-6 rounded-xl border border-transparent hover:border-green-400 transition-all duration-500 transform ${
              visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center mb-4 space-x-3">
              <div className="text-4xl">{skill.icon}</div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className="bg-green-500 h-2 transition-all duration-1000"
                style={{
                  width: visibleItems.includes(index) ? `${skill.level}%` : "0%",
                }}
              ></div>
            </div>
            <p className="text-sm text-gray-400 mt-2">{skill.level}%</p>
          </div>
        ))}
      </div>
    </section>
  );
}
