import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../Button";
import "./Header.css";
import { IconContext } from "react-icons/lib";

function Header() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#0083da" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img src="/images/logo-transferilar.png" alt="transferilar" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/somos-a-transferilar"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  a empresa
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/servicos"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  serviços
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/orcamento"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  faça seu orçamento
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/contato" className="btn-link">
                    <Button buttonStyle="btn--outline">contato</Button>
                  </Link>
                ) : (
                  <Link
                    to="/contato"
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      contato
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Header;
