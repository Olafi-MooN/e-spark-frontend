import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PaginaInicialIcone from '../../images/pagina-inicial-da-web.svg';
import CaminhaoIcone from '../../images/caminhao-de-reboque.svg';
import TelefoneIcone from '../../images/telefone-com-fio.svg';
import ShoppingListoIcone from '../../images/shopping-list.svg';
import CreditCardIcone from '../../images/credit-card.svg';
import PointerIcone from '../../images/pointer.svg';

import './leftmenu.css';

const LeftMenu = () => {
    const [leftMenu, setLeftMenu] = useState(false);

    function showLeftMenu() {
        window.scrollY >= 70 ? setLeftMenu(true) : setLeftMenu(false);
    }

    window.addEventListener('scroll', showLeftMenu);

    return (
        <div className={leftMenu ? "container-left-menu active" : "container-left-menu"}>
            <ul className="ul-left-menu">
                <li className="li-left-menu">
                    <Link to="/"><img src={PaginaInicialIcone} alt="home" title="Tela inicial" /></Link>
                </li>
                <li className="li-left-menu">
                    <img src={ShoppingListoIcone} alt="" />
                </li>
                <li className="li-left-menu">
                    <Link to="/usuario">
                        <img src={CreditCardIcone} alt="" title="Visualizar dados" />
                    </Link>
                </li>
                <li className="li-left-menu">
                    <Link to="/">
                        <img src={CaminhaoIcone} alt="" title="Visualizar historico" /></Link>
                </li>
                <li className="li-left-menu">
                    <Link to="/contatc">
                        <img src={TelefoneIcone} alt="" title="Entre em contato" />
                    </Link>
                </li>
                <li className="li-left-menu">
                    <Link to="filial">
                        <img src={PointerIcone} alt="" title="Veja as nossas filiais" />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export { LeftMenu };