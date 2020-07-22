import React from 'react';
import './Card.css';

function Card(props) {
  const data = props.data;
  return (
    <main className="card-content">
        <div className="card-box">
           <div className="card-title"><h3>{data.title}</h3></div>
        </div>
    </main>
  );
}

export default Card;
