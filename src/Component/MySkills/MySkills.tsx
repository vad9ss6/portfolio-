import React from 'react';
import {Skills} from "./Skills/Skills";
import styleContainer from "../../common/styles/Container.module.css";
import s from './MySkills.module.css'
import { Zoom } from "react-awesome-reveal";
import {mySkillsType} from '../../App';

type PropsType = {
    skills: Array<mySkillsType>
}

export const MySkills = (props: PropsType) => {
    return <div className={`${styleContainer.main_block} ${s.block}`} id={'MySkills'}>
        <h2 className={styleContainer.main_title}>My skills</h2>
        <div className={styleContainer.container} >
            {props.skills.map(skills => <Zoom  direction={skills.animation} triggerOnce={true}  key={skills.id}>
                <Skills
                        id={skills.id}
                        iconSvg={skills.iconSvg}
                        description={skills.description}
                        color={skills.color}
                        title={skills.title}/>
            </Zoom >)
            }
        </div>
    </div>


}
