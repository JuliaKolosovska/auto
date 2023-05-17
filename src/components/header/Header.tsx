import React , {useState,FC} from 'react';
import {Link} from "react-router-dom";
import {UserInfo} from "../userInfo/UserInfo";
import {Outlet} from "react-router-dom";
import {Theme} from "../theme/Theme";

const Header = () => {
    const [theme, setTheme] = useState(false);
    const handleThemeChange = (isDark: boolean) => {
        setTheme(isDark);
    }
    return (
        <div id={'header-container'} className={theme ? 'dark' : 'light'}>
            <Link to={'/'} className={'logo'}>
                <b>KINO</b>heaven
            </Link>
            <input className={'search'} type="text" placeholder={'what are you looking for?'}/>
            <Theme onThemeChange={handleThemeChange}/>
            <UserInfo/>

        </div>
    );
};


export {Header}