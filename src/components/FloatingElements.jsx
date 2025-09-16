import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Zap, Database, Code, Bot } from 'lucide-react';

const FloatingElements = () => {
  const elements = [
    { Icon: Brain, delay: 0, duration: 6 },
    { Icon: Cpu, delay: 1, duration: 8 },
    { Icon: Zap, delay: 2, duration: 7 },
    { Icon: Database, delay: 0.5, duration: 9 },
    { Icon: Code, delay: 1.5, duration: 6.5 },
    { Icon: Bot, delay: 2.5, duration: 8.5 }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {elements.map(({ Icon, delay, duration }, index) => (
        <motion.div
          key={index}
          className="absolute text-[#00FFD1] text-opacity-10"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 0,
            scale: 0.5
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight
            ],
            rotate: [0, 360, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Icon size={24 + Math.random() * 32} />
        </motion.div>
      ))}
      
      {/* Floating geometric shapes */}
      {Array.from({ length: 8 }).map((_, index) => (
        <motion.div
          key={`shape-${index}`}
          className="absolute border border-[#00FFD1] border-opacity-20"
          style={{
            width: 20 + Math.random() * 40,
            height: 20 + Math.random() * 40,
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 0
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight
            ],
            rotate: [0, 360]
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;