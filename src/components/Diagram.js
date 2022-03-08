import React from "react";
import landscape from "../content/assets/Prometeo_header.jpg";

const Banner = () => {
  return (
    <section className="landing__diagram">
      <div className="landing__diagramContainer">
        <img src={landscape} alt="Earthquake diagram" />
      </div>
    </section>
  );
};

export default Banner;
