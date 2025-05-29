import { useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLinkedin, FaGithub, FaMailBulk , FaWhatsapp} from "react-icons/fa";

const ContactPage = () => {

    useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
  }, [])
 
  return (
     <div id='Contact'  className="min-h-screen flex items-center justify-center ">
      <div className="bg-black p-8 rounded-2xl shadow-xl text-center max-w-md w-full">
        <h1 data-aos='zoom-in' className="text-3xl font-bold mb-4">Connect with Me</h1>
        <p data-aos='zoom-in' className="text-gray-600 mb-6">Find me on these platforms:</p>
        <div className="flex justify-center space-x-6 text-2xl text-blue-600">
          <a
            href="https://www.linkedin.com/in/ezekiel-otene-279074364"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-800 transition-transform transform hover:scale-110"
            data-aos='zoom-in'
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/OTG12/RealEstate"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-800 transition-transform transform hover:scale-110"
            data-aos='zoom-in'
          >
            <FaGithub />
          </a>
          <a
            href="mailto:oteneezekiel04@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-500 transition-transform transform hover:scale-110"
            data-aos='zoom-in'
          >
            <FaMailBulk />
          </a>
          <a
            href="https://wa.me/+2348120013544"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-600 transition-transform transform hover:scale-110"
            data-aos='zoom-in'
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;