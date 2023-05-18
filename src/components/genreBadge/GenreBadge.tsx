import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux/slices";
import {IGenre} from "../../interfaces";
import { AxiosError } from "axios";

import { PayloadAction } from "@reduxjs/toolkit";

export interface IBadge {
    genresIds: number[],

}

const GenreBadge:FC<IBadge> = ({genresIds}) => {
    const {movieGenres} = useAppSelector(state => state.genreReducer)
    const [genres, setGenres] = useState<IGenre[]>([])
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(genreActions.getGenres())
    }, [])

    return (
        <div className={'genre-badge'}>

            {movieGenres.map(genre => (
                <button

                    key={genre.id}
                    className="genres-btn"
                    // onClick={() => {
                    //     dispatch(genreActions.getGenre(genre))
                    // }}
                >
                    {genre.name}
                </button>
            ))}

        </div>
    );
};

export {GenreBadge}