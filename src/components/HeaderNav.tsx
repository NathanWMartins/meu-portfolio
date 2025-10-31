import { Layout, Menu, Button, theme as antdTheme } from "antd";
import {
    HomeOutlined, UserOutlined, AppstoreOutlined,
    ProfileOutlined, MailOutlined, MoonOutlined, SunOutlined
} from "@ant-design/icons";
import { useI18n } from "../i18n/I18nProvider";
import LanguageSwitcher from "./LanguageSwitcher";

const { Header } = Layout;

type Props = {
    dark: boolean;
    onToggleTheme: () => void;
};


export default function HeaderNav({ dark, onToggleTheme }: Props) {
    const { token } = antdTheme.useToken();
    const { t } = useI18n();

    const items = [
        { key: "home", icon: <HomeOutlined />, label: <a href="#home">{t("nav_home")}</a> },
        { key: "about", icon: <UserOutlined />, label: <a href="#about">{t("nav_about")}</a> },
        { key: "services", icon: <AppstoreOutlined />, label: <a href="#services">{t("nav_services")}</a> },
        { key: "projects", icon: <ProfileOutlined />, label: <a href="#projects">{t("nav_projects")}</a> },
        { key: "contact", icon: <MailOutlined />, label: <a href="#contact">{t("nav_contact")}</a> },
    ];

    return (
        <Header
            style={{
                position: "sticky",
                top: 0,
                zIndex: 100,
                display: "flex",
                alignItems: "center",
                gap: 16,
                background: token.colorBgElevated,
                backdropFilter: "saturate(180%) blur(8px)",
            }}
        >
            <a href="#home" style={{ fontWeight: 800, fontSize: 18 }}>
                Nathan<span style={{ color: token.colorPrimary }}>.</span>
            </a>

            <Menu
                mode="horizontal"
                items={items}
                selectable={false}
                theme={dark ? "dark" : "light"}
                style={{ flex: 1, minWidth: 0, background: "transparent", justifyContent: "center" }}
            />

            <div style={{ display: "flex", gap: 8 }}>
                <LanguageSwitcher />
                <Button onClick={onToggleTheme} aria-label="Toggle theme"
                    icon={dark ? <SunOutlined /> : <MoonOutlined />} />
            </div>
        </Header>
    );
}
