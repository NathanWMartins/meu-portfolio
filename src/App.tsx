import { useLayoutEffect, useState } from "react";
import { ConfigProvider, theme as antdTheme } from "antd";
import HeaderNav from "./components/HeaderNav";
import HomeSection from "./sections/Home";
import ExperienceSection from "./sections/Experience";
import ProjectsSection from "./sections/Projects";
import AboutSection from "./sections/About";
import ServicesSection from "./sections/Services";
import ContactSection from "./sections/Contact";
import { I18nProvider } from "./i18n/I18nProvider";
import type { Lang } from "./i18n/messages";

export default function App({ initialLang }: { initialLang?: Lang }) {
  // Na pré-renderização (Node) não existe localStorage
  const [dark, setDark] = useState(
    () => typeof window !== "undefined" && localStorage.getItem("theme") === "dark",
  );

  useLayoutEffect(() => {
    const theme = dark ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [dark]);

  return (
    <I18nProvider initialLang={initialLang}>
      <ConfigProvider
        theme={{
          algorithm: dark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
          token: {
            colorPrimary: dark ? "#2f6bd8" : "#1d4fbf",
            borderRadius: 6,
            fontFamily: "var(--font)",
          },
        }}
      >
        <HeaderNav dark={dark} onToggleTheme={() => setDark((v) => !v)} />

        <main>
          <HomeSection dark={dark} />
          <ProjectsSection />
          <ExperienceSection />
          <AboutSection />
          <ServicesSection />
          <ContactSection dark={dark} />
        </main>

        <footer className="footer band">
          <div className="container">© {new Date().getFullYear()} Nathan Will Martins</div>
        </footer>
      </ConfigProvider>
    </I18nProvider>
  );
}
