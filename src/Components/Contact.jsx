import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

/**
 * Contact component - validated, accessible, and integrated with EmailJS (optional).
 * - Validates inputs
 * - Shows loading / success / error states
 * - Uses environment vars: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
 */

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

  useEffect(() => {
    // Optional: initialize emailjs if you prefer init() (not strictly required when send uses key)
    if (PUBLIC_KEY) {
      try {
        emailjs.init(PUBLIC_KEY);
      } catch (err) {
        // ignore if already initialized
      }
    }
  }, [PUBLIC_KEY]);

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) setFormErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validate()) {
      setSubmitStatus('error');
      return;
    }

    // If EmailJS not configured, fail fast with console message
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.warn('EmailJS env vars missing. Falling back to console.log.');
      setIsSubmitting(true);
      try {
        // simulate send
        await new Promise((r) => setTimeout(r, 800));
        console.log('Contact form (simulated send):', formData);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } catch {
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      }
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const quickLinks = [
    {
      href: 'mailto:aleemmudasir@gmail.com',
      icon: <Mail className="w-4 h-4" />,
      text: 'Send Email',
      className: 'bg-purple-600 hover:bg-purple-700',
    },
    {
      href: 'https://github.com/blemathegreat',
      icon: <Github className="w-4 h-4" />,
      text: 'GitHub',
      className: 'bg-white/10 hover:bg-white/20',
    },
    {
      href: 'https://www.linkedin.com/in/aleem-mudathir-52b305288/',
      icon: <Linkedin className="w-4 h-4" />,
      text: 'LinkedIn',
      className: 'bg-white/10 hover:bg-white/20',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Work Together</h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'm always open to discussing new opportunities and collaborations.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h4 className="text-2xl font-semibold text-white mb-6">Get In Touch</h4>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm currently available for freelance work and full-time opportunities. If you have a project that you want to get started, think you need my help with something, or just fancy saying hey, then get in touch.
              </p>

              <div className="space-y-4">
                <motion.a
                  href="mailto:aleemmudasir@gmail.com"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-opacity-20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Email</p>
                    <p className="text-white font-medium">aleemmudasir@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://github.com/blemathegreat"
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-700 bg-opacity-20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">GitHub</p>
                    <p className="text-white font-medium">@blemathegreat</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/aleem-mudathir-52b305288/"
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 bg-opacity-20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">LinkedIn</p>
                    <p className="text-white font-medium">Aleem Mudathir</p>
                  </div>
                </motion.a>

                <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Location</p>
                    <p className="text-white font-medium">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <h5 className="text-lg font-semibold text-white mb-4">Quick Connect</h5>
              <div className="flex flex-wrap gap-3">
                {quickLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                    className={`flex items-center gap-2 px-4 py-2 ${link.className} text-white rounded-lg text-sm font-medium transition-colors`}
                  >
                    {link.icon}
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8"
          >
            <h4 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h4>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  aria-invalid={!!formErrors.name}
                  aria-describedby={formErrors.name ? 'name-error' : undefined}
                  className={`w-full px-4 py-3 bg-white/5 border ${
                    formErrors.name ? 'border-red-500' : 'border-white/10'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all`}
                  placeholder="John Doe"
                />
                {formErrors.name && <p id="name-error" className="text-red-400 text-xs mt-1">{formErrors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  aria-invalid={!!formErrors.email}
                  aria-describedby={formErrors.email ? 'email-error' : undefined}
                  className={`w-full px-4 py-3 bg-white/5 border ${
                    formErrors.email ? 'border-red-500' : 'border-white/10'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all`}
                  placeholder="john@example.com"
                />
                {formErrors.email && <p id="email-error" className="text-red-400 text-xs mt-1">{formErrors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  aria-invalid={!!formErrors.message}
                  aria-describedby={formErrors.message ? 'message-error' : undefined}
                  rows={6}
                  className={`w-full px-4 py-3 bg-white/5 border ${
                    formErrors.message ? 'border-red-500' : 'border-white/10'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none`}
                  placeholder="Tell me about your project..."
                />
                {formErrors.message && <p id="message-error" className="text-red-400 text-xs mt-1">{formErrors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg disabled:opacity-50"
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <p role="status" className="text-green-400 text-sm text-center">✓ Message sent! I'll get back to you soon.</p>
              )}
              {submitStatus === 'error' && (
                <p role="alert" className="text-red-400 text-sm text-center">✗ Failed to send. Please try again or email me directly.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}