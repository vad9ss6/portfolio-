import React from 'react';
import {Skills} from "./Skills/Skills";
import styleContainer from "../../common/styles/Container.module.css";
import s from './MySkills.module.css'

export const MySkills = () => {
    return <div className={`${styleContainer.main_block} ${s.block}`} >
        <h2 className={styleContainer.main_title}>Мои скиллы</h2>
        <div className={ styleContainer.container }>
            <Skills />
            <Skills />
            <Skills />
        </div>
    </div>


}
