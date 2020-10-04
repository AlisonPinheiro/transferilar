import React from "react";
import Pricing from "../../Components/Pricing";
import Section from "../../Components/Section";
import { servicesObj } from "../../Data/servicesData";
import { homeObjeOne } from "../../Data/homeData";

import "./Services.css";

function Services() {
  return (
    <>
      <h1> Services</h1>
      <Section {...servicesObj} />
      <Pricing />
      <Section {...homeObjeOne} />
    </>
  );
}

export default Services;
