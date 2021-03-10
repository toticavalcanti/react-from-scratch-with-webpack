import React from 'react';

const buttonA = <button>Primeiro Botão</button>
const buttonB =  <button>Segundo Botão</button>

const App = () => {
  return (
    <div>
      <p>Código Fluente</p>
      <p>Seja bem-vindo</p>
      {buttonA}
      {buttonB}
    </div>
  );
};

export default App;