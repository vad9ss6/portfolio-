import React, {useState, MouseEvent, useEffect} from 'react';
import s from './Header.module.css';
import {Main} from "./Main/Main";
import {HeaderNav} from "./HeaderNav/HeaderNav";
import {BurgerBtn} from "./BurgerBtn/BurgerBtn";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleUp} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";


export const Header = () => {
    const [isActive, setIsActive] = useState(false)
    const toggleButton = () => setIsActive(prevState => !prevState)

    useEffect(() => {
        let photo  = document.getElementById('photo')
        window.addEventListener('mousemove',e => {
            if(photo){
                photo.style.transform = (`translate(${e.screenX / 30}px,${e.screenY / 50}px)`)
            }
        })
    },[])

    return <div className={s.header} id={'Header'}>
        <HeaderNav isActive={isActive} toggleButton={toggleButton}/>
        <BurgerBtn isActive={isActive} toggleButton={toggleButton}/>
        <div className={s.arrowUp}>
            <Link to={'Header'} spy={true} smooth={true} duration={1000}>
                <FontAwesomeIcon icon={faArrowCircleUp} size={'2x'} className={s.btnUp}/>
            </Link>
        </div>
        <Main/>

    </div>
}


