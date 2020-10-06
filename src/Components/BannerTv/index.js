import React, { Component } from "react";
import { bannerData } from "../../Data/BannerTvData";
import Slider from "react-slick";
import "./BannerTv.css";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

export default class BannerTv extends Component {
  state = {
    data: bannerData,
  };
  render() {
    const banner = this.state.data;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: (
        <button>
          <AiOutlineRight size={60} />
        </button>
      ),
      prevArrow: (
        <button>
          <AiOutlineLeft size={60} />
        </button>
      ),
    };

    return (
      <div className="bannertv">
        {banner ? (
          <Slider {...settings}>
            {banner.map((bannerItem) =>
              bannerItem.bannerTypeImg ? (
                <div className="bannertv__img">
                  <img src={bannerItem.bannerImg} />
                  <div
                    className={
                      bannerItem.position
                        ? `${bannerItem.position} bannertv__box-text`
                        : "bannertv__box-text"
                    }
                  >
                    <h3>{bannerItem.bannerTitle}</h3>
                    <h4>{bannerItem.bannerSubTitle}</h4>
                  </div>
                </div>
              ) : (
                <div className="bannertv__text">
                  <div
                    style={
                      bannerItem.bannerBackground
                        ? {
                            background: ` url( ${bannerItem.bannerBackground} )`,
                          }
                        : ""
                    }
                  >
                    <div className="bannertv__box-text">
                      {bannerItem.titleLink ? (
                        <Link to={bannerItem.titleLink}>
                          <h2>{bannerItem.bannerTitle}</h2>
                        </Link>
                      ) : (
                        <h2>{bannerItem.bannerTitle}</h2>
                      )}
                      {bannerItem.subtitleLink ? (
                        <Link to={bannerItem.subtitleLink}>
                          <p>{bannerItem.bannerSubTitle}</p>
                        </Link>
                      ) : (
                        <p>{bannerItem.bannerSubTitle}</p>
                      )}
                    </div>
                  </div>
                </div>
              )
            )}
          </Slider>
        ) : null}
      </div>
    );
  }
}
