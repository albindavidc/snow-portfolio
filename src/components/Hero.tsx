import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Moon, Sun, FileText, Download } from 'lucide-react';
import { Snowfall } from './Snowfall';
import { CyclingName } from './CyclingName';
import { useTheme } from './ThemeContext';

export const Hero: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

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
        <div className="flex items-center gap-6 opacity-60 text-[var(--text-main)] relative z-50">
          <button 
            className="hover:text-[var(--color-brand)] transition-colors" 
            aria-label="Toggle Theme"
            onClick={toggleTheme}
          >
            {theme === 'light' ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
          </button>
          <button 
            className="md:hidden hover:text-[var(--color-brand)] transition-colors" 
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 bg-[var(--bg-card)]/95 backdrop-blur-xl border border-[var(--border-color)] rounded-3xl p-6 shadow-2xl md:hidden flex flex-col items-center gap-6 text-[11px] font-bold tracking-[0.2em] text-[var(--text-muted)]"
          >
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-[var(--text-main)] w-full text-center py-2">HOME</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--text-main)] transition-colors w-full text-center py-2">ABOUT</a>
            <a href="#work" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--text-main)] transition-colors w-full text-center py-2">WORK</a>
            <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--text-main)] transition-colors w-full text-center py-2">EXPERIENCE</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--text-main)] transition-colors w-full text-center py-2">CONTACT</a>
          </motion.div>
        )}
      </AnimatePresence>

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
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 z-20"
        >
          <button 
            onClick={() => setIsResumeModalOpen(true)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--text-main)] text-[var(--bg-card)] text-[13px] font-bold hover:bg-[var(--color-brand)] hover:text-black transition-all duration-300 pointer-events-auto"
          >
            <FileText size={14} strokeWidth={2} />
            View Resume
          </button>
          <a 
            href="/Albin_David_C_Resume.pdf" 
            download="Albin_David_C_Resume.pdf"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border-color)] text-[var(--text-main)] text-[13px] font-bold hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] transition-all duration-300 pointer-events-auto"
          >
            <Download size={14} strokeWidth={2} />
            Download
          </a>
        </motion.div>
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

      {/* Resume Modal */}
      <AnimatePresence>
        {isResumeModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/60 backdrop-blur-md"
            onClick={() => setIsResumeModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl h-[85vh] md:h-[90vh] bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl md:rounded-3xl shadow-2xl flex flex-col overflow-hidden pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-color)] bg-[var(--bg-card)]/50 backdrop-blur-sm z-10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[var(--color-brand)]/10 rounded-full text-[var(--color-brand)]">
                    <FileText size={18} />
                  </div>
                  <h3 className="font-bold tracking-wide text-sm md:text-base text-[var(--text-main)]">Albin_David_C_Resume.pdf</h3>
                </div>
                <div className="flex items-center gap-2">
                  <a 
                    href="/Albin_David_C_Resume.pdf" 
                    download="Albin_David_C_Resume.pdf"
                    className="p-2 hover:bg-white/10 rounded-full transition-colors text-[var(--text-muted)] hover:text-[var(--text-main)]"
                    title="Download"
                  >
                    <Download size={20} />
                  </a>
                  <button 
                    onClick={() => setIsResumeModalOpen(false)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors text-[var(--text-muted)] hover:text-[var(--text-main)]"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
              
              {/* PDF Viewer */}
              <div className="flex-1 w-full bg-white relative">
                <iframe 
                  src="/Albin_David_C_Resume.pdf#toolbar=0" 
                  className="absolute inset-0 w-full h-full border-0"
                  title="Resume PDF"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
