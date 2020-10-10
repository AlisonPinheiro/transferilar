import React from "react";
import TitlePage from "../../Components/TitlePage";
import { companyData, fieldArea, teamData } from "../../Data/companyData";
import TextandImg from "../../Components/ContentBox/TextandImage";

import "./Company.css";

function Company() {
  return (
    <div className="company">
      <TitlePage
        title="A Transferilar"
        subTitle="saiba mais sobre a nossa empresa"
      />
      <TextandImg data={companyData} />
      <TextandImg data={teamData} />
      <TextandImg data={fieldArea} />
      <section className="content-box light">
        <div className="container">
          <div className="box-text">
            <h3 className="heading">Endereço</h3>
            <span>
              Nossa empresa fica na Rua Flavia Farnese, 435 – Bonsucesso - Rio
              de Janeiro
            </span>
            <iframe
              allowfullscreen=""
              frameborder="0"
              height="250"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.4382269066978!2d-43.24598089999999!3d-22.8602646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997953c24e5127%3A0x8d084abf7fd78fc9!2sR.+Fl%C3%A1via+Farnese%2C+435+-+Bonsucesso%2C+Rio+de+Janeiro+-+RJ%2C+21043-011!5e0!3m2!1spt-BR!2sbr!4v1435616654410"
              width="100%"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Company;
