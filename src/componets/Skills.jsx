import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Cpu, 
  Zap, 
  Globe, 
  Shield,
  Database,
  Server,
  Layout,
  Terminal,
  Cloud,
  Smartphone,
  Wifi,
  Lock,
  Settings,
  Briefcase,
  Monitor,
  Paintbrush
} from "lucide-react";

const Skills = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6" />,
      color: "from-blue-400 to-cyan-400",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "Next.js", level: 88, icon: "▲" },
        { name: "TypeScript", level: 85, icon: "TS" },
        { name: "Tailwind CSS", level: 92, icon: "🎨" },
      ]
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-6 h-6" />,
      color: "from-cyan-400 to-blue-500",
      skills: [
        { name: "Figma", level: 90, icon: "🎨" },
        { name: "Adobe XD", level: 80, icon: "✏️" },
        { name: "Responsive Design", level: 95, icon: "📱" },
        { name: "Design Systems", level: 85, icon: "📐" },
      ]
    },
    {
      title: "Backend & Database",
      icon: <Server className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-400",
      skills: [
        { name: "Node.js", level: 82, icon: "⚡" },
        { name: "Express", level: 80, icon: "🚂" },
        { name: "MongoDB", level: 78, icon: "🍃" },
        { name: "PostgreSQL", level: 75, icon: "🐘" },
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <Settings className="w-6 h-6" />,
      color: "from-indigo-400 to-blue-600",
      skills: [
        { name: "Git", level: 90, icon: "📊" },
        { name: "Docker", level: 75, icon: "🐳" },
        { name: "AWS", level: 70, icon: "☁️" },
        { name: "CI/CD", level: 78, icon: "⚙️" },
      ]
    }
  ];

  const allSkills = [
    { name: "React", icon: "⚛️", category: "Frontend", level: 95 },
    { name: "Next.js", icon: "▲", category: "Frontend", level: 88 },
    { name: "TypeScript", icon: "TS", category: "Frontend", level: 85 },
    { name: "Tailwind CSS", icon: "🌀", category: "Frontend", level: 92 },
    { name: "JavaScript", icon: "JS", category: "Frontend", level: 90 },
    { name: "HTML5", icon: "🌐", category: "Frontend", level: 95 },
    { name: "CSS3", icon: "🎨", category: "Frontend", level: 93 },
    { name: "Figma", icon: "✏️", category: "Design", level: 90 },
    { name: "Adobe Photoshop", icon: "🖌️", category: "Design", level: 85 },
    { name: "Adobe Illustrator", icon: "✏️", category: "Design", level: 80 },
    { name: "Node.js", icon: "⚡", category: "Backend", level: 82 },
    { name: "Express", icon: "🚂", category: "Backend", level: 80 },
    { name: "MongoDB", icon: "🍃", category: "Database", level: 78 },
    { name: "Git", icon: "📊", category: "Tools", level: 90 },
    { name: "Docker", icon: "🐳", category: "DevOps", level: 75 },
    { name: "AWS", icon: "☁️", category: "Cloud", level: 70 },
  ];

  const expertiseAreas = [
    { 
      title: "Performance Optimization", 
      description: "Creating blazing-fast web applications with optimized load times and smooth interactions",
      icon: <Zap className="w-5 h-5" />
    },
    { 
      title: "Responsive Design", 
      description: "Building interfaces that work flawlessly across all devices and screen sizes",
      icon: <Smartphone className="w-5 h-5" />
    },
    { 
      title: "Security Best Practices", 
      description: "Implementing robust security measures to protect user data and application integrity",
      icon: <Shield className="w-5 h-5" />
    },
    { 
      title: "Modern Workflows", 
      description: "Utilizing cutting-edge development tools and practices for efficient delivery",
      icon: <Terminal className="w-5 h-5" />
    },
  ];

  const serviceSpecializations = [
    {
      title: "Web Development",
      description: "Building and managing custom websites and web applications tailored to specific business needs",
      icon: <Monitor className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces with exceptional user experience",
      icon: <Palette className="w-5 h-5" />,
      color: "from-cyan-500 to-blue-400"
    },
    {
      title: "Graphics Design",
      description: "Professional graphics design including logos, banners, marketing materials, and branding",
      icon: <Paintbrush className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Contract Work",
      description: "Available for project-based contracts and long-term collaborations",
      icon: <Briefcase className="w-5 h-5" />,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Freelance Services",
      description: "Flexible freelance solutions for businesses of all sizes",
      icon: <Code2 className="w-5 h-5" />,
      color: "from-blue-600 to-cyan-500"
    },
    {
      title: "Consultation",
      description: "Technical consultation and architecture planning for digital projects",
      icon: <Cpu className="w-5 h-5" />,
      color: "from-cyan-600 to-blue-600"
    }
  ];

  return (
    <div 
      id="Skills" 
      ref={containerRef}
      className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 10% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 90% 80%, rgba(6, 182, 212, 0.06) 0%, transparent 50%), linear-gradient(to bottom, #0f172a, #1e293b)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-blue-600/5 to-indigo-500/5 rounded-full blur-3xl" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
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
            <Code2 className="w-4 h-4 text-cyan-300" />
            <span className="text-sm font-medium text-blue-200">Technical Expertise</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-blue-100">Technical</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
              Mastery
            </span>
          </h1>
          
          <p className="text-xl text-blue-300/80 max-w-3xl mx-auto">
            A comprehensive suite of modern technologies and methodologies to bring your vision to life.
            <span className="block mt-3 text-cyan-200/90">
              We build websites & web apps, provide expert graphics design, and are open to contracts and freelance opportunities.
            </span>
          </p>
        </motion.div>

        {/* Service Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-center text-cyan-100 mb-8">Service Specializations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceSpecializations.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-blue-900/10 to-cyan-900/5 border border-blue-800/20 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} bg-opacity-20 group-hover:scale-110 transition-transform`}>
                    <div className="text-cyan-300">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-cyan-100 flex-1">{service.title}</h3>
                </div>
                <p className="text-blue-300/70 text-sm leading-relaxed">{service.description}</p>
                
                {/* Highlight key services */}
                {(service.title === "Web Development" || service.title === "Graphics Design" || service.title === "Contract Work" || service.title === "Freelance Services") && (
                  <div className="mt-4 pt-3 border-t border-blue-800/20">
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-900/30 text-cyan-300">
                      {service.title === "Web Development" && "Build & Manage Websites"}
                      {service.title === "Graphics Design" && "Expert Design Services"}
                      {service.title === "Contract Work" && "Available for Projects"}
                      {service.title === "Freelance Services" && "Open for Opportunities"}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              className="group p-6 rounded-3xl bg-gradient-to-br from-blue-900/20 to-cyan-900/10 border border-blue-800/30 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300"
              onMouseEnter={() => setHoveredSkill(category.title)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} bg-opacity-20`}>
                  <div className="text-cyan-300">
                    {category.icon}
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-cyan-100">{category.title}</h2>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="font-medium text-blue-200">{skill.name}</span>
                      </div>
                      <span className="text-sm font-medium text-cyan-300">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-blue-900/30 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: 1.0 + index * 0.1, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-center text-cyan-100 mb-8">Complete Skill Set</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {allSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 1.7 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="group relative px-4 py-2.5 rounded-xl bg-gradient-to-br from-blue-900/10 to-cyan-900/5 border border-blue-800/20 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{skill.icon}</span>
                  <span className="font-medium text-blue-200">{skill.name}</span>
                  <span className="text-xs px-1.5 py-0.5 rounded-full bg-blue-900/30 text-cyan-300">
                    {skill.category}
                  </span>
                </div>
                
                {/* Level indicator on hover */}
                <div className="absolute -bottom-8 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-xs text-center text-cyan-300">
                    Proficiency: {skill.level}%
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-center text-cyan-100 mb-8">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => (
              <div
                key={area.title}
                className="group p-6 rounded-2xl bg-gradient-to-br from-blue-900/10 to-cyan-900/5 border border-blue-800/20 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 group-hover:scale-110 transition-transform">
                    <div className="text-cyan-300">
                      {area.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-cyan-100">{area.title}</h3>
                </div>
                <p className="text-blue-300/70 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Current Focus & Availability */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 2.0 }}
          className="p-8 rounded-3xl bg-gradient-to-r from-blue-900/20 via-cyan-900/10 to-blue-900/20 border border-blue-800/30 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-cyan-100 mb-4">Current Focus & Availability</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                    <Monitor className="w-5 h-5 text-cyan-300" />
                  </div>
                  <div>
                    <p className="text-blue-200/90">
                      <strong className="text-cyan-300">Building & Managing Websites:</strong> Creating custom web solutions that drive business growth
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                    <Paintbrush className="w-5 h-5 text-cyan-300" />
                  </div>
                  <div>
                    <p className="text-blue-200/90">
                      <strong className="text-cyan-300">Expert Graphics Design:</strong> Professional design services for all your visual needs
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500/20 to-blue-500/20">
                    <Briefcase className="w-5 h-5 text-cyan-300" />
                  </div>
                  <div>
                    <p className="text-blue-200/90">
                      <strong className="text-cyan-300">Open to Contracts & Freelance:</strong> Available for new projects and collaborations
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-cyan-100 mb-4">Currently Mastering</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 text-sm font-medium">
                  Cloud Architecture
                </span>
                <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 text-sm font-medium">
                  Advanced TypeScript
                </span>
                <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 text-sm font-medium">
                  Microservices
                </span>
                <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 text-sm font-medium">
                  Scalable Design
                </span>
              </div>
              
              <div className="mt-6 p-4 rounded-xl bg-blue-900/20 border border-blue-500/20">
                <p className="text-sm text-cyan-200/80">
                  💡 <strong>Interested in working together?</strong> Whether it's a website, web app, design project, or ongoing contract work, let's discuss how we can bring your vision to life.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hovered Skill Info */}
        {hoveredSkill && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-900/90 to-cyan-900/90 border border-cyan-500/30 backdrop-blur-xl shadow-2xl"
            style={{ zIndex: 100 }}
          >
            <p className="text-cyan-100 text-sm font-medium">
              Hovering: <span className="text-cyan-300">{hoveredSkill}</span>
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Skills;