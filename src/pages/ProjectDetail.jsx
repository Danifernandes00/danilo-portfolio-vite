import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="container max-w-5xl mx-auto px-4 py-10">
        <p className="text-gray-800 dark:text-gray-200">Projeto não encontrado.</p>
        <Link
          to="/projetos"
          className="text-blue-600 dark:text-blue-400 underline mt-4 inline-block"
        >
          Voltar
        </Link>
      </div>
    );
  }

  return (
    <div className="container max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
        {project.title}
      </h1>

      {/* layout responsivo: imagem à esquerda, texto à direita (em telas md+) */}
      <div className="mt-5 md:flex md:items-start md:gap-8">
        {/* IMAGEM – tamanho consistente e maior */}
        <div className="w-full md:w-[420px]">
          <div className="rounded overflow-hidden bg-gray-100 dark:bg-gray-800 shadow">
            <img
              src={project.img}
              alt={project.title}
              className="w-full aspect-video md:aspect-[4/3] object-cover block"
            />
          </div>
        </div>

        {/* CONTEÚDO */}
        <div className="mt-4 md:mt-0 flex-1">
          <p className="text-gray-700 dark:text-gray-300">
            {project.description}
          </p>

          {project.techs?.length > 0 && (
            <ul className="chips flex gap-2 flex-wrap mt-4">
              {project.techs.map((t) => (
                <li
                  key={t}
                  className="chip border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 px-3 py-1 text-sm rounded-full"
                >
                  {t}
                </li>
              ))}
            </ul>
          )}

          <Link
            to="/projetos"
            className="text-blue-600 dark:text-blue-400 underline mt-6 inline-block"
          >
            Voltar
          </Link>
        </div>
      </div>
    </div>
  );
}