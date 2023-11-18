import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';


const INITIAL_STATE=[
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

]

interface AppState{// recomendacion hacer como una interfaz y adentro poenr cada uno de los estados del componente
subs: Array<Sub>
newSubsNumber: number
}
// declaracion de interface para generalizar los tipos de variables ts
interface Sub{
  nick: string
  avatar: string
  subMonths: number
  description?: string
}
 




function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])// Estoy diciendo que es un array de sub especificando las variables declaradas en interface
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)
  
  useEffect(()=>
  {
    setSubs(INITIAL_STATE)
  },[]
)
    //
    
   // aqui inicia munero
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
