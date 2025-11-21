import { useState } from "react";

function App() {
  const [valor, setValor] = useState(0);

  const incrementarNumero = () => {
    setValor(valor + 1);
  };
  const decrementarNumero = () => {
    setValor(valor - 1);
  };

  return (
    <div>
      <p>O numero é {valor}</p>
      <button onClick={incrementarNumero}>Incrementar</button>
      <button onClick={decrementarNumero}>Decrementar</button>
    </div>
  );
}

export default App;
