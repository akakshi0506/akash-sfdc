import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Code, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-dark-bg-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">About Me</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="text-light-text-700 leading-relaxed">
                Since beginning my journey as a Salesforce Developer in 2019, I've worked with agencies, consulted for startups, 
                and collaborated with talented people to create digital products for both business and consumer use.
              </p>
              
              <p className="text-light-text-700 leading-relaxed">
                I create success-driven, scalable solutions by writing clean, efficient code and implementing automation that drives business value. 
                My expertise in Apex, Visualforce, Lightning Web Components, and Flow allows me to build secure, maintainable applications that 
                solve complex business challenges.
              </p>
              
              <p className="text-light-text-700 leading-relaxed">
                My recent work with Salesforce Data Cloud has expanded my ability to deliver insights from unified data, creating more 
                powerful and personalized customer experiences. I'm passionate about staying current with Salesforce's evolving ecosystem 
                and implementing best practices across all my projects.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Calendar className="w-6 h-6 text-neon-blue" />,
                  title: "Experience",
                  description: "6+ years specialized in Salesforce development and customization"
                },
                {
                  icon: <Award className="w-6 h-6 text-neon-blue" />,
                  title: "Certifications",
                  description: "Multiple Salesforce certifications demonstrating expertise"
                },
                {
                  icon: <Code className="w-6 h-6 text-neon-blue" />,
                  title: "Technical Skills",
                  description: "Proficient in Apex, LWC, Visualforce, Flows, and integrations"
                },
                {
                  icon: <Globe className="w-6 h-6 text-neon-blue" />,
                  title: "Industry Knowledge",
                  description: "Deep understanding of Salesforce ecosystem and best practices"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-dark-bg-700 p-6 rounded-lg card-hover"
                >
                  <div className="flex items-center space-x-4 mb-3">
                    {item.icon}
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                  </div>
                  <p className="text-light-text-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;