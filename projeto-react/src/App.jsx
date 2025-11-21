import CardProduto from "./components/CardProduto";

function App() {
  return (
    <div>
      <CardProduto
        produtoCadastrado={"Alexa"}
        preco={"300"}
        descricao={"Tudo a um passo de um comando de voz"}
      />
      <CardProduto
        produtoCadastrado={"Alexa"}
        preco={"3000,00"}
        descricao={"Pc rápido para jogar, trabalhar e estudar"}
      />
      <CardProduto
        produtoCadastrado={"Mousepad"}
        preco={"10"}
        descricao={"Mais agilidade no seu dia a dia"}
      />
    </div>
  );
}

export default App;
