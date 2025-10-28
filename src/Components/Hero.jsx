import { motion } from 'framer-motion';
import profileImg from '../assets/image.png';

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-4 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 md:p-12 rounded-xl max-w-4xl mx-auto text-center shadow-xl"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg shadow-purple-500/50"
            >
              <img 
                src={profileImg} 
                alt="Aleem Mudasir Temitope" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Optional: Glowing ring effect */}
            <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl -z-10"></div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Aleem Mudasir Temitope
        </motion.h1>
        
        {/* Title */}
        <motion.h2 
          className="text-2xl md:text-3xl text-purple-200 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Frontend Developer
        </motion.h2>
        
        {/* Description */}
        <motion.p 
          className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Building beautiful and responsive web experiences
        </motion.p>
        
        {/* CTA Button */}
        <motion.a
          href="mailto:blemathegreat@gmail.com"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/30 cursor-pointer"
        >
          Get in touch
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;