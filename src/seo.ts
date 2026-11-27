/**
 * Conteúdo lido por buscadores e assistentes de IA. É gerado no build a partir
 * dos mesmos textos e dados exibidos na página, para não ficar desatualizado.
 */
import { EMAIL, GITHUB_URL, LINKEDIN_URL, PHOTO_PATH } from "./data/contact";
import { PROJECTS } from "./data/projects";
import { PRACTICES, STACK } from "./data/stack";
import { MESSAGES, type Lang, type MessageKey } from "./i18n/messages";
import { LANGS, LOCALES, PAGE_META, SITE_URL, pageUrl } from "./i18n/page";

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const SHARE_IMAGE = `${SITE_URL}/og-image.png`;
const EMPLOYER = "Megaweb IT Solutions";

const SERVICES: [MessageKey, MessageKey][] = [
    ["services_systems_title", "services_systems_content"],
    ["services_saas_title", "services_saas_content"],
    ["services_landing_title", "services_landing_content"],
    ["services_design_title", "services_design_content"],
];

const WORK_AREAS: [MessageKey, MessageKey][] = [
    ["work_architecture_title", "work_architecture_content"],
    ["work_payments_title", "work_payments_content"],
    ["work_shipping_title", "work_shipping_content"],
    ["work_batch_title", "work_batch_content"],
];

const SKILLS = [...STACK.flatMap((group) => group.items.map((item) => item.name)), ...PRACTICES];

function structuredData(lang: Lang) {
    const t = MESSAGES[lang];
    const meta = PAGE_META[lang];
    const url = pageUrl(lang);

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": WEBSITE_ID,
                url: `${SITE_URL}/`,
                name: "Nathan Will Martins",
                inLanguage: LANGS.map((l) => LOCALES[l]),
                publisher: { "@id": PERSON_ID },
            },
            {
                "@type": "ProfilePage",
                "@id": `${url}#page`,
                url,
                name: meta.title,
                description: meta.description,
                inLanguage: LOCALES[lang],
                isPartOf: { "@id": WEBSITE_ID },
                mainEntity: { "@id": PERSON_ID },
            },
            {
                "@type": "Person",
                "@id": PERSON_ID,
                name: "Nathan Will Martins",
                alternateName: "Nathan Will",
                url: `${SITE_URL}/`,
                image: SITE_URL + PHOTO_PATH,
                jobTitle: t.experience_role,
                description: t.about_p1,
                worksFor: { "@type": "Organization", name: EMPLOYER },
                alumniOf: {
                    "@type": "CollegeOrUniversity",
                    name: "Instituto Federal de Santa Catarina (IFSC)",
                },
                address: { "@type": "PostalAddress", addressCountry: "BR" },
                knowsAbout: SKILLS,
                knowsLanguage: ["pt-BR", "en"],
                sameAs: [LINKEDIN_URL, GITHUB_URL],
                makesOffer: SERVICES.map(([title, content]) => ({
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: t[title], description: t[content] },
                })),
            },
            {
                "@type": "ItemList",
                "@id": `${url}#projects`,
                name: t.projects_title,
                itemListElement: PROJECTS.map((project, index) => ({
                    "@type": "ListItem",
                    position: index + 1,
                    item: {
                        "@type": "CreativeWork",
                        name: project.name,
                        headline: t[project.subtitle],
                        description: t[project.summary],
                        url: project.liveUrl,
                        image: SITE_URL + project.images[0],
                        keywords: project.stack.join(", "),
                        contributor: { "@id": PERSON_ID },
                    },
                })),
            },
        ],
    };
}

const escapeHtml = (value: string) =>
    value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const meta = (attribute: "name" | "property", key: string, content: string) =>
    `<meta ${attribute}="${key}" content="${escapeHtml(content)}" />`;

export function headTags(lang: Lang) {
    const { title, description, imageAlt } = PAGE_META[lang];
    const url = pageUrl(lang);
    const ogLocale = (l: Lang) => (l === "pt" ? "pt_BR" : "en_US");

    return [
        `<title>${escapeHtml(title)}</title>`,
        meta("name", "description", description),
        meta("name", "author", "Nathan Will Martins"),
        meta("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1"),
        `<link rel="canonical" href="${url}" />`,
        ...LANGS.map((l) => `<link rel="alternate" hreflang="${LOCALES[l]}" href="${pageUrl(l)}" />`),
        `<link rel="alternate" hreflang="x-default" href="${pageUrl("pt")}" />`,
        meta("property", "og:type", "profile"),
        meta("property", "og:site_name", "Nathan Will Martins"),
        meta("property", "og:url", url),
        meta("property", "og:title", title),
        meta("property", "og:description", description),
        meta("property", "og:image", SHARE_IMAGE),
        meta("property", "og:image:width", "1200"),
        meta("property", "og:image:height", "630"),
        meta("property", "og:image:alt", imageAlt),
        meta("property", "og:locale", ogLocale(lang)),
        ...LANGS.filter((l) => l !== lang).map((l) => meta("property", "og:locale:alternate", ogLocale(l))),
        meta("name", "twitter:card", "summary_large_image"),
        meta("name", "twitter:title", title),
        meta("name", "twitter:description", description),
        meta("name", "twitter:image", SHARE_IMAGE),
        // "<" escapado para o JSON não encerrar a tag <script>
        `<script type="application/ld+json">${JSON.stringify(structuredData(lang)).replace(/</g, "\\u003c")}</script>`,
    ].join("\n    ");
}

/** Resumo em Markdown para assistentes de IA (convenção llms.txt). */
export function llmsTxt() {
    const t = MESSAGES.pt;

    return [
        "# Nathan Will Martins",
        "",
        `> ${PAGE_META.pt.description}`,
        "",
        `Site: ${pageUrl("pt")} (português) e ${pageUrl("en")} (English)`,
        "",
        "## Perfil",
        "",
        t.about_p1,
        "",
        t.about_p2,
        "",
        `- Posição atual: ${t.home_author_role}`,
        `- ${t.education_title}: ${t.education_degree}, ${t.education_school}`,
        `- ${t.fact_english_label}: ${t.fact_english_value}`,
        "",
        "## Experiência profissional",
        "",
        `### ${t.experience_role}, ${EMPLOYER} (${t.experience_period})`,
        "",
        ...WORK_AREAS.map(([title, content]) => `- ${t[title]}: ${t[content]}`),
        "",
        "## Tecnologias",
        "",
        ...STACK.map((group) => `- ${t[group.label]}: ${group.items.map((item) => item.name).join(", ")}`),
        `- ${t.skills_practices}: ${PRACTICES.join(", ")}`,
        "",
        "## Projetos",
        "",
        ...PROJECTS.flatMap((project) => [
            `### [${project.name}](${project.liveUrl})`,
            "",
            `${t[project.subtitle]}. ${t[project.summary]}`,
            "",
            ...project.highlights.map((key) => `- ${t[key]}`),
            `- Stack: ${project.stack.join(", ")}`,
            `- ${t.projects_btn_code}: ${project.repositories.map((repo) => repo.url).join(", ")}`,
            "",
        ]),
        "## Serviços",
        "",
        ...SERVICES.map(([title, content]) => `- ${t[title]}: ${t[content]}`),
        "",
        "## Contato",
        "",
        `- E-mail: ${EMAIL}`,
        `- LinkedIn: ${LINKEDIN_URL}`,
        `- GitHub: ${GITHUB_URL}`,
        "",
    ].join("\n");
}

export function sitemapXml(date: string) {
    const alternates = LANGS.map(
        (l) => `    <xhtml:link rel="alternate" hreflang="${LOCALES[l]}" href="${pageUrl(l)}" />`,
    ).join("\n");

    const urls = LANGS.map(
        (l) => `  <url>
    <loc>${pageUrl(l)}</loc>
    <lastmod>${date}</lastmod>
${alternates}
  </url>`,
    ).join("\n");

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}
