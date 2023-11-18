import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [subs, setSubs] = useState([
    {
      nick: 'nombre',
      subMonths: 3,
      avatar : 'https://i.pravatar.cc/150?u=dapelu',
      description: 'Esto es una descripcion '
    },
    {
      nick: 'Dulce',
      subMonths: 8,
      avatar : 'https://i.pravatar.cc/150?u=dulce',

    }
    
  ]) // aqui inicia munero
  // const changeNumber = ()=> {
  //   setNumber ([])// no me deja asignar otro valor que no sea numero
  // }
  return (
    <div className="App">
      <h1> Dulce con TypeScript</h1>
      <ul>
        {subs.map(sub=>{
          return (
            <li key= {sub.nick}>
              <img src= {sub.avatar} alt={`Avatar for ${sub.nick}`}/>
              <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
              <p>{sub.description?.substring(0,100)}</p>
            </li>
          )
        })}
      </ul>
      
    </div>
  );
}

export default App;
