import React from "react";
import "./Welcome.css";
import img from "../../Assets/Terk.png";

function Welcome() {
  return (
    <div className="welcome-div">
      <h1 className="heading">About Us</h1>
      <div className="welcome-content">
        <div className="werlcome-img">
          <img className="img" src={img} alt="welcome-image" />
        </div>
        <div className="welcome-text">
          <p className="p">
            Terk-Age aims to be one of the top IT firms in Nigeria, offering web
            and application development services to clients all over the
            country. We promise to give every project we work on our best effort
            in order to accomplish this. We prioritize delivering solutions that
            will make our clients happy since we recognize how important
            customer happiness is to achieving our objective goal. Terk-Age is a
            Web Services and Solutions provider with a focus on developing web
            apps, mobile apps and that are responsive, marketing online, and
            consulting for online startups.
          </p>
          <button className="button">Learn more</button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
