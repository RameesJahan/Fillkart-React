import React from 'react';
import './Card.css';

function Card({bg , sm, topic, highlight, product}) {
  return (
    <div style={{ backgroundImage: `url(${bg})`}} className={sm?"card sm":"card"}>
        <span className="topic">{topic}</span>
        <h1 className="highlight">{highlight}</h1>
        <h2 className="name">{product}</h2>
    </div>
  )
}

export default Card;