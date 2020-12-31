import React from 'react';
import style from './Main.module.css';
import styleContainer from './../../../common/styles/Container.module.css'

export const Main = () => {
    return <div className={style.mainBlock}>
        <div className={styleContainer.container}>
            <div className={style.greetingText}>
                <span>Hi There</span>
                <h1>Lorem ipsum</h1>
                <p>Front-end development</p>
            </div>
            <div className={style.photo}>photo</div>
        </div>
    </div>
}


