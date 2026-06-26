import {
  Row,
  Col,
  Typography,
  Space,
  Tag,
  Tooltip,
  Modal,
  Grid,
  Button,
  theme,
} from "antd";
import { useEffect, useState } from "react";
import { useI18n } from "../i18n/useI18n";
import { motion } from "framer-motion";
import { Content } from "antd/es/layout/layout";
import BorderGlow from "../components/BorderGlow";
import { LinkOutlined, GithubOutlined } from "@ant-design/icons";

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
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay, ease: "easeOut" },
  }),
};

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

export default function ProjectsSection({ dark }: ProjectsProps) {
  const [selected, setSelected] = useState<Project | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const screens = Grid.useBreakpoint();
  const [currentImage, setCurrentImage] = useState(0);
  const { t } = useI18n();
  const { token } = theme.useToken();

  const projects: Project[] = [
    {
      title: t("projects_title_1"),
      description: t("projects_desc_1"),
      stack: ["React", "TypeScript", "MUI", "Java", "Spring Boot", "MySQL"],
      images: ["/projects/wiko/wiko-01.png", "/projects/wiko/wiko-02.png", "/projects/wiko/wiko-03.png", "/projects/wiko/wiko-04.png", "/projects/wiko/wiko-05.png"],
      liveUrl: "https://simada-frontend.vercel.app/",
      githubUrl: "https://github.com/NathanWMartins/simada-frontend",
      githubUrlOther: "https://github.com/KauanKoech/simada-backend",
    },
    {
      title: t("projects_title_4"),
      description: t("projects_desc_4"),
      stack: ["React Native", "TypeScript", "MUI", "NestJS", "Supabase"],
      images: ["/projects/futspot/futspot-01.png", "/projects/futspot/futspot-02.png", "/projects/futspot/futspot-03.png", "/projects/futspot/futspot-04.png", "/projects/futspot/futspot-05.png"],
      liveUrl: "https://futspot.vercel.app/",
      githubUrl: "https://github.com/NathanWMartins/futspot-frontend",
      githubUrlOther: "https://github.com/NathanWMartins/futspot-backend",
    },
    {
      title: t("projects_title_3"),
      description: t("projects_desc_3"),
      stack: ["React Native", "TypeScript", "Firebase", "MUI"],
      images: ["/projects/barber/barber-01.png", "/projects/barber/barber-02.png", "/projects/barber/barber-03.png", "/projects/barber/barber-04.png"],
      liveUrl: "https://barber-system-nine.vercel.app/",
      githubUrl: "https://github.com/NathanWMartins/barber-system",
    },
    {
      title: t("projects_title_2"),
      description: t("projects_desc_2"),
      stack: ["React Native", "Expo", "TypeScript"],
      images: ["/projects/adocao/adocao-04.png", "/projects/adocao/adocao-02.png", "/projects/adocao/adocao-03.png", "/projects/adocao/adocao-01.png"],
      liveUrl: "https://adocao-react-native.vercel.app/",
      githubUrl: "https://github.com/NathanWMartins/AdocaoReactNative",
    },
  ];

  useEffect(() => {
    if (!selected) return;
    const interval = setInterval(() => {
      setCurrentImage(prev => prev === selected.images.length - 1 ? 0 : prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, [selected]);

  useEffect(() => { setCurrentImage(0); }, [selected]);

  return (
    <>
      <Content id="projects" style={{ padding: screens.md ? "80px 80px 100px" : "80px 16px 100px", scrollMarginTop: 88 }}>

        {/* Título */}
        <Row justify="center" style={{ marginBottom: 56 }}>
          <Col style={{ textAlign: "center" }}>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Text type="secondary" style={{ display: "block", marginBottom: 8, letterSpacing: "0.08em", fontSize: 13, textTransform: "uppercase", fontWeight: 600 }}>
                {t("projects_subtitle")}
              </Text>
              <Title style={{ margin: 0 }}>{t("projects_title")}</Title>
            </motion.div>
          </Col>
        </Row>

        {/* Grid de projetos */}
        <Row gutter={[24, 24]} justify="center">
          {projects.map((p, i) => (
            <Col xs={24} sm={12} md={12} lg={12} xl={12} key={p.title}>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.1}
                style={{ height: "100%" }}
              >
                <BorderGlow
                  edgeSensitivity={30}
                  glowColor="40 80 80"
                  backgroundColor={dark ? "#060010" : "#ffffff"}
                  borderRadius={20}
                  glowRadius={40}
                  glowIntensity={1}
                  coneSpread={25}
                  animated={false}
                  colors={dark ? ["#c084fc", "#f472b6", "#38bdf8"] : ["#7c3aed", "#db2777", "#2563eb"]}
                >
                  <div
                    onClick={() => setSelected(p)}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    style={{
                      borderRadius: 20,
                      overflow: "hidden",
                      background: token.colorBgContainer,
                      border: `1px solid ${token.colorBorderSecondary}`,
                      cursor: "pointer",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* Imagem com overlay */}
                    <div style={{ position: "relative", height: 220, overflow: "hidden", flexShrink: 0 }}>
                      <motion.img
                        src={p.images[0]}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                        animate={{ scale: hoveredIdx === i ? 1.07 : 1 }}
                        transition={{ duration: 0.4 }}
                      />
                      {/* Gradiente sobre a imagem */}
                      <div style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
                      }} />

                      {/* Ícone de link externo no hover */}
                      <motion.div
                        animate={{ opacity: hoveredIdx === i ? 1 : 0, y: hoveredIdx === i ? 0 : -8 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          position: "absolute",
                          top: 12,
                          right: 12,
                          background: "rgba(255,255,255,0.15)",
                          backdropFilter: "blur(6px)",
                          borderRadius: 8,
                          padding: "6px 8px",
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <LinkOutlined style={{ color: "#fff", fontSize: 14 }} />
                        <Text style={{ color: "#fff", fontSize: 12, fontWeight: 600 }}>Ver projeto</Text>
                      </motion.div>

                      {/* Tags de stack sobrepostas na imagem */}
                      <div style={{
                        position: "absolute",
                        bottom: 12,
                        left: 12,
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 6,
                      }}>
                        {p.stack.map(tech => {
                          const icon = techIcons[tech];
                          return icon ? (
                            <Tooltip title={icon.tooltip} key={tech}>
                              <div style={{
                                width: 28,
                                height: 28,
                                borderRadius: 6,
                                background: "rgba(255,255,255,0.15)",
                                backdropFilter: "blur(6px)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "1px solid rgba(255,255,255,0.2)",
                              }}>
                                <img src={icon.src} alt={icon.tooltip} style={{ width: 16, height: 16, ...(icon.style || {}) }} />
                              </div>
                            </Tooltip>
                          ) : (
                            <Tag key={tech} style={{ margin: 0, fontSize: 11 }}>{tech}</Tag>
                          );
                        })}
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div style={{ padding: "20px 24px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
                      <Title level={4} style={{ marginBottom: 8, marginTop: 0 }}>{p.title}</Title>
                      <Paragraph type="secondary" ellipsis={{ rows: 2 }} style={{ marginBottom: 0, flex: 1 }}>
                        {p.description}
                      </Paragraph>
                    </div>
                  </div>
                </BorderGlow>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Content>

      {/* Modal de detalhe */}
      <Modal
        open={!!selected}
        footer={null}
        onCancel={() => setSelected(null)}
        width={900}
        styles={{ body: { padding: 0 } }}
      >
        {selected && (
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            {/* Imagem com slideshow */}
            <div style={{ position: "relative", height: 360, overflow: "hidden", borderRadius: "8px 8px 0 0" }}>
              <motion.img
                key={currentImage}
                src={selected.images[currentImage]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              {/* Indicadores */}
              <div style={{ position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 6 }}>
                {selected.images.map((_, idx) => (
                  <div
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    style={{
                      width: idx === currentImage ? 20 : 6,
                      height: 6,
                      borderRadius: 3,
                      background: idx === currentImage ? "#fff" : "rgba(255,255,255,0.4)",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Detalhes */}
            <div style={{ padding: "24px 28px 28px" }}>
              <Title level={3} style={{ marginBottom: 12, marginTop: 0 }}>{selected.title}</Title>
              <Paragraph style={{ marginBottom: 20, lineHeight: 1.75 }}>{selected.description}</Paragraph>

              {/* Stack */}
              <Space wrap size={[10, 10]} style={{ marginBottom: 24 }}>
                {selected.stack.map(tech => {
                  const icon = techIcons[tech];
                  return icon ? (
                    <Tooltip title={icon.tooltip} key={tech}>
                      <div style={{
                        display: "flex", alignItems: "center", gap: 6,
                        padding: "6px 12px", borderRadius: 8,
                        border: `1px solid ${token.colorBorderSecondary}`,
                        background: token.colorBgElevated,
                      }}>
                        <img src={icon.src} alt={icon.tooltip} style={{ width: 18, height: 18, ...(icon.style || {}) }} />
                        <Text style={{ fontSize: 13 }}>{icon.tooltip}</Text>
                      </div>
                    </Tooltip>
                  ) : (
                    <Tag key={tech} color="processing">{tech}</Tag>
                  );
                })}
              </Space>

              {/* Botões */}
              <Space wrap>
                {selected.liveUrl && (
                  <Button type="primary" icon={<LinkOutlined />} href={selected.liveUrl} target="_blank">
                    {t("projects_btn_view")}
                  </Button>
                )}
                <Button icon={<GithubOutlined />} href={selected.githubUrl} target="_blank">
                  GitHub Frontend
                </Button>
                {selected.githubUrlOther && (
                  <Button icon={<GithubOutlined />} href={selected.githubUrlOther} target="_blank">
                    GitHub Backend
                  </Button>
                )}
              </Space>
            </div>
          </motion.div>
        )}
      </Modal>
    </>
  );
}
