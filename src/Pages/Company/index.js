import React from "react";
import TitlePage from "../../Components/TitlePage";
import { companyData, fieldArea, teamData } from "../../Data/companyData";
import TextandImg from "../../Components/ContentBox/TextandImage";

function Company() {
  return (
    <>
      <TitlePage
        title="A Transferilar"
        subTitle="saiba mais sobre a nossa empresa"
      />
      <TextandImg data={companyData} />
      <TextandImg data={teamData} />
      <TextandImg data={fieldArea} />
    </>
  );
}

export default Company;
