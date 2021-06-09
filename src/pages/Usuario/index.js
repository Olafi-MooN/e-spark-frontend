import React, { useEffect, useState, useRef } from "react";
import { HeaderMenu } from "../../components/HeaderMenu";
import { LeftMenu } from "../../components/LeftMenu";
import { Footer } from "../../components/Footer";
import { Loading } from "../../components/Loading";
import { Alert } from "../../components/Alert";

import UserIcon from '../../images/user.svg';


import "./usuario.css";

const Usuario = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showProfile, setShowProfile] = useState(true);
  const [showHistory, setShowHistory] = useState(false);
  const [historyDate, setHistoryDate] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);

  const [imagem, setImagem] = useState();
  const [imagemProfile, setImagemProfile] = useState(null);

  const [isAlert, setIsAlert] = useState(false);
  const [textAlert, setTextAlert] = useState(false);
  const [colorAlert, setColorAlert] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const getFirstname = useRef(null);
  const getLastname = useRef(null);
  const getEmail = useRef(null);
  const oldPassword = useRef(null);
  const newPassword = useRef(null);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  function showAlert(text, time, color) {
    setColorAlert(color);
    setTextAlert(text);
    setIsAlert(true);
    setTimeout(() => {
      setIsAlert(false);
    }, time)
  }

  function saveImageProfile() {
    localStorage.setItem('userImage', imagem);;
    setImagemProfile(imagem);
    return showAlert('Imagem salva com sucesso!', 6000, 'green');
  }

  async function updatePassword() {

    if(!oldPassword.current.value || !newPassword.current.value) {
      return showAlert('Preencha todos os campos!', 6000, '#B8AB00')
    }

    const updatePassword = await fetch(`https://e-spark-back.herokuapp.com/users/${user.id}/password`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password: oldPassword.current.value,
        newPassword: newPassword.current.value
      })
    });

    const result = await updatePassword.json();

    if (result?.user[0] === 0) {
      console.log(result)
      return showAlert('Ocorreu um erro ao atualizar a senha', 6000, 'red');
    }

    return showAlert('Senha atualizada com sucesso!', 6000, 'green');
  }

  async function updateProfile() {
    const updateProfile = await fetch(`https://e-spark-back.herokuapp.com/users/${user.id}/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: getFirstname.current.value,
        last_name: getLastname.current.value,
        email: getEmail.current.value,
      })
    });

    const result = await updateProfile.json();

    console.log(result);

    if (result?.user[0] === 0) {
      return showAlert('Ocorreu um erro ao atualizar o perfil', 6000, 'red');
    }

    if (result?.user[0] === 1) {
      const updateUser = {
        email: getEmail.current.value,
        first_name: getFirstname.current.value,
        iat: 162310794,
        id: user.id,
        last_name: getLastname.current.value,
      }

      localStorage.setItem('user', JSON.stringify(updateUser));
      setUser(JSON.parse(localStorage.getItem('user')));

      return showAlert('Usuário atualizado com sucesso!', 10000, 'green');
    }

  }

  useEffect(() => {
    fetch(`https://e-spark-back.herokuapp.com/userscars/${user.id}`)
      .then(response => response.json())
      .then(result => {
        setHistoryDate(result);
        setIsLoading(false);
      });
  }, [showHistory, user.id]);

  useEffect(() => {
    var profilePhoto = localStorage.getItem('userImage');

    profilePhoto ? setImagemProfile(profilePhoto) : <></>;
  }, [])

  return (
    <section className="container-dados">
      <HeaderMenu />
      <LeftMenu />
      <div className="containerProfile">
        <div className="mainProfile">
          <div className="leftProfile">
            <img src={imagemProfile ?? UserIcon} alt="" />
            <button className="btnBottom history photo" onClick={() => {
              setShowPhoto(true);
              setShowProfile(false);
              setShowPassword(false);
              setShowHistory(false);
            }}>Alterar</button>
            <h3 className="username">{user.first_name ?? 'username'}</h3>
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
                    <input
                      type="text"
                      className="inputProfile first"
                      defaultValue={user.first_name}
                      ref={getFirstname} />
                  </fieldset>
                  <fieldset className="fildsetProfile last">
                    <legend className="titleInputProfile">Segundo nome</legend>
                    <input
                      type="text"
                      className="inputProfile"
                      defaultValue={user.last_name}
                      ref={getLastname} />
                  </fieldset>
                </div>
                <fieldset className="fildsetProfile default">
                  <legend className="titleInputProfile">E-mail</legend>
                  <input
                    type="text"
                    className="inputProfile"
                    defaultValue={user.email}
                    ref={getEmail} />
                </fieldset>
                <div className="bottom">
                  <button className="btnBottom update" onClick={updateProfile}>Atualizar</button>
                  <button className="btnBottom delete">Deletar conta</button>
                </div>
              </>
            }

            {showPassword && <>
              <h2 className="leftTitle">Alterar senha</h2>
              <fieldset className="fildsetProfile default">
                <legend className="titleInputProfile">Senha</legend>
                <input
                  type="text"
                  className="inputProfile"
                  ref={oldPassword}
                  placeholder="Digite a sua senha atual" />
              </fieldset>
              <fieldset className="fildsetProfile default">
                <legend className="titleInputProfile">Nova Senha</legend>
                <input
                  type="text"
                  className="inputProfile"
                  ref={newPassword}
                  placeholder="Digite a nova senha" />
              </fieldset>
              <div className="bottom">
                <button className="btnBottom update password" onClick={updatePassword}>Atualizar</button>
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
