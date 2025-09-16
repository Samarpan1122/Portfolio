import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FileText, Users, Calendar, ExternalLink } from "lucide-react";
import { publications } from "../data/mock";

const Research = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "published":
        return "text-green-400 border-green-400 bg-green-400";
      case "under review":
        return "text-yellow-400 border-yellow-400 bg-yellow-400";
      case "submitted":
        return "text-blue-400 border-blue-400 bg-blue-400";
      case "in preparation":
        return "text-gray-400 border-gray-400 bg-gray-400";
      default:
        return "text-gray-400 border-gray-400 bg-gray-400";
    }
  };

  const getTypeIcon = (type) => {
    return type === "conference paper" ? (
      <Users className="w-5 h-5" />
    ) : (
      <FileText className="w-5 h-5" />
    );
  };

  return (
    <section id="research" className="py-20 bg-black text-white">
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
              Research & <span className="text-[#00FFD1]">Publications</span>
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
              Contributing to cutting-edge research in machine learning,
              materials science, and biomedical applications through
              peer-reviewed publications.
            </motion.p>
          </div>

          {/* Research Overview Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="text-center bg-white bg-opacity-5 border border-white border-opacity-20 p-6">
              <div className="text-3xl font-bold text-[#00FFD1] mb-2">2</div>
              <div className="text-gray-300">Publications</div>
            </div>
            <div className="text-center bg-white bg-opacity-5 border border-white border-opacity-20 p-6">
              <div className="text-3xl font-bold text-[#00FFD1] mb-2">2</div>
              <div className="text-gray-300">Research Labs</div>
            </div>
            <div className="text-center bg-white bg-opacity-5 border border-white border-opacity-20 p-6">
              <div className="text-3xl font-bold text-[#00FFD1] mb-2">3+</div>
              <div className="text-gray-300">Research Areas</div>
            </div>
          </motion.div>

          {/* Publications List */}
          <div className="space-y-8">
            {publications.map((publication, index) => (
              <motion.div
                key={publication.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                className="bg-white bg-opacity-5 border border-white border-opacity-20 p-8 hover:bg-opacity-10 transition-all duration-400 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Publication Icon and Type */}
                  <div className="flex items-center gap-3 lg:flex-col lg:items-center lg:gap-2 flex-shrink-0">
                    <div className="text-[#00FFD1] group-hover:scale-110 transition-transform duration-400">
                      {getTypeIcon(publication.type)}
                    </div>
                    <span className="text-sm text-gray-400 uppercase tracking-wide">
                      {publication.type}
                    </span>
                  </div>

                  {/* Publication Details */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-[#00FFD1] transition-colors duration-300">
                        {publication.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-3">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{publication.authors.join(", ")}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{publication.year}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4">
                        {publication.journal || publication.conference}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      <div
                        className={`px-3 py-1 text-sm font-medium border bg-opacity-20 ${getStatusColor(
                          publication.status
                        )}`}
                      >
                        {publication.status.toUpperCase()}
                      </div>

                      {publication.link ? (
                        <motion.a
                          href={publication.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 bg-[#00FFD1] text-black px-4 py-2 font-medium hover:bg-white transition-all duration-400"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Publication
                        </motion.a>
                      ) : (
                        <div className="flex items-center gap-2 bg-gray-600 text-gray-400 px-4 py-2 font-medium cursor-not-allowed">
                          <ExternalLink className="w-4 h-4" />
                          {publication.status === 'published' ? 'Publication Link Coming Soon' : 'Under Review'}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Research Areas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-[#00FFD1] mb-8 text-center">
              Research Focus Areas
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Machine Learning for Materials Science",
                "Graph Neural Networks",
                "Biomedical Data Analysis",
                "Automated Machine Learning",
                "Large Language Models",
                "Computer Vision Applications",
              ].map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 2 + index * 0.1, duration: 0.4 }}
                  className="bg-[#00FFD1] bg-opacity-20 text-[#00FFD1] p-4 text-center border border-[#00FFD1] border-opacity-30 hover:bg-opacity-30 transition-all duration-400"
                >
                  <span className="font-medium">{area}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2.4, duration: 0.6 }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Interested in Research Collaboration?
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              I'm always open to collaborative research opportunities in machine
              learning, materials science, and interdisciplinary applications.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[#00FFD1] text-black px-8 py-4 font-medium text-lg hover:bg-white hover:text-black transition-all duration-400"
            >
              Contact for Collaboration
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
