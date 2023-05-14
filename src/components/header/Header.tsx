import React from 'react';
import {Link} from "react-router-dom";
import {UserInfo} from "../userInfo/UserInfo";

import {Theme} from "../theme/Theme";

const Header = () => {


    return (
        <div className={'header-container'}>
            <Link to={'/'} className={'logo'}>
                <b>KINO</b>heaven
            </Link>
            <input className={'search'} type="text" placeholder={'what are you looking for?'}/>
            <Theme/>
            <UserInfo/>

        </div>
    );
};


export {Header}