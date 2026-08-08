import {
    Layout, Row, Col, Typography, Card, Space, Tooltip, theme
} from "antd";
import { ReadOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

import {
    SiReact, SiTypescript, SiOpenjdk, SiSpringboot, SiFirebase, SiDocker, SiGit,
    SiNodedotjs, SiDotnet, SiSharp, SiGithub
} from "react-icons/si";

import { useI18n } from "../i18n/useI18n";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (delay = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.55, delay, ease: "easeOut" },
    }),
};

type Props = { dark: boolean };

export default function AboutSection({ dark }: Props) {
    const { token } = theme.useToken();
    const { t } = useI18n();

    const tools = [
        { t: "React",           i: <SiReact color="#61DAFB" size={22} /> },
        { t: "TypeScript",      i: <SiTypescript color="#3178C6" size={22} /> },
        { t: "Node.js",         i: <SiNodedotjs color="#83CD29" size={22} /> },
        { t: "Java (OpenJDK)",  i: <SiOpenjdk color="#EA2D2E" size={22} /> },
        { t: "Spring Boot",     i: <SiSpringboot color="#6DB33F" size={22} /> },
        { t: "C#",              i: <SiSharp color="#239120" size={22} /> },
        { t: ".NET",            i: <SiDotnet color="#512BD4" size={22} /> },
        { t: "Firebase",        i: <SiFirebase color="#FFCA28" size={22} /> },
        { t: "Docker",          i: <SiDocker color="#2496ED" size={22} /> },
        { t: "Git",             i: <SiGit color="#F05033" size={22} /> },
        { t: "GitHub",          i: <SiGithub color={dark ? "#fff" : "#181717"} size={22} /> },
    ];

    const ORBIT_DURATION = 40;

    return (
        <Content id="about" style={{ padding: "80px 16px 100px", scrollMarginTop: 88 }}>

            {/* Título */}
            <Row justify="center" style={{ marginBottom: 56 }}>
                <Col style={{ textAlign: "center" }}>
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
                        <Title style={{ margin: 0 }}>{t("about_title")}</Title>
                    </motion.div>
                </Col>
            </Row>

            <Row gutter={[40, 48]} justify="center" align="middle">

                {/* Órbita interativa de tecnologias */}
                <Col xs={22} sm={18} md={11} lg={10}>
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.1}
                    >
                        <div
                            style={{
                                position: "relative",
                                width: "100%",
                                maxWidth: 360,
                                aspectRatio: "1 / 1",
                                margin: "0 auto",
                            }}
                        >
                            {/* Brilho pulsante de fundo */}
                            <motion.div
                                animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.22, 0.5] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                style={{
                                    position: "absolute",
                                    inset: "8%",
                                    borderRadius: "50%",
                                    background: "radial-gradient(circle, #1677ff55, transparent 70%)",
                                    zIndex: 0,
                                }}
                            />

                            {/* Anel decorativo tracejado */}
                            <div
                                style={{
                                    position: "absolute",
                                    inset: "10%",
                                    borderRadius: "50%",
                                    border: `1px dashed ${token.colorBorderSecondary}`,
                                    zIndex: 0,
                                }}
                            />

                            {/* Núcleo central */}
                            <div
                                style={{
                                    position: "absolute",
                                    left: "50%",
                                    top: "50%",
                                    transform: "translate(-50%, -50%)",
                                    width: "30%",
                                    aspectRatio: "1 / 1",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    background: dark
                                        ? "linear-gradient(135deg, #1677ff33, #7c3aed33)"
                                        : "linear-gradient(135deg, #1677ff22, #7c3aed22)",
                                    border: `1px solid ${token.colorBorderSecondary}`,
                                    boxShadow: "0 8px 30px -10px rgba(22,119,255,0.45)",
                                    zIndex: 2,
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: "clamp(18px, 4vw, 28px)",
                                        fontWeight: 800,
                                        fontFamily: "monospace",
                                        background: "linear-gradient(90deg, #1677ff, #7c3aed)",
                                        WebkitBackgroundClip: "text",
                                        backgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    {"</>"}
                                </span>
                            </div>

                            {/* Anel giratório com os ícones */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: ORBIT_DURATION, repeat: Infinity, ease: "linear" }}
                                style={{ position: "absolute", inset: 0, zIndex: 1 }}
                            >
                                {tools.map((tool, i) => {
                                    const angle = (360 / tools.length) * i;
                                    const rad = (angle * Math.PI) / 180;
                                    const x = 50 + 42 * Math.cos(rad);
                                    const y = 50 + 42 * Math.sin(rad);
                                    return (
                                        <div
                                            key={tool.t}
                                            style={{
                                                position: "absolute",
                                                left: `${x}%`,
                                                top: `${y}%`,
                                                transform: "translate(-50%, -50%)",
                                            }}
                                        >
                                            {/* Contra-rotação para o ícone ficar sempre em pé */}
                                            <motion.div
                                                animate={{ rotate: -360 }}
                                                transition={{ duration: ORBIT_DURATION, repeat: Infinity, ease: "linear" }}
                                            >
                                                <Tooltip title={tool.t}>
                                                    <motion.div
                                                        whileHover={{ scale: 1.22 }}
                                                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                                        style={{
                                                            width: 46,
                                                            height: 46,
                                                            borderRadius: 14,
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            background: token.colorBgContainer,
                                                            border: `1px solid ${token.colorBorderSecondary}`,
                                                            boxShadow: dark
                                                                ? "0 6px 16px rgba(0,0,0,0.4)"
                                                                : "0 6px 16px rgba(0,0,0,0.1)",
                                                            cursor: "default",
                                                        }}
                                                    >
                                                        {tool.i}
                                                    </motion.div>
                                                </Tooltip>
                                            </motion.div>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </div>

                        <Text type="secondary" style={{ display: "block", textAlign: "center", marginTop: 24 }}>
                            {t("about_tools")}
                        </Text>
                    </motion.div>
                </Col>

                {/* Conteúdo */}
                <Col xs={22} md={12} lg={12}>
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
                        <Paragraph style={{ fontSize: 16, lineHeight: 1.8, marginBottom: 24 }}>
                            {t("about_p1")}
                        </Paragraph>
                    </motion.div>

                    {/* Cards responsivos */}
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.3}>
                        <Row gutter={[16, 16]}>
                            {[
                                { title: t("about_card_title_1"), content: t("about_card_content_1") },
                                { title: t("about_card_title_2"), content: t("about_card_content_2") },
                            ].map((card) => (
                                <Col xs={24} sm={12} key={card.title}>
                                    <Card
                                        bordered
                                        style={{
                                            borderRadius: 16,
                                            border: `1px solid ${token.colorBorderSecondary}`,
                                            background: token.colorBgContainer,
                                            height: "100%",
                                        }}
                                    >
                                        <Space size="small">
                                            <ReadOutlined />
                                            <Text type="secondary">{card.title}</Text>
                                        </Space>
                                        <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                                            {card.content}
                                        </Paragraph>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </motion.div>
                </Col>
            </Row>
        </Content>
    );
}
