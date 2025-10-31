import { Layout, Row, Col, Avatar, Typography, Space, Button, Grid } from "antd";
import { ArrowRightOutlined, DownloadOutlined } from "@ant-design/icons";
import me from "../assets/me.png";
import { useI18n } from "../i18n/I18nProvider";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function HomeSection() {
    const screens = Grid.useBreakpoint();
    const titleLevel = screens.xl ? 1 : 2;
    const {t} = useI18n();

    return (
        <section id="home" style={{ scrollMarginTop: 88 }}>
            <Content style={{ padding: "72px 16px 120px" }}>
                <Row justify="center">
                    <Col xs={24} sm={22} md={20} lg={16} xl={14} xxl={12}>
                        <Row justify="center">
                            <Avatar src={me} size={150} style={{ marginBottom: 16 }} />
                        </Row>

                        <Paragraph style={{ textAlign: "center", marginBottom: 8 }}>
                            {t("home_greeting")} <Text strong>Nathan Will Martins</Text>{" "}
                        </Paragraph>


                        <Title level={titleLevel}
                            style={{ textAlign: "center", marginTop: 0, lineHeight: 1.1, fontWeight: 800 }}>
                            {t("home_job") && (<>
                                <span dangerouslySetInnerHTML={{ __html: t("home_job") }} />
                            </>)}
                        </Title>

                        <Paragraph type="secondary"
                            style={{ textAlign: "center", margin: "0 auto 24px", maxWidth: 820 }}>
                            {t("home_desription")}
                        </Paragraph>

                        <Row justify="center">
                            <Space size="large" wrap>
                                <a href="#contact" style={{ textDecoration: "none" }}>
                                    <Button type="primary" size="large" icon={<ArrowRightOutlined />}>
                                        {t("home_contact_btn")}
                                    </Button>
                                </a>
                                <a
                                    href="/CurriculoNathanWill.pdf"
                                    download
                                    style={{ textDecoration: "none" }}
                                >
                                    <Button size="large" icon={<DownloadOutlined />}>
                                        {t("home_resume_btn")}
                                    </Button>
                                </a>
                            </Space>
                        </Row>
                    </Col>
                </Row>
            </Content>
        </section>
    );
}
