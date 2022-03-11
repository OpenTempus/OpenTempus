import React, { useContext } from "react";
import AppContext from "../context/app";
import { Grid, Row, Column } from "carbon-components-react";
import salome from "../content/assets/Salome-Valero.jpeg";
import marco from "../content/assets/Marco-Emilio-Rodriguez-Serrano.jpeg";
import joan from "../content/assets/Joan-Herrera.jpeg";
import artur from "../content/assets/Artur-Alvarez.jpeg";

const Technology = () => {
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

export default Technology;
