import React from 'react';
import s from './Main.module.css';
import styleContainer from './../../../common/styles/Container.module.css'
import myPhoto from '../../../common/img/myPhoto.jpg'

export const Main = () => {
    return <div className={s.mainBlock}>
        <div className={styleContainer.container}>
            <div className={s.greetingText}>
                <span>Hi There</span>
                <h1>Lorem ipsum</h1>
                <p>Front-end development</p>
            </div>
            <div className={s.photo}>
                <img src={myPhoto} alt="myPhoto" className={s.myPhoto} id='photo'/>
            </div>
        </div>
    </div>
}


