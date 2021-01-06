import React, {FC} from 'react';
import s from './HeaderNav.module.css';
import linkStyle from './../../../common/styles/Link.module.css'
import { Link } from 'react-scroll'

type HeaderNavPropsType = {
    isActive: boolean
    toggleButton: () => void
}


export const HeaderNav:FC<HeaderNavPropsType> = ({isActive,toggleButton}) => {
    const styleHeaderNavAnimate = {
        left: isActive? '0' : ''
    }

    const closeMenu = () =>{
        toggleButton()
    }
    return <div style={styleHeaderNavAnimate} className={s.headerNav}>
        <Link activeClass={s.active} to={'Header'} spy={true} smooth={true} duration={1000} className={linkStyle.link} onClick={closeMenu}>Главная</Link>
        <Link activeClass={s.active} to={'MySkills'} spy={true} smooth={true} duration={1000} className={linkStyle.link} onClick={closeMenu}>Мои скилы</Link>
        <Link activeClass={s.active} to={'MySkills'} spy={true} smooth={true} duration={1000} className={linkStyle.link} onClick={closeMenu}>Мои работы</Link>
        <Link activeClass={s.active} to={'MySkills'} spy={true} smooth={true} duration={1000} className={linkStyle.link} onClick={closeMenu}>Контакты</Link>
    </div>
}


