import { Layout, Row, Col, Typography, theme } from "antd";
import { RocketOutlined, ApiOutlined, CloudOutlined, BgColorsOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { useI18n } from "../i18n/useI18n";
import BorderGlow from "../components/BorderGlow";
import TiltCard from "../components/TiltCard";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay, ease: "easeOut" },
  }),
};

interface ServicesProps {
  dark: boolean;
}

const CARDS = [
  {
    num: "01",
    icon: <RocketOutlined style={{ fontSize: 32, color: "#38bdf8" }} />,
    titleKey: "services_card_1_title" as const,
    contentKey: "services_card_1_content" as const,
    tags: ["React", "TypeScript", "SEO"],
    accent: "#38bdf8",
  },
  {
    num: "02",
    icon: <ApiOutlined style={{ fontSize: 32, color: "#6DB33F" }} />,
    titleKey: "services_card_2_title" as const,
    contentKey: "services_card_2_content" as const,
    tags: ["Java", "Spring Boot", "C#", ".NET"],
    accent: "#6DB33F",
  },
  {
    num: "03",
    icon: <CloudOutlined style={{ fontSize: 32, color: "#f59e0b" }} />,
    titleKey: "services_card_3_title" as const,
    contentKey: "services_card_3_content" as const,
    tags: ["React", "Node.js", "Spring Boot"],
    accent: "#f59e0b",
  },
  {
    num: "04",
    icon: <BgColorsOutlined style={{ fontSize: 32, color: "#a78bfa" }} />,
    titleKey: "services_card_4_title" as const,
    contentKey: "services_card_4_content" as const,
    tags: ["Figma", "Accessibility", "Design Systems"],
    accent: "#a78bfa",
  },
];

export default function ServicesSection({ dark }: ServicesProps) {
  const { token } = theme.useToken();
  const { t } = useI18n();

  return (
    <Content id="services" style={{ padding: "80px 16px 100px", scrollMarginTop: 88 }}>
      {/* Título */}
      <Row justify="center" style={{ marginBottom: 56 }}>
        <Col style={{ textAlign: "center" }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Title style={{ margin: 0 }}>{t("services_title")}</Title>
          </motion.div>
        </Col>
      </Row>

      <Row gutter={[24, 24]} justify="center">
        {CARDS.map((card, i) => (
          <Col key={card.num} xs={22} sm={11} md={11} lg={6}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.12}
              style={{ height: "100%" }}
            >
              <TiltCard maxTilt={9} glareColor="255,255,255" style={{ height: "100%" }}>
                <BorderGlow
                  edgeSensitivity={30}
                  glowColor="40 80 80"
                  backgroundColor={dark ? "#0a0a0a" : "#ffffff"}
                  borderRadius={28}
                  glowRadius={40}
                  glowIntensity={1}
                  coneSpread={25}
                  animated={false}
                  colors={
                    dark
                      ? ["#c084fc", "#f472b6", "#38bdf8"]
                      : ["#7c3aed", "#db2777", "#2563eb"]
                  }
                >
                  <div
                    style={{
                      position: "relative",
                      borderRadius: 28,
                      border: `1px solid ${token.colorBorderSecondary}`,
                      background: token.colorBgContainer,
                      padding: "32px 28px",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: 0,
                      overflow: "hidden",
                      boxShadow: dark
                        ? "0 20px 50px -20px rgba(0,0,0,0.6)"
                        : "0 20px 50px -25px rgba(0,0,0,0.2)",
                      cursor: "default",
                    }}
                  >
                    {/* Número gigante em marca d'água */}
                    <span
                      style={{
                        position: "absolute",
                        top: -18,
                        right: -6,
                        fontSize: 110,
                        fontWeight: 800,
                        lineHeight: 1,
                        color: `${card.accent}12`,
                        userSelect: "none",
                        pointerEvents: "none",
                        transform: "translateZ(0)",
                      }}
                    >
                      {card.num}
                    </span>

                    {/* Ícone com fundo, elevado em profundidade */}
                    <div
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: 18,
                        background: `linear-gradient(135deg, ${card.accent}30, ${card.accent}10)`,
                        border: `1px solid ${card.accent}40`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 22,
                        boxShadow: `0 8px 24px -8px ${card.accent}55`,
                        transform: "translateZ(50px)",
                        position: "relative",
                        zIndex: 2,
                      }}
                    >
                      {card.icon}
                    </div>

                    {/* Título */}
                    <Title
                      level={4}
                      style={{ marginBottom: 12, marginTop: 0, transform: "translateZ(25px)", position: "relative" }}
                    >
                      {t(card.titleKey)}
                    </Title>

                    {/* Descrição */}
                    <Paragraph
                      type="secondary"
                      style={{
                        marginBottom: 24,
                        lineHeight: 1.7,
                        flex: 1,
                        transform: "translateZ(15px)",
                        position: "relative",
                      }}
                    >
                      {t(card.contentKey)}
                    </Paragraph>

                    {/* Tags */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 8,
                        position: "relative",
                        transform: "translateZ(15px)",
                      }}
                    >
                      {card.tags.map(tag => (
                        <span
                          key={tag}
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            padding: "4px 12px",
                            borderRadius: 999,
                            background: `${card.accent}15`,
                            border: `1px solid ${card.accent}30`,
                            color: card.accent,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Barra de destaque inferior */}
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 3,
                        background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)`,
                        opacity: 0.8,
                      }}
                    />
                  </div>
                </BorderGlow>
              </TiltCard>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Content>
  );
}
