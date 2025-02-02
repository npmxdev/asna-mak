import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const fonts = [
  { name: "Playfair Display", weight: 800, style: "normal", category: "serif" },
  { name: "Lora", weight: 800, style: "normal", category: "serif" },
  { name: "Dancing Script", weight: 800, style: "normal", category: "cursive" },
  { name: "Pacifico", weight: 400, style: "normal", category: "cursive" },
  { name: "Great Vibes", weight: 400, style: "normal", category: "cursive" },  // New cursive font
  { name: "Allura", weight: 400, style: "normal", category: "cursive" },         // New cursive font
  { name: "Sacramento", weight: 400, style: "normal", category: "cursive" },     // New cursive font
  { name: "Cinzel", weight: 800, style: "normal", category: "serif" },           // New elegant serif font
  { name: "Abril Fatface", weight: 800, style: "normal", category: "serif" },    // New stylish serif font
  { name: "Fira Sans", weight: 400, style: "normal", category: "sans-serif" },   // New sans-serif font
];

const Hero = () => {
  const [fontIndex, setFontIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFontIndex((prev) => (prev + 1) % fonts.length);
    }, 1500); // Change font every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentFont = fonts[fontIndex];

  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: "url('/img_22.jpg')" }}
    >
      <div className="absolute inset-0 bg-opacity-30"></div> {/* Darker overlay */}
      <div className="text-center text-white relative z-10">
        <motion.h1
          key={fontIndex}
          className="font-extrabold text-5xl md:text-8xl lg:text-9xl leading-tight tracking-wide"
          style={{
            fontFamily: `${currentFont.name}, ${currentFont.category}`,
            fontWeight: currentFont.weight,
            fontStyle: currentFont.style,
          }}
          initial={{ opacity: 0, y: 0 }} // Smooth fade-in effect
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }} // Smoother transition
        >
          ASNA & MAK
        </motion.h1>
      </div>
    </div>
  );
};

export default Hero;
