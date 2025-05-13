
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const skills = [
  'React', 'JavaScript', 'Data Science', 
  'Machine Learning', 'Database', 'Authentication', 'AI', 'Python', 
  'Hackathons', 'Voice Drones', 'Git', 'UI Design'
];

const AboutSection = () => {
  const isMobile = useIsMobile();

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-4 md:px-16">
      <div className="container mx-auto py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass-effect p-8 rounded-glass">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a 20-year-old IT engineering student passionate about innovation. I've built AI chatbots, ticketing systems, and social platforms. With a strong foundation in frontend development and a growing expertise in AI technologies, I'm constantly exploring new ways to merge creativity with technical solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-6">
              I dream of building my own tech firm someday, creating products that make a real difference in people's lives.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="skill-badge-simple hover:scale-110 hover:-translate-y-1 transition-all duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
