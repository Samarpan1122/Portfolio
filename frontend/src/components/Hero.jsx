import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import ParticleBackground from "./ParticleBackground";
import SketchAnnotation from "./SketchAnnotations";
import AITypingEffect from "./AITypingEffect";
import FloatingElements from "./FloatingElements";
import { personalInfo } from "../data/mock";

const Hero = () => {
  const [showTyping, setShowTyping] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [splineError, setSplineError] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const splineRef = useRef();
  const splineApp = useRef();

  useEffect(() => {
    // Start typing effect after a delay
    const timer = setTimeout(() => setShowTyping(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <ParticleBackground />
      <FloatingElements />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 1px, #fff 1px, #fff 2px),
            repeating-linear-gradient(-90deg, #fff, #fff 1px, transparent 1px, transparent 7.6923%)
          `,
          backgroundSize: "100% 100%",
        }}
      />

      <div className="container mx-auto px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated Text */}
            <div className="space-y-4">
              <SketchAnnotation text="Hello, I'm" />

              <motion.h1
                className="text-5xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <span className="text-white">
                  {personalInfo.name.split(' ')[0]}
                </span>
              </motion.h1>

              {showTyping && (
                <AITypingEffect
                  text={personalInfo.title}
                  className="text-2xl lg:text-3xl text-[#00FFD1] font-medium"
                />
              )}

              <motion.p
                className="text-lg lg:text-xl text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {personalInfo.subtitle}
              </motion.p>

              <motion.p
                className="text-base lg:text-lg text-gray-400 max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                {personalInfo.bio}
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#00FFD1] text-black px-8 py-4 font-medium text-lg hover:bg-white hover:text-black transition-all duration-400 border-0"
              >
                View Projects
              </button>
              <a 
                href="/Samarpan_Mohanty_Resume.pdf"
                download="Samarpan_Mohanty_Resume.pdf"
                className="bg-white bg-opacity-10 text-white px-8 py-4 font-medium text-lg hover:bg-white hover:text-black transition-all duration-400 border-0 inline-block"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced 3D Spline with Hover Interactions */}
          <motion.div
            className="relative h-[600px] lg:h-[700px] z-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-full h-full overflow-visible relative z-0">
              {/* Glowing effect behind Spline */}
              <div className="absolute inset-0 bg-gradient-radial from-[#00FFD1] via-transparent to-transparent opacity-20 blur-3xl pointer-events-none z-0" />

              {/* 3D Spline Model with Hover Effects */}
              <motion.div
                className="relative w-full h-full"
                animate={{
                  scale: isHovering ? 1.02 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-radial from-[#00FFD1] via-transparent to-transparent rounded-lg"
                  animate={{
                    opacity: isHovering ? 0.3 : 0.1,
                    scale: isHovering ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ filter: "blur(20px)" }}
                />

                {!splineLoaded && !splineError && (
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-12 h-12 border-4 border-[#00FFD1] border-t-transparent rounded-full"
                    />
                  </div>
                )}

                {splineError && (
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="text-center text-[#00FFD1]">
                      <p className="text-lg">3D Model Loading...</p>
                      <p className="text-sm opacity-60">
                        Fallback: Interactive scene available
                      </p>
                    </div>
                  </div>
                )}

                {/* Interactive hint */}
                {splineLoaded && !isHovering && (
                  <motion.div
                    className="absolute bottom-4 right-4 text-[#00FFD1] text-sm opacity-60 pointer-events-none"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Hover to interact
                  </motion.div>
                )}

                {/* Hover status indicator */}
                {isHovering && (
                  <motion.div
                    className="absolute top-4 right-4 text-[#00FFD1] text-sm pointer-events-none"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  >
                    ✨ Interactive mode
                  </motion.div>
                )}

                <Spline
                  ref={splineRef}
                  scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode"
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "transparent",
                    pointerEvents: "auto",
                    position: "relative",
                    zIndex: 1,
                    cursor: isHovering ? "pointer" : "default",
                  }}
                  onLoad={(spline) => {
                    console.log("✅ Spline model loaded successfully");
                    setSplineLoaded(true);
                    setSplineError(null);
                    splineApp.current = spline;

                    // Enable mouse interaction and hover
                    if (spline && spline.setRuntimeParameters) {
                      spline.setRuntimeParameters({
                        enableInteraction: true,
                        enableOrbitControls: true,
                        enableZoom: true,
                        enablePan: true,
                      });
                    }
                  }}
                  onError={(error) => {
                    console.error("❌ Spline model failed to load:", error);
                    setSplineError(error);
                    setSplineLoaded(false);
                  }}
                  onMouseEnter={(e) => {
                    console.log("🎯 Mouse entered Spline model");
                    setIsHovering(true);

                    // Add hover effects to the Spline scene
                    if (splineApp.current) {
                      try {
                        // You can trigger specific animations or events here
                        // splineApp.current.emitEvent('mouseHover', 'start');
                        console.log("Triggering hover effect");
                      } catch (err) {
                        console.log("Hover trigger not available:", err);
                      }
                    }
                  }}
                  onMouseLeave={(e) => {
                    console.log("🎯 Mouse left Spline model");
                    setIsHovering(false);

                    // Remove hover effects
                    if (splineApp.current) {
                      try {
                        // splineApp.current.emitEvent('mouseHover', 'end');
                        console.log("Ending hover effect");
                      } catch (err) {
                        console.log("Hover end trigger not available:", err);
                      }
                    }
                  }}
                  onMouseMove={(e) => {
                    // Optional: React to mouse movement for more dynamic interactions
                    if (isHovering && splineApp.current) {
                      // You can add mouse tracking effects here
                      // console.log('Mouse moving over Spline model at:', e.clientX, e.clientY);
                    }
                  }}
                  onMouseDown={() => {
                    console.log("🖱️ Mouse down on Spline model");
                  }}
                  onMouseUp={() => {
                    console.log("🖱️ Mouse up on Spline model");
                  }}
                />
              </motion.div>

              {/* Floating AI Icons around Spline */}
              <motion.div
                className="absolute top-10 left-10 text-[#00FFD1] text-opacity-60 pointer-events-none z-10"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-8 h-8 border-2 border-[#00FFD1] border-opacity-40 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#00FFD1] rounded-full animate-pulse" />
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-20 right-10 text-[#00FFD1] text-opacity-60 pointer-events-none z-10"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <div className="w-6 h-6 border border-[#00FFD1] border-opacity-40 rounded-sm rotate-45">
                  <div className="w-full h-full bg-[#00FFD1] bg-opacity-20 animate-pulse" />
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 right-5 text-[#00FFD1] text-opacity-60 pointer-events-none z-10"
                animate={{
                  x: [0, 5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              >
                <div className="w-4 h-8 border border-[#00FFD1] border-opacity-40">
                  <div className="w-full h-2 bg-[#00FFD1] bg-opacity-20 animate-pulse" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="w-6 h-10 border-2 border-[#00FFD1] rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-[#00FFD1] rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
