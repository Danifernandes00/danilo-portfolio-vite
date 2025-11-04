export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const data = {
      nome: form.get('nome'),
      email: form.get('email'),
      mensagem: form.get('mensagem'),
    }
    alert(`Dados enviados:\nNome: ${data.nome}\nEmail: ${data.email}\nMensagem: ${data.mensagem}`)
    e.currentTarget.reset()
  }

  return (
    <section className="max-w-xl">
      <h1 className="text-2xl font-bold mb-4">Contato</h1>
      <form onSubmit={handleSubmit} className="space-y-4" aria-label="Formulário de contato">
        <div>
          <label className="block mb-1" htmlFor="nome">Nome</label>
          <input className="w-full border rounded px-3 py-2" id="nome" name="nome" required />
        </div>
        <div>
          <label className="block mb-1" htmlFor="email">E-mail</label>
          <input type="email" className="w-full border rounded px-3 py-2" id="email" name="email" required />
        </div>
        <div>
          <label className="block mb-1" htmlFor="mensagem">Mensagem</label>
          <textarea className="w-full border rounded px-3 py-2" id="mensagem" name="mensagem" rows="5" required></textarea>
        </div>
        <button className="px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-800">Enviar</button>
      </form>
      <div className="mt-6 text-sm">
        <p><strong>E-mail:</strong> <a className="underline" href="mailto:danilofernandes200607@gmail.com">danilofernandes200607@gmail.com</a></p>
        <p><strong>Telefone:</strong> (11) 97435-5033</p>
        <p><strong>Local:</strong> São Paulo — SP</p>
      </div>
    </section>
  )
}
