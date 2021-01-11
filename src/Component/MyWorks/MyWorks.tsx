import React from 'react';
import styleContainer from "../../common/styles/Container.module.css";
import {Works} from "./Works/Works";
import bg from "../../common/img/headerBg/3.jpg";
import {myWorksType} from "../../App";
import s from './MyWorks.module.css'
import bgOpacity from "../../common/styles/bgOpacity.module.css";

type PropType = {
    works:Array<myWorksType>
}

export const MyWorks = (props: PropType) => {
    return <div className={styleContainer.main_block} style={{background: `center / cover no-repeat url(${bg})`, backgroundAttachment: 'fixed'}} id='MyWorks'>
        <div className={bgOpacity.bgOpacity}/>
        <h2 className={styleContainer.main_title}>My works</h2>
        <div className={`${styleContainer.container} ${s.workContainer}`}>
            {props.works.map(w => <Works key={w.id} id={w.id} imgWork={w.imgWork} title={w.title} description={w.description} link={w.link}/>)}
        </div>
    </div>


}
