import React from 'react';
import './Card.scss';
import lunes from './lunes.jpeg'

const Card = () =>{
    return(
        <div className="back">
                <header className="card-header">
                    <div className="card-logo"></div>
                    <span className="card-circle"></span>
                    <h1 className="card-title">aerobico</h1>
                </header>
                <body>
                </body>
                <footer>
                </footer>
        </div>
    )
}

export default Card; 