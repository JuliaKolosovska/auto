import React, {useState, FC, useContext} from 'react';
import {Link} from "react-router-dom";
import {Outlet} from "react-router-dom";
import {useForm} from 'react-hook-form';

import {ThemeSwitcher, ThemeContext, UserInfo} from "../index";
import {useAppDispatch, useAppSelector} from '../../hooks';
import {searchAction} from '../../redux/slices';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { Rating } from 'react-simple-star-rating';


const Header:FC = () => {
    const {currentTheme, toggleTheme} = useContext(ThemeContext);
    const {searched} = useSelector((state: RootState) => state.searchReducer);
    const dispatch = useAppDispatch()
    const [searchTerm, setSearchTerm] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const lim = (name: string): boolean => {
            return name.length >= 2;
        }
        const value = e.target.value;
        setSearchTerm(value);
        console.log(value);
        if (lim(value)) {
            dispatch(searchAction.find({ name: value }));
        } else {
            dispatch(searchAction.resetSearch());
        }
    }

    return (
        <div className={'all-header'}>
            <div className={`header-container ${currentTheme}`}>
                <Link to={'/'} className={`logo ${currentTheme}`}>
                    <b>KINO</b>heaven
                </Link>
                <input className={`search`} type="text"
                       placeholder={'what are you looking for?'} value={searchTerm} onChange={onChange}/>
                <ThemeSwitcher/>
                <UserInfo/>
            </div>

            <div className={`header-searched ${currentTheme}`}>{searched.map((item) => (
                <div className={`movieCard ${currentTheme}`}>
                    <Link to={`/movie/${item.id}`}>
                        <img
                            className="poster"
                            src={item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}` : 'https://ps.w.org/replace-broken-images/assets/icon-256x256.png'}
                            alt={item.title}
                        />
                        <div className={'title-vote'}>
                            <div className={`title ${currentTheme}`}>{item.title}</div>
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
            ))}</div>
        </div>
    );
};


export {Header}