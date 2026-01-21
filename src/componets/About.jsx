import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Cpu, 
  Zap, 
  Globe, 
  Shield, 
  Sparkles,
  Target,
  Rocket,
  Brain,
  Users
} from "lucide-react";

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const skills = [
    { icon: <Code2 className="w-6 h-6" />, name: "React Development", level: 95, color: "from-blue-500 to-cyan-400" },
    { icon: <Palette className="w-6 h-6" />, name: "UI/UX Design", level: 88, color: "from-cyan-500 to-blue-400" },
    { icon: <Cpu className="w-6 h-6" />, name: "Fullstack Solutions", level: 85, color: "from-blue-600 to-indigo-400" },
    { icon: <Globe className="w-6 h-6" />, name: "Web Performance", level: 90, color: "from-indigo-500 to-blue-500" },
    { icon: <Shield className="w-6 h-6" />, name: "Security Best Practices", level: 82, color: "from-blue-700 to-cyan-600" },
    { icon: <Zap className="w-6 h-6" />, name: "Optimization", level: 87, color: "from-cyan-600 to-blue-600" },
  ];

  const values = [
    { icon: <Target className="w-8 h-8" />, title: "Precision", desc: "Attention to detail in every line of code" },
    { icon: <Rocket className="w-8 h-8" />, title: "Innovation", desc: "Embracing modern technologies and approaches" },
    { icon: <Brain className="w-8 h-8" />, title: "Problem Solving", desc: "Transforming complex challenges into solutions" },
    { icon: <Users className="w-8 h-8" />, title: "Collaboration", desc: "Working together to achieve excellence" },
  ];

  return (
    <div 
      id="About" 
      ref={containerRef}
      className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(6, 182, 212, 0.08) 0%, transparent 50%), linear-gradient(to bottom, #0f172a, #1e293b)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-600/10 to-indigo-500/10 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
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
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span className="text-sm font-medium text-blue-200">About OT-G</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-blue-100">Crafting Digital</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>
          
          <p className="text-xl text-blue-300/80 max-w-3xl mx-auto">
            Transforming ideas into high-performance digital experiences with precision and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Mission & Values */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Mission Card */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-blue-900/20 to-cyan-900/10 border border-blue-800/30 backdrop-blur-sm">
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-cyan-300" />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-cyan-100 mb-4">Our Mission</h2>
              <p className="text-blue-200/90 leading-relaxed">
                To deliver exceptional digital solutions that not only meet but exceed client expectations, 
                combining technical excellence with innovative design to create products that make a difference.
              </p>
            </div>

            {/* Values Grid */}
            <div>
              <h3 className="text-xl font-bold text-blue-100 mb-6">Core Values</h3>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="group p-4 rounded-xl bg-gradient-to-br from-blue-900/10 to-cyan-900/5 border border-blue-800/20 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 group-hover:scale-110 transition-transform">
                        <div className="text-cyan-300">
                          {value.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-cyan-100">{value.title}</h4>
                        <p className="text-sm text-blue-300/70 mt-1">{value.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-900/10 to-cyan-900/5 border border-blue-800/20">
                <div className="text-3xl font-bold text-cyan-300">3+</div>
                <div className="text-sm text-blue-300/70">Years Experience</div>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-900/10 to-cyan-900/5 border border-blue-800/20">
                <div className="text-3xl font-bold text-cyan-300">50+</div>
                <div className="text-sm text-blue-300/70">Projects Completed</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills & Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* About Text */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-cyan-100">Our Expertise</h2>
              <div className="space-y-4 text-blue-200/90 leading-relaxed">
                <p>
                  At OT-G Development, we specialize in creating modern, scalable web applications 
                  that deliver exceptional user experiences. Our approach combines cutting-edge 
                  technology with thoughtful design to build solutions that stand the test of time.
                </p>
                <p>
                  We believe in writing clean, maintainable code and following industry best practices 
                  to ensure our projects are not only functional but also future-proof and easy to scale.
                </p>
                <p>
                  From concept to deployment, we work closely with our clients to understand their vision 
                  and transform it into a digital reality that drives results.
                </p>
              </div>
            </div>

            {/* Skills Progress */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-blue-100">Technical Excellence</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} bg-opacity-20`}>
                          <div className="text-cyan-300">
                            {skill.icon}
                          </div>
                        </div>
                        <span className="font-medium text-blue-200">{skill.name}</span>
                      </div>
                      <span className="text-sm font-medium text-cyan-300">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-blue-900/30 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="pt-4"
            >
              <a
                href="#Contact"
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                <span>Start Your Project</span>
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-20 pt-10 border-t border-blue-800/30"
        >
          <h3 className="text-xl font-bold text-center text-blue-100 mb-8">Technologies We Use</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "React", color: "from-cyan-500 to-blue-500" },
              { name: "Next.js", color: "from-blue-500 to-indigo-500" },
              { name: "TypeScript", color: "from-blue-600 to-cyan-500" },
              { name: "Tailwind CSS", color: "from-cyan-400 to-blue-400" },
              { name: "Node.js", color: "from-green-500 to-cyan-500" },
              { name: "MongoDB", color: "from-green-400 to-blue-400" },
              { name: "Firebase", color: "from-yellow-500 to-orange-500" },
              { name: "AWS", color: "from-orange-500 to-yellow-500" },
            ].map((tech, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/20 to-cyan-900/10 border border-blue-800/30 backdrop-blur-sm"
              >
                <span className={`bg-gradient-to-r ${tech.color} bg-clip-text text-transparent font-medium`}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;


