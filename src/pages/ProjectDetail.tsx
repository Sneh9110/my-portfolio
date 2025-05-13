import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useIsMobile } from "../hooks/use-mobile";

// Project data
const projectData: Record<string, {
  title: string;
  description: string;
  tech: string[];
  imageUrl?: string;
  demoUrl?: string;
  repoUrl?: string;
  longDescription?: string;
  challenges?: string[];
  solutions?: string[];
}> = {
  "project-1": {
    title: "AI Chatbot Assistant",
    description: "An intelligent chatbot designed to assist users with academic support, FAQs, and progress.",
    tech: ["React", "Node.js", "OpenAI API", "MongoDB"],
    longDescription: "This chatbot was developed as part of a college platform to assist students in real-time. It provides academic guidance, resolves queries, and tracks user progress. It features natural language understanding and context awareness. Backend integration ensures smooth handling of user data, and it’s visually styled with Tailwind CSS for a clean interface.",
    challenges: [
      "Ensuring accurate and context-aware responses",
      "Integrating AI with a frontend UI",
      "Managing state and user data securely"
    ],
    solutions: [
      "Used OpenAI's API with fine-tuned prompts",
      "Applied context-saving logic with React and state management",
      "Secured endpoints and database storage with token-based auth"
    ]
  },
  "project-2": {
    title: "Event Ticketing System",
    description: "A chatbot-powered ticket booking system for museums or college events.",
    tech: ["React", "TypeScript", "Xano", "EmailJS"],
    longDescription: "This system allows users to book tickets through a conversational chatbot interface. It supports ticket type selection, user input validation, and sends digital tickets via email. The backend is built using Xano (no-code), integrated with EmailJS for ticket delivery, and styled with a glowing purple aesthetic using Tailwind CSS.",
    challenges: [
      "Designing multi-step conversations",
      "Implementing real-time email ticket delivery",
      "Managing user sessions in a no-code backend"
    ],
    solutions: [
      "Used condition-based logic for chatbot flow",
      "Integrated EmailJS for seamless email ticketing",
      "Managed data storage and logic using Xano workflows"
    ]
  },
  "project-3": {
    title: "Social Media Platform",
    description: "A college-centric platform to connect students, share resources, and build community.",
    tech: ["React", "Firebase", "Redux", "Tailwind CSS"],
    longDescription: "The platform, named college.in, supports logins via .edu.in emails, daily DSA challenges, learning paths, peer mentoring, and a marketplace for study materials. It was created to solve issues of unstructured learning and poor networking in colleges. The UI is responsive and gamified to increase student engagement.",
    challenges: [
      "Handling authentication securely for student-only access",
      "Designing a scalable learning and tracking system",
      "Creating a clean and engaging UI for all modules"
    ],
    solutions: [
      "Used Firebase Auth with domain whitelisting",
      "Developed modular components for challenges and progress",
      "Applied Tailwind and Framer Motion for interactivity"
    ]
  },
  "project-4": {
    title: "Voice-Controlled Drone",
    description: "A drone controlled via voice commands using offline speech recognition.",
    tech: ["Python", "Vosk API", "Drone SDK", "Socket Programming"],
    longDescription: "This project enables a drone to respond to commands like “take off,” “land,” or “move forward” using the Vosk library. It works offline, ensuring better privacy and low latency. The Pluto drone SDK was used for motion control, and the system was tested in real-world indoor conditions.",
    challenges: [
      "Achieving accurate voice recognition offline",
      "Synchronizing voice output with drone movements",
      "Avoiding communication delays or crashes"
    ],
    solutions: [
      "Used Vosk API for lightweight offine recognition",
      "Mapped keywords to drone actions via socket commands",
      "Handled safety conditions for takeoff/landing robustness"
    ]
  },
  "project-5": {
    title: "Portfolio Website",
    description: "The website you're currently viewing - a showcase of my skills and projects.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Three.js"],
    longDescription: "This portfolio website features a cyberpunk-inspired design with neon elements, interactive animations, and responsive layouts. The site is built using React and TypeScript, with Tailwind CSS for styling and Three.js for 3D effects.",
    challenges: [
      "Creating a unique cyberpunk aesthetic that remains professional",
      "Optimizing 3D graphics for performance across devices",
      "Designing an intuitive navigation with visual impact"
    ],
    solutions: [
      "Developed a custom design system with neon accents",
      "Implemented level-of-detail switching and progressive loading",
      "Conducted user testing to refine navigation and interactions"
    ]
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const isMobile = useIsMobile();
  const project = projectId ? projectData[projectId] : undefined;

  useEffect(() => {
    // Update document title
    if (project) {
      document.title = `${project.title} | void.👾`;
    }
    
    // Only disable default cursor on desktop devices
    if (!isMobile) {
      document.body.style.cursor = 'none';
    } else {
      document.body.style.cursor = 'default';
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    return () => {
      document.body.style.cursor = 'default';
    };
  }, [isMobile, project]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center glass-effect p-8">
        <h1 className="text-4xl font-bold mb-4 text-gradient">Project Not Found</h1>
        <p className="mb-6 text-white/80">The project you're looking for has vanished into the digital void.</p>
        <Link to="/" className="neon-button">
          <span>Return to Home</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-dark-bg text-white overflow-x-hidden">
      <div className="container pt-32 pb-24 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="glass-effect rounded-xl p-6 md:p-10 mb-12 border border-purple-end/30 glow-border">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">{project.title}</h1>
            <p className="text-lg md:text-xl text-white/80">{project.description}</p>
          </div>
          
          {/* Tech Stack */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, index) => (
                <span key={index} className="skill-badge-simple">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <Link to="/" className="neon-button">
              <span>← Back to Projects</span>
            </Link>
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="neon-button">
                <span>View Demo</span>
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="neon-button">
                <span>View Code</span>
              </a>
            )}
          </div>
        </div>
        
        {/* Project Details */}
        {project.longDescription && (
          <div className="glass-effect rounded-xl p-6 md:p-10 mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">About this Project</h2>
            <p className="text-white/80 mb-6 leading-relaxed">{project.longDescription}</p>
            
            {/* Project Image */}
            {project.imageUrl && (
              <div className="rounded-lg overflow-hidden mb-6 glow-border">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-auto"
                />
              </div>
            )}
            
            {/* Challenges and Solutions */}
            {project.challenges && project.solutions && (
              <div className="grid md:grid-cols-2 gap-8 mt-10">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gradient">Challenges</h3>
                  <ul className="space-y-2 text-white/80">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-neon-cyan mr-2">›</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gradient">Solutions</h3>
                  <ul className="space-y-2 text-white/80">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-accent mr-2">›</span>
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
       
      <Footer />
    </div>
  );
};

export default ProjectDetail;