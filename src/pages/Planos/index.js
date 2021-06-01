import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { PaymentContext } from '../../providers/payment.js';

import { HeaderMenu } from '../../components/HeaderMenu/';
import { LeftMenu } from '../../components/LeftMenu/';
import { CardPlan } from '../../components/CardPlan/';
import { Footer } from '../../components/Footer/';

import './planos.css';

const Planos = () => {
    const { setPlan } = useContext(PaymentContext);
    const history = useHistory();

    function handleToTop() {
        window.scrollTo(0, 0)
    }

    function handleClickSelection(e){
        const planSelect = arrayPlan[e.target.id];
        setPlan(planSelect);

        history.push('/creditcard')
    }

    const arrayPlan = [
        {
            title: "Diário",
            price: "R$ 300,00",
            description: "Vai fazer uma visitinha? esse plano é ideal para você"
        },
        {
            title: "Semanal",
            price: "R$ 1.200,00",
            description: "Vai viajar e precisa passar mais tempo com o carro? esse plano é ideal para você"
        },
        {
            title: "Mensal",
            price: "R$ 2.900,00",
            description: "Está resolvendo algo mais demorado? esse plano é ideal para você"
        },
        {
            title: "Anual",
            price: "R$ 10.000,00",
            description: "Aproveite sua viagem, esse plano é ideal para você"
        },
    ]

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
                    { arrayPlan.map((item, key) => {
                        return <CardPlan
                                onClick={(e) => handleClickSelection(e)}
                                key={key}
                                id={key}
                                title={item.title}
                                price={item.price}
                                description={item.description}
                                />
                    })}
                </div>
            </div>
            <Footer />
        </div>)
}

export { Planos };