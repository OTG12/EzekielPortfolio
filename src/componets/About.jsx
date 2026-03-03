import React, { useRef } from "react";
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
  Users,
  Briefcase,
  Monitor,
  Paintbrush
} from "lucide-react";

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const skills = [
    { icon: <Code2 className="w-6 h-6" />, name: "React Development", level: 95, color: "from-blue-500 to-cyan-400" },
    { icon: <Palette className="w-6 h-6" />, name: "UI Design", level: 88, color: "from-cyan-500 to-blue-400" },
    { icon: <Cpu className="w-6 h-6" />, name: "Full-Stack Development", level: 85, color: "from-blue-600 to-indigo-400" },
    { icon: <Globe className="w-6 h-6" />, name: "Web Performance", level: 90, color: "from-indigo-500 to-blue-500" },
    { icon: <Shield className="w-6 h-6" />, name: "Security Practices", level: 82, color: "from-blue-700 to-cyan-600" },
    { icon: <Zap className="w-6 h-6" />, name: "Optimization", level: 87, color: "from-cyan-600 to-blue-600" },
  ];

  const values = [
    { icon: <Target className="w-8 h-8" />, title: "Attention to Detail", desc: "Clean structure, readable code, and thoughtful design." },
    { icon: <Rocket className="w-8 h-8" />, title: "Constant Improvement", desc: "Learning new tools and improving how things are built." },
    { icon: <Brain className="w-8 h-8" />, title: "Problem Solving", desc: "Breaking complex ideas into simple working solutions." },
    { icon: <Users className="w-8 h-8" />, title: "Collaboration", desc: "Working closely with clients and teams to reach the goal." },
  ];

  return (
    <div
      id="About"
      ref={containerRef}
      className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span className="text-sm text-blue-200">About OT G HIVE</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-blue-100">
            Building Modern Web Experiences
          </h1>

          <p className="text-lg text-blue-300/80 max-w-3xl mx-auto">
            We design and build websites and web applications that are fast,
            reliable, and easy to use.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            {/* Mission */}
            <div className="p-8 rounded-3xl border border-blue-800/30 bg-blue-900/10">
              <h2 className="text-2xl font-bold text-cyan-100 mb-4">
                What We Do
              </h2>

              <p className="text-blue-200/90 leading-relaxed">
                OT G HIVE focuses on building modern websites and web
                applications for businesses and individuals.  
                Our goal is simple: create digital products that look good,
                perform well, and actually help people achieve their goals.
              </p>
            </div>

            {/* Services */}
            <div className="p-6 rounded-3xl border border-blue-800/30 bg-blue-900/10">
              <h3 className="text-xl font-bold text-cyan-100 mb-6">
                Services
              </h3>

              <div className="space-y-4">

                <div className="flex items-start gap-4">
                  <Monitor className="w-5 h-5 text-cyan-300" />
                  <div>
                    <h4 className="font-semibold text-cyan-100">
                      Website & Web App Development
                    </h4>
                    <p className="text-sm text-blue-300/70">
                      Custom websites and applications built with modern
                      frameworks like React and Next.js.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Paintbrush className="w-5 h-5 text-cyan-300" />
                  <div>
                    <h4 className="font-semibold text-cyan-100">
                      Graphic & UI Design
                    </h4>
                    <p className="text-sm text-blue-300/70">
                      Clean visual design for websites, brands, and digital
                      products.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Briefcase className="w-5 h-5 text-cyan-300" />
                  <div>
                    <h4 className="font-semibold text-cyan-100">
                      Freelance & Contract Work
                    </h4>
                    <p className="text-sm text-blue-300/70">
                      Open to freelance work and long-term collaborations.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-xl font-bold text-blue-100 mb-6">
                How We Work
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl border border-blue-800/20 bg-blue-900/10"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-cyan-300">
                        {value.icon}
                      </div>

                      <div>
                        <h4 className="font-semibold text-cyan-100">
                          {value.title}
                        </h4>
                        <p className="text-sm text-blue-300/70">
                          {value.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">

            {/* About text */}
            <div className="space-y-4 text-blue-200/90">
              <h2 className="text-2xl font-bold text-cyan-100">
                Our Approach
              </h2>

              <p>
                We focus on building websites that are clean, responsive,
                and easy to maintain. Good development is not just about
                writing code. It’s about building something people enjoy using.
              </p>

              <p>
                Our work usually involves React, Next.js, and modern frontend
                tools that allow us to create fast, scalable applications.
              </p>

              <p>
                We also combine development with design so the final product
                feels complete, both technically and visually.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-100">
                Technical Skills
              </h3>

              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-blue-200">{skill.name}</span>
                    <span className="text-cyan-300">{skill.level}%</span>
                  </div>

                  <div className="h-2 bg-blue-900/30 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.2 }}
                      className={`h-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="#Contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
              >
                Start a Project
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;