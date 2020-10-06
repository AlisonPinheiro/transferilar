import React, { Component } from "react";
import Slider from "react-slick";
import { MdSecurity } from "react-icons/md";
import {
  AiFillLike,
  AiOutlineCar,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";

import "./CallOut.css";

export class CallOut extends Component {
  render() {
    const settings = {
      dots: false,

      infinite: true,
      speed: 500,
      autoplay: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            dots: false,
            infinite: true,
            arrows: true,
            speed: 500,
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            nextArrow: (
              <button>
                <AiOutlineRight />
              </button>
            ),
            prevArrow: (
              <button>
                <AiOutlineLeft />
              </button>
            ),
          },
        },
      ],
    };

    return (
      <div className="CallOut">
        <ul className="CallOut__list">
          <Slider {...settings}>
            <li>
              <div className="CallOut__item">
                <MdSecurity size={30} color={"#1c2237"} />
                <div className="CallOut__text">
                  <h4>Faça sua mudança com</h4>
                  <h3>Tranquilidade e Segurança</h3>
                </div>
              </div>
            </li>
            <li>
              <div className="CallOut__item">
                <AiOutlineCar size={30} color={"#1c2237"} />
                <div className="CallOut__text">
                  <h4>Mudanças residenciais em </h4>
                  <h3>Todo Território Nacional</h3>
                </div>
              </div>
            </li>
            <li>
              <div className="CallOut__item">
                <AiFillLike size={30} color={"#1c2237"} />
                <div className="CallOut__text">
                  <h4>Reponsabilidade com o </h4>
                  <h3>Patrimônio do Cliente</h3>
                </div>
              </div>
            </li>
          </Slider>
        </ul>
      </div>
    );
  }
}

export default CallOut;
