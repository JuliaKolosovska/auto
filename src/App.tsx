import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {MoviesPage} from "./pages";


function App() {
  return (
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Navigate to={'movies'}/>}/>
          <Route path={'movies'} element={<MoviesPage/>}/>

        </Route>
      </Routes>
  );
}

export default App;
