import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Calendar, Send, CheckCircle } from 'lucide-react';
import { contactInfo } from '../data/mock';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const emailSubject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `---\nSent via portfolio contact form`
    );
    
    const mailtoLink = `mailto:${contactInfo.email}?subject=${emailSubject}&body=${emailBody}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setShowSuccess(true);
    
    // Clear form
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      primary: true
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
      primary: false
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: contactInfo.location,
      href: null,
      primary: false
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: contactInfo.linkedin,
      primary: true
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'View my code',
      href: contactInfo.github,
      primary: true
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      label: 'Schedule a Call',
      value: 'Book a meeting',
      href: contactInfo.calendly,
      primary: true
    },
    {
      icon: <ExternalLink className="w-6 h-6" />,
      label: 'Download Resume',
      value: 'PDF with publications',
      href: '/resume_with_publication.pdf',
      primary: true,
      download: true
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl lg:text-5xl font-bold mb-4"
            >
              Let's <span className="text-[#00FFD1]">Connect</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-24 h-1 bg-[#00FFD1] mx-auto mb-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto"
            >
              {contactInfo.availability}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-[#00FFD1] mb-6">
                  Get In Touch
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities, research collaborations, 
                  or innovative projects. Whether you're looking for a talented developer, 
                  a research partner, or just want to connect, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                    className={`flex items-center gap-4 p-4 bg-white bg-opacity-5 border border-white border-opacity-20 hover:bg-opacity-10 transition-all duration-400 group ${
                      method.primary ? 'border-[#00FFD1] border-opacity-30' : ''
                    }`}
                  >
                    <div className={`${method.primary ? 'text-[#00FFD1]' : 'text-gray-400'} group-hover:scale-110 transition-transform duration-400`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">{method.label}</h4>
                      <p className="text-gray-300">{method.value}</p>
                    </div>
                    {method.href && (
                      <motion.a
                        href={method.href}
                        target={method.download ? "_self" : "_blank"}
                        rel={method.download ? "" : "noopener noreferrer"}
                        download={method.download ? "Samarpan_Mohanty_Resume_with_Publications.pdf" : undefined}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-[#00FFD1] hover:text-white transition-colors duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="bg-[#00FFD1] bg-opacity-10 border border-[#00FFD1] border-opacity-30 p-6"
              >
                <h4 className="text-lg font-bold text-[#00FFD1] mb-4">
                  Response Time
                </h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">24hrs</div>
                    <div className="text-gray-300 text-sm">Email Response</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">Same Day</div>
                    <div className="text-gray-300 text-sm">Urgent Matters</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
              className="bg-white bg-opacity-5 border border-white border-opacity-20 p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 text-white p-3 focus:border-[#00FFD1] focus:outline-none transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 text-white p-3 focus:border-[#00FFD1] focus:outline-none transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 text-white p-3 focus:border-[#00FFD1] focus:outline-none transition-colors duration-300"
                    placeholder="What would you like to discuss?"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 text-white p-3 focus:border-[#00FFD1] focus:outline-none transition-colors duration-300 resize-vertical"
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                  />
                </div>
                
                {/* Success Message */}
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 bg-green-500 bg-opacity-20 border border-green-500 border-opacity-30 text-green-400"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Your email client should open with your message pre-filled. Thank you for reaching out!</span>
                  </motion.div>
                )}
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#00FFD1] text-black py-4 font-bold text-lg hover:bg-white transition-all duration-400 flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;