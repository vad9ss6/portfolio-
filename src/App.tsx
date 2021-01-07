import React from 'react';
import './App.css';
import {Header} from "./Component/Header/Header";
import {MySkills} from "./Component/MySkills/MySkills";
import {MyWorks} from "./Component/MyWorks/MyWorks";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {Contact} from "./Component/Contacts/Contact";
import { Footer } from './Component/Footer/Footer';


export type mySkillsType = {
    id: number
    iconSvg: IconProp
    title: string
    description: string
    color: string
    animation: "down" | "left" | "right" | "up" | undefined
}
type stateType = {
    mySkills: Array<mySkillsType>
    MyWorks: string
    Footer: string
}

const state: stateType = {
    mySkills: [
        {id: 1, iconSvg: ["fab", "js"], title: 'JavaScript', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', color:'#E8D44D', animation: 'left'},
        {id: 2, iconSvg: ["fab", "react"], title: 'React', description: 'Lorem ipsum dolor ', color:'#5ED3F3', animation: 'left'},
        {id: 3, iconSvg: ["fas", "atom"], title: 'Redux', description: 'Lorem ipsum dolor sit amet, consectetur ', color:'#7248B6', animation: 'left'},
        {id: 4, iconSvg: ["fab", "github"], title: 'GitHub', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque delectus inventore itaque maiores, molestias reiciendis sit totam unde vero voluptates?', color:'#161414', animation: 'right'},
        {id: 5, iconSvg: ["fab", "html5"], title: 'HTML5', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque delectus inventore itaque maiores, molestias reiciendis ', color:'#E96228', animation: 'right'},
        {id: 6, iconSvg: ["fab", "css3-alt"], title: 'CSS3', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ', color:'#28A3D9', animation: 'right'},
    ],
    MyWorks: '',
    Footer: ''
}

export const App = () => {
    return (
        <div className="App">
            <Header/>
            <MySkills skills={state.mySkills}/>
            <MyWorks/>
            <Contact />
            <Footer />
        </div>
    );
}


