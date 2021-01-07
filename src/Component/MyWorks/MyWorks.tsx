import React from 'react';
import styleContainer from "../../common/styles/Container.module.css";
import bgOpacity from "./../../common/styles/bgOpacity.module.css"
import {Works} from "./Works/Works";
import bg from "../../common/img/headerBg/3.jpg";


export const MyWorks = () => {
    return <div className={styleContainer.main_block} style={{background: `center / cover no-repeat url(${bg})`, backgroundAttachment: 'fixed'}} id='MyWorks'>

        <h2 className={styleContainer.main_title}>Мои Работы</h2>
        <div className={ styleContainer.container }>
           <Works />
        </div>
    </div>


}
