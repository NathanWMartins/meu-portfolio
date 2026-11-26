import { CloudOutlined, DashboardOutlined, LayoutOutlined, RocketOutlined } from "@ant-design/icons";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import Tags from "../components/Tags";
import { useI18n } from "../i18n/useI18n";
import type { MessageKey } from "../i18n/messages";

const SERVICES: { icon: React.ReactNode; title: MessageKey; content: MessageKey; tags: string[] }[] = [
  {
    icon: <DashboardOutlined />,
    title: "services_systems_title",
    content: "services_systems_content",
    tags: ["Java", "Spring Boot", "C#", ".NET"],
  },
  {
    icon: <CloudOutlined />,
    title: "services_saas_title",
    content: "services_saas_content",
    tags: ["React", "Node.js", "Spring Boot"],
  },
  {
    icon: <RocketOutlined />,
    title: "services_landing_title",
    content: "services_landing_content",
    tags: ["React", "TypeScript", "SEO"],
  },
  {
    icon: <LayoutOutlined />,
    title: "services_design_title",
    content: "services_design_content",
    tags: ["Figma", "Design Systems"],
  },
];

export default function ServicesSection() {
  const { t } = useI18n();

  return (
    <Section
      id="services"
      eyebrow={t("services_eyebrow")}
      title={t("services_title")}
      description={t("services_description")}
      alt
    >
      <div className="services-grid">
        {SERVICES.map((service, index) => (
          <Reveal key={service.title} delay={index * 80}>
            <article className="card service">
              <span className="icon-tile">{service.icon}</span>
              <h3>{t(service.title)}</h3>
              <p>{t(service.content)}</p>
              <Tags items={service.tags} />
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
