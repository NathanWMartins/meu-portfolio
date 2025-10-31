import { useState } from "react";
import { ConfigProvider, Layout, theme as antdTheme } from "antd";
import HeaderNav from "./components/HeaderNav";
import HomeSection from "./sections/Home";
import AboutSection from "./sections/About";
import ServicesSection from "./sections/Services";
import ProjectsSection from "./sections/Projects";
import ContactSection from "./sections/Contact";
import { I18nProvider } from "./i18n/I18nProvider";

const { Content, Footer } = Layout;

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <I18nProvider>
      <ConfigProvider
        theme={{
          algorithm: dark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
          token: { borderRadius: 20 },
        }}
      >
        <Layout style={{ minHeight: "100dvh" }}>
          <HeaderNav dark={dark} onToggleTheme={() => setDark(v => !v)} />

          <Content>
            <HomeSection />
            <AboutSection dark={dark} />
            <ServicesSection />
            <ProjectsSection />
            <ContactSection />
          </Content>

          <Footer style={{ textAlign: "center" }}>
            © {new Date().getFullYear()} Nathan Will — Full Stack Developer
          </Footer>
        </Layout>
      </ConfigProvider>
    </I18nProvider>
  );
}
