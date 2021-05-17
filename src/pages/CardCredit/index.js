import React, { useContext, useState, useRef } from 'react';

import { HeaderMenu } from '../../components/HeaderMenu/';
import { Footer } from '../../components/Footer/';
import { PaymentContext } from '../../providers/payment';

import chipIcon from '../../images/chip.svg';

import './cardcredit.css';

const CardCredit = () => {
    const { user, setPlan, plan } = useContext(PaymentContext);
    const text = useRef(null);
    const [isNumber, setIsNumber] = useState(true);
    const [isNull, setIsNull] = useState(true);
    const [number, setNumber] = useState(Number());

    function isEmpty(value){
        value === '' ? setIsNull(true) : setIsNull(false);
    }

    function verifyIsNumber(numberInput) {
        const regex = /^[0-9.]+$/;
        const resultRegex = numberInput.match(regex);

        if (resultRegex === null) {
            setIsNumber(false);
            text.current.type = "reset";
            text.current.type = "text";
            text.current.value = number;
        } else {
            setNumber(numberInput)
            setIsNumber(true);
        }
    }
    
    function verifyInput(e) {
        isEmpty(e.target.value);
        verifyIsNumber(e.target.value);
    }

    return (
        <div className="cardcredit-container">
            <HeaderMenu />
            <div className="creditcard">
                <div className="card-credit-item">
                    <div className="card-item-header">
                        <div className="title-card">Cartão de crédito</div>
                        <div className="name-bank">E-Spark</div>
                    </div>
                    <img src={chipIcon} alt="" />
                    <p> Name: {user?.first_name ?? 'Alef Santos'}</p>
                    <input type="number" className="input-number-card"
                        placeholder="Digite o número do seu cartão"
                        ref={text}
                        onKeyPress={e => verifyInput(e)}
                        onChange={e => setPlan(e.target.value)} />
                    {isNumber ? null: <p className="validation-p" >Digite apenas números</p>}
                    <button className="button-confirm-card" onClick={() => alert(plan)} >Confirmar</button>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export { CardCredit };