import { Link } from "react-router-dom";
import React, { useRef } from 'react';

const projects = [
  {
    id: 1,
    title: 'AI Chatbot Assistant',
    description: 'A conversational AI assistant that helps users with daily tasks and information retrieval.',
    tech: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
    link: '/projects/project-1' // ✅ fixed
  },
  {
    id: 2,
    title: 'Event Ticketing System',
    description: 'Full-stack application for managing event tickets with QR code generation and scanning.',
    tech: ['Vue.js', 'Express', 'PostgreSQL', 'Stripe API'],
    link: '/projects/project-2' // ✅ fixed
  },
  {
    id: 3,
    title: 'Social Media Platform',
    description: 'A niche social platform for connecting developers and sharing project ideas.',
    tech: ['React', 'Firebase', 'Redux', 'Tailwind CSS'],
    link: '/projects/project-3' // ✅ fixed
  },
  {
    id: 4,
    title: 'Voice-Controlled Drone',
    description: 'Hardware project featuring a drone that responds to voice commands using NLP.',
    tech: ['Python', 'TensorFlow', 'Arduino', 'Speech Recognition'],
    link: '/projects/project-4' // ✅ fixed
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'The website you\'re currently viewing - a showcase of my skills and projects.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Three.js'],
    link: '/projects/project-5' // ✅ fixed
  }
];



const ProjectsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const scrollAmount = 350;
    const currentScroll = container.scrollLeft;
    
    container.scrollTo({
      left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
      behavior: 'smooth'
    });
  };
  
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center px-4 md:px-16">
      <div className="container mx-auto py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          My Work
        </h2>
        
        <div className="relative">
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={() => handleScroll('left')}
              className="w-12 h-12 rounded-full glass-effect flex items-center justify-center"
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
          </div>
          
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto py-8 px-4 gap-6 hide-scrollbar snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map(project => (
              <div 
                key={project.id} 
                className="project-card snap-center flex-shrink-0 w-80 md:w-96"
              >
                <div className="card-content h-full glass-effect rounded-glass p-6 border border-purple-end/30 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-muted px-3 py-1 rounded-full text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    to={project.link} 
                    className="inline-flex items-center text-neon-cyan hover:text-white transition-colors"
                  >
                    View Project
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={() => handleScroll('right')}
              className="w-12 h-12 rounded-full glass-effect flex items-center justify-center"
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
