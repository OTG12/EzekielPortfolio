import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Works = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const projects = [
    {
      title: "REAL ESTATE WEBSITE",
      url: "https://real-estate-fkci.vercel.app/",
      description: "A property buying and selling platform.",
    },
    {
      title: "BANKING APP",
      url: "https://smartcash1.vercel.app/signup",
      description: "A full-stack banking application.",
    },
    {
      title: "DELIVERY APP",
      url: "https://otxpress-three.vercel.app/",
      description: "OtXpress – a delivery booking and tracking app.",
    },
    {
      title: "AI CHAT APP",
      url: "https://ai-chat-eight-teal.vercel.app/",
      description: "A smart chatbot powered by AI.",
    },
    {
      title: "Landing Page",
      url: "https://dehrealties.com/",
      description: "A Real Estate Landing page.",
    },

  ];

  return (
    <div id="Work" className="py-10 px-6">
      <h1
        data-aos="zoom-in"
        className="font-bold text-center text-3xl underline mb-10"
      >
        Works
      </h1>

      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden"
            data-aos="zoom-in"
          >
            <iframe
              src={project.url}
              title={project.title}
              className="w-full h-48 border-none"
            ></iframe>
            <div className="p-4">
              <h2 className="text-xl text-black font-semibold">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm mt-2 inline-block hover:underline"
              >
                Open in new tab ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;

