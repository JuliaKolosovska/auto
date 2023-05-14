import React, {useState, useEffect} from 'react';

import './main.css'

const Theme = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');

            console.log('dark')
        } else {
            setTheme('light');
            console.log('light')
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
            <label  className="switch">
                <input className={`Theme ${theme}`} onClick={toggleTheme} type="checkbox"/>
                <span className="slider round"></span>
            </label>
    );
};

export {Theme}