import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="mb-4">Página não encontrada.</p>
      <Link to="/" className="underline">Voltar</Link>
    </section>
  )
}
