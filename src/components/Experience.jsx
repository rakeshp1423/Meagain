import React, { useEffect, useState } from "react";

const experiences = [
  {
    title: "Backend Development Lead",
    company: "GDG on Campus",
    date: "September 2024 - March 2025",
    details: [
      "Led a team of backend developers for campus projects.",
      "Organised technical seminars and workshops for students.",
      "Planned and conducted hackathons to promote innovation.",
    ],
  },
  {
    title: "Web Developer",
    company: "Bharat Economic Forum",
    date: "June 14 2024 - August 14 2024",
    details: [
      "Created a landing and sales page for the Health & Pharma industry under BEF.",
      "Contributed to the BEF Conclave website creation.",
      "Led a team of developers to fix bugs.",
    ],
  },
];

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    experiences.forEach((_, i) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, i]);
      }, i * 300); // staggered delay for smoothness
    });
  }, []);

  return (
    <section id="experience" className="bg-[#02020A] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="relative border-l border-gray-700">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-12 ml-6 transform transition-all duration-700 ease-out hover:scale-[1.02] hover:bg-[#111] p-4 rounded-lg ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -left-1.5 border border-gray-900"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                {exp.date}
              </time>
              <h3 className="text-xl font-semibold text-white">
                {exp.title} – <span className="text-green-400">{exp.company}</span>
              </h3>
              <ul className="mt-2 list-disc list-inside text-gray-300 space-y-1">
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
