import me from "../assets/me.png";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import Tags from "../components/Tags";
import { PRACTICES, STACK } from "../data/stack";
import { useI18n } from "../i18n/useI18n";

export default function AboutSection() {
    const { t } = useI18n();

    const facts = [
        { label: t("fact_education_label"), value: t("fact_education_value") },
        { label: t("fact_english_label"), value: t("fact_english_value") },
        { label: t("fact_french_label"), value: t("fact_french_value") },
    ];

    return (
        <Section id="about" eyebrow={t("about_eyebrow")} title={t("about_title")}>
            <Reveal>
                <div className="about-grid">
                    <img className="about-photo" src={me} alt={t("home_photo_alt")} loading="lazy" />
                    <div>
                        <div className="about-text">
                            <p>{t("about_p1")}</p>
                            <p>{t("about_p2")}</p>
                        </div>
                        <dl className="facts">
                            {facts.map((fact) => (
                                <div key={fact.label}>
                                    <dt>{fact.label}</dt>
                                    <dd>{fact.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </Reveal>

            <Reveal>
                <h3 className="subsection-title">{t("stack_title")}</h3>
            </Reveal>
            <div className="stack">
                {STACK.map((group, index) => (
                    <Reveal key={group.label} delay={index * 80}>
                        <h4>{t(group.label)}</h4>
                        <ul>
                            {group.items.map((tech) => (
                                <li key={tech.name} className="card">
                                    <img
                                        src={tech.icon}
                                        alt=""
                                        loading="lazy"
                                        className={tech.monochrome ? "monochrome" : undefined}
                                    />
                                    {tech.name}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                ))}
            </div>
            <Reveal>
                <div className="practices">
                    <h4>{t("skills_practices")}</h4>
                    <Tags items={PRACTICES} />
                </div>
            </Reveal>
        </Section>
    );
}
