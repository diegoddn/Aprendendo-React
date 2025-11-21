import CardProduto from "./components/CardProduto";
import styled from "style-components";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

function App() {
  return (
    <MainContainer>
      <CardProduto
        produtoCadastrado={"Alexa"}
        preco={"300"}
        descricao={"Tudo a um passo de um comando de voz"}
      />
      <CardProduto
        produtoCadastrado={"Pc Gamer"}
        preco={"3000,00"}
        descricao={"Pc rápido para jogar, trabalhar e estudar"}
      />
      <CardProduto
        produtoCadastrado={"Mousepad"}
        preco={"10"}
        descricao={"Mais agilidade no seu dia a dia"}
      />
    </MainContainer>
  );
}

export default App;
