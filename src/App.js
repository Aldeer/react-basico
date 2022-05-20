import React from "react";
import Saludo from './components/Saludo'
import Contador from "./components/Contador";
import Lista from "./components/Lista";
import Formulario from "./components/Formularios";

function App() {
  return (
    <div>
      <Saludo/>
      <Contador/>
      <Lista/>
      <Formulario/>
    </div>
  );
}

export default App;
