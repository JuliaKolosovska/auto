import React, {useState, useEffect, FC, useContext} from 'react';

import './light.css';
import './dark.css';
import {ThemeContext} from "./ThemeContext";

const ThemeSwitcher: React.FC = () => {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);
    // const [currentTheme, setCurrentTheme] = useState('dark');
    //
    // const toggleTheme = () => {
    //     const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    //     setCurrentTheme(newTheme);
    //     document.documentElement.classList.remove('dark', 'light');
    //     document.documentElement.classList.add(newTheme);
    // };
    return (
        <label  className={'switch'}>
            <input className={`${currentTheme}`} onClick={toggleTheme} type="checkbox"/>
            <span className="slider round"></span>
        </label>
    );
};

export {ThemeSwitcher}