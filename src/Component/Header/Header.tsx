import React, { useState, MouseEvent } from 'react';
import s from './Header.module.css';
import {Main} from "./Main/Main";
import {HeaderNav} from "./HeaderNav/HeaderNav";
import {BurgerBtn} from "./BurgerBtn/BurgerBtn";



export const Header = () => {
    const [isActive, setIsActive] = useState(false)
    const toggleButton = () => setIsActive(prevState => !prevState)

    const watchMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        console.log(e.pageX, e.pageY)
    }
    return <div className={s.header} onMouseMove={(e) => watchMouseMove(e)}>
        <HeaderNav isActive={isActive}/>
        <BurgerBtn isActive={isActive} toggleButton={toggleButton}/>
        <Main/>

    </div>
}


