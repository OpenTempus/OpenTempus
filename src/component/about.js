import React from 'react'
import style from './home.module.css'

const About = () => {
    return (
        <div>
            <div className={style.main_third_section}>
            <div className={style.third_section}>
                <div className={style.third_section_text}>
                    <h2>what and why Opentemper?</h2>
                    <h1></h1>
                    <p className={style.third_section_first_text}>Climate change is not a new, and farmers are the one who are impacted the first, OpenTemper useage machine learning, gather more than five years of data information to prodict and server information to the farmers.  </p>
                    <p className={style.third_section_second_text}> by useage the thouse information not only giving farmer straight forward weather data to be prepare but also cluclute the crop reqirement for farmer to fellow </p>
                </div>
                <div className={style.third_section_link}>
                    <iframe height="350" width="500" src="https://www.youtube.com/embed/VQtx4Yq4UnE" frameborder="0"></iframe>
                </div>
            </div>
        </div>
        </div>
    )
}

export default About