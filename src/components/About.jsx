import { motion } from "framer-motion";

export default function About() {
  const skills = [
    { name: "HTML & CSS", level: 95 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "React", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Git & GitHub", level: 85 },
    { name: "Responsive Design", level: 90 }
  ];

  const experience = [
    {
      year: "2024 - Present",
      role: "Frontend Developer (Learning & Practice)",
      company: "Personal Projects",
      description: "Creating responsive websites and React applications, focusing on clean UI, animations, and performance."
    },
    {
      year: "2023 - 2024",
      role: "Frontend Student",
      company: "Self-Learning",
      description: "Studied HTML, CSS, JavaScript, React, and modern frontend tools. Built layouts, components, and small projects."
    }
  ];

  return (
    <section id="about" className="relative bg-black text-white py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:48px_48px] lg:bg-[size:64px_64px]" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-500 text-xs sm:text-sm font-semibold mb-3 uppercase">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Frontend
            <br />
            Developer
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              I am a frontend developer focused on building modern, responsive, and visually clean web interfaces.
              I enjoy turning designs into interactive user experiences.
            </p>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              I work mainly with React and Tailwind CSS, paying attention to animations, layout structure,
              and mobile-first design principles.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-gray-500 text-sm">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">1.5+</div>
                <div className="text-gray-500 text-sm">Years Learning</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-gray-500 text-sm">Motivation</div>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6">
              Skills
            </h3>

            <div className="space-y-5">
              {skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 text-sm">
                      {skill.name}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Experience */}
      
      </div>
    </section>
  );
}
