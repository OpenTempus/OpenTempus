import React from "react";
import style from "./home.module.css";

const About = () => {
  return (
    <div>
      <div className={style.main_third_section}>
        <div className={style.third_section}>
          <div className={style.third_section_text}>
            <h2>what and why Opentemper?</h2>
            <h1></h1>
            <p className={style.third_section_first_text}>
              Climate change is not a new, and farmers are the ones who are
              impacted the most, OpenTempus uses machine learning, gathering
              more than five years of data information to predict and serve
              information to farmers.{" "}
            </p>
            <p className={style.third_section_second_text}>
              {" "}
              by usage the information not only gives farmer straightforward
              weather data to prepare but also includes the crop requirement for
              farmer to follow{" "}
            </p>
          </div>
          <div className={style.third_section_link}>
            <iframe
              height="350"
              width="500"
              src="https://www.youtube.com/embed/VQtx4Yq4UnE"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
