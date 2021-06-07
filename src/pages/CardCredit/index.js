import React, { useContext, useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { HeaderMenu } from '../../components/HeaderMenu/';
import { Footer } from '../../components/Footer/';
import { PaymentContext } from '../../providers/payment';

import chipIcon from '../../images/chip.svg';

import './cardcredit.css';

const CardCredit = () => {
    const { setCreditCard } = useContext(PaymentContext);
    const inputRef = useRef(null);
    const history = useHistory();
    const [number, setNumber] = useState(0);
    const [numberTrue, setNumberTrue] = useState(0);
    const [isNumber, setIsNumber] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        var regex = /^[0-9.]+$/;

        if (number === '') {
            return '';
        }

        if (number?.key?.match(regex) !== null ?? null) {
            setNumberTrue(inputRef.current.value);
            setIsNumber(true);
        } else {
            inputRef.current.value = numberTrue;
            setIsNumber(false);
        }
    }, [number, inputRef, numberTrue]);

    function handleClickConfirm() {
        if (number !== 0 && inputRef.current.value !== '') {
            setCreditCard(inputRef.current.value);
            return history.push('/checkout');
        }
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
                    <div className="container-input-card">
                        <input
                            type="text"
                            className="input-number-card"
                            placeholder="Digite o número do seu cartão"
                            onKeyPress={(e) => setNumber(e)}
                            ref={inputRef}/>
                        {isNumber ? null : <p className="validation-p" >Digite apenas números</p>}
                    </div>

                    <button
                        className="button-confirm-card"
                        onClick={handleClickConfirm} >Confirmar</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export { CardCredit };