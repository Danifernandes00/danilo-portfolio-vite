import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      const isDark = saved === 'dark'
      setDark(isDark)
      document.documentElement.classList.toggle('dark', isDark)
    }
  }, [])

  function toggle() {
    const isDark = !dark
    setDark(isDark)
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }

  return (
    <button onClick={toggle} className="ml-2 px-3 py-2 rounded-md text-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800" aria-pressed={dark} aria-label="Alternar modo escuro">
      {dark ? '🌙' : '☀️'}
    </button>
  )
}
