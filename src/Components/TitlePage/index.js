import React, { Component } from "react";
import "./TitlePage.css";

export class TitlePage extends Component {
  render() {
    const title = this.props.title;
    const subTitle = this.props.subTitle;
    return (
      <div className="title-page">
        <h2>{title}</h2>
        {subTitle ? <h3>{subTitle}</h3> : ""}
      </div>
    );
  }
}

export default TitlePage;
