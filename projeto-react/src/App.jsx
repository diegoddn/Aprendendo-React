import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleNome = (event) => {
    setNome(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSenha = (event) => {
    setSenha(event.target.value);
  };

  function enviarInformacoes(event) {
    event.preventDefault();
    console.log(nome, email, senha);
  }

  return (
    <div>
      <form onSubmit={enviarInformacoes}>
        <label>Nome:</label>
        <input type="text" value={nome} onChange={handleNome} />

        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmail} />

        <label>Senha:</label>
        <input type="password" value={senha} onChange={handleSenha} />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
