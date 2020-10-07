import React, { Component } from "react";
import "./ContentBox.css";

export class TextandImage extends Component {
  state = {
    data: this.props.data,
  };
  render() {
    console.log(this.state.data);
    const contentText = this.state.data.text;
    const contentImg = this.state.data.img;
    const lightOn = this.state.data.light;

    return (
      <section className={lightOn ? "content-box light" : "content-box"}>
        <div className="container">
          {contentImg ? (
            <div className="row">
              <div className="col">
                <h3 className="heading">{contentText.title}</h3>
                {contentText.subtitle ? (
                  <p className="content-box__subtitle">
                    {contentText.subtitle}
                  </p>
                ) : (
                  ""
                )}
                <span>{contentText.text}</span>
              </div>
              <div className="col">
                <img src={contentImg} />
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="box-text">
                <h3 className="heading">{contentText.title}</h3>
                {contentText.subtitle ? (
                  <p className="content-box__subtitle">
                    {contentText.subtitle}
                  </p>
                ) : (
                  ""
                )}
                <span>{contentText.text}</span>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default TextandImage;
