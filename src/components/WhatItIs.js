import React, { useContext } from "react";
import { Grid, Row, Column, Button, ButtonSet } from "carbon-components-react";
import AppContext from "../context/app";

const WhatItIs = () => {
  const { t } = useContext(AppContext);

  return (
    <section>
      <Grid className="landing__whoWeAre">
        <Row>
          <Column lg={16}>
            <h3>{t("informationTitle")}</h3>
            <p>{t("informationFirstPara")}</p>
            {/* <p>{t('informationSecPara')}</p> */}

            <ButtonSet className="landing__buttonSet">
              <Button
                kind="primary"
                onClick={() => {
                  window.open(
                    "https://github.com/krook/OpenTempus/blob/main/GET_INVOLVED.md",
                    "_blank",
                    "noopener"
                  );
                }}
              >
                {t("openTempusButtonGetInvolved")}
              </Button>
              <Button
                kind="tertiary"
                onClick={() => {
                  window.open(
                    "http://callforcode.org/slack",
                    "_blank",
                    "noopener"
                  );
                }}
              >
                {t("openTempusButtonJoinSlack")}
              </Button>
              <Button
                kind="tertiary"
                onClick={() => {
                  window.open(
                    "https://github.com/krook/OpenTempus/",
                    "_blank",
                    "noopener"
                  );
                }}
              >
                {t("openTempusButtonBrowseCode")}
              </Button>
            </ButtonSet>
          </Column>
        </Row>
      </Grid>
    </section>
  );
};

export default WhatItIs;
