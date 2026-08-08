import React, { createContext, useMemo, useEffect, useState } from "react";

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
        home_greeting: "Hi! I'm",
        home_title_prefix: "I build",
        home_title_suffix: "for your business.",
        home_word_1: "landing pages",
        home_word_2: "web systems",
        home_word_3: "SaaS platforms",
        home_desription: "Full-Stack Developer building landing pages, custom web systems, and SaaS products that help businesses sell more and run better — with React and TypeScript on the front-end, and Java/Spring Boot and C#/.NET on the back-end.",
        home_contact_btn: "get a quote",
        home_resume_btn: "my resume",
        // About
        about_title: "About Me",
        about_p1: "I'm a Full-Stack Developer who helps businesses and entrepreneurs turn ideas into real products — landing pages, custom web systems, and SaaS platforms. I currently work at Megaweb IT building solutions with C# and .NET, and I also take on independent projects using React + TypeScript on the front-end and Java + Spring Boot on the back-end. My focus is clean, accessible interfaces and robust APIs, built on secure, maintainable architectures that can grow with your project.",
        about_card_title_1: "Education",
        about_card_content_1: "Bachelor's degree in Computer Science from IFSC - Lages.",
        about_card_title_2: "Professional Courses",
        about_card_content_2: "Professional development courses at Full Cycle.",
        about_tools: "Tools I use",
        // Services
        services_title: "Solutions I Build",
        services_card_1_title: "Landing Pages",
        services_card_2_title: "Custom Web Systems",
        services_card_3_title: "SaaS Platforms",
        services_card_4_title: "Product UI/Design",
        services_card_1_content: "High-conversion pages to launch a product, service, or event — fast, responsive, and optimized to turn visitors into customers.",
        services_card_2_content: "Custom systems and dashboards that automate processes and solve your business's specific problems, with reliable integrations and APIs.",
        services_card_3_content: "From MVP to scale: full SaaS products with authentication, billing, and an architecture built to grow with your user base.",
        services_card_4_content: "User-centered interfaces with wireframes, prototypes, and design systems that keep your product visually consistent and easy to use.",
        // My Projects
        projects_subtitle: "Selected work",
        projects_title: "My Projects",
        projects_title_1: "WIKO — Training Load, Performance & Injury Risk Monitoring",
        projects_desc_1: "WIKO is an intelligent platform that helps coaches and athletes monitor training load, performance, and injury risk through validated sports metrics and AI-driven analysis. Built with React (frontend) and Java + Spring Boot (backend), it automates the calculation of indicators such as PlayerLoad, ACWR, and strain, displaying insights in dynamic dashboards. The system integrates Large Language Models (LLMs) via Spring AI to interpret complex data and generate natural-language recommendations for workload management and recovery strategies. Usability was evaluated using the System Usability Scale (SUS) and a Likert-scale questionnaire with sports professionals, confirming its ease of use and reliability. By combining sports science and artificial intelligence, WIKO democratizes access to performance analytics and supports evidence-based decision-making in sports.",
        projects_title_2: "Zebra - World Cup 'Bolão'",
        projects_desc_2: " Zebra is a web platform I built to run World Cup 2026 prediction pools among friends and coworkers, replacing the usual spreadsheets and WhatsApp groups. Built with Next.js and Supabase, it lets users create private groups via invite links, submit predictions for each match, and track a live ranking with points that scale progressively by tournament round (from the group stage to the final). The system automatically syncs match results through an external API and includes an admin panel, user authentication, and support for standalone quick pools, all in a free, responsive interface.",
        projects_title_3: "Prime Barbershop — Service Scheduling and Management System",
        projects_desc_3: "Web application developed with React + TypeScript and Firebase, offering a modern and seamless experience for scheduling services at a barbershop. The system allows clients to view professionals, choose services and available times, make appointments, and track their service history. It includes authentication via Firebase Auth and storage in Firestore. The interface uses Material UI (MUI) and follows a dark palette with golden tones, reflecting the barbershop's premium visual identity. Additionally, it features service rating and user profile management, ensuring an intuitive and complete journey for both clients and administrators.",
        projects_title_4: "FutSpot – Full Stack Platform for Sports Court Management and Scheduling",
        projects_desc_4: "Web platform developed to connect sports court renters and players, centralizing the management of schedules, availability, and reservations. It implements authentication with JWT, permission control by profile, relational modeling with referential integrity, and business rules for automatic validation of scheduling conflicts. Backend structured with NestJS in a modular architecture and REST APIs, with a React frontend focused on intuitive experience and streamlined reservation flow.",
        projects_btn_view: "View project",
        projects_read_more: "Read more",
        projects_read_less: "Show less",
        // Contact
        contact_title: "Let's connect!",
        contact_p1: "I'm always open to new collaborations, ideas, and projects that challenge creativity and technology.",
        contact_p2: "Feel free to reach out through any of the platforms below — I'd love to hear from you!",
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
        home_title_prefix: "eu desenvolvo",
        home_title_suffix: "para o seu negócio.",
        home_word_1: "landing pages",
        home_word_2: "sistemas web",
        home_word_3: "plataformas SaaS",
        home_desription: "Desenvolvedor Full-Stack que cria landing pages, sistemas web sob medida e produtos SaaS que ajudam empresas e empreendedores a vender mais e operar melhor — com React e TypeScript no front-end, e Java/Spring Boot e C#/.NET no back-end.",
        home_contact_btn: "peça um orçamento",
        home_resume_btn: "meu currículo",
        // About
        about_title: "Sobre Mim",
        about_p1: "Sou Desenvolvedor Full-Stack e ajudo empresas e empreendedores a tirarem ideias do papel — landing pages, sistemas web sob medida e plataformas SaaS. Atualmente trabalho na Megaweb IT, onde desenvolvo soluções com C# e .NET, e também atendo projetos independentes com React + TypeScript no front-end e Java + Spring Boot no back-end. Meu foco é entregar interfaces limpas e acessíveis e APIs robustas, com arquiteturas seguras e mantíveis, prontas para crescer junto com o seu projeto.",
        about_card_title_1: "Formação",
        about_card_content_1: "Bacharel em Ciência da Computação pelo IFSC - Lages.",
        about_card_title_2: "Cursos Profissionais",
        about_card_content_2: "Cursos de desenvolvimento profissional na Full Cycle.",
        about_tools: "Ferramentas que uso",
        // Services
        services_title: "Soluções que Desenvolvo",
        services_card_1_title: "Landing Pages",
        services_card_2_title: "Sistemas Web sob Medida",
        services_card_3_title: "Plataformas SaaS",
        services_card_4_title: "UI/Design de Produto",
        services_card_1_content: "Páginas de alta conversão para lançar um produto, serviço ou evento — rápidas, responsivas e otimizadas para transformar visitantes em clientes.",
        services_card_2_content: "Sistemas e dashboards sob medida que automatizam processos e resolvem problemas específicos do seu negócio, com integrações e APIs confiáveis.",
        services_card_3_content: "Do MVP à escala: produtos SaaS completos, com autenticação, cobrança e uma arquitetura pensada para crescer junto com a sua base de usuários.",
        services_card_4_content: "Interfaces centradas no usuário, com wireframes, protótipos e design systems que mantêm seu produto visualmente consistente e fácil de usar.",
        // My Projects
        projects_subtitle: "Trabalhos selecionados",
        projects_title: "Meus Projetos",
        projects_title_1: "WIKO — Monitoramento de Carga de Treinamento, Desempenho e Risco de Lesão",
        projects_desc_1: "WIKO é uma plataforma inteligente que ajuda treinadores e atletas a monitorar a carga de treinamento, desempenho e risco de lesão por meio de métricas esportivas validadas e análise orientada por IA. Construída com React (frontend) e Java + Spring Boot (backend), automatiza o cálculo de indicadores como PlayerLoad, ACWR e strain, exibindo insights em dashboards dinâmicos. O sistema integra Large Language Models (LLMs) via Spring AI para interpretar dados complexos e gerar recomendações em linguagem natural para gerenciamento de carga e estratégias de recuperação. A usabilidade foi avaliada usando a System Usability Scale (SUS) e um questionário em escala Likert com profissionais do esporte, confirmando sua facilidade de uso e confiabilidade. Ao combinar ciência do esporte e inteligência artificial, o WIKO democratiza o acesso à análise de desempenho e apoia a tomada de decisões baseada em evidências no esporte.",
        projects_title_2: "Zebra - Bolão da copa",
        projects_desc_2: "Zebra é uma plataforma web que desenvolvi para organizar bolões de palpites da Copa do Mundo 2026 entre amigos e colegas, substituindo as tradicionais planilhas e grupos de WhatsApp. Construída com Next.js e Supabase, a aplicação permite criar grupos privados com convite por link, registrar palpites para cada partida e acompanha um ranking em tempo real com pontuação que aumenta progressivamente por fase do torneio (da fase de grupos à final). O sistema sincroniza automaticamente os resultados dos jogos via API externa e conta com painel administrativo, autenticação de usuários e suporte a bolões rápidos avulsos, tudo em uma interface responsiva e gratuita.",
        projects_title_3: "Barbearia Prime — Sistema de Agendamento e Gestão de Serviços",
        projects_desc_3: "Aplicação web desenvolvida com React + TypeScript e Firebase, que oferece uma experiência moderna e fluida para agendamento de serviços em uma barbearia. O sistema permite que os clientes visualizem profissionais, escolham serviços e horários disponíveis, realizem agendamentos e acompanhem seu histórico de atendimentos. Inclui autenticação via Firebase Auth e  armazenamento em Firestore. A interface utiliza Material UI (MUI) e segue uma paleta escura com tons dourados, refletindo a identidade visual premium da barbearia. Além disso, conta com recursos de avaliação de serviços e gerenciamento de perfil do usuário, garantindo uma jornada intuitiva e completa tanto para clientes quanto para administradores.",
        projects_title_4: "FutSpot – Plataforma Full Stack para Gestão e Agendamento de Quadras Esportivas",
        projects_desc_4: "Plataforma web desenvolvida para conectar locadores de quadras esportivas e jogadores, centralizando a gestão de horários, disponibilidade e reservas. Implementa autenticação com JWT, controle de permissões por perfil, modelagem relacional com integridade referencial e regras de negócio para validação automática de conflitos de agendamento. Backend estruturado com NestJS em arquitetura modular e APIs REST, com frontend em React focado em experiência intuitiva e fluxo simplificado de reservas.",
        projects_btn_view: "Ver projeto",
        projects_read_more: "Leia mais",
        projects_read_less: "Mostrar menos",
        // Contact
        contact_title: "Vamos conversar!",
        contact_p1: "Estou sempre aberto a novas colaborações, ideias e projetos que unam criatividade e tecnologia.",
        contact_p2: "Fale comigo por qualquer uma das plataformas abaixo — vou adorar responder!",
        btn_contact: "fale comigo",
        btn_resume: "meu currículo",
    },
} as const;

export type MessageKey = keyof typeof MESSAGES["en"];

export type I18nCtx = {
    lang: Lang;
    setLang: (l: Lang) => void;
    t: (key: MessageKey) => string;
};

export const I18nContext = createContext<I18nCtx | null>(null);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [lang, setLang] = useState<Lang>(() => (localStorage.getItem("lang") as Lang) || "pt");

    useEffect(() => {
        localStorage.setItem("lang", lang);
    }, [lang]);

    const t = useMemo(() => {
        const dict = MESSAGES[lang];
        return (key: MessageKey) => dict[key] ?? key;
    }, [lang]);

    return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
};
