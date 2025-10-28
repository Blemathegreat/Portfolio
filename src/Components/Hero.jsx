import { motion } from 'framer-motion';
import profileImg from '../assets/image.png';

function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 px-4 mt-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 md:p-12 rounded-xl w-full max-w-4xl mx-auto text-center shadow-xl"
      >
        {/* ...existing profile image code... */}
        
        {/* Name with adjusted margins */}
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Aleem Mudasir Temitope
        </motion.h1>
        
        {/* ...existing code... */}
      </motion.div>
    </section>
  );
}

export default Hero;