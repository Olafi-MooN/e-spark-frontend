import React, { useEffect, useState } from "react";
import { HeaderMenu } from "../../components/HeaderMenu";
import { LeftMenu } from "../../components/LeftMenu";
import { Footer } from "../../components/Footer";
import { Loading } from "../../components/Loading";
import { Alert } from "../../components/Alert";


import "./usuario.css";

const Usuario = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showProfile, setShowProfile] = useState(true);
  const [showHistory, setShowHistory] = useState(false);
  const [historyDate, setHistoryDate] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);

  const [imagem, setImagem] = useState();
  const [imagemProfile, setImagemProfile] = useState('https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg');

  const [isAlert, setIsAlert ] = useState(false);
  const [textAlert, setTextAlert ] = useState(false);
  const [colorAlert, setColorAlert ] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  
  function showAlert(text, time) {
    setTextAlert(text);
    setIsAlert(true);
    setTimeout(() => {
        setIsAlert(false);
    }, time)
}

  function saveImageProfile() {
    localStorage.setItem('userImage', imagem);
    setColorAlert('green');
    setImagemProfile(imagem);
    return showAlert('Imagem salva com sucesso!', 6000);
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    fetch(`https://e-spark-back.herokuapp.com/userscars/${user.id}`)
      .then(response => response.json())
      .then(result => {
        setHistoryDate(result);
        console.log(result.usercars)
        setIsLoading(false);
      });
  }, [showHistory]);

  useEffect(() => {
    var profilePhoto = localStorage.getItem('userImage');

    profilePhoto !== '' ? setImagemProfile(profilePhoto) : <></> ;
  }, [])

  return (
    <section className="container-dados">
      <HeaderMenu />
      <LeftMenu />
      <div className="containerProfile">
        <div className="mainProfile">
          <div className="leftProfile">
            <img src={imagemProfile} alt="" />
            <button className="btnBottom history photo" onClick={() => {
              setShowPhoto(true);
              setShowProfile(false);
              setShowPassword(false);
              setShowHistory(false);
            }}>Alterar</button>
            <h3 className="username">Alef Santos</h3>
            <button className="btnBottom history" onClick={() => {
              setShowProfile(true);
              setShowPassword(false);
              setShowHistory(false);
              setShowPhoto(false);
            }}>Mudar Dados</button>
            <button className="btnBottom history" onClick={() => {
              setShowPassword(true);
              setShowProfile(false);
              setShowHistory(false);
              setShowPhoto(false);
            }}>Mudar senha</button>
            <button className="btnBottom history" onClick={() => {
              setShowHistory(true)
              setShowPassword(false);
              setShowProfile(false);
              setShowPhoto(false);
            }}>Ver historico</button>
          </div>
          <div className="rightProfile">
            {
              showProfile && <>
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
                <div className="bottom">
                  <button className="btnBottom update">Atualizar</button>
                  <button className="btnBottom delete">Deletar</button>
                </div>
              </>
            }

            {showPassword && <>
              <h2 className="leftTitle">Alterar senha</h2>
              <fieldset className="fildsetProfile default">
                <legend className="titleInputProfile">Senha</legend>
                <input type="text" className="inputProfile" placeholder="Digite a sua senha atual" />
              </fieldset>
              <fieldset className="fildsetProfile default">
                <legend className="titleInputProfile">Nova Senha</legend>
                <input type="text" className="inputProfile" placeholder="Digite a nova senha" />
              </fieldset>
              <div className="bottom">
                <button className="btnBottom update">Atualizar</button>
                <button className="btnBottom delete">Deletar</button>
              </div>
            </>}

            {showPhoto && <>
              <h2 className="leftTitle">Alterar Foto de perfil</h2>
              <fieldset className="fildsetProfile default">
                <legend className="titleInputProfile">Imagem de perfil</legend>
                <input
                  type="text"
                  className="inputProfile"
                  placeholder="Coloque uma url da sua imagem"
                  onChange={(e) => setImagem(e.target.value)} />
              </fieldset>
              <div className="bottom">
                <button className="btnBottom update" onClick={saveImageProfile}>Salvar</button>
              </div>
            </>}

            {showHistory && <>
              <h1 className="leftTitle"> Histórico de Locações</h1>
              {isLoading && <Loading />}
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
            </>}

          </div>
        </div>
        {isAlert ? <Alert position="top-right" textAlert={textAlert} color={colorAlert} /> : null}
      </div>
      <Footer />
    </section>
  );
};

export { Usuario };
