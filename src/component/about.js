import React from "react";
import style from "./home.module.css";

const About = () => {
  return (
    <div>
      <div className={style.main_third_section}>
        <div className={style.third_section}>
          <div className={style.third_section_text}>
            <h2>What is OpenTempus?</h2>
            <p className={style.third_section_first_text}>
              Climate change is not a new and farmers are the ones who are
              impacted the most. OpenTempus uses machine learning, gathering
              more than five years of data information to predict and provide
              information to farmers.{" "}
            </p>
            <p className={style.third_section_second_text}>
              {" "}
              Using these insights not only gives farmers straightforward
              predictive weather data but also includes crop information for
              farmers to follow in order to maximize yields.{" "}
            </p>
          </div>
          <div className={style.third_section_link}>
            <iframe
              height="350"
              width="500"
              src="https://www.youtube.com/embed/VQtx4Yq4UnE"
              frameborder="0"
              title="OpenTempus background"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
