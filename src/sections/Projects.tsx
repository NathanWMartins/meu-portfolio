import { useState } from "react";
import { Button, Image } from "antd";
import { CheckCircleFilled, ExportOutlined, GithubOutlined, ZoomInOutlined } from "@ant-design/icons";
import BrowserFrame from "../components/BrowserFrame";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import Tags from "../components/Tags";
import { PROJECTS, type Project } from "../data/projects";
import { useI18n } from "../i18n/useI18n";

function ProjectShowcase({ project }: { project: Project }) {
  const { t } = useI18n();
  const [current, setCurrent] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <article className="showcase">
      <div className="showcase-media">
        <button
          type="button"
          className="showcase-screen"
          onClick={() => setGalleryOpen(true)}
          aria-label={`${t("projects_zoom")}: ${project.name}`}
        >
          <BrowserFrame src={project.images[current]} url={project.liveUrl} lazy />
          <span className="showcase-zoom">
            <ZoomInOutlined /> {t("projects_zoom")}
          </span>
        </button>

        <div className="thumbs">
          {project.images.map((src, index) => (
            <button
              key={src}
              type="button"
              aria-pressed={index === current}
              aria-label={`${t("projects_thumb")} ${index + 1}`}
              onClick={() => setCurrent(index)}
            >
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>

        <Image.PreviewGroup
          items={project.images}
          preview={{
            visible: galleryOpen,
            onVisibleChange: setGalleryOpen,
            current,
            onChange: setCurrent,
          }}
        />
      </div>

      <div className="showcase-info">
        <span className="badge">{t(project.category)}</span>
        <h3>{project.name}</h3>
        <p className="showcase-subtitle">{t(project.subtitle)}</p>
        <p className="showcase-summary">{t(project.summary)}</p>
        <ul className="checks">
          {project.highlights.map((key) => (
            <li key={key}>
              <CheckCircleFilled /> {t(key)}
            </li>
          ))}
        </ul>
        <Tags items={project.stack} />
        <div className="actions">
          <Button type="primary" href={project.liveUrl} target="_blank" icon={<ExportOutlined />}>
            {t("projects_btn_view")}
          </Button>
          {project.repositories.map((repo) => (
            <Button key={repo.url} href={repo.url} target="_blank" icon={<GithubOutlined />}>
              {repo.label ?? t("projects_btn_code")}
            </Button>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  const { t } = useI18n();

  return (
    <Section
      id="projects"
      eyebrow={t("projects_eyebrow")}
      title={t("projects_title")}
      description={t("projects_description")}
    >
      <div className="showcases">
        {PROJECTS.map((project) => (
          <Reveal key={project.name}>
            <ProjectShowcase project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
