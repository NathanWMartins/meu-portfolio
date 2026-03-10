import {
  Row,
  Col,
  Card,
  Typography,
  Space,
  Tag,
  Tooltip,
  Modal,
  Grid,
} from "antd";
import { useEffect, useState } from "react";
import { useI18n } from "../i18n/I18nProvider";

const { Title, Paragraph } = Typography;
import { motion } from "framer-motion";
import { Content } from "antd/es/layout/layout";

const techIcons: Record<
  string,
  { src: string; tooltip: string; style?: React.CSSProperties }
> = {
  React: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    tooltip: "React.js",
  },
  "React Native": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    tooltip: "React Native",
  },
  TypeScript: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    tooltip: "TypeScript",
  },
  Expo: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg",
    tooltip: "Expo",
    style: { filter: "invert(0.8)" },
  },
  Java: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    tooltip: "Java",
  },
  "Spring Boot": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    tooltip: "Spring Boot",
  },
  MySQL: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    tooltip: "MySQL",
  },
  MUI: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    tooltip: "Material UI",
  },
  Firebase: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    tooltip: "Firebase",
  },
  Supabase: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    tooltip: "Supabase",
  },
  NestJS: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
    tooltip: "NestJS",
  },
};

type Project = {
  title: string;
  description: string;
  stack: string[];
  images: string[];
  liveUrl?: string;
  githubUrl: string;
  githubUrlOther?: string;
};

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const screens = Grid.useBreakpoint();
  const [currentImage, setCurrentImage] = useState(0);

  const { t } = useI18n();

  const projects: Project[] = [
    {
      title: t("projects_title_1"),
      description: t("projects_desc_1"),
      stack: ["React", "TypeScript", "MUI", "Java", "Spring Boot", "MySQL"],
      images: [
        "/projects/wiko/wiko-01.png",
        "/projects/wiko/wiko-02.png",
        "/projects/wiko/wiko-03.png",
        "/projects/wiko/wiko-04.png",
        "/projects/wiko/wiko-05.png",
      ],
      liveUrl: "https://simada-frontend.vercel.app/",
      githubUrl: "https://github.com/NathanWMartins/simada-frontend",
      githubUrlOther: "https://github.com/KauanKoech/simada-backend",
    },
    {
      title: t("projects_title_4"),
      description: t("projects_desc_4"),
      stack: ["React Native", "TypeScript", "MUI", "NestJS", "Supabase"],
      images: [
        "/projects/futspot/futspot-01.png",
        "/projects/futspot/futspot-02.png",
        "/projects/futspot/futspot-03.png",
        "/projects/futspot/futspot-04.png",
        "/projects/futspot/futspot-05.png",
      ],
      liveUrl: "https://futspot.vercel.app/",
      githubUrl: "https://github.com/NathanWMartins/futspot-frontend",
      githubUrlOther: "https://github.com/NathanWMartins/futspot-backend",
    },
    {
      title: t("projects_title_3"),
      description: t("projects_desc_3"),
      stack: ["React Native", "TypeScript", "Firebase", "MUI"],
      images: [
        "/projects/barber/barber-01.png",
        "/projects/barber/barber-02.png",
        "/projects/barber/barber-03.png",
        "/projects/barber/barber-04.png",
      ],
      liveUrl: "https://barber-system-nine.vercel.app/",
      githubUrl: "https://github.com/NathanWMartins/barber-system",
    },
    {
      title: t("projects_title_2"),
      description: t("projects_desc_2"),
      stack: ["React Native", "Expo", "TypeScript"],
      images: [
        "/projects/adocao/adocao-04.png",
        "/projects/adocao/adocao-02.png",
        "/projects/adocao/adocao-03.png",
        "/projects/adocao/adocao-01.png",
      ],
      liveUrl: "https://adocao-react-native.vercel.app/",
      githubUrl: "https://github.com/NathanWMartins/AdocaoReactNative",
    },
  ];

  useEffect(() => {
    if (!selected) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === selected.images.length - 1 ? 0 : prev + 1,
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [selected]);

  useEffect(() => {
    setCurrentImage(0);
  }, [selected]);

  return (
    <>
      <Content
        id="projects"
        style={{ padding: screens.md ? "80px 80px" : "80px 30px" }}
      >
        <Row justify="center" style={{ marginBottom: 24 }}>
          <Col>
            <Title style={{ margin: 0, textAlign: "center" }}>
              {t("projects_title")}
            </Title>
          </Col>
        </Row>
        <Row gutter={[24, 24]} justify="center">
          {projects.map((p) => (
            <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12} key={p.title}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.25 }}
              >
                <div className="project-card">
                  <span className="border-line top"></span>
                  <span className="border-line right"></span>
                  <span className="border-line bottom"></span>
                  <span className="border-line left"></span>
                  <Card
                    hoverable
                    style={{
                      borderRadius: 0,
                      overflow: "hidden",
                      background: "var(--ant-color-bg-container)",
                    }}
                    cover={
                      <div
                        style={{
                          height: 220,
                          overflow: "hidden",
                        }}
                      >
                        <motion.img
                          src={p.images[0]}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.4 }}
                        />
                      </div>
                    }
                    onClick={() => setSelected(p)}
                  >
                    <Title level={4}>{p.title}</Title>

                    <Paragraph type="secondary" ellipsis={{ rows: 2 }}>
                      {p.description}
                    </Paragraph>

                    <Space wrap size={[12, 12]} style={{ marginBottom: 16 }}>
                      {selected?.stack.map((tech) => {
                        const icon = techIcons[tech];

                        return icon ? (
                          <Tooltip title={icon.tooltip} key={tech}>
                            <img
                              src={icon.src}
                              alt={icon.tooltip}
                              style={{
                                width: 36,
                                height: 36,
                                display: "block",
                                ...(icon.style || {}),
                              }}
                            />
                          </Tooltip>
                        ) : (
                          <Tag key={tech} color="processing">
                            {tech}
                          </Tag>
                        );
                      })}
                    </Space>
                  </Card>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        <Modal
          open={!!selected}
          footer={null}
          onCancel={() => setSelected(null)}
          width={900}
        >
          {selected && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <img
                src={selected.images[currentImage]}
                style={{
                  width: "100%",
                  borderRadius: 0,
                  marginBottom: 16,
                  transition: "opacity 0.5s ease",
                }}
              />

              <Title level={3}>{selected.title}</Title>

              <Paragraph>{selected.description}</Paragraph>

              <Space wrap size={[12, 12]} style={{ marginBottom: 16 }}>
                {selected?.stack.map((tech) => {
                  const icon = techIcons[tech];

                  return icon ? (
                    <Tooltip title={icon.tooltip} key={tech}>
                      <img
                        src={icon.src}
                        alt={icon.tooltip}
                        style={{
                          width: 36,
                          height: 36,
                          display: "block",
                          ...(icon.style || {}),
                        }}
                      />
                    </Tooltip>
                  ) : (
                    <Tag key={tech} color="processing">
                      {tech}
                    </Tag>
                  );
                })}
              </Space>
            </motion.div>
          )}
        </Modal>
      </Content>
    </>
  );
}
