import React, {useState, useEffect, FC} from 'react';

import './light.css';
import './dark.css';

interface ThemeSwitcherProps {
    onThemeChange: (isDark: boolean) => void;
}
const Theme:FC<ThemeSwitcherProps> = ({onThemeChange}) => {
    const [theme, setTheme] = useState(false);

    const toggleTheme = () => {
        const updatedTheme = !theme;
        setTheme(updatedTheme);
        onThemeChange(updatedTheme);
    };


    return (
        <label  className={'switch'}>
            <input className={`Theme ${theme}`} onClick={toggleTheme} type="checkbox"/>
            <span className="slider round"></span>
        </label>
    );
};

export {Theme}