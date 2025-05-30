import React, { useEffect } from "react";
import me from "../assets/me12.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
  useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 800,
          easing: 'ease-in-sine',
          delay: 100,
        })
      }, [])
  return (
<div id="Home" className="flex flex-col w-full md:flex-row justify-center items-center gap-20 md:gap-50 px-9 py-28 bg-neutral-950">
      <div className="text-center md:text-left font-bold flex flex-col">
        <div data-aos='zoom-in' className="text-amber-50 md:text-left leading-tight text-xl">
          <h2 className="text-2xl mb-3">Hey</h2>
          <h2 className="text-5xl max-w-lg">I'm <span className="text-red-500 ">Ezekiel</span> a Frontend Developer</h2>
          <button className="mt-10 px-6 py-2 w-fit m-auto md:m-0 md:mt-5 text-lg font-medium bg-red-500 text-white rounded-md hover:bg-blue-700 transition duration-300">
            Contact Me
          </button>
        </div>
        <div className="flex justify-center md:justify-start gap-6 mt-4 text-2xl">
          <a
            href="https://github.com/OTG12"
            target="_blank"
            rel="noopener noreferrer"
            data-aos='zoom-in'
          >
            <FaGithub className="hover:text-gray-700 transition bg-gray-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/ezekiel-otene-279074364"
            target="_blank"
            rel="noopener noreferrer"
            data-aos='zoom-in'
          >
            <FaLinkedin className="hover:text-blue-700 transition bg-gray-500" />
          </a>
        </div>
      </div>
      <div>
        <img
          src={me}
          alt="Ezekiel"
          className="w-70 h-100 rounded-2xl object-cover shadow-xl"
          data-aos='zoom-in'
        />
      </div>
    </div>
  );
};

export default Hero;
