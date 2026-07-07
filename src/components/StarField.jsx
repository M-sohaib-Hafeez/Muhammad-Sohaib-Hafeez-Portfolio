import { useEffect, useRef } from 'react';

// Ambient background: drifting stars + a few slow "satellite" nodes with
// connecting lines when they pass near each other. Pure canvas, no deps.
export default function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height, dpr;
    let raf;
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const stars = [];
    const satellites = [];

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildField();
    }

    function buildField() {
      stars.length = 0;
      const count = Math.floor((width * height) / 9000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 1.2 + 0.3,
          baseAlpha: Math.random() * 0.6 + 0.25,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          phase: Math.random() * Math.PI * 2,
          driftX: (Math.random() - 0.5) * 0.04,
          driftY: (Math.random() - 0.5) * 0.04,
        });
      }

      satellites.length = 0;
      const satCount = 5;
      const colors = ['#46e8e0', '#8b7cf6', '#ff5fa2'];
      for (let i = 0; i < satCount; i++) {
        satellites.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: Math.random() * 1.5 + 1.8,
          color: colors[i % colors.length],
        });
      }
    }

    function step() {
      ctx.clearRect(0, 0, width, height);

      // stars
      for (const s of stars) {
        s.phase += s.twinkleSpeed;
        const alpha = s.baseAlpha + Math.sin(s.phase) * 0.25;
        s.x += s.driftX;
        s.y += s.driftY;
        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(231, 236, 251, ${Math.max(alpha, 0.08)})`;
        ctx.fill();
      }

      // satellite connections
      for (let i = 0; i < satellites.length; i++) {
        for (let j = i + 1; j < satellites.length; j++) {
          const a = satellites[i];
          const b = satellites[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = Math.min(width, height) * 0.45;
          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(139, 124, 246, ${0.14 * (1 - dist / maxDist)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // satellites (moving objects)
      for (const sat of satellites) {
        sat.x += sat.vx;
        sat.y += sat.vy;
        if (sat.x < -20) sat.x = width + 20;
        if (sat.x > width + 20) sat.x = -20;
        if (sat.y < -20) sat.y = height + 20;
        if (sat.y > height + 20) sat.y = -20;

        ctx.beginPath();
        ctx.arc(sat.x, sat.y, sat.r * 3, 0, Math.PI * 2);
        const glow = ctx.createRadialGradient(
          sat.x,
          sat.y,
          0,
          sat.x,
          sat.y,
          sat.r * 3
        );
        glow.addColorStop(0, sat.color + '55');
        glow.addColorStop(1, sat.color + '00');
        ctx.fillStyle = glow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(sat.x, sat.y, sat.r, 0, Math.PI * 2);
        ctx.fillStyle = sat.color;
        ctx.fill();
      }

      raf = requestAnimationFrame(step);
    }

    resize();
    window.addEventListener('resize', resize);

    if (reduceMotion) {
      // draw a single static frame
      step();
      cancelAnimationFrame(raf);
    } else {
      step();
    }

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield-canvas" aria-hidden="true" />;
}
