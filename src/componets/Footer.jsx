import React from "react";
import { 
  Heart, 
  Coffee, 
  Code2, 
  Sparkles,
  ChevronUp,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: "Home", href: "#Home" },
    { label: "About", href: "#About" },
    { label: "Skills", href: "#Skills" },
    { label: "Work", href: "#Work" },
    { label: "Certificate", href: "#Certificate" },
    { label: "Contact", href: "#Contact" }
  ];

  const services = [
    "Web Development",
    "UI/UX Design",
    "Fullstack Solutions",
    "Performance Optimization",
    "Technical Consultation"
  ];

  const contactInfo = [
    { icon: <Mail className="w-4 h-4" />, text: "oteneezekiel04@gmail.com", href: "mailto:oteneezekiel04@gmail.com" },
    { icon: <Phone className="w-4 h-4" />, text: "+234 812 001 3544", href: "tel:+2348120013544" }
  ];

  const socialLinks = [
    { icon: <FaGithub className="w-5 h-5" />, label: "GitHub", url: "https://github.com/OTG12", color: "hover:text-gray-300" },
    { icon: <FaLinkedin className="w-5 h-5" />, label: "LinkedIn", url: "https://www.linkedin.com/in/ezekiel-otene-279074364", color: "hover:text-blue-400" }
  ];

  return (
    <footer className="relative mt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/30 to-blue-950" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                  <Code2 className="w-6 h-6 text-cyan-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-100">OT G HIVE Development</h3>
                  <p className="text-sm text-blue-300/60">Premium Digital Solutions</p>
                </div>
              </div>
              
              <p className="text-blue-300/70 text-sm leading-relaxed">
                Crafting exceptional digital experiences with modern technologies and innovative design principles.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3 pt-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-xl bg-blue-900/30 border border-blue-800/30 text-blue-300 ${social.color} transition-all duration-300 hover:border-cyan-500/30`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-cyan-100 mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 text-blue-300/70 hover:text-cyan-300 transition-colors duration-300 group text-sm"
                    >
                      <Sparkles className="w-3 h-3 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-cyan-100 mb-4">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400" />
                    <span className="text-blue-300/70 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-cyan-100 mb-4">Contact Info</h4>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-3 text-blue-300/70 hover:text-cyan-300 transition-colors duration-300 group"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                      <div className="text-cyan-300">
                        {contact.icon}
                      </div>
                    </div>
                    <span className="text-sm">{contact.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-blue-800/50 to-transparent" />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-blue-300/70 text-sm">
                &copy; {new Date().getFullYear()} OT G HIVE Development. All rights reserved.
              </p>
              <p className="text-blue-400/50 text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
                Made with 
                <Heart className="w-3 h-3 text-red-400 animate-pulse" /> 
                and 
                <Coffee className="w-3 h-3 text-amber-500 ml-1" />
              </p>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-900/30 to-cyan-900/20 border border-blue-800/30 hover:border-cyan-500/30 transition-all duration-300"
            >
              <span className="text-sm text-blue-300 group-hover:text-cyan-300 transition-colors">
                Back to Top
              </span>
              <ChevronUp className="w-4 h-4 text-blue-400 group-hover:text-cyan-300 group-hover:-translate-y-0.5 transition-all duration-300" />
            </button>
          </div>

          {/* Final Note */}
          <div className="text-center mt-8 pt-6 border-t border-blue-800/30">
            <p className="text-blue-400/40 text-xs">
              Built with modern technologies • Continuously improving • Always learning
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
