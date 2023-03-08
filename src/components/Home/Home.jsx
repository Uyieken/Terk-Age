import React, { useState } from "react";
import "./Home.css";
import { images } from "./Homedata";
import "@fontsource/gabriela";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
function Home() {
  const [currImg, setCurrImg] = useState(1);
  return (
    <div
      className="home-div"
      style={{
        backgroundImage: `url(${images[currImg].img})`,
        opacity: "90",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "grey",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="content">
        <h1 className="h1">{images[currImg].title}</h1>
        <h2>{images[currImg].subeading}</h2>
        <p>{images[currImg].text}</p>
        <button className="button">Our Services</button>
      </div>
      <div className="images_arrows">
        <BsArrowLeftShort
          className={currImg === 0 ? "arrow-icon hide" : "arrow-icon"}
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        />
        <BsArrowRightShort
          className={
            currImg === images.length - 1 ? "arrow-icon hide" : "arrow-icon"
          }
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        />
      </div>
    </div>
  );
}

export default Home;
