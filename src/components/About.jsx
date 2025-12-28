import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: "HTML", level: 99, color: "from-orange-400 to-red-500", icon: "🔥" },
    { name: "CSS", level: 98, color: "from-blue-400 to-cyan-500", icon: "🎨" },
    { name: "Tailwind", level: 95, color: "from-cyan-400 to-blue-500", icon: "💨" },
    { name: "Bootstrap", level: 90, color: "from-purple-400 to-indigo-500", icon: "📦" },
    { name: "React", level: 89, color: "from-blue-500 to-cyan-400", icon: "⚛️" },
  ];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 px-6 md:px-20 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Обо мне
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 hover:shadow-purple-500/20 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-4xl shadow-lg">
                  👨‍💻
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Frontend Developer</h3>
                  <p className="text-purple-600 font-medium">Passionate Creator</p>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Я Frontend-разработчик, который превращает идеи в красивые и функциональные веб-приложения. 
              </p>
              <p className="text-gray-600 leading-relaxed">
                Специализируюсь на создании адаптивных интерфейсов, современных лендингов и SPA. 
                Каждая строчка кода написана с заботой о пользователе и производительности.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">15+</div>
                  <div className="text-sm text-gray-600">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">2+</div>
                  <div className="text-sm text-gray-600">Года опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">100%</div>
                  <div className="text-sm text-gray-600">Качество</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Технологии и навыки</h3>
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
                onMouseEnter={() => setHoveredSkill(idx)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="bg-white/80 backdrop-blur-lg rounded-xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className="font-semibold text-gray-800 text-lg">{skill.name}</span>
                  </div>
                  <span className="text-sm font-bold text-gray-600">{skill.level}%</span>
                </div>
                <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 * idx, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 20px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </motion.section>
  );
}