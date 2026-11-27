import { Button } from "antd";
import { ArrowRightOutlined, DownloadOutlined, GithubOutlined, LinkedinFilled } from "@ant-design/icons";
import BandTheme from "../components/BandTheme";
import BrowserFrame from "../components/BrowserFrame";
import { GITHUB_URL, LINKEDIN_URL, PHOTO_PATH, RESUME_URL } from "../data/contact";
import { INTEGRATIONS } from "../data/stack";
import { useI18n } from "../i18n/useI18n";

export default function HomeSection({ dark }: { dark: boolean }) {
  const { t } = useI18n();

  return (
    <section id="home">
      <BandTheme dark={dark}>
        <div className="hero band">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-author">
                <img src={PHOTO_PATH} alt={t("home_photo_alt")} />
                <p>
                  <strong>Nathan Will Martins</strong>
                  <span>{t("home_author_role")}</span>
                </p>
              </div>

              <h1>
                {t("home_title_start")} <em>{t("home_title_highlight")}</em>
              </h1>
              <p className="hero-description">{t("home_description")}</p>

              <div className="actions">
                <Button type="primary" size="large" href="#contact">
                  {t("home_contact_btn")}
                </Button>
                <Button size="large" href="#projects" icon={<ArrowRightOutlined />} iconPosition="end">
                  {t("home_projects_btn")}
                </Button>
              </div>

              <div className="hero-links">
                <a href={RESUME_URL} download>
                  <DownloadOutlined /> {t("home_resume_btn")}
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                  <LinkedinFilled /> LinkedIn
                </a>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                  <GithubOutlined /> GitHub
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <BrowserFrame
                className="hero-frame-back"
                src="/projects/barber/barber-01.jpg"
                url="barber-system-nine.vercel.app"
              />
              <BrowserFrame
                className="hero-frame-front"
                src="/projects/futspot/futspot-04.jpg"
                url="futspot.vercel.app"
              />
            </div>
          </div>
        </div>
      </BandTheme>

      <div className="integrations">
        <div className="container">
          <p>{t("integrations_label")}</p>
          <ul>
            {INTEGRATIONS.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
