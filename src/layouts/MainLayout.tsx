import React, {useState, FC} from 'react';
import {Header, ThemeProvider, ThemeSwitcher} from "../components";
import {Outlet} from "react-router-dom";



const MainLayout:FC = () => {

    return (
        <ThemeProvider >

            <Header/>

            <Outlet/>
        </ThemeProvider>
    );
};

export {MainLayout}