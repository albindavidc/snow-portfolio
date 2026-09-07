import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const NAME_VARIANTS = [
  { text: "ALBIN", font: "font-display" },        
  { text: "अल्बिन", font: "font-['Noto_Sans_Devanagari']" },  
  { text: "ആൽബിൻ", font: "font-['Noto_Sans_Malayalam']" },   
  { text: "ஆல்பின்", font: "font-['Noto_Sans_Tamil']" },      
  { text: "ఆల్బిన్", font: "font-['Noto_Sans_Telugu']" },      
  { text: "ಆಲ್ಬಿನ್", font: "font-['Noto_Sans_Kannada']" },     
  { text: "アルビン", font: "font-['Noto_Sans_JP']" },         
  { text: "阿尔宾", font: "font-['Noto_Sans_SC']" },           
  { text: "АЛЬБИН", font: "font-sans" },                       
  { text: "ԱԼԲԻՆ", font: "font-['Noto_Sans_Armenian']" },      
  { text: "ALBINUS", font: "font-display" },                   
  { text: "ΑΛΜΠΙΝ", font: "font-sans" },                       
  { text: "אלבין", font: "font-['Noto_Sans_Hebrew']" },        
];

export const CyclingName: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % NAME_VARIANTS.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div 
      className="relative flex items-center justify-center overflow-visible min-h-[clamp(80px,10vw,160px)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      tabIndex={0}
      aria-label="Albin (multilingual)"
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20, position: 'absolute' }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`text-[var(--text-main)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-2 leading-none relative ${NAME_VARIANTS[currentIndex].font}`}
        >
          {NAME_VARIANTS[currentIndex].text}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
