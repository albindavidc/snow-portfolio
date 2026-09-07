import React, { useEffect, useRef } from 'react';

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

export const Snowfall: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let animationFrameId: number;
    let particles: Particle[] = [];

    const isMobile = width < 768;

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
          dy: (Math.random() * 0.2 + 0.1) * -1, // drift up slowly
          dx: (Math.random() - 0.5) * 0.1,
          opacity: Math.random() * 0.05 + 0.01,
          type: 'bokeh',
          phase: Math.random() * Math.PI * 2
        });
      }

      // 2. Back Snow
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

    const drawSnowflake = (ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, opacity: number, rotation: number = 0) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        ctx.moveTo(0, 0);
        ctx.lineTo(0, radius);
        // Draw tiny branches
        ctx.moveTo(0, radius * 0.5);
        ctx.lineTo(radius * 0.2, radius * 0.7);
        ctx.moveTo(0, radius * 0.5);
        ctx.lineTo(-radius * 0.2, radius * 0.7);
        ctx.rotate(Math.PI / 3);
      }
      ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.lineWidth = radius * 0.15;
      ctx.lineCap = 'round';
      ctx.stroke();
      ctx.restore();
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
          } else if (p.y < -p.radius - 150) { // For bokeh drifting up
             p.y = height + p.radius + 150;
             p.x = Math.random() * width;
          }
          if (p.x > width + p.radius) p.x = -p.radius;
          if (p.x < -p.radius) p.x = width + p.radius;
        }

        ctx.beginPath();
        if (p.type === 'bokeh') {
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
          gradient.addColorStop(0, `rgba(218, 165, 32, ${p.opacity})`);
          gradient.addColorStop(1, 'rgba(218, 165, 32, 0)');
          ctx.fillStyle = gradient;
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'sparkle') {
          const currentOpacity = (Math.sin(p.phase * 5) * 0.5 + 0.5) * p.opacity;
          ctx.fillStyle = `rgba(255, 215, 0, ${currentOpacity})`;
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'front') {
           drawSnowflake(ctx, p.x, p.y, p.radius, p.opacity, p.rotation);
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
          if (p.type === 'back') {
            ctx.filter = 'blur(1px)';
          }
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
          if (p.type === 'back') {
            ctx.filter = 'none';
          }
        }
      });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      createParticles();
      if (prefersReducedMotion) draw();
    };

    window.addEventListener('resize', handleResize);
    createParticles();
    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};
