import React from 'react'
import style from './home.module.css'
import background from './midia/heading.jpg'
import logo from './image/OpenTempusLogo.png'
import githublogo from './image/github_logo.png'
import LFlogo from './image/tlf_logo.png'
import callforcode from './image/cr_logo.png'

const Header = () => {
  return (
   <div className={style.backgroundImage} style={{ backgroundImage: `url(${background})` }}>
    <div className={style.second_header}>
       <div className={style.second_header_section}>
            <div className={style.second_header_logo}>
               <img src={logo} alt=""/>
            </div>
            <div className={style.second_header_text}>
                <p>OpenTempus is an open source solution using machine learnig model to prodict weather information <br/> and suporting farmer to fight climate change. This code can be used to to run climate prodiction <br/> according to your longitude and latitude</p>
            </div>
            <div className={style.second_header_text2}>
                <p>—— HELPFUL LINKS ——</p>
            </div>
            <div className={style.second_header_buttons}>
               <div className={style.second_header_all_buttons}>
                    <a href='https://github.com/Agrolly-LLC/Agrolly-Data-Science' className={style.first_button}>
                        <div>
                          <img src={githublogo} alt=""/>
                        </div>
                        <div>
                          <p>Protocol Code</p>
                        </div> 
                    </a>
                    <a href='http://agrolly-web.mybluemix.net/' className={style.second_button}>
                        <div>
                          <img src="" alt=""/>
                        </div>
                        <div>
                          <p>Agrolly</p>
                        </div> 
                    </a>
                    <a href='https://www.linuxfoundation.org/projects/call-for-code/' className={style.third_button}>
                        <div>
                          <img src={LFlogo} alt=""/>
                        </div>
                        <div>
                          <p>The Linux Foundation</p>
                        </div> 
                    </a>
                    <a href='https://developer.ibm.com/callforcode/' className={style.fourth_button}>
                        <div>
                          <img src={callforcode} alt=""/>
                        </div>
                        <div>
                          <p>Call For Code</p>
                        </div> 
                    </a>
               </div>
            </div>
       </div>
    </div>
    </div>
  )
}

export default Header