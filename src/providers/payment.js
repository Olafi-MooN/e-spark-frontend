import { createContext, useContext, useState } from 'react';

import { AuthContext } from './auth'; 
import { AboutCarContext } from './cards'; 

export const PaymentContext = createContext();

export const PaymentProvider = (props) => {
    const { user } = useContext(AuthContext);
    const { aboutCar } = useContext(AboutCarContext);
    const [ plan, setPlan ] = useState(null);
    const [ creditCard, setCreditCard ] = useState(null);

    return (
        <PaymentContext.Provider value={{
            user,
            plan, 
            setPlan,
            aboutCar,
            creditCard, 
            setCreditCard
        }}>

            {props.children}
        </PaymentContext.Provider>
    )
}