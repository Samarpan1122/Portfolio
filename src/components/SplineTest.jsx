import React, { useState } from "react";
import Spline from "@splinetool/react-spline";

const SplineTest = () => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="w-full h-96 bg-gray-900 relative border border-[#00FFD1] border-opacity-30">
      <h3 className="text-white text-center py-4">
        3D Model Test - Hover Interactions
      </h3>

      {!loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white">Loading 3D Model...</div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-red-500">
            Error loading 3D model: {error.message}
          </div>
        </div>
      )}

      <Spline
        scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode"
        style={{
          width: "100%",
          height: "100%",
          background: "transparent",
          cursor: isHovering ? "pointer" : "default",
        }}
        onLoad={(spline) => {
          console.log("✅ Test Spline loaded successfully:", spline);
          setLoaded(true);

          // Log available methods
          if (spline) {
            console.log(
              "Spline object methods:",
              Object.getOwnPropertyNames(spline)
            );
            console.log("Spline object:", spline);
          }
        }}
        onError={(err) => {
          console.error("❌ Test Spline error:", err);
          setError(err);
        }}
        onMouseEnter={() => {
          console.log("🎯 Test: Mouse entered Spline");
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          console.log("🎯 Test: Mouse left Spline");
          setIsHovering(false);
        }}
        onMouseDown={() => console.log("🖱️ Test: Mouse down on Spline")}
        onMouseMove={() => {
          if (isHovering) {
            // console.log('🎯 Test: Mouse moving over Spline');
          }
        }}
        onMouseUp={() => console.log("🖱️ Test: Mouse up on Spline")}
      />

      {loaded && (
        <div className="absolute bottom-4 left-4 text-green-500 text-sm">
          ✅ 3D Model Loaded -{" "}
          {isHovering ? "🎯 Hovering!" : "Try hovering over it!"}
        </div>
      )}

      {isHovering && (
        <div className="absolute top-4 left-4 text-[#00FFD1] text-sm">
          ✨ Hover detected!
        </div>
      )}
    </div>
  );
};

export default SplineTest;
