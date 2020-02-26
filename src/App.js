import React, { useState } from 'react';
import './App.css';
import Header from './Sections/Header';
import Card from './Components/Card';
import Footer from './Sections/Footer';
import Inputs from './Components/Inputs';

function App() {
  const [rutines, setRutines] = useState([
    {
      days:"lunes",
      exercise:[
        {
          name:"abs",
          repeticiones:"2x20"
        }
      ]
    }
  ]);    //imprimir en una card
  const [days, setDays] = useState("");
  const [repeticiones, setRepeticiones] =useState("");

  const [acts, setActs ] = useState([]);
  const [act1, setAct1] = useState("");
  const [act2, setAct2] = useState("");
  const [act3, setAct3] = useState("");
  const [act4, setAct4] = useState("");

  const addExercise = () =>{
    const clon = [...acts];
    clon.push({
      act1,
      act2,
      act3,
      act4
    })
    setActs(clon)
  }

  return (
    <div>
      <Header></Header>
      <Card></Card>
      <Inputs
      setAct1={setAct1}
      setAct2={setAct2}
      setAct3={setAct3}
      setAct4={setAct4}
      setRepeticiones={setRepeticiones}
      ></Inputs>
      <Footer></Footer>
    </div>
  );
}

export default App;