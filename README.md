# Nathan Will Martins — Portfólio & Site de Serviços

Site pessoal de Nathan Will Martins, desenvolvedor Full-Stack. Além de portfólio, funciona como página de captação de clientes para landing pages, sistemas web sob medida e produtos SaaS.

Disponível em: https://nathanwill.vercel.app/

## Stack

- **Front-end:** React 19 + TypeScript + Vite
- **UI:** Ant Design (antd)
- **Animações:** Framer Motion
- **i18n:** contexto próprio (`src/i18n`), com suporte a Português e Inglês
- **Ícones:** Ant Design Icons, React Icons, Devicon (via CDN)

## Estrutura

```
src/
  components/     # Header, cards com tilt 3D, fundo animado (FloatingOrbs), etc.
  sections/       # Home, About, Services, Projects, Contact
  i18n/           # Provider e dicionário de traduções (pt/en)
  assets/         # Imagens
public/
  projects/       # Screenshots dos projetos exibidos na seção Projects
  CurriculoNathanWill.pdf
  favicon.svg, og-image.png, robots.txt, sitemap.xml
```

## Seções do site

1. **Home** — hero com apresentação, palavras-chave animadas (landing pages / sistemas web / SaaS) e CTA de orçamento.
2. **Sobre mim** — texto de apresentação e uma órbita animada com as tecnologias usadas.
3. **Serviços** — quatro ofertas: Landing Pages, Sistemas Web sob Medida, Plataformas SaaS e UI/Design de Produto.
4. **Projetos** — showcase alternado dos projetos reais, com carrossel de imagens, stack utilizada e links para o projeto ao vivo/repositório.
5. **Contato** — CTA principal via WhatsApp (com mensagem pré-preenchida) e links secundários (LinkedIn, Instagram, Email, GitHub).

## Rodando localmente

```bash
npm install
npm run dev       # ambiente de desenvolvimento
npm run build     # build de produção (tsc + vite build)
npm run preview   # preview do build de produção
npm run lint      # eslint
```
