import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number; // 1-100
  category: 'development' | 'platform' | 'tools' | 'ai';
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'Apex', level: 90, category: 'development' },
    { name: 'Visualforce', level: 85, category: 'development' },
    { name: 'Lightning Web Components', level: 85, category: 'development' },
    { name: 'Aura Components', level: 80, category: 'development' },
    { name: 'SOQL/SOSL', level: 90, category: 'development' },
    { name: 'JavaScript', level: 85, category: 'development' },
    { name: 'HTML/CSS', level: 80, category: 'development' },
    { name: 'Flow Builder', level: 90, category: 'platform' },
    { name: 'Process Builder', level: 85, category: 'platform' },
    { name: 'Salesforce Admin', level: 80, category: 'platform' },
    { name: 'Data Cloud', level: 75, category: 'platform' },
    { name: 'Triggers', level: 85, category: 'development' },
    { name: 'Batch Apex', level: 80, category: 'development' },
    { name: 'Integration', level: 75, category: 'tools' },
    { name: 'JSON Handling', level: 85, category: 'tools' },
    { name: 'Machine Learning', level: 85, category: 'ai' },
    { name: 'Natural Language Processing', level: 80, category: 'ai' },
    { name: 'Deep Learning', level: 75, category: 'ai' },
    { name: 'AI Model Development', level: 80, category: 'ai' },
  ];

  return (
    <section id="skills" className="section-padding bg-dark-bg-700">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">My Skills</h2>
          
          <div className="mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-dark-bg-800 p-6 rounded-lg shadow-md"
                >
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">{skill.name}</h3>
                    <span className="text-neon-blue">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-neon-blue"
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Skill Categories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  title: 'Development', 
                  description: 'Proficient in writing efficient, scalable code with Apex, Visualforce, LWC, and other development technologies.' 
                },
                { 
                  title: 'Salesforce Platform', 
                  description: 'Expertise in Salesforce platform tools including Flow Builder, Process Builder, and Data Cloud solutions.' 
                },
                { 
                  title: 'Tools & Integration', 
                  description: 'Experience with APIs, JSON handling, and integrating Salesforce with external systems.' 
                },
                { 
                  title: 'Artificial Intelligence', 
                  description: 'Specialized in AI development with expertise in machine learning, NLP, and deep learning technologies.' 
                }
              ].map((category, index) => (
                <div key={index} className="bg-dark-bg-600/50 rounded-lg p-6 border border-gray-800">
                  <h4 className="text-neon-blue font-semibold mb-3">{category.title}</h4>
                  <p className="text-light-text-600 text-sm">{category.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;