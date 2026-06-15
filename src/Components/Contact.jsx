import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

  useEffect(() => {
    if (PUBLIC_KEY) {
      try { emailjs.init(PUBLIC_KEY); } catch {}
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
    if (!validate()) { setSubmitStatus('error'); return; }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.warn('EmailJS env vars missing. Falling back to console.log.');
      setIsSubmitting(true);
      try {
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
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, { ...formData }, PUBLIC_KEY);
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

  // Reusable input base classes
  const inputBase =
    'w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all text-sm sm:text-base';

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14 lg:mb-16 text-center"
        >
          {/* xs: 2xl | sm: 3xl | md: 4xl | lg+: 5xl — smooth scale */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Let's Work Together
          </h3>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-2">
            Have a project in mind or just want to chat? I'm always open to discussing new opportunities and collaborations.
          </p>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-4 sm:mt-6" />
        </motion.div>

        {/*
          Layout strategy:
          - mobile (<md):  single column, stacked
          - tablet (md):   single column but wider, comfortable padding
          - laptop (lg+):  two columns side-by-side (original desktop design preserved)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">

          {/* ── LEFT: Contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 lg:space-y-8"
          >
            {/* Get In Touch card */}
            <div className="glass bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 lg:p-8">
              <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
                Get In Touch
              </h4>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                I'm currently available for freelance work and full-time opportunities. If you have a project that you want to get started, think you need my help with something, or just fancy saying hey, then get in touch.
              </p>

              <div className="space-y-3">
                {/* Email row */}
                <motion.a
                  href="mailto:aleemmudasir@gmail.com"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-gradient-to-r from-purple-500 to-pink-500 bg-opacity-20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-400 text-xs">Email</p>
                    {/* truncate prevents email overflowing on 320px screens */}
                    <p className="text-white font-medium text-sm sm:text-base truncate">
                      aleemmudasir@gmail.com
                    </p>
                  </div>
                </motion.a>

                {/* GitHub row */}
                <motion.a
                  href="https://github.com/blemathegreat"
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-gradient-to-r from-gray-500 to-gray-700 bg-opacity-20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-400 text-xs">GitHub</p>
                    <p className="text-white font-medium text-sm sm:text-base">@blemathegreat</p>
                  </div>
                </motion.a>

                {/* LinkedIn row */}
                <motion.a
                  href="https://www.linkedin.com/in/aleem-mudathir-52b305288/"
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-gradient-to-r from-blue-500 to-blue-700 bg-opacity-20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-400 text-xs">LinkedIn</p>
                    <p className="text-white font-medium text-sm sm:text-base">Aleem Mudathir</p>
                  </div>
                </motion.a>

                {/* Location row */}
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 border border-white/10 rounded-xl">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-gradient-to-r from-green-500 to-emerald-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-400 text-xs">Location</p>
                    <p className="text-white font-medium text-sm sm:text-base">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Connect card */}
            <div className="glass bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 lg:p-6">
              <h5 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                Quick Connect
              </h5>
              {/*
                flex-wrap: buttons wrap naturally on very small screens
                w-full sm:w-auto: each button goes full-width on xs, auto on sm+
              */}
              <div className="flex flex-col xs:flex-row flex-wrap gap-2 sm:gap-3">
                {quickLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                    className={`flex items-center justify-center gap-2 px-4 py-2.5 ${link.className} text-white rounded-lg text-sm font-medium transition-colors flex-1 sm:flex-none`}
                  >
                    {link.icon}
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 lg:p-8"
          >
            <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
              Send Me a Message
            </h4>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
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
                  className={`${inputBase} ${formErrors.name ? 'border-red-500' : 'border-white/10'}`}
                  placeholder="John Doe"
                />
                {formErrors.name && (
                  <p id="name-error" className="text-red-400 text-xs mt-1">{formErrors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
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
                  className={`${inputBase} ${formErrors.email ? 'border-red-500' : 'border-white/10'}`}
                  placeholder="john@example.com"
                />
                {formErrors.email && (
                  <p id="email-error" className="text-red-400 text-xs mt-1">{formErrors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
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
                  rows={5}
                  className={`${inputBase} resize-none ${formErrors.message ? 'border-red-500' : 'border-white/10'}`}
                  placeholder="Tell me about your project..."
                />
                {formErrors.message && (
                  <p id="message-error" className="text-red-400 text-xs mt-1">{formErrors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2.5 sm:py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg disabled:opacity-50 text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <p role="status" className="text-green-400 text-xs sm:text-sm text-center">
                  ✓ Message sent! I'll get back to you soon.
                </p>
              )}
              {submitStatus === 'error' && (
                <p role="alert" className="text-red-400 text-xs sm:text-sm text-center">
                  ✗ Failed to send. Please try again or email me directly.
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}