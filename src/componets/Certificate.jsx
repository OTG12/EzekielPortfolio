import React, { useEffect } from 'react';
import Cr from '../assets/Cr.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Certificate = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <div id='Certificate' className="w-full py-10 px-5 md:px-20">
      <div className="mb-8">
        <h1 data-aos='zoom-in' className="font-bold text-center text-3xl md:text-4xl underline">
          Certificate
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={Cr}
          alt="Skills image"
          className="w-full max-w-[800px] h-auto rounded-lg shadow-lg"
          data-aos="zoom-in"
        />
      </div>
    </div>
  );
};

export default Certificate;
