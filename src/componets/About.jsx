import React, { useEffect } from "react";
import me from "../assets/me1.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div id="About" className="py-16 px-6 bg-[#1f1f1f] text-white">
      <h1
        data-aos="zoom-in"
        className="text-3xl md:text-4xl font-bold text-center underline mb-10"
      >
        About Me
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
        {/* Image with glow and hover effect */}
        <div className="relative z-10" data-aos="zoom-in">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-[0_15px_50px_rgba(255,255,255,0.1)] border-4 border-yellow-400">
            <img
              src={me}
              alt="Ezekiel"
              className="w-full h-full object-cover scale-110 hover:scale-125 transition duration-700"
            />
          </div>

          {/* Soft glow behind image */}
          <div className="absolute top-1/2 left-1/2 w-56 h-56 md:w-72 md:h-72 rounded-full bg-yellow-400 blur-3xl opacity-20 -z-10 transform -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Text */}
        <div
          data-aos="zoom-in"
          className="max-w-xl text-base md:text-lg leading-relaxed"
        >
          <p>
            Hi, I'm Ezekiel — a Front-End Developer focused on building clean,
            responsive, and user-friendly web applications using React and modern tools.
          </p>
          <p className="mt-4">
            I’ve also started working with the back end: APIs, databases, and authentication.
            My goal is to become a full-stack developer so I can build end-to-end solutions.
          </p>
          <p className="mt-4">
            I learn best by building and solving real problems. I enjoy working with teams that
            push me forward — whether it’s polishing a UI or launching a new feature.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;


