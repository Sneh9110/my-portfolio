import React from "react";

const ProjectSocialMediaPlatform = () => (
  <div className="project-page container mx-auto py-20 px-4">
    <h1 className="text-4xl font-bold mb-4">Social Media Platform</h1>
    <p className="mb-6">
      A platform for college students to connect, share study materials, and engage in DSA challenges.
    </p>
    <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
    <ul className="list-disc list-inside mb-6">
      <li>React</li>
      <li>Xano</li>
      <li>MongoDB</li>
      <li>Tailwind CSS</li>
    </ul>
    <h2 className="text-2xl font-semibold mb-2">Features</h2>
    <ul className="list-disc list-inside mb-6">
      <li>Community forums</li>
      <li>Resource sharing</li>
      <li>Challenge participation</li>
    </ul>
    <h2 className="text-2xl font-semibold mb-2">Screenshots</h2>
    <div className="mb-6">
      <img src="/images/social-media-placeholder.png" alt="Social Media Screenshot" className="w-full h-64 object-cover" />
    </div>
    <h2 className="text-2xl font-semibold mb-2">About</h2>
    <p>
      This platform fosters collaboration and learning among college students, providing tools for sharing and engaging with educational content.
    </p>
  </div>
);

export default ProjectSocialMediaPlatform;