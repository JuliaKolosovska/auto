import React , {useState,FC, useContext} from 'react';
import {Link} from "react-router-dom";
import {UserInfo} from "../userInfo/UserInfo";
import {Outlet} from "react-router-dom";
import {ThemeSwitcher} from "../theme/ThemeSwitcher";
import {ThemeContext} from "../theme/ThemeContext";

const Header = () => {
    const {toggleTheme}=useContext(ThemeContext)
    // const [theme, setTheme] = useState(false);
    // const handleThemeChange = (isDark: boolean) => {
    //     setTheme(isDark);
    // }
    return (
        <div id={'header-container'} className={toggleTheme ? 'dark' : 'light'}>
            <Link to={'/'} className={'logo'}>
                <b>KINO</b>heaven
            </Link>
            <input className={'search'} type="text" placeholder={'what are you looking for?'}/>
            <ThemeSwitcher />
            <UserInfo/>

        </div>
    );
};


export {Header}