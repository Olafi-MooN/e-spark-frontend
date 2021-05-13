import React from "react";

import { HeaderMenu } from "../../components/HeaderMenu/";
import { LeftMenu } from "../../components/LeftMenu/";
import { Footer } from "../../components/Footer/";
import "./historyuser.css";

const Historico = () => {
    return (
        <>
            <HeaderMenu />
            <LeftMenu />
            <div className="container-historico">
                <h1> Histórico de Locações</h1>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Carro</th>
                        <th>Data</th>
                    </tr>
                    <tr>
                        <td>
                            {" "}
                            <a href="/">20210010</a>{" "}
                        </td>
                        <td>Chevrolet Bolt</td>
                        <td>11/11/2020</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/">20210011</a>
                        </td>
                        <td>Nissan Leaf</td>
                        <td>10/02/2019</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/">20210013</a>
                        </td>
                        <td>Tesla Model 3</td>
                        <td>20/05/2020</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/">20210015</a>
                        </td>
                        <td>Porsche Taycan </td>
                        <td>15/04/2020</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/">20210014</a>
                        </td>
                        <td>Audi E-Tron</td>
                        <td>10/02/2019</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/">20210022</a>
                        </td>
                        <td>BMW i3</td>
                        <td>20/09/2020</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/">20210078</a>
                        </td>
                        <td>Renault Zoe</td>
                        <td>05/02/2021</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/">20210201</a>
                        </td>
                        <td>Jaguar i-Pace</td>
                        <td>05/07/2020</td>
                    </tr>
                </table>
            </div>

            <Footer />
        </>
    );
};

export { Historico };