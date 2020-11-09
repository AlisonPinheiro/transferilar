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
            <div className="col">
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
            <div className="col space--large">
              <div className="box-address">
                <h4>Endereço</h4>
                <p>Nossa empresa fica na Rua Flavia Farnese, 435 – Bonsucesso - Rio de Janeiro</p>
                <div className="iframe-map">
                  <iframe allowfullscreen="" frameborder="0" height="250" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.4382269066978!2d-43.24598089999999!3d-22.8602646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997953c24e5127%3A0x8d084abf7fd78fc9!2sR.+Fl%C3%A1via+Farnese%2C+435+-+Bonsucesso%2C+Rio+de+Janeiro+-+RJ%2C+21043-011!5e0!3m2!1spt-BR!2sbr!4v1435616654410"></iframe>
                </div>
                <div className="box-info">
                  <div className="box-info__content phone-box">
                    <h5>Telefones</h5>
                    <p>(21)2580-4775</p>
                    <p>(21)2580-9844</p>
                    <p>(21)9 7884-4867</p>
                  </div>
                  <div className="box-info__content email-box">
                  <h5>Email</h5>
                    <p>contato@transferilar.com.br</p>
                    <p>transferilar@transferilar.com.br</p>
                  </div>
                </div>
              </div>

            </div>
          </div>



      </div>
    </div>
  );
}

export default Contact;
