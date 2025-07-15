import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaFigma,
  FaCode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostman,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

export default function Skills() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const skills = [
    { icon: <FaHtml5 className="text-orange-600" />, label: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-600" />, label: "CSS3" },
    { icon: <FaJs className="text-yellow-400" />, label: "JavaScript" },
    { icon: <FaReact className="text-blue-400" />, label: "React" },
    { icon: <SiNextdotjs />, label: "Next.js" },
    { icon: <SiTypescript className="text-blue-600" />, label: "TypeScript" },
    { icon: <SiTailwindcss className="text-teal-500" />, label: "Tailwind CSS" },
    { icon: <FaBootstrap className="text-purple-600" />, label: "Bootstrap" },
    { icon: <FaGitAlt className="text-orange-500" />, label: "Git" },
    { icon: <FaGithub />, label: "GitHub" },
    { icon: <SiPostman className="text-orange-400" />, label: "Postman" },
    { icon: <FaFigma className="text-pink-500" />, label: "Figma" },
    { icon: <FaCode className="text-blue-500" />, label: "VS Code" },
  ];

  return (
    <section id="Skills" className="bg-[#1f1f1f] text-white py-16 px-6">
      <h1
        data-aos="zoom-in"
        className="text-3xl md:text-4xl font-bold text-center underline mb-12"
      >
        Skills
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Text Section */}
        <div data-aos="zoom-in" className="md:w-1/2 text-base md:text-lg leading-relaxed">
          <p>
            I’m a passionate frontend developer with hands on experience in
            building modern, responsive web applications using:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              <strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), React,
              Tailwind CSS, Bootstrap, and React Router.
            </li>
            <li>
              <strong>Tools:</strong> Git, GitHub, VS Code, Chrome DevTools,
              Postman, and Figma.
            </li>
            <li>
              <strong>Currently learning:</strong> Next.js and TypeScript to
              grow into fullstack development.
            </li>
            <li>
              I enjoy solving real world problems through clean code and thrive
              in collaborative team environments.
            </li>
          </ul>
        </div>

        {/* Icon Grid */}
        <div
          data-aos="zoom-in"
          className="md:w-1/2 grid grid-cols-3 sm:grid-cols-4 gap-6 justify-items-center text-gray-300"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center hover:scale-110 transition-transform duration-300"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <span className="text-sm">{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

