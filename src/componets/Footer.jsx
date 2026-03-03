import React from "react";
import {
  Heart,
  Coffee,
  Code2,
  Sparkles,
  ChevronUp,
  Mail,
  Phone,
  Briefcase,
  Monitor,
  Paintbrush,
  Globe,
  Users
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
    {
      icon: <Mail className="w-4 h-4" />,
      text: "oteneezekiel04@gmail.com",
      href: "mailto:oteneezekiel04@gmail.com"
    },
    {
      icon: <Phone className="w-4 h-4" />,
      text: "+234 812 001 3544",
      href: "tel:+2348120013544"
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      label: "GitHub",
      url: "https://github.com/OTG12",
      color: "hover:text-gray-300"
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/ezekiel-otene-279074364",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <footer className="relative mt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/30 to-blue-950" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                <Code2 className="w-6 h-6 text-cyan-300" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-cyan-100">
                  OT G HIVE Development
                </h3>
                <p className="text-sm text-blue-300/60">
                  Web Development & Design
                </p>
              </div>
            </div>

            <p className="text-blue-300/70 text-sm leading-relaxed">
              I build modern websites and web apps, design user interfaces,
              and work on freelance and contract projects.
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-cyan-300 border border-cyan-500/30">
                Web Development
              </span>

              <span className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-pink-300 border border-purple-500/30">
                UI Design
              </span>

              <span className="px-2 py-1 text-xs rounded-full bg-indigo-500/20 text-blue-300 border border-indigo-500/30">
                Freelance
              </span>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl bg-blue-900/30 border border-blue-800/30 text-blue-300 ${social.color} transition`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold text-cyan-100 mb-4">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-blue-300/70 hover:text-cyan-300 text-sm transition"
                  >
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-3 rounded-xl bg-blue-900/20 border border-blue-800/30">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-cyan-300" />
                <div>
                  <p className="text-sm font-medium text-cyan-100">
                    Available for Work
                  </p>
                  <p className="text-xs text-blue-300/60">
                    Freelance & contract projects
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-lg font-semibold text-cyan-100 mb-4">
              Services
            </h4>

            <div className="grid grid-cols-2 gap-3">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-2 rounded-lg bg-blue-900/10 hover:bg-blue-900/20 transition"
                >
                  <div className="p-1 rounded bg-blue-500/20 text-cyan-300">
                    {service.icon}
                  </div>

                  <span className="text-blue-300/70 text-xs">
                    {service.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-semibold text-cyan-100 mb-4">
              Contact
            </h4>

            <div className="space-y-4">
              {contactInfo.map((contact, i) => (
                <a
                  key={i}
                  href={contact.href}
                  className="flex items-center gap-3 text-blue-300/70 hover:text-cyan-300 transition"
                >
                  <div className="p-2 rounded-lg bg-blue-500/20 text-cyan-300">
                    {contact.icon}
                  </div>

                  <span className="text-sm">{contact.text}</span>
                </a>
              ))}

              <div className="pt-4 border-t border-blue-800/30">
                <p className="text-cyan-100 font-medium text-sm mb-2">
                  Have a project?
                </p>

                <a
                  href="#Contact"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-xl bg-blue-500/20 text-cyan-300 border border-blue-500/30 hover:bg-blue-500/30 transition"
                >
                  <Mail className="w-4 h-4" />
                  Send a Message
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-blue-800/50 to-transparent" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="text-center md:text-left">
            <p className="text-blue-300/70 text-sm">
              © {new Date().getFullYear()} OT G HIVE Development
            </p>

            <p className="text-blue-400/50 text-xs flex items-center gap-1 justify-center md:justify-start">
              Built with
              <Heart className="w-3 h-3 text-red-400 animate-pulse mx-1" />
              and
              <Coffee className="w-3 h-3 text-amber-500 ml-1" />
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-900/30 border border-blue-800/30 hover:border-cyan-500/30 transition"
          >
            <span className="text-sm text-blue-300">Back to Top</span>
            <ChevronUp className="w-4 h-4 text-blue-400" />
          </button>

        </div>

        <div className="text-center mt-8 pt-6 border-t border-blue-800/30">
          <p className="text-blue-400/40 text-xs">
            Web Development • UI Design • Freelance • Always learning
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
