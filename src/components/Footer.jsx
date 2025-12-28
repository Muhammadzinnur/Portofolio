import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Navigation: [
      { name: 'Work', href: '#projects' },
      { name: 'About', href: '#about' },
      { name: 'Contact', href: '#contact' }
    ],
    Social: [
      { name: 'GitHub', href: '#', icon: Github },
      { name: 'LinkedIn', href: '#', icon: Linkedin },
      { name: 'Twitter', href: '#', icon: Twitter }
    ]
  };

  return (
    <footer className="relative bg-black text-white border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="text-xl sm:text-2xl font-bold tracking-tight mb-3 sm:mb-4 inline-block">
              <span className="text-white">MH</span>
              <span className="text-blue-500">.</span>
            </a>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 max-w-xs">
              Frontend Developer crafting exceptional digital experiences with modern web technologies.
            </p>
            <a
              href="mailto:muhammadzinur@example.com"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-blue-500 hover:text-blue-400 transition-colors break-all"
            >
              <Mail size={14} className="flex-shrink-0 sm:w-4 sm:h-4" />
              <span className="break-all">muhammadzinur@example.com</span>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4 text-white">Navigation</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.Navigation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4 text-white">Connect</h3>
            <div className="flex gap-2 sm:gap-3">
              {footerLinks.Social.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors group"
                    aria-label={social.name}
                  >
                    <Icon size={16} className="sm:w-[18px] sm:h-[18px] text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
            © {currentYear} Muhammadzinur H. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}