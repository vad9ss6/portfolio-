import React, {FC} from 'react';
import s from './BurgerBtn.module.css';
import { HamburgerSpring } from "react-animated-burgers";

type BurgerBtnType = {
    isActive: boolean
    toggleButton: () => void
}
export const BurgerBtn:FC<BurgerBtnType> = ({isActive,toggleButton}) => {
    return <div className={s.burgerBtn}>
        <HamburgerSpring
            buttonStyle={{outline: 'none'}}
            buttonColor='transparent'
            barColor='white'
            {...{ isActive, toggleButton}}  />
    </div>
}


