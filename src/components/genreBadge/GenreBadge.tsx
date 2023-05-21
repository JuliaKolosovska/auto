import React, {FC, useContext, useEffect, useState} from 'react';
import {AxiosError} from "axios";
import {PayloadAction} from "@reduxjs/toolkit";

import {genreActions} from "../../redux/slices";
import {IGenre} from "../../interfaces";
import {ThemeContext} from '../theme/ThemeContext';
import {useAppDispatch, useAppSelector} from "../../hooks";

export interface IBadge {
    genresIds: number[],

}

const GenreBadge: FC<IBadge> = ({genresIds}) => {
    const {movieGenres} = useAppSelector(state => state.genreReducer)
    const [genres, setGenres] = useState<IGenre[]>([])
    const dispatch = useAppDispatch()
    const {currentTheme, toggleTheme} = useContext(ThemeContext);
    useEffect(() => {
        dispatch(genreActions.getGenres())
    }, [])

    return (
        <div className={`genre-badge ${currentTheme}`}>

            {movieGenres.map(genre => (
                <button
                    key={genre.id}
                    className="genres-btn"
                >
                    {genre.name}
                </button>
            ))}

        </div>
    );
};

export {GenreBadge}