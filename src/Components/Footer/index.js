import React from "react";

import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-wrapper">
        <ul className="footer-links">
          <li className="footer-item">
            <Link to="/empresa">a empresa</Link>
          </li>
          <li className="footer-item">
            <Link to="/servicos">serviços</Link>
          </li>
          <li className="footer-item">
            <Link to="/orcamento">faça seu orçamento</Link>
          </li>
          <li className="footer-item">
            <Link to="/contato">contato</Link>
          </li>
        </ul>
        <small className="website-rights">Transferilar © 2020</small>
      </section>
    </div>
  );
}

export default Footer;
