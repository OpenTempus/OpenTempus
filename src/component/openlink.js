import React from "react";
import style from "./home.module.css";
import slack from "./image/logoSlackLight.png";
import github from "./image/github_logo.png";

const Openlink = () => {
  return (
    <div className={style.fourth_section}>
      <div className={style.fourth_section_content}>
        <div className={style.fourth_section_left_content}>
          <img src={slack} alt="" />
          <h1>Slack</h1>
          <p>
            Engage the community through Slack with others from around the
            world.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://callforcode.org/slack";
            }}
          >
            Go to Slack
          </button>
        </div>
        <div className={style.fourth_section_left_content}>
          <img src={github} alt="" />
          <h1>GitHub</h1>
          <p>
            GitHub source code for the machine learning model that predicts
            weather information for farmers.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://github.com/OpenTempus";
            }}
          >
            Go to GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Openlink;
