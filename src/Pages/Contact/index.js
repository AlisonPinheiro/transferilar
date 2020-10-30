import React from "react";
import { Button } from "../../Components/Button";
import TitlePage from "../../Components/TitlePage";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <TitlePage
        title="Entre em contato com a gente"
        subTitle="Duvidas ? Orçamentos ? Sugestões ? Mande sua mensagem"
      />
      <div className="container">
        <div className="row">
          <div className="col col-lg">
            <form>
              <label for="nome">nome</label>
              <input
                type="text"
                name="name"
                id="user-name"
                placeholder="seu nome"
              ></input>
              <label for="email">e-mail</label>
              <input
                type="text"
                name="email"
                id="user-email"
                placeholder="seu email"
              ></input>
              <label for="mensagem">mensagem</label>
              <textarea
                name="mensagem"
                id="user-message"
                placeholder="digite sua mensagem"
              ></textarea>
              <Button
                buttonStyle="btn--primary"
                buttonSize="btn--large"
                type="submit"
              >
                enviar
              </Button>
            </form>
          </div>

          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
