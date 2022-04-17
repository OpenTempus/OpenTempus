import React from 'react'
import style from './home.module.css'
import logo from './image/OpenTempusleftright.png'
import githubLogo from './image/github_logo.png'
import slackLogo from './image/logoSlackLight.png'

function Footer() {
  return (
    <div className={style.footer_section}>
    <div className={style.footer_section_content}>
        <div className={style.footer_logo}>
           <img src={logo} alt=""/>
        </div>
        <div className={style.footer_images}>
         <a href="https://github.com/Agrolly-LLC/Agrolly-Data-Science"><img src={githubLogo} alt=""/></a>
         <a href="https://callforcode.slack.com/archives/C01J10FEC95"><img src={slackLogo} alt=""/></a>
        </div>
        <div className={style.footer_text}>
          <p className={style.footer_first_text}>Copyright © 2022 OpenTempus Protocol a Series of LF Projects, LLC.</p>
          <p className={style.footer_second_text}>OpenTempus is a trademark of LF Projects, LLC. For trademark usage guidelines and other applicable policies, please see www.lfprojects.org.</p>
        </div>
    </div>
  </div>
  )
}

export default Footer
