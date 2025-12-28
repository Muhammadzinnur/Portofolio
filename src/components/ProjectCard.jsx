import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, image, link, technologies }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      data-aos="fade-up"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-white"
    >
      {/* Image Container with Overlay */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        
        {/* Animated Border on Hover */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500 transition-all duration-500 rounded-2xl"></div>
        
        {/* Quick View Button */}
        <motion.a
          href={"https://x-tv.netlify.app/"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-lg"
        >
          Смотреть проект →
        </motion.a>

        {/* Corner Badge */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          NEW
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech, idx) => (
            <motion.span
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="relative px-3 py-1 rounded-lg text-sm font-medium bg-gradient-to-r from-blue-50 to-purple-50 text-purple-700 border border-purple-200 hover:border-purple-400 transition-all duration-300 cursor-default"
            >
              {tech}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-400/20 to-purple-400/0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </motion.span>
          ))}
        </div>

        {/* Bottom Action Bar */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <a
            href={link}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium group/link transition-colors duration-300"
          >
            <span>Подробнее</span>
            <svg 
              className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Social Share Icons */}
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </button>
            <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Animated Corner Glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/40 transition-all duration-700"></div>
    </motion.div>
  );
}