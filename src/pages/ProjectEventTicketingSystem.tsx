import React from "react";

const ProjectEventTicketingSystem = () => (
  <div className="project-page container mx-auto py-20 px-4">
    <h1 className="text-4xl font-bold mb-4">Event Ticketing System</h1>
    <p className="mb-6">
     A chatbot-powered ticket booking system for museums or college events.
    </p>
    <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
    <ul className="list-disc list-inside mb-6">
      <li>React</li>
      <li>TypeScript</li>
      <li>MongoDB</li>
      <li>EmailJS</li>
    </ul>
    <h2 className="text-2xl font-semibold mb-2">Features</h2>
    <ul className="list-disc list-inside mb-6">
      <li>Secure payment processing</li>
      <li>Real-time ticket availability</li>
      <li>User account management</li>
    </ul>
    <h2 className="text-2xl font-semibold mb-2">Screenshots</h2>
    <div className="mb-6">
      <img src="/images/event-ticketing-placeholder.png" alt="Event Ticketing Screenshot" className="w-full h-64 object-cover" />
    </div>
    <h2 className="text-2xl font-semibold mb-2">About</h2>
    <p>
      This system streamlines the process of selling and distributing tickets for events, ensuring a smooth experience for organizers and attendees.
    </p>
  </div>
);

export default ProjectEventTicketingSystem;