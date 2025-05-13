
import React, { useEffect, useRef } from 'react';
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 75 },
  { name: 'SQL', level: 60 },
  { name: 'Xano', level: 90 },
  { name: 'AI/ML', level: 70 },
  { name: 'Python', level: 70 },
  { name: 'React', level: 65 },
  { name: 'UI/UX Design', level: 80 },
];

// Custom backgrounds for each skill
const skillBackgrounds = {
  'HTML': 'from-orange-400 to-red-500',
  'CSS': 'from-blue-400 to-blue-600',
  'JavaScript': 'from-yellow-300 to-yellow-500',
  'MSQL': 'from-green-400 to-green-600',
  'Xano': 'from-purple-400 to-purple-600',
  'AI/ML': 'from-indigo-400 to-indigo-600',
  'Python': 'from-blue-500 to-yellow-500',
  'React': 'from-pink-400 to-purple-500',
  'UI/UX Design': 'from-red-400 to-orange-500',
};

const SkillsSection = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const progressBars = document.querySelectorAll('.progress-bar');
            progressBars.forEach((bar, index) => {
              const htmlBar = bar as HTMLElement;
              setTimeout(() => {
                htmlBar.style.width = `${skills[index].level}%`;
                htmlBar.style.opacity = '1';
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center px-4 md:px-16">
      <div className="container mx-auto py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Skills
        </h2>
        
        <div 
          ref={skillsRef}
          className="glass-effect p-8 rounded-glass max-w-3xl mx-auto"
        >
          {skills.map((skill, index) => (
            <div key={skill.name} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-lg font-semibold">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div 
                  className="progress-bar h-full w-0 opacity-0 transition-all duration-1000 ease-out rounded-full"
                  style={{
                    background: `linear-gradient(90deg, #7F00FF, #E100FF)`
                  }}
                ></div>
              </div>
            </div>
          ))}
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 mt-10">
            {skills.map((skill) => (
              <div 
                key={skill.name} 
                className={cn(
                  "skill-badge relative overflow-hidden rounded-lg p-3 h-20 flex items-center justify-center transform transition-all duration-300 hover:scale-105 shadow-lg",
                  "bg-gradient-to-r", 
                  skillBackgrounds[skill.name as keyof typeof skillBackgrounds] || "from-purple-start to-purple-end"
                )}
              >
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                <span className="text-white font-bold text-lg z-10">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
