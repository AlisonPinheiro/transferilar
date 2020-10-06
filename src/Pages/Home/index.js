import React from "react";
import BannerTv from "../../Components/BannerTv";
import CallActionMiddle from "../../Components/CallActionMiddle";
import CallOut from "../../Components/CallOut";
import Section from "../../Components/Section";
import { homeObjeOne, homeObjeTwo } from "../../Data/homeData";

function Home() {
  return (
    <>
      <BannerTv />
      <CallOut />
      <Section {...homeObjeOne} />
      <CallActionMiddle />
      <Section {...homeObjeTwo} />
    </>
  );
}

export default Home;
