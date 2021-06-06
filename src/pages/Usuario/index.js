import React, { useContext } from "react";
import { AuthContext } from "../../providers/auth";
import { HeaderMenu } from "../../components/HeaderMenu";
import { LeftMenu } from "../../components/LeftMenu";
import { Footer } from "../../components/Footer";

import "./usuario.css";

const Usuario = () => {
  const { isLoginActive, isCadastroActive } = useContext(AuthContext);
  return (
    <section className="container-dados">
      <HeaderMenu />
      <LeftMenu />
      <div className="containerProfile">
        <div className="mainProfile">
          <div className="leftProfile">
            <img src="https://github.com/Olafi-Moon.png" alt="" />
            <h3 className="username">Alef Santos</h3>
            <button className="btnBottom history">Ver historico</button>
          </div>
          <div className="rightProfile">
            <h2 className="leftTitle">Perfil</h2>
            <div className="rowProfileInput">
              <fieldset className="fildsetProfile first">
                <legend className="titleInputProfile">Primeiro nome</legend>
                <input type="text" className="inputProfile first" placeholder="Alef" />
              </fieldset>
              <fieldset className="fildsetProfile last">
                <legend className="titleInputProfile">Segundo nome</legend>
                <input type="text" className="inputProfile" placeholder="Santos Soares" />
              </fieldset>
            </div>
            <fieldset className="fildsetProfile default">
              <legend className="titleInputProfile">E-mail</legend>
              <input type="text" className="inputProfile" placeholder="alefmaster@gmail.com" />
            </fieldset>
            <fieldset className="fildsetProfile default">
              <legend className="titleInputProfile">Password</legend>
              <input type="text" className="inputProfile" placeholder="*****************" />
            </fieldset>

            <div className="bottom">
              <button className="btnBottom update">Atualizar</button>
              <button className="btnBottom delete">Deletar</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export { Usuario };
