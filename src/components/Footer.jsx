import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { personalInfo, contactInfo } from '../data/mock';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      href: contactInfo.github
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: contactInfo.linkedin
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      href: `mailto:${contactInfo.email}`
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      label: 'Website',
      href: contactInfo.website
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Research', href: '#research' },
    { name: 'Awards', href: '#awards' },
    { name: 'Contact', href: '#contact' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-white border-opacity-20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-2">
                <span className="text-white">{personalInfo.name.split(' ')[0]}</span>
                <span className="text-[#00FFD1]"> {personalInfo.name.split(' ')[1]}</span>
              </h3>
              <p className="text-gray-300 text-lg">
                {personalInfo.title}
              </p>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Passionate about advancing the frontiers of AI and machine learning 
              through innovative research and practical applications.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white bg-opacity-10 p-3 border border-white border-opacity-20 hover:bg-[#00FFD1] hover:text-black transition-all duration-400"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-xl font-bold text-[#00FFD1] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="text-xl font-bold text-[#00FFD1] mb-6">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li>
                <div className="text-gray-400 text-sm mb-1">Email</div>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-white hover:text-[#00FFD1] transition-colors duration-300"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <div className="text-gray-400 text-sm mb-1">Phone</div>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-white hover:text-[#00FFD1] transition-colors duration-300"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <div className="text-gray-400 text-sm mb-1">Location</div>
                <div className="text-white">{contactInfo.location}</div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Availability Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 bg-[#00FFD1] bg-opacity-10 border border-[#00FFD1] border-opacity-30 p-6 text-center"
        >
          <h4 className="text-xl font-bold text-[#00FFD1] mb-2">
            Currently Available
          </h4>
          <p className="text-gray-300">
            {contactInfo.availability}
          </p>
          <div className="mt-4">
            <motion.a
              href={contactInfo.calendly}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00FFD1] text-black px-6 py-3 font-medium hover:bg-white transition-all duration-400 inline-flex items-center gap-2"
            >
              Schedule a Call
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white border-opacity-20">
        <div className="container mx-auto px-8 py-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="text-gray-400 text-center md:text-left">
              <p>
                © {currentYear} {personalInfo.name}. All rights reserved.
              </p>
            </div>
            

          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;