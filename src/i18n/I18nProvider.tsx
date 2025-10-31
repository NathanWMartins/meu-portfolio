import React, { createContext, useContext, useMemo, useEffect, useState } from "react";

export type Lang = "pt" | "en";

const MESSAGES = {
    en: {
        // Header
        nav_home: "Home",
        nav_about: "About me",
        nav_services: "Services",
        nav_projects: "My Projects",
        nav_contact: "Contact me",
        // Home
        home_greeting: "Hi! I’m",
        home_job: "full-stack web developer<br />based in Brazil.",
        home_desription: "Full-Stack Developer experienced in React and TypeScript on the front-end, and Java with Spring Boot on the back-end. Passionate about building modern, secure, and high-performance applications — from intuitive user interfaces to robust service architecture and database design.",
        home_contact_btn: "contact me",
        home_resume_btn: "my resume",
        // About
        about_title: "About Me",
        about_p1: "I’m a Full-Stack Developer specializing in React + TypeScript on the front-end and Java + Spring Boot on the back-end. I enjoy crafting clean, accessible UIs and building robust APIs with secure, maintainable architectures and relational databases.",
        about_card_title_1: "Education",
        about_card_content_1: "Bachelor's degree in Computer Science from Instituto Federal de Santa Catarina.",
        about_card_title_2: "Professional Courses",
        about_card_content_2: "Professional development courses at Full Cycle.",
        about_tools: "Tools I use",
        // Services
        services_title: "My Services",
        services_card_1_title: "Front-end Development",
        services_card_2_title: "Back-end Development",
        services_card_3_title: "UI/UX Design",
        services_card_1_content: "Crafting responsive, dynamic, and accessible user interfaces using React, TypeScript, and UI Libraries — ensuring performance and visual consistency across devices.",
        services_card_2_content: "Building secure and scalable REST APIs with Java, Spring Boot, and relational databases — delivering efficient server-side logic and data management.",
        services_card_3_content: "Designing intuitive and user-centered experiences with attention to usability, accessibility, and visual aesthetics — creating wireframes, prototypes, and high-fidelity designs.",
        // My Projects
        projects_subtitle: "Selected work",
        projects_title: "My Projects",
        projects_title_1: "WIKO — Training Load, Performance & Injury Risk Monitoring",
        projects_desc_1: "WIKO is an intelligent platform that helps coaches and athletes monitor training load, performance, and injury risk through validated sports metrics and AI-driven analysis. Built with React (frontend) and Java + Spring Boot (backend), it automates the calculation of indicators such as PlayerLoad, ACWR, and strain, displaying insights in dynamic dashboards. The system integrates Large Language Models (LLMs) via Spring AI to interpret complex data and generate natural-language recommendations for workload management and recovery strategies. Usability was evaluated using the System Usability Scale (SUS) and a Likert-scale questionnaire with sports professionals, confirming its ease of use and reliability. By combining sports science and artificial intelligence, WIKO democratizes access to performance analytics and supports evidence-based decision-making in sports.",
        projects_title_2: "Dog Adoption — React Native App",
        projects_desc_2: "Cross-platform web version of a mobile app built with React Native Web, Expo, and TypeScript. It integrates an external Dog API to fetch dog data as their breed and photo dynamically. Users can browse dogs, view detailed profiles, and contact shelters directly. The project emphasizes responsive design, smooth navigation, and a clean, accessible UI.",
        projects_title_3: "Prime Barbershop — Service Scheduling and Management System",
        projects_desc_3: "Web application developed with React + TypeScript and Firebase, offering a modern and seamless experience for scheduling services at a barbershop. The system allows clients to view professionals, choose services and available times, make appointments, and track their service history. It includes authentication via Firebase Auth and storage in Firestore. The interface uses Material UI (MUI) and follows a dark palette with golden tones, reflecting the barbershop's premium visual identity. Additionally, it features service rating and user profile management, ensuring an intuitive and complete journey for both clients and administrators.",
        projects_btn_view: "View project",
        // Contact 
        contact_title: "Let’s connect!",
        contact_p1: "I'm always open to new collaborations, ideas, and projects that challenge creativity and technology.",
        contact_p2: "Feel free to reach out through any of the platforms below — I’d love to hear from you!",
        btn_contact: "contact me",
        btn_resume: "my resume",
    },
    pt: {
        // Header
        nav_home: "Início",
        nav_about: "Sobre mim",
        nav_services: "Serviços",
        nav_projects: "Meus Projetos",
        nav_contact: "Contato",
        // Home
        home_greeting: "Olá! Eu sou",
        home_job: "desenvolvedor web full-stack<br /> no Brasil.",
        home_desription: "Desenvolvedor Full-Stack com experiência em React e TypeScript no front-end, e Java com Spring Boot no back-end. Apaixonado por construir aplicações modernas, seguras e de alta performance — desde interfaces de usuário intuitivas até arquitetura de serviços robusta e design de banco de dados.",
        home_contact_btn: "fale comigo",
        home_resume_btn: "meu currículo",
        // About
        about_title: "Sobre Mim",
        about_p1: "Sou um Desenvolvedor Full-Stack especializado em React + TypeScript no front-end e Java + Spring Boot no back-end. Gosto de criar interfaces limpas e acessíveis, além de construir APIs robustas com arquiteturas seguras e mantíveis e bancos de dados relacionais.",
        about_card_title_1: "Formação",
        about_card_content_1: "Bacharel em Ciência da Computação pelo Instituto Federal de Santa Catarina.",
        about_card_title_2: "Cursos Profissionais",
        about_card_content_2: "Cursos de desenvolvimento profissional na Full Cycle.",
        about_tools: "Ferramentas que uso",
        // Services
        services_title: "Meus Serviços",
        services_card_1_title: "Desenvolvimento Front-end",
        services_card_2_title: "Desenvolvimento Back-end",
        services_card_3_title: "Design UI/UX",
        services_card_1_content: "Criação de interfaces de usuário responsivas, dinâmicas e acessíveis usando React, TypeScript e Bibliotecas de UI — garantindo desempenho e consistência visual em todos os dispositivos.",
        services_card_2_content: "Construção de APIs REST seguras e escaláveis com Java, Spring Boot e bancos de dados relacionais — entregando lógica do lado do servidor eficiente e gerenciamento de dados.",
        services_card_3_content: "Design de experiências intuitivas e centradas no usuário com atenção à usabilidade, acessibilidade e estética visual — criando wireframes, protótipos e designs de alta fidelidade.",
        // My Projects
        projects_subtitle: "Trabalhos selecionados",
        projects_title: "Meus Projetos",
        projects_title_1: "WIKO — Monitoramento de Carga de Treinamento, Desempenho e Risco de Lesão",
        projects_desc_1: "WIKO é uma plataforma inteligente que ajuda treinadores e atletas a monitorar a carga de treinamento, desempenho e risco de lesão por meio de métricas esportivas validadas e análise orientada por IA. Construída com React (frontend) e Java + Spring Boot (backend), automatiza o cálculo de indicadores como PlayerLoad, ACWR e strain, exibindo insights em dashboards dinâmicos. O sistema integra Large Language Models (LLMs) via Spring AI para interpretar dados complexos e gerar recomendações em linguagem natural para gerenciamento de carga e estratégias de recuperação. A usabilidade foi avaliada usando a System Usability Scale (SUS) e um questionário em escala Likert com profissionais do esporte, confirmando sua facilidade de uso e confiabilidade. Ao combinar ciência do esporte e inteligência artificial, o WIKO democratiza o acesso à análise de desempenho e apoia a tomada de decisões baseada em evidências no esporte.",
        projects_title_2: "Adoção de Cães — App React Native",
        projects_desc_2: "Versão web cross-platform de um aplicativo móvel construído com React Native Web, Expo e TypeScript. Integra uma API externa de cães para buscar dados de cães como raça e foto dinamicamente. Os usuários podem navegar pelos cães, ver perfis detalhados e entrar em contato com os abrigos diretamente. O projeto enfatiza design responsivo, navegação suave e uma interface limpa e acessível.",
        projects_title_3: "Barbearia Prime — Sistema de Agendamento e Gestão de Serviços",
        projects_desc_3: "Aplicação web desenvolvida com React + TypeScript e Firebase, que oferece uma experiência moderna e fluida para agendamento de serviços em uma barbearia. O sistema permite que os clientes visualizem profissionais, escolham serviços e horários disponíveis, realizem agendamentos e acompanhem seu histórico de atendimentos. Inclui autenticação via Firebase Auth e  armazenamento em Firestore. A interface utiliza Material UI (MUI) e segue uma paleta escura com tons dourados, refletindo a identidade visual premium da barbearia. Além disso, conta com recursos de avaliação de serviços e gerenciamento de perfil do usuário, garantindo uma jornada intuitiva e completa tanto para clientes quanto para administradores.",
        projects_btn_view: "Ver projeto",
        // Contact
        contact_title: "Vamos conversar!",
        contact_p1: "Estou sempre aberto a novas colaborações, ideias e projetos que unam criatividade e tecnologia.",
        contact_p2: "Fale comigo por qualquer uma das plataformas abaixo — vou adorar responder!",
        btn_contact: "fale comigo",
        btn_resume: "meu currículo",
    },
} as const;

type I18nCtx = {
    lang: Lang;
    setLang: (l: Lang) => void;
    t: (key: keyof typeof MESSAGES["en"]) => string;
};

const I18nContext = createContext<I18nCtx | null>(null);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [lang, setLang] = useState<Lang>(() => (localStorage.getItem("lang") as Lang) || "en");

    useEffect(() => {
        localStorage.setItem("lang", lang);
    }, [lang]);

    const t = useMemo(() => {
        const dict = MESSAGES[lang];
        return (key: keyof typeof MESSAGES["en"]) => dict[key] ?? key;
    }, [lang]);

    return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
    const ctx = useContext(I18nContext);
    if (!ctx) throw new Error("useI18n must be used within I18nProvider");
    return ctx;
};
