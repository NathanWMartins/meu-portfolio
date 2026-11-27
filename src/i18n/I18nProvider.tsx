import React, { useMemo, useEffect, useState } from "react";
import { I18nContext } from "./context";
import { MESSAGES, type Lang, type MessageKey } from "./messages";
import { LOCALES, PAGE_META, langFromPath, pageUrl, pathForLang } from "./page";

type Props = {
    /** Informado só na pré-renderização; no navegador o idioma vem do endereço. */
    initialLang?: Lang;
    children: React.ReactNode;
};

export const I18nProvider: React.FC<Props> = ({ initialLang, children }) => {
    const [lang, setLang] = useState<Lang>(() => initialLang ?? langFromPath(window.location.pathname));

    useEffect(() => {
        const { title, description } = PAGE_META[lang];
        document.documentElement.lang = LOCALES[lang];
        document.title = title;
        document.querySelector('meta[name="description"]')?.setAttribute("content", description);
        document.querySelector('link[rel="canonical"]')?.setAttribute("href", pageUrl(lang));

        const path = pathForLang(lang);
        if (window.location.pathname !== path) {
            window.history.replaceState(null, "", path + window.location.hash);
        }
    }, [lang]);

    const t = useMemo(() => {
        const dict = MESSAGES[lang];
        return (key: MessageKey) => dict[key] ?? key;
    }, [lang]);

    return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
};
