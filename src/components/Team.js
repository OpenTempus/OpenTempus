import React, { useContext } from "react";
import AppContext from "../context/app";
import { Grid, Row, Column } from "carbon-components-react";

const Team = () => {
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

export default Team;
