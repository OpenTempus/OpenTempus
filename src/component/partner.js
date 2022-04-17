import React from 'react'
import style from './home.module.css'
import ibmlogo from './image/ibm_logo.png'

const Partner = () => {
    return (
        <div>
            <div className={style.seventh_section}>
                <div className={style.seventh_section_content}>
                    <h1>Who are involved</h1>
                    <h2></h2>
                </div>
                <div className={style.seventh_section_logo}>
                    <img src={ibmlogo} alt="" />
                    <img src={ibmlogo} alt="" />
                    <img src={ibmlogo} alt="" />
                    <img src={ibmlogo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Partner
