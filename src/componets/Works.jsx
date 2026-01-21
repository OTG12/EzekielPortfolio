import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  ExternalLink, 
  Github, 
  Globe, 
  Code2,
  Sparkles,
  Eye,
  ArrowRight,
  FolderOpen,
  Zap,
  Smartphone,
  Shield,
  Database
} from "lucide-react";

const Works = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Real Estate Platform",
      url: "https://real-estate-fkci.vercel.app/",
      github: "https://github.com/OTG12/real-estate",
      description: "A modern property marketplace with advanced filtering and virtual tours.",
      technologies: ["React", "Tailwind CSS", "Firebase", "Mapbox"],
      category: "Fullstack",
      featured: true,
      imageColor: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "SmartCash Banking",
      url: "https://smartcash1.vercel.app/signup",
      github: "https://github.com/OTG12/banking-app",
      description: "Secure full-stack banking application with real-time transactions.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      category: "Fullstack",
      featured: true,
      imageColor: "from-cyan-500/20 to-blue-600/20"
    },
    {
      title: "OtXpress Delivery",
      url: "https://otxpress-three.vercel.app/",
      github: "https://github.com/OTG12/delivery-app",
      description: "Delivery booking and real-time tracking platform.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      category: "Fullstack",
      featured: false,
      imageColor: "from-blue-600/20 to-indigo-500/20"
    },
    {
      title: "AI Chat Assistant",
      url: "https://ai-chat-eight-teal.vercel.app/",
      github: "https://github.com/OTG12/ai-chat",
      description: "Intelligent chatbot powered by modern AI APIs.",
      technologies: ["Next.js", "OpenAI API", "Supabase", "Vercel AI"],
      category: "AI",
      featured: true,
      imageColor: "from-indigo-500/20 to-purple-500/20"
    },
    {
      title: "DehRealties Landing",
      url: "https://dehrealties.com/",
      github: "https://github.com/OTG12/real-estate-landing",
      description: "High-conversion real estate landing page with optimized UX.",
      technologies: ["React", "Framer Motion", "GSAP", "Tailwind"],
      category: "Frontend",
      featured: false,
      imageColor: "from-purple-500/20 to-blue-500/20"
    },
    {
      title: "Portfolio V3",
      url: "#",
      github: "https://github.com/OTG12/portfolio",
      description: "Current portfolio website with modern animations and interactions.",
      technologies: ["React", "Framer Motion", "Tailwind", "Vite"],
      category: "Frontend",
      featured: false,
      imageColor: "from-blue-400/20 to-cyan-400/20"
    }
  ];

  const categories = ["All", "Frontend", "Fullstack", "AI"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div 
      id="Work" 
      ref={containerRef}
      className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 80% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(6, 182, 212, 0.05) 0%, transparent 50%), linear-gradient(to bottom, #0f172a, #1e293b)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-10 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-64 h-64 bg-gradient-to-r from-blue-600/5 to-indigo-500/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
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
            <FolderOpen className="w-4 h-4 text-cyan-300" />
            <span className="text-sm font-medium text-blue-200">Portfolio Showcase</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-blue-100">Featured</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          
          <p className="text-xl text-blue-300/80 max-w-3xl mx-auto">
            A curated selection of projects showcasing modern development practices and innovative solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-blue-900/20 text-blue-300 hover:text-cyan-300 hover:bg-blue-800/30 border border-blue-800/30'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Project Card */}
              <div className="relative h-full rounded-3xl overflow-hidden border border-blue-800/30 bg-gradient-to-br from-blue-900/10 to-cyan-900/5 backdrop-blur-sm group-hover:border-cyan-500/40 transition-all duration-300">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-cyan-500/30">
                      <Sparkles className="w-3 h-3 text-cyan-300" />
                      <span className="text-xs font-medium text-cyan-300">Featured</span>
                    </div>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-3 py-1 rounded-full bg-blue-900/50 backdrop-blur-sm border border-blue-700/30">
                    <span className="text-xs font-medium text-blue-300">{project.category}</span>
                  </div>
                </div>

                {/* Project Image/Preview */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.imageColor}`} />
                  
                  {/* Preview Iframe/Image Placeholder */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 flex items-center justify-center">
                      <Code2 className="w-8 h-8 text-cyan-300" />
                    </div>
                    
                    {/* Live Preview Button */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500/90 to-cyan-500/90 backdrop-blur-sm border border-cyan-500/30 flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm font-medium">Live Preview</span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-cyan-100">{project.title}</h3>
                    <ExternalLink className="w-5 h-5 text-blue-400 group-hover:text-cyan-300 transition-colors" />
                  </div>
                  
                  <p className="text-blue-300/70 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs rounded-full bg-blue-900/30 text-cyan-300 border border-blue-700/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium text-center hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                    >
                      View Live
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-blue-900/30 text-blue-300 text-sm font-medium border border-blue-700/30 hover:border-cyan-500/30 hover:text-cyan-300 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-cyan-500/5 group-hover:to-blue-500/10 rounded-3xl blur-xl transition-all duration-300 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/10 to-cyan-900/5 border border-blue-800/30">
            <div className="text-3xl font-bold text-cyan-300 mb-2">{projects.length}+</div>
            <div className="text-sm text-blue-300/70">Projects Delivered</div>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/10 to-cyan-900/5 border border-blue-800/30">
            <div className="text-3xl font-bold text-cyan-300 mb-2">100%</div>
            <div className="text-sm text-blue-300/70">Client Satisfaction</div>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/10 to-cyan-900/5 border border-blue-800/30">
            <div className="text-3xl font-bold text-cyan-300 mb-2">15+</div>
            <div className="text-sm text-blue-300/70">Technologies Used</div>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/10 to-cyan-900/5 border border-blue-800/30">
            <div className="text-3xl font-bold text-cyan-300 mb-2">∞</div>
            <div className="text-sm text-blue-300/70">Learning Mindset</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <a
            href="#Contact"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="mt-4 text-blue-300/60 text-sm">
            Have an idea? Let's build something amazing together.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Works;

