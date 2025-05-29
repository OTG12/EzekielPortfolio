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
    <div id="Home" className="flex flex-col w-full md:flex-row justify-center items-center gap-50 px-6 py-30">
      <div className="text-center md:text-left font-bold text-3xl md:text-4xl">
        <h1 data-aos='zoom-in' className="leading-relaxed text-amber-50">
          Hi,
          <br />
          I'm Ezekiel
          <br />A FrontEnd Developer
        </h1>

        <button data-aos='zoom-in' className="mt-4 px-6 py-2 text-base font-medium bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
          Contact
        </button>
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
          className="w-70 h-100 rounded-2xl py-5 object-cover shadow-lg"
          data-aos='zoom-in'
        />
      </div>
    </div>
  );
};

export default Hero;
