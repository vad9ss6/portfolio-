import {IconProp, library} from '@fortawesome/fontawesome-svg-core'
import {faReact, faJs, faHtml5, faGithub, faCss3Alt} from '@fortawesome/free-brands-svg-icons'
import React from 'react';
import s from './Skills.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAtom} from "@fortawesome/free-solid-svg-icons";
library.add(faReact, faJs, faHtml5, faCss3Alt, faGithub, faAtom);

type PropsType = {
    id: number
    iconSvg: IconProp
    description: string
    title: string
    color: string
}

export const Skills = (props: PropsType) => {
    return <div className={s.card}>
        <div>
            <FontAwesomeIcon icon={props.iconSvg} size={"4x"} color={props.color}/>
        </div>
        <div className={s.title}>{props.title}</div>
        <div className={s.description}>{props.description}</div>
    </div>
}
