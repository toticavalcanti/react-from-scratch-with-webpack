import React from 'react';

const App = () => {
  
  const name = "Código Fluente";

  const handleChange = (e) => {
    const { value } = e.target
    console.log(value)
  }
  
  const showEvent = (e) => {
    alert('Evento clicado!')
    console.log(e)
    name
  }
  
  const Button = <button onClick={showEvent}>Mostrar Evento</button>
  
  return(
      <div>
        <p>Código Fluente</p>
        <p>Bem-vindo</p>
        <input onChange={handleChange} />
        {Button}
      </div>
    )
  }
export default App;