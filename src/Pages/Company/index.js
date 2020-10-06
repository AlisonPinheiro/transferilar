import React from "react";
import Pricing from "../../Components/Pricing";
import Section from "../../Components/Section";
import TitlePage from "../../Components/TitlePage";
import { homeObjeOne, homeObjeTwo, homeObjeThree } from "../../Data/homeData";

function Company() {
  return (
    <>
      <TitlePage
        title="A Transferilar"
        subTitle="saiba mais sobre a nossa empresa"
      />
      {/* <Section {...homeObjeOne} /> */}
      <Pricing />
      <Section {...homeObjeThree} />
    </>
  );
}

export default Company;
