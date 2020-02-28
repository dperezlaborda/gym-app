import React, {useState} from 'react';
import './CardInputs.scss'
import AddTime from '../Actions/AddTime';
import AddRepe from '../Actions/AddRepe';

const CardInputs = ({setAct1, setAct2, setAct3, setAct4}) =>{
    const [exercises, setExercise] = useState([]);   //primero creo un estado de array

    const addExercise = (e) =>{
      const {name, value} = e.target;
      if(value){
        const clon = [...ejercicios];
        clon.push([{}])
      }
    }

    return(
        <div>
            <div className="container">
                <div className="left-container box">
                    <span>
                        <h2>Aerobico</h2>
                    </span>
                    <div className="left info-container">
                        <div>
                            Trotar
                            <input onChange={e => setAct1(e.target.value)} type="checkbox" className="box"/>
                        </div>
                        <div>
                            Steps
                            <input onChange={e => setAct2(e.target.value)}  type="checkbox" className="box"/>
                        </div>
                        <div>
                            <h3>Tiempo</h3>
                            <AddTime></AddTime>
                        </div>
                        <div>
                            <h3>Cantidad</h3>
                            <AddRepe></AddRepe>
                        </div>
                    </div>
                </div>
                <div className="right-container box">
                    <span>
                        <h2>Localizada</h2>
                    </span>
                    <div className="right info-container">
                        <div>
                            Abdominales
                            <input onChange={e => setAct3(e.target.value)} type="checkbox" className="box"/>
                        </div>
                        <div>
                            Sentadillas
                            <input onChange={e => setAct4(e.target.value)} type="checkbox" className="box"/>
                        </div>
                        <div>
                            <h3>Tiempo</h3>
                            <AddTime></AddTime>
                        </div>
                        <div>
                            <h3>Cantidad</h3>
                            <AddRepe></AddRepe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardInputs; 