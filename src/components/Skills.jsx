import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/mock';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeCategory, setActiveCategory] = useState('programming');

  const skillCategories = {
    programming: { title: 'Programming Languages', skills: skills.programming },
    aiml: { title: 'AI/ML & Data Science', skills: skills.aiml },
    web: { title: 'Web Technologies', skills: skills.web },
    tools: { title: 'Tools & Platforms', skills: skills.tools },
    databases: { title: 'Databases & Cloud', skills: skills.databases }
  };

  const getSkillLevel = (skill) => {
    // Mock skill levels based on the resume context
    const expertSkills = ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning', 'Deep Learning'];
    const advancedSkills = ['JavaScript', 'React', 'Node.js', 'SQL', 'Git'];
    
    if (expertSkills.includes(skill)) return 95;
    if (advancedSkills.includes(skill)) return 85;
    return 75;
  };

  return (
    <section id="skills" className="py-20 bg-black text-white">
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
              Technical <span className="text-[#00FFD1]">Skills</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-24 h-1 bg-[#00FFD1] mx-auto"
            />
          </div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 font-medium transition-all duration-400 border ${
                  activeCategory === key
                    ? 'bg-[#00FFD1] text-black border-[#00FFD1]'
                    : 'bg-white bg-opacity-10 text-white border-white border-opacity-20 hover:bg-white hover:text-black'
                }`}
              >
                {category.title}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories[activeCategory].skills.map((skill, index) => {
              const level = getSkillLevel(skill);
              return (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white bg-opacity-5 p-6 border border-white border-opacity-20 hover:bg-opacity-10 transition-all duration-400"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-white">{skill}</h3>
                    <span className="text-[#00FFD1] text-sm font-medium">{level}%</span>
                  </div>
                  <div className="w-full bg-white bg-opacity-20 h-2">
                    <motion.div
                      className="h-full bg-[#00FFD1]"
                      initial={{ width: 0 }}
                      animate={{ width: `${level}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-center mt-12 space-y-4"
          >
            <h3 className="text-2xl font-semibold text-[#00FFD1]">
              Constantly Learning & Evolving
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              I'm passionate about staying at the forefront of technology, constantly exploring new frameworks, 
              tools, and methodologies to deliver cutting-edge solutions.
            </p>
            <button className="bg-white bg-opacity-10 text-white px-8 py-4 font-medium text-lg hover:bg-white hover:text-black transition-all duration-400 border-0 mt-6">
              View Certifications
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;