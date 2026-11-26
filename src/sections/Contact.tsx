import { Button } from "antd";
import { GithubOutlined, LinkedinFilled, MailOutlined, WhatsAppOutlined } from "@ant-design/icons";
import BandTheme from "../components/BandTheme";
import Reveal from "../components/Reveal";
import {
    EMAIL,
    GITHUB_URL,
    LINKEDIN_URL,
    WHATSAPP_DISPLAY,
    whatsappUrl,
} from "../data/contact";
import { useI18n } from "../i18n/useI18n";

const withoutProtocol = (url: string) => url.replace(/^https:\/\/(www\.)?/, "").replace(/\/$/, "");

export default function ContactSection({ dark }: { dark: boolean }) {
    const { t } = useI18n();
    const whatsappHref = whatsappUrl(t("contact_whatsapp_message"));

    const channels = [
        { label: t("contact_email"), value: EMAIL, href: `mailto:${EMAIL}`, icon: <MailOutlined /> },
        { label: "LinkedIn", value: withoutProtocol(LINKEDIN_URL), href: LINKEDIN_URL, icon: <LinkedinFilled /> },
        { label: "WhatsApp", value: WHATSAPP_DISPLAY, href: whatsappHref, icon: <WhatsAppOutlined /> },
        { label: "GitHub", value: withoutProtocol(GITHUB_URL), href: GITHUB_URL, icon: <GithubOutlined /> },
    ];

    return (
        <section id="contact" className="contact band" aria-labelledby="contact-title">
            <BandTheme dark={dark}>
                <div className="container">
                    <Reveal>
                        <header className="contact-header">
                            <span className="eyebrow">{t("contact_eyebrow")}</span>
                            <h2 id="contact-title">{t("contact_title")}</h2>
                            <p>{t("contact_description")}</p>
                            <div className="actions">
                                <Button type="primary" size="large" href={`mailto:${EMAIL}`} icon={<MailOutlined />}>
                                    {t("contact_email_btn")}
                                </Button>
                                <Button size="large" href={whatsappHref} target="_blank" icon={<WhatsAppOutlined />}>
                                    {t("contact_whatsapp_btn")}
                                </Button>
                            </div>
                        </header>
                    </Reveal>

                    <Reveal delay={100}>
                        <ul className="contact-list">
                            {channels.map((channel) => {
                                const external = channel.href.startsWith("https://");
                                return (
                                    <li key={channel.label}>
                                        <a
                                            href={channel.href}
                                            target={external ? "_blank" : undefined}
                                            rel={external ? "noopener noreferrer" : undefined}
                                        >
                                            <span className="contact-icon">{channel.icon}</span>
                                            <strong>{channel.label}</strong>
                                            <span>{channel.value}</span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </Reveal>
                </div>
            </BandTheme>
        </section>
    );
}
