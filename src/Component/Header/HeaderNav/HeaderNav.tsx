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
        <Link activeClass={s.active} to={'Header'} spy={true} smooth={true} duration={1000} className={linkStyle.link} onClick={closeMenu}>Header</Link>
        <Link activeClass={s.active} to={'MySkills'} spy={true} smooth={true} duration={1000} className={linkStyle.link} onClick={closeMenu}>My skills</Link>
        <Link activeClass={s.active} to={'MyWorks'} spy={true} smooth={true} duration={1000} className={linkStyle.link} onClick={closeMenu}>My works</Link>
        <Link activeClass={s.active} to={'Contact'} spy={true} smooth={true} duration={1000} className={linkStyle.link} onClick={closeMenu}>Contacts</Link>
    </div>
}


