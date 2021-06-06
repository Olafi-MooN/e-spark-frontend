import React, { useEffect, useState } from "react";

import { HeaderMenu } from "../../components/HeaderMenu/";
import { LeftMenu } from "../../components/LeftMenu/";
import { Loading } from "../../components/Loading";
import { Footer } from "../../components/Footer/";
import "./historyuser.css";


const Historico = () => {

    const [historyDate, setHistoryDate] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));

        fetch(`https://e-spark-back.herokuapp.com/userscars/${user.id}`)
            .then(response => response.json())
            .then(result => {
                setHistoryDate(result);
                console.log(result.usercars)
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <div className="container-historico">
                {isLoading && <Loading />}
                <HeaderMenu />
                <LeftMenu />
                <h1> Histórico de Locações</h1>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Carro</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    {historyDate?.usercars.map((item, index) => {
                        return (
                            <>
                                <tbody>
                                    <tr>
                                        <td>
                                            {item?.id_cars}{item.id_users}{item.id}
                                        </td>
                                        <td>{item?.Users_car?.name_car.replaceAll('_', ' ')}</td>
                                        <td>{item?.createdAt}</td>
                                    </tr>
                                </tbody>
                            </>
                        )
                    })}

                </table>
            </div>

            <Footer />
        </>
    );
};

export { Historico };