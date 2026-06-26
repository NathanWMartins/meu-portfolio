import {
  Layout,
  Row,
  Col,
  Avatar,
  Typography,
  Space,
  Button,
  Grid,
} from "antd";
import { ArrowRightOutlined, DownloadOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import me from "../assets/me.png";
import { useI18n } from "../i18n/useI18n";
import FloatingOrbs from "../components/FloatingOrbs";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

interface Props {
  dark?: boolean;
}

export default function HomeSection({ dark = false }: Props) {
  const screens = Grid.useBreakpoint();
  const titleLevel = screens.xl ? 1 : 2;
  const { t } = useI18n();

  return (
    <section
      id="home"
      style={{
        scrollMarginTop: 88,
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Orbes animados de fundo */}
      <FloatingOrbs dark={dark} />

      {/* Fade para suavizar transição inferior */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 180,
          background: `linear-gradient(to bottom, transparent, ${dark ? "#000000" : "#f5f5f5"})`,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Ruído sutil para textura */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Conteúdo */}
      <Content
        style={{ padding: "72px 16px 120px", position: "relative", zIndex: 1, width: "100%" }}
      >
        <Row justify="center">
          <Col xs={24} sm={22} md={20} lg={16} xl={14} xxl={12}>

            {/* Avatar com anel animado */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}
            >
              <div style={{ position: "relative", display: "inline-block" }}>
                {/* Anel pulsante */}
                <motion.div
                  animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.15, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    inset: -10,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, #1677ff55, transparent 70%)",
                    zIndex: 0,
                  }}
                />
                <Avatar
                  src={me}
                  size={160}
                  style={{
                    position: "relative",
                    zIndex: 1,
                    border: "3px solid rgba(22, 119, 255, 0.4)",
                    boxShadow: "0 8px 32px rgba(22, 119, 255, 0.25)",
                  }}
                />
              </div>
            </motion.div>

            {/* Greeting badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.15}
              style={{ textAlign: "center", marginBottom: 8 }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 16px",
                  borderRadius: 999,
                  background: dark
                    ? "rgba(22,119,255,0.15)"
                    : "rgba(22,119,255,0.08)",
                  border: "1px solid rgba(22,119,255,0.2)",
                  fontSize: 14,
                }}
              >
                <span style={{ fontSize: 16 }}>👋</span>
                <Text>
                  {t("home_greeting")} <Text strong>Nathan Will Martins</Text>
                </Text>
              </span>
            </motion.div>

            {/* Título principal */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
            >
              <Title
                level={titleLevel}
                style={{
                  textAlign: "center",
                  marginTop: 16,
                  marginBottom: 16,
                  lineHeight: 1.1,
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                }}
              >
                <span dangerouslySetInnerHTML={{ __html: t("home_job") }} />
              </Title>
            </motion.div>

            {/* Descrição */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.45}
            >
              <Paragraph
                type="secondary"
                style={{
                  textAlign: "center",
                  margin: "0 auto 32px",
                  maxWidth: 620,
                  fontSize: 15,
                  lineHeight: 1.7,
                }}
              >
                {t("home_desription")}
              </Paragraph>
            </motion.div>

            {/* Botões */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.6}
            >
              <Row justify="center">
                <Space size="large" wrap>
                  <a href="#contact" style={{ textDecoration: "none" }}>
                    <Button
                      type="primary"
                      size="large"
                      icon={<ArrowRightOutlined />}
                      style={{
                        boxShadow: "0 4px 20px rgba(22,119,255,0.35)",
                        height: 46,
                        paddingInline: 28,
                      }}
                    >
                      {t("home_contact_btn")}
                    </Button>
                  </a>

                  <a
                    href="/CurriculoNathanWill.pdf"
                    download
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      size="large"
                      icon={<DownloadOutlined />}
                      style={{ height: 46, paddingInline: 28 }}
                    >
                      {t("home_resume_btn")}
                    </Button>
                  </a>
                </Space>
              </Row>
            </motion.div>

            {/* Scroll hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              style={{ textAlign: "center", marginTop: 64 }}
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                style={{ display: "inline-block" }}
              >
                <div
                  style={{
                    width: 24,
                    height: 38,
                    borderRadius: 12,
                    border: "2px solid rgba(22,119,255,0.3)",
                    margin: "0 auto",
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: 6,
                  }}
                >
                  <motion.div
                    animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                      width: 4,
                      height: 8,
                      borderRadius: 2,
                      background: "rgba(22,119,255,0.5)",
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>

          </Col>
        </Row>
      </Content>
    </section>
  );
}
