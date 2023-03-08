import React from "react";
import "./Offer.css";
import Services from "../../props/Service/Service";
import sand from "../../Assets/sand.jpg";
import drip from "../../Assets/drip.jpg";
import feather from "../../Assets/feather.jpg";
import pc from "../../Assets/pc.jpg";
import mobile from "../../Assets/mobile.jpg";
import web from "../../Assets/webdev.jpg";
import design from "../../Assets/design1.jpg";

function Offer() {
  return (
    <div className="offer_div" style={{ backgroundImage: `url(${feather})` }}>
      <div className="offer_text">
        <h1 className="oh1">Offer</h1>
        <p className="op">These are the services we render.</p>
      </div>

      <div className="cards">
        <Services
          imgSource={mobile}
          title="Mobile Development"
          description="If you are looking at blank cassettes on the web, you may be very
          confused at the difference in price. You may see some for as low as
          $.17 each."
        />
        <Services
          imgSource={web}
          title="Web Development"
          description="If you are looking at blank cassettes on the web, you may be very
          confused at the difference in price. You may see some for as low as
          $.17 each."
        />
        <Services
          imgSource={design}
          title="Graphic Design"
          description="If you are looking at blank cassettes on the web, you may be very
          confused at the difference in price. You may see some for as low as
          $.17 each."
        />
      </div>
    </div>
  );
}

export default Offer;
