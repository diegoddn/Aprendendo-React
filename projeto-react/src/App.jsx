import CardProduto from "./components/CardProduto";
import styled from "styled-components";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const MainTitle = styled.h1`
  color: blue;
`;

export const MainDescription = styled.h2`
  color: red;
`;

export const MainPrice = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

function App() {
  return (
    <MainContainer>
      <CardProduto
        produtoCadastrado={"Alexa"}
        preco={"300,00"}
        descricao={"Tudo a um passo de um comando de voz"}
      />
      <CardProduto
        produtoCadastrado={"Pc Gamer"}
        preco={"3.000,00"}
        descricao={"Pc rápido para jogar, trabalhar e estudar"}
      />
      <CardProduto
        produtoCadastrado={"Mousepad"}
        preco={"10,00"}
        descricao={"Mais agilidade no seu dia a dia"}
      />
    </MainContainer>
  );
}

export default App;
