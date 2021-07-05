import React, { useContext } from "react";
import { HeaderMenu } from "../../components/HeaderMenu/";
import { LeftMenu } from "../../components/LeftMenu/";
import { Footer } from "../../components/Footer/";

import "./aboutus.css";

const AboutUs = () => {
  return (
        <div className="container-home"  >
            <HeaderMenu />
           
            <LeftMenu />

            <div className="container-about">
            <div className="container-about3">
                <div><h1 class="container-h1us">Quem Somos</h1></div>
                <div><p>​​Uma empresa especializada em aluguel de carros eletricos no Brasil e na América Latina. Gostaríamos de convidar você a repensar e a construir um novo significado para a mobilidade, ergonomia e sustentabilidade.
</p>
<p>Porque, para nós, mobilidade tem tudo a ver com liberdade. É poder chegar aonde você quer da maneira mais prática, segura possível e respeitando a natureza. Nós adoramos essa liberdade, mas também entendemos que ela possui diferentes significados para cada um. Por isso, nossa missão é oferecer a você a melhor opção para estar ao seu lado em cada trajeto.
</p>
<p>Desde 2018 cuidamos do caminho de mais de 20 mil pessoas, com o veículo ideal para cada tipo de roteiro. Apesar dos carros serem feitos em série, suas viagens não são.
</p>
<p>Estamos ao seu lado com 57 agências nas principais cidades e aeroportos do Brasil, Argentina, Chile, Colômbia, Equador e Uruguai. Com uma frota de mais de 10 mil carros, você escolhe o tipo de veículo que melhor se encaixa à sua necessidade.
Temos orgulho em dizer que a e-Spark oferece hoje a melhor experiência em veículos elétricos da América do Sul.
</p></div> 


<h1 class="container-h1us">Valores do Nosso do Time</h1>
<p class="subtitulo"> Propósito</p>
<p>Com você, construindo o futuro dos veiculos elétricos.</p>

<p class="subtitulo"> Valores</p>
<p>
    <ul class="listaAbout">
        <li>Cliente é a nossa paixão.</li>
        <li>Gente que inspira e transforma.</li>
        <li>Resultados extraosdinários nos impulsionam.</li>
        <li>Sustentabilidade e proteção ambiental.</li>

    </ul>
</p>
                   
            </div> 


            </div>
            <Footer />
        </div>)
}

export { AboutUs };