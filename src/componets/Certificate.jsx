import React, { useEffect } from 'react'
import Cr from '../assets/Cr.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Certificate = () => {
     useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 800,
          easing: 'ease-in-sine',
          delay: 100,
        })
      }, [])
  return (
    <div id='Certificate'>
        <div>
            <h1 data-aos='zoom-in'className="font-bold text-center text-3xl underline">Certificate</h1>
        </div>
        <div>
            <img src={Cr}  alt="Skills image"
                className="w-400 h-200 px-9 md:w-full h-full"
                data-aos="zoom-in"/>
        </div>
    </div>
  )
}

export default Certificate