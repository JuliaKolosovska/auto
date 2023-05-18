import React from 'react';

import {GenreBadge, MoviesList, ThemeSwitcher} from "../components";

const MoviesPage = () => {
    return (
        <div>
<GenreBadge genresIds={[]}/>
            <MoviesList/>

        </div>
    );
};

export {MoviesPage}