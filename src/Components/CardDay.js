import React from 'react';
import './CardDay.scss';

const CardDay = ({day, exercise}) =>{
    return(
        <div className="back blur">
            <header className="card-header">
                <div className="card-logo"></div>
                <h2 className="card-day">{day}</h2>
                <h1 className="card-title">gym app</h1>
                <span className="division"></span>
                <span>
                    {exercise.map ( exer =>{
                        return(
                            <span>{exer.name} - {exer.repeticiones}</span>
                        )
                    })}
                </span>
            </header>
            <body className="card-body">
            </body>
            <footer>
            </footer>
        </div>
    )
}

export default CardDay; 