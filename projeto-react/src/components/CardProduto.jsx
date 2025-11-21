import { MainDescription, MainPrice, MainTitle } from "../App";

const CardProduto = ({ produtoCadastrado, descricao, preco }) => {
  return (
    <div>
      <MainTitle>{produtoCadastrado}</MainTitle>
      <MainDescription>{descricao}</MainDescription>
      <MainPrice>R$ {preco}</MainPrice>
      <button>Comprar</button>
    </div>
  );
};

export default CardProduto;
