import { createContext, useState, useEffect } from 'react';
import { decodeJWT } from '../token/index.js';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [isLoginActive, setIsLoginActive] = useState(false);
    const [isCadastroActive, setIsCadastroActive] = useState(false);
    const [token, setToken] = useState('');
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (token !== undefined) {
            const jwt = decodeJWT(token);
            setUser(jwt);
            
            if (jwt !== null) {
                localStorage.setItem('user', JSON.stringify(jwt));
            }
        }
    }, [token])



    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            token,
            setToken,
            isLoginActive,
            setIsLoginActive,
            isCadastroActive,
            setIsCadastroActive
        }}>

            {props.children}
        </AuthContext.Provider>
    )
}