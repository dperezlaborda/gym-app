import React,{ useState } from 'react';

const AddRepe = () =>{
    const [repe, setRepe] = useState(0);
    const addNumber = event =>{
        setRepe(repe +5);
    }
    return(
        <div>
            <button onClick ={addNumber}>+</button>
            <span>{repe}</span>
        </div>
    );
}

export default AddRepe;