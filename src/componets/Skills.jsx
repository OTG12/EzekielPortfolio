import React from "react";

const Skills = () => {
  const techStack = {
    frontend: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
    backend: ["Django", "Node.js", "REST APIs"],
    tools: ["Git", "GitHub", "Figma", "VS Code"]
  };

  const services = [
    {
      title: "Web Development",
      description:
        "Designing and building responsive websites and web applications for businesses and individuals.",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing clean and easy-to-use interfaces that improve how people interact with digital products.",
    },
    {
      title: "Graphics Design",
      description:
        "Creating visual designs such as logos, banners, and branding materials.",
    },
    {
      title: "Contract Work",
      description:
        "Available for project-based contracts and longer collaborations with teams or companies.",
    },
    {
      title: "Freelance Services",
      description:
        "Providing flexible freelance support for startups, businesses, and personal projects.",
    },
    {
      title: "Consultation",
      description:
        "Helping plan the structure and technical direction of websites and digital products.",
    },
  ];

  const expertise = [
    {
      title: "Performance",
      description: "Building websites that load quickly and run smoothly.",
    },
    {
      title: "Responsive Design",
      description:
        "Making sure websites look good and work well on phones, tablets, and desktops.",
    },
    {
      title: "Security Practices",
      description:
        "Following safe coding practices to protect applications and user data.",
    },
    {
      title: "Modern Development",
      description:
        "Using current tools and workflows to build reliable and maintainable projects.",
    },
  ];

  const learning = [
    "React Performance",
    "Advanced JavaScript",
    "Next.js Architecture",
    "UI Systems",
  ];

  return (
    <section className="py-20 px-6 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            These are the tools and technologies I use to build modern
            websites and web applications. I also work on UI design,
            graphics design, and I’m available for freelance or contract projects.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">

          {/* Frontend */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.frontend.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-800 px-4 py-2 rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Backend</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.backend.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-800 px-4 py-2 rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Tools</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.tools.map((tool, index) => (
                <span
                  key={index}
                  className="bg-gray-800 px-4 py-2 rounded-lg text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Services
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition"
              >
                <h4 className="text-lg font-semibold mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Expertise
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800"
              >
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Currently Learning */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">
            Currently Learning
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {learning.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-600 px-4 py-2 rounded-lg text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;