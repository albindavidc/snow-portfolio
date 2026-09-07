import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const NAME_VARIANTS = [
  { text: "ALBIN",    fontFamily: "inherit" },
  { text: "अल्बिन",    fontFamily: "'Noto Sans Devanagari', sans-serif" },
  { text: "ആൽബിൻ",   fontFamily: "'Noto Sans Malayalam', sans-serif" },
  { text: "ஆல்பின்",   fontFamily: "'Noto Sans Tamil', sans-serif" },
  { text: "ఆల్బిన్",   fontFamily: "'Noto Sans Telugu', sans-serif" },
  { text: "ಆಲ್ಬಿన్",   fontFamily: "'Noto Sans Kannada', sans-serif" },
  { text: "アルビン",   fontFamily: "'Noto Sans JP', sans-serif" },
  { text: "阿尔宾",    fontFamily: "'Noto Sans SC', sans-serif" },
  { text: "АЛЬБИН",   fontFamily: "inherit" },
  { text: "ԱԼԲԻՆ",    fontFamily: "'Noto Sans Armenian', sans-serif" },
  { text: "ALBINUS",  fontFamily: "inherit" },
  { text: "ΑΛΜΠΙΝ",   fontFamily: "inherit" },
  { text: "אלבין",     fontFamily: "'Noto Sans Hebrew', sans-serif" },
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
      className="relative flex items-center justify-center overflow-visible min-h-[clamp(75px,10vw,140px)] cursor-default"
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
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)', scale: 0.95 }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
          exit={{ opacity: 0, y: -30, filter: 'blur(8px)', scale: 1.05, position: 'absolute' }}
          transition={{ 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1] // fluid custom easing
          }}
          whileHover={{ 
            scale: 1.03, 
            filter: 'drop-shadow(0 0 20px rgba(198,255,61,0.25))' 
          }}
          whileTap={{ scale: 0.98 }}
          className={`whitespace-nowrap text-[var(--text-main)] text-[clamp(3.5rem,14vw,8rem)] font-black tracking-tighter mb-2 md:mb-0 leading-none relative transition-colors duration-300`}
          style={{ fontFamily: NAME_VARIANTS[currentIndex].fontFamily }}
        >
          {NAME_VARIANTS[currentIndex].text}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
