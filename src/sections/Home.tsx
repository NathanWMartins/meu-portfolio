import { useEffect, useState } from "react";
import {
  Layout,
  Row,
  Col,
  Typography,
  Space,
  Button,
  Grid,
} from "antd";
import { ArrowRightOutlined, DownloadOutlined } from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";
import me from "../assets/me.png";
import { useI18n } from "../i18n/useI18n";
import FloatingOrbs from "../components/FloatingOrbs";
import TiltCard from "../components/TiltCard";

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
  const isDesktop = !!screens.md;
  const { t } = useI18n();

  const words = [t("home_word_1"), t("home_word_2"), t("home_word_3")];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setWordIndex(0);
    const id = setInterval(() => {
      setWordIndex(i => (i + 1) % words.length);
    }, 2600);
    return () => clearInterval(id);
  }, [words.length, t]);

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
        <Row justify="center" align="middle" gutter={[40, 48]}>

          {/* Coluna de texto */}
          <Col xs={24} md={13} lg={12} xl={12}>

            {/* Greeting badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              style={{ textAlign: isDesktop ? "left" : "center", marginBottom: 8 }}
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
              custom={0.25}
            >
              <Title
                level={titleLevel}
                style={{
                  textAlign: isDesktop ? "left" : "center",
                  marginTop: 16,
                  marginBottom: 16,
                  lineHeight: 1.15,
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                }}
              >
                <span>{t("home_title_prefix")} </span>
                <span
                  style={{
                    display: "inline-block",
                    position: "relative",
                    verticalAlign: "top",
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={wordIndex}
                      initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -18, filter: "blur(4px)" }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      style={{
                        display: "inline-block",
                        background: "linear-gradient(90deg, #1677ff, #7c3aed)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      {words[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <br />
                <span>{t("home_title_suffix")}</span>
              </Title>
            </motion.div>

            {/* Descrição */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
            >
              <Paragraph
                type="secondary"
                style={{
                  textAlign: isDesktop ? "left" : "center",
                  margin: isDesktop ? "0 0 32px" : "0 auto 32px",
                  maxWidth: 560,
                  marginInline: isDesktop ? undefined : "auto",
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
              custom={0.55}
            >
              <Row justify={isDesktop ? "start" : "center"}>
                <Space size={isDesktop ? "large" : "small"} wrap={false}>
                  <a href="#contact" style={{ textDecoration: "none" }}>
                    <Button
                      type="primary"
                      size={isDesktop ? "large" : "middle"}
                      icon={<ArrowRightOutlined />}
                      style={{
                        boxShadow: "0 4px 20px rgba(22,119,255,0.35)",
                        height: isDesktop ? 46 : 38,
                        paddingInline: isDesktop ? 28 : 16,
                        fontSize: isDesktop ? 14 : 13,
                        whiteSpace: "nowrap",
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
                      size={isDesktop ? "large" : "middle"}
                      icon={<DownloadOutlined />}
                      style={{
                        height: isDesktop ? 46 : 38,
                        paddingInline: isDesktop ? 28 : 16,
                        fontSize: isDesktop ? 14 : 13,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {t("home_resume_btn")}
                    </Button>
                  </a>
                </Space>
              </Row>
            </motion.div>
          </Col>

          {/* Coluna da foto */}
          <Col xs={24} md={11} lg={10} xl={9}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.15}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div style={{ position: "relative", maxWidth: 340, width: "100%" }}>
                {/* Blob de fundo */}
                <motion.div
                  animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.2, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    inset: -30,
                    borderRadius: 32,
                    background: "linear-gradient(135deg, #1677ff55, #7c3aed44, transparent 70%)",
                    filter: "blur(20px)",
                    zIndex: 0,
                  }}
                />

                <TiltCard maxTilt={8} glareColor="255,255,255">
                  <div
                    style={{
                      position: "relative",
                      zIndex: 1,
                      borderRadius: 28,
                      overflow: "hidden",
                      border: `1px solid ${dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)"}`,
                      boxShadow: dark
                        ? "0 24px 60px -20px rgba(0,0,0,0.6)"
                        : "0 24px 60px -25px rgba(0,0,0,0.25)",
                    }}
                  >
                    <img
                      src={me}
                      alt="Nathan Will Martins"
                      style={{
                        width: "100%",
                        aspectRatio: "4 / 5",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />

                    {/* Faixa inferior estilo "cartão de produto" */}
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        padding: "14px 18px",
                        background: dark
                          ? "linear-gradient(to top, rgba(0,0,0,0.75), transparent)"
                          : "linear-gradient(to top, rgba(0,0,0,0.55), transparent)",
                      }}
                    >
                      <Text style={{ color: "#fff", fontWeight: 600, fontSize: 14 }}>
                        Nathan Will Martins
                      </Text>
                      <br />
                      <Text style={{ color: "rgba(255,255,255,0.8)", fontSize: 12 }}>
                        Full-Stack Developer
                      </Text>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </motion.div>
          </Col>

        </Row>

        <Row justify="center">
          <Col xs={24}>
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
