import React, { Component } from "react";
import { AiFillCar } from "react-icons/ai";
import "./ContentBox.css";

export class IconsBox extends Component {
  state = {
    data: this.props.data,
  };
  render() {
    const data = this.state.data;

    return (
      <section className="content-box light icons">
        <div className="container">
          <div className="row">
            <div className="icon__content">
              {data.map((item) => (
                <div className="icon__box">
                  <span className="icon__img">
                    <img src={item.icon} alt={item.title} />
                  </span>
                  <h4 className="icon__title">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default IconsBox;
