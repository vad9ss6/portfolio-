import React from 'react';
import s from './Social.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGit, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faCode} from "@fortawesome/free-solid-svg-icons";

export const Social = () => {
    return <div className={s.card}>
        <FontAwesomeIcon icon={faLinkedinIn} size={"4x"} color={'#000'}/>
        <FontAwesomeIcon icon={faCode} size={"4x"} color={'#000'}/>
        <FontAwesomeIcon icon={faGit} size={"4x"} color={'#000'}/>
    </div>
}