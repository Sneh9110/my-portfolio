import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "AI Chatbot Assistant",
    description: "A conversational AI assistant that helps users with daily tasks and information retrieval.",
    tech: ["React", "Node.js", "OpenAI API", "MongoDB"],
    route: "/projects/ai-chatbot-assistant"
  },
  {
    title: "Event Ticketing System",
    description: "Full-stack application for managing event tickets with QR code generation and scanning.",
    tech: ["Vue.js", "Express", "PostgreSQL", "Stripe API"],
    route: "/projects/event-ticketing-system"
  },
  {
    title: "Social Media Platform",
    description: "A niche social platform for connecting developers and sharing project ideas.",
    tech: ["React", "Firebase", "Redux", "Tailwind CSS"],
    route: "/projects/social-media-platform"
  },
  {
    title: "Voice-Controlled Drone",
    description: "Hardware project featuring a drone that responds to voice commands using NLP.",
    tech: ["Python", "TensorFlow", "Arduino", "Speech Recognition"],
    route: "/projects/voice-controlled-drone"
  },
  {
    title: "Portfolio Website",
    description: "The website you're currently viewing - a showcase of my skills and projects.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Three.js"],
    route: "/projects/portfolio-website"
  },
  {
    title: "Neon Portfolio",
    description: "A visually stunning portfolio site with neon effects and smooth animations.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    route: "/projects/neon-portfolio"
  }
];

const YourCarouselComponent = () => {
  // Simple carousel logic (show all projects in a row, can be replaced with a slider library)
  return (
    <div className="w-full flex overflow-x-auto space-x-6 py-8">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="min-w-[300px] max-w-xs bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="mb-4">{project.description}</p>
            <div className="mb-4">
              <span className="font-semibold">Tech Stack:</span>
              <ul className="list-disc list-inside">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
          <Link
            to={project.route}
            className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 neon-button transition"
          >
            View Project
          </Link>
        </div>
      ))}
    </div>
  );
};

export default YourCarouselComponent;