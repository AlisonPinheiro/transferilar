import React from "react";
import Pricing from "../../Components/Pricing";
import Section from "../../Components/Section";
import { homeObjeOne, homeObjeTwo, homeObjeThree } from "../../Data/homeData";

function Products() {
  return (
    <>
      <Section {...homeObjeTwo} />
      <Section {...homeObjeOne} />
      <Pricing />
      <Section {...homeObjeThree} />
    </>
  );
}

export default Products;
