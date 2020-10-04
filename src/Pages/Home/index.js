import React from "react";
import BannerTv from "../../Components/BannerTv";
import Pricing from "../../Components/Pricing";
import Section from "../../Components/Section";
import { homeObjeOne, homeObjeTwo } from "../../Data/homeData";

function Home() {
  return (
    <>
      <BannerTv />
      <Section {...homeObjeOne} />
      <Pricing />
      <Section {...homeObjeTwo} />
    </>
  );
}

export default Home;
