import React, {FC, useContext, useEffect, useState} from 'react';
import { UseFormReset } from 'react-hook-form';
import { Link, useSearchParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ISearch } from '../../interfaces';
import {movieActions, searchAction } from '../../redux/slices';
import { ThemeContext } from '../theme/ThemeContext';


export interface ISearchProps {
    item: ISearch,
    reset: UseFormReset<{ search: string }>
}

const Search: FC<ISearchProps> = ({item, reset})=> {
    const [moviesSearch, setMoviesSearch] = useState([])
    const { currentTheme, toggleTheme } = useContext(ThemeContext);
    const { movies,currentPage } = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch()
    const [searchParams] = useSearchParams();
    const thisPage = searchParams.get('page');
    const onClick = () => {
        dispatch(searchAction.resetSearch())
        reset()
    }

    useEffect(() => {
        setMoviesSearch( movies.filter(movie => movie.title.includes(item.name)))

        if (item.name) {
            dispatch(movieActions.setPage(thisPage));
            dispatch(movieActions.getAll({ currentPage: thisPage}))
                .then(({payload}) => setMoviesSearch(payload.results))
        }
    }, [item.name])
    console.log(item);
    return (
        <div className={`movieCard ${currentTheme}`}>
        <Link onClick={onClick} to={`/search/keyword?query= ${item.name}`}>
            {/*<img className={'poster'} src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} alt={item.title}></img>*/}
            <div className={'title-vote'}>
                <div className={`title ${currentTheme}`}>{item.name}</div>

                <div className={'vote'}>
                    <Rating
                        readonly={true}
                        initialValue={item.vote_average}
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