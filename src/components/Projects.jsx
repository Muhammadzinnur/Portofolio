import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from "./ProjectCard";

const mockProjects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory, payment integration, and admin dashboard",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    link: "#",
    github: "#",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    title: "SaaS Dashboard",
    description: "Modern analytics dashboard with real-time data visualization and interactive charts",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    link: "#",
    github: "#",
    technologies: ["Next.js", "TypeScript", "Tailwind", "D3.js"]
  },
  {
    title: "Social Media App",
    description: "Real-time social platform with messaging, posts, and live notifications",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    link: "#",
    github: "#",
    technologies: ["React", "Firebase", "Socket.io", "Redux"]
  },
  {
    title: "Portfolio CMS",
    description: "Headless CMS for managing portfolio content with drag-and-drop interface",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
    link: "#",
    github: "#",
    technologies: ["React", "GraphQL", "PostgreSQL"]
  },
  {
    title: "Task Management Tool",
    description: "Collaborative project management platform with Kanban boards and team chat",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    link: "#",
    github: "#",
    technologies: ["Vue.js", "Express", "MongoDB"]
  },
  {
    title: "AI Content Generator",
    description: "AI-powered content creation tool with multiple templates and export options",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    link: "#",
    github: "#",
    technologies: ["React", "OpenAI", "Python", "FastAPI"]
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web Apps', 'Mobile', 'Design'];

  return (
    <section id="projects" className="relative bg-black text-white py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:48px_48px] lg:bg-[size:64px_64px]" />
      
      {/* Gradient Orb */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-3xl" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16"
        >
          <p className="text-blue-500 text-xs sm:text-sm font-semibold mb-3 sm:mb-4 tracking-wider uppercase">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Selected Work
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4">
            A collection of projects that showcase my expertise in building modern web applications
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-10 sm:mb-12 md:mb-14 lg:mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm md:text-base font-medium transition-all duration-200 ${
                filter === category
                  ? 'bg-white text-black'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {mockProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 sm:mt-14 md:mt-16"
        >
          <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">Interested in working together?</p>
          <a
            href="#contact"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
          >
            Start a Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}