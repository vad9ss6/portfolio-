import React from "react";
import styleContainer from "../../common/styles/Container.module.css";
import s from './Contacts.module.css'

export const Contact = () => {
    return <div className={`${styleContainer.main_block} ${s.block}`} id='Contact'>
        <h2 className={styleContainer.main_title}>Контакты</h2>
    </div>
}