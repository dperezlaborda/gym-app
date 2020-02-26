import React from 'react';
import './Card.scss';

const Card = (props) =>{
    return(
        <div className="back blur">
            <header className="card-header">
                <div className="card-logo"></div>
                <h2 className="card-day">lunes</h2>
                <h1 className="card-title">gym app</h1>
                <span className="division"></span>
            </header>
            <body className="card-body">
            </body>
            <footer>
            </footer>
        </div>
    )
}

export default Card; 