import React from 'react';

import styleContainer from "../../common/styles/Container.module.css";
import s from './MyWorks.module.css'
import {Works} from "./Works/Works";

export const MyWorks = () => {
    return <div className={styleContainer.main_block}>
        <h2>Мои Работы</h2>
        <div className={ styleContainer.container }>
           <Works />
        </div>
    </div>


}
