import React, { useContext } from "react";
import board from "../content/assets/pyrrha-arch.jpg";
import AppContext from "../context/app";
import { Grid, Row, Column } from "carbon-components-react";

const Overview = () => {
  const { t } = useContext(AppContext);

  return (
    <section>
      <Grid className="info-section">
        <Row className="info-text">
          <Column lg={4}>
            <h2>{t("architectureTitle")}</h2>
          </Column>
          <Column lg={8}>
            <h3>{t("architectureDescription")}</h3>
          </Column>
        </Row>
        <Row className="info-textz">
          <Column lg={4}></Column>
          <Column lg={6}>
            <img
              className="sensor-image"
              src={board}
              alt="A 3D printed sensor"
            ></img>
          </Column>
        </Row>
        <Row className="info-textz">
          <Column lg={4}></Column>
          <Column lg={12} style={{ border: "1px" }}>
            <div className="archdescrip">
              <ol>
                <li>{t("architectureDescription1")}</li>
                <br />
                <li>{t("architectureDescription2")}</li>
                <br />
                <li>{t("architectureDescription3")}</li>
                <br />
                <li>{t("architectureDescription4")}</li>
                <br />
                <li>{t("architectureDescription5")}</li>
                <br />
                <li>{t("architectureDescription6")}</li>
                <br />
                <li>{t("architectureDescription7")}</li>
                <br />
                <li>{t("architectureDescription8")}</li>
                <br />
                <li>{t("architectureDescription9")}</li>
                <br />
                <li>{t("architectureDescription10")}</li>
                <br />
                <li>{t("architectureDescription11")}</li>
              </ol>
            </div>
          </Column>
        </Row>
      </Grid>
    </section>
  );
};

export default Overview;
