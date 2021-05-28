import React from 'react';
import './card.scss';

function Card(props) {
    return(
        <div className="card">
            {props}
        </div>
    );
};

export default Card;
