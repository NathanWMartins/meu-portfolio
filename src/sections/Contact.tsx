import { Row, Col, Typography, Button, theme as antdTheme } from "antd";
import {
    AiFillLinkedin,
    AiFillInstagram,
    AiFillGithub,
    AiOutlineWhatsApp,
    AiOutlineMail,
} from "react-icons/ai";
import { useI18n } from "../i18n/useI18n";

const { Title, Paragraph, Text } = Typography;

export default function ContactSection() {
    const { token } = antdTheme.useToken();
    const { t } = useI18n();

    const whatsappHref = `https://wa.me/48998472801?text=${encodeURIComponent(t("contact_whatsapp_message"))}`;

    const socials = [
        {
            key: "linkedin",
            href: "https://www.linkedin.com/in/nathanwmartins/",
            label: "LinkedIn",
            icon: <AiFillLinkedin size={26} />,
            color: "#0A66C2",
        },
        {
            key: "instagram",
            href: "https://www.instagram.com/nathanwmartins",
            label: "Instagram",
            icon: <AiFillInstagram size={26} />,
            color: "#E1306C",
        },
        {
            key: "email",
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=nathanwillmartins@gmail.com&su=Hello%20Nathan&body=Hi%20Nathan,",
            label: "Email",
            icon: <AiOutlineMail size={26} />,
            color: "#EA4335",
        },
        {
            key: "github",
            href: "https://github.com/NathanWMartins",
            label: "GitHub",
            icon: <AiFillGithub size={26} />,
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

                    <Paragraph style={{ fontSize: 17, marginBottom: 32, maxWidth: 560, marginInline: "auto" }}>
                        {t("contact_p1")}
                    </Paragraph>

                    {/* CTA principal — WhatsApp */}
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                        <Button
                            type="primary"
                            size="large"
                            icon={<AiOutlineWhatsApp size={20} style={{ verticalAlign: -4 }} />}
                            style={{
                                height: 52,
                                paddingInline: 32,
                                fontSize: 16,
                                fontWeight: 600,
                                background: "linear-gradient(90deg, #1677ff, #7c3aed)",
                                border: "none",
                                boxShadow: "0 8px 30px -8px rgba(124,58,237,0.55)",
                            }}
                        >
                            {t("contact_whatsapp_btn")}
                        </Button>
                    </a>

                    <Paragraph style={{ fontSize: 14, marginTop: 40, marginBottom: 16, color: token.colorTextSecondary }}>
                        {t("contact_p2")}
                    </Paragraph>

                    <Text
                        type="secondary"
                        style={{ display: "block", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}
                    >
                        {t("contact_other_ways")}
                    </Text>

                    <div style={{ display: "flex", justifyContent: "center", flexWrap: "nowrap", gap: 16, overflowX: "auto", padding: "8px 4px 4px" }}>
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
                                        width: 48,
                                        height: 48,
                                        borderRadius: 14,
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
                                    <span style={{ fontSize: 11.5, fontWeight: 600, color: token.colorTextSecondary }}>
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
