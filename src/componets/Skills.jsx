import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import backgroundImage from '../assets/skills.avif'
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
          easing: 'ease-in-sine',
          delay: 100,
        })
      }, []);
  
  const skills = [
    { icon: <FaHtml5 className="text-orange-600" />, label: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-600" />, label: "CSS3" },
    { icon: <FaJs className="text-yellow-400" />, label: "JavaScript" },
    { icon: <FaReact className="text-blue-400" />, label: "React" },
    { icon: <SiNextdotjs />, label: "Next.js" },
    { icon: <SiTypescript className="text-blue-600" />, label: "TypeScript" },
    {
      icon: <SiTailwindcss className="text-teal-500" />,
      label: "Tailwind CSS",
    },
    { icon: <FaBootstrap className="text-purple-600" />, label: "Bootstrap" },
    { icon: <FaGitAlt className="text-orange-500" />, label: "Git" },
    { icon: <FaGithub />, label: "GitHub" },
    { icon: <SiPostman className="text-orange-400" />, label: "Postman" },
    { icon: <FaFigma className="text-pink-500" />, label: "Figma" },
    { icon: <FaCode className="text-blue-500" />, label: "VS Code" },
  ];
 


  return (
    <>
    <div id='Skills' className="" >
      <div>
        <h1 data-aos='zoom-in' className="font-bold text-center text-3xl underline">Skills</h1>
      </div>
      <div className=" flex flex-col w-full md:flex-row justify-center items-center gap-30 px-10 py-10">

         <div data-aos='zoom-in' className="font-bold text-2xl text-white">
          <p>
            I’m a passionate Frontend Developer with strong skills in HTML5,
            <br />
            CSS3, JavaScript (ES6+), and React.js. I build responsive,
            <br />
            user friendly interfaces using tools like Tailwind CSS, Bootstrap,
            <br />
            and React Router. I’m experienced in working with REST APIs,
            <br />
            managing code with Git/GitHub, and translating designs from Figma
            <br />
            into functional web pages. I’m also familiar with Postman, Chrome
            <br />
            DevTools, and continuously improving by learning Next.js and
            <br />
            TypeScript. I thrive in team settings and enjoy solving real world
            <br />
            problems through clean, efficient code.
          </p>
        </div>



        <div data-aos='zoom-in' className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4 text-center text-2xl text-gray-700">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="text-4xl">{skill.icon}</div>
              <span className="text-sm">{skill.label}</span>
            </div>
          ))}
        </div>
       
      </div>
      </div>
    </>
  );
}
