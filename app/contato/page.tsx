import emailjs from "emailjs-com"

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  emailjs.sendForm(
    "service_liu5ypb",
    "template_clzkcam",
    e.target as HTMLFormElement,
    "Y03uX5fWkRa6V6cnZ"
  ).then(
    (result) => {
      alert("E-mail enviado com sucesso!");
    },
    (error) => {
      alert("Erro ao enviar e-mail.");
    }
  );
};


export default function Contato() {
    return (
      <main>
        <h1>Entre em contato</h1>
        <p>Preencha o formulário abaixo:</p>

        <form onSubmit={sendEmail}>
          <label className="block text-gray-700 font-medium mb-2">Nome</label>
          <input type="text" placeholder="Seu Nome"/>

          <label className="block text-gray-700 font-medium mb-2">E-mail</label>
          <input type="text" placeholder="seu@email.com"/>

          <label className="block text-gray-700 font-medium mb-2">Mensagem</label>
          <textarea className="w-full p-2 border rounded-md mb-4" placeholder="Sua Mensagem"></textarea>

          <button type="submit" className="w-full bg-emerald-600 text-white p-2 rounded-md hover:bg-emerald-700 transition">
            Enviar
          </button>

        </form>
      </main>
    );
  }