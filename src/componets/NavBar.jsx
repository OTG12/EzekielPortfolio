import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import logo from "../assets/Logo.jpeg";
import "../navbar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const menuRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Update active section based on scroll position
      const sections = ["Home", "About", "Skills", "Work", "Certificate", "Contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (section, e) => {
    e.preventDefault();
    setActiveSection(section);
    setIsOpen(false);
    
    const element = document.getElementById(section);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { id: "Home", label: "Home" },
    { id: "About", label: "About" },
    { id: "Skills", label: "Skills" },
    { id: "Work", label: "Work" },
    { id: "Certificate", label: "Certificate" },
    { id: "Contact", label: "Contact" }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          scrolled 
            ? 'bg-blue-950/95 backdrop-blur-xl shadow-lg border-b border-blue-800/30' 
            : 'bg-transparent'
        }`}
        style={{
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none'
        }}
      >
        <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
          {/* Logo with blue glow effect */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              <img
                src={logo}
                alt="OT-G Logo"
                className="relative h-10 w-auto transition-transform duration-300 group-hover:scale-105 cursor-pointer"
              />
            </div>
            <span className={`hidden sm:inline text-lg font-semibold tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-cyan-100' : 'text-blue-100'
            }`}>
              OT-G
            </span>
          </div>

          {/* Desktop Navigation - Blue Theme */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(item.id, e)}
                className={`relative px-4 py-2.5 rounded-lg transition-all duration-300 group ${
                  scrolled ? 'text-blue-200 hover:text-cyan-100' : 'text-blue-100 hover:text-white'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Active indicator - Blue gradient */}
                {activeSection === item.id && (
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-lg" />
                )}
                
                {/* Hover effect - Blue glow */}
                <span className="absolute inset-0 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg transition-all duration-300" />
                
                {/* Bottom indicator - Blue to Cyan */}
                <span className={`absolute bottom-0 left-1/2 w-1.5 h-1.5 rounded-full -translate-x-1/2 transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'scale-100 bg-gradient-to-r from-blue-400 to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]' 
                    : 'scale-0 group-hover:scale-100 bg-blue-400'
                }`} />
              </a>
            ))}
            
            {/* Get Started Button */}
            <a
              href="#Contact"
              onClick={(e) => handleNavClick("Contact", e)}
              className="ml-4 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Button - Blue Theme */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`relative p-2.5 rounded-xl transition-all duration-300 ${
                scrolled 
                  ? 'bg-blue-900/40 hover:bg-blue-800/40 text-cyan-200' 
                  : 'bg-blue-950/30 hover:bg-blue-900/40 text-blue-100'
              } backdrop-blur-sm border border-blue-800/30`}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                {isOpen ? (
                  <X className="absolute inset-0 w-6 h-6 animate-spin-in" />
                ) : (
                  <Menu className="absolute inset-0 w-6 h-6 animate-fade-in" />
                )}
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Blue Theme */}
      <div 
        ref={menuRef}
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop with blue gradient */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/90 to-cyan-950/95 backdrop-blur-xl transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content - Blue Glassmorphism */}
        <div 
          className={`absolute top-0 right-0 h-full w-80 max-w-full bg-gradient-to-b from-blue-950 to-cyan-950 shadow-2xl border-l border-blue-800/50 transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-blue-800/50">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur opacity-30" />
                <img
                  src={logo}
                  alt="OT-G Logo"
                  className="relative h-10 w-auto"
                />
              </div>
              <span className="text-cyan-100 text-lg font-semibold">OT-G</span>
            </div>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-xl bg-blue-900/50 hover:bg-blue-800/50 transition-colors duration-300 border border-blue-700/50"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-cyan-300" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="p-4 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(item.id, e)}
                className={`group relative flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border border-blue-500/30' 
                    : 'hover:bg-blue-900/30 border border-transparent'
                } active:scale-[0.98]`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center space-x-3">
                  <span className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'bg-gradient-to-r from-blue-400 to-cyan-400 scale-100 shadow-[0_0_8px_rgba(59,130,246,0.5)]' 
                      : 'bg-blue-600 group-hover:bg-blue-500 scale-75'
                  }`} />
                  <span className={`text-lg font-medium transition-colors duration-300 ${
                    activeSection === item.id 
                      ? 'text-cyan-100' 
                      : 'text-blue-200 group-hover:text-cyan-100'
                  }`}>
                    {item.label}
                  </span>
                </div>
                <ChevronRight className={`w-5 h-5 transition-colors duration-300 transform group-hover:translate-x-1 ${
                  activeSection === item.id ? 'text-cyan-300' : 'text-blue-500 group-hover:text-cyan-300'
                }`} />
                
                {/* Hover effect - Blue glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-cyan-500/5 group-hover:to-blue-500/10 transition-all duration-300" />
              </a>
            ))}
            
            {/* Mobile CTA Button */}
            <div className="pt-6 px-4">
              <a
                href="#Contact"
                onClick={(e) => handleNavClick("Contact", e)}
                className="block w-full py-3.5 text-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-base hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 active:scale-[0.98]"
              >
                Start Your Project
              </a>
            </div>
          </nav>

          {/* Menu Footer with social links */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-blue-800/50">
            <div className="text-center mb-4">
              <p className="text-sm text-blue-300">Connect with us</p>
            </div>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/OTG12"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-blue-900/40 hover:bg-blue-800/50 transition-colors duration-300 border border-blue-700/50"
              >
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/ezekiel-otene-279074364"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-blue-900/40 hover:bg-blue-800/50 transition-colors duration-300 border border-blue-700/50"
              >
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;