import React from "react";
import { 
  Heart, 
  Coffee, 
  Code2, 
  Sparkles,
  ChevronUp,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Monitor,
  Paintbrush,
  Globe,
  Users
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
    { name: "Website Development", icon: <Monitor className="w-3 h-3" /> },
    { name: "Web App Building", icon: <Globe className="w-3 h-3" /> },
    { name: "Graphics Design", icon: <Paintbrush className="w-3 h-3" /> },
    { name: "UI/UX Design", icon: <Sparkles className="w-3 h-3" /> },
    { name: "Contract Work", icon: <Briefcase className="w-3 h-3" /> },
    { name: "Freelance Projects", icon: <Users className="w-3 h-3" /> },
    { name: "Performance Optimization", icon: <ChevronUp className="w-3 h-3" /> },
    { name: "Technical Consultation", icon: <Code2 className="w-3 h-3" /> }
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
                We build and manage websites & web apps, provide expert graphics design, 
                and are open to contracts and freelance opportunities.
                Crafting exceptional digital experiences with modern technologies.
              </p>
              
              {/* Service Highlights */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  Website Building
                </span>
                <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-pink-300 border border-purple-500/30">
                  Graphics Design
                </span>
                <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-500/20 text-blue-300 border border-indigo-500/30">
                  Contract Work
                </span>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 pt-4">
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
              
              {/* Freelance Availability */}
              <div className="mt-6 p-3 rounded-xl bg-gradient-to-br from-blue-900/20 to-cyan-900/10 border border-blue-800/30">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-cyan-300" />
                  <div>
                    <p className="text-sm font-medium text-cyan-100">Available for Work</p>
                    <p className="text-xs text-blue-300/60">Open to contracts & freelance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div>
              <h4 className="text-lg font-semibold text-cyan-100 mb-4">Our Services</h4>
              <div className="grid grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="group flex items-center gap-2 p-2 rounded-lg bg-blue-900/10 hover:bg-blue-900/20 transition-colors duration-300"
                  >
                    <div className={`p-1 rounded-md ${
                      service.name.includes('Website') || service.name.includes('Web App') 
                        ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20' 
                        : service.name.includes('Graphics') 
                          ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20'
                          : service.name.includes('Contract') || service.name.includes('Freelance')
                            ? 'bg-gradient-to-r from-indigo-500/20 to-blue-500/20'
                            : 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20'
                    }`}>
                      <div className="text-cyan-300">
                        {service.icon}
                      </div>
                    </div>
                    <span className="text-blue-300/70 text-xs group-hover:text-cyan-300 transition-colors">
                      {service.name}
                    </span>
                  </div>
                ))}
              </div>
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
                
                {/* Get in Touch Section */}
                <div className="pt-4 mt-4 border-t border-blue-800/30">
                  <p className="text-cyan-100 font-medium text-sm mb-2">Ready to Start Your Project?</p>
                  <p className="text-blue-300/60 text-xs mb-3">
                    Whether it's a website, web app, design project, or contract work, let's discuss!
                  </p>
                  <a
                    href="#Contact"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 border border-blue-500/30 hover:border-cyan-500/40"
                  >
                    <Mail className="w-4 h-4" />
                    Start a Conversation
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-blue-800/50 to-transparent" />

          {/* Service Summary */}
          <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-blue-900/20 via-cyan-900/10 to-blue-900/20 border border-blue-800/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 mb-3">
                  <Monitor className="w-6 h-6 text-cyan-300" />
                </div>
                <h4 className="font-semibold text-cyan-100 mb-1">Website & Web Apps</h4>
                <p className="text-blue-300/70 text-sm">Custom development and management</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 mb-3">
                  <Paintbrush className="w-6 h-6 text-cyan-300" />
                </div>
                <h4 className="font-semibold text-cyan-100 mb-1">Graphics Design</h4>
                <p className="text-blue-300/70 text-sm">Professional design services</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-indigo-500/20 to-blue-500/20 mb-3">
                  <Briefcase className="w-6 h-6 text-cyan-300" />
                </div>
                <h4 className="font-semibold text-cyan-100 mb-1">Contract & Freelance</h4>
                <p className="text-blue-300/70 text-sm">Available for projects of all sizes</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-blue-300/70 text-sm">
                &copy; {new Date().getFullYear()} OT G HIVE Development. All rights reserved.
              </p>
              <p className="text-blue-400/50 text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
                Building websites, creating designs, and accepting contracts with 
                <Heart className="w-3 h-3 text-red-400 animate-pulse mx-1" /> 
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
              Building websites • Creating graphics • Accepting contracts • Always learning • Available for freelance
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
