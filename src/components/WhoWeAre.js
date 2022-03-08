import React, { useContext } from "react";
import { Grid, Row, Column, Button, ButtonSet } from "carbon-components-react";
import AppContext from "../context/app";

const WhoWeAre = () => {
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
                    "https://github.com/OpenTempus-Platform/OpenTempus/blob/main/GET_INVOLVED.md",
                    "_blank",
                    "noopener"
                  );
                }}
              >
                {t("OpenTempusButtonGetInvolved")}
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
                {t("OpenTempusButtonJoinSlack")}
              </Button>
              <Button
                kind="tertiary"
                onClick={() => {
                  window.open(
                    "https://github.com/OpenTempus-Platform",
                    "_blank",
                    "noopener"
                  );
                }}
              >
                {t("OpenTempusButtonBrowseCode")}
              </Button>
            </ButtonSet>
          </Column>
        </Row>
      </Grid>
    </section>
  );
};

export default WhoWeAre;
