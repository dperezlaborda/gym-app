import React, {useState} from 'react';
import './Inputs.scss'
import AddTime from '../Actions/AddTime';
import AddRepe from '../Actions/AddRepe';

const Inputs = ({setAct1, setAct2, setAct3, setAct4}) =>{
    return(
        <div className="input-container">
            <table>
                <thead>
                    <tbody>
                        <th>Aerobica</th>
                            <tr>
                                <td>Trotar
                                    <input onChange={e => setAct1(e.target.value)} type="checkbox" className="box"/>
                                </td>
                                <td>Steps
                                    <input onChange={e => setAct2(e.target.value)}  type="checkbox" className="box"/>
                                </td>
                                <td>Tiempo
                                    <AddTime></AddTime>
                                </td>
                                <td>Cantidad
                                    <AddRepe></AddRepe>
                                </td>
                            </tr>
                        <th>Localizada</th>
                            <tr>
                                <td>
                                    <input onChange={e => setAct3(e.target.value)} type="checkbox" className="box"/>
                                </td>
                                <td>
                                    <input onChange={e => setAct4(e.target.value)} type="checkbox" className="box"/>
                                </td>
                                <td>Tiempo
                                    <AddTime></AddTime>
                                </td>
                                <td>Cantidad
                                    <AddRepe></AddRepe>
                                </td>
                            </tr>
                    </tbody>
                </thead>
            </table>
        </div>
    )
}

export default Inputs; 