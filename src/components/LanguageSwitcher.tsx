import { Dropdown, Button } from "antd";
import type { MenuProps } from "antd";
import { useI18n } from "../i18n/I18nProvider";

const Flag: React.FC<{ code: "pt" | "en" }> = ({ code }) => (
    <span style={{ fontSize: 18, marginRight: 8, marginBottom: 5 }}>{code === "pt" ? "🇧🇷" : "🇺🇸"}</span>
);

export default function LanguageSwitcher() {
    const { lang, setLang } = useI18n();

    const items: MenuProps["items"] = [
        {
            key: "pt",
            label: <div><Flag code="pt" />Português</div>,
        },
        {
            key: "en",
            label: <div><Flag code="en" />English</div>,
        },
    ];

    return (
        <Dropdown            
            menu={{
                items,
                selectable: true,
                defaultSelectedKeys: [lang],
                onClick: ({ key }) => setLang(key as "pt" | "en"),
            }}
            trigger={["click"]}
        >
            <Button>
                <Flag code={lang} />
                {lang === "pt" ? "Português" : "English"}
            </Button>
        </Dropdown>
    );
}
