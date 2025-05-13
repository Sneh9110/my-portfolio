
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
              I'm a 20-year-old IT engineering student fueled by a deep curiosity and an unwavering drive to innovate. With a strong base in frontend development and hands-on experience building AI chatbots, ticketing systems, and social platforms, I’ve always been drawn to solving problems that matter.<br></br>
Now, I’m setting my path firmly toward Data Science and Artificial Intelligence—fields where raw data transforms into insights, and algorithms evolve into real-world impact. For me, AI/ML isn't just about automation or prediction—it's about understanding the world more deeply, and building solutions that truly serve people.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-6">
              I aspire to create intelligent systems that not only work efficiently but understand human needs. My goal is to lead my own tech firm one day—a place where innovation meets empathy, and where bold ideas become meaningful products.<br></br>
Every line of code I write, every model I train, and every concept I explore is a step closer to that vision.
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
