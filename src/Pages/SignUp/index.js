import React from "react";
import Pricing from "../../Components/Pricing";
import Section from "../../Components/Section";
import { homeObjeOne, homeObjeTwo, homeObjeThree } from "../../Data/homeData";

function SignUp() {
  return (
    <>
      <Section {...homeObjeThree} />
      <Pricing />
      <Section {...homeObjeTwo} />
      <Section {...homeObjeOne} />
    </>
  );
}

export default SignUp;
