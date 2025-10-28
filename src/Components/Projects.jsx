import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import neowear from '../assets/neowears.jpg';
import insider from '../assets/insider.jpg';
import viaggio from '../assets/viaggio.jpg';
import recipe from '../assets/recipe.jpg';

const PROJECTS = [
  {
    title: 'NeoWears',
    description: {
      heading: 'A modern eCommerce website built to deliver a seamless online shopping experience.',
      points: [
        'Designed and developed a responsive, user-friendly UI using Next.js, Tailwind CSS, and TypeScript.',
        'Integrated dynamic product listings, filtering, and cart functionality for smooth navigation and checkout flow.',
        'Focused on performance optimization, ensuring fast load times and mobile responsiveness.',
        'Enhanced customer experience through clean product layouts, animations, and intuitive interactions.'
      ]
    },
    image: neowear,
    github: 'https://github.com/Blemathegreat/Neowears.git',
    demo: 'https://neowears.vercel.app/'
  },
  {
    title: 'Go-Net',
    description: {
      heading: 'A recruitment-driven web platform that connects recruiters with skilled professionals.',
      points: [
        'Built the frontend architecture with React, Next.js, and Tailwind CSS, emphasizing scalability and accessibility.',
        'Implemented candidate profile dashboards, search filters, and job posting modules.',
        'Collaborated on API integration to enable real-time communication between recruiters and talents.',
        'Delivered a professional and intuitive interface that streamlines talent discovery and hiring efficiency.'
      ]
    },
    image: insider,
    github: 'https://github.com/Blemathegreat/GoNet.git',
    demo: 'https://go-net-tau.vercel.app/'
  },
  {
    title: 'Viaggio Abroad',
    description: {
      heading: 'A collaborative project for a Ghana-based travel and study-abroad consultancy.',
      points: [
        'Developed the client dashboard UI featuring Manage Booking and Chatroom components for real-time interaction.',
        'Enabled users to upload travel documents and chat directly with administrators in a secure environment.',
        'Worked with designers and backend developers to ensure smooth data flow and responsive design.',
        'Contributed to a successful launch with enhanced user satisfaction and improved customer communication.'
      ]
    },
    image: viaggio,
    github: 'https://github.com/viaggio-abroad/clientPortal.git',
    demo: 'https://viaggiotest.waystudio.org/'
  },
  {
    title: 'Recipe-Lab',
    description: {
      heading: 'An interactive AI web app that creates recipes based on ingredients users already have.',
      points: [
        'Built with React, TypeScript, and OpenAI API integration for dynamic recipe generation.',
        'Developed an intuitive interface where users can input available ingredients and receive personalized recipes.',
        'Implemented smart ingredient suggestions and responsive layouts for all devices.',
        'Demonstrates strong skills in API integration, state management, and real-time data handling.'
      ]
    },
    image: recipe,
    github: 'https://github.com/Blemathegreat/Recipe-Lab.git',
    demo: 'https://recipe-lab-psi.vercel.app/'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h3 
          className="text-3xl md:text-4xl font-bold text-white mb-8" 
          initial={{ opacity: 0, y: 10 }} 
          whileInView={{ opacity: 1, y: 0 }}
        >
          Projects
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard 
              key={index} 
              title={project.title} 
              description={project.description} 
              image={project.image} 
              github={project.github} 
              demo={project.demo} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}