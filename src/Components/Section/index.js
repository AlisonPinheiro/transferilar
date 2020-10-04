import React from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import "./Section.css";

function Section({
  lightBackground,
  topLine,
  lightText,
  lightTextDescription,
  headLine,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  ButtonLink,
}) {
  return (
    <>
      <div
        className={lightBackground ? "home__section" : "home__section darkBg"}
      >
        <div className="container">
          <div
            className="row home__section-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__section-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headLine}
                </h1>
                <p
                  className={
                    lightTextDescription
                      ? "home__section-subtitle"
                      : "home__section-subtitle dark"
                  }
                >
                  {description}
                </p>
                <Link to={ButtonLink}>
                  <Button buttonSize="btn--wide" buttonColor="blue">
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="col">
              <div className="home__section-img-wrapper">
                <img src={img} alt={alt} className="home__section-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
