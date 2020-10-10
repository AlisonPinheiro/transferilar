import React from "react";
import TextandImage from "../../Components/ContentBox/TextandImage";
import Section from "../../Components/Section";
import TitlePage from "../../Components/TitlePage";
import { anywhere, estimateData } from "../../Data/estimateData";
import "./Estimate.css";

function Estimate() {
  return (
    <div class="estimate">
      <TitlePage
        title="Orçamentos"
        subTitle="solicite seu orçamento com a transferilar"
      />
      <Section {...estimateData} />
      <TextandImage data={anywhere} />
    </div>
  );
}

export default Estimate;
