import type { Lang } from "./messages";

/** Endereço público do site, usado em canonical, sitemap e dados estruturados. */
export const SITE_URL = "https://nathanwill.vercel.app";

export const LANGS: Lang[] = ["pt", "en"];

export const LOCALES: Record<Lang, string> = { pt: "pt-BR", en: "en" };

/** Cada idioma tem endereço próprio, para que os buscadores indexem os dois. */
export const pathForLang = (lang: Lang) => (lang === "en" ? "/en/" : "/");

export const langFromPath = (path: string): Lang => (/^\/en(\/|$)/.test(path) ? "en" : "pt");

export const pageUrl = (lang: Lang) => SITE_URL + pathForLang(lang);

export const PAGE_META: Record<Lang, { title: string; description: string; imageAlt: string }> = {
    pt: {
        title: "Nathan Will Martins — Desenvolvedor Full-Stack | .NET, Java e React",
        description:
            "Nathan Will Martins, desenvolvedor Full-Stack: sistemas web, plataformas SaaS e landing pages com C#/.NET, Java/Spring Boot, React e TypeScript.",
        imageAlt: "Nathan Will Martins, desenvolvedor Full-Stack",
    },
    en: {
        title: "Nathan Will Martins — Full-Stack Developer | .NET, Java and React",
        description:
            "Nathan Will Martins, Full-Stack Developer: web systems, SaaS platforms, and landing pages with C#/.NET, Java/Spring Boot, React, and TypeScript.",
        imageAlt: "Nathan Will Martins, Full-Stack Developer",
    },
};
