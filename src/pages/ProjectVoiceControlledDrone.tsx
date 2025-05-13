import React from "react";

const ProjectVoiceControlledDrone = () => (
  <div className="project-page container mx-auto py-20 px-4">
    <h1 className="text-4xl font-bold mb-4">Voice-Controlled Drone</h1>
    <p className="mb-6">
      Hardware project featuring a drone that responds to voice commands using NLP.
    </p>
    <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
    <ul className="list-disc list-inside mb-6">
      <li>Python</li>
      <li>TensorFlow</li>
      <li>Arduino</li>
      <li>Speech Recognition</li>
    </ul>
    <h2 className="text-2xl font-semibold mb-2">Features</h2>
    <ul className="list-disc list-inside mb-6">
      <li>Real-time voice command processing</li>
      <li>Natural language understanding</li>
      <li>Drone hardware integration</li>
      <li>Custom flight patterns</li>
    </ul>
    <h2 className="text-2xl font-semibold mb-2">Screenshots</h2>
    <div className="mb-6">
      <img src="/images/voice-drone-placeholder.png" alt="Voice-Controlled Drone Screenshot" className="w-full h-64 object-cover" />
    </div>
    <h2 className="text-2xl font-semibold mb-2">About</h2>
    <p>
      This innovative project combines machine learning and hardware to create a drone that can be controlled entirely by voice, opening new possibilities for accessibility and automation.
    </p>
  </div>
);

export default ProjectVoiceControlledDrone;