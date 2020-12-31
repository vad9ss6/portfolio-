import React, {FC} from 'react';
import s from './HeaderNav.module.css';
import linkStyle from './../../../common/styles/Link.module.css'
type HeaderNavPropsType = {
    isActive: boolean
}

export const HeaderNav:FC<HeaderNavPropsType> = ({isActive}) => {
    const styleHeaderNavAnimate = {
        left: isActive? '0' : ''
    }
    return <div style={styleHeaderNavAnimate} className={s.headerNav}>
        <a href="#" className={linkStyle.link}>Главная</a>
        <a href="#" className={linkStyle.link}>Мои скилы</a>
        <a href="#" className={linkStyle.link}>Мои работы</a>
        <a href="#" className={linkStyle.link}>Контакты</a>
    </div>
}


