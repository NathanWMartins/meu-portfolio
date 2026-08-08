import { Layout, Menu, Button } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  AppstoreOutlined,
  ProfileOutlined,
  MailOutlined,
  MoonOutlined,
  SunOutlined,
} from "@ant-design/icons";
import { useI18n } from "../i18n/useI18n";
import LanguageSwitcher from "./LanguageSwitcher";
import { useEffect, useState } from "react";

const { Header } = Layout;

type Props = {
  dark: boolean;
  onToggleTheme: () => void;
};

const ACCENT_GRADIENT = "linear-gradient(90deg, #1677ff, #7c3aed)";

export default function HeaderNav({ dark, onToggleTheme }: Props) {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: <a href="#home">{t("nav_home")}</a>,
    },
    {
      key: "about",
      icon: <UserOutlined />,
      label: <a href="#about">{t("nav_about")}</a>,
    },
    {
      key: "services",
      icon: <AppstoreOutlined />,
      label: <a href="#services">{t("nav_services")}</a>,
    },
    {
      key: "projects",
      icon: <ProfileOutlined />,
      label: <a href="#projects">{t("nav_projects")}</a>,
    },
    {
      key: "contact",
      icon: <MailOutlined />,
      label: <a href="#contact">{t("nav_contact")}</a>,
    },
  ];

  const iconButtonStyle: React.CSSProperties = {
    background: dark ? "rgba(124,58,237,0.12)" : "rgba(124,58,237,0.08)",
    border: "1px solid rgba(124,58,237,0.3)",
    color: dark ? "#e8e6ff" : "#4c3fb4",
  };

  return (
    <Header
      style={{
        position: "sticky",
        top: scrolled ? 12 : 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        gap: 16,

        transition: "all 0.35s ease",

        padding: scrolled ? "8px 32px" : "0 24px",
        paddingTop: scrolled ? 10 : 0,
        margin: scrolled ? "12px auto" : "0",
        width: scrolled ? "calc(100% - 100px)" : "100%",
        borderRadius: scrolled ? 16 : 0,

        background: dark
          ? scrolled
            ? "rgba(18,16,28,0.75)"
            : "rgba(10,10,16,0.9)"
          : scrolled
            ? "rgba(255,255,255,0.78)"
            : "rgba(255,255,255,0.92)",

        backdropFilter: "blur(16px) saturate(180%)",

        boxShadow: scrolled
          ? "0 8px 30px rgba(80,40,180,0.18)"
          : "none",

        borderBottom: scrolled ? "none" : "1px solid rgba(124,58,237,0.18)",
        border: scrolled ? "1px solid rgba(124,58,237,0.28)" : undefined,
      }}
    >
      <a
        href="#home"
        style={{
          fontWeight: 800,
          fontSize: 18,
          background: ACCENT_GRADIENT,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Nathan.
      </a>

      <Menu
        mode="horizontal"
        items={items}
        selectable={false}
        theme={dark ? "dark" : "light"}
        className="accent-nav-menu"
        style={{
          flex: 1,
          minWidth: 0,
          background: "transparent",
          justifyContent: "center",
          transition: "all .3s",
        }}
      />

      <div style={{ display: "flex", gap: 8 }}>
        <LanguageSwitcher style={iconButtonStyle} />
        <Button
          onClick={onToggleTheme}
          aria-label="Toggle theme"
          icon={dark ? <SunOutlined /> : <MoonOutlined />}
          style={iconButtonStyle}
        />
      </div>
    </Header>
  );
}
