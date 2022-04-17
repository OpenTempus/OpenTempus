import React from 'react'
import style from './home.module.css'
import Teammember from './teammember'
import Manoela from './image/team/Manoela.jpg'
import Ajinkya from './image/team/Ajinkya.png'
import Helen from './image/team/HelenTsai.png'
import Chimegsaikhan from './image/team/Chimegsaikhan.jpg'

const Team = () => {
    return (
        <div className={style.ninth_section}>
            <div className={style.ninth_section_content}>
                <div className={style.ninth_section_top_left_content}>
                    <p>Team</p>
                </div>
                <div className={style.ninth_section_top_right_content}>
                    <p>Meet the original Agrolly founders who brought this project to life.</p>
                </div>
            </div>
            <div className={style.ninth_section_image_content}>
                <Teammember image={Manoela} name={"Manoela Morais"} linkedin={"https://www.linkedin.com/in/manoelamorais/"}  />
                <Teammember image={Ajinkya} name={"Ajinkya Datalkar"}  linkedin={"https://www.linkedin.com/in/ajinkya-datalkar/"}/>
                <Teammember image={Helen} name={"Helen Tsai"}  linkedin={"https://www.linkedin.com/in/chimka-munkhbayar-0ab421b5/"}/>
                <Teammember image={Chimegsaikhan} name={"Chimka Munkhbayar"}  linkedin={"https://www.linkedin.com/in/helen-tsai-teyi/"}/>
            </div>
        </div>
    )
}

export default Team