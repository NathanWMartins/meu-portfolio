import {
    Layout,
    Row,
    Col,
    Card,
    Typography,
    Carousel,
    Button,
    Space,
    Tag,
    theme,
    Divider,
    Grid,
    Tooltip,
} from "antd";
import {
    GithubOutlined,
    LeftOutlined,
    LinkOutlined,
    PlayCircleOutlined,
    RightOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useI18n } from "../i18n/I18nProvider";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

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
    const { token } = theme.useToken();
    const screens = Grid.useBreakpoint();

    const [index, setIndex] = useState(0);
    const { t } = useI18n();

    const next = () => setIndex((i) => (i + 1) % projects.length);
    const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);

    const projects: Project[] = [
        {
            title: t("projects_title_1"),
            description:
                t("projects_desc_1"),
            stack: ["React", "TypeScript", "MUI", "Java", "Spring Boot", "MySQL"],
            images: ["/projects/wiko/wiko-01.png", "/projects/wiko/wiko-02.png",
                "/projects/wiko/wiko-03.png", "/projects/wiko/wiko-04.png",
                "/projects/wiko/wiko-05.png"],
            liveUrl: "https://simada-frontend.vercel.app/",
            githubUrl: "https://github.com/NathanWMartins/simada-frontend",
            githubUrlOther: "https://github.com/KauanKoech/simada-backend",
        },
        {
            title: t("projects_title_3"),
            description:
                t("projects_desc_3"),
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
            description:
                t("projects_desc_2"),
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

    const p = projects[index];

    const SLIDE_H =
        screens.xxl ? 420 :
            screens.xl ? 400 :
                screens.lg ? 400 :
                    screens.md ? 400 : 320;

    return (
        <Content id="projects" style={{ padding: "80px 0" }}>
            <Row justify="center" style={{ marginBottom: 8 }}>
                <Col>
                    <Text type="secondary" style={{ display: "block", textAlign: "center" }}>
                        {t("projects_subtitle")}
                    </Text>
                </Col>
            </Row>

            <Row justify="center" style={{ marginBottom: 24 }}>
                <Col>
                    <Title style={{ margin: 0, textAlign: "center" }}>{t("projects_title")}</Title>
                </Col>
            </Row>

            <Row justify="center" style={{ marginBottom: 12 }}>
                <Space size="large" align="center">
                    <Button shape="circle" icon={<LeftOutlined />} onClick={prev} aria-label="Previous project" />
                    <Text type="secondary">
                        {index + 1} / {projects.length}
                    </Text>
                    <Button shape="circle" icon={<RightOutlined />} onClick={next} aria-label="Next project" />
                </Space>
            </Row>

            <Row justify="center">
                <Col xs={24} sm={23} md={22} lg={20} xl={16} xxl={14}>
                    <Card
                        variant="outlined"
                        styles={{ body: { padding: 16, display: "flex", flexDirection: "column", height: "100%" } }}
                        style={{
                            borderRadius: 16,
                            border: `1px solid ${token.colorBorderSecondary}`,
                            background: token.colorBgContainer,
                            overflow: "hidden",
                            width: "100%",
                            maxWidth: "1600px",
                            height: "780px",
                            margin: "0 auto",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                        }}
                    >
                        <div style={{ borderBottom: `1px solid ${token.colorBorderSecondary}` }}>
                            <Carousel autoplay autoplaySpeed={3500} pauseOnHover dots arrows>
                                {p.images.map((src, i) => (
                                    <div key={i}>
                                        <div
                                            style={{
                                                height: SLIDE_H,
                                                width: "100%",
                                                background: token.colorBgElevated,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <img
                                                src={src}
                                                alt={`${p.title} — ${i + 1}`}
                                                style={{
                                                    maxWidth: "100%",
                                                    maxHeight: "100%",
                                                    objectFit: "contain",
                                                    display: "block",
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </div>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 8,
                                flex: 1,
                                width: "100%",
                                marginTop: 12,
                            }}
                        >
                            <div>
                                <Title level={3} style={{ marginBottom: 4 }}>
                                    {p.title}
                                </Title>

                                <Paragraph type="secondary" style={{ marginBottom: 8 }}>
                                    {p.description}
                                </Paragraph>

                                <Space wrap size={[12, 12]} align="center">
                                    {p.stack.map((tech) => {
                                        const icon = techIcons[tech];
                                        return icon ? (
                                            <Tooltip title={icon.tooltip} key={tech}>
                                                <img
                                                    src={icon.src}
                                                    alt={icon.tooltip}
                                                    style={{
                                                        width: 34,
                                                        height: 34,
                                                        marginLeft: 8,
                                                        marginTop: 8,
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
                            </div>

                            <Divider style={{ margin: "12px 0" }} />

                            <div style={{ marginTop: "auto", paddingTop: 16 }}>
                                <Space size="middle" wrap>
                                    {!!p.liveUrl && (
                                        <Button
                                            type="primary"
                                            icon={<PlayCircleOutlined />}
                                            href={p.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {t("projects_btn_view")}
                                        </Button>
                                    )}

                                    {p.githubUrlOther ? (
                                        <>
                                            <Button
                                                icon={<GithubOutlined />}
                                                href={p.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Frontend Code
                                            </Button>
                                            <Button
                                                icon={<GithubOutlined />}
                                                href={p.githubUrlOther}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Backend Code
                                            </Button>
                                        </>
                                    ) : (
                                        <Button
                                            icon={<GithubOutlined />}
                                            href={p.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            GitHub
                                        </Button>
                                    )}

                                    {!p.liveUrl && (
                                        <Button
                                            icon={<LinkOutlined />}
                                            href={p.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            type="dashed"
                                        >
                                            Repository
                                        </Button>
                                    )}
                                </Space>
                            </div>

                        </div>
                    </Card>
                </Col>
            </Row>
        </Content>
    );
}
