import { Layout, Row, Col, Typography, theme } from "antd";
import { CodeOutlined, ApiOutlined, BgColorsOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { useI18n } from "../i18n/useI18n";
import BorderGlow from "../components/BorderGlow";

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
    icon: <CodeOutlined style={{ fontSize: 32, color: "#61DAFB" }} />,
    titleKey: "services_card_1_title" as const,
    contentKey: "services_card_1_content" as const,
    tags: ["React", "TypeScript", "UI Libraries"],
    accent: "#61DAFB",
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
    icon: <BgColorsOutlined style={{ fontSize: 32, color: "#a78bfa" }} />,
    titleKey: "services_card_3_title" as const,
    contentKey: "services_card_3_content" as const,
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
          <Col key={card.num} xs={22} sm={20} md={20} lg={7}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.12}
              style={{ height: "100%" }}
            >
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
                    borderRadius: 28,
                    border: `1px solid ${token.colorBorderSecondary}`,
                    background: token.colorBgContainer,
                    padding: "32px 28px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 0,
                    transition: "transform .2s ease, box-shadow .2s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = dark
                      ? "0 12px 40px rgba(0,0,0,0.5)"
                      : "0 12px 40px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >

                  {/* Ícone com fundo */}
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 16,
                      background: `${card.accent}18`,
                      border: `1px solid ${card.accent}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                    }}
                  >
                    {card.icon}
                  </div>

                  {/* Título */}
                  <Title level={4} style={{ marginBottom: 12, marginTop: 0 }}>
                    {t(card.titleKey)}
                  </Title>

                  {/* Descrição */}
                  <Paragraph
                    type="secondary"
                    style={{ marginBottom: 24, lineHeight: 1.7, flex: 1 }}
                  >
                    {t(card.contentKey)}
                  </Paragraph>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
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
                </div>
              </BorderGlow>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Content>
  );
}
