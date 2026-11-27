# Nathan Will Martins — Portfólio & Site de Serviços

Site pessoal de Nathan Will Martins, desenvolvedor Full-Stack. Portfólio voltado a empresas, com experiência profissional, projetos, competências e serviços sob demanda.

Disponível em: https://nathanwill.vercel.app/

## Stack

- **Front-end:** React 19 + TypeScript + Vite
- **UI:** Ant Design (antd) + CSS próprio (`src/index.css`), com tema claro e escuro
- **i18n:** contexto próprio (`src/i18n`), com suporte a Português e Inglês
- **Ícones:** Ant Design Icons e logos de tecnologias do Devicon (via CDN)
- **Fontes:** Manrope e Inter (Google Fonts)

## Estrutura

```
src/
  components/     # Cabeçalho, seletor de idioma, seção, moldura de navegador, animação de entrada etc.
  sections/       # Home, Projects, Experience, About, Services, Contact
  data/           # Projetos, tecnologias e canais de contato
  i18n/           # Provider e dicionário de traduções (pt/en)
  seo.ts          # Metadados, dados estruturados, llms.txt e sitemap
  entry-server.tsx # Entrada usada na pré-renderização
scripts/
  prerender.mjs   # Grava o HTML de cada idioma em dist/ no fim do build
public/
  projects/       # Screenshots dos projetos exibidos na seção Projects
  nathan-will-martins.jpg  # Foto
  CurriculoNathanWill.pdf
  favicon.svg, og-image.png, robots.txt
```

## Busca e assistentes de IA (SEO)

- `npm run build` pré-renderiza `/` (português) e `/en/` (inglês), então o conteúdo está no HTML mesmo para robôs que não executam JavaScript.
- Títulos, descrições e o endereço do site ficam em `src/i18n/page.ts`. Se o domínio mudar, atualize `SITE_URL` e o `public/robots.txt`.
- `sitemap.xml` e `llms.txt` são gerados no build a partir dos textos e dados do site; não precisam de edição manual.
- O PDF do currículo está marcado como `noindex` no `vercel.json`.

## Seções do site

1. **Home** — apresentação com capturas dos projetos, botões de contato e currículo, e faixa de integrações.
2. **Projetos** — destaque para cada projeto real, com miniaturas, galeria de telas, stack e links para a demonstração e o código.
3. **Experiência** — frentes de atuação profissional e formação.
4. **Sobre** — foto, texto de apresentação e tecnologias agrupadas.
5. **Serviços** — Sistemas Web sob Medida, Plataformas SaaS, Landing Pages e UI/Design de Produto.
6. **Contato** — e-mail, LinkedIn, WhatsApp (com mensagem pré-preenchida) e GitHub.

## Rodando localmente

```bash
npm install
npm run dev       # ambiente de desenvolvimento
npm run build     # build de produção (tsc + vite build)
npm run preview   # preview do build de produção
npm run lint      # eslint
```
