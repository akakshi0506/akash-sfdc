import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "Multi-Org Data Sync Solution",
      description: "Designed and implemented a robust solution to synchronize data across multiple Salesforce orgs using Apex batch processing and REST API integration, ensuring data consistency across the enterprise.",
      tags: ["Apex", "REST API", "Batch Processing", "Integration"],
      image: "https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Customer Portal with LWC",
      description: "Built a responsive customer portal using Lightning Web Components with custom authentication flow, real-time notifications, and integration with external payment processing systems.",
      tags: ["LWC", "JavaScript", "CSS", "Integration"],
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Automated Sales Process",
      description: "Streamlined the sales workflow by implementing custom approval processes, automated document generation, and complex flow solutions that reduced manual work by 60%.",
      tags: ["Flow", "Process Builder", "Apex Triggers", "Automation"],
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    }
  ];

  return (
    <section id="projects" className="section-padding bg-dark-bg-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-bg-700 rounded-lg overflow-hidden shadow-md card-hover"
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg-900 to-transparent opacity-70"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-light-text-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="text-xs px-2 py-1 rounded-full bg-dark-bg-600 text-neon-blue"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <button className="text-neon-blue hover:text-cyan-300 transition-colors flex items-center">
                      <ExternalLink size={16} className="mr-1" />
                      <span>View Details</span>
                    </button>
                    <button className="text-light-text-700 hover:text-light-text-800 transition-colors">
                      <Github size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="#contact" className="btn btn-outline">
              Interested in working together? Contact me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;