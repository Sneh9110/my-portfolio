import React from "react";

const ProjectAIChatbotAssistant = () => (
  <div className="project-page container mx-auto py-20 px-4">
    <h1 className="text-4xl font-bold mb-4">AI Chatbot Assistant</h1>
    <p className="mb-6">
      An intelligent chatbot that helps users book tickets for a museum.
    </p>
    <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
    <ul className="list-disc list-inside mb-6">
      <li>React</li>
      <li>Tailwind CSS</li>
      <li>Node.js</li>
      <li>MongoDB</li>
    </ul>
    <h2 className="text-2xl font-semibold mb-2">Features</h2>
    <ul className="list-disc list-inside mb-6">
      <li>Natural language processing</li>
      <li>Real-time ticket booking</li>
      <li>User-friendly interface</li>
    </ul>
    <h2 className="text-2xl font-semibold mb-2">Screenshots</h2>
    <div className="mb-6">
      <img src="/images/ai-chatbot-placeholder.png" alt="AI Chatbot Screenshot" className="w-full h-64 object-cover" />
    </div>
    <h2 className="text-2xl font-semibold mb-2">About</h2>
    <p>
      This project leverages AI to provide seamless ticket booking experiences through conversational interfaces.
    </p>
  </div>
);

export default ProjectAIChatbotAssistant;