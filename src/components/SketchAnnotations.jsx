import React, { useEffect, useRef } from 'react';
import { annotate } from 'rough-notation';

const SketchAnnotation = ({ 
  children, 
  type = 'underline', 
  color = '#00FFD1', 
  strokeWidth = 2,
  animate = true,
  animationDuration = 1000,
  delay = 0,
  iterations = 1
}) => {
  const ref = useRef();
  const annotationRef = useRef();

  useEffect(() => {
    if (ref.current && animate) {
      const annotation = annotate(ref.current, {
        type,
        color,
        strokeWidth,
        animationDuration,
        iterations,
        multiline: true
      });

      annotationRef.current = annotation;

      const timer = setTimeout(() => {
        annotation.show();
      }, delay);

      return () => {
        clearTimeout(timer);
        if (annotationRef.current) {
          annotationRef.current.hide();
        }
      };
    }
  }, [type, color, strokeWidth, animate, animationDuration, delay, iterations]);

  return (
    <span ref={ref} className="inline-block">
      {children}
    </span>
  );
};

export default SketchAnnotation;