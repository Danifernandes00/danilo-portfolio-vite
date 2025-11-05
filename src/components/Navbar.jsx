import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'
import { useEffect } from 'react'

export default function Navbar() {
  
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') document.documentElement.classList.add('dark')
  }, [])

  const navClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 ${isActive ? 'underline underline-offset-4' : ''}`

  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <div className="container-max flex items-center justify-between h-16">
        <Link to="/" className="font-extrabold tracking-tight text-lg" aria-label="Ir para a Home">
          Danilo <span className="">Fernandes</span>
        </Link>
        <nav aria-label="Navegação principal" className="flex items-center gap-1">
          <NavLink to="/" className={navClasses}>Home</NavLink>
          <NavLink to="/projetos" className={navClasses}>Projetos</NavLink>
          <NavLink to="/sobre" className={navClasses}>Sobre</NavLink>
          <NavLink to="/contato" className={navClasses}>Contato</NavLink>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
