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
  Star
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
      description: "Comprehensive frontend development certification covering modern React, state management, and performance optimization."
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      issuer: "Google",
      date: "Mar 2024",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
      level: "Advanced",
      icon: <Shield className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500",
      description: "Full-stack certification focusing on building scalable web applications with modern backend technologies."
    },
    {
      id: 3,
      title: "UI/UX Design Specialization",
      issuer: "Coursera",
      date: "Jan 2024",
      skills: ["Figma", "User Research", "Wireframing", "Prototyping"],
      level: "Specialist",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-blue-600 to-indigo-400",
      description: "Advanced UI/UX design principles and tools certification for creating exceptional user experiences."
    },
    {
      id: 4,
      title: "JavaScript Algorithms & Data Structures",
      issuer: "freeCodeCamp",
      date: "Nov 2023",
      skills: ["Algorithms", "Data Structures", "Problem Solving", "ES6+"],
      level: "Intermediate",
      icon: <Star className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-400",
      description: "Certification demonstrating proficiency in JavaScript algorithms and data structures implementation."
    }
  ];

  const achievements = [
    { count: "4+", label: "Professional Certifications", icon: <Trophy className="w-5 h-5" /> },
    { count: "300+", label: "Hours of Learning", icon: <BookOpen className="w-5 h-5" /> },
    { count: "100%", label: "Completion Rate", icon: <Award className="w-5 h-5" /> },
    { count: "∞", label: "Continuous Learning", icon: <GraduationCap className="w-5 h-5" /> },
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
          </p>
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

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-900/20 via-cyan-900/10 to-blue-900/20 border border-blue-800/30 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-cyan-100 mb-4">Continuous Learning Philosophy</h3>
              <p className="text-blue-300/80 leading-relaxed">
                We believe in staying at the forefront of technology through continuous education. 
                Each certification represents not just acquired knowledge, but a commitment to 
                delivering solutions built on industry best practices and emerging technologies.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-cyan-900/10 border border-blue-800/30">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-300 mb-2">2024</div>
                  <div className="text-sm text-blue-300/70">Learning Roadmap</div>
                </div>
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
              <h2 className="text-3xl font-bold text-cyan-100 mb-2">
                {certificates[selectedCert].title}
              </h2>
              <p className="text-blue-300">{certificates[selectedCert].issuer}</p>
            </div>
            
            <div className="text-center">
              <p className="text-blue-300/80 text-lg">
                Certificate details and verification information would be displayed here.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Certificate;
