import { createContext } from "react";
import type { Lang, MessageKey } from "./messages";

export type I18nCtx = {
    lang: Lang;
    setLang: (l: Lang) => void;
    t: (key: MessageKey) => string;
};

export const I18nContext = createContext<I18nCtx | null>(null);
