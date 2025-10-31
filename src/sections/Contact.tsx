import { Row, Col, Typography, Space, Button, theme as antdTheme } from "antd";
import {
    AiFillLinkedin,
    AiFillInstagram,
    AiFillGithub,
    AiOutlineWhatsApp,
    AiOutlineMail,
} from "react-icons/ai";
import { useI18n } from "../i18n/I18nProvider";

const { Title, Paragraph } = Typography;

export default function ContactSection() {
    const { token } = antdTheme.useToken();
    const {t} = useI18n();

    const socials = [
        {
            key: "linkedin",
            href: "https://www.linkedin.com/in/nathan-will-martins/",
            label: "LinkedIn",
            icon: <AiFillLinkedin size={28} />,
        },
        {
            key: "instagram",
            href: "https://www.instagram.com/nathanwmartins",
            label: "Instagram",
            icon: <AiFillInstagram size={28} />,
        },
        {
            key: "whatsapp",
            href: "https://wa.me/48998472801",
            label: "WhatsApp",
            icon: <AiOutlineWhatsApp size={28} />,
        },
        {
            key: "email",
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=nathanwillmartins@gmail.com&su=Hello%20Nathan&body=Hi%20Nathan,",
            label: "Email",
            icon: <AiOutlineMail size={28} />,
        },
        {
            key: "github",
            href: "https://github.com/NathanWMartins",
            label: "GitHub",
            icon: <AiFillGithub size={28} />,
        },
    ];

    const tileStyle: React.CSSProperties = {
        width: 64,
        height: 64,
        borderRadius: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(145deg, ${token.colorPrimary}15, ${token.colorPrimary}33)`,
        color: token.colorText,
        boxShadow: `0 8px 24px ${token.colorPrimary}44`,
        transition: "transform .18s ease, box-shadow .18s ease, background .18s ease",
        border: `1px solid ${token.colorPrimary}55`,
        backdropFilter: "saturate(180%) blur(8px)",
    };

    const tileHover: React.CSSProperties = {
        transform: "translateY(-4px)",
        boxShadow: `0 16px 40px ${token.colorPrimary}77`,
        background: `linear-gradient(145deg, ${token.colorPrimary}33, ${token.colorPrimary}66)`,
    };


    return (
        <section id="contact" style={{ scrollMarginTop: 88, padding: "96px 16px 120px" }}>
            <Row justify="center">
                <Col xs={24} sm={22} md={20} lg={18} xl={14} style={{ textAlign: "center" }}>
                    <Title level={2} style={{ marginBottom: 8, fontWeight: 800 }}>
                        {t("contact_title")}
                    </Title>

                    <Paragraph style={{ fontSize: 18, marginBottom: 0 }}>
                        {t("contact_p1")}
                    </Paragraph>
                    <Paragraph style={{ fontSize: 18, marginTop: 8 }}>
                        {t("contact_p2")}
                    </Paragraph>


                    <div style={{ marginTop: 32 }}>
                        <Space size="large" wrap align="center">
                            {socials.map((s) => (
                                <a
                                    key={s.key}
                                    href={s.href}
                                    aria-label={s.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: "none" }}
                                >
                                    <Button
                                        type="text"
                                        aria-label={s.label}
                                        style={tileStyle}
                                        onMouseEnter={(e) =>
                                            Object.assign((e.currentTarget as HTMLButtonElement).style, tileHover)
                                        }
                                        onMouseLeave={(e) =>
                                            Object.assign((e.currentTarget as HTMLButtonElement).style, tileStyle)
                                        }
                                    >
                                        {s.icon}
                                    </Button>
                                </a>
                            ))}
                        </Space>
                    </div>
                </Col>
            </Row>
        </section>
    );
}
