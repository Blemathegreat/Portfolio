import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [activeLink, setActiveLink] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const linkClass = (name) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      activeLink === name.toLowerCase()
        ? 'text-white bg-white/10'
        : 'text-gray-300 hover:text-white hover:bg-white/5'
    }`;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className="fixed top-0 left-0 right-0 w-full z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="text-white font-bold text-xl flex-shrink-0 cursor-pointer"
            onClick={() => setActiveLink('home')}
          >
            Blema
          </motion.a>

          {/* Desktop links — hidden below md */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={linkClass(link.name)}
                onClick={() => setActiveLink(link.name.toLowerCase())}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Hamburger — visible below md only */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? 'close' : 'open'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.15 }}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>

        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}  // keeps content clipped during animation
            className="md:hidden glass border-t border-white/10"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`w-full text-left ${linkClass(link.name)}`}
                  onClick={() => {
                    setActiveLink(link.name.toLowerCase());
                    setMenuOpen(false);
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;