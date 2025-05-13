import React from "react";

const ProjectPortfolioWebsite = () => (
  <div className="project-page container mx-auto py-20 px-4">
    <h1 className="text-4xl font-bold mb-4">Portfolio Website</h1>
    <p className="mb-6">
      A beautifully designed portfolio showcasing high-resolution nature and street photography.
    </p>
    <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
    <ul className="list-disc list-inside mb-6">
      <li>Framer</li>
      <li>Canva</li>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
    <h2 className="text-2xl font-semibold mb-2">Features</h2>
    <ul className="list-disc list-inside mb-6">
      <li>Responsive design</li>
      <li>Interactive galleries</li>
      <li>Custom animations</li>
    </ul>
    <h2 className="text-2xl font-semibold mb-2">Screenshots</h2>
    <div className="mb-6">
      <img src="/images/portfolio-placeholder.png" alt="Portfolio Screenshot" className="w-full h-64 object-cover" />
    </div>
    <h2 className="text-2xl font-semibold mb-2">About</h2>
    <p>
      This portfolio website highlights the artistic work of a photographer, providing an engaging and visually appealing experience for visitors.
    </p>
  </div>
);

export default ProjectPortfolioWebsite;