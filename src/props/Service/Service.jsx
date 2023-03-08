import React from "react";
import "./Service.css";

function Services({ imgSource, title, description }) {
  return (
    <div
      className="Service-div"
      style={{
        backgroundImage: `url(${imgSource})`,
        opacity: "90",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "grey",
        backgroundBlendMode: "multiply",
      }}
    >
      <h2 className="h">{title}</h2>
      <p className="pa">{description}</p>
      <button className="button">Learn More</button>
    </div>
  );
}

export default Services;
