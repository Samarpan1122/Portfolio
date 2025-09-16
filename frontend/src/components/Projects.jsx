import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Activity, Beaker } from 'lucide-react';
import { projects, contactInfo } from '../data/mock';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.type === filter);

  const getProjectIcon = (type) => {
    return type === 'research' ? <Beaker className="w-6 h-6" /> : <Activity className="w-6 h-6" />;
  };

  return (
    <section id="projects" className="py-20 bg-black text-white">
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
              Featured <span className="text-[#00FFD1]">Projects</span>
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
              A showcase of my research and development work spanning machine learning, 
              biomedical applications, and full-stack development.
            </motion.p>
          </div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center gap-4 mb-12"
          >
            {[
              { key: 'all', label: 'All Projects' },
              { key: 'research', label: 'Research' },
              { key: 'development', label: 'Development' }
            ].map((filterOption) => (
              <button
                key={filterOption.key}
                onClick={() => setFilter(filterOption.key)}
                className={`px-6 py-3 font-medium transition-all duration-400 border ${
                  filter === filterOption.key
                    ? 'bg-[#00FFD1] text-black border-[#00FFD1]'
                    : 'bg-white bg-opacity-10 text-white border-white border-opacity-20 hover:bg-white hover:text-black'
                }`}
              >
                {filterOption.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                className="bg-white bg-opacity-5 border border-white border-opacity-20 p-8 hover:bg-opacity-10 transition-all duration-400 group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-[#00FFD1]">
                      {getProjectIcon(project.type)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#00FFD1] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className={`text-sm px-3 py-1 mt-2 inline-block border ${
                        project.type === 'research' 
                          ? 'text-[#00FFD1] border-[#00FFD1] bg-[#00FFD1] bg-opacity-20' 
                          : 'text-gray-300 border-gray-300 bg-gray-300 bg-opacity-20'
                      }`}>
                        {project.type.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className={`px-3 py-1 text-sm font-medium border ${
                    project.status === 'completed' 
                      ? 'text-green-400 border-green-400 bg-green-400 bg-opacity-20'
                      : 'text-yellow-400 border-yellow-400 bg-yellow-400 bg-opacity-20'
                  }`}>
                    {project.status.toUpperCase()}
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-3 py-1 bg-white bg-opacity-10 text-gray-300 border border-white border-opacity-20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Achievements:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#00FFD1]" />
                        <span className="text-sm text-gray-300">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {project.github ? (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-[#00FFD1] text-black px-4 py-2 font-medium hover:bg-white transition-all duration-400"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </motion.a>
                  ) : (
                    <div className="flex items-center gap-2 bg-gray-600 text-gray-400 px-4 py-2 font-medium cursor-not-allowed">
                      <Github className="w-4 h-4" />
                      Source Code (Private)
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white bg-opacity-10 text-white px-8 py-4 font-medium text-lg hover:bg-white hover:text-black transition-all duration-400 border-0 inline-block"
            >
              View All Projects on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;