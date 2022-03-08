import React, { useContext } from "react";
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
} from "carbon-components-react/lib/components/UIShell";
import LogoGitHub20 from "@carbon/icons-react/lib/logo--github/20";
import LogoSlack20 from "@carbon/icons-react/lib/logo--slack/20";

import AppContext from "../context/app";

const _Header = () => {
  const { t } = useContext(AppContext);

  return (
    <Header aria-label="OpenTempus" className="header--container">
      <HeaderName href="/" prefix="">
        {t("title")}
      </HeaderName>

      {/*
      <HeaderNavigation aria-label="Launch Dashboard">
        <HeaderMenuItem target="_blank" href="">
          Launch Dashboard
        </HeaderMenuItem>
      </HeaderNavigation>
      */}

      <HeaderGlobalBar>
        <HeaderGlobalAction
          aria-label="GitHub"
          target="_blank"
          href="https://github.com/OpenTempus-Platform/"
          tooltipAlignment="end"
        >
          <LogoGitHub20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction
          aria-label="Slack"
          target="_blank"
          href="http://callforcode.org/slack"
          tooltipAlignment="end"
        >
          <LogoSlack20 />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  );
};

export default _Header;
