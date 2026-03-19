import { Layout, Row, Col, Typography, Card, Space, theme } from "antd";
import { CodeOutlined, ApiOutlined, BgColorsOutlined } from "@ant-design/icons";
import { useI18n } from "../i18n/I18nProvider";
import BorderGlow from "../components/BorderGlow";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

interface ServicesProps {
  dark: boolean;
}

export default function ServicesSection({ dark }: ServicesProps) {
  const { token } = theme.useToken();
  const { t } = useI18n();
  const isDark = dark;

  const cardStyle: React.CSSProperties = {
    borderRadius: 28,
    border: `1px solid ${token.colorBorderSecondary}`,
    background: token.colorBgContainer,
    transition: "transform .2s ease, box-shadow .2s ease",
    cursor: "pointer",
    textAlign: "left",
    height: "100%",
  };

  return (
    <Content id="services" style={{ padding: "80px 16px" }}>
      <Row justify="center" style={{ marginBottom: 32 }}>
        <Col>
          <Title style={{ margin: 0, textAlign: "center" }}>
            {t("services_title")}
          </Title>
        </Col>
      </Row>

      <Row gutter={[24, 24]} justify="center">
        <Col xs={22} sm={20} md={12} lg={7}>
          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor={isDark ? "#060010" : "#ffffff"}
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
            <Card bordered hoverable style={cardStyle}>
              <Space size="middle" align="start">
                <CodeOutlined style={{ fontSize: 28, color: "#61DAFB" }} />
                <div>
                  <Title level={4} style={{ marginBottom: 4 }}>
                    {t("services_card_1_title")}
                  </Title>
                  <Paragraph type="secondary" style={{ marginBottom: 8 }}>
                    {t("services_card_1_content")}
                  </Paragraph>
                  <Text style={{ marginTop: "auto" }} strong>
                    React · TypeScript · UI Libraries
                  </Text>
                </div>
              </Space>
            </Card>
          </BorderGlow>
        </Col>

        <Col xs={22} sm={20} md={12} lg={7}>
          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor={isDark ? "#060010" : "#ffffff"}
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
            <Card bordered hoverable style={cardStyle}>
              <Space size="middle" align="start">
                <ApiOutlined style={{ fontSize: 28, color: "#EA2D2E" }} />
                <div>
                  <Title level={4} style={{ marginBottom: 4 }}>
                    {t("services_card_2_title")}
                  </Title>
                  <Paragraph type="secondary" style={{ marginBottom: 8 }}>
                    {t("services_card_2_content")}
                  </Paragraph>
                  <Text style={{ marginTop: "auto" }} strong>
                    Java · Spring Boot · SQL
                  </Text>
                </div>
              </Space>
            </Card>
          </BorderGlow>
        </Col>

        <Col xs={22} sm={20} md={12} lg={7}>
          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor={isDark ? "#060010" : "#ffffff"}
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
            <Card bordered hoverable style={cardStyle}>
              <Space size="middle" align="start">
                <BgColorsOutlined style={{ fontSize: 28, color: "#FFCA28" }} />
                <div>
                  <Title level={4} style={{ marginBottom: 4 }}>
                    {t("services_card_3_title")}
                  </Title>
                  <Paragraph type="secondary" style={{ marginBottom: 8 }}>
                    {t("services_card_3_content")}
                  </Paragraph>
                  <Text style={{ marginTop: "auto" }} strong>
                    Figma · Accessibility · Design Systems
                  </Text>
                </div>
              </Space>
            </Card>
          </BorderGlow>
        </Col>
      </Row>
    </Content>
  );
}
