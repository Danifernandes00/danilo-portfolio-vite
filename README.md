# Portfólio — Danilo Fernandes (React + Vite + Tailwind)

Projeto criado para o CP3 — Front & WebDev (FIAP), atendendo aos requisitos:
- Rotas (React Router)
- Lista de projetos com **props** e **rotas dinâmicas**
- **Barra de busca** com renderização condicional ("Nenhum projeto localizado")
- **Formulário de contato** imprimindo dados via `alert`
- Rodapé com **ícones do React Icons**
- **Tailwind CSS**, responsividade, acessibilidade básica e SEO
- **Modo noturno (dark mode)** e microinterações

## Como rodar
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Publicar na Vercel
1. Faça login em https://vercel.com
2. Import `danilo-portfolio-vite` via GitHub **ou** arraste a pasta.
3. Framework: Vite — Build: `npm run build` — Output: `dist/` (auto).
4. Deploy.

## Editar conteúdo
- **Dados dos projetos:** `src/data/projects.js`
- **Textos pessoais:** páginas `Home.jsx` e `About.jsx`
- **Links sociais:** `Footer.jsx`
