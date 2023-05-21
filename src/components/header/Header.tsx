import React, {useState, FC, useContext} from 'react';
import {Link} from "react-router-dom";
import {Outlet} from "react-router-dom";
import {useForm} from 'react-hook-form';

import {ThemeSwitcher, ThemeContext, Search, UserInfo} from "../index";
import {useAppDispatch, useAppSelector} from '../../hooks';
import {searchAction} from '../../redux/slices';


const Header = () => {
    const {currentTheme, toggleTheme} = useContext(ThemeContext);
    const {register, reset} = useForm<{ search: string }>()
    const {searched} = useAppSelector(state => state.searchReducer)
    const dispatch = useAppDispatch()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const lim = (name: string): boolean => {
            return name.length >= 2
        }
        if (lim(e.target.value)) {
            dispatch(searchAction.find({
                name: e.target.value.trim()
            }))
        }
        dispatch(searchAction.resetSearch())

    }
    return (
        <div className={'all-header'}>
            <div className={`header-container ${currentTheme}`}>
                <Link to={'/'} className={`logo ${currentTheme}`}>
                    <b>KINO</b>heaven
                </Link>
                <input className={`search`} type="text"
                       placeholder={'what are you looking for?'} {...register('search')}
                       onChange={onChange}/>
                <ThemeSwitcher/>
                <UserInfo/>
            </div>
            <div className={`header-searched ${currentTheme}`}>{searched.map(item => <Search key={item.id} item={item}
                                                                                             reset={reset}/>)}</div>
        </div>
    );
};


export {Header}