import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  MessageSquare,
  CheckCircle,
  Loader2,
  Clock
} from "lucide-react"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)

    // fake request simulation
    await new Promise((r) => setTimeout(r, 1500))

    setLoading(false)
    setSuccess(true)

    setTimeout(() => {
      setSuccess(false)
      setFormData({
        name: "",
        email: "",
        message: ""
      })
    }, 3000)
  }

  const contactMethods = [
    {
      icon: <Mail size={22} />,
      label: "Email",
      value: "oteneezekiel04@gmail.com",
      link: "mailto:oteneezekiel04@gmail.com"
    },
    {
      icon: <Phone size={22} />,
      label: "Phone",
      value: "+234 812 001 3544",
      link: "tel:+2348120013544"
    },
    {
      icon: <MessageSquare size={22} />,
      label: "WhatsApp",
      value: "Start Chat",
      link: "https://wa.me/2348120013544"
    }
  ]

  const socials = [
    {
      icon: <Github size={20} />,
      label: "GitHub",
      link: "https://github.com/OTG12"
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/ezekiel-otene-279074364"
    }
  ]

  return (
    <section
      id="Contact"
      className="py-24 px-6 bg-gradient-to-b from-[#020617] to-[#030b1a]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-cyan-300 mb-4">
            Get In Touch
          </h2>

          <p className="text-blue-300/80 max-w-2xl mx-auto">
            If you have a project idea or want to collaborate, feel free to send
            a message. I’m always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="p-8 rounded-2xl bg-[#061029] border border-cyan-500/10">

              {success && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#020617] rounded-2xl">
                  <CheckCircle className="text-cyan-300 mb-4" size={40} />
                  <p className="text-cyan-200 font-semibold">
                    Message sent successfully
                  </p>
                </div>
              )}

              <h3 className="text-xl font-semibold text-cyan-200 mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full p-3 rounded-lg bg-[#020617] border border-cyan-500/20 text-blue-200 focus:outline-none focus:border-cyan-400"
                />

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full p-3 rounded-lg bg-[#020617] border border-cyan-500/20 text-blue-200 focus:outline-none focus:border-cyan-400"
                />

                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className="w-full p-3 rounded-lg bg-[#020617] border border-cyan-500/20 text-blue-200 focus:outline-none focus:border-cyan-400"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold hover:opacity-90 transition"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>

              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >

            {/* Methods */}
            <div className="space-y-4">
              {contactMethods.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#061029] border border-cyan-500/10 hover:border-cyan-400/40 transition"
                >
                  <div className="text-cyan-300">{item.icon}</div>

                  <div>
                    <div className="text-sm text-blue-300">
                      {item.label}
                    </div>
                    <div className="text-cyan-200 font-semibold">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Response Time */}
            <div className="p-6 rounded-xl bg-[#061029] border border-cyan-500/10">
              <div className="flex items-center gap-3 mb-2">
                <Clock size={18} className="text-cyan-300" />
                <span className="text-cyan-200 font-semibold">
                  Response Time
                </span>
              </div>

              <p className="text-blue-300/70 text-sm">
                I usually respond within 24 hours.
              </p>
            </div>

            {/* Socials */}
            <div className="p-6 rounded-xl bg-[#061029] border border-cyan-500/10">
              <h4 className="text-cyan-200 font-semibold mb-4">
                Connect
              </h4>

              <div className="flex gap-4">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-400/10 text-cyan-300 hover:bg-cyan-400/20 transition"
                  >
                    {social.icon}
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage