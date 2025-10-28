import { useState } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  const [activeLink, setActiveLink] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-[80px]">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-white font-bold text-xl"
          >
            Blema
          </motion.div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ scale: 1.1 }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeLink === link.name.toLowerCase()
                      ? 'text-white bg-glass-darker'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setActiveLink(link.name.toLowerCase())}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;