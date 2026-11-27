// Grava em dist/ o HTML já preenchido de cada idioma, o sitemap.xml e o llms.txt.
// Sem isso, robôs que não executam JavaScript (a maioria dos de IA) veem a página vazia.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";

// Precisa vir antes do import: em modo de desenvolvimento o antd gera nomes de classe
// diferentes dos do navegador e os botões aparecem sem estilo.
process.env.NODE_ENV = "production";

const dist = new URL("../dist/", import.meta.url);
const server = new URL("../dist-ssr/", import.meta.url);
const { LANGS, render, siteFiles } = await import(new URL("entry-server.js", server));
const template = readFileSync(new URL("index.html", dist), "utf8");

function replace(html, pattern, value) {
  if (!pattern.test(html)) throw new Error(`prerender: ${pattern} não encontrado em dist/index.html`);
  // Função evita que "$" no conteúdo seja interpretado pelo replace
  return html.replace(pattern, () => value);
}

for (const lang of LANGS) {
  const page = render(lang);
  let html = replace(template, /<html lang="[^"]*"/, `<html lang="${page.htmlLang}"`);
  html = replace(html, /<!--seo:start-->[\s\S]*?<!--seo:end-->/, page.head);
  html = replace(html, /<\/head>/, `${page.styles}\n  </head>`);
  html = replace(html, /<div id="root"><\/div>/, `<div id="root">${page.body}</div>`);

  const file = new URL(page.file, dist);
  mkdirSync(new URL(".", file), { recursive: true });
  writeFileSync(file, html);
  console.log(`prerender: dist/${page.file}`);
}

for (const [name, content] of Object.entries(siteFiles())) {
  writeFileSync(new URL(name, dist), content);
  console.log(`prerender: dist/${name}`);
}

rmSync(server, { recursive: true, force: true });
