import React, { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import {
  Award,
  Trophy,
  GraduationCap,
  Calendar,
  BookOpen,
  Code2,
  Monitor,
  Paintbrush,
  Globe,
  X
} from "lucide-react"

const Certificate = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selected, setSelected] = useState(null)

  const certificates = [
    {
      title: "Frontend Development",
      issuer: "Meta",
      date: "Dec 2023",
      description:
        "Course covering modern frontend development with React, component architecture, and performance optimization.",
      skills: ["React", "JavaScript", "UI Design", "Responsive Layout"],
    },
    {
      title: "Full Stack Web Development",
      issuer: "Google",
      date: "Mar 2024",
      description:
        "Full-stack course focused on Node.js, APIs, and database integration for building complete web applications.",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
    },
    {
      title: "UI / UX Design",
      issuer: "Coursera",
      date: "Jan 2024",
      description:
        "Design fundamentals including wireframing, prototyping, and interface design using modern design tools.",
      skills: ["Figma", "User Research", "Prototyping"],
    },
    {
      title: "JavaScript Algorithms",
      issuer: "freeCodeCamp",
      date: "Nov 2023",
      description:
        "Training focused on algorithms, problem solving, and understanding data structures in JavaScript.",
      skills: ["Algorithms", "Data Structures", "ES6"],
    },
    {
      title: "Responsive Web Design",
      issuer: "Udemy",
      date: "Oct 2023",
      description:
        "Course covering responsive layouts using Flexbox, CSS Grid, and mobile-first design.",
      skills: ["Flexbox", "CSS Grid", "Media Queries"],
    },
    {
      title: "Freelancing Fundamentals",
      issuer: "LinkedIn Learning",
      date: "Feb 2024",
      description:
        "Course covering project communication, client workflow, and managing freelance development projects.",
      skills: ["Client Communication", "Project Scope", "Workflow"],
    },
  ]

  const stats = [
    { count: "6+", label: "Certificates", icon: <Trophy size={18} /> },
    { count: "300+", label: "Hours Learning", icon: <BookOpen size={18} /> },
    { count: "10+", label: "Technologies", icon: <Award size={18} /> },
    { count: "2023–Now", label: "Learning Journey", icon: <GraduationCap size={18} /> },
  ]

  const skills = [
    { icon: <Monitor size={18} />, label: "Web Applications" },
    { icon: <Globe size={18} />, label: "Responsive Websites" },
    { icon: <Paintbrush size={18} />, label: "UI Design" },
    { icon: <Code2 size={18} />, label: "Frontend Development" },
  ]

  return (
    <section
      id="Certificate"
      ref={ref}
      className="py-24 px-6 bg-gradient-to-b from-[#020617] to-[#030b1a]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-cyan-300 mb-4">
            Certifications
          </h2>

          <p className="text-blue-300/80 max-w-2xl mx-auto">
            Certifications and learning milestones that support my work as a
            frontend developer. These courses helped strengthen my skills in
            modern web development and interface design.
          </p>
        </motion.div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 text-cyan-300 text-sm"
            >
              {skill.icon}
              {skill.label}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-[#061029] border border-cyan-500/10 text-center"
            >
              <div className="flex justify-center mb-2 text-cyan-300">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-cyan-300">{stat.count}</div>
              <div className="text-sm text-blue-300/70">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="p-6 rounded-xl bg-[#061029] border border-cyan-500/10 hover:border-cyan-400/40 transition cursor-pointer"
              onClick={() => setSelected(cert)}
            >
              <h3 className="text-lg font-semibold text-cyan-200 mb-2">
                {cert.title}
              </h3>

              <div className="flex items-center gap-2 text-sm text-blue-300 mb-3">
                <Calendar size={14} />
                {cert.date}
              </div>

              <p className="text-blue-200/70 text-sm mb-4">
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-6">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setSelected(null)}
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-xl w-full bg-[#020617] border border-cyan-500/20 rounded-2xl p-8"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-cyan-300"
            >
              <X size={20} />
            </button>

            <h3 className="text-2xl font-bold text-cyan-200 mb-2">
              {selected.title}
            </h3>

            <p className="text-blue-300 mb-4">{selected.issuer}</p>

            <p className="text-blue-200/80 mb-6">
              {selected.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {selected.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}

export default Certificate