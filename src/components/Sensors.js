import React, { useContext } from "react";
import board from "../content/assets/OpenTempus-arch.jpg";
import AppContext from "../context/app";
import dash from "../content/assets/OpenTempus-dashboardSS.png";
import device from "../content/assets/OpenTempus-device-opt.png";
import deviceFull from "../content/assets/OpenTempus-device.png";
import test from "../content/assets/OpenTempus-testing.png";
import { Grid, Row, Column } from "carbon-components-react";
import salome from "../content/assets/Salome-Valero.jpeg";
import marco from "../content/assets/Marco-Emilio-Rodriguez-Serrano.jpeg";
import joan from "../content/assets/Joan-Herrera.jpeg";
import artur from "../content/assets/Artur-Alvarez.jpeg";

const SensorInfo = () => {
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

        <Row className="info-text">
          <Column lg={4}>
            <h2>{t("technologyTitle")}</h2>
          </Column>
          <Column lg={8}>
            <h3>{t("technologyDescription2")}</h3>
            <Column lg={{ span: 6, offset: 0 }}>
              <a href={deviceFull}>
                <img className="device" src={device} alt="OpenTempus device" />
              </a>
            </Column>
            <h3>{t("technologyDescription3")}</h3>
            <Column lg={{ span: 6, offset: 0 }}>
              <img className="dash" src={dash} alt="Prometeo dashboard"></img>
            </Column>
          </Column>
        </Row>

        <Row className="info-text">
          <Column lg={4}>
            <h2>{t("actionTitle")}</h2>
          </Column>
          <Column lg={8}>
            <h3>{t("actionDescription1")}</h3>
            <Column lg={{ span: 6, offset: 0 }}>
              <img
                className="testing"
                src={test}
                alt="OpenTempus testing pic"
              ></img>
            </Column>
            <div className="tests">
              <h3>{t("actionDescription2")}</h3>
              <ol>
                <li>{t("actionDescription3")}</li>
                <li>{t("actionDescription4")}</li>
                <li>{t("actionDescription5")}</li>
              </ol>
              <br />
            </div>
            <div className="results">
              <h3>{t("actionDescription6")}</h3>
              <ol>
                <li>{t("actionDescription7")}</li>
                <li>{t("actionDescription8")}</li>
                <li>{t("actionDescription9")}</li>
              </ol>
            </div>
          </Column>
        </Row>
      </Grid>
    </section>
  );
};

const DashboardInfo = () => {
  const { t } = useContext(AppContext);

  return (
    <section>
      <Grid className="info-section">
        <Row className="info-text">
          <Column lg={4}>
            <h2>{t("teamTitle")}</h2>
          </Column>
          <Column lg={8}>
            <h3>{t("teamDescription")}</h3>
          </Column>
        </Row>
        <Row className="info-media">
          <Column className="col__media">
            <div className="gallery">
              <img src={salome} alt="Salomé Valero"></img>
              <div className="desc">
                <p>Salomé Valero</p>
                <p>Chief Executive Officer</p>
                <p>Co-Founder</p>
              </div>
            </div>
          </Column>

          <Column className="col__media">
            <div className="gallery">
              <img src={marco} alt="Marco Emilio Rodríguez Serrano" />
              <div className="desc">
                <p>Marco Emilio Rodríguez Serrano</p>
                <p>Chief Technology Officer</p>
                <p>Co-Founder</p>
              </div>
            </div>
          </Column>

          <Column className="col__media">
            <div className="gallery">
              <img src={joan} alt="Joan Herrera" />
              <div className="desc">
                <p>Joan Herrera</p>
                <p>Chief Operating Officer</p>
                <p>Co-Founder</p>
              </div>
            </div>
          </Column>

          <Column className="col__media">
            <div className="gallery">
              <img src={artur} alt="Artur Álvarez" />
              <div className="desc">
                <p>Artur Álvarez</p>
                <p>Media Producer</p>
                <p>Co-Founder</p>
              </div>
            </div>
          </Column>
        </Row>
      </Grid>
    </section>
  );
};

const NetworkInfo = () => {
  const { t } = useContext(AppContext);

  return (
    <section>
      {" "}
      <Grid className="info-section">
        <Row className="info-text">
          <Column lg={4}>
            <h2>{t("teamDescription1")}</h2>
          </Column>
          <Column lg={8}>
            <ol>
              <li>{t("teamDescription2")}</li>
              <li>{t("teamDescription3")}</li>
              <li>{t("teamDescription4")}</li>
              <li>{t("teamDescription5")}</li>
              <li>{t("teamDescription6")}</li>
            </ol>
          </Column>
          <Column lg={{ span: 3, offset: 1 }}></Column>
        </Row>
        <Row className="info-media">
          <Column lg={{ span: 11, offset: 4 }}></Column>
        </Row>
      </Grid>
    </section>
  );
};

export { SensorInfo, DashboardInfo, NetworkInfo };
