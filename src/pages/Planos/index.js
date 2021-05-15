import React, { useContext } from 'react';

import { AuthContext } from '../../providers/auth';

import { HeaderMenu } from '../../components/HeaderMenu/';
import { Cadastro } from '../../components/Cadastro/';
import { LeftMenu } from '../../components/LeftMenu/';
import { Footer } from '../../components/Footer/'
import { Login } from '../../components/Login/';


import './planos.css';


const Planos = () => {

    function handleToTop() {
        window.scrollTo(0, 0)
    }

    const { isLoginActive, isCadastroActive } = useContext(AuthContext);


    return (
        <div className="container-home" onLoad={handleToTop} >
            <HeaderMenu />
            <LeftMenu />
            {/* <main>
                <div class="container-branco">
                    <h1>Selecione Um Plano Para Pagamento</h1>
                    <div class="container-geralDiv">
                        <div class="blocktitle">
                            <div class="titulo-planos"><h2>Diario</h2><p>R$ 200,00</p></div>
                            <div class="titulo-planos"><h2>Semanal</h2><p>R$ 1.150,00</p></div>
                            <div class="titulo-planos"><h2>Mensal</h2><p>R$ 4.200,00</p></div>
                        </div>
                        <div class="blocktitle">
                            <div class="titulo-planos"><h2>Semestre</h2><p>R$ 24.000,00</p></div>
                            <div class="titulo-planos"><h2>Anual</h2><p>R$ 45.000,00</p></div>
                        </div>
                    </div>
                    <div className="about-btn-rent">
                        <button className="btn-back">voltar</button>
                        <button className="btn-back-rent">Alugar veículo</button>
                    </div>
                </div>
            </main>
            {isLoginActive ? <Login /> : null}
            {isCadastroActive ? <Cadastro /> : null} */}
            <div className="container-plan">
                <div className="listplan">
                    <div className="plan">
                        <div className="plan-item">
                            <div className="plain-item-price">
                                <h1>R$ 300,00</h1>
                            </div>
                            <h1 className="title-card-plan">Diário</h1>
                            <p className="p-plan">Precisa de um aluguel por um dia, esse plano é ideal para você</p>
                            <button className="btn" type="button">Alugar</button>
                        </div>
                    </div>
                    <div className="plan">
                        <div className="plan-item">
                            <div className="plain-item-price">
                                <h1>R$ 300,00</h1>
                            </div>
                            <h1 className="title-card-plan">Diário</h1>
                            <p className="p-plan">Precisa de um aluguel por um dia, esse plano é ideal para você</p>
                            <button className="btn" type="button">Alugar</button>
                        </div>
                    </div>
                    <div className="plan">
                        <div className="plan-item">
                        <div className="plain-item-price">
                                <h1>R$ 300,00</h1>
                            </div>
                            <h1 className="title-card-plan">Diário</h1>
                            <p className="p-plan">Precisa de um aluguel por um dia, esse plano é ideal para você</p>
                            <button className="btn" type="button">Alugar</button>
                        </div>
                    </div>
                </div>

                <div className="listplan">
                    <div className="plan">
                        <div className="plan-item">
                            <div className="plain-item-price">
                                <h1>R$ 300,00</h1>
                            </div>
                            <h1 className="title-card-plan">Diário</h1>
                            <p className="p-plan">Precisa de um aluguel por um dia, esse plano é ideal para você</p>
                            <button className="btn" type="button">Alugar</button>
                        </div>
                    </div>
                    <div className="plan">
                        <div className="plan-item">
                            <div className="plain-item-price">
                                <h1>R$ 300,00</h1>
                            </div>
                            <h1 className="title-card-plan">Diário</h1>
                            <p className="p-plan">Precisa de um aluguel por um dia, esse plano é ideal para você</p>
                            <button className="btn" type="button">Alugar</button>
                        </div>
                    </div>
                </div>
            </div>



            <Footer />
        </div>)
}

export { Planos };