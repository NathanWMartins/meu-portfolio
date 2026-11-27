import { useI18n } from "../i18n/useI18n";
import type { Lang } from "../i18n/messages";
import { LOCALES, pathForLang } from "../i18n/page";

const OPTIONS: { code: Lang; label: string }[] = [
    { code: "pt", label: "Português" },
    { code: "en", label: "English" },
];

export default function LanguageSwitcher() {
    const { lang, setLang } = useI18n();

    return (
        <div className="lang-switcher">
            {OPTIONS.map(({ code, label }) => (
                // Link de verdade para os buscadores acharem a outra versão
                <a
                    key={code}
                    href={pathForLang(code)}
                    hrefLang={LOCALES[code]}
                    title={label}
                    aria-current={lang === code ? "true" : undefined}
                    onClick={(event) => {
                        if (event.ctrlKey || event.metaKey || event.shiftKey) return;
                        event.preventDefault();
                        setLang(code);
                    }}
                >
                    {code.toUpperCase()}
                </a>
            ))}
        </div>
    );
}
