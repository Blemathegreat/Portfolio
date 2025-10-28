import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/blemathegreat',
      icon: Github
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aleem-mudathir-52b305288/',
      icon: Linkedin
    },
    {
      name: 'Email',
      href: 'mailto:aleemmudasir@gmail.com',
      icon: Mail
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative mt-auto border-t border-white/10 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Blema
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Frontend Developer crafting beautiful, responsive web experiences with modern technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm inline-block hover:translate-x-1 transform duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto') ? undefined : 'noreferrer'}
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Available for freelance opportunities
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm text-center md:text-left"
            >
              © {currentYear} Aleem Mudasir Temitope (Blema). All rights reserved.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm flex items-center gap-2"
            >
              Built with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> using React & Tailwind CSS
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
}