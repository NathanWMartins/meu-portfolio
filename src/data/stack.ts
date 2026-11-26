import type { MessageKey } from "../i18n/messages";

export type Technology = {
  name: string;
  icon: string;
  /** Logos pretos precisam ser clareados no tema escuro. */
  monochrome?: boolean;
};

const devicon = (folder: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${folder}/${folder}-${variant}.svg`;

export const STACK: { label: MessageKey; items: Technology[] }[] = [
  {
    label: "skills_backend",
    items: [
      { name: "C#", icon: devicon("csharp") },
      { name: ".NET", icon: devicon("dotnetcore") },
      { name: "Java", icon: devicon("java") },
      { name: "Spring Boot", icon: devicon("spring") },
      { name: "Node.js", icon: devicon("nodejs") },
      { name: "NestJS", icon: devicon("nestjs") },
      { name: "Python", icon: devicon("python") },
    ],
  },
  {
    label: "skills_frontend",
    items: [
      { name: "React", icon: devicon("react") },
      { name: "React Native", icon: devicon("react") },
      { name: "TypeScript", icon: devicon("typescript") },
      { name: "JavaScript", icon: devicon("javascript") },
      { name: "Next.js", icon: devicon("nextjs"), monochrome: true },
    ],
  },
  {
    label: "skills_data_infra",
    items: [
      { name: "MySQL", icon: devicon("mysql") },
      { name: "PostgreSQL", icon: devicon("postgresql") },
      { name: "Supabase", icon: devicon("supabase") },
      { name: "Firebase", icon: devicon("firebase", "plain") },
      { name: "Docker", icon: devicon("docker") },
      { name: "Kubernetes", icon: devicon("kubernetes", "plain") },
      { name: "Git", icon: devicon("git") },
    ],
  },
];

export const PRACTICES = ["REST APIs", "DDD", "CQRS", "Multi-tenant", "CI/CD", "SQL"];

export const INTEGRATIONS = ["Stripe", "Pagar.me", "Asaas", "Melhor Envio", "Bling", "SendGrid"];
