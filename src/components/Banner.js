import React, { useContext } from "react";

import AppContext from "../context/app";

const Banner = () => {
  const { t } = useContext(AppContext);

  return (
    <section className="landing__banner">
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col col__banner__title">
            <h1 className="BannerTitle">{t("title")}</h1>
            <h2 className="BannerSubtitle_Responsive">{t("subTitle")}</h2>
          </div>
          <div className="bx--col col__banner__subtitle">
            {" "}
            <h2 className="BannerSubtitle">{t("subTitle")}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
