import { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";

export default function Projects() {
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container-max mx-auto px-4">
      <h1 className="text-2xl font-semibold mt-6">Projetos</h1>
      
      <input
        type="text"
        placeholder="Pesquisar projetos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 mt-4 mb-6 border rounded-lg text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((p) => (
            <article
              key={p.slug}
              className="card border rounded-lg p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-72 object-cover rounded"
              />

              <h3 className="text-lg font-semibold mt-2 text-gray-900 dark:text-gray-100">
                {p.title}
              </h3>

              <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">
                {p.excerpt}
              </p>

              <Link
                className="inline-block mt-3 text-blue-600 dark:text-blue-400 underline"
                to={`/projetos/${p.slug}`}
              >
                Ver detalhes
              </Link>
            </article>
          ))
        ) : (
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Nenhum projeto encontrado.
          </p>
        )}
      </div>
    </div>
  );
}