import React from 'react';

const buttonA = <button>Histórico de Clientes</button>
//const buttonB =  <button>Segundo Botão</button>

const hasCustomer = true;

const App = () => {
  return (
    <div>
      <p>Código Fluente</p>
      <p>Seja bem-vindo</p>
      { hasCustomer &&
        (
          <div>
            Clique no botão abaixo para visualizar o histórico de clientes
            <br />
            {buttonA}
          </div>
          )
      }
    </div>
  );
};

export default App;