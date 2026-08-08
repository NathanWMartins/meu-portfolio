import { Layout, Row, Col, Typography } from "antd";
import { RocketOutlined, ApiOutlined, CloudOutlined, BgColorsOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { useI18n } from "../i18n/useI18n";
import ServicesCarousel from "../components/ServicesCarousel";

const { Content } = Layout;
const { Title } = Typography;

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
    icon: <RocketOutlined style={{ fontSize: 26, color: "#38bdf8" }} />,
    titleKey: "services_card_1_title" as const,
    contentKey: "services_card_1_content" as const,
    tags: ["React", "TypeScript", "SEO"],
    accent: "#38bdf8",
  },
  {
    icon: <ApiOutlined style={{ fontSize: 26, color: "#6DB33F" }} />,
    titleKey: "services_card_2_title" as const,
    contentKey: "services_card_2_content" as const,
    tags: ["Java", "Spring Boot", "C#", ".NET"],
    accent: "#6DB33F",
  },
  {
    icon: <CloudOutlined style={{ fontSize: 26, color: "#f59e0b" }} />,
    titleKey: "services_card_3_title" as const,
    contentKey: "services_card_3_content" as const,
    tags: ["React", "Node.js", "Spring Boot"],
    accent: "#f59e0b",
  },
  {
    icon: <BgColorsOutlined style={{ fontSize: 26, color: "#a78bfa" }} />,
    titleKey: "services_card_4_title" as const,
    contentKey: "services_card_4_content" as const,
    tags: ["Figma", "Accessibility", "Design Systems"],
    accent: "#a78bfa",
  },
];

export default function ServicesSection({ dark }: ServicesProps) {
  const { t } = useI18n();

  const slides = CARDS.map((card) => ({
    icon: card.icon,
    title: t(card.titleKey),
    description: t(card.contentKey),
    tags: card.tags,
    accent: card.accent,
  }));

  return (
    <Content id="services" style={{ padding: "80px 16px 60px", scrollMarginTop: 88, overflow: "hidden" }}>
      {/* Título */}
      <Row justify="center" style={{ marginBottom: 24 }}>
        <Col style={{ textAlign: "center" }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Title style={{ margin: 0 }}>{t("services_title")}</Title>
          </motion.div>
        </Col>
      </Row>

      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.15}>
        <ServicesCarousel slides={slides} dark={dark} />
      </motion.div>
    </Content>
  );
}
