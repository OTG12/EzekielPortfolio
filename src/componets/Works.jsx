import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import image from "../assets/Real.jpeg";
import image1 from "../assets/SmartOt.jpeg";
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
  return (
    <>
      <div id="Work">
        <div className=" ">
          <h1
            data-aos="zoom-in"
            className="font-bold text-center text-3xl underline"
          >
            Works
          </h1>
        </div>

        <div className=" flex flex-col w-full md:flex-row justify-center items-center gap-50 px-6 py-10  ">
          <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden">
       <a
            href="https://real-estate-fkci.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div
              className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 active:scale-95"
              data-aos="zoom-in"
            >
              <img
                src={image}
                alt="Skills image"
                className="w-full h-full object-cover"
                data-aos="zoom-in"
              />
              <div className="p-4" data-aos="zoom-in">
                <h2 className="text-3x1 text-black font-semibold">FRONTEND DEVELOPER</h2>
                <p className="text-gray-600">Tap to see my Real Estate project.</p>
              </div>
            </div>
          </a>
          </div>
        
          <div>
            <a
            href="http://smartcash1.vercel.app/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div
              className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 active:scale-95"
              data-aos="zoom-in"
            >
              <img
                src={image1}
                alt="Skills image"
                className="w-full h-full object-cover"
                data-aos="zoom-in"
              />
              <div className="p-4" data-aos="zoom-in">
                <h2 className="text-3x1 text-black font-semibold">FULL STACK WEB DEVELOPER</h2>
                <p className="text-gray-600">Tap to see My Banking project.</p>
              </div>
            </div>
          </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
