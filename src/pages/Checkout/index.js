import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../providers/auth';
import { PaymentContext } from '../../providers/payment';

import { Link, useHistory } from 'react-router-dom';

import { HeaderMenu } from '../../components/HeaderMenu/';
import { Cadastro } from '../../components/Cadastro/';
import { LeftMenu } from '../../components/LeftMenu/';
import { Footer } from '../../components/Footer/'
import { Login } from '../../components/Login/';
import { FaCar } from 'react-icons/fa';
import { FaAdjust } from 'react-icons/fa';
import { FaMoneyCheck } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';

import './checkout.css';
import { Loading } from '../../components/Loading';

const Checkout = () => {

    const { isLoginActive, isCadastroActive } = useContext(AuthContext);
    const { plan, aboutCar, creditCard } = useContext(PaymentContext);
    const [isLoading, setIsLoading ] = useState(false);
    const history = useHistory();

    async function handleConfirmPaymnent() {
        let hasResponse = true;

        const user = JSON.parse(localStorage.getItem('user'));
        setIsLoading(true);
        const response = await fetch('https://e-spark-back.herokuapp.com/userscars', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({
                user_id: user.id,
	            car_id: aboutCar.id
            })
        }).catch(e => {
            hasResponse = false;
        })

        if ( hasResponse === false) {
            return alert('Erro ao conectar com o banco de dados (status 500)');
        } 

        const result = await response.json();
        
        if (result?.status === true) {
            return history.push('/payment');
        } else {
            alert('Ocorreu um erro interno');
        }
    }

    return (
        <div className="container-home">
            {isLoading && <Loading />} 
            <HeaderMenu />
            <LeftMenu />

            <main>

                <div className="container-checkout">
                    <h1> Checkout </h1>
                    <div className="item">
                        <h3>
                            Veículo Selecionado
                        </h3>
                        <Link to="/" className="linkalter">Alterar</Link>
                        <div className="detalhe">
                            <div>
                                <label className="detalhe-interno"><FaCar color="#fff" />
                                    <p>{aboutCar?.title ?? "Chevrolet Bolt"}</p>
                                </label>
                            </div>
                            <div className="segundoItem">
                                <label className="detalhe-interno"><FaAdjust color="#fff" />
                                    <p>{aboutCar?.brand ?? "Vermelho Glory"}</p>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <h3>
                            Plano Escolhido
                        </h3>
                        <div className="detalhe">
                            <div>
                                <label className="detalhe-interno plan">
                                    <p><FaCalendarAlt color="#fff" /> {plan?.title ?? 'Diário'}</p>
                                    <p><FaDollarSign color="#fff" />  Valor: {plan?.price ?? 'R$ 300,00'}</p>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <h3>
                            Método de Pagamento
                        </h3>
                        <Link to="#" className="linkalter">Alterar</Link>
                        <div className="detalhe">
                            <div>
                                <label className="detalhe-interno plan">
                                    <p><FaMoneyCheck color="#fff" /> Cartão de crédito: {creditCard ?? "**** **** **** 8745"}</p>
                                </label>
                            </div>
                        </div>
                    </div>
                    <h1 className="optionOut"> Opções de Retirada </h1>
                    <div className="filial">
                        <div>

                            <div className="item">
                                <h3>Filial 1</h3>
                                <div className="detalhe">
                                    <div>
                                        <label className="detalhe-interno"><FaHome color="#fff" />
                                            <div>
                                                <p>Av. Sebastião Antonio Ribeiro, 570,</p><input type="radio" value="Male" name="gender" /><br></br>
                                                <p className="segundaLinha">Maria José, Vespasiano - MG</p>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <h3>Filial 2</h3>
                            <div className="detalhe">
                                <div>
                                    <label className="detalhe-interno"><FaHome color="#fff" />
                                        <div>
                                            <p>Av. Sebastião Antonio Ribeiro, 570,</p><input type="radio" value="Male" name="gender" /><br></br>
                                            <p className="segundaLinha">Maria José, Vespasiano - MG</p>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <h3>Filial 3</h3>
                            <div className="detalhe">
                                <div>
                                    <label className="detalhe-interno"><FaHome color="#fff" />
                                        <div>
                                            <p>Av. Sebastião Antonio Ribeiro, 570,</p><input type="radio" value="Male" name="gender" /><br></br>
                                            <p className="segundaLinha">Maria José, Vespasiano - MG</p>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="checkout-container-botoes">
                        <Link to="/"><button>Inicio</button></Link>
                        <Link><button onClick={handleConfirmPaymnent}>Confirmar pagamento</button></Link>
                    </div>
                </div>
            </main>
            {isLoginActive ? <Login /> : null}
            {isCadastroActive ? <Cadastro /> : null}
            <Footer />
        </div>
    );
}

export { Checkout };