import React, {useState} from 'react';
import {Header, Theme} from "../components";
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