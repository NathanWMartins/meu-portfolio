import {
  ApartmentOutlined,
  BookOutlined,
  CloudSyncOutlined,
  CreditCardOutlined,
  ReadOutlined,
  TruckOutlined,
} from "@ant-design/icons";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import { useI18n } from "../i18n/useI18n";
import type { MessageKey } from "../i18n/messages";

const WORK_AREAS: { icon: React.ReactNode; title: MessageKey; content: MessageKey }[] = [
  { icon: <ApartmentOutlined />, title: "work_architecture_title", content: "work_architecture_content" },
  { icon: <CreditCardOutlined />, title: "work_payments_title", content: "work_payments_content" },
  { icon: <TruckOutlined />, title: "work_shipping_title", content: "work_shipping_content" },
  { icon: <CloudSyncOutlined />, title: "work_batch_title", content: "work_batch_content" },
];

export default function ExperienceSection() {
  const { t } = useI18n();

  return (
    <Section id="experience" eyebrow={t("experience_eyebrow")} title={t("experience_title")} alt>
      <Reveal>
        <article className="card job">
          <header className="job-header">
            <div>
              <h3>{t("experience_role")}</h3>
              <p>Megaweb IT Solutions</p>
            </div>
            <span className="badge">{t("experience_period")}</span>
          </header>
          <p className="job-summary">{t("experience_summary")}</p>
          <ul className="work-grid">
            {WORK_AREAS.map((area) => (
              <li key={area.title}>
                <span className="icon-tile">{area.icon}</span>
                <h4>{t(area.title)}</h4>
                <p>{t(area.content)}</p>
              </li>
            ))}
          </ul>
        </article>
      </Reveal>

      <Reveal delay={100}>
        <h3 className="subsection-title">{t("education_title")}</h3>
        <div className="education-grid">
          <article className="card education">
            <span className="icon-tile">
              <ReadOutlined />
            </span>
            <div>
              <h4>{t("education_degree")}</h4>
              <p>{t("education_school")}</p>
            </div>
          </article>
          <article className="card education">
            <span className="icon-tile">
              <BookOutlined />
            </span>
            <div>
              <h4>{t("education_courses")}</h4>
              <p>Full Cycle</p>
            </div>
          </article>
        </div>
      </Reveal>
    </Section>
  );
}
