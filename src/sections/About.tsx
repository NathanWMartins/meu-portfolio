import {
    Layout, Row, Col, Typography, Card, Space, Divider, Image, Tooltip, theme
} from "antd";
import { ReadOutlined } from "@ant-design/icons";

import {
    SiReact, SiTypescript, SiOpenjdk, SiSpringboot, SiFirebase, SiDocker, SiGit,
    SiNodedotjs, SiPostgresql, SiMongodb, SiGithub
} from "react-icons/si";

import portrait from "../assets/me.png";
import { useI18n } from "../i18n/I18nProvider";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

type Props = {
    dark: boolean;
};

export default function AboutSection({ dark }: Props) {
    const { token } = theme.useToken();
    const {t} = useI18n();

    const boxStyle: React.CSSProperties = {
        borderRadius: 16,
        border: `1px solid ${token.colorBorderSecondary}`,
        background: token.colorBgContainer,
    };

    return (
        <Content id="about" style={{ padding: "80px 16px" }}>
            <Row justify="center" style={{ marginBottom: 32 }}>
                <Col>
                    <Title style={{ margin: 0 }}>{t("about_title")}</Title>
                </Col>
            </Row>

            <Row gutter={[24, 24]} justify="center" align="top">
                <Col xs={22} md={10} lg={8}>
                    <Image
                        src={portrait}
                        alt="Portrait"
                        preview={false}
                        style={{
                            width: "100%",
                            borderRadius: 24,
                            boxShadow: "0 16px 40px rgba(0,0,0,0.18)",
                            display: "block",
                        }}
                    />
                </Col>

                <Col xs={22} md={12} lg={12} >
                    <Paragraph style={{ fontSize: 16, lineHeight: 1.8 }}>
                        {t("about_p1")}
                    </Paragraph>

                    <Space size={16} wrap>
                        <Card style={{ ...boxStyle, width: 290, marginTop: 20 }} bordered>
                            <Space size="small">
                                <ReadOutlined />
                                <Text type="secondary">{t("about_card_title_1")}</Text>
                            </Space>
                            <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                                {t("about_card_content_1")}
                            </Paragraph>
                        </Card>
                        <Card style={{ ...boxStyle, width: 290, marginTop: 20 }} bordered>
                            <Space size="small">
                                <ReadOutlined />
                                <Text type="secondary">{t("about_card_title_2")}</Text>
                            </Space>
                            <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                                {t("about_card_content_2")}
                            </Paragraph>
                        </Card>

                    </Space>

                    <Divider style={{ marginTop: 60, margin: "28px 0" }} />

                    <Row style={{ marginTop: 55 }}>
                        <Col span={24}>
                            <Text type="secondary" style={{ display: "block", marginBottom: 12, textAlign: "center" }}>
                                {t("about_tools")}
                            </Text>

                            <div
                                style={{
                                    position: "relative",
                                    overflow: "hidden",
                                    width: "100%",
                                    borderRadius: 16,
                                    paddingBottom: 10,
                                    border: `1px solid ${token.colorBorderSecondary}`,
                                    background: token.colorBgContainer,
                                    padding: "10px 0",
                                }}
                            >
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
                                    {[
                                        { t: "React", i: <SiReact color="#61DAFB" size={26} /> },
                                        { t: "TypeScript", i: <SiTypescript color="#3178C6" size={26} /> },
                                        { t: "Node.js", i: <SiNodedotjs color="#83CD29" size={26} /> },
                                        { t: "Java (OpenJDK)", i: <SiOpenjdk color="#EA2D2E" size={26} /> },
                                        { t: "Spring Boot", i: <SiSpringboot color="#6DB33F" size={26} /> },
                                        { t: "PostgreSQL", i: <SiPostgresql color="#336791" size={26} /> },
                                        { t: "MongoDB", i: <SiMongodb color="#4DB33D" size={26} /> },
                                        { t: "Firebase", i: <SiFirebase color="#FFCA28" size={26} /> },
                                        { t: "Docker", i: <SiDocker color="#2496ED" size={26} /> },
                                        { t: "Git", i: <SiGit color="#F05033" size={26} /> },
                                        { t: "GitHub", i: <SiGithub color={dark ? "#fff" : "#181717"} size={26} /> },

                                        // Duplicação para o loop
                                        { t: "React", i: <SiReact color="#61DAFB" size={26} /> },
                                        { t: "TypeScript", i: <SiTypescript color="#3178C6" size={26} /> },
                                        { t: "Node.js", i: <SiNodedotjs color="#83CD29" size={26} /> },
                                        { t: "Java (OpenJDK)", i: <SiOpenjdk color="#EA2D2E" size={26} /> },
                                        { t: "Spring Boot", i: <SiSpringboot color="#6DB33F" size={26} /> },
                                        { t: "PostgreSQL", i: <SiPostgresql color="#336791" size={26} /> },
                                        { t: "MongoDB", i: <SiMongodb color="#4DB33D" size={26} /> },
                                        { t: "Firebase", i: <SiFirebase color="#FFCA28" size={26} /> },
                                        { t: "Docker", i: <SiDocker color="#2496ED" size={26} /> },
                                        { t: "Git", i: <SiGit color="#F05033" size={26} /> },
                                        { t: "GitHub", i: <SiGithub color={dark ? "#fff" : "#181717"} size={26} /> },
                                    ].map((item, idx) => (
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
                                                }}
                                                onMouseEnter={(e) => ((e.currentTarget.style.transform = "translateY(-2px)"))}
                                                onMouseLeave={(e) => ((e.currentTarget.style.transform = "translateY(0)"))}
                                            >
                                                {item.i}
                                            </div>
                                        </Tooltip>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Content>
    );
}
