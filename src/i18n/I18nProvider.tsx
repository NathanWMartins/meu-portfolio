import React, { useMemo, useEffect, useState } from "react";
import { I18nContext } from "./context";
import { MESSAGES, type Lang, type MessageKey } from "./messages";

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [lang, setLang] = useState<Lang>(() => (localStorage.getItem("lang") === "en" ? "en" : "pt"));

    useEffect(() => {
        localStorage.setItem("lang", lang);
        document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    }, [lang]);

    const t = useMemo(() => {
        const dict = MESSAGES[lang];
        return (key: MessageKey) => dict[key] ?? key;
    }, [lang]);

    return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
};
