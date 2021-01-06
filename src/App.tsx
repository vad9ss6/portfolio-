
import React from 'react';
import './App.css';
import {Header} from "./Component/Header/Header";
import {MySkills} from "./Component/MySkills/MySkills";
import {MyWorks} from "./Component/MyWorks/MyWorks";
import {IconProp} from "@fortawesome/fontawesome-svg-core";


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
}

const state: stateType = {
    mySkills: [
        {id: 1, iconSvg: ["fab", "js"], title: 'JavaScript', description: '', color:'#E8D44D', animation: 'left'},
        {id: 2, iconSvg: ["fab", "react"], title: 'React', description: '', color:'#5ED3F3', animation: 'left'},
        {id: 2, iconSvg: ["fas", "atom"], title: 'Redux', description: '', color:'#7248B6', animation: 'left'},
        {id: 3, iconSvg: ["fab", "github"], title: 'GitHub', description: '', color:'#161414', animation: 'right'},
        {id: 4, iconSvg: ["fab", "html5"], title: 'HTML5', description: '', color:'#E96228', animation: 'right'},
        {id: 5, iconSvg: ["fab", "css3-alt"], title: 'CSS3', description: '', color:'#28A3D9', animation: 'right'},
    ]
}

export const App = () => {
    return (
        <div className="App">
            <Header/>
            <MySkills skills={state.mySkills}/>
            <MyWorks/>
        </div>
    );
}


