import React, { useContext } from 'react';

import { AuthContext } from '../../providers/auth';
import { ScrollCategoryContext } from '../../providers/scrollCategory';

import { ScrollCategory } from '../../components/ScrollCategory/';
import { HeaderMenu } from '../../components/HeaderMenu/';
import { SlideShow } from '../../components/SlideShow/';
import { Cadastro } from '../../components/Cadastro/';
import { LeftMenu } from '../../components/LeftMenu/';
import { CardCars } from '../../components/CardCars/';
import { Footer } from '../../components/Footer/'
import { Login } from '../../components/Login/';


import './home.css';


const Home = () => {

    const { isLoginActive, isCadastroActive } = useContext(AuthContext);
    const { nameCategoryActive } = useContext(ScrollCategoryContext);

    return (
        <div className="container-home">
            <HeaderMenu />
            <SlideShow />
            <LeftMenu />
            <h1 className="container-home-h1">
                Escolha uma categoria
            </h1>
            <ScrollCategory />
            <h1 className="container-home-h1 black">{nameCategoryActive}</h1>
            <main>
                <div className="container-cards-cars-home">
                    <CardCars
                        id="0"
                        title="Rimac C Two"
                        description="Uma breve descrição sobre o veiculo, todo carro deve ter uma descrição, Uma breve descrição sobre o veiculo, todo carro deve ter uma descrição"
                        typeCar="premium" />
                    <CardCars
                        id="1"
                        title="Rimac C Two"
                        description="Uma breve descrição sobre o veiculo, todo carro deve ter uma descrição"
                        typeCar="default" />
                    <CardCars
                        id="0"
                        title="Rimac C Two"
                        description="Uma breve descrição sobre o veiculo, todo carro deve ter uma descrição"
                        typeCar="premium" />
                    <CardCars
                        id="0"
                        title="Rimac C Two"
                        description="Uma breve descrição sobre o veiculo, todo carro deve ter uma descrição"
                        typeCar="premium" />
                    <CardCars
                        id="1"
                        title="Rimac C Two"
                        description="Uma breve descrição sobre o veiculo, todo carro deve ter uma descrição"
                        typeCar="default" />
                    <CardCars
                        id="0"
                        title="Rimac C Two"
                        description="Uma breve descrição sobre o veiculo, todo carro deve ter uma descrição"
                        typeCar="premium" />

                    <CardCars
                        id="0"
                        title="Rimac C Two"
                        description="Uma breve descrição sobre o veiculo, todo carro deve ter uma descrição"
                        typeCar="premium" />
                    <CardCars
                        id="1"
                        title="Rimac C Two"
                        description="Uma breve descrição sobre o veiculo, todo carro deve ter uma descrição"
                        typeCar="default" />
                    <CardCars
                        id="0"
                        title="Rimac C Two"
                        description="Uma breve descrição sobre o veiculo, todo carro deve ter uma descrição"
                        typeCar="premium" />
                </div>
            </main>
            {isLoginActive ? <Login /> : null}
            {isCadastroActive ? <Cadastro /> : null}
            <Footer />
        </div>
    );
}

export { Home };