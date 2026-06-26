import { Row, Col, Typography, theme as antdTheme } from "antd";
import {
    AiFillLinkedin,
    AiFillInstagram,
    AiFillGithub,
    AiOutlineWhatsApp,
    AiOutlineMail,
} from "react-icons/ai";
import { useI18n } from "../i18n/useI18n";

const { Title, Paragraph } = Typography;

export default function ContactSection() {
    const { token } = antdTheme.useToken();
    const {t} = useI18n();

    const socials = [
        {
            key: "linkedin",
            href: "https://www.linkedin.com/in/nathanwmartins/",
            label: "LinkedIn",
            icon: <AiFillLinkedin size={28} />,
            color: "#0A66C2",
        },
        {
            key: "instagram",
            href: "https://www.instagram.com/nathanwmartins",
            label: "Instagram",
            icon: <AiFillInstagram size={28} />,
            color: "#E1306C",
        },
        {
            key: "whatsapp",
            href: "https://wa.me/48998472801",
            label: "WhatsApp",
            icon: <AiOutlineWhatsApp size={28} />,
            color: "#25D366",
        },
        {
            key: "email",
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=nathanwillmartins@gmail.com&su=Hello%20Nathan&body=Hi%20Nathan,",
            label: "Email",
            icon: <AiOutlineMail size={28} />,
            color: "#EA4335",
        },
        {
            key: "github",
            href: "https://github.com/NathanWMartins",
            label: "GitHub",
            icon: <AiFillGithub size={28} />,
            color: "#6e40c9",
        },
    ];

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

                    <div style={{ marginTop: 40, display: "flex", justifyContent: "center", flexWrap: "nowrap", gap: 16, overflowX: "auto", padding: "8px 4px 4px" }}>
                        {socials.map((s) => (
                            <a
                                key={s.key}
                                href={s.href}
                                aria-label={s.label}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none" }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        gap: 8,
                                        transition: "transform .18s ease",
                                    }}
                                    onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-4px)")}
                                    onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
                                >
                                    <div style={{
                                        width: 56,
                                        height: 56,
                                        borderRadius: 16,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        background: `${s.color}18`,
                                        border: `1px solid ${s.color}40`,
                                        color: s.color,
                                        boxShadow: `0 4px 20px ${s.color}25`,
                                    }}>
                                        {s.icon}
                                    </div>
                                    <span style={{ fontSize: 12, fontWeight: 600, color: token.colorTextSecondary }}>
                                        {s.label}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </Col>
            </Row>
        </section>
    );
}
