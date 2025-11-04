export default function SearchBar({ value, onChange }) {
  return (
    <label className="block mb-4">
      <span className="sr-only">Buscar projetos</span>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar projetos por nome ou tecnologia..."
        className="w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-2"
      />
    </label>
  )
}
