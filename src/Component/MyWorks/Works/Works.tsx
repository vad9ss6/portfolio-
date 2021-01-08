import React from 'react';
import s from './Works.module.css'
import {myWorksType} from "../../../App";

type PropType = myWorksType

export const Works: React.FC<PropType> = ({id, imgWork, title, description}) => {
    return <div className={s.card}>
        <div className={s.img}>
            <img src={imgWork} alt="work" className={s.workImg}/>
        </div>
        <div className={s.title}>{title}</div>
        <div className={s.description}>{description}</div>
    </div>
}
