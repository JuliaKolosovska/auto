import React from 'react';

import stepan from './Stepan.jpg'

const UserInfo = () => {
    return (
        <div className={'user-container'}>
            <div className={'user-avatar'}><img src={stepan} alt={'userAvatar'}/></div>
            <div className={'user-name'}>Stepan</div>
        </div>
    );
};

export {UserInfo}