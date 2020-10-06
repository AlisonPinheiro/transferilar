import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";

import "./CallActionMiddle.css";

export class CallActionMiddle extends Component {
  render() {
    return (
      <div className="callaction-midle">
        <div className="container">
          <h4>Está precisando se mudar ? Fale com a Transferilar ! </h4>
          <Link to="/contato" className="btn-link">
            <Button
              buttonStyle="btn--outline"
              buttonColor="red"
              buttonSize="btn--wide"
            >
              Faça seu Orçamento
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default CallActionMiddle;
