import React from "react";
import "./Review.css";

const Review = (img, title, description) => {
  return (
    <div className="container">
      <img src={img} alt="img" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="button-3">View Details</button>
    </div>
  );
};

export default Review;
