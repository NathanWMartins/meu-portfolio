import { useEffect, useRef } from "react";

interface Orb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}

interface Props {
  dark?: boolean;
}

export default function FloatingOrbs({ dark = false }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const colors = dark
      ? ["#1677ff", "#7c3aed", "#0ea5e9", "#6366f1", "#ec4899", "#22d3ee"]
      : ["#3b82f6", "#8b5cf6", "#0ea5e9", "#6366f1", "#ec4899"];

    const orbs: Orb[] = Array.from({ length: 9 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: 200 + Math.random() * 280,
      color: colors[i % colors.length],
      alpha: 0.42 + Math.random() * 0.25,
    }));

    let tick = 0;

    const draw = () => {
      tick += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = dark ? "lighter" : "source-over";

      orbs.forEach((orb, i) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < -orb.radius) orb.x = canvas.width + orb.radius;
        if (orb.x > canvas.width + orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = canvas.height + orb.radius;
        if (orb.y > canvas.height + orb.radius) orb.y = -orb.radius;

        // Respiração suave no raio para dar sensação de "vivo"
        const pulse = 1 + 0.16 * Math.sin(tick * 0.018 + i * 1.4);
        const r = orb.radius * pulse;

        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, r);
        grad.addColorStop(0, orb.color + Math.round(orb.alpha * 255).toString(16).padStart(2, "0"));
        grad.addColorStop(1, orb.color + "00");

        ctx.beginPath();
        ctx.arc(orb.x, orb.y, r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      ctx.globalCompositeOperation = "source-over";
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [dark]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
