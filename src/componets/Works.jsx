import React from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Real Estate Platform",
    description:
      "A property listing platform where users can browse and search homes with location-based filtering.",
    tech: ["React", "Tailwind", "Firebase"],
    url: "https://real-estate-fkci.vercel.app/",
    github: "https://github.com/OTG12/RealEstate.git",
  },
  {
    title: "SmartCash Banking",
    description:
      "A banking-style web application with account features, authentication, and transaction interfaces.",
    tech: ["React", "Node.js", "MongoDB"],
    url: "https://smartcash1.vercel.app/signup",
    github: "https://github.com/Joanisgoofy/Smartcash1.git",
  },
  {
    title: "OtXpress Delivery",
    description:
      "A delivery booking platform where users can schedule deliveries and track orders in real time.",
    tech: ["React", "Tailwind", "Express"],
    url: "https://otxpress-three.vercel.app/",
    github: "https://github.com/emekadefirst/otxpress.git",
  },
  {
    title: "AI Chat Assistant",
    description:
      "An AI-powered chat interface that responds to user questions using modern AI APIs.",
    tech: ["React", "OpenAI API", "Tailwind"],
    url: "https://ai-chat-eight-teal.vercel.app/",
    github: "https://github.com/OTG12/AI-chat.git",
  },
  {
    title: "DehRealties Landing",
    description:
      "A responsive landing page for a real estate company with smooth animations and optimized layout.",
    tech: ["React", "Tailwind"],
    url: "https://dehrealties.com/",
    github: "https://github.com/OTG12/landingpage.git",
  },
  {
    title: "Portfolio V3",
    description:
      "My personal developer portfolio built with responsive design and modern UI animations.",
    tech: ["React", "Tailwind", "Framer Motion"],
    url: "#",
    github: "https://github.com/OTG12/portfolio",
  },
]

const Works = () => {
  return (
    <section
      id="Work"
      className="py-24 px-6 bg-gradient-to-b from-[#020617] to-[#030b1a]"
    >
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-cyan-300 mb-4">
          Selected Projects
        </h2>

        <p className="text-blue-300/80 max-w-2xl mx-auto mb-16">
          A selection of projects I’ve built using modern web technologies.
          Each one focuses on performance, usability, and clean design.
        </p>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#061029] border border-cyan-500/10 rounded-xl p-6 text-left hover:border-cyan-400/40 transition"
            >
              {/* TITLE */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-cyan-200 hover:text-cyan-400 transition"
              >
                {project.title}
              </a>

              {/* DESCRIPTION */}
              <p className="text-blue-200/70 mt-3 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* LINKS */}
              <div className="flex gap-4 mt-6">

                {project.url !== "#" && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-100 transition"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-blue-300 hover:text-white transition"
                >
                  <Github size={16} />
                  Code
                </a>

              </div>
            </motion.div>
          ))}
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20 text-center">

          <div>
            <div className="text-3xl font-bold text-cyan-300">6+</div>
            <div className="text-blue-300/70 text-sm">Projects Built</div>
          </div>

          <div>
            <div className="text-3xl font-bold text-cyan-300">10+</div>
            <div className="text-blue-300/70 text-sm">Technologies Used</div>
          </div>

          <div>
            <div className="text-3xl font-bold text-cyan-300">1+</div>
            <div className="text-blue-300/70 text-sm">Years Learning</div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Works

