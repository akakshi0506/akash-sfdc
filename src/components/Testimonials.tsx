import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "VP of Sales",
      company: "TechCorp Solutions",
      content: "Akash transformed our Salesforce implementation completely. His expertise in Apex and Lightning Web Components helped us automate processes that were taking hours manually. The custom solutions he built increased our team's productivity by 40%.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
    {
      name: "Michael Chen",
      role: "IT Director",
      company: "Global Enterprises",
      content: "Working with Akash was exceptional. His deep understanding of Salesforce Data Cloud and integration capabilities helped us unify our customer data across multiple systems. The insights we now have are game-changing for our business.",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Manager",
      company: "InnovateTech",
      content: "Akash's AI expertise combined with his Salesforce skills created solutions we didn't even know were possible. The predictive analytics and automation he implemented have revolutionized how we handle customer relationships.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-dark-bg-700">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">What Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-bg-800 rounded-lg p-6 border border-gray-800 hover:border-neon-blue/30 transition-all duration-300 card-hover"
              >
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-neon-blue/60 mr-3" />
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                
                <p className="text-light-text-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-light-text-600">
                      {testimonial.role} at {testimonial.company}
                    </p>
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
            className="mt-12 text-center"
          >
            <p className="text-light-text-600 mb-6">
              Ready to transform your Salesforce implementation?
            </p>
            <a href="#contact" className="btn btn-primary">
              Start Your Project
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;