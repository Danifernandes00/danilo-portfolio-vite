import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <article className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:shadow-sm transition">
      <img src={project.cover} alt={project.title} className="w-full h-40 object-cover rounded-md mb-3" />
      <h3 className="text-lg font-bold mb-1">{project.title}</h3>
      <p className="text-sm mb-2">{project.excerpt}</p>
      <div className="flex flex-wrap gap-2 mb-3" aria-label="Tecnologias">
        {project.tech.map((t) => (
          <span key={t} className="text-xs border px-2 py-1 rounded">{t}</span>
        ))}
      </div>
      <Link to={`/projetos/${project.slug}`} className="inline-block px-3 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-800" aria-label={`Ver detalhes de ${project.title}`}>
        Ver detalhes
      </Link>
    </article>
  )
}
