"use client";

import { useEffect, useRef } from "react";

/**
 * Branded particle network background (adapted from the "Aether Flow" canvas
 * pattern, recolored to the FGCL palette: electric-blue particles + occasional
 * yellow brand nodes on a navy field). It fills its positioned parent rather
 * than the whole window, uses devicePixelRatio for crispness, and honors
 * prefers-reduced-motion by drawing a single static frame.
 */
type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  brand: boolean;
};

export function ParticleField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let particles: Particle[] = [];
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999, radius: 140 };

    const build = () => {
      const count = Math.min(Math.floor((w * h) / 13000), 120);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.6 + 0.8,
        brand: Math.random() < 0.12,
      }));
    };

    const resize = () => {
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    };

    const connect = () => {
      const maxDist = Math.min(w, h) * 0.16;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.5;
            const near =
              Math.hypot(particles[a].x - mouse.x, particles[a].y - mouse.y) <
              mouse.radius;
            ctx.strokeStyle = near
              ? `rgba(15, 20, 25, ${opacity})`
              : `rgba(30, 157, 241, ${opacity * 0.8})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const drawParticles = () => {
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.brand ? p.size + 0.6 : p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.brand
          ? "rgba(30, 157, 241, 0.95)"
          : "rgba(30, 157, 241, 0.55)";
        ctx.fill();
      }
    };

    const step = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        if (p.x < 0 || p.x > w) p.vx = -p.vx;
        if (p.y < 0 || p.y > h) p.vy = -p.vy;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < mouse.radius && dist > 0) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 1.6;
          p.y -= (dy / dist) * force * 1.6;
        }

        p.x += p.vx;
        p.y += p.vy;
      }
      connect();
      drawParticles();
      raf = requestAnimationFrame(step);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    resize();

    if (reduce) {
      ctx.clearRect(0, 0, w, h);
      connect();
      drawParticles();
    } else {
      window.addEventListener("pointermove", onMove);
      parent.addEventListener("pointerleave", onLeave);
      raf = requestAnimationFrame(step);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`absolute inset-0 h-full w-full ${className}`}
    />
  );
}
