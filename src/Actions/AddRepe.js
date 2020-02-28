import React,{ useState } from 'react';

const AddRepe = () =>{
    const [repe, setRepe] = useState(0);
    const addNumber = event =>{
        setRepe(repe +1);
    }
    return(
        <div>
            <button onClick ={addNumber}>+</button>
            <span>{repe} x 15</span>
        </div>
    );
}

export default AddRepe;