import React from 'react';
import {UserInfo} from "../userInfo/UserInfo";


const Header = () => {

    return (
        <div>
            <div>

                <div><b>KINO</b>haven</div>
            </div>
            <input type="text" placeholder={'what are you looking for?'}/>
            <UserInfo/>
            
        </div>
    );
};

export {Header}