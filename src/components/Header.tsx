import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, ChevronRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-bg-900/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container-custom py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-2">
          <Code2 className="w-8 h-8 text-neon-blue" />
          <span className="text-xl font-bold gradient-text">Akakshi</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['home', 'about', 'skills', 'projects', 'certifications', 'testimonials', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="text-light-text-700 hover:text-neon-blue transition-colors duration-300 capitalize"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-dark-bg-900/98 z-40 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
          {['home', 'about', 'skills', 'projects', 'certifications', 'testimonials', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="text-xl font-medium text-light-text-800 hover:text-neon-blue flex items-center transition-colors duration-300 capitalize"
            >
              <ChevronRight className="mr-2" size={18} />
              {item}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;