import React, {useState, useEffect, FC, useContext} from 'react';

import './light.css';
import './dark.css';
import {ThemeContext} from "./ThemeContext";

const ThemeSwitcher: React.FC = () => {
    const {currentTheme, toggleTheme} = useContext(ThemeContext);

    return (
        <label className={'switch'}>
            <input className={`${currentTheme}`} onClick={toggleTheme} type="checkbox"/>
            <span className="slider round"></span>
        </label>
    );
};

export {ThemeSwitcher}