import { useRef, type ReactNode, type CSSProperties, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  maxTilt?: number;
  scale?: number;
  glare?: boolean;
  glareColor?: string;
}

export default function TiltCard({
  children,
  className,
  style,
  maxTilt = 10,
  scale = 1.015,
  glare = true,
  glareColor = "255,255,255",
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const glareOpacity = useMotionValue(0);

  const springConfig = { stiffness: 260, damping: 22, mass: 0.6 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]), springConfig);
  const glareX = useTransform(x, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(y, [-0.5, 0.5], [0, 100]);
  const glareBg = useTransform([glareX, glareY], (v) => {
    const [gx, gy] = v as number[];
    return `radial-gradient(circle at ${gx}% ${gy}%, rgba(${glareColor},0.28), transparent 55%)`;
  });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
    glareOpacity.set(1);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    glareOpacity.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ perspective: 1200, height: "100%", ...style }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          position: "relative",
          height: "100%",
        }}
        whileHover={{ scale }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {children}
        {glare && (
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "inherit",
              pointerEvents: "none",
              background: glareBg,
              opacity: glareOpacity,
              mixBlendMode: "overlay",
              zIndex: 5,
            }}
          />
        )}
      </motion.div>
    </div>
  );
}
