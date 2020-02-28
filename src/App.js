import React, { useState } from 'react';
import './App.css';
import Header from './Sections/Header';
import CardDay from './Components/CardDay';
import Footer from './Sections/Footer';
import CardInputs from './Components/CardInputs';

function App() {
  const [acts, setActs ] = useState([]);
  const [act1, setAct1] = useState("");
  const [act2, setAct2] = useState("");
  const [act3, setAct3] = useState("");
  const [act4, setAct4] = useState("");
  const [rutines, setRutines] = useState([
    {
      day:"lunes",
      exercise:[
        {
          name:"",
          repeticiones:""
        }
      ]
    }
  ]);    //imprimir en una card
  


  return (
    <div>
      <Header></Header>
      <CardInputs
        setAct1={setAct1}
        setAct2={setAct2}
        setAct3={setAct3}
        setAct4={setAct4}
        setRepeticiones={setRepeticiones}
      >
      </CardInputs>
      <button onClick={addExercise}>Guardar</button>
        {rutines.map ( rutine =>{
          return(
            <CardDay day={rutine.day} exercise={rutine.exercise}></CardDay>
          )
        })}
      <Footer></Footer>
    </div>
  );
}

export default App;