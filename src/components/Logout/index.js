import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import UserIcon from '../../images/user.svg';
import { AuthContext } from '../../providers/auth';

const Logout = () => {
    const { setIsLoginActive, isCadastroActive, setIsCadastroActive, user, setUser } = useContext(AuthContext);
    const history = useHistory();

    function handleClickJoin() {
        setIsLoginActive(true);
    }

    function handleClickCreateAccount() {
        setIsCadastroActive(true);
        console.log(isCadastroActive);
    }

    function handleClickLogout(){
        setUser(null);
        localStorage.clear();
        history.push('/');
    }

    const userStorage = JSON.parse(localStorage.getItem('user'));

    
    return (
        <>
            <label htmlFor="account-checkbox" className="user-icon-label">
                <img src={UserIcon} alt="" />
            </label>
            {(user !== null || userStorage)  ?
                <>
                    <input type="checkbox" id="account-checkbox" hidden />
                    <label htmlFor="account-checkbox" className="label-entrar"> { user?.email ?? userStorage?.email } </ label>
                    <ul>
                        <li onClick={handleClickJoin}><p>Perfil</p></li>
                        <li onClick={handleClickLogout}><p>Sair</p></li>
                    </ul>
                </>
                :
                <>
                    <input type="checkbox" id="account-checkbox" hidden />
                    <label htmlFor="account-checkbox" className="label-entrar"> Entrar </ label>
                    <ul>
                        <li onClick={handleClickJoin}><p>Entrar</p></li>
                        <li onClick={handleClickCreateAccount}><p>Criar conta</p></li>
                    </ul>
                </>
            }

        </>
    )
}

export { Logout };