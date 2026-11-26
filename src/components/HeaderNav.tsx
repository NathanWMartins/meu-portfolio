import { Button, Dropdown } from "antd";
import { MenuOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useI18n } from "../i18n/useI18n";
import LanguageSwitcher from "./LanguageSwitcher";

type Props = {
  dark: boolean;
  onToggleTheme: () => void;
};

export default function HeaderNav({ dark, onToggleTheme }: Props) {
  const { t } = useI18n();

  const links = [
    { key: "projects", label: t("nav_projects") },
    { key: "experience", label: t("nav_experience") },
    { key: "about", label: t("nav_about") },
    { key: "services", label: t("nav_services") },
    { key: "contact", label: t("nav_contact") },
  ];

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#home" className="brand">
          Nathan Will
        </a>

        <nav className="header-nav">
          {links.map((link) => (
            <a key={link.key} href={`#${link.key}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <LanguageSwitcher />
          <Button
            type="text"
            onClick={onToggleTheme}
            aria-label={dark ? t("nav_theme_light") : t("nav_theme_dark")}
            icon={dark ? <SunOutlined /> : <MoonOutlined />}
          />
          <Dropdown
            trigger={["click"]}
            menu={{
              items: links.map((link) => ({
                key: link.key,
                label: <a href={`#${link.key}`}>{link.label}</a>,
              })),
            }}
          >
            <Button
              type="text"
              className="header-menu-button"
              aria-label={t("nav_menu")}
              icon={<MenuOutlined />}
            />
          </Dropdown>
        </div>
      </div>
    </header>
  );
}
