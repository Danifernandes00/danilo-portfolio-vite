import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-200 dark:border-gray-800">
      <div className="container-max py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Danilo Fernandes — Todos os direitos reservados.</p>
        <div className="flex gap-4" aria-label="Ícones sociais">
          <a className="hover:opacity-80" href="https://github.com/Danifernandes00" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub size={22} />
          </a>
          <a className="hover:opacity-80" href="https://www.linkedin.com/in/danilo-dos-santos-fernandes-4a08a9300/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  )
}
