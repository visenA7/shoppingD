import React from 'react';
import style from '../UI/card.module.css';

function Card(props) {
  return (
    <div className={`${style.card} ${props.className}`}>{props.children}</div>
  );
}

export default Card;
