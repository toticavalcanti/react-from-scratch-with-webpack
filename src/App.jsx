import React from 'react';

const buttonA = <button>Histórico de Clientes</button>
const buttonB =  <button>Cadastrar Cliente</button>

const hasCustomer = true;

const App = () => {

  const renderShowHistory = (
      <div>
        Clique no botão abaixo para visualizar o histórico de clientes
        <br />
        {buttonA}
      </div>
      ) 

  const renderAddCustomer = (
      <div>
        Clique abaixo para cadastrar o cliente
        <br />
        {buttonB}
      </div>
    )

  const customer = 'Toti Cavalcanti'

  const showCustomer = () => {
    if(!hasCustomer) return null;
    return(
      <div>
        <h1>
          Nome do cliente: {customer}
        </h1>
      </div>
    )
  }

  return (
    <div>
      <p>Código Fluente</p>
      <p>Seja bem-vindo</p>
      { hasCustomer ? renderShowHistory : renderAddCustomer}
      <div>
        {showCustomer()}
      </div>
    </div>
  );
};

export default App;