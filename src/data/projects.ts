import type { MessageKey } from "../i18n/messages";

export type Project = {
  name: string;
  category: MessageKey;
  subtitle: MessageKey;
  summary: MessageKey;
  highlights: MessageKey[];
  stack: string[];
  images: string[];
  liveUrl: string;
  repositories: { label?: string; url: string }[];
};

/** Monta os caminhos na ordem informada: a primeira tela é a de destaque. */
const screenshots = (folder: string, files: string[]) =>
  files.map((file) => `/projects/${folder}/${folder}-${file}`);

export const PROJECTS: Project[] = [
  {
    name: "WIKO",
    category: "project_wiko_category",
    subtitle: "project_wiko_subtitle",
    summary: "project_wiko_summary",
    highlights: ["project_wiko_item_1", "project_wiko_item_2", "project_wiko_item_3"],
    stack: ["React", "TypeScript", "Java", "Spring Boot", "MySQL"],
    images: screenshots("wiko", ["04.png", "02.png", "05.png", "03.png", "01.png"]),
    liveUrl: "https://simada-frontend.vercel.app/",
    repositories: [
      { label: "Frontend", url: "https://github.com/NathanWMartins/simada-frontend" },
      { label: "Backend", url: "https://github.com/KauanKoech/simada-backend" },
    ],
  },
  {
    name: "FutSpot",
    category: "project_futspot_category",
    subtitle: "project_futspot_subtitle",
    summary: "project_futspot_summary",
    highlights: ["project_futspot_item_1", "project_futspot_item_2", "project_futspot_item_3"],
    stack: ["React", "TypeScript", "NestJS", "Supabase"],
    images: screenshots("futspot", ["04.jpg", "02.png", "03.png", "01.png", "05.png"]),
    liveUrl: "https://futspot.vercel.app/",
    repositories: [
      { label: "Frontend", url: "https://github.com/NathanWMartins/futspot-frontend" },
      { label: "Backend", url: "https://github.com/NathanWMartins/futspot-backend" },
    ],
  },
  {
    name: "Barbearia Prime",
    category: "project_barber_category",
    subtitle: "project_barber_subtitle",
    summary: "project_barber_summary",
    highlights: ["project_barber_item_1", "project_barber_item_2", "project_barber_item_3"],
    stack: ["React", "TypeScript", "Firebase", "Material UI"],
    images: screenshots("barber", ["01.jpg", "02.jpg", "03.png", "04.png"]),
    liveUrl: "https://barber-system-nine.vercel.app/",
    repositories: [{ url: "https://github.com/NathanWMartins/barber-system" }],
  },
  {
    name: "Zebra Bolão",
    category: "project_zebra_category",
    subtitle: "project_zebra_subtitle",
    summary: "project_zebra_summary",
    highlights: ["project_zebra_item_1", "project_zebra_item_2", "project_zebra_item_3"],
    stack: ["Next.js", "Supabase"],
    images: screenshots("zebra", ["03.png", "02.png", "04.png", "01.png"]),
    liveUrl: "https://zebrabolao.xyz/",
    repositories: [{ url: "https://github.com/NathanWMartins/ZebraBolao" }],
  },
];
