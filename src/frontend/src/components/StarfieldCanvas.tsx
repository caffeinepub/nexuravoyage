import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleDir: number;
}

export function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let stars: Star[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initStars = () => {
      stars = Array.from({ length: 200 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.2 + 0.2,
        speedX: (Math.random() - 0.5) * 0.12,
        speedY: -(Math.random() * 0.18 + 0.04),
        opacity: Math.random() * 0.7 + 0.15,
        twinkleSpeed: Math.random() * 0.009 + 0.002,
        twinkleDir: Math.random() > 0.5 ? 1 : -1,
      }));
    };

    const draw = () => {
      // Pure black background
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Stars
      for (const star of stars) {
        star.x += star.speedX;
        star.y += star.speedY;
        star.opacity += star.twinkleSpeed * star.twinkleDir;
        if (star.opacity >= 0.9) star.twinkleDir = -1;
        if (star.opacity <= 0.08) star.twinkleDir = 1;
        if (star.y < -5) star.y = canvas.height + 5;
        if (star.x < -5) star.x = canvas.width + 5;
        if (star.x > canvas.width + 5) star.x = -5;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(230,235,255,${star.opacity})`;
        ctx.fill();

        if (star.radius > 0.9) {
          const glow = ctx.createRadialGradient(
            star.x,
            star.y,
            0,
            star.x,
            star.y,
            star.radius * 5,
          );
          glow.addColorStop(0, `rgba(200,210,255,${star.opacity * 0.2})`);
          glow.addColorStop(1, "rgba(0,0,0,0)");
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 5, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    initStars();
    draw();

    const onResize = () => {
      resize();
      initStars();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
