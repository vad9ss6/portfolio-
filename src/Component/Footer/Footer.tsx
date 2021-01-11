import React from 'react';
import styleContainer from "../../common/styles/Container.module.css";
import {Social} from "./Social/Social";

export const Footer = () => {
    return <div className={styleContainer.main_block}>
        <Social />
    </div>
}
