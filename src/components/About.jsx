import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo, education } from "../data/mock";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: "20+", label: "ML/AI Projects" },
    { number: "85%", label: "Model Accuracy" },
    { number: "2", label: "Research Labs" },
    { number: "2028", label: "Expected Graduation" },
  ];

  return (
    <section id="about" className="py-20 bg-black text-white">
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
              About <span className="text-[#00FFD1]">Me</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-24 h-1 bg-[#00FFD1] mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl lg:text-3xl font-semibold text-[#00FFD1]">
                Bridging AI Research & Real-World Applications
              </h3>

              <p className="text-lg text-gray-300 leading-relaxed">
                {personalInfo.bio}
              </p>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white">Education</h4>
                <div className="bg-white bg-opacity-5 p-6 border border-white border-opacity-20">
                  <h5 className="text-lg font-medium text-[#00FFD1]">
                    {education.degree}
                  </h5>
                  <p className="text-gray-300">{education.university}</p>
                  <p className="text-gray-400">
                    Expected Graduation: {education.expectedGraduation}
                  </p>
                  <p className="text-gray-400 mt-2">{education.gpa}</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-white">
                  Key Focus Areas
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Machine Learning",
                    "Deep Learning",
                    "Materials Science",
                    "Biomedical Research",
                    "Full-Stack Development",
                  ].map((area, index) => (
                    <motion.span
                      key={area}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                      className="bg-[#00FFD1] bg-opacity-20 text-[#00FFD1] px-4 py-2 text-sm font-medium border border-[#00FFD1] border-opacity-30"
                    >
                      {area}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Content - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-2 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  className="text-center p-8 bg-white bg-opacity-5 border border-white border-opacity-20 hover:bg-opacity-10 transition-all duration-400"
                >
                  <div className="text-4xl lg:text-5xl font-bold text-[#00FFD1] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="text-center mt-12"
          >
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#00FFD1] text-black px-8 py-4 font-medium text-lg hover:bg-white hover:text-black transition-all duration-400"
            >
              Let's Collaborate
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
