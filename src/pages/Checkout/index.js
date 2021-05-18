import React, { useContext } from 'react';

import { AuthContext } from '../../providers/auth';
import { PaymentContext } from '../../providers/payment';

import { Link } from 'react-router-dom';

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

const Checkout = () => {

    const { isLoginActive, isCadastroActive } = useContext(AuthContext);
    const { plan, aboutCar, creditCard } = useContext(PaymentContext);

    return (
        <div className="container-home">
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
                        <Link to="/Payment"><button>Continuar</button></Link>
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