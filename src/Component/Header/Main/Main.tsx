import React from 'react';
import s from './Main.module.css';
import styleContainer from './../../../common/styles/Container.module.css'
import bgOpacity from './../../../common/styles/bgOpacity.module.css'
import myPhoto from '../../../common/img/myPhoto.jpg'
import bg from '../../../common/img/headerBg/2.jpg'

export const Main = () => {
    return <div className={s.mainBlock} style={{background: `center / cover no-repeat url(${bg})`, backgroundAttachment: 'fixed'}}>
        <div className={bgOpacity.bgOpacity}/>
        <div className={styleContainer.container}>
            <div className={s.greetingText}>
                <span>Hi There</span>
                <h1>Nesterovich <span className={s.styleTitle}>Vadim</span></h1>
                <span>Front-end development</span>
            </div>
            <div className={s.photo}>
                <img src={myPhoto} alt="myPhoto" className={s.myPhoto}  id='photo'/>
                <div className={s.borderPhoto} id={'borderPhoto'}/>
            </div>
        </div>
    </div>
}


