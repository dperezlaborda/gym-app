import React,{ useState } from 'react';
import './AddTime.scss';

const AddTime = () =>{
    const [number, setCounter] = useState(0);
    const addNumber = event =>{
        setCounter(number +10);
    }
    return(
        <div className="margenes">
            <button onClick={addNumber}>+</button>
            <span>{number} Minutos</span>
        </div>
    );
}

export default AddTime;