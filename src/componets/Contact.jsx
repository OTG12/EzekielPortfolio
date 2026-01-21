import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Github, 
  MessageSquare,
  Clock,
  Sparkles,
  CheckCircle,
  Loader2,
  ExternalLink,
  Zap
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeContact, setActiveContact] = useState(null);

  const formRef = useRef(null);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      value: "oteneezekiel04@gmail.com",
      action: "mailto:oteneezekiel04@gmail.com",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Number",
      value: "+234 812 001 3544",
      action: "tel:+2348120013544",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "WhatsApp",
      value: "Chat Directly",
      action: "https://wa.me/+2348120013544",
      color: "from-blue-600 to-indigo-400"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/ezekiel-otene-279074364",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      url: "https://github.com/OTG12",
      color: "from-gray-700 to-gray-900"
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div 
      id="Contact" 
      className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 20% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(6, 182, 212, 0.08) 0%, transparent 50%), linear-gradient(to bottom, #0f172a, #1e293b)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/5 to-indigo-500/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/15 to-cyan-500/15 border border-blue-500/30 backdrop-blur-sm mb-6">
            <MessageSquare className="w-4 h-4 text-cyan-300" />
            <span className="text-sm font-medium text-blue-200">Get In Touch</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-blue-100">Let's Build</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h1>
          
          <p className="text-xl text-blue-300/80 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your vision to life with modern solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-900/20 to-cyan-900/10 border border-blue-800/30 backdrop-blur-sm">
              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-950/95 to-cyan-950/95 backdrop-blur-sm rounded-3xl z-10"
                >
                  <div className="text-center p-8">
                    <CheckCircle className="w-16 h-16 text-cyan-300 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-cyan-100 mb-2">Message Sent!</h3>
                    <p className="text-blue-300/80">We'll get back to you within 24 hours.</p>
                  </div>
                </motion.div>
              )}

              <h2 className="text-2xl font-bold text-cyan-100 mb-8">Send a Message</h2>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-blue-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-blue-900/30 border border-blue-800/50 text-blue-100 placeholder-blue-400/50 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-blue-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-blue-900/30 border border-blue-800/50 text-blue-100 placeholder-blue-400/50 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-blue-900/30 border border-blue-800/50 text-blue-100 placeholder-blue-400/50 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl bg-blue-900/30 border border-blue-800/50 text-blue-100 placeholder-blue-400/50 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 disabled:opacity-70"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-cyan-100 mb-6">Direct Contact</h3>
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  href={contact.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setActiveContact(index)}
                  onMouseLeave={() => setActiveContact(null)}
                  className={`group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-blue-900/10 to-cyan-900/5 border border-blue-800/30 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer ${
                    activeContact === index ? 'scale-[1.02]' : ''
                  }`}
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${contact.color} bg-opacity-20 group-hover:scale-110 transition-transform`}>
                    <div className="text-cyan-300">
                      {contact.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-blue-300">{contact.title}</div>
                    <div className="text-lg font-semibold text-cyan-100">{contact.value}</div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-blue-400 group-hover:text-cyan-300 transition-colors opacity-0 group-hover:opacity-100" />
                </motion.a>
              ))}
            </div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/10 to-cyan-900/5 border border-blue-800/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                  <Clock className="w-5 h-5 text-cyan-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-100">Response Time</h4>
                  <p className="text-sm text-blue-300/70">Typically within 24 hours</p>
                </div>
              </div>
              <div className="h-2 rounded-full bg-blue-900/30 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 2, delay: 1 }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                />
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/10 to-cyan-900/5 border border-blue-800/30"
            >
              <h4 className="font-semibold text-cyan-100 mb-4">Connect Socially</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex-1 p-3 rounded-xl bg-gradient-to-br from-blue-900/20 to-cyan-900/10 border border-blue-800/30 hover:border-cyan-500/30 transition-all duration-300 text-center"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <div className={`p-1.5 rounded-lg bg-gradient-to-r ${social.color} bg-opacity-20`}>
                        <div className="text-cyan-300">
                          {social.icon}
                        </div>
                      </div>
                      <span className="text-sm font-medium text-blue-300 group-hover:text-cyan-300 transition-colors">
                        {social.label}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="p-6 rounded-2xl bg-gradient-to-r from-blue-900/20 via-cyan-900/10 to-blue-900/20 border border-blue-800/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-5 h-5 text-cyan-300" />
                <h4 className="font-semibold text-cyan-100">Why Work With Us</h4>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-blue-300/80">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span>Modern technology stack</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-blue-300/80">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span>Clean, maintainable code</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-blue-300/80">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span>Timely project delivery</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-blue-300/80">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span>Continuous communication</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;