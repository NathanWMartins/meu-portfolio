import {
    Layout, Row, Col, Typography, Card, Space, Divider, Image, Tooltip, theme
} from "antd";
import { ReadOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

import {
    SiReact, SiTypescript, SiOpenjdk, SiSpringboot, SiFirebase, SiDocker, SiGit,
    SiNodedotjs, SiDotnet, SiSharp, SiGithub
} from "react-icons/si";

import portrait from "../assets/me.png";
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
        { t: "React",           i: <SiReact color="#61DAFB" size={26} /> },
        { t: "TypeScript",      i: <SiTypescript color="#3178C6" size={26} /> },
        { t: "Node.js",         i: <SiNodedotjs color="#83CD29" size={26} /> },
        { t: "Java (OpenJDK)",  i: <SiOpenjdk color="#EA2D2E" size={26} /> },
        { t: "Spring Boot",     i: <SiSpringboot color="#6DB33F" size={26} /> },
        { t: "C#",              i: <SiSharp color="#239120" size={26} /> },
        { t: ".NET",            i: <SiDotnet color="#512BD4" size={26} /> },
        { t: "Firebase",        i: <SiFirebase color="#FFCA28" size={26} /> },
        { t: "Docker",          i: <SiDocker color="#2496ED" size={26} /> },
        { t: "Git",             i: <SiGit color="#F05033" size={26} /> },
        { t: "GitHub",          i: <SiGithub color={dark ? "#fff" : "#181717"} size={26} /> },
    ];

    const fadeColor = dark ? token.colorBgLayout : "#f5f5f5";

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

                {/* Foto com decoração */}
                <Col xs={20} sm={16} md={10} lg={8}>
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.1}
                        style={{ position: "relative" }}
                    >
                        <Image
                            src={portrait}
                            alt="Portrait"
                            preview={false}
                            style={{
                                width: "100%",
                                borderRadius: 24,
                                boxShadow: dark
                                    ? "0 20px 48px rgba(0,0,0,0.5)"
                                    : "0 20px 48px rgba(0,0,0,0.14)",
                                display: "block",
                            }}
                        />
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

                    <Divider style={{ margin: "28px 0" }} />

                    {/* Carrossel de ferramentas */}
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.4}>
                        <Text type="secondary" style={{ display: "block", marginBottom: 12, textAlign: "center" }}>
                            {t("about_tools")}
                        </Text>

                        <div style={{ position: "relative", overflow: "hidden", borderRadius: 16 }}>
                            {/* Fade esquerdo */}
                            <div style={{
                                position: "absolute", left: 0, top: 0, bottom: 0, width: 48, zIndex: 2,
                                background: `linear-gradient(to right, ${fadeColor}, transparent)`,
                                pointerEvents: "none",
                            }} />
                            {/* Fade direito */}
                            <div style={{
                                position: "absolute", right: 0, top: 0, bottom: 0, width: 48, zIndex: 2,
                                background: `linear-gradient(to left, ${fadeColor}, transparent)`,
                                pointerEvents: "none",
                            }} />

                            <div style={{
                                borderRadius: 16,
                                border: `1px solid ${token.colorBorderSecondary}`,
                                background: token.colorBgContainer,
                                padding: "10px 0",
                                overflow: "hidden",
                            }}>
                                <div
                                    className="tools-track"
                                    style={{
                                        display: "flex",
                                        gap: 12,
                                        alignItems: "center",
                                        whiteSpace: "nowrap",
                                        width: "max-content",
                                    }}
                                >
                                    {[...tools, ...tools].map((item, idx) => (
                                        <Tooltip title={item.t} key={idx}>
                                            <div
                                                style={{
                                                    borderRadius: 16,
                                                    border: `1px solid ${token.colorBorderSecondary}`,
                                                    background: token.colorBgElevated,
                                                    width: 64,
                                                    height: 64,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    transition: "transform .2s ease",
                                                    cursor: "default",
                                                }}
                                                onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                                                onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
                                            >
                                                {item.i}
                                            </div>
                                        </Tooltip>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </Col>
            </Row>
        </Content>
    );
}
