import { Layout, Menu, Button, theme as antdTheme } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  AppstoreOutlined,
  ProfileOutlined,
  MailOutlined,
  MoonOutlined,
  SunOutlined,
} from "@ant-design/icons";
import { useI18n } from "../i18n/I18nProvider";
import LanguageSwitcher from "./LanguageSwitcher";
import { useEffect, useState } from "react";

const { Header } = Layout;

type Props = {
  dark: boolean;
  onToggleTheme: () => void;
};

export default function HeaderNav({ dark, onToggleTheme }: Props) {
  const { token } = antdTheme.useToken();
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

        width: scrolled ? "calc(100% - 32px)" : "100%",

        borderRadius: scrolled ? 16 : 0,

        background: scrolled
          ? dark
            ? "rgba(30, 64, 175, 0.35)"
            : "rgba(59, 130, 246, 0.25)"
          : token.colorBgElevated,

        backdropFilter: scrolled
          ? "blur(20px) saturate(180%)"
          : "blur(8px) saturate(180%)",

        boxShadow: scrolled ? "0 8px 30px rgba(0,0,0,0.08)" : "none",

        border: scrolled ? "1px solid rgba(255,255,255,0.25)" : "none",
      }}
    >
      <a
        href="#home"
        style={{
          fontWeight: 800,
          fontSize: 18,
          color: scrolled  
                ? "#fff" 
                : token.colorPrimary,
        }}
      >
        Nathan.
      </a>

      <Menu
        mode="horizontal"
        items={items}
        selectable={false}
        theme={dark ? "dark" : "light"}
        style={{
          flex: 1,
          minWidth: 0,
          background: "transparent",
          justifyContent: "center",
          transition: "all .3s",
        }}
      />

      <div style={{ display: "flex", gap: 8 }}>
        <LanguageSwitcher />
        <Button
          onClick={onToggleTheme}
          aria-label="Toggle theme"
          icon={dark ? <SunOutlined /> : <MoonOutlined />}
        />
      </div>
    </Header>
  );
}
