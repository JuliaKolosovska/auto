import React, {FC, useState, useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {MovieDetailPage, MoviesPage} from "./pages";
import {ThemeContext, ThemeProvider, ThemeSwitcher} from "./components";


const App: FC = () => {

    const {dark} = useContext(ThemeContext);



    return (

        <ThemeProvider dark={dark}>

            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'movies'}/>}/>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={'movie/:id'} element={<MovieDetailPage/>}/>

                </Route>
            </Routes>
        </ThemeProvider>

    );
}

export default App;
