import React, {useState} from 'react';
import {Header, ThemeSwitcher} from "../components";
import {Outlet} from "react-router-dom";




const MainLayout = () => {

    return (
        <div >

            <Header/>

            <Outlet/>
        </div>
    );
};

export {MainLayout}