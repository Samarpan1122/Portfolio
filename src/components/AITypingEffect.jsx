import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AITypingEffect = ({ 
  text, 
  speed = 50, 
  className = "",
  showCursor = true,
  onComplete = () => {},
  delay = 0
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else if (!isComplete) {
        setIsComplete(true);
        onComplete();
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, onComplete, delay, isComplete]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block w-0.5 h-6 bg-[#00FFD1] ml-1"
        />
      )}
    </span>
  );
};

export default AITypingEffect;