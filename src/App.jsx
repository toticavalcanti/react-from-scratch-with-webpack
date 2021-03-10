import React from 'react';

const listCustomers = [
  {
    id: 1,
    name: 'Toti Cavalcanti',
    skills: ['React', 'Node', 'Python', 'Django']
  },
  {
    id: 2,
    name: 'Walter de Lucca Junior',
    skills: ['C', 'C++', 'React', 'Angular']
  },
  {
    id: 3,
    name: 'Carlos Augusto de Souza',
    skills: ['Webpack', 'Java', 'React Native', 'Angular']
  },
  {
    id: 14,
    name: 'Elisabeth Gonçalves',
    skills: ['R', 'elixir', 'React', 'Angular']
  },

]

const App = () => {

  const renderCustomers = (customer) => {

    return (
      <div key={`customer-${customer.id}`}>
        <li>{ customer.name }</li>
        {customer.skills.map(renderSkills)}
      </div>
    )
  }

  const renderSkills = (skill, index) => {
    return (
      <div style={{paddingLeft: '30px'}}>
        <li key={`skill-${index}`}>{ skill }</li>
      </div>

    )
  }

  return (
    <div>
      <p>Código Fluente</p>
      <p>Seja bem-vindo</p>
      <div>{listCustomers.map(renderCustomers)}</div>
    </div>
  );
} ;

export default App;