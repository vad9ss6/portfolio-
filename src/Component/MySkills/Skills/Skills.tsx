import React from 'react';
import s from './Skills.module.css'

export const Skills = () => {
    return <div className={s.card}>
        <div className={s.img}>img</div>
        <span className={s.title}>title</span>
        <div className={s.description}>desc</div>
    </div>
}
