
import React from 'react';
import './Card.css';

const Card = ({ version, date, name, description, }) => {
  return (
    <div className="container">
    <div className="card" >
      <h2>{version}</h2>
      <p>{date}</p>
      <p>{name}</p>
      <ul>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button>Download</button>
    </div>
    </div>
    
  );
};

export default Card;
