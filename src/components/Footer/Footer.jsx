import React from "react";
import "./Footer.css";
import logo from "../../Assets/logo1.png";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logo} alt="logo" />
          <h3>TERK-AGE</h3>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Social Media</h4>
          <span className="span">
            <BsFacebook className="img-logo" />
            <p>Facebook</p>
          </span>
          <span className="span">
            <BsInstagram className="img-logo" />
            <p>Instagram</p>
          </span>
          <span className="span">
            <BsTwitter className="img-logo" />
            <p>Twitter</p>
          </span>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get In Touch</h4>
          <p>House 10, Road 3, Pengassan Phase One, Lokogoma, Abuja.</p>
          <p>+2348103465662</p>
          <p>Kaioken@payment.net</p>
        </div>
      </div>
      <div className="gpt3__footer-copy">
        <p>© {year} Kaioken. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
