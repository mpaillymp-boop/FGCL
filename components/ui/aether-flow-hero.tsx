"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

/**
 * Aether-flow particle hero, adapted to the FGCL theme: white background with
 * a blue (#1e9df1) particle network and dark on-light copy.
 */
const AetherFlowHero = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    let particles: Particle[] = [];
    const mouse: { x: number | null; y: number | null; radius: number } = {
      x: null,
      y: null,
      radius: 200,
    };

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;

      constructor(
        x: number,
        y: number,
        directionX: number,
        directionY: number,
        size: number,
        color: string
      ) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (this.x > canvas!.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas!.height || this.y < 0) this.directionY = -this.directionY;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius + this.size) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            this.x -= forceDirectionX * force * 5;
            this.y -= forceDirectionY * force * 5;
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function init() {
      particles = [];
      const numberOfParticles = (canvas!.height * canvas!.width) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * (canvas!.width - size * 4) + size * 2;
        const y = Math.random() * (canvas!.height - size * 4) + size * 2;
        const directionX = Math.random() * 0.4 - 0.2;
        const directionY = Math.random() * 0.4 - 0.2;
        const color = "rgba(30, 157, 241, 0.85)"; // FGCL/X blue
        particles.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const distance =
            (particles[a].x - particles[b].x) ** 2 +
            (particles[a].y - particles[b].y) ** 2;

          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            const opacityValue = 1 - distance / 20000;
            const dxm = particles[a].x - (mouse.x ?? -9999);
            const dym = particles[a].y - (mouse.y ?? -9999);
            const distMouse = Math.sqrt(dxm * dxm + dym * dym);

            if (mouse.x && distMouse < mouse.radius) {
              ctx.strokeStyle = `rgba(15, 20, 25, ${opacityValue * 0.5})`;
            } else {
              ctx.strokeStyle = `rgba(30, 157, 241, ${opacityValue * 0.4})`;
            }
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      // White background each frame
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) particles[i].update();
      connect();
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };
    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    init();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 + 0.3, duration: 0.8, ease: "easeInOut" },
    }),
  };

  return (
    <div className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-background">
      <canvas ref={canvasRef} className="absolute left-0 top-0 h-full w-full" />

      <div className="relative z-10 max-w-4xl p-6 text-center">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 backdrop-blur-sm"
        >
          <Zap className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">
            Solutions numériques · Afrique centrale
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-6 text-5xl font-bold tracking-tighter text-foreground md:text-7xl"
        >
          Digitaliser. Optimiser. <span className="text-primary">Sécuriser.</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground"
        >
          FGCL conçoit des applications métier sur mesure pour optimiser vos
          processus, fiabiliser vos données et piloter votre performance en temps
          réel.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-[var(--radius)] bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-sm transition-all hover:opacity-90 active:scale-[0.98]"
          >
            Parlons de votre projet
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-border bg-card px-7 py-3.5 font-semibold text-foreground transition-all hover:border-primary active:scale-[0.98]"
          >
            Découvrir nos services
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AetherFlowHero;
