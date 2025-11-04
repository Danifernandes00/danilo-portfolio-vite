import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
        Olá! Eu sou <span>Danilo Fernandes</span> 
      </h1>
      <p className="max-w-2xl text-lg">
        Estudante de <strong>Engenharia de Software</strong> na FIAP (São Paulo, SP). 
        Tenho interesse em desenvolvimento Front-end e busco aplicar meus conhecimentos de forma prática e estratégica, com 
        foco em resultados e trabalho em equipe.
      </p>
      <div className="flex gap-3">
        <Link to="/projetos" className="px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-800">Ver projetos</Link>
        <Link to="/contato" className="px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-800">Fale comigo</Link>
      </div>
    </section>
  )
}
