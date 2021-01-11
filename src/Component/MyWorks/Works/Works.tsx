import React, {CSSProperties, useState} from 'react';
import s from './Works.module.css'
import {myWorksType} from "../../../App";



type PropType = myWorksType

export const Works: React.FC<PropType> = ({imgWork, title, description, link}) => {
    const [toggleCard, setToggleCard] = useState<boolean>(false)
    const toggleWorkCard = () =>{
        return setToggleCard(value => !value)
    }
    const showCard:CSSProperties = {
        bottom: toggleCard ? '0' : '',
        display: toggleCard ? 'block' : 'none'
    }
    return <div className={s.card} onMouseOut={toggleWorkCard} onMouseOver={toggleWorkCard}>
        <div className={s.toggleCart} style={showCard}>
            <div className={s.block_btn}>
                <a rel="noopener noreferrer"
                   href={link}
                   target="_blank" className={s.btnWork}>Preview</a>
            </div>
        </div>
        <div className={s.img}>
            <img src={imgWork} alt="work" className={s.workImg}/>
        </div>
        <div className={s.title}>{title}</div>
        <div className={s.description}>{description}</div>
    </div>;
}
