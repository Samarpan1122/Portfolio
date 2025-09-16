import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Trophy, Star, DollarSign } from 'lucide-react';
import { awards } from '../data/mock';

const Awards = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const getAwardIcon = (type) => {
    switch (type) {
      case 'fellowship':
        return <Star className="w-8 h-8" />;
      case 'competition':
        return <Trophy className="w-8 h-8" />;
      case 'academic':
        return <Award className="w-8 h-8" />;
      default:
        return <Award className="w-8 h-8" />;
    }
  };

  const featuredAwards = awards.filter(award => award.featured);
  const otherAwards = awards.filter(award => !award.featured);

  return (
    <section id="awards" className="py-20 bg-black text-white">
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
              Awards & <span className="text-[#00FFD1]">Recognition</span>
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
              Recognition for academic excellence, research contributions, and innovative project development.
            </motion.p>
          </div>

          {/* Featured Awards */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-2xl font-bold text-[#00FFD1] mb-8"
            >
              Major Achievements
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredAwards.map((award, index) => (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                  className="bg-white bg-opacity-5 border border-white border-opacity-20 p-8 hover:bg-opacity-10 transition-all duration-400 group"
                >
                  <div className="text-[#00FFD1] mb-4 group-hover:scale-110 transition-transform duration-400">
                    {getAwardIcon(award.type)}
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#00FFD1] transition-colors duration-300">
                    {award.title}
                  </h4>
                  
                  <p className="text-gray-300 mb-3">
                    {award.organization}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-[#00FFD1] font-semibold">
                      {award.year}
                    </span>
                    {award.amount && (
                      <div className="flex items-center gap-1 text-green-400">
                        <DollarSign className="w-4 h-4" />
                        <span className="font-semibold">{award.amount}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other Awards */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="text-2xl font-bold text-[#00FFD1] mb-8"
            >
              Additional Recognition
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherAwards.map((award, index) => (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
                  className="bg-white bg-opacity-5 border border-white border-opacity-20 p-6 hover:bg-opacity-10 transition-all duration-400 group flex items-center gap-4"
                >
                  <div className="text-[#00FFD1] group-hover:scale-110 transition-transform duration-400">
                    {getAwardIcon(award.type)}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-[#00FFD1] transition-colors duration-300">
                      {award.title}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {award.organization}
                    </p>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-[#00FFD1] font-semibold">
                      {award.year}
                    </div>
                    {award.amount && (
                      <div className="flex items-center gap-1 text-green-400 text-sm">
                        <DollarSign className="w-3 h-3" />
                        <span>{award.amount}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievement Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2, duration: 0.6 }}
            className="mt-16 text-center bg-[#00FFD1] bg-opacity-10 border border-[#00FFD1] border-opacity-30 p-8"
          >
            <h3 className="text-2xl font-bold text-[#00FFD1] mb-4">
              Total Recognition Value
            </h3>
            <div className="text-4xl font-bold text-white mb-2">
              $6,340+
            </div>
            <p className="text-gray-300">
              in fellowships, awards, and recognition for academic and research excellence
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;