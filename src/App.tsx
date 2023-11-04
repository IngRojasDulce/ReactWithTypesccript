import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [number, setNumber] = useState(5) // aqui inicia munero
  const changeNumber = ()=> {
    setNumber ("w")// no me deja asignar otro valor que no sea numero
  }
  return (
    <div className="App">
      <button></button>
    </div>
  );
}

export default App;
