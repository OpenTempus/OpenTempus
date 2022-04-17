import React from 'react'
import style from './home.module.css'
import slack from './image/logoSlackLight.png'
import github from './image/github_logo.png'

const Openlink = () => {
  return (
    <div className={style.fourth_section}>
      <div className={style.fourth_section_content}>
        <div className={style.fourth_section_left_content}>
          <img src={slack} alt="" />
          <h1>SLACK</h1>
          <p>Engage ongoing product discussion through Slack with hundreds of others from around the world.</p>
          <button onClick={(e) => {
            e.preventDefault();
            window.location.href='https://callforcode.slack.com/archives/C01J10FEC95';
          }}>Go To Community</button>
        </div>
        <div className={style.fourth_section_left_content}>
          <img src={github} alt="" />
          <h1>GitHub</h1>
          <p>GitHub source code managing the Machine learning modle prodicting weather information for farmer use</p>
          <button onClick={(e) => {
            e.preventDefault();
            window.location.href='https://github.com/Agrolly-LLC/Agrolly-Data-Science';
          }}>Go To Community</button>
        </div>
      </div>
    </div>
  )
}

export default Openlink