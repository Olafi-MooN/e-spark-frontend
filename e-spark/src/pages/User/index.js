import React, { useContext } from "react";
import { AuthContext } from "../../providers/auth";
import { HeaderMenu } from "../../components/HeaderMenu";
import { LeftMenu } from "../../components/LeftMenu";
import { Footer } from "../../components/Footer";
import { Cadastro } from "../../components/Cadastro";
import { Login } from "../../components/Login";
import "./user.css";

const User = () => {
  const { isLoginActive, isCadastroActive } = useContext(AuthContext);
  return (
    <section className="container-dados">
      <HeaderMenu />
      <LeftMenu />
      <h1 className="container-dados-h1">Alteração de Dados</h1>
      <form id="form-dados">
        <section id="coluna-1">
          <section>
            <label>Nome Completo:</label>
            <section class="break2"></section>
            <input
              type="text"
              class="name"
              placeholder="Ex.: Bruno Silva Gomes"
              required="required"
            ></input>
          </section>
          <section class="break"></section>
          <section>
            <label>Gênero:</label>
            <section class="break2"></section>
            <select name="gender" required="required">
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="female">Feminino</option>
              <option value="male">Masculino</option>
              <option value="nonBinary">Não-binário</option>
              <option value="notAns">Prefiro não responder</option>
            </select>
          </section>
          <section class="break"></section>
          <section>
            <label>Telefone:</label>
            <section class="break2"></section>
            <input
              type="text"
              id="tel"
              placeholder="Ex.: (00) 00000-0000"
              required="required"
              maxlength="11"
            ></input>
          </section>
          <section class="break"></section>
          <section>
            <label>RG:</label>
            <section class="break2"></section>
            <input
              type="text"
              id="rg"
              placeholder="Ex.: 00.000.000"
              required="required"
              maxlenght="7"
            ></input>
          </section>
          <section class="break"></section>
          <section>
            <label>CPF:</label>
            <section class="break2"></section>
            <input
              type="text"
              id="cpf"
              placeholder="Ex.: 000.000.000-00"
              required="required"
              maxlenght="11"
            ></input>
          </section>
          <section class="break"></section>
          <section>
            <label>CNH:</label>
            <section class="break2"></section>
            <input
              type="text"
              id="cnh"
              placeholder="Ex.: 00000000000/UF"
              required="required"
              maxlenght="14"
            ></input>
          </section>
          <section class="break"></section>
          <input
            id="button-att"
            type="submit"
            class="submit"
            value="Alterar Dados"
          ></input>
          <input
            id="button-reset"
            type="reset"
            class="reset"
            value="Limpar Campos"
          ></input>
        </section>

        <section id="coluna-2">
          <section>
            <label>E-Mail:</label>
            <section class="break2"></section>
            <input
              type="text"
              class="mail"
              placeholder="Ex.: user@xxxxx.com"
              required="required"
            ></input>
          </section>
          <section class="break"></section>
          <label class="dataNasc">Data de Nascimento:</label>
          <section class="break2"></section>
          <input type="date" name="dataNasc" required="required"></input>
          <section class="break"></section>
          <section>
            <label>Telefone:</label>
            <section class="break2"></section>
            <input
              type="text"
              id="tel"
              placeholder="Ex.: (00) 00000-0000"
              required="required"
              maxlength="11"
            ></input>
          </section>
          <section class="break"></section>
          <section>
            <label>Logradouro, nº:</label>
            <section class="break2"></section>
            <input
              type="text"
              id="streetNumb"
              placeholder="Ex.: Rua dos Bobos, nº0"
              required="required"
            ></input>
          </section>
          <section class="break"></section>
          <section>
            <label>Bairro:</label>
            <section class="break2"></section>
            <input
              type="text"
              id="district"
              placeholder="Ex.: Primeiro de Maio"
              required="required"
            ></input>
          </section>
          <section class="break"></section>
          <section>
            <label>CEP:</label>
            <section class="break2"></section>
            <input
              type="text"
              id="cep"
              placeholder="Ex.: 00.000-000"
              required="required"
              maxlenght="7"
            ></input>
          </section>
          <section class="break"></section>
          <section class="break"></section>
        </section>
      </form>
      {isLoginActive ? <Login /> : null}
      {isCadastroActive ? <Cadastro /> : null}
      <Footer />
    </section>
  );
};

export  { User }; 
