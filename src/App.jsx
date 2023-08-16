import { useState } from "react";
import Card from "./Card";
import './App.css';

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [nombre,setNombre]=useState("");
  const [color,setColor]=useState("");

const handleNombre = (e)=>{
    setNombre(e.target.value)
}
const handleColor = (e)=>{
    setColor(e.target.value)
}

const handleSubmit = (e)=>{
      e.preventDefault();
     
  
  }
  return (
    <div className="App">
      <h1>Elige un color</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Ingresa tu nombre" value={nombre} onChange={handleNombre} />
        </div>
        <div>
          <input type="text" placeholder="Ingresa tu color favorito" value={color} onChange={handleColor} />
        </div>

        <button type="submit">Enviar</button>        
    </form>
    <Card nombre={nombre} color={color} />
    </div>
  );
}

export default App;
