import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, AlertTriangle } from 'lucide-react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form submitted:', data);
    // In a real application, you would send this data to your backend
    alert('Thanks for your message! I\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="section-padding bg-dark-bg-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Get In Touch</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-6">Let's Talk</h3>
              <p className="text-light-text-700 mb-8">
                Have a question or interested in working together? Send me a message and I'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Mail size={20} />, text: "akasdasdj@gmail.com" },
                  { icon: <Phone size={20} />, text: "+91 7595808450" },
                  { icon: <MapPin size={20} />, text: "Kolkata, WB" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="text-neon-blue">
                      {item.icon}
                    </div>
                    <span className="text-light-text-700">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <a 
                  href={`https://wa.me/7595808450?text=${encodeURIComponent("Hi Akash, I visited your portfolio and would love to connect with you!")}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  <span>Message on WhatsApp</span>
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-light-text-700 mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-input"
                    placeholder="Your name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-error-500 flex items-center">
                      <AlertTriangle size={14} className="mr-1" />
                      {errors.name.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-light-text-700 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input"
                    placeholder="Your email address"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-error-500 flex items-center">
                      <AlertTriangle size={14} className="mr-1" />
                      {errors.email.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-light-text-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="form-input"
                    placeholder="Your message"
                    {...register("message", { required: "Message is required" })}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-error-500 flex items-center">
                      <AlertTriangle size={14} className="mr-1" />
                      {errors.message.message}
                    </p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-black"></div>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;