import React from 'react';
import './App.css';
import {Header} from "./Component/Header/Header";
import {MySkills} from "./Component/MySkills/MySkills";


export const App = () => {
  return (
    <div className="App">
      <Header />
      <MySkills />
    </div>
  );
}


