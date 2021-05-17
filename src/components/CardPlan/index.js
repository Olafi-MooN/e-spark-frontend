import React from 'react';

import './cardplan.css';

const CardPlan = ({title, price, description, id, onClick}) => {
    return (
        <div className="plan">
            <div className="plan-item">
                <div className="plain-item-price">
                    <h1>{ title }</h1>
                </div>
                <h1 className="title-card-plan">{ price }</h1>
                <p className="p-plan">{ description }</p>
                <button className="btn" type="button" id={id} onClick={onClick} >selecionar</button>
            </div>
        </div>
    )
}

export { CardPlan };