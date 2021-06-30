import React, { useState, useContext } from 'react';

import { Login } from '../Login';
import { Input } from '../Input';
import { Alert } from '../Alert';

import { AuthContext } from '../../providers/auth';

import closeIcon from '../../images/close.svg';

import './cadastro.css';
import { Loading } from '../Loading';

const Cadastro = () => {
    const [first_name, setFirst_name] = useState();
    const [last_name, setLast_name] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [isAlert, setAlert] = useState();
    const [textAlert, setTextAlert] = useState('');
    const [isLoading, setIsloading] = useState(false);

    const { isCadastroActive, setIsCadastroActive, setIsLoginActive, setToken} = useContext(AuthContext);

    function handleCloseCadastro() {
        setIsCadastroActive(false);
    }

    function handleOpenLogin() {
        handleCloseCadastro();
        setIsLoginActive(true);
    }

    function handleCloseModaLogin() {
        setIsCadastroActive(false);
    }

    function showAlert(text, time) {
        setTextAlert(text);
        setIsloading(false);
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, time)
    }

    async function handleClickBtnRegister(e) {
        e.preventDefault();
        setIsloading(true)

        if (!first_name || !last_name || !email || !password) {
            return showAlert('Preencha todos os campos', 5000)
        }

        let hasResponse = true;

        const response = await fetch('https://e-spark-back.herokuapp.com/users', {
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
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: password
            })
        }).catch(e => {
            hasResponse = false;
        })

        if (hasResponse === false) {
            showAlert('Não foi possível se conectar com o servidor', 5000)
        }

        const responseToJson = await response.json();

        if (responseToJson.status === false) {
            showAlert(responseToJson.message, 5000)
        } else {
            localStorage.setItem('token', responseToJson.data);
            setToken(responseToJson.data);
            setIsCadastroActive(false);
            return
        }
    }

    return (
        <>
            {isCadastroActive ?
                <div className={"container-login"}>
                    {isLoading ? <Loading/> : null }
                    <div className="container-login-box">

                        <div className="container-login-top">
                            <h2>Cadastrar</h2>
                            <p className="close-login" ><img src={closeIcon} alt="close" onClick={handleCloseModaLogin} /></p>
                        </div>

                        <form onSubmit={handleClickBtnRegister} className="form-login">

                            <div className="input-login-container inline">
                                <Input
                                    titleInput="Primeiro nome"
                                    typeInput="text"
                                    placeholderInput="alef"
                                    onChange={(e) => setFirst_name(e.target.value)}
                                />
                                <Input
                                    titleInput="Segundo nome"
                                    typeInput="text"
                                    placeholderInput="master"
                                    onChange={(e) => setLast_name(e.target.value)}
                                />
                            </div>

                            <div className="input-login-container">
                                <Input
                                    titleInput="Digite o seu E-mail"
                                    typeInput="email"
                                    placeholderInput="alefmastertutor@gmail.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="input-login-container">
                                <Input
                                    titleInput="Digite uma senha"
                                    typeInput="password"
                                    placeholderInput="DAGADFDSA#!#$@123"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>


                            <div className="input-login-container">
                                <Input
                                    typeInput="submit"
                                    valueInput="Entrar"
                                />
                            </div>
                        </form>
                        <div className="not-account">
                            <p>Ainda não tem uma conta, cadastre-se agora mesmo</p>
                            <button onClick={handleOpenLogin} >Criar conta</button>
                        </div>
                    </div>
                </div>
                :
                <Login />}
            {isAlert ? <Alert position="top-right" textAlert={textAlert} /> : null}
        </>
    );
}

export { Cadastro };