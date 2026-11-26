import { useI18n } from "../i18n/useI18n";
import type { Lang } from "../i18n/messages";

const OPTIONS: { code: Lang; label: string }[] = [
    { code: "pt", label: "Português" },
    { code: "en", label: "English" },
];

export default function LanguageSwitcher() {
    const { lang, setLang } = useI18n();

    return (
        <div className="lang-switcher">
            {OPTIONS.map(({ code, label }) => (
                <button
                    key={code}
                    type="button"
                    title={label}
                    aria-pressed={lang === code}
                    onClick={() => setLang(code)}
                >
                    {code.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
