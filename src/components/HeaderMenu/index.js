import React, { useRef, useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../providers/auth';

import { Logout } from '../Logout/index';
import './headermenu.css';

import LogoIcon from '../../images/logo.png';
import ContatoIcon from '../../images/contato.svg';
import CompanhiaIcon from '../../images/companhia.svg';
import UserIcon from '../../images/user.svg';


const HeaderMenu = () => {
    const switchClick = useRef(null);
    const [hamburguerClick, setHamburguerClick] = useState(false);
    const [imageProfile] = useState(localStorage.getItem('userImage'));
    const [userStorage, setUserStorage] = useState(JSON.parse(localStorage.getItem('user')));
    const { setIsLoginActive, isCadastroActive, setIsCadastroActive, setUser } = useContext(AuthContext);
    const history = useHistory();

    function setColorTheme(varName, yourColor) {
        document.documentElement.style.setProperty(varName, yourColor);
    }

    function lightTheme() {
        const colors = [
            ["--background-color-menu", "#5f4aa1"],
            ["--background-color-menu-hover", "#f1f3f5"],
            ["--background-color-home", "#f1f3f5"],
            ["--color-search-bar", "#ffffff"],
            ["--text-title-header", "#fff"],
            ["--text-color", "#345"],
            ["--background-login", "#f1f3f5"],
            ["--background-item-card", "#fff"],
            ["--background-item-card-title-premium", "#5f4aa1"],
            ["--background-item-card-title-premium-hover", "#f8f9fa"],
            ["--background-item-card-title-default-hover", "#1e1e1"],
            ["--background-item-card-title-default", "#5f4aa1"],
            ["--text-link-color", "#5f4aa1"],
        ]

        colors.map((item, index) => {
            return setColorTheme(item[0], item[1]);
        })
    }

    function darkTheme() {
        const colors = [
            ["--background-color-menu", "#6F48C9"],
            ["--background-color-menu-hover", "#00393f"],
            ["--background-color-home", "#2f3136"],
            ["--text-title-header", "#fff"],
            ["--color-search-bar", "#ffffff"],
            ["--text-color", "#E6E8EB"],
            ["--background-login", "#E6E8EB"],
            ["--background-item-card", "#494D4B"],
            ["--background-item-card-title-premium", "#6F48C9"],
            ["--background-item-card-title-premium-hover", "#1e1e1e"],
            ["--background-item-card-title-default-hover", "#1e1e1e"],
            ["--background-item-card-title-default", "#9164FA"],
            ["--text-link-color", "#5f4aa1"],
        ]

        colors.map((item, index) => {
            return setColorTheme(item[0], item[1]);
        })
    }

    function handleClickLogin() {
        setHamburguerClick(false)
        setIsLoginActive(true);
    }

    function handleClickUser() {
        setHamburguerClick(false);
        startScroll();
        history.push('/usuario')
    }

    function handleClickCreateAccount() {
        setHamburguerClick(false);
        setIsCadastroActive(true);
        console.log(isCadastroActive);
    }

    function handleClickLogout() {
        setHamburguerClick(false);
        setUser(null);
        localStorage.clear();
        history.push('/');
    }

    function handleChangerTheme() {
        if (switchClick.current.checked) {
            lightTheme();
        } else {
            darkTheme();
        }
    }

    function stopScroll() {
        setHamburguerClick(true);
        window.onscroll = function () {
            window.scrollTo(0, 0);
        }
    }

    function startScroll() {
        setHamburguerClick(false);
        window.onscroll = true;
    }

    function handleHamburguerClick() {
        hamburguerClick ?
            startScroll()
            :
            stopScroll();

    }

    useEffect(() => {
        setUserStorage(JSON.parse(localStorage.getItem('user')));
    }, [hamburguerClick])


    return (
        <>
            <nav className="container-header-menu">
                <ul className="container-ul-header-menu">
                    <li className="ul-li-header-menu">
                        <Link to="/">
                            <img src={LogoIcon} alt="logo" />
                        </Link>
                    </li>
                    <li className="ul-li-header-menu fullscreen">
                        <ul className="ul-item">
                            <li className="li-item">
                                <img src={ContatoIcon} alt="" />
                                <p className="header-p"><Link to="/contact">Entre em contato</Link></p>
                            </li>
                            <li className="li-item">
                                <img src={CompanhiaIcon} alt="" />
                                <p className="header-p"><Link to="/about">Quem somos</Link></p>
                            </li>
                            <li className="li-item">
                                <label className="switch">
                                    <input type="checkbox" ref={switchClick} onClick={handleChangerTheme} />
                                    <span className="slider round"></span>
                                </label>
                            </li>
                            <li className="li-item li-item-account">
                                <Logout />
                            </li>
                        </ul>
                    </li>
                    <li className="ul-li-header-menu-hamburgue" onClick={handleHamburguerClick}>
                        <ul className="ul-item-hamburgue">
                            <li className="li-item menu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            {
                hamburguerClick ?
                    <li className="ul-li-header-menu responsive">
                        <ul className="ul-item responsive">
                            {userStorage ?
                                <li className="li-item profile">
                                    <div className="profilemain">
                                        <p className="header-p user">{userStorage?.first_name}</p>
                                        <img className="imgProfile" src={imageProfile ?? UserIcon} alt="" />
                                    </div>

                                    <p className="showprofile" onClick={handleClickUser}>ver perfil</p>
                                </li>
                                :
                                <>
                                    <ul className="li-item profile">
                                        <li className="li-item li-item-account" onClick={handleClickLogin}>
                                            <p className="header-p">Entrar na conta</p>
                                        </li>
                                        <li className="li-item li-item-account" onClick={handleClickCreateAccount}>
                                            <p className="header-p">Criar Conta</p>
                                        </li>
                                    </ul>

                                </>
                            }
                            <li className="li-item firtitem">
                                <p className="header-p">Entre em contato</p>
                                <img src={ContatoIcon} alt="" />
                            </li>
                            <li className="li-item">

                                <p className="header-p">Quem somos</p>
                                <img src={CompanhiaIcon} alt="" />
                            </li>
                            <li className="li-item">
                                <p className="header-p">Alterar Thema</p>
                                <label className="switch">
                                    <input type="checkbox" ref={switchClick} onClick={handleChangerTheme} />
                                    <span className="slider round"></span>
                                </label>
                            </li>


                            {userStorage &&
                                <li className="li-item li-item-account logout" onClick={handleClickLogout}>
                                    <p>Sair da conta</p>
                                </li>
                            }


                        </ul>
                    </li> : null
            }
        </>
    )
}

export { HeaderMenu };