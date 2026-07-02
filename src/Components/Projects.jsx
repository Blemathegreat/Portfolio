import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import neowear from '../assets/neowears.jpg';
import insider from '../assets/insider.jpg';
import viaggio from '../assets/viaggio.jpg';
import recipe from '../assets/recipe.jpg';
import flowva from '../assets/flowva.png';
import artisanhub from '../assets/artisanhero.png';
import relixcore from '../assets/relixcore.png';

const PROJECTS = [

  {
  title: 'ArtisanHub',
  description: {
    heading: 'A modern marketplace platform connecting customers with skilled artisans through seamless discovery, onboarding, and profile management.',
    points: [
      'Developed a scalable React + Vite application that enables users to discover, search, and connect with artisans across multiple service categories through an intuitive marketplace interface.',
      'Engineered a comprehensive multi-step artisan onboarding system using React Hook Form and Zod, featuring real-time validation, progress tracking, image uploads, and professional form workflows.',
      'Built dynamic search, filtering, and sorting functionality, allowing users to efficiently find artisans based on skills, ratings, availability, and service categories.',
      'Designed responsive artisan profile pages, dashboard layouts, and reusable UI components, ensuring a consistent experience across desktop, tablet, and mobile devices.',
      'Implemented portfolio management features that allow artisans to showcase completed projects, helping customers evaluate expertise and make informed hiring decisions.',
      'Applied modern React development practices including component composition, custom hooks, state management, and clean architecture to create a maintainable and scalable codebase.'
    ]
  },
  image: artisanhub,
  github: 'https://github.com/Blemathegreat/Artisanhub.git',
  demo: 'https://artisanhub-ozac.vercel.app/'
},
   {
  title: 'Travora',
  description: {
    heading: 'A full-featured ambassador and admin platform built solo from the ground up.',
    points: [
      'Architected a scalable React + Vite frontend supporting both a public marketing site and a private dashboard experience for ambassadors and admins.',
      'Solved complex role-based navigation by building separate dashboard flows for ambassadors and admins, each with dedicated panels for consultations, blog posts, tickets, FAQs, testimonials, and inbox messages.',
      'Engineered a Blog system powered by React Context, eliminating the need for a backend by managing state and content distribution entirely on the client side.',
      'Integrated react-toastify for real-time user feedback, improving UX across form submissions, booking confirmations, and referral activities.',
    ]
  },
  image: viaggio, 
  github: 'https://github.com/Blemathegreat/Travora-Travel-Management-Platform-.git', 
  demo: 'https://travora-travel-management-platform-three.vercel.app/' 
},
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
  title: 'Flowva Rewards Hub',
  description: {
    heading: 'A gamified rewards and referral dashboard built to drive user engagement and retention.',
    points: [
      'Engineered a points and rewards system that tracks user progress toward gift card milestones, solving the challenge of keeping users consistently engaged with the platform.',
      'Built a daily streak check-in feature with a weekly visual tracker, encouraging habitual return visits and awarding points automatically on each login.',
      'Designed a referral system that generates personal referral links, tracks referral counts and points earned, and incentivizes users to grow the platform organically.',
      'Implemented a Top Tool Spotlight section that surfaces featured third-party tools with sign-up CTAs, creating a monetization touchpoint within the rewards experience.',
    ]
  },
  image: flowva, 
  github: 'https://github.com/Blemathegreat/Flowva.git', 
  demo: 'https://flowva-kaq2wywql-blemathegreats-projects.vercel.app/' 
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
  title: 'Relixcore Academy',
  description: {
    heading: 'A landing page built for an ed-tech organization empowering Nigerian graduates and NYSC corps members.',
    points: [
      'Designed and developed a dark-themed, visually striking landing page that clearly communicates the platform\'s value to two distinct user segments — General Applicants and NYSC Corps Members.',
      'Solved the challenge of serving a dual audience by structuring the UI into separate user-path cards, guiding each visitor to the program most relevant to their background.',
      'Built a fully responsive layout optimized for Nigerian youth demographics, ensuring accessibility across low-end devices and varying screen sizes.',
      'Translated the organization\'s brand identity into a modern, professional web presence that positions Relixcore Academy as a credible and trustworthy institution.',
    ]
  },
  image: relixcore,  
  demo: 'https://core-nysc.web.app/' 
},

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