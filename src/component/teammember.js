import React from 'react'
import style from './home.module.css'


const Teammember = (props) => {
    return (
        <div className={style.team_image_content}>
        <img src={props.image} alt="" />
            <a href={props.linkedin}>
               
            </a>
            <p className={style.first_name}>{props.name}</p>
            <p>Co-Founder</p>
        </div>
    )
}

export default Teammember
