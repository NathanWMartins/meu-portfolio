import { Layout, Row, Col, Typography, Card, Space, theme } from "antd";
import {
    CodeOutlined,
    ApiOutlined,
    BgColorsOutlined
} from "@ant-design/icons";
import { useI18n } from "../i18n/I18nProvider";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function ServicesSection() {
    const { token } = theme.useToken();
    const {t} = useI18n();

    const cardStyle: React.CSSProperties = {
        borderRadius: 16,
        border: `1px solid ${token.colorBorderSecondary}`,
        background: token.colorBgContainer,
        transition: "transform .2s ease, box-shadow .2s ease",
        cursor: "pointer",
        textAlign: "left",
        height: "100%",
    };

    const handleHover = (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
    };

    const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
    };

    return (
        <Content id="services" style={{ padding: "80px 16px" }}>
            <Row justify="center" style={{ marginBottom: 32 }}>
                <Col>
                    <Title style={{ margin: 0, textAlign: "center" }}>{t("services_title")}</Title>
                </Col>
            </Row>

            <Row gutter={[24, 24]} justify="center">
                <Col xs={22} sm={20} md={12} lg={7}>
                    <Card
                        bordered
                        hoverable
                        style={cardStyle}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                    >
                        
                        <Space size="middle" align="start">
                            <CodeOutlined style={{ fontSize: 28, color: "#61DAFB" }} />
                            <div>
                                <Title level={4} style={{ marginBottom: 4 }}>
                                    {t("services_card_1_title")}
                                </Title>
                                <Paragraph type="secondary" style={{ marginBottom: 8 }}>
                                    {t("services_card_1_content")}
                                </Paragraph>
                                <Text style={{marginTop:"auto"}} strong>React · TypeScript · UI Libraries</Text>
                            </div>
                        </Space>
                    </Card>
                </Col>

                <Col xs={22} sm={20} md={12} lg={7}>
                    <Card
                        bordered
                        hoverable
                        style={cardStyle}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                    >
                        <Space size="middle" align="start">
                            <ApiOutlined style={{ fontSize: 28, color: "#EA2D2E" }} />
                            <div>
                                <Title level={4} style={{ marginBottom: 4 }}>
                                    {t("services_card_2_title")}
                                </Title>
                                <Paragraph type="secondary" style={{ marginBottom: 8 }}>
                                    {t("services_card_2_content")}
                                </Paragraph>
                                <Text style={{marginTop:"auto"}} strong>Java · Spring Boot · SQL</Text>
                            </div>
                        </Space>
                    </Card>
                </Col>

                <Col xs={22} sm={20} md={12} lg={7}>
                    <Card
                        bordered
                        hoverable
                        style={cardStyle}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                    >
                        <Space size="middle" align="start">
                            <BgColorsOutlined style={{ fontSize: 28, color: "#FFCA28"}} />
                            <div>
                                <Title level={4} style={{ marginBottom: 4 }}>
                                    {t("services_card_3_title")}
                                </Title>
                                <Paragraph type="secondary" style={{ marginBottom: 8 }}>
                                    {t("services_card_3_content")}
                                </Paragraph>
                                <Text style={{marginTop:"auto"}} strong>Figma · Accessibility · Design Systems</Text>
                            </div>
                        </Space>
                    </Card>
                </Col>
            </Row>
        </Content>
    );
}
