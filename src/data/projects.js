const placeholder = 'https://images.unsplash.com/photo-1529336953121-c6ae3f708173?q=80&w=1200&auto=format&fit=crop'
const placeholder2 = 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop'
const placeholder3 = 'https://images.unsplash.com/photo-1511974035430-5de47d3b95da?q=80&w=1200&auto=format&fit=crop'

const projects = [
  {
    slug: 'calculadora-react',
    title: 'Calculadora em React',
    excerpt: 'Uma calculadora simples feita com React e hooks.',
    description: 'Este projeto implementa as quatro operações básicas, teclas de atalho e tratamento de edge cases. Foco em componentização, estado e testes manuais.',
    tech: ['React', 'Vite', 'CSS'],
    cover: placeholder,
    repo: '',
    demo: ''
  },
  {
    slug: 'landing-page-responsiva',
    title: 'Landing Page Responsiva',
    excerpt: 'Página institucional otimizada para SEO e acessibilidade.',
    description: 'Landing page com grid responsivo, semântica HTML, metadados, imagens com alt e microinterações ao passar o mouse.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    cover: placeholder2,
    repo: '',
    demo: ''
  },
  {
    slug: 'todo-list-localstorage',
    title: 'To-Do List com LocalStorage',
    excerpt: 'Aplicação para gerenciar tarefas com persistência local.',
    description: 'CRUD de tarefas, filtro por status, e armazenamento no LocalStorage para persistir os dados.',
    tech: ['React', 'LocalStorage', 'Tailwind'],
    cover: placeholder3,
    repo: '',
    demo: ''
  }
]

export default projects
