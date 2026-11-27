/* eslint-disable react-refresh/only-export-components -- roda só no build, sem Fast Refresh */
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import { renderToString } from "react-dom/server";
import App from "./App";
import type { Lang } from "./i18n/messages";
import { LOCALES, pathForLang } from "./i18n/page";
import { headTags, llmsTxt, sitemapXml } from "./seo";

export { LANGS } from "./i18n/page";

/** Gera o HTML de um idioma para o script scripts/prerender.mjs. */
export function render(lang: Lang) {
  const cache = createCache();
  const body = renderToString(
    <StyleProvider cache={cache}>
      <App initialLang={lang} />
    </StyleProvider>,
  );

  return {
    file: `${pathForLang(lang).slice(1)}index.html`,
    htmlLang: LOCALES[lang],
    head: headTags(lang),
    styles: extractStyle(cache),
    body,
  };
}

export function siteFiles(): Record<string, string> {
  const today = new Date().toISOString().slice(0, 10);
  return { "llms.txt": llmsTxt(), "sitemap.xml": sitemapXml(today) };
}
