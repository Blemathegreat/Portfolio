import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Users } from 'lucide-react';

const SKILLS = [
  // Core Technologies
  { name: 'HTML', category: 'Core' },
  { name: 'CSS', category: 'Core' },
  { name: 'JavaScript', category: 'Core' },
  { name: 'TypeScript', category: 'Language' },
  
  // Frameworks & Libraries
  { name: 'React', category: 'Framework' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'Tailwind CSS', category: 'Styling' },
  
  // State Management
  { name: 'Redux Toolkit', category: 'State' },
  { name: 'Zustand', category: 'State' },
  { name: 'Recoil', category: 'State' },
  
  // Build Tools
  { name: 'Vite', category: 'Build Tool' },
  { name: 'Webpack', category: 'Build Tool' },
  
  // UI & Animation
  { name: 'Framer Motion', category: 'Animation' },
  { name: 'Shadcn/UI', category: 'UI Library' },
  { name: 'Chakra UI', category: 'UI Library' },
  
  // API & Backend
  { name: 'REST API', category: 'API' },
  { name: 'GraphQL', category: 'API' },
  
  // Testing & Quality
  { name: 'Jest', category: 'Testing' },
  { name: 'React Testing Library', category: 'Testing' },
  { name: 'ESLint', category: 'Quality' },
  { name: 'Prettier', category: 'Quality' },
  
  // DevOps & Deployment
  { name: 'Git', category: 'Version Control' },
  { name: 'Vercel', category: 'Deployment' },
  { name: 'Netlify', category: 'Deployment' },
  { name: 'Firebase', category: 'Deployment' }
];

const SKILL_CATEGORIES = [
  { name: 'Frontend', color: 'from-blue-500 to-cyan-500', skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js'] },
  { name: 'Styling', color: 'from-purple-500 to-pink-500', skills: ['Tailwind CSS', 'Shadcn/UI', 'Chakra UI'] },
  { name: 'State Management', color: 'from-green-500 to-emerald-500', skills: ['Redux Toolkit', 'Zustand', 'Recoil'] },
  { name: 'Build & Performance', color: 'from-orange-500 to-red-500', skills: ['Vite', 'Webpack', 'Framer Motion'] },
  { name: 'API & Backend', color: 'from-yellow-500 to-amber-500', skills: ['REST API', 'GraphQL'] },
  { name: 'Testing & Quality', color: 'from-indigo-500 to-violet-500', skills: ['Jest', 'React Testing Library', 'ESLint', 'Prettier'] },
  { name: 'DevOps & Deployment', color: 'from-teal-500 to-cyan-500', skills: ['Git', 'Vercel', 'Netlify', 'Firebase'] }
];

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable and scalable solutions'
  },
  {
    icon: Palette,
    title: 'Modern Design',
    description: 'Creating beautiful user interfaces'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimized for speed and efficiency'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Team player with strong communication'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Bio Section - Takes 2 columns */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8"
          >
            <h4 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="text-purple-400">👋</span> Who I Am
            </h4>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm <span className="text-white font-semibold">Aleem Mudasir Temitope (Blema)</span> — a frontend developer with years of experience passionate about creating modern, responsive, and accessible web experiences.
              </p>
              
              <p>
                I specialize in turning ideas into clean, high-performing interfaces that balance functionality with design. Every line of code I write is focused on creating meaningful user experiences that solve real problems.
              </p>
              
              <p>
                I've collaborated with teams at <span className="text-purple-300 font-medium">Viaggio Abroad</span> and <span className="text-purple-300 font-medium">AsterikRd</span>, building intuitive platforms that enhanced user engagement and streamlined communication. My work focuses on efficiency, scalability, and delivering seamless digital experiences.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                  15+
                </div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                  100%
                </div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Highlights Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8"
          >
            <h4 className="text-xl font-semibold text-white mb-6">What I Bring</h4>
            
            <div className="space-y-6">
              {HIGHLIGHTS.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-1">{item.title}</h5>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Section - Organized by Category */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8"
        >
          <h4 className="text-2xl font-semibold text-white mb-8">
            Technologies & Tools
          </h4>
          
          <div className="space-y-8">
            {SKILL_CATEGORIES.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <h5 className={`text-lg font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.name}
                  </h5>
                  <div className={`flex-1 h-px bg-gradient-to-r ${category.color} opacity-30`}></div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skillName, skillIndex) => {
                    const skill = SKILLS.find(s => s.name === skillName);
                    return (
                      <motion.div
                        key={skillName}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.03 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="group relative px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg text-gray-100 transition-all duration-300 cursor-default"
                      >
                        <span className="relative z-10 text-sm font-medium">{skillName}</span>
                        
                        {/* Hover gradient effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Optional: All Skills in One Section (Alternative) */}
        {/* Uncomment if you prefer all skills together instead of categorized */}
        {/* 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 mt-8"
        >
          <h4 className="text-2xl font-semibold text-white mb-6">
            All Technologies
          </h4>
          
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group relative px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 rounded-xl text-gray-100 transition-all duration-300 cursor-default"
              >
                <span className="relative z-10 font-medium">{skill.name}</span>
                <span className="absolute top-1 right-2 text-[10px] text-purple-400/60 font-medium">
                  {skill.category}
                </span>
                
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-pink-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        */}
      </div>
    </section>
  );
}