import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  icon: React.ReactNode;
  color: string;
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: "Salesforce Certified JavaScript Developer I",
      issuer: "Salesforce",
      date: "2023",
      icon: <Award className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Salesforce Certified Administrator",
      issuer: "Salesforce",
      date: "2021",
      icon: <Award className="w-8 h-8" />,
      color: "from-green-500 to-emerald-400"
    },
    {
      title: "Salesforce Certified Platform Developer I",
      issuer: "Salesforce",
      date: "2020",
      icon: <Award className="w-8 h-8" />,
      color: "from-purple-500 to-violet-400"
    },
    {
      title: "Salesforce Data Cloud Specialist",
      issuer: "Salesforce",
      date: "2024",
      icon: <Award className="w-8 h-8" />,
      color: "from-cyan-500 to-neon-blue"
    },
    {
      title: "AI Engineering Professional",
      issuer: "IBM",
      date: "2023",
      icon: <Award className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-400"
    },
    {
      title: "Machine Learning Specialist",
      issuer: "Google Cloud",
      date: "2023",
      icon: <Award className="w-8 h-8" />,
      color: "from-red-500 to-pink-400"
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-dark-bg-700">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-bg-800 rounded-lg p-6 border border-gray-800 hover:border-neon-blue/30 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${cert.color} text-black`}>
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{cert.title}</h3>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm text-light-text-600">
                        {cert.issuer} • {cert.date}
                      </span>
                      <button className="text-neon-blue hover:text-cyan-300 transition-colors flex items-center text-sm">
                        <ExternalLink size={14} className="mr-1" />
                        <span>Verify</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 bg-dark-bg-800/60 p-6 rounded-lg border border-gray-800"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="text-neon-blue mr-2">✓</span> Continuous Learning
            </h3>
            <p className="text-light-text-700">
              I'm committed to staying current with both Salesforce's evolving ecosystem and the latest AI technologies. 
              I regularly complete certifications, attend workshops, and participate in community events to expand my 
              knowledge across both domains.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;