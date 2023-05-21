import React, {FC, useContext, useEffect, useState} from 'react';
import { UseFormReset } from 'react-hook-form';
import { Link, useSearchParams } from 'react-router-dom';

import { Rating } from 'react-simple-star-rating';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { ISearch } from '../../interfaces';
import {movieActions, searchAction } from '../../redux/slices';
import { ThemeContext } from '../theme/ThemeContext';


export interface ISearchProps {
    newItem: ISearch,
    reset: UseFormReset<{ search: string }>
}

const Search: FC<ISearchProps> = ({newItem, reset})=> {
    // const [moviesSearch, setMoviesSearch] = useState([])
    const { currentTheme, toggleTheme } = useContext(ThemeContext);
    const { movies,currentPage } = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch()
    // const [searchParams] = useSearchParams();
    // const thisPage = searchParams.get('page');
    const onClick = () => {
        dispatch(searchAction.resetSearch())
        reset()
    }

    // useEffect(() => {
    //     setMoviesSearch( movies.filter(movie => movie.title.includes(item.name)))
    //
    //     if (item.name) {
    //         dispatch(movieActions.setPage(thisPage));
    //         dispatch(movieActions.getAll({ currentPage: thisPage}))
    //             .then(({payload}) => setMoviesSearch(payload.results))
    //     }
    // }, [item.name])
    console.log(newItem);
    return (
        <div className={`movieCard ${currentTheme}`}>
        <Link onClick={onClick} to={`/search/keyword?query= ${newItem.name}`}>
            <img className={'poster'} src={"https://image.tmdb.org/t/p/w500/" + newItem.poster_path} alt={newItem.title}></img>
            <div className={'title-vote'}>
                <div className={`title ${currentTheme}`}>{newItem.name}</div>

                <div className={'vote'}>
                    <Rating
                        readonly={true}
                        initialValue={newItem.vote_average}
                        allowFraction={true}
                        iconsCount={10}
                        size={10}
                    />
                </div>
            </div>
        </Link>
        </div>
    );
};

export {Search}