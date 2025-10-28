import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ProjectCard({ title, description, image, github, demo }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <motion.article 
      whileHover={{ y: -6 }} 
      className="glass bg-white/4 backdrop-blur-md border border-white/8 rounded-xl overflow-hidden shadow-lg flex flex-col"
    >
      {/* Project Image */}
      <div className="w-full h-44 bg-gray-800 flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-gray-400">No preview</div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title */}
        <h5 className="text-white font-semibold text-xl mb-3">{title}</h5>
        
        {/* Description with heading and points */}
        <div className="text-gray-300 text-sm flex-grow mb-4">
          {/* Main heading */}
          <p className="font-medium text-gray-200 mb-3 leading-relaxed">
            {description.heading}
          </p>
          
          {/* Show first point or all points based on state */}
          {showFullDescription ? (
            <ul className="list-disc list-inside space-y-2 text-xs text-gray-300">
              {description.points.map((point, index) => (
                <li key={index} className="leading-relaxed pl-1">{point}</li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-gray-400 line-clamp-3">
              {description.points[0]}
            </p>
          )}
          
          {/* Read more/less button */}
          <button
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="text-purple-400 hover:text-purple-300 text-xs mt-3 font-medium inline-flex items-center gap-1 transition-colors"
          >
            {showFullDescription ? (
              <>
                Show less
                <span className="text-xs">↑</span>
              </>
            ) : (
              <>
                Read more
                <span className="text-xs">↓</span>
              </>
            )}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto pt-4 flex gap-3 border-t border-white/10">
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noreferrer" 
              className="px-4 py-2 text-sm rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-colors font-medium"
            >
              GitHub
            </a>
          )}
          {demo && (
            <a 
              href={demo} 
              target="_blank" 
              rel="noreferrer" 
              className="px-4 py-2 text-sm rounded-md bg-white/8 text-white hover:bg-white/12 transition-colors font-medium"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}