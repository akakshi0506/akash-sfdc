import React from 'react';
import { Linkedin, Github, Twitter, Code2 } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg-900 py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-6">
            <Code2 className="w-8 h-8 text-neon-blue" />
            <span className="text-xl font-bold">Akash</span>
          </div>
          
          <p className="text-light-text-600 text-center max-w-xl mb-8">
            Salesforce Developer specializing in custom solutions, automation, and Lightning Web Components.
            Let's build something amazing together.
          </p>
          
          <div className="flex space-x-6 mb-10">
            {[
              { icon: <Linkedin size={22} />, href: "#", label: "LinkedIn" },
              { icon: <Github size={22} />, href: "#", label: "GitHub" },
              { icon: <Twitter size={22} />, href: "#", label: "Twitter" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="text-light-text-600 hover:text-neon-blue transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          <div className="w-full border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-light-text-600 text-sm">
              &copy; {currentYear} Akash. All rights reserved.
            </p>
            
            <div className="mt-4 md:mt-0 flex flex-wrap gap-4 justify-center">
              {['Home', 'About', 'Skills', 'Projects', 'Testimonials', 'Contact'].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="text-light-text-600 hover:text-neon-blue transition-colors duration-300 text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;