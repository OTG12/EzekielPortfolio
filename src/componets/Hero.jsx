import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/Logo.jpeg";
import { FaGithub, FaLinkedin, FaArrowDown, FaStar, FaCode } from "react-icons/fa";
import { Palette, Cpu, Zap, Sparkles, Globe, Shield } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import '../hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const controls = useAnimation();
  
  const services = [
    { icon: <Globe className="w-5 h-5" />, label: "Web Development", color: "from-blue-400 to-cyan-400" },
    { icon: <Palette className="w-5 h-5" />, label: "UI/UX Design", color: "from-cyan-400 to-blue-500" },
    { icon: <Cpu className="w-5 h-5" />, label: "Fullstack Solutions", color: "from-blue-500 to-indigo-400" },
    { icon: <Shield className="w-5 h-5" />, label: "Secure Code", color: "from-indigo-400 to-blue-600" }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    if (isInView) {
      controls.start("visible");
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isInView, controls]);

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("Contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div 
      id="Home" 
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center px-4 md:px-8 lg:px-16 py-20 md:py-32 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 30% 20%, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 70%), radial-gradient(ellipse at 70% 80%, rgba(37, 99, 235, 0.1) 0%, rgba(37, 99, 235, 0.05) 40%, transparent 70%), linear-gradient(to bottom, #0f172a, #1e293b)'
      }}
    >
      {/* Animated Blue Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-sky-500/10 to-blue-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/5 via-transparent to-blue-400/5 rounded-full blur-2xl" />
        
        {/* Blue Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }} />
      </div>

      {/* Blue Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1]
              }
            }
          }}
          className="text-center lg:text-left space-y-8"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-blue-500/15 to-cyan-500/15 border border-blue-500/30 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-cyan-300 animate-pulse" />
            <span className="text-sm font-medium text-blue-200">Premium Development Services</span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block text-blue-100">Welcome to</span>
                <span className="block mt-4 bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  OT G HIVE Development
                </span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-lg text-blue-300">Crafting Digital Excellence</span>
              </div>
            </div>
            
            {/* Animated Typing */}
            <div className="h-12 md:h-14 flex items-center justify-center lg:justify-start">
              <TypeAnimation
                sequence={[
                  'Enterprise Web Applications',
                  2500,
                  'Modern UI/UX Design',
                  2500,
                  'Scalable Fullstack Solutions',
                  2500,
                  'Performance Optimization',
                  2500,
                ]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
                className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-400"
              />
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-blue-300/80 max-w-2xl leading-relaxed">
              We transform complex challenges into elegant, high-performance digital solutions. 
              Specializing in modern web technologies and cutting-edge design principles.
            </p>
          </div>

          {/* Services Tags */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {services.map((service, index) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={`group relative p-3 rounded-xl bg-gradient-to-br ${service.color}/10 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 backdrop-blur-sm`}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${service.color} bg-opacity-20 group-hover:scale-110 transition-transform`}>
                    <div className="text-blue-300">
                      {service.icon}
                    </div>
                  </div>
                  <span className="text-sm font-medium text-blue-200 text-center">{service.label}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 rounded-xl transition-all duration-300" />
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button
              onClick={handleContactClick}
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Project
                <FaArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
            </button>

            <a
              href="#Work"
              className="group px-8 py-4 rounded-xl border border-blue-500/30 text-blue-300 font-semibold text-lg hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300 hover:bg-blue-500/5"
            >
              <span className="flex items-center justify-center gap-2">
                View Portfolio
                <FaCode className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </span>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-3 gap-4 pt-8"
          >
            {[
              { value: "3+", label: "Years Experience" },
              { value: "50+", label: "Projects Delivered" },
              { value: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-3 rounded-lg bg-blue-900/10 border border-blue-500/10">
                <div className="text-2xl font-bold text-cyan-300">{stat.value}</div>
                <div className="text-sm text-blue-300/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center justify-center lg:justify-start gap-6 pt-6"
          >
            <a
              href="https://github.com/OTG12"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3.5 rounded-xl bg-blue-900/20 backdrop-blur-sm border border-blue-500/30 hover:border-cyan-400/50 transition-all duration-300"
            >
              <FaGithub className="w-6 h-6 text-blue-300 group-hover:text-cyan-300 transition-colors group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-xl transition-all duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/ezekiel-otene-279074364"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3.5 rounded-xl bg-blue-900/20 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300"
            >
              <FaLinkedin className="w-6 h-6 text-blue-300 group-hover:text-cyan-300 transition-colors group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 to-cyan-500/0 group-hover:from-blue-400/10 group-hover:to-cyan-500/10 rounded-xl transition-all duration-300" />
            </a>
          </motion.div>
        </motion.div>

        {/* Logo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center lg:justify-end"
          style={{
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
            transition: 'transform 0.1s linear'
          }}
        >
          {/* Animated Blue Rings */}
          <div className="absolute -inset-8">
            <div className="absolute inset-0 border-2 border-cyan-400/20 rounded-full animate-spin-slow" />
            <div className="absolute inset-4 border-2 border-blue-400/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
            <div className="absolute inset-8 border-2 border-blue-500/10 rounded-full animate-spin-slow" style={{ animationDuration: '30s' }} />
          </div>

          {/* Main Logo Container */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse" />
            
            {/* Logo Frame */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-blue-500/40 backdrop-blur-sm bg-gradient-to-br from-blue-900/30 to-cyan-900/20 shadow-2xl">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-600/10 to-blue-700/10 animate-gradient-shift" />
              
              {/* Logo */}
              <div className="relative w-full h-full flex items-center justify-center p-8">
                <img
                  src={logo}
                  alt="OT-G Logo"
                  className="w-full h-full object-contain filter drop-shadow-2xl transition-transform duration-700 hover:scale-105"
                />
                
                {/* Floating Blue Particles around logo */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full"
                    style={{
                      left: `${30 + Math.cos(i * 45 * Math.PI/180) * 100}px`,
                      top: `${30 + Math.sin(i * 45 * Math.PI/180) * 100}px`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />
              
              {/* Status Badge */}
              <div className="absolute top-6 right-6 px-3 py-1.5 rounded-full bg-blue-900/60 backdrop-blur-sm border border-cyan-500/30">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-medium text-cyan-200">Premium</span>
                </div>
              </div>
            </div>

            {/* Floating Tech Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute -bottom-6 -left-6 px-5 py-3 rounded-2xl bg-gradient-to-br from-blue-900 to-blue-950 border border-blue-700/50 shadow-2xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <FaStar className="w-4 h-4 text-cyan-300 animate-pulse" />
                <div>
                  <p className="text-sm font-semibold text-blue-100">React · Next.js</p>
                  <p className="text-xs text-blue-400">Modern Stack</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, type: "spring" }}
              className="absolute -top-6 -right-6 px-5 py-3 rounded-2xl bg-gradient-to-br from-cyan-900/80 to-blue-900/80 border border-cyan-500/30 shadow-2xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <Zap className="w-4 h-4 text-yellow-300" />
                <div>
                  <p className="text-sm font-semibold text-cyan-100">Fast & Secure</p>
                  <p className="text-xs text-cyan-400">Optimized</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Blue Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-blue-400/70">Explore More</span>
          <div className="w-7 h-12 border-2 border-blue-500/30 rounded-full flex justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-gradient-to-b from-cyan-400 to-blue-500"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
