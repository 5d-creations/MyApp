// src/components/ConstellationBackground.jsx
import { useEffect, useRef } from "react";

export default function ConstellationBackground() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    let w = window.innerWidth;
    let h = window.innerHeight;

    // Adjust particle count for screen size
    const isMobile = window.innerWidth <= 768;
    const PARTICLE_COUNT = isMobile ? 60 : 150; 
    let particles = [];

    const setupCanvas = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };

    const createParticles = () => {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.6 + 0.4,
        twinkle: Math.random() * 0.05,
      }));
    };

    const drawGradient = () => {
      const gradient = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w);
      gradient.addColorStop(0, "rgba(50, 50, 150, 0.05)");
      gradient.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);
    };

    let animationId;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      drawGradient();

      particles.forEach((p) => {
        // Twinkle effect
        p.alpha += p.twinkle;
        if (p.alpha >= 1 || p.alpha <= 0.4) p.twinkle *= -1;

        p.x += p.vx;
        p.y += p.vy;

        if (mouse.current.x !== null) {
          const dx = mouse.current.x - p.x;
          const dy = mouse.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            p.x += dx / 200;
            p.y += dy / 200;
          }
        }

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(150,150,255,${p.alpha})`;
        // Reduce shadow for mobile
        ctx.shadowColor = "rgba(150,150,255,0.8)";
        ctx.shadowBlur = isMobile ? 3 : 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw connections, skip some for mobile
      const connectionDistance = isMobile ? 100 : 140;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDistance) {
            ctx.strokeStyle = `rgba(150,150,255,${1 - dist / connectionDistance})`;
            ctx.lineWidth = isMobile ? 0.3 : 0.4;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    setupCanvas();
    createParticles();
    draw();

    const handleResize = () => {
      setupCanvas();
      createParticles();
    };
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
