import React, { useEffect } from "react";
import me from "../assets/me1.jpeg";
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() => {
      AOS.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-sine',
        delay: 100,
      })
    }, [])

  return (
    < >
    <div id="About">
      <div  className=" ">
        <h1 data-aos='zoom-in'className="font-bold text-center text-3xl underline">About Me</h1>
      </div>
      <div  className=" flex flex-col w-full md:flex-row justify-center items-center gap-50 px-6 py-10  "> 
        <div>
          <img
            src={me}
            alt="Ezekiel"
            className="w-100 h-100 rounded-full object-cover shadow-lg"
            data-aos='zoom-in' 
          />
        </div>

        <div >
          <p data-aos='zoom-in' className=" text-2xl md:text-lg text-white leading-relaxed">
            I'm a passionate Front-End Developer with a strong foundation in <br/>
            React and modern web technologies. I enjoy building user friendly,<br/>
            responsive interfaces and continuously improving my skills through<br/>
            hands on experience. I'm eager to join a team where I can<br/>
            contribute, grow, and learn from others while taking on new<br/>
            challenges in a dynamic environment.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
