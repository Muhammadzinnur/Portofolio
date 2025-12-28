import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-lg shadow-2xl py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex justify-between items-center">
        {/* Logo с анимацией */}
        <div className="relative group">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            Мухаммадзинур Х.
          </h1>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-500"></div>
        </div>

        <nav className="hidden md:block">
          <ul className="flex gap-8 text-lg">
            {['Обо мне', 'Проекты', 'Контакты'].map((item, idx) => (
              <li key={idx} className="relative group">
                <a 
                  href={`#${item === 'Обо мне' ? 'about' : item === 'Проекты' ? 'projects' : 'contact'}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div 
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-6 py-4 bg-gray-800/95 backdrop-blur-lg">
          <ul className="flex flex-col gap-4">
            {['Обо мне', 'Проекты', 'Контакты'].map((item, idx) => (
              <li key={idx}>
                <a 
                  href={`#${item === 'Обо мне' ? 'about' : item === 'Проекты' ? 'projects' : 'contact'}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2 hover:pl-2"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </header>
  );
}