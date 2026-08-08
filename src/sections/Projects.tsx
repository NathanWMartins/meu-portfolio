import {
  Row,
  Col,
  Typography,
  Space,
  Tag,
  Tooltip,
  Grid,
  Button,
  theme,
} from "antd";
import { useEffect, useState } from "react";
import { useI18n } from "../i18n/useI18n";
import type { MessageKey } from "../i18n/I18nProvider";
import { motion, AnimatePresence } from "framer-motion";
import { Content } from "antd/es/layout/layout";
import BorderGlow from "../components/BorderGlow";
import TiltCard from "../components/TiltCard";
import { LinkOutlined, GithubOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const techIcons: Record<string, { src: string; tooltip: string; style?: React.CSSProperties }> = {
  React: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", tooltip: "React.js" },
  "React Native": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", tooltip: "React Native" },
  TypeScript: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", tooltip: "TypeScript" },
  Expo: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg", tooltip: "Expo", style: { filter: "invert(0.8)" } },
  Java: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", tooltip: "Java" },
  "Spring Boot": { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", tooltip: "Spring Boot" },
  MySQL: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", tooltip: "MySQL" },
  MUI: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg", tooltip: "Material UI" },
  Firebase: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", tooltip: "Firebase" },
  Supabase: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", tooltip: "Supabase" },
  NestJS: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg", tooltip: "NestJS" },
  NextJS: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", tooltip: "Next.js", style: { filter: "invert(1)" } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay, ease: "easeOut" },
  }),
};

const slideVariant = (x: number) => ({
  hidden: { opacity: 0, x },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: "easeOut" } },
});

const ACCENTS = ["#7c3aed", "#db2777", "#2563eb", "#0d9488"];
const ACCENTS_DARK = ["#c084fc", "#f472b6", "#38bdf8", "#2dd4bf"];

type Project = {
  title: string;
  description: string;
  stack: string[];
  images: string[];
  liveUrl?: string;
  githubUrl: string;
  githubUrlOther?: string;
};

interface ProjectsProps { dark: boolean }

interface ProjectItemProps {
  project: Project;
  index: number;
  dark: boolean;
  isMobile: boolean;
  t: (k: MessageKey) => string;
}

function ProjectItem({ project, index, dark, isMobile, t }: ProjectItemProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [paused, setPaused] = useState(false);
  const { token } = theme.useToken();
  const reverse = index % 2 === 1;
  const accent = dark ? ACCENTS_DARK[index % ACCENTS_DARK.length] : ACCENTS[index % ACCENTS.length];

  useEffect(() => {
    if (paused || project.images.length < 2) return;
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev === project.images.length - 1 ? 0 : prev + 1));
    }, 3200);
    return () => clearInterval(interval);
  }, [paused, project.images.length]);

  function goTo(idx: number) {
    setCurrentImage(((idx % project.images.length) + project.images.length) % project.images.length);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : reverse ? "row-reverse" : "row",
        alignItems: "flex-start",
        gap: isMobile ? 32 : 56,
        marginBottom: isMobile ? 72 : 120,
      }}
    >
      {/* Imagem */}
      <motion.div
        variants={slideVariant(isMobile ? 0 : reverse ? 60 : -60)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{ flex: "1 1 62%", width: "100%", maxWidth: isMobile ? "100%" : "62%", position: isMobile ? "static" : "sticky", top: 110 }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <TiltCard maxTilt={5} glareColor="255,255,255">
          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor={dark ? "#060010" : "#ffffff"}
            borderRadius={22}
            glowRadius={44}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={dark ? ["#c084fc", "#f472b6", "#38bdf8"] : ["#7c3aed", "#db2777", "#2563eb"]}
          >
            <div
              style={{
                position: "relative",
                borderRadius: 22,
                overflow: "hidden",
                background: dark
                  ? "linear-gradient(160deg, #14141f, #08080c)"
                  : "linear-gradient(160deg, #eef0f5, #e2e5ec)",
                border: `1px solid ${token.colorBorderSecondary}`,
                boxShadow: dark ? "0 30px 70px -30px rgba(0,0,0,0.7)" : "0 30px 70px -35px rgba(0,0,0,0.3)",
              }}
            >
              {/* Barra estilo navegador */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "12px 16px",
                  borderBottom: `1px solid ${token.colorBorderSecondary}`,
                }}
              >
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
                <div
                  style={{
                    marginLeft: 10,
                    flex: 1,
                    height: 22,
                    borderRadius: 6,
                    background: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 10px",
                    maxWidth: 260,
                  }}
                >
                  <Text style={{ fontSize: 11, opacity: 0.5 }}>
                    {(project.liveUrl || "").replace(/^https?:\/\//, "") || project.title.toLowerCase()}
                  </Text>
                </div>
              </div>

              <div style={{ position: "relative", aspectRatio: "2.3 / 1", overflow: "hidden" }}>
                <AnimatePresence mode="popLayout">
                  <motion.img
                    key={currentImage}
                    src={project.images[currentImage]}
                    initial={{ opacity: 0, scale: 1.01 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                  />
                </AnimatePresence>

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 25%)",
                    pointerEvents: "none",
                  }}
              />

              {/* Setas de navegação */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={() => goTo(currentImage - 1)}
                    aria-label="Imagem anterior"
                    style={{
                      position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)",
                      width: 34, height: 34, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.25)",
                      background: "rgba(0,0,0,0.35)", backdropFilter: "blur(6px)", color: "#fff",
                      display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                    }}
                  >
                    <LeftOutlined style={{ fontSize: 13 }} />
                  </button>
                  <button
                    onClick={() => goTo(currentImage + 1)}
                    aria-label="Próxima imagem"
                    style={{
                      position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
                      width: 34, height: 34, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.25)",
                      background: "rgba(0,0,0,0.35)", backdropFilter: "blur(6px)", color: "#fff",
                      display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                    }}
                  >
                    <RightOutlined style={{ fontSize: 13 }} />
                  </button>
                </>
              )}

              {/* Indicadores */}
              {project.images.length > 1 && (
                <div style={{ position: "absolute", bottom: 14, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 6 }}>
                  {project.images.map((_, idx) => (
                    <div
                      key={idx}
                      onClick={() => goTo(idx)}
                      style={{
                        width: idx === currentImage ? 20 : 6,
                        height: 6,
                        borderRadius: 3,
                        background: idx === currentImage ? "#fff" : "rgba(255,255,255,0.45)",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </div>
              )}
              </div>
            </div>
          </BorderGlow>
        </TiltCard>
      </motion.div>

      {/* Detalhes */}
      <motion.div
        variants={slideVariant(isMobile ? 0 : reverse ? -60 : 60)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{ flex: "1 1 44%", width: "100%", position: "relative" }}
      >
        <span
          style={{
            position: "absolute",
            top: isMobile ? -34 : -50,
            left: reverse && !isMobile ? "auto" : -6,
            right: reverse && !isMobile ? -6 : "auto",
            fontSize: isMobile ? 64 : 90,
            fontWeight: 800,
            color: `${accent}18`,
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <Text
          style={{
            display: "block",
            marginBottom: 8,
            letterSpacing: "0.08em",
            fontSize: 12,
            textTransform: "uppercase",
            fontWeight: 700,
            color: accent,
          }}
        >
          Projeto {String(index + 1).padStart(2, "0")}
        </Text>

        <Title level={3} style={{ marginTop: 0, marginBottom: 14 }}>
          {project.title}
        </Title>

        <Paragraph
          type="secondary"
          style={{ fontSize: 15.5, lineHeight: 1.8, marginBottom: 22 }}
          ellipsis={{
            rows: 5,
            expandable: "collapsible",
            symbol: (expanded) => (expanded ? t("projects_read_less") : t("projects_read_more")),
          }}
        >
          {project.description}
        </Paragraph>

        <Space
          wrap
          size={[10, 14]}
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center", width: "100%", marginBottom: 24 }}
        >
          {project.stack.map(tech => {
            const icon = techIcons[tech];
            return icon ? (
              <Tooltip title={icon.tooltip} key={tech}>
                <div
                  style={{
                    display: "flex", alignItems: "center", gap: 6,
                    height: 34, padding: "0 12px", borderRadius: 8,
                    border: `1px solid ${token.colorBorderSecondary}`,
                    background: token.colorBgElevated,
                    boxSizing: "border-box",
                  }}
                >
                  <img src={icon.src} alt={icon.tooltip} style={{ width: 16, height: 16, ...(icon.style || {}) }} />
                  <Text style={{ fontSize: 12.5 }}>{icon.tooltip}</Text>
                </div>
              </Tooltip>
            ) : (
              <Tag key={tech} color="processing" style={{ height: 34, display: "inline-flex", alignItems: "center", margin: 0 }}>
                {tech}
              </Tag>
            );
          })}
        </Space>

        <Space
          wrap={false}
          align="center"
          style={{ display: "flex", overflowX: "auto", maxWidth: "100%", paddingBottom: 4 }}
        >
          {project.liveUrl && (
            <Button
              type="primary"
              icon={<LinkOutlined />}
              href={project.liveUrl}
              target="_blank"
              style={{ background: accent, borderColor: accent, flexShrink: 0 }}
            >
              {t("projects_btn_view")}
            </Button>
          )}
          <Button icon={<GithubOutlined />} href={project.githubUrl} target="_blank" style={{ flexShrink: 0 }}>
            {project.githubUrlOther ? "Frontend" : "GitHub"}
          </Button>
          {project.githubUrlOther && (
            <Button icon={<GithubOutlined />} href={project.githubUrlOther} target="_blank" style={{ flexShrink: 0 }}>
              Backend
            </Button>
          )}
        </Space>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection({ dark }: ProjectsProps) {
  const screens = Grid.useBreakpoint();
  const { t } = useI18n();
  const isMobile = !screens.md;

  const projects: Project[] = [
    {
      title: t("projects_title_1"),
      description: t("projects_desc_1"),
      stack: ["React", "TypeScript", "Java", "MySQL"],
      images: ["/projects/wiko/wiko-01.png", "/projects/wiko/wiko-02.png", "/projects/wiko/wiko-03.png", "/projects/wiko/wiko-04.png", "/projects/wiko/wiko-05.png"],
      liveUrl: "https://simada-frontend.vercel.app/",
      githubUrl: "https://github.com/NathanWMartins/simada-frontend",
      githubUrlOther: "https://github.com/KauanKoech/simada-backend",
    },
    {
      title: t("projects_title_4"),
      description: t("projects_desc_4"),
      stack: ["React", "TypeScript", "NestJS", "Supabase"],
      images: ["/projects/futspot/futspot-01.png", "/projects/futspot/futspot-02.png", "/projects/futspot/futspot-03.png", "/projects/futspot/futspot-04.png", "/projects/futspot/futspot-05.png"],
      liveUrl: "https://futspot.vercel.app/",
      githubUrl: "https://github.com/NathanWMartins/futspot-frontend",
      githubUrlOther: "https://github.com/NathanWMartins/futspot-backend",
    },
    {
      title: t("projects_title_3"),
      description: t("projects_desc_3"),
      stack: ["React", "TypeScript", "Firebase", "MUI"],
      images: ["/projects/barber/barber-01.png", "/projects/barber/barber-02.png", "/projects/barber/barber-03.png", "/projects/barber/barber-04.png"],
      liveUrl: "https://barber-system-nine.vercel.app/",
      githubUrl: "https://github.com/NathanWMartins/barber-system",
    },
    {
      title: t("projects_title_2"),
      description: t("projects_desc_2"),
      stack: ["NextJS", "Supabase"],
      images: ["/projects/zebra/zebra-01.png", "/projects/zebra/zebra-02.png", "/projects/zebra/zebra-03.png", "/projects/zebra/zebra-04.png"],
      liveUrl: "https://zebrabolao.xyz/",
      githubUrl: "https://github.com/NathanWMartins/ZebraBolao",
    },
  ];

  return (
    <Content
      id="projects"
      style={{ padding: screens.md ? "80px 80px 40px" : "80px 16px 20px", scrollMarginTop: 88, overflow: "hidden" }}
    >
      {/* Título */}
      <Row justify="center" style={{ marginBottom: 72 }}>
        <Col style={{ textAlign: "center" }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Text type="secondary" style={{ display: "block", marginBottom: 8, letterSpacing: "0.08em", fontSize: 13, textTransform: "uppercase", fontWeight: 600 }}>
              {t("projects_subtitle")}
            </Text>
            <Title style={{ margin: 0 }}>{t("projects_title")}</Title>
          </motion.div>
        </Col>
      </Row>

      {/* Showcase alternado */}
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        {projects.map((p, i) => (
          <ProjectItem key={p.title} project={p} index={i} dark={dark} isMobile={isMobile} t={t} />
        ))}
      </div>
    </Content>
  );
}
