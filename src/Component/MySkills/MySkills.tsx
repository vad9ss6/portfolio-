import React from 'react';
import {Skills} from "./Skills/Skills";
import styleContainer from "../../common/styles/Container.module.css";
import s from './MySkills.module.css'

export const MySkills = () => {
    return <div className={s.main_block}>
        <h2>Мои скиллы</h2>
        <div className={`${styleContainer.container} ${s.block_skills}` }>
            <Skills />
            <Skills />
            <Skills />
        </div>
    </div>


}
