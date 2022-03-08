import React, { useContext } from "react";

import AppContext from "../context/app";

const Banner = () => {
  const { t } = useContext(AppContext);

  return (
    <section className="landing__banner">
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col col__banner__title">
            <h1 className="BannerTitle">OpenTempus</h1>
            <h2 className="BannerSubtitle_Responsive">{t("bannerMission")}</h2>
          </div>
          <div className="bx--col col__banner__subtitle">
            {" "}
            <h2 className="BannerSubtitle">{t("bannerMission")}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
