import React, {useState, FC} from 'react';
import {Outlet} from "react-router-dom";

import {Header, ThemeProvider, ThemeSwitcher} from "../components";




const MainLayout:FC = () => {

    return (
        <ThemeProvider >

            <Header/>

            <Outlet/>
        </ThemeProvider>
    );
};

export {MainLayout}