import { useParams, Link } from 'react-router-dom'
import projects from '../data/projects.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return (
      <div>
        <p>Projeto não encontrado.</p>
        <Link to="/projetos" className="underline">Voltar</Link>
      </div>
    )
  }

  return (
    <article className="max-w-3xl">
      <img src={project.cover} alt={project.title} className="w-full h-64 object-cover rounded-md mb-4" />
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <p className="mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map(t => <span key={t} className="text-xs border px-2 py-1 rounded">{t}</span>)}
      </div>
      {project.repo && <a className="mr-3 underline" href={project.repo} target="_blank" rel="noreferrer">Repositório</a>}
      {project.demo && <a className="underline" href={project.demo} target="_blank" rel="noreferrer">Demo</a>}
      <div className="mt-6">
        <Link to="/projetos" className="px-3 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-800">← Voltar para projetos</Link>
      </div>
    </article>
  )
}
