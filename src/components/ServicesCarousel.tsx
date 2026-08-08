import { useRef, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  type PanInfo,
  type MotionValue,
} from "framer-motion";

export interface ServiceSlide {
  icon: ReactNode;
  title: string;
  description: string;
  tags: string[];
  accent: string;
}

interface CarouselConfig {
  distanceDivisor: number;
  velocityDivisor: number;
  sensitivity: number;
  xMultiplier: number;
  yMultiplier: number;
  rotationMultiplier: number;
  scaleReduction: number;
}

const getCarouselConfig = (width: number): CarouselConfig => {
  if (width < 640) {
    return {
      distanceDivisor: 120,
      velocityDivisor: 500,
      sensitivity: 180,
      xMultiplier: 78,
      yMultiplier: 14,
      rotationMultiplier: 6,
      scaleReduction: 0.08,
    };
  }
  if (width < 1024) {
    return {
      distanceDivisor: 160,
      velocityDivisor: 650,
      sensitivity: 220,
      xMultiplier: 150,
      yMultiplier: 22,
      rotationMultiplier: 7,
      scaleReduction: 0.1,
    };
  }
  return {
    distanceDivisor: 200,
    velocityDivisor: 800,
    sensitivity: 250,
    xMultiplier: 210,
    yMultiplier: 28,
    rotationMultiplier: 8,
    scaleReduction: 0.12,
  };
};

interface Props {
  slides: ServiceSlide[];
  dark: boolean;
}

const AUTOPLAY_INTERVAL = 3000;

export default function ServicesCarousel({ slides, dark }: Props) {
  const scrollProgress = useMotionValue(0);
  const startProgress = useRef(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [active, setActive] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const total = slides.length;

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const unsub = scrollProgress.on("change", (v) => {
      const idx = ((Math.round(v) % total) + total) % total;
      setActive(idx);
    });
    return unsub;
  }, [scrollProgress, total]);

  // Troca automática a cada 5s, pausando durante o arraste ou hover
  useEffect(() => {
    if (isDragging || isHovered || total < 2) return;
    const id = window.setInterval(() => {
      const next = Math.round(scrollProgress.get()) + 1;
      animate(scrollProgress, next, { type: "spring", stiffness: 200, damping: 30, mass: 1 });
    }, AUTOPLAY_INTERVAL);
    return () => window.clearInterval(id);
  }, [isDragging, isHovered, resetKey, scrollProgress, total]);

  const config = useMemo(() => getCarouselConfig(windowWidth), [windowWidth]);

  function handleDragStart() {
    startProgress.current = scrollProgress.get();
    setIsDragging(true);
  }

  function handleDragEnd(_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    const dragDistance = info.offset.x;
    const velocity = info.velocity.x;
    const distanceShift = -dragDistance / config.distanceDivisor;
    const velocityShift = -velocity / config.velocityDivisor;
    let totalShift = Math.round(distanceShift + velocityShift);
    totalShift = Math.max(-3, Math.min(3, totalShift));
    const target = Math.round(startProgress.current) + totalShift;
    animate(scrollProgress, target, { type: "spring", stiffness: 200, damping: 30, mass: 1 });
    setIsDragging(false);
    setResetKey(k => k + 1);
  }

  function goTo(index: number) {
    animate(scrollProgress, index, { type: "spring", stiffness: 200, damping: 30, mass: 1 });
    setResetKey(k => k + 1);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 1100,
          height: "clamp(230px, 34vw, 320px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          userSelect: "none",
        }}
      >
        {/* Superfície transparente de arraste */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={handleDragStart}
          onDrag={(_, info) => {
            const delta = -info.delta.x / config.sensitivity;
            scrollProgress.set(scrollProgress.get() + delta);
          }}
          onDragEnd={handleDragEnd}
          style={{ position: "absolute", inset: 0, zIndex: 50, cursor: "grab" }}
          whileTap={{ cursor: "grabbing" }}
        />

        {slides.map((slide, i) => (
          <ServiceCard
            key={slide.title}
            slide={slide}
            index={i}
            total={total}
            progress={scrollProgress}
            config={config}
            dark={dark}
          />
        ))}
      </div>

      {/* Indicadores */}
      <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
        {slides.map((slide, i) => {
          const isActive = active === i;
          const isPaused = isDragging || isHovered;
          return (
            <button
              key={slide.title}
              onClick={() => goTo(i)}
              aria-label={slide.title}
              style={{
                position: "relative",
                width: isActive ? 26 : 8,
                height: 8,
                borderRadius: 4,
                border: "none",
                padding: 0,
                overflow: "hidden",
                cursor: "pointer",
                background: dark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.13)",
                transition: "width 0.3s ease",
              }}
            >
              {isActive && (
                <span
                  key={`${active}-${resetKey}-${isPaused}`}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: slide.accent,
                    animation: `services-dot-progress ${AUTOPLAY_INTERVAL}ms linear forwards`,
                    animationPlayState: isPaused ? "paused" : "running",
                  }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface CardProps {
  slide: ServiceSlide;
  index: number;
  total: number;
  progress: MotionValue<number>;
  config: CarouselConfig;
  dark: boolean;
}

function ServiceCard({ slide, index, total, progress, config, dark }: CardProps) {
  const offset = useTransform(progress, (p) => {
    let diff = (index - p) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  });

  const x = useTransform(offset, (o) => o * config.xMultiplier);
  const rotate = useTransform(offset, (o) => (Math.abs(o) < 0.05 ? 0 : o * config.rotationMultiplier));
  const y = useTransform(offset, (o) => (Math.abs(o) < 0.05 ? 0 : Math.abs(o) * config.yMultiplier));
  const scale = useTransform(offset, (o) => 1 - Math.abs(o) * config.scaleReduction);
  const opacity = useTransform(
    offset,
    [-total / 2, -total / 2 + 0.5, 0, total / 2 - 0.5, total / 2],
    [0, 1, 1, 1, 0]
  );
  const zIndex = useTransform(offset, (o) => Math.round(100 - Math.abs(o) * 10));
  const dimOpacity = useTransform(offset, [-2, -0.5, 0, 0.5, 2], [0.6, 0.22, 0, 0.22, 0.6]);
  const contentOpacity = useTransform(offset, [-0.6, 0, 0.6], [0, 1, 0]);

  return (
    <motion.div
      style={{
        x,
        rotate,
        y,
        scale,
        opacity,
        zIndex,
        position: "absolute",
        width: "clamp(260px, 62vw, 460px)",
        height: "clamp(190px, 26vw, 250px)",
        borderRadius: 24,
        overflow: "hidden",
        pointerEvents: "none",
        border: `1px solid ${slide.accent}35`,
        background: dark
          ? `linear-gradient(150deg, ${slide.accent}14, #0a0a10 65%)`
          : `linear-gradient(150deg, ${slide.accent}10, #ffffff 65%)`,
        boxShadow: dark
          ? "0 30px 60px -25px rgba(0,0,0,0.7)"
          : "0 30px 60px -30px rgba(0,0,0,0.25)",
      }}
    >
      {/* Número gigante em marca d'água */}
      <span
        style={{
          position: "absolute",
          top: -14,
          right: 4,
          fontSize: "clamp(70px, 9vw, 110px)",
          fontWeight: 800,
          lineHeight: 1,
          color: `${slide.accent}14`,
          userSelect: "none",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", padding: "clamp(20px, 3vw, 30px)" }}>
        <motion.div
          style={{
            width: 52,
            height: 52,
            borderRadius: 16,
            background: `linear-gradient(135deg, ${slide.accent}30, ${slide.accent}10)`,
            border: `1px solid ${slide.accent}45`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
            boxShadow: `0 8px 24px -8px ${slide.accent}55`,
            opacity: contentOpacity,
          }}
        >
          {slide.icon}
        </motion.div>

        <motion.h3
          style={{ margin: "0 0 8px", fontSize: "clamp(17px, 2vw, 21px)", fontWeight: 800, opacity: contentOpacity, color: dark ? "#fff" : "#141414" }}
        >
          {slide.title}
        </motion.h3>

        <motion.p
          style={{
            margin: 0,
            fontSize: 13.5,
            lineHeight: 1.65,
            color: dark ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.6)",
            opacity: contentOpacity,
            flex: 1,
            overflow: "hidden",
          }}
        >
          {slide.description}
        </motion.p>

        <motion.div style={{ display: "flex", flexWrap: "wrap", gap: 6, opacity: contentOpacity }}>
          {slide.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 11,
                fontWeight: 600,
                padding: "3px 10px",
                borderRadius: 999,
                background: `${slide.accent}18`,
                border: `1px solid ${slide.accent}35`,
                color: slide.accent,
              }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Escurecimento nos cards fora de foco */}
      <motion.div
        style={{ position: "absolute", inset: 0, background: "#000", opacity: dimOpacity, pointerEvents: "none" }}
      />
    </motion.div>
  );
}
