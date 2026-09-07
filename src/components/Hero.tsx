import React from 'react';
import { motion } from 'motion/react';
import { Menu, History, Moon, Sun, ArrowDown } from 'lucide-react';
import { Snowfall } from './Snowfall';
import { CyclingName } from './CyclingName';
import { useTheme } from './ThemeContext';

export const Hero: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <section className="relative w-full h-[100svh] overflow-hidden bg-[var(--bg-hero)] bg-gradient-to-b from-[var(--bg-hero-start)] to-[var(--bg-hero-end)] flex flex-col text-[var(--text-main)] font-sans">
      {/* Background Effect layer */}
      <Snowfall />

      {/* Subtle vignettes */}
      <div className="absolute inset-0 pointer-events-none z-10" style={{ boxShadow: 'var(--vignette-shadow)' }} />

      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 h-20 px-6 md:px-12 flex items-center justify-between z-50 backdrop-blur-sm bg-[var(--nav-bg)]">
        <div className="text-[var(--color-brand)] font-bold text-2xl tracking-tighter">
          AD.
        </div>
        <nav className="hidden md:flex items-center gap-10 text-[11px] font-medium tracking-[0.2em] text-[var(--text-muted)]">
          <a href="#home" className="text-[var(--text-main)]">HOME</a>
          <a href="#about" className="hover:text-[var(--text-main)] transition-colors">ABOUT</a>
          <a href="#work" className="hover:text-[var(--text-main)] transition-colors">WORK</a>
          <a href="#experience" className="hover:text-[var(--text-main)] transition-colors">EXPERIENCE</a>
          <a href="#contact" className="hover:text-[var(--text-main)] transition-colors">CONTACT</a>
        </nav>
        <div className="flex items-center gap-6 opacity-60 text-[var(--text-main)]">
          <button className="hover:text-[var(--color-brand)] transition-colors" aria-label="History">
            <History size={18} strokeWidth={2} />
          </button>
          <button 
            className="hidden md:block hover:text-[var(--color-brand)] transition-colors" 
            aria-label="Toggle Theme"
            onClick={toggleTheme}
          >
            {theme === 'light' ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
          </button>
          <button className="md:hidden hover:text-[var(--color-brand)] transition-colors" aria-label="Menu">
            <Menu size={20} strokeWidth={2} />
          </button>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
        
        <div className="flex flex-col items-center gap-0 md:-gap-2">
          <CyclingName />
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="text-5xl md:text-7xl lg:text-8xl font-sans font-black tracking-tighter text-[var(--text-muted)] opacity-30 leading-none uppercase mt-2 md:mt-0"
          >
            DAVID C
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 max-w-2xl text-[var(--text-muted)] text-base md:text-lg font-light leading-relaxed px-4"
        >
          AI Full-Stack Developer & Software Engineer building <span className="text-[var(--color-brand)] font-normal">intelligent</span>, production-ready web platforms.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-0 inset-x-0 h-24 z-20 flex flex-col items-center justify-center gap-2 pointer-events-auto"
      >
        <span className="text-[10px] tracking-[0.3em] text-gray-500 font-semibold uppercase">SCROLL</span>
        <motion.div
          className="w-[1px] h-10 bg-gradient-to-b from-[var(--color-brand)] to-transparent"
        />
      </motion.div>

      {/* Subtle Side Rails */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 opacity-40 pointer-events-none z-10">
        <div className="w-px h-12 bg-[var(--color-brand)] mx-auto"></div>
        <div className="text-[10px] rotate-180 tracking-[0.2em] text-[var(--color-brand)] font-bold" style={{ writingMode: 'vertical-rl' }}>PORTFOLIO 2026</div>
      </div>

    </section>
  );
};
