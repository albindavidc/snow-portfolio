import React, { useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext';

interface Particle {
  x: number;
  y: number;
  z: number;
  radius: number;
  dy: number;
  dx: number;
  opacity: number;
  type: 'bokeh' | 'back' | 'mid' | 'front' | 'sparkle';
  phase: number;
  rotation?: number;
  rotationSpeed?: number;
}

// Reference size the blurred-dot sprite is drawn at. Every "back" particle
// reuses this single pre-rendered sprite (scaled + alpha'd), instead of
// paying for a canvas `filter: blur()` recompile on every particle, every frame.
const SPRITE_REF_RADIUS = 3;
const SPRITE_PADDING = 4; // room for the blur falloff so it isn't clipped

const createBlurredDotSprite = (isLight: boolean): HTMLCanvasElement => {
  const size = (SPRITE_REF_RADIUS + SPRITE_PADDING) * 2;
  const off = document.createElement('canvas');
  off.width = size;
  off.height = size;
  const octx = off.getContext('2d');
  if (octx) {
    octx.filter = 'blur(1.5px)'; // paid ONCE here, not per-particle per-frame
    octx.fillStyle = isLight ? '#0f172a' : '#ffffff'; // slate-900 or white
    octx.beginPath();
    octx.arc(size / 2, size / 2, SPRITE_REF_RADIUS, 0, Math.PI * 2);
    octx.fill();
  }
  return off;
};

export const Snowfall: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const isLight = theme === 'light';
    const particleColorStr = isLight ? '15, 23, 42' : '255, 255, 255';
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let animationFrameId: number | null = null;
    let particles: Particle[] = [];
    let isMobile = width < 768;
    let isRunning = false;

    const dotSprite = createBlurredDotSprite(isLight);
    const spriteSize = dotSprite.width;

    const createParticles = () => {
      particles = [];

      // 1. Bokeh (Background Orbs)
      const bokehCount = isMobile ? 3 : 6;
      for (let i = 0; i < bokehCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random() * 0.5 + 0.1,
          radius: Math.random() * 150 + 50,
          dy: (Math.random() * 0.2 + 0.1) * -1,
          dx: (Math.random() - 0.5) * 0.1,
          opacity: Math.random() * 0.05 + 0.01,
          type: 'bokeh',
          phase: Math.random() * Math.PI * 2
        });
      }

      // 2. Back Snow (now sprite-based, no per-frame filter cost)
      const backSnowCount = isMobile ? 50 : 120;
      for (let i = 0; i < backSnowCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: 0.2,
          radius: Math.random() * 1.5 + 0.5,
          dy: Math.random() * 0.5 + 0.2,
          dx: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.3 + 0.1,
          type: 'back',
          phase: Math.random() * Math.PI * 2
        });
      }

      // 3. Mid Snow
      const midSnowCount = isMobile ? 30 : 70;
      for (let i = 0; i < midSnowCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: 0.5,
          radius: Math.random() * 1.5 + 1.5,
          dy: Math.random() * 1 + 0.5,
          dx: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.4 + 0.2,
          type: 'mid',
          phase: Math.random() * Math.PI * 2
        });
      }

      // 4. Front Snow (Detailed)
      const frontSnowCount = isMobile ? 5 : 12;
      for (let i = 0; i < frontSnowCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: 1,
          radius: Math.random() * 4 + 4,
          dy: Math.random() * 1.5 + 1,
          dx: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.5 + 0.4,
          type: 'front',
          phase: Math.random() * Math.PI * 2,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02
        });
      }

      // 5. Sparkles
      const sparkleCount = isMobile ? 10 : 25;
      for (let i = 0; i < sparkleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: 0.8,
          radius: Math.random() * 1 + 0.5,
          dy: Math.random() * 0.2 - 0.1,
          dx: Math.random() * 0.2 - 0.1,
          opacity: Math.random(),
          type: 'sparkle',
          phase: Math.random() * Math.PI * 2
        });
      }
    };

    const drawSnowflake = (c: CanvasRenderingContext2D, x: number, y: number, radius: number, opacity: number, rotation: number = 0) => {
      c.save();
      c.translate(x, y);
      c.rotate(rotation);
      c.beginPath();
      for (let i = 0; i < 6; i++) {
        c.moveTo(0, 0);
        c.lineTo(0, radius);
        c.moveTo(0, radius * 0.5);
        c.lineTo(radius * 0.2, radius * 0.7);
        c.moveTo(0, radius * 0.5);
        c.lineTo(-radius * 0.2, radius * 0.7);
        c.rotate(Math.PI / 3);
      }
      c.strokeStyle = `rgba(${particleColorStr}, ${opacity})`;
      c.lineWidth = radius * 0.15;
      c.lineCap = 'round';
      c.stroke();
      c.restore();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        if (!prefersReducedMotion) {
          p.y += p.dy;
          p.x += p.dx + Math.sin(p.phase) * (p.type === 'mid' ? 0.3 : 0.1);
          p.phase += 0.01;

          if (p.type === 'front' && p.rotation !== undefined && p.rotationSpeed !== undefined) {
            p.rotation += p.rotationSpeed;
          }

          if (p.y > height + p.radius) {
            p.y = -p.radius;
            p.x = Math.random() * width;
          } else if (p.y < -p.radius - 150) {
            p.y = height + p.radius + 150;
            p.x = Math.random() * width;
          }
          if (p.x > width + p.radius) p.x = -p.radius;
          if (p.x < -p.radius) p.x = width + p.radius;
        }

        if (p.type === 'bokeh') {
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
          gradient.addColorStop(0, `rgba(218, 165, 32, ${p.opacity})`);
          gradient.addColorStop(1, 'rgba(218, 165, 32, 0)');
          ctx.beginPath();
          ctx.fillStyle = gradient;
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'sparkle') {
          const currentOpacity = (Math.sin(p.phase * 5) * 0.5 + 0.5) * p.opacity;
          ctx.beginPath();
          ctx.fillStyle = `rgba(255, 215, 0, ${currentOpacity})`;
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'front') {
          drawSnowflake(ctx, p.x, p.y, p.radius, p.opacity, p.rotation);
        } else if (p.type === 'back') {
          // Cheap blit of a pre-blurred sprite instead of ctx.filter per particle.
          const scale = p.radius / SPRITE_REF_RADIUS;
          const drawSize = spriteSize * scale;
          ctx.globalAlpha = p.opacity;
          ctx.drawImage(dotSprite, p.x - drawSize / 2, p.y - drawSize / 2, drawSize, drawSize);
          ctx.globalAlpha = 1;
        } else {
          ctx.beginPath();
          ctx.fillStyle = `rgba(${particleColorStr}, ${p.opacity})`;
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      if (!prefersReducedMotion && isRunning) {
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    const start = () => {
      if (isRunning || prefersReducedMotion) return;
      isRunning = true;
      animationFrameId = requestAnimationFrame(draw);
    };

    const stop = () => {
      isRunning = false;
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };

    // Only spend CPU/GPU on the animation while the hero canvas is actually
    // visible (in viewport) and the tab is in the foreground.
    let isIntersecting = true;
    const handleVisibility = () => {
      const shouldRun = isIntersecting && document.visibilityState === 'visible';
      if (shouldRun) start();
      else stop();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        isIntersecting = entries[0]?.isIntersecting ?? true;
        handleVisibility();
      },
      { threshold: 0 }
    );
    observer.observe(canvas);
    document.addEventListener('visibilitychange', handleVisibility);

    // Debounce resize so we don't rebuild ~230 particles on every resize tick.
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        isMobile = width < 768;
        createParticles();
        if (prefersReducedMotion) draw();
      }, 150);
    };

    window.addEventListener('resize', handleResize);
    createParticles();
    if (prefersReducedMotion) {
      draw();
    } else {
      start();
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      observer.disconnect();
      clearTimeout(resizeTimeout);
      stop();
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};
