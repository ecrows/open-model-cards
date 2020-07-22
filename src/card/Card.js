import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <main className="card-content">
        <div className="card-box">
           <div className="card-title"><h3>{props.title}</h3></div>
        </div>
    </main>
  );
}

export default Card;
