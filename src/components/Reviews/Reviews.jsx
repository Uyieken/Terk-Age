import React from "react";

import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

// import { MdChevronLeft, MdChevronRight } from "react-icons/fa";

import "./Reviews.css";
import Review from "../../props/Review/Review";

const Reviews = () => {
  const slides = [1, 2, 3, 4, 5, 6, 7, 8];

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  return (
    <div className="container-div">
      <div className="slider-div">
        <BsArrowLeftShort
          className="slider-icon left"
          size={30}
          onClick={slideLeft}
        />
        <div id="slider">
          {slides.map((slide, index) => {
            return (
              <div className="slider-card">
                <div className="slider-card-img"></div>
              </div>
            );
          })}
        </div>
        <BsArrowRightShort
          className="slider-icon right"
          size={30}
          onClick={slideRight}
        />
      </div>
    </div>
  );
};

export default Reviews;
