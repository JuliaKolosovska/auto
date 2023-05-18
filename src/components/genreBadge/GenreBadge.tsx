import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux/slices";

export interface IBadge {
    genresIds: number[],

}

const GenreBadge:FC<IBadge> = ({genresIds}) => {
    const {movieGenres} = useAppSelector(state => state.genreReducer)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!movieGenres.length ) {
            dispatch(genreActions.getGenres)
        }
    }, [])

    return (
        <div className={'genre-badge'}>
            {genresIds.length > 0 ? movieGenres.map(genre => <div key={genre.id}
                                                               className={'badge-details'}>{genre.name}</div>) : null}
        </div>
    );
};

export {GenreBadge}