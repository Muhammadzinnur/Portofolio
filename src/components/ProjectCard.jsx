import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ title, description, image, link, technologies, github }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      className="group relative bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
        <motion.img
          src={image}
          alt={title}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full object-cover opacity-80"
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-60'}`} />
        
        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.2 }}
          className="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-1.5 sm:gap-2"
        >
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>
          )}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
          </a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 md:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2 group-hover:text-blue-400 transition-colors line-clamp-1">
          {title}
        </h3>
        
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/5 text-gray-300 text-[10px] sm:text-xs rounded-md sm:rounded-lg border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Border Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}