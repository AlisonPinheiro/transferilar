import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Company from "./Pages/Company";
import SignUp from "./Pages/SignUp";

function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/empresa" exact component={Company} />
        <Route path="/servicos" exact component={Services} />
        <Route path="/orcamento" exact component={Services} />
        <Route path="/contato" exact component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;
