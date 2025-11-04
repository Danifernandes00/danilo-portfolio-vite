import { useMemo, useState } from 'react'
import projects from '../data/projects.js'
import SearchBar from '../components/SearchBar.jsx'
import ProjectCard from '../components/ProjectCard.jsx'

export default function Projects() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return projects
    return projects.filter(p => 
      p.title.toLowerCase().includes(q) ||
      p.tech.some(t => t.toLowerCase().includes(q))
    )
  }, [query])

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Projetos</h1>
      <SearchBar value={query} onChange={setQuery} />
      {filtered.length === 0 ? (
        <p role="status" aria-live="polite">Nenhum projeto localizado.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(p => <ProjectCard key={p.slug} project={p} />)}
        </div>
      )}
    </section>
  )
}
