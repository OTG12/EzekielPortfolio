import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Award,
  Trophy,
  GraduationCap,
  ExternalLink,
  Calendar,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Shield,
  Zap,
  Star,
  Briefcase,
  Monitor,
  Paintbrush,
  Globe,
  Code2,
  Users
} from "lucide-react";

const Certificate = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const [selectedCert, setSelectedCert] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certificates = [
    {
      id: 1,
      title: "Frontend Development Mastery",
      issuer: "Meta",
      date: "Dec 2023",
      skills: ["React", "Advanced JavaScript", "UI/UX", "Responsive Design"],
      level: "Professional",
      icon: <Zap className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-400",
      description: "Comprehensive frontend development certification covering modern React, state management, and performance optimization for building and managing websites & web applications."
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      issuer: "Google",
      date: "Mar 2024",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs", "Web Apps"],
      level: "Advanced",
      icon: <Shield className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500",
      description: "Full-stack certification focusing on building scalable web applications. Skills apply directly to contract and freelance web development projects."
    },
    {
      id: 3,
      title: "UI/UX Design Specialization",
      issuer: "Coursera",
      date: "Jan 2024",
      skills: ["Figma", "User Research", "Wireframing", "Prototyping", "Graphics Design"],
      level: "Specialist",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-blue-600 to-indigo-400",
      description: "Advanced UI/UX design principles and tools certification. Includes professional graphics design skills for websites, apps, and marketing materials."
    },
    {
      id: 4,
      title: "JavaScript Algorithms & Data Structures",
      issuer: "freeCodeCamp",
      date: "Nov 2023",
      skills: ["Algorithms", "Data Structures", "Problem Solving", "ES6+", "Web Development"],
      level: "Intermediate",
      icon: <Star className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-400",
      description: "Certification demonstrating proficiency in JavaScript algorithms and data structures. Essential for building performant websites and web applications."
    },
    {
      id: 5,
      title: "Professional Freelancing",
      issuer: "LinkedIn Learning",
      date: "Feb 2024",
      skills: ["Client Management", "Project Scoping", "Contract Writing", "Freelance Business"],
      level: "Professional",
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-blue-700 to-cyan-600",
      description: "Certification in professional freelancing practices, client management, and contract negotiation. Supports our contract and freelance work approach."
    },
    {
      id: 6,
      title: "Responsive Web Design",
      issuer: "Udemy",
      date: "Oct 2023",
      skills: ["CSS Grid", "Flexbox", "Media Queries", "Mobile-First", "Website Building"],
      level: "Advanced",
      icon: <Monitor className="w-6 h-6" />,
      color: "from-cyan-600 to-blue-600",
      description: "Advanced responsive web design certification. Ensures websites and web apps work perfectly on all devices and screen sizes."
    }
  ];

  const achievements = [
    { count: "6+", label: "Professional Certifications", icon: <Trophy className="w-5 h-5" /> },
    { count: "300+", label: "Hours of Learning", icon: <BookOpen className="w-5 h-5" /> },
    { count: "100%", label: "Completion Rate", icon: <Award className="w-5 h-5" /> },
    { count: "∞", label: "Continuous Learning", icon: <GraduationCap className="w-5 h-5" /> },
  ];

  const serviceBadges = [
    { icon: <Monitor className="w-4 h-4" />, label: "Websites & Web Apps", color: "from-blue-500 to-cyan-400" },
    { icon: <Paintbrush className="w-4 h-4" />, label: "Graphics Design", color: "from-purple-500 to-pink-500" },
    { icon: <Briefcase className="w-4 h-4" />, label: "Contract Work", color: "from-indigo-500 to-blue-500" },
    { icon: <Users className="w-4 h-4" />, label: "Freelance", color: "from-cyan-600 to-blue-600" },
  ];

  const handlePrev = () => {
    setSelectedCert(prev => prev === 0 ? certificates.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setSelectedCert(prev => prev === certificates.length - 1 ? 0 : prev + 1);
  };

  return (
    <div 
      id="Certificate" 
      ref={containerRef}
      className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 60% 40%, rgba(59, 130, 246, 0.06) 0%, transparent 50%), radial-gradient(ellipse at 40% 60%, rgba(6, 182, 212, 0.06) 0%, transparent 50%), linear-gradient(to bottom, #0f172a, #1e293b)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-blue-600/5 to-indigo-500/5 rounded-full blur-3xl" />
        
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/15 to-cyan-500/15 border border-blue-500/30 backdrop-blur-sm mb-6">
            <Award className="w-4 h-4 text-cyan-300" />
            <span className="text-sm font-medium text-blue-200">Accreditations & Achievements</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-blue-100">Certifications &</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
              Credentials
            </span>
          </h1>
          
          <p className="text-xl text-blue-300/80 max-w-3xl mx-auto">
            Validated expertise through industry-recognized certifications and continuous learning achievements.
            <span className="block mt-3 text-cyan-200/90">
              Our certifications support our work in building websites & web apps, graphics design, and contract/freelance services.
            </span>
          </p>
        </motion.div>

        {/* Service Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {serviceBadges.map((badge, index) => (
            <div
              key={index}
              className={`px-4 py-2.5 rounded-full bg-gradient-to-r ${badge.color} bg-opacity-10 border border-blue-800/30 backdrop-blur-sm flex items-center gap-2`}
            >
              <div className={`p-1 rounded-full bg-gradient-to-r ${badge.color} bg-opacity-20`}>
                <div className="text-cyan-300">
                  {badge.icon}
                </div>
              </div>
              <span className="text-sm font-medium text-blue-200">{badge.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Achievements Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/10 to-cyan-900/5 border border-blue-800/30 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                  <div className="text-cyan-300">
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-cyan-300">{achievement.count}</div>
              </div>
              <div className="text-sm text-blue-300/70">{achievement.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Certificates Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 z-20 p-3 rounded-full bg-gradient-to-r from-blue-900/50 to-cyan-900/30 border border-blue-800/30 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5 text-cyan-300" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 z-20 p-3 rounded-full bg-gradient-to-r from-blue-900/50 to-cyan-900/30 border border-blue-800/30 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5 text-cyan-300" />
          </button>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className={`group ${
                  selectedCert === index ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
                onClick={() => {
                  setSelectedCert(index);
                  setIsModalOpen(true);
                }}
              >
                <div className={`relative h-full p-6 rounded-3xl bg-gradient-to-br from-blue-900/20 to-cyan-900/10 border border-blue-800/30 backdrop-blur-sm cursor-pointer hover:border-cyan-500/30 transition-all duration-300 ${
                  selectedCert === index ? 'lg:p-8' : ''
                }`}>
                  {/* Featured Badge */}
                  {selectedCert === index && (
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-cyan-500/30">
                        <Sparkles className="w-3 h-3 text-cyan-300" />
                        <span className="text-xs font-medium text-cyan-300">Featured</span>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col lg:flex-row items-start gap-6">
                    {/* Icon */}
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${cert.color} bg-opacity-20`}>
                      <div className="text-cyan-300">
                        {cert.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-cyan-100 mb-2">{cert.title}</h3>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <GraduationCap className="w-4 h-4 text-blue-400" />
                              <span className="text-sm text-blue-300">{cert.issuer}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-blue-400" />
                              <span className="text-sm text-blue-300">{cert.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                          <span className="text-sm font-medium text-cyan-300">{cert.level}</span>
                        </div>
                      </div>

                      <p className="text-blue-300/70 mb-6 leading-relaxed">
                        {cert.description}
                      </p>

                      {/* Service Relevance */}
                      {(cert.title.includes("Web") || cert.title.includes("Design") || cert.title.includes("Freelance")) && (
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Briefcase className="w-4 h-4 text-cyan-400" />
                            <span className="text-sm font-medium text-cyan-300">Directly Applies To:</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {cert.title.includes("Web") && (
                              <span className="px-2 py-1 text-xs rounded-full bg-blue-900/40 text-cyan-300 border border-cyan-500/30">
                                Website Building
                              </span>
                            )}
                            {cert.title.includes("Design") && (
                              <span className="px-2 py-1 text-xs rounded-full bg-purple-900/40 text-pink-300 border border-purple-500/30">
                                Graphics Design
                              </span>
                            )}
                            {cert.title.includes("Freelance") && (
                              <span className="px-2 py-1 text-xs rounded-full bg-indigo-900/40 text-blue-300 border border-indigo-500/30">
                                Contract Work
                              </span>
                            )}
                            {(cert.title.includes("Frontend") || cert.title.includes("Full Stack")) && (
                              <span className="px-2 py-1 text-xs rounded-full bg-cyan-900/40 text-cyan-300 border border-cyan-500/30">
                                Web Apps
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 text-xs rounded-full bg-blue-900/30 text-cyan-300 border border-blue-700/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* View Details Button */}
                      <div className="mt-6 flex items-center gap-2 text-sm text-cyan-300 font-medium">
                        <ExternalLink className="w-4 h-4" />
                        <span>Click to view details</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-cyan-500/5 group-hover:to-blue-500/10 rounded-3xl blur-xl transition-all duration-300 -z-10" />
              </motion.div>
            ))}
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedCert(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  selectedCert === index 
                    ? 'w-8 bg-gradient-to-r from-blue-500 to-cyan-400' 
                    : 'bg-blue-700/50 hover:bg-blue-600/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Certification Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-900/20 via-cyan-900/10 to-blue-900/20 border border-blue-800/30 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-cyan-100 mb-4">How Certifications Enhance Our Services</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                    <Code2 className="w-5 h-5 text-cyan-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-200 mb-1">Website & Web App Development</h4>
                    <p className="text-blue-300/70 text-sm">
                      Our web development certifications ensure we build modern, scalable, and secure websites and applications.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                    <Paintbrush className="w-5 h-5 text-cyan-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-200 mb-1">Graphics Design Excellence</h4>
                    <p className="text-blue-300/70 text-sm">
                      Design certifications validate our ability to create visually stunning and effective graphics for all your needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500/20 to-blue-500/20">
                    <Briefcase className="w-5 h-5 text-cyan-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-200 mb-1">Professional Contract & Freelance Work</h4>
                    <p className="text-blue-300/70 text-sm">
                      Freelancing and business certifications ensure professional project management and client collaboration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-cyan-900/10 border border-blue-800/30 w-full">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-300 mb-2">2024</div>
                  <div className="text-sm text-blue-300/70 mb-4">Learning Roadmap</div>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 text-sm">
                      Advanced Web
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-pink-300 text-sm">
                      Design Systems
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-500/20 text-blue-300 text-sm">
                      Business Growth
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-cyan-200/80">
                  🎯 <strong>Ready to work with certified professionals?</strong> Our validated expertise ensures quality results for your website, design, or contract project.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal for Certificate Details */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-4xl rounded-3xl bg-gradient-to-br from-blue-950 to-cyan-950 border border-blue-800/50 p-8"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-blue-900/50 hover:bg-blue-800/50 transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-cyan-300 rotate-45" />
            </button>
            
            <div className="text-center mb-8">
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${certificates[selectedCert].color} bg-opacity-20 mb-4`}>
                <div className="text-cyan-300">
                  {certificates[selectedCert].icon}
                </div>
              </div>
              <h2 className="text-3xl font-bold text-cyan-100 mb-2">
                {certificates[selectedCert].title}
              </h2>
              <p className="text-blue-300">{certificates[selectedCert].issuer}</p>
            </div>
            
            <div className="space-y-6">
              <p className="text-blue-300/80 text-lg text-center">
                {certificates[selectedCert].description}
              </p>
              
              {/* Service Application */}
              <div className="p-4 rounded-xl bg-blue-900/30 border border-blue-700/30">
                <h4 className="font-semibold text-cyan-200 mb-3">Applies to Our Services:</h4>
                <div className="flex flex-wrap gap-2">
                  {(certificates[selectedCert].title.includes("Web") || certificates[selectedCert].title.includes("Frontend") || certificates[selectedCert].title.includes("Full Stack")) && (
                    <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 text-sm">
                      Website & Web App Development
                    </span>
                  )}
                  {certificates[selectedCert].title.includes("Design") && (
                    <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-pink-300 text-sm">
                      Graphics Design Services
                    </span>
                  )}
                  {(certificates[selectedCert].title.includes("Freelance") || certificates[selectedCert].title.includes("Professional")) && (
                    <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-500/20 text-blue-300 text-sm">
                      Contract & Freelance Work
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Certificate;
