import React from "react";
import {
  ourServices,
  servicesIcons,
  ourSpecialty,
  specialtyIcons,
} from "../../Data/servicesData";
import TitlePage from "../../Components/TitlePage";
import CallActionMiddle from "../../Components/CallActionMiddle";
import TextandImg from "../../Components/ContentBox/TextandImage";
import IconsBox from "../../Components/ContentBox/IconsBox";

import "./Services.css";

function Services() {
  return (
    <div className="services">
      <TitlePage
        title="Nosso Serviços"
        subTitle="conheça os serviços da Transferilar"
      />
      <TextandImg data={ourServices} />
      <IconsBox data={servicesIcons} />
      <CallActionMiddle />
      <TextandImg data={ourSpecialty} />
      <section className="content-box light icons">
        <div className="container">
          <div className="services-list">
            <ul className="content-list">
              <li className="list-item">
                <h3>Mudanças nacionais e internacionais</h3>
              </li>
              <li className="list-item">
                <h3>Embalagens de móveis e itens em geral</h3>
              </li>
              <li className="list-item">
                <h3>Desmontagem e montagem</h3>
              </li>
              <li className="list-item">
                <h3>Transporte de pianos e cofres</h3>
              </li>
            </ul>
            <ul className="content-list">
              <li className="list-item">
                <h3>Içamentos</h3>
              </li>
              <li className="list-item">
                <h3>Transporte de veículos</h3>
              </li>
              <li className="list-item">
                <h3>Transporte de equipamentos sensíveis</h3>
              </li>
              <li className="list-item">
                <h3>Remanejamento interno de setor</h3>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
