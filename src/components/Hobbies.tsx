import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Bike, Mountain, Heart } from 'lucide-react';

const Hobbies: React.FC = () => {
  const hobbies = [
    {
      title: "Photography",
      description: "Capturing moments and telling stories through the lens. I specialize in landscape, portrait, and street photography.",
      icon: <Camera className="w-8 h-8" />,
      images: [
        `${import.meta.env.BASE_URL}images/image1.jpeg`,
        `${import.meta.env.BASE_URL}images/image3.jpeg`,
        `${import.meta.env.BASE_URL}images/image2.jpeg`
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Bike Riding",
      description: "Exploring new trails and pushing limits on two wheels. From mountain biking to long-distance touring.",
      icon: <Bike className="w-8 h-8" />,
      images: [
        `${import.meta.env.BASE_URL}images/image5.jpeg`,
        `${import.meta.env.BASE_URL}images/image7.jpeg`,
        `${import.meta.env.BASE_URL}images/image6.jpeg`
      ],
      color: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section id="hobbies" className="section-padding bg-dark-bg-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">My Hobbies</h2>
          <p className="text-light-text-700 text-lg mb-12 max-w-3xl">
            When I'm not coding or working with Salesforce, I love exploring the world through different lenses - 
            both literally and figuratively. Here are some of my passions outside of technology.
          </p>
          
          <div className="space-y-16">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${hobby.color} text-white`}>
                      {hobby.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{hobby.title}</h3>
                  </div>
                  
                  <p className="text-light-text-700 leading-relaxed text-lg">
                    {hobby.description}
                  </p>
                  
                  <div className="flex items-center space-x-2 text-neon-blue">
                    <Heart className="w-5 h-5" />
                    <span className="text-sm font-medium">Passionate about this since years</span>
                  </div>
                </div>
                
                {/* Images Grid */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="aspect-square rounded-lg overflow-hidden">
                        <img 
                          src={hobby.images[0]} 
                          alt={`${hobby.title} 1`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="aspect-[4/3] rounded-lg overflow-hidden">
                        <img 
                          src={hobby.images[1]} 
                          alt={`${hobby.title} 2`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    <div className="mt-8">
                      <div className="aspect-[3/4] rounded-lg overflow-hidden">
                        <img 
                          src={hobby.images[2]} 
                          alt={`${hobby.title} 3`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center bg-dark-bg-700/50 p-8 rounded-lg border border-gray-800"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center justify-center">
              <Mountain className="w-6 h-6 text-neon-blue mr-2" />
              Life Beyond Code
            </h3>
            <p className="text-light-text-700 max-w-2xl mx-auto">
              I believe that diverse experiences and hobbies make me a better developer. The creativity from photography 
              and the problem-solving from biking adventures often inspire innovative solutions in my technical work.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hobbies;